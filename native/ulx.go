package main

import (
	"runtime"
	"strings"
	"sync"
	"time"
	"unsafe"

	"golang.org/x/sys/windows"
)

type UlxInfo struct {
	Connected  bool   `json:"connected"`
	Name       string `json:"name"`
	VidPid     string `json:"vidpid"`
	PollHz     int    `json:"pollHz"`
	Dpi        int    `json:"dpi"`
	LodMm      int    `json:"lodMm"`
	MotionSync int    `json:"motionSync"`
	BatteryPct int    `json:"batteryPct"`
	Firmware   string `json:"firmware"`
	DongleFw   string `json:"dongleFw"`
	Serial     string `json:"serial"`
	Rssi       int    `json:"rssi"`
	Charging   int    `json:"charging"`
}

type ulxTarget struct {
	info UlxInfo
	path string
	in   int
	out  int
}

var (
	ulxMu    sync.Mutex
	ulxCache UlxInfo
	ulxOnce  sync.Once
	ulxFails int

	procWriteFile = kernel32.NewProc("WriteFile")
	procCancelIo  = kernel32.NewProc("CancelIo")
)

func startUlx() {
	ulxOnce.Do(func() {
		go func() {
			defer func() { recover() }()
			runtime.LockOSThread()
			var h uintptr
			var openPath string
			for {
				tgt := findUlxTarget()
				if tgt.path == "" {
					ulxNote(UlxInfo{})
					if h != 0 {
						procCloseHandle.Call(h)
						h = 0
						openPath = ""
					}
					time.Sleep(2 * time.Second)
					continue
				}
				if h == 0 || openPath != tgt.path {
					if h != 0 {
						procCloseHandle.Call(h)
						h = 0
					}
					p, err := windows.UTF16PtrFromString(tgt.path)
					if err != nil {
						ulxNote(tgt.info)
						time.Sleep(2 * time.Second)
						continue
					}
					h = openHid(p, true)
					if h == 0 {
						h = openHid(p, false)
					}
					if h == 0 {
						ulxNote(tgt.info)
						time.Sleep(1500 * time.Millisecond)
						continue
					}
					openPath = tgt.path
					procHidDSetNumInputBuffers.Call(h, 64)
					time.Sleep(40 * time.Millisecond)
				}
				info := queryUlxHandle(h, tgt)
				if !info.Connected {
					procCloseHandle.Call(h)
					h = 0
					openPath = ""
				}
				ulxNote(info)
				time.Sleep(2 * time.Second)
			}
		}()
	})
}

func currentUlx() UlxInfo {
	ulxMu.Lock()
	defer ulxMu.Unlock()
	return ulxCache
}

func ulxNote(info UlxInfo) {
	ulxMu.Lock()
	defer ulxMu.Unlock()
	if info.Connected {
		ulxCache = info
		ulxFails = 0
		return
	}
	ulxFails++
	if ulxFails >= 4 {
		keep := ulxCache
		ulxCache = UlxInfo{Name: info.Name, VidPid: info.VidPid}
		if keep.Name != "" && info.Name == "" {
			ulxCache.Name = keep.Name
			ulxCache.VidPid = keep.VidPid
		}
	}
}

func isUlxControl(c hidCapInfo) bool {
	if c.vid != 0x361D {
		return false
	}
	// Boot/pointer collections carry 8K motion — never skip those.
	if c.page == 0x01 && (c.usage == 0x02 || c.usage == 0x01) {
		return false
	}
	return c.outLen >= 32
}

func findUlxTarget() ulxTarget {
	info := UlxInfo{Name: "Finalmouse UltralightX"}
	var dongleCtrl, dongleAny, mouseCtrl, mouseAny hidCapInfo
	for _, c := range hidCapsList() {
		if c.vid != 0x361D {
			continue
		}
		info.VidPid = formatVidPid(c.vid, c.pid)
		if c.name != "" && !strings.EqualFold(c.name, "HID-compliant mouse") {
			info.Name = c.name
		}
		ctrl := c.outLen >= 8
		switch c.pid {
		case 0x0100:
			if ctrl && dongleCtrl.path == "" {
				dongleCtrl = c
			}
			if dongleAny.path == "" {
				dongleAny = c
			}
		case 0x0102:
			if ctrl && mouseCtrl.path == "" {
				mouseCtrl = c
			}
			if mouseAny.path == "" {
				mouseAny = c
			}
		}
	}
	pick := dongleCtrl
	if pick.path == "" {
		pick = dongleAny
	}
	if pick.path == "" {
		pick = mouseCtrl
	}
	if pick.path == "" {
		pick = mouseAny
	}
	if pick.path == "" {
		return ulxTarget{info: info}
	}
	if pick.name != "" {
		info.Name = pick.name
	}
	info.VidPid = formatVidPid(pick.vid, pick.pid)
	inLen := int(pick.inLen)
	outLen := int(pick.outLen)
	if inLen < 65 {
		inLen = 65
	}
	if outLen < 64 {
		outLen = 64
	}
	return ulxTarget{info: info, path: pick.path, in: inLen, out: outLen}
}

