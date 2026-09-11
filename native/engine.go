package main

import (
	"regexp"
	"runtime"
	"strings"
	"sync"
	"syscall"
	"time"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	wmInput             = 0x00FF
	wmDestroy           = 0x0002
	ridEVInputSink      = 0x00000100
	rimTypeMouse        = 0
	ridiDevicename      = 0x20000007
	ridInput            = 0x10000003
	hwndMessage         = ^uintptr(2) // HWND_MESSAGE = -3
	enumCurrentSettings = 0xFFFFFFFF
	displayPrimary      = 0x00000004
	ridEVNoLegacy       = 0x00000030
	pmRemove            = 0x0001
	wsPopup             = 0x80000000
	wsExNoActivate      = 0x08000000
	wsExToolwindow      = 0x00000080
	rimTypeHid          = 2
	ridInputHeader      = 0x10000005
	threadTimeCritical  = 15
	threadHighest       = 2
	threadAboveNormal   = 1
	highPriorityClass   = 0x00000080
	qsAllInput          = 0x04FF
)

var (
	user32                        = windows.NewLazySystemDLL("user32.dll")
	kernel32                      = windows.NewLazySystemDLL("kernel32.dll")
	procRegisterClassExW          = user32.NewProc("RegisterClassExW")
	procCreateWindowExW           = user32.NewProc("CreateWindowExW")
	procDefWindowProcW            = user32.NewProc("DefWindowProcW")
	procTranslateMessage          = user32.NewProc("TranslateMessage")
	procDispatchMessageW          = user32.NewProc("DispatchMessageW")
	procRegisterRawInputDevices   = user32.NewProc("RegisterRawInputDevices")
	procGetRawInputDeviceList     = user32.NewProc("GetRawInputDeviceList")
	procGetRawInputDeviceInfoW    = user32.NewProc("GetRawInputDeviceInfoW")
	procGetRawInputData           = user32.NewProc("GetRawInputData")
	procGetRawInputBuffer         = user32.NewProc("GetRawInputBuffer")
	procPeekMessageW              = user32.NewProc("PeekMessageW")
	procShowWindow                = user32.NewProc("ShowWindow")
	procTimeBeginPeriod           = windows.NewLazySystemDLL("winmm.dll").NewProc("timeBeginPeriod")
	procSetThreadPriority         = kernel32.NewProc("SetThreadPriority")
	procSetThreadAffinityMask     = kernel32.NewProc("SetThreadAffinityMask")
	procGetCurrentThread          = kernel32.NewProc("GetCurrentThread")
	procGetCurrentProcess         = kernel32.NewProc("GetCurrentProcess")
	procSetPriorityClass          = kernel32.NewProc("SetPriorityClass")
	procMsgWaitForMultipleObjects = user32.NewProc("MsgWaitForMultipleObjects")
	procGetModuleHandleW          = kernel32.NewProc("GetModuleHandleW")
	procEnumDisplayDevicesW       = user32.NewProc("EnumDisplayDevicesW")
	procEnumDisplaySettingsW      = user32.NewProc("EnumDisplaySettingsW")
)

type rawInputDevice struct {
	UsagePage uint16
	Usage     uint16
	Flags     uint32
	Target    windows.Handle
}

type rawInputDeviceList struct {
	Device windows.Handle
	Type   uint32
}

type wndClassEx struct {
	Size       uint32
	Style      uint32
	WndProc    uintptr
	ClsExtra   int32
	WndExtra   int32
	Instance   windows.Handle
	Icon       windows.Handle
	Cursor     windows.Handle
	Background windows.Handle
	MenuName   *uint16
	ClassName  *uint16
	IconSm     windows.Handle
}

type msg struct {
	Hwnd    windows.Handle
	Message uint32
	WParam  uintptr
	LParam  uintptr
	Time    uint32
	Pt      struct{ X, Y int32 }
}

type displayDevice struct {
	Cb           uint32
	DeviceName   [32]uint16
	DeviceString [128]uint16
	StateFlags   uint32
	DeviceID     [128]uint16
	DeviceKey    [128]uint16
}

type point struct{ X, Y int32 }

