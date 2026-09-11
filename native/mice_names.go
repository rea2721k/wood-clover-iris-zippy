package main

import (
	"strings"
	"unsafe"

	"golang.org/x/sys/windows"
)

var (
	setupapi                     = windows.NewLazySystemDLL("setupapi.dll")
	hidDll                       = windows.NewLazySystemDLL("hid.dll")
	procSetupDiGetClassDevsW     = setupapi.NewProc("SetupDiGetClassDevsW")
	procSetupDiEnumDeviceInfo    = setupapi.NewProc("SetupDiEnumDeviceInfo")
	procSetupDiGetDeviceRegPropW = setupapi.NewProc("SetupDiGetDeviceRegistryPropertyW")
	procSetupDiDestroyDeviceInfo = setupapi.NewProc("SetupDiDestroyDeviceInfoList")
	procHidDGetProductString     = hidDll.NewProc("HidD_GetProductString")
)

type guid struct {
	Data1 uint32
	Data2 uint16
	Data3 uint16
	Data4 [8]byte
}

type spDevinfoData struct {
	Size      uint32
	ClassGuid guid
	DevInst   uint32
	Reserved  uintptr
}

var guidMouse = guid{0x4d36e96f, 0xe325, 0x11ce, [8]byte{0xbf, 0xc1, 0x08, 0x00, 0x2b, 0xe1, 0x03, 0x18}}

const (
	digcfPresent      = 0x00000002
	spdrpFriendlyName = 0x0000000C
	spdrpDeviceDesc   = 0x00000000
	spdrpHardwareID   = 0x00000001
)

func listMiceSetupAPI() []MouseDev {
	handle, _, _ := procSetupDiGetClassDevsW.Call(uintptr(unsafe.Pointer(&guidMouse)), 0, 0, digcfPresent)
	if handle == 0 || handle == ^uintptr(0) {
		return nil
	}
	defer procSetupDiDestroyDeviceInfo.Call(handle)
	out := []MouseDev{}
	for i := uint32(0); i < 64; i++ {
		var info spDevinfoData
		info.Size = uint32(unsafe.Sizeof(info))
		r, _, _ := procSetupDiEnumDeviceInfo.Call(handle, uintptr(i), uintptr(unsafe.Pointer(&info)))
		if r == 0 {
			break
		}
		name := setupProp(handle, &info, spdrpFriendlyName)
		if name == "" {
			name = setupProp(handle, &info, spdrpDeviceDesc)
		}
		hw := setupProp(handle, &info, spdrpHardwareID)
		if name == "" {
			continue
		}
		low := strings.ToLower(name)
		if strings.Contains(low, "ps/2") || strings.Contains(low, "terminal server") {
			continue
		}
		vidpid := ""
		if m := vidRe.FindStringSubmatch(hw); len(m) == 3 {
			vidpid = "VID " + strings.ToUpper(m[1]) + " · PID " + strings.ToUpper(m[2])
			if nicer := friendlyMouse(m[1], m[2], name); nicer != "" && !strings.HasPrefix(nicer, "HID mouse") {
				name = nicer
			}
		}
		out = append(out, MouseDev{Name: name, VidPid: vidpid, Path: hw})
	}
	return out
}

func setupProp(handle uintptr, info *spDevinfoData, prop uint32) string {
	var need uint32
	procSetupDiGetDeviceRegPropW.Call(handle, uintptr(unsafe.Pointer(info)), uintptr(prop), 0, 0, 0, uintptr(unsafe.Pointer(&need)))
	if need == 0 {
		return ""
	}
	buf := make([]uint16, need/2+2)
	r, _, _ := procSetupDiGetDeviceRegPropW.Call(handle, uintptr(unsafe.Pointer(info)), uintptr(prop), 0, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)*2), uintptr(unsafe.Pointer(&need)))
	if r == 0 {
		return ""
	}
	return strings.TrimSpace(windows.UTF16ToString(buf))
}

func hidProductName(path string) string {
	if path == "" {
		return ""
	}
	p, err := windows.UTF16PtrFromString(path)
	if err != nil {
		return ""
	}
	h, err := windows.CreateFile(p, 0, windows.FILE_SHARE_READ|windows.FILE_SHARE_WRITE, nil, windows.OPEN_EXISTING, 0, 0)
	if err != nil {
		return ""
	}
	defer windows.CloseHandle(h)
	buf := make([]uint16, 127)
	r, _, _ := procHidDGetProductString.Call(uintptr(h), uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)*2))
	if r == 0 {
		return ""
	}
	return strings.TrimSpace(windows.UTF16ToString(buf))
}

func systemDPI() int {
	user32 := windows.NewLazySystemDLL("user32.dll")
	proc := user32.NewProc("GetDpiForSystem")
	if proc.Find() != nil {
		return 96
	}
	d, _, _ := proc.Call()
	if d == 0 {
		return 96
	}
	return int(d)
}