func queryUlxHandle(h uintptr, tgt ulxTarget) UlxInfo {
	info := tgt.info
	inBuf := tgt.in
	if inBuf < 65 {
		inBuf = 65
	}
	outSz := tgt.out
	if outSz < 64 {
		outSz = 64
	}
	drainUlx(h, inBuf, 40, &info)
	_ = ulxSend(h, 4, 21, nil, outSz)
	_ = ulxSend(h, 4, 96, nil, outSz)
	_ = ulxSend(h, 4, 16, nil, outSz)
	_ = ulxSend(h, 4, 17, nil, outSz)
	_ = ulxSend(h, 4, 18, nil, outSz)
	_ = ulxSend(h, 2, 10, nil, outSz)
	drainUlx(h, inBuf, 550, &info)
	if info.PollHz == 0 || info.Dpi == 0 || info.LodMm == 0 {
		_ = ulxSend(h, 4, 21, nil, outSz)
		_ = ulxSend(h, 4, 16, nil, outSz)
		_ = ulxSend(h, 4, 17, nil, outSz)
		drainUlx(h, inBuf, 280, &info)
	}
	info.Connected = info.PollHz > 0 || info.Dpi > 0 || info.LodMm > 0 || info.Firmware != "" || info.BatteryPct > 0
	return info
}

func drainUlx(h uintptr, inBuf int, ms int, info *UlxInfo) {
	deadline := time.Now().Add(time.Duration(ms) * time.Millisecond)
	buf := make([]byte, inBuf+8)
	for time.Now().Before(deadline) {
		left := time.Until(deadline)
		if left < 8*time.Millisecond {
			left = 8 * time.Millisecond
		}
		n, ok := hidReadTimeout(h, buf, uint32(left/time.Millisecond))
		if !ok || n == 0 {
			continue
		}
		parseUlxReport(info, buf[:n])
	}
}

func ulxSend(h uintptr, reportID, cmd byte, data []byte, size int) bool {
	if size < 64 {
		size = 64
	}
	inner := make([]byte, 2+len(data))
	inner[0] = 0x80 | cmd
	inner[1] = byte(len(data))
	copy(inner[2:], data)
	pkt := make([]byte, size)
	pkt[0] = reportID
	pkt[1] = byte(len(inner))
	copy(pkt[2:], inner)
	return hidWriteTimeout(h, pkt, 200)
}

func hidWriteTimeout(h uintptr, pkt []byte, ms uint32) bool {
	ev, _, _ := procCreateEventW.Call(0, 1, 0, 0)
	if ev == 0 {
		var written uint32
		ok, _, _ := procWriteFile.Call(h, uintptr(unsafe.Pointer(&pkt[0])), uintptr(len(pkt)), uintptr(unsafe.Pointer(&written)), 0)
		return ok != 0 && written > 0
	}
	defer procCloseHandle.Call(ev)
	var ov overlapped
	ov.HEvent = windows.Handle(ev)
	var written uint32
	r, _, _ := procWriteFile.Call(h, uintptr(unsafe.Pointer(&pkt[0])), uintptr(len(pkt)), uintptr(unsafe.Pointer(&written)), uintptr(unsafe.Pointer(&ov)))
	if r != 0 {
		return written > 0 || true
	}
	wr, _, _ := procWaitForSingleObject.Call(ev, uintptr(ms))
	if wr != 0 {
		procCancelIo.Call(h)
		return false
	}
	ok, _, _ := procGetOverlappedResult.Call(h, uintptr(unsafe.Pointer(&ov)), uintptr(unsafe.Pointer(&written)), 0)
	return ok != 0
}

