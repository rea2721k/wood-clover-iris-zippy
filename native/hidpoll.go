package main

import (
	"runtime"
	"strings"
	"sync"
	"time"
	"unsafe"

	"golang.org/x/sys/windows"
)

var (
	procHidDGetHidGuid            = hidDll.NewProc("HidD_GetHidGuid")
	procHidDGetAttributes         = hidDll.NewProc("HidD_GetAttributes")
	procHidDGetManufacturerString = hidDll.NewProc("HidD_GetManufacturerString")
	procHidDSetNumInputBuffers    = hidDll.NewProc("HidD_SetNumInputBuffers")
	procHidDGetPreparsedData      = hidDll.NewProc("HidD_GetPreparsedData")
	procHidDFreePreparsedData     = hidDll.NewProc("HidD_FreePreparsedData")
	procHidPGetCaps               = hidDll.NewProc("HidP_GetCaps")
	procSetupDiEnumInterfaces     = setupapi.NewProc("SetupDiEnumDeviceInterfaces")
	procSetupDiGetInterfaceDetail = setupapi.NewProc("SetupDiGetDeviceInterfaceDetailW")
	procCreateFileW               = kernel32.NewProc("CreateFileW")
	procReadFile                  = kernel32.NewProc("ReadFile")
	procCloseHandle               = kernel32.NewProc("CloseHandle")
	procCreateEventW              = kernel32.NewProc("CreateEventW")
	procGetOverlappedResult       = kernel32.NewProc("GetOverlappedResult")
	procWaitForSingleObject       = kernel32.NewProc("WaitForSingleObject")
	procResetEvent                = kernel32.NewProc("ResetEvent")
)

type hidAttributes struct {
	Size          uint32
	VendorID      uint16
	ProductID     uint16
	VersionNumber uint16
}

type spDeviceInterfaceData struct {
	Size               uint32
	InterfaceClassGuid guid
	Flags              uint32
	Reserved           uintptr
}

type hidpCaps struct {
	Usage                     uint16
	UsagePage                 uint16
	InputReportByteLength     uint16
	OutputReportByteLength    uint16
	FeatureReportByteLength   uint16
	Reserved                  [17]uint16
	NumberLinkCollectionNodes uint16
	NumberInputButtonCaps     uint16
	NumberInputValueCaps      uint16
	NumberInputDataIndices    uint16
	NumberOutputButtonCaps    uint16
	NumberOutputValueCaps     uint16
	NumberOutputDataIndices   uint16
	NumberFeatureButtonCaps   uint16
	NumberFeatureValueCaps    uint16
	NumberFeatureDataIndices  uint16
}

type overlapped struct {
	Internal     uintptr
	InternalHigh uintptr
	Offset       uint32
	OffsetHigh   uint32
	HEvent       windows.Handle
}

type hidSrc struct {
	ring stampRing
	name string
	path string
	vid  uint16
	pid  uint16
}

type hidCapInfo struct {
	path   string
	page   uint16
	usage  uint16
	inLen  uint16
	outLen uint16
	vid    uint16
	pid    uint16
	name   string
}

type PollDevice struct {
	Name    string  `json:"name"`
	Path    string  `json:"path"`
	VidPid  string  `json:"vidpid"`
	Hz      float64 `json:"hz"`
	Reports int     `json:"reports"`
}

const (
	digcfDeviceInterface = 0x00000010
	genericRead          = 0x80000000
	genericWrite         = 0x40000000
	fileShareRW          = 0x00000003
	openExisting         = 3
	fileFlagOverlapped   = 0x40000000
	waitInfinite         = 0xFFFFFFFF
)

var hidOnce sync.Once
var hidStarted sync.Map
var hidSources sync.Map
var selectedPath string
var selectedMu sync.Mutex