type devmodeW struct {
	DeviceName         [32]uint16
	SpecVersion        uint16
	DriverVersion      uint16
	Size               uint16
	DriverExtra        uint16
	Fields             uint32
	Position           point
	DisplayOrientation uint32
	DisplayFixedOutput uint32
	Color              int16
	Duplex             int16
	YResolution        int16
	TTOption           int16
	Collate            int16
	FormName           [32]uint16
	LogPixels          uint16
	BitsPerPel         uint32
	PelsWidth          uint32
	PelsHeight         uint32
	DisplayFlags       uint32
	DisplayFrequency   uint32
	ICMMethod          uint32
	ICMIntent          uint32
	MediaType          uint32
	DitherType         uint32
	Reserved1          uint32
	Reserved2          uint32
	PanningWidth       uint32
	PanningHeight      uint32
}

type MouseDev struct {
	Name   string `json:"name"`
	VidPid string `json:"vidpid"`
	Path   string `json:"path"`
}

type DisplayDev struct {
	MonitorName  string `json:"monitorName"`
	Brand        string `json:"brand"`
	Model        string `json:"model"`
	Manufacturer string `json:"manufacturer"`
	Connection   string `json:"connection"`
	Width        int    `json:"width"`
	Height       int    `json:"height"`
	Refresh      int    `json:"refresh"`
	Primary      bool   `json:"primary"`
	Path         string `json:"path,omitempty"`
	ProductCode  string `json:"productCode,omitempty"`
}

type PollSnapshot struct {
	Hz            float64   `json:"hz"`
	AvgIntervalMs float64   `json:"avgIntervalMs"`
	JitterMs      float64   `json:"jitterMs"`
	P95Ms         float64   `json:"p95Ms"`
	Consistency   float64   `json:"consistency"`
	State         string    `json:"state"`
	Samples       []float64 `json:"samples"`
	Reports       int       `json:"reports"`
	Source        string    `json:"source"`
	Device        string    `json:"device"`
}

type rawInputHeader struct {
	Type   uint32
	Size   uint32
	Device windows.Handle
	WParam uintptr
}

type engine struct {
	mu         sync.Mutex
	raw        stampRing
	hidName    string
	hidVidPid  string
	testFrom   time.Time
	testUntil  time.Time
	testing    bool
	lastHz     float64
	lastReport int64
	hist       []float64
}

var eng = &engine{}

var rawBuf = make([]byte, 1024*1024)
var rawOne [8192]byte

var wndProcCallback = syscall.NewCallback(wndProc)

func wndProc(hwnd, msg, wParam, lParam uintptr) uintptr {
	if msg == wmInput {
		readRawInput(lParam)
		drainRawBuffer()
		return 0
	}
	r, _, _ := procDefWindowProcW.Call(hwnd, msg, wParam, lParam)
	return r
}

func (e *engine) addPackets(n int, t int64) {
	e.raw.add(n, t)
}

func (e *engine) addHidPackets(n int, t int64) {
	e.raw.add(n, t)
}

func (e *engine) noteHidDevice(name string, vid, pid uint16, path string) {
	if name == "" {
		return
	}
	e.mu.Lock()
	if e.hidName == "" || isGenericMouse(e.hidName) || strings.Contains(strings.ToLower(name), "finalmouse") {
		e.hidName = name
		e.hidVidPid = formatVidPid(vid, pid)
	}
	e.mu.Unlock()
}

func countRawBlock(buf []byte, off int, hs int) (n int, next int) {
	if off+hs > len(buf) {
		return 0, off
	}
	h := (*rawInputHeader)(unsafe.Pointer(&buf[off]))
	sz := int(h.Size)
	if sz < hs {
		return 0, len(buf)
	}
	next = (off + sz + 7) &^ 7
	switch h.Type {
	case rimTypeMouse:
		return 1, next
	case rimTypeHid:
		if off+hs+8 <= len(buf) {
			c := int(*(*uint32)(unsafe.Pointer(&buf[off+hs+4])))
			if c < 1 {
				c = 1
			}
			if c > 32 {
				c = 1
			}
			return c, next
		}
		return 1, next
	default:
		return 0, next
	}
}

func readRawInput(lParam uintptr) {
	defer func() { recover() }()
	headerSize := uint32(unsafe.Sizeof(rawInputHeader{}))
	size := uint32(len(rawOne))
	n, _, _ := procGetRawInputData.Call(lParam, ridInput, uintptr(unsafe.Pointer(&rawOne[0])), uintptr(unsafe.Pointer(&size)), uintptr(headerSize))
	if uint32(n) == 0xffffffff || n == 0 {
		return
	}
	c, _ := countRawBlock(rawOne[:n], 0, int(headerSize))
	if c > 0 {
		eng.addPackets(c, qpcNow())
	}
}