func hidReadTimeout(h uintptr, buf []byte, ms uint32) (int, bool) {
	ev, _, _ := procCreateEventW.Call(0, 1, 0, 0)
	if ev == 0 {
		return 0, false
	}
	defer procCloseHandle.Call(ev)
	var ov overlapped
	ov.HEvent = windows.Handle(ev)
	var read uint32
	r, _, _ := procReadFile.Call(h, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)), uintptr(unsafe.Pointer(&read)), uintptr(unsafe.Pointer(&ov)))
	if r != 0 {
		return int(read), read > 0
	}
	wr, _, _ := procWaitForSingleObject.Call(ev, uintptr(ms))
	if wr != 0 {
		procCancelIo.Call(h)
		return 0, false
	}
	ok, _, _ := procGetOverlappedResult.Call(h, uintptr(unsafe.Pointer(&ov)), uintptr(unsafe.Pointer(&read)), 0)
	if ok == 0 {
		return 0, false
	}
	return int(read), read > 0
}

func parseUlxReport(info *UlxInfo, buf []byte) {
	if len(buf) < 3 {
		return
	}
	applyUlxInner(info, buf)
	if buf[0] == 2 || buf[0] == 3 || buf[0] == 4 || buf[0] == 5 {
		rest := buf[1:]
		applyUlxInner(info, rest)
		if len(rest) > 2 && rest[0] >= 2 && rest[0] <= 62 {
			n := int(rest[0])
			end := 1 + n
			if end > len(rest) {
				end = len(rest)
			}
			applyUlxInner(info, rest[1:end])
		}
		return
	}
	if buf[0] >= 2 && buf[0] <= 62 {
		n := int(buf[0])
		end := 1 + n
		if end > len(buf) {
			end = len(buf)
		}
		applyUlxInner(info, buf[1:end])
	}
}

func applyUlxInner(info *UlxInfo, n []byte) {
	if len(n) < 3 {
		return
	}
	cmd := n[0]
	u16 := func() int {
		if len(n) >= 4 {
			return int(n[2]) | int(n[3])<<8
		}
		return 0
	}
	str := func() string {
		end := len(n)
		if len(n) > 1 {
			t := int(n[1])
			if t > 1 {
				cut := 2 + t - 1
				if cut < end {
					end = cut
				}
			}
		}
		if end < 2 {
			return ""
		}
		b := n[2:end]
		for i, c := range b {
			if c == 0 {
				return strings.TrimSpace(string(b[:i]))
			}
		}
		return strings.TrimSpace(string(b))
	}
	switch cmd {
	case 3:
		if v := u16(); v >= 50 && v <= 30000 {
			info.Dpi = v
		}
	case 4:
		if v := u16(); v >= 125 && v <= 8000 {
			info.PollHz = v
		}
	case 5:
		if mv := u16(); mv > 2000 && mv < 5000 {
			info.BatteryPct = ulxBattery(mv)
		}
	case 10:
		if s := str(); s != "" {
			info.DongleFw = s
		}
	case 11:
		if s := str(); s != "" {
			info.DongleFw = s
		}
	case 12:
		if s := str(); s != "" {
			info.Firmware = s
		}
	case 13:
		v := int(n[2])
		if v > 127 {
			v -= 256
		}
		info.Rssi = v
	case 14:
		if s := str(); s != "" {
			info.Serial = s
		}
	case 18:
		info.MotionSync = int(n[2])
	case 21:
		if n[2] >= 1 && n[2] <= 4 {
			info.LodMm = int(n[2])
		}
	case 36:
		// idle / wireless inactive
	case 37:
		info.Charging = int(n[2])
	}
}

func ulxBattery(mv int) int {
	e := float64(mv) / 1000
	volts := []float64{3, 3.62, 3.66, 3.74, 3.88, 4.17, 4.38}
	pcts := []float64{0.2, 5, 10, 25, 50, 75, 100}
	if e >= 4.38 {
		return 100
	}
	if e <= 3 {
		return 0
	}
	for i := 0; i < len(volts)-1; i++ {
		if e >= volts[i] && e <= volts[i+1] {
			t := (e - volts[i]) / (volts[i+1] - volts[i])
			return int(pcts[i] + (pcts[i+1]-pcts[i])*t + 0.5)
		}
	}
	return 100
}