func startHidPollers() {
	hidOnce.Do(func() {
		go func() {
			defer func() { recover() }()
			for {
				for _, info := range hidCapsList() {
					if isUlxControl(info) {
						continue
					}
					if _, loaded := hidStarted.LoadOrStore(info.path, true); loaded {
						continue
					}
					go readHidReports(info)
				}
				time.Sleep(8 * time.Second)
			}
		}()
	})
}

func hidRawDevices(hwnd windows.Handle) []rawInputDevice {
	seen := map[uint32]bool{0x00010002: true}
	out := []rawInputDevice{{UsagePage: 0x01, Usage: 0x02, Flags: ridEVInputSink, Target: hwnd}}
	for _, info := range hidCapsList() {
		if info.page == 0 || info.usage == 0 {
			continue
		}
		key := uint32(info.page)<<16 | uint32(info.usage)
		if seen[key] {
			continue
		}
		seen[key] = true
		out = append(out, rawInputDevice{UsagePage: info.page, Usage: info.usage, Flags: ridEVInputSink, Target: hwnd})
	}
	return out
}

func listPollDevices() []PollDevice {
	out := []PollDevice{}
	hidSources.Range(func(_, v any) bool {
		s := v.(*hidSrc)
		hz, n := s.rate()
		out = append(out, PollDevice{Name: s.name, Path: s.path, VidPid: formatVidPid(s.vid, s.pid), Hz: hz, Reports: n})
		return true
	})
	for i := 0; i < len(out); i++ {
		for j := i + 1; j < len(out); j++ {
			if out[j].Hz > out[i].Hz {
				out[i], out[j] = out[j], out[i]
			}
		}
	}
	return out
}

func setPollDevice(path string) {
	selectedMu.Lock()
	selectedPath = path
	selectedMu.Unlock()
}

func (s *hidSrc) add() {
	s.ring.add(1, qpcNow())
}

func (s *hidSrc) rate() (float64, int) {
	hz, n := s.ring.window(180_000_000)
	if n >= 8 && hz > 0 {
		return hz, n
	}
	return s.ring.window(1_000_000_000)
}

func peakHidHz() (hz float64, reports int, name, path string) {
	selectedMu.Lock()
	want := selectedPath
	selectedMu.Unlock()
	hidSources.Range(func(_, v any) bool {
		s := v.(*hidSrc)
		if want != "" && s.path != want {
			return true
		}
		h, n := s.rate()
		if want != "" || h > hz {
			hz, reports, name, path = h, n, s.name, s.path
		}
		return true
	})
	return
}

func hidGuid() guid {
	var g guid
	procHidDGetHidGuid.Call(uintptr(unsafe.Pointer(&g)))
	if g.Data1 == 0 {
		g = guid{0x4D1E55B2, 0xF16F, 0x11CF, [8]byte{0x88, 0xCB, 0x00, 0x11, 0x11, 0x00, 0x00, 0x30}}
	}
	return g
}

func hidCapsList() []hidCapInfo {
	g := hidGuid()
	handle, _, _ := procSetupDiGetClassDevsW.Call(uintptr(unsafe.Pointer(&g)), 0, 0, digcfPresent|digcfDeviceInterface)
	if handle == 0 || handle == ^uintptr(0) {
		return nil
	}
	defer procSetupDiDestroyDeviceInfo.Call(handle)
	out := []hidCapInfo{}
	for i := uint32(0); i < 256; i++ {
		var iface spDeviceInterfaceData
		iface.Size = uint32(unsafe.Sizeof(iface))
		r, _, _ := procSetupDiEnumInterfaces.Call(handle, 0, uintptr(unsafe.Pointer(&g)), uintptr(i), uintptr(unsafe.Pointer(&iface)))
		if r == 0 {
			break
		}
		p := interfacePath(handle, &iface)
		if p == "" {
			continue
		}
		low := strings.ToLower(p)
		if strings.Contains(low, "kbd") {
			continue
		}
		info, ok := inspectHid(p)
		if !ok {
			continue
		}
		out = append(out, info)
	}
	return out
}