func drainRawBuffer() int {
	defer func() { recover() }()
	headerSize := uint32(unsafe.Sizeof(rawInputHeader{}))
	total := 0
	now := qpcNow()
	for steps := 0; steps < 256; steps++ {
		size := uint32(len(rawBuf))
		n, _, _ := procGetRawInputBuffer.Call(
			uintptr(unsafe.Pointer(&rawBuf[0])),
			uintptr(unsafe.Pointer(&size)),
			uintptr(headerSize),
		)
		ni := int32(n)
		if ni == -1 {
			break
		}
		if ni <= 0 {
			break
		}
		off := 0
		hs := int(headerSize)
		for i := 0; i < int(ni) && off+hs <= len(rawBuf); i++ {
			c, next := countRawBlock(rawBuf, off, hs)
			total += c
			if next <= off {
				break
			}
			off = next
		}
	}
	if total > 0 {
		eng.addPackets(total, now)
	}
	return total
}

func startRawInput() error {
	runtime.LockOSThread()
	initQPC()
	procTimeBeginPeriod.Call(1)
	if proc, _, _ := procGetCurrentProcess.Call(); proc != 0 {
		procSetPriorityClass.Call(proc, highPriorityClass)
	}
	if th, _, _ := procGetCurrentThread.Call(); th != 0 {
		procSetThreadPriority.Call(th, threadHighest)
		if runtime.NumCPU() > 2 {
			procSetThreadAffinityMask.Call(th, 2) // CPU 1 — leave CPU 0 for UI/DWM
		}
	}
	className, _ := windows.UTF16PtrFromString("SensLabRawWnd")
	hInstance, _, _ := procGetModuleHandleW.Call(0)
	wc := wndClassEx{
		Size:      uint32(unsafe.Sizeof(wndClassEx{})),
		WndProc:   wndProcCallback,
		Instance:  windows.Handle(hInstance),
		ClassName: className,
	}
	procRegisterClassExW.Call(uintptr(unsafe.Pointer(&wc)))
	ex := uintptr(wsExNoActivate | wsExToolwindow)
	hwnd, _, err := procCreateWindowExW.Call(ex, uintptr(unsafe.Pointer(className)), 0, wsPopup, 0, 0, 8, 8, 0, 0, hInstance, 0)
	if hwnd == 0 {
		hwnd, _, err = procCreateWindowExW.Call(0, uintptr(unsafe.Pointer(className)), 0, 0, 0, 0, 0, 0, hwndMessage, 0, hInstance, 0)
	}
	if hwnd == 0 {
		return err
	}
	procShowWindow.Call(hwnd, 4) // SW_SHOWNOACTIVATE
	dev := rawInputDevice{
		UsagePage: 0x01,
		Usage:     0x02,
		Flags:     ridEVInputSink,
		Target:    windows.Handle(hwnd),
	}
	r, _, err2 := procRegisterRawInputDevices.Call(uintptr(unsafe.Pointer(&dev)), 1, unsafe.Sizeof(dev))
	if r == 0 {
		return err2
	}
	var m msg
	for {
		for {
			got, _, _ := procPeekMessageW.Call(uintptr(unsafe.Pointer(&m)), 0, 0, 0, pmRemove)
			if got == 0 {
				break
			}
			if m.Message == wmInput {
				readRawInput(m.LParam)
				drainRawBuffer()
				continue
			}
			if m.Message == wmDestroy || int32(m.Message) == 0x0012 {
				return nil
			}
			procTranslateMessage.Call(uintptr(unsafe.Pointer(&m)))
			procDispatchMessageW.Call(uintptr(unsafe.Pointer(&m)))
		}
		drainRawBuffer()
		procMsgWaitForMultipleObjects.Call(0, 0, 0, 1, qsAllInput)
	}
}