func inspectHid(path string) (hidCapInfo, bool) {
	p, err := windows.UTF16PtrFromString(path)
	if err != nil {
		return hidCapInfo{}, false
	}
	h := openHid(p, false)
	if h == 0 {
		return hidCapInfo{}, false
	}
	defer procCloseHandle.Call(h)
	var attr hidAttributes
	attr.Size = uint32(unsafe.Sizeof(attr))
	procHidDGetAttributes.Call(h, uintptr(unsafe.Pointer(&attr)))
	prod := hidString(h, procHidDGetProductString)
	manu := hidString(h, procHidDGetManufacturerString)
	if !keepHidPath(prod, manu, attr.VendorID, path) {
		return hidCapInfo{}, false
	}
	caps := hidCaps(h)
	inLen := caps.InputReportByteLength
	if inLen < 3 {
		inLen = 65
	}
	name := labelMouse(attr.VendorID, attr.ProductID, prod, manu)
	return hidCapInfo{
		path:   path,
		page:   caps.UsagePage,
		usage:  caps.Usage,
		inLen:  inLen,
		outLen: caps.OutputReportByteLength,
		vid:    attr.VendorID,
		pid:    attr.ProductID,
		name:   name,
	}, true
}

func openHid(p *uint16, overlapped bool) uintptr {
	return openHidAccess(p, overlapped, []uint32{genericRead | genericWrite, genericRead, 0})
}

func openHidRead(p *uint16, overlapped bool) uintptr {
	return openHidAccess(p, overlapped, []uint32{genericRead, genericRead | genericWrite})
}

func openHidAccess(p *uint16, overlapped bool, access []uint32) uintptr {
	flags := uint32(0)
	if overlapped {
		flags = fileFlagOverlapped
	}
	for _, a := range access {
		h, _, _ := procCreateFileW.Call(uintptr(unsafe.Pointer(p)), uintptr(a), fileShareRW, 0, openExisting, uintptr(flags), 0)
		if h != 0 && h != ^uintptr(0) {
			return h
		}
	}
	return 0
}

func hidCaps(h uintptr) hidpCaps {
	var pre uintptr
	var caps hidpCaps
	r, _, _ := procHidDGetPreparsedData.Call(h, uintptr(unsafe.Pointer(&pre)))
	if r == 0 || pre == 0 {
		return caps
	}
	procHidPGetCaps.Call(pre, uintptr(unsafe.Pointer(&caps)))
	procHidDFreePreparsedData.Call(pre)
	return caps
}

func interfacePath(devInfo uintptr, iface *spDeviceInterfaceData) string {
	var need uint32
	procSetupDiGetInterfaceDetail.Call(devInfo, uintptr(unsafe.Pointer(iface)), 0, 0, uintptr(unsafe.Pointer(&need)), 0)
	if need < 8 {
		return ""
	}
	buf := make([]byte, need+16)
	*(*uint32)(unsafe.Pointer(&buf[0])) = 8
	r, _, _ := procSetupDiGetInterfaceDetail.Call(devInfo, uintptr(unsafe.Pointer(iface)), uintptr(unsafe.Pointer(&buf[0])), uintptr(need), uintptr(unsafe.Pointer(&need)), 0)
	if r == 0 {
		return ""
	}
	n := (int(need) - 8) / 2
	if n < 4 {
		n = int(len(buf)-8) / 2
	}
	if n <= 0 {
		return ""
	}
	u := unsafe.Slice((*uint16)(unsafe.Pointer(&buf[8])), n)
	return windows.UTF16ToString(u)
}