func (e *engine) snapshot() PollSnapshot {
	hidHz, hidN, hidName, _ := peakHidHz()
	rawHz, rawN := e.raw.window(180_000_000)
	raw1s, raw1n := e.raw.window(1_000_000_000)
	e.mu.Lock()
	defer e.mu.Unlock()
	now := qpcNow()
	hzIn := hidHz
	srcName := "hid"
	reports := hidN
	device := hidName
	if rawHz > hzIn {
		hzIn = rawHz
		srcName = "raw"
		reports = raw1n
		if reports < rawN {
			reports = rawN
		}
		device = e.hidName
	} else if hidN > 0 {
		reports = hidN
	}
	if raw1s > hzIn {
		// 1s window is Razer's dial; prefer it only when instant hasn't filled yet AND it's higher than idle noise
		if hzIn < 40 {
			hzIn = raw1s
			srcName = "raw"
			reports = raw1n
		}
	}
	state := "LIVE"
	if e.testing {
		state = "RUNNING"
		if time.Now().After(e.testUntil) {
			e.testing = false
			state = "COMPLETE"
			if hzIn < 40 {
				state = "NO_INPUT"
			}
		}
	}
	if hzIn < 40 {
		if e.lastReport != 0 && now-e.lastReport > qpcTicks(250_000_000) {
			e.lastHz = 0
		}
		return PollSnapshot{State: state, Hz: e.lastHz, Samples: append([]float64(nil), e.hist...), Reports: reports, Source: srcName, Device: device}
	}
	e.lastReport = now
	avg := 0.0
	if hzIn > 0 {
		avg = 1000.0 / hzIn
	}
	e.lastHz = hzIn
	e.hist = append(e.hist, hzIn)
	if len(e.hist) > 96 {
		e.hist = e.hist[len(e.hist)-96:]
	}
	near := snapRate(hzIn)
	cons := 100.0
	if near > 0 {
		d := hzIn - near
		if d < 0 {
			d = -d
		}
		cons = 100.0 - (d/near)*100
		if cons < 0 {
			cons = 0
		}
		if cons > 100 {
			cons = 100
		}
	}
	return PollSnapshot{
		Hz: hzIn, AvgIntervalMs: avg, JitterMs: 0, P95Ms: avg,
		Consistency: cons, State: state, Samples: append([]float64(nil), e.hist...),
		Reports: reports, Source: srcName, Device: device,
	}
}

func snapRate(hz float64) float64 {
	if hz < 80 {
		return 0
	}
	switch {
	case hz >= 5600:
		return 8000
	case hz >= 2800:
		return 4000
	case hz >= 1400:
		return 2000
	case hz >= 750:
		return 1000
	case hz >= 375:
		return 500
	case hz >= 180:
		return 250
	default:
		return 125
	}
}

func (e *engine) startTest(d time.Duration) {
	e.mu.Lock()
	e.testing = true
	e.testFrom = time.Now()
	e.testUntil = e.testFrom.Add(d)
	e.lastHz = 0
	e.lastReport = 0
	e.hist = e.hist[:0]
	e.mu.Unlock()
}

func sqrt(x float64) float64 {
	z := x
	if z <= 0 {
		return 0
	}
	for i := 0; i < 12; i++ {
		z = z - (z*z-x)/(2*z)
	}
	return z
}

var vidRe = regexp.MustCompile(`(?i)VID_([0-9A-F]{4})&PID_([0-9A-F]{4})`)

func listMice() []MouseDev {
	named := listMiceSetupAPI()
	raw := listMiceRaw()
	out := []MouseDev{}
	seen := map[string]bool{}
	add := func(m MouseDev) {
		if m.Name == "" {
			return
		}
		key := strings.ToLower(m.VidPid + "|" + m.Name)
		if m.VidPid == "" {
			key = strings.ToLower(m.Name + "|" + m.Path)
		}
		if seen[key] {
			return
		}
		seen[key] = true
		out = append(out, m)
	}
	if d, ok := eng.hidDevice(); ok {
		add(d)
	}
	for _, m := range named {
		add(m)
	}
	for _, m := range raw {
		add(m)
	}
	rankMice(out)
	return out
}

func (e *engine) hidDevice() (MouseDev, bool) {
	e.mu.Lock()
	defer e.mu.Unlock()
	if e.hidName == "" {
		return MouseDev{}, false
	}
	return MouseDev{Name: e.hidName, VidPid: e.hidVidPid}, true
}

func rankMice(ms []MouseDev) {
	score := func(n string) int {
		l := strings.ToLower(n)
		s := 0
		if strings.Contains(l, "finalmouse") || strings.Contains(l, "ultralight") {
			s += 50
		}
		if strings.Contains(l, "razer") || strings.Contains(l, "logitech") || strings.Contains(l, "lamzu") {
			s += 20
		}
		if isGenericMouse(n) {
			s -= 30
		}
		if strings.Contains(l, "ps/2") || strings.Contains(l, "terminal") {
			s -= 80
		}
		return s
	}
	for i := 0; i < len(ms); i++ {
		for j := i + 1; j < len(ms); j++ {
			if score(ms[j].Name) > score(ms[i].Name) {
				ms[i], ms[j] = ms[j], ms[i]
			}
		}
	}
}