func readHidReports(info hidCapInfo) {
	defer func() { recover() }()
	runtime.LockOSThread()
	if th, _, _ := procGetCurrentThread.Call(); th != 0 {
		procSetThreadPriority.Call(th, threadAboveNormal)
	}
	p, err := windows.UTF16PtrFromString(info.path)
	if err != nil {
		return
	}
	src := &hidSrc{name: info.name, path: info.path, vid: info.vid, pid: info.pid}
	hidSources.Store(info.path, src)
	eng.noteHidDevice(info.name, info.vid, info.pid, info.path)
	nbuf := int(info.inLen)
	if nbuf < 8 {
		nbuf = 65
	}
	if nbuf > 1024 {
		nbuf = 1024
	}
	for {
		if !hidReadLoop(p, nbuf, src) {
			time.Sleep(200 * time.Millisecond)
		}
	}
}

func hidReadLoop(p *uint16, nbuf int, src *hidSrc) bool {
	h := openHidRead(p, true)
	if h == 0 {
		h = openHidRead(p, false)
		if h == 0 {
			return false
		}
		defer procCloseHandle.Call(h)
		procHidDSetNumInputBuffers.Call(h, 512)
		buf := make([]byte, nbuf)
		var read uint32
		for {
			r, _, _ := procReadFile.Call(h, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)), uintptr(unsafe.Pointer(&read)), 0)
			if r == 0 {
				return true
			}
			if read > 0 {
				src.add()
			}
		}
	}
	defer procCloseHandle.Call(h)
	procHidDSetNumInputBuffers.Call(h, 512)
	ev, _, _ := procCreateEventW.Call(0, 1, 0, 0)
	if ev == 0 {
		return false
	}
	defer procCloseHandle.Call(ev)
	buf := make([]byte, nbuf)
	var ov overlapped
	ov.HEvent = windows.Handle(ev)
	for {
		procResetEvent.Call(ev)
		ov.Internal = 0
		ov.InternalHigh = 0
		ov.Offset = 0
		ov.OffsetHigh = 0
		var read uint32
		r, _, _ := procReadFile.Call(h, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)), uintptr(unsafe.Pointer(&read)), uintptr(unsafe.Pointer(&ov)))
		if r == 0 {
			wr, _, _ := procWaitForSingleObject.Call(ev, uintptr(waitInfinite))
			if wr != 0 {
				return true
			}
			ok, _, _ := procGetOverlappedResult.Call(h, uintptr(unsafe.Pointer(&ov)), uintptr(unsafe.Pointer(&read)), 1)
			if ok == 0 {
				return true
			}
		}
		if read > 0 {
			src.add()
		}
	}
}

func keepHidPath(product, manufacturer string, vid uint16, path string) bool {
	s := strings.ToLower(product + " " + manufacturer + " " + path)
	if strings.Contains(s, "keyboard") || strings.Contains(s, "headset") || strings.Contains(s, "audio") || strings.Contains(s, "microphone") {
		return false
	}
	if strings.Contains(s, "mouse") || strings.Contains(s, "finalmouse") || strings.Contains(s, "ultralight") || strings.Contains(s, "starlight") || strings.Contains(s, "dongle") || strings.Contains(s, "receiver") {
		return true
	}
	switch vid {
	case 0x361D, 0x1532, 0x046D, 0x1038, 0x1B1C, 0x0951, 0x258A, 0x0B05, 0x37D3, 0x36A7, 0x3554, 0x3434, 0x373B, 0x3367, 0x5043, 0x373E, 0x2DC8, 0x1D57:
		return true
	}
	return false
}

func hidString(h uintptr, proc *windows.LazyProc) string {
	buf := make([]uint16, 127)
	r, _, _ := proc.Call(h, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)*2))
	if r == 0 {
		return ""
	}
	return strings.TrimSpace(windows.UTF16ToString(buf))
}

func formatVidPid(vid, pid uint16) string {
	return "VID " + hex4(vid) + " · PID " + hex4(pid)
}

func hex4(v uint16) string {
	const h = "0123456789ABCDEF"
	return string([]byte{h[v>>12], h[(v>>8)&0xF], h[(v>>4)&0xF], h[v&0xF]})
}