func isGenericMouse(name string) bool {
	l := strings.ToLower(name)
	return strings.Contains(l, "hid-compliant") || strings.Contains(l, "usb input") || strings.Contains(l, "hid mouse") || l == "mouse"
}

func labelMouse(vid, pid uint16, product, manufacturer string) string {
	p := strings.TrimSpace(product)
	m := strings.TrimSpace(manufacturer)
	blob := strings.ToLower(p + " " + m)
	if strings.Contains(blob, "finalmouse") || strings.Contains(blob, "ultralightx") || strings.Contains(blob, "ultralight x") {
		if p != "" && !isGenericMouse(p) {
			return p
		}
		return "Finalmouse UltralightX"
	}
	if vid == 0x361D {
		if p != "" && !isGenericMouse(p) {
			return "Finalmouse " + p
		}
		return "Finalmouse UltralightX"
	}
	if p != "" && !isGenericMouse(p) {
		return p
	}
	if n, ok := knownVID[hex4(vid)+":"+hex4(pid)]; ok {
		return n
	}
	if n, ok := knownVID[hex4(vid)]; ok {
		if p != "" {
			return n + " " + p
		}
		return n + " mouse"
	}
	if p != "" {
		return p
	}
	return "HID mouse " + hex4(vid) + ":" + hex4(pid)
}

func listMiceRaw() []MouseDev {
	var n uint32
	procGetRawInputDeviceList.Call(0, uintptr(unsafe.Pointer(&n)), unsafe.Sizeof(rawInputDeviceList{}))
	if n == 0 {
		return nil
	}
	buf := make([]rawInputDeviceList, n)
	procGetRawInputDeviceList.Call(uintptr(unsafe.Pointer(&buf[0])), uintptr(unsafe.Pointer(&n)), unsafe.Sizeof(rawInputDeviceList{}))
	out := []MouseDev{}
	for i := uint32(0); i < n; i++ {
		if buf[i].Type != rimTypeMouse {
			continue
		}
		var chars uint32
		procGetRawInputDeviceInfoW.Call(uintptr(buf[i].Device), ridiDevicename, 0, uintptr(unsafe.Pointer(&chars)))
		if chars == 0 {
			continue
		}
		nameBuf := make([]uint16, chars)
		procGetRawInputDeviceInfoW.Call(uintptr(buf[i].Device), ridiDevicename, uintptr(unsafe.Pointer(&nameBuf[0])), uintptr(unsafe.Pointer(&chars)))
		path := windows.UTF16ToString(nameBuf)
		vidpid := ""
		name := hidProductName(path)
		if m := vidRe.FindStringSubmatch(path); len(m) == 3 {
			vidpid = "VID " + m[1] + " · PID " + m[2]
			if name == "" {
				name = friendlyMouse(m[1], m[2], path)
			}
		}
		if name == "" {
			name = "HID mouse"
		}
		out = append(out, MouseDev{Name: name, VidPid: vidpid, Path: path})
	}
	return out
}

func friendlyMouse(vid, pid, path string) string {
	vid = strings.ToUpper(vid)
	pid = strings.ToUpper(pid)
	blob := strings.ToLower(path)
	if strings.Contains(blob, "finalmouse") || vid == "361D" {
		return "Finalmouse UltralightX"
	}
	key := vid + ":" + pid
	if n, ok := knownVID[key]; ok {
		return n
	}
	if n, ok := knownVID[vid]; ok {
		return n + " mouse"
	}
	return "HID mouse " + vid + ":" + pid
}

var knownVID = map[string]string{
	"361D": "Finalmouse",
	"046D": "Logitech",
	"1532": "Razer",
	"0951": "HyperX",
	"258A": "Pulsar/Glorious",
	"3434": "Keychron",
	"1B1C": "Corsair",
	"1038": "SteelSeries",
	"0B05": "ASUS ROG",
	"2DC8": "8BitDo",
	"1D57": "Attack Shark",
	"37D3": "LAMZU",
	"373E": "LAMZU",
	"1E7D": "ROCCAT",
	"04D9": "Holtek",
	"0C45": "MSI/Tecware",
	"1BCF": "Vaxee",
	"3554": "Zaunkoenig",
	"5043": "Pwnage",
	"36A7": "Endgame Gear",
	"3367": "Endgame Gear",
	"373B": "ATK",
}
