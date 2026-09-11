package main

import (
	"strings"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	qdcOnlyActivePaths               = 0x00000002
	displayConfigDeviceInfoGetTarget = 2
	displayConfigDeviceInfoGetSource = 1
	displayConfigModeTypeSource      = 1
	displayConfigModeTypeTarget      = 2
	outputHd15                       = 0
	outputHdmi                       = 5
	outputDvi                        = 4
	outputDpExternal                 = 10
	outputDpEmbedded                 = 11
	outputInternal                   = 0x80000000
)

var (
	procGetDisplayConfigBufferSizes = user32.NewProc("GetDisplayConfigBufferSizes")
	procQueryDisplayConfig          = user32.NewProc("QueryDisplayConfig")
	procDisplayConfigGetDeviceInfo  = user32.NewProc("DisplayConfigGetDeviceInfo")
)

type luid struct {
	LowPart  uint32
	HighPart int32
}

type displayconfigRational struct {
	Numerator   uint32
	Denominator uint32
}

type displayconfigPathSourceInfo struct {
	AdapterId   luid
	Id          uint32
	ModeInfoIdx uint32
	StatusFlags uint32
}

type displayconfigPathTargetInfo struct {
	AdapterId        luid
	Id               uint32
	ModeInfoIdx      uint32
	OutputTechnology uint32
	Rotation         uint32
	Scaling          uint32
	RefreshRate      displayconfigRational
	ScanLineOrdering uint32
	TargetAvailable  int32
	StatusFlags      uint32
}

type displayconfigPathInfo struct {
	SourceInfo displayconfigPathSourceInfo
	TargetInfo displayconfigPathTargetInfo
	Flags      uint32
}

type displayconfigModeInfo struct {
	InfoType  uint32
	Id        uint32
	AdapterId luid
	Data      [48]byte
}

type displayconfigHeader struct {
	Type      int32
	Size      uint32
	AdapterId luid
	Id        uint32
}

type displayconfigTargetName struct {
	Header                    displayconfigHeader
	Flags                     uint32
	OutputTechnology          uint32
	EdidManufactureId         uint16
	EdidProductCodeId         uint16
	ConnectorInstance         uint32
	MonitorFriendlyDeviceName [64]uint16
	MonitorDevicePath         [128]uint16
}

var pnpBrand = map[string]string{
	"BNQ": "ZOWIE / BenQ",
	"ACI": "ASUS",
	"AUS": "ASUS",
	"DEL": "Dell",
	"SAM": "Samsung",
	"SEC": "Samsung",
	"GSM": "LG",
	"AOC": "AOC",
	"MSI": "MSI",
	"ACR": "Acer",
	"HWP": "HP",
	"HPN": "HP",
	"LEN": "Lenovo",
	"PHL": "Philips",
	"VSC": "ViewSonic",
	"GBT": "Gigabyte",
	"GIZ": "Gigabyte",
	"ENC": "Eizo",
	"IVM": "Iiyama",
	"ONN": "ONN",
	"KRC": "Koorui",
	"PXO": "Pixio",
	"CMI": "Cooler Master",
	"HED": "Hisense",
	"TCL": "TCL",
	"XMI": "Xiaomi",
	"SKG": "Skyworth",
}

func listDisplays() []DisplayDev {
	out := listDisplaysCCD()
	if len(out) == 0 {
		out = listDisplaysEnum()
	}
	if len(out) == 0 {
		out = append(out, DisplayDev{MonitorName: "Display", Brand: "Unknown", Model: "Generic", Width: 1920, Height: 1080, Refresh: 60, Primary: true, Connection: "Auto"})
	}
	return out
}

func listDisplaysCCD() []DisplayDev {
	var nPath, nMode uint32
	r, _, _ := procGetDisplayConfigBufferSizes.Call(qdcOnlyActivePaths, uintptr(unsafe.Pointer(&nPath)), uintptr(unsafe.Pointer(&nMode)))
	if r != 0 || nPath == 0 || nMode == 0 {
		return nil
	}
	paths := make([]displayconfigPathInfo, nPath)
	modes := make([]displayconfigModeInfo, nMode)
	r, _, _ = procQueryDisplayConfig.Call(
		qdcOnlyActivePaths,
		uintptr(unsafe.Pointer(&nPath)),
		uintptr(unsafe.Pointer(&paths[0])),
		uintptr(unsafe.Pointer(&nMode)),
		uintptr(unsafe.Pointer(&modes[0])),
		0,
	)
	if r != 0 {
		return nil
	}
	paths = paths[:nPath]
	modes = modes[:nMode]
	out := []DisplayDev{}
	for i, p := range paths {
		friendly, path, techCode, mfg, prod := targetName(p.TargetInfo.AdapterId, p.TargetInfo.Id)
		w, h := sourceSize(p.SourceInfo.AdapterId, p.SourceInfo.Id, modes)
		hz := refreshFrom(p.TargetInfo.RefreshRate)
		if hz == 0 {
			hz = targetHz(p.TargetInfo.AdapterId, p.TargetInfo.Id, modes)
		}
		if w == 0 || h == 0 {
			continue
		}
		brand, model := splitMonitor(friendly, mfg)
		conn := connectionName(techCode)
		name := strings.TrimSpace(brand + " " + model)
		if name == "" {
			name = friendly
		}
		if name == "" {
			name = "Display"
		}
		out = append(out, DisplayDev{
			MonitorName:  name,
			Brand:        brand,
			Model:        model,
			Manufacturer: mfg,
			Connection:   conn,
			Width:        w,
			Height:       h,
			Refresh:      hz,
			Primary:      i == 0,
			Path:         path,
			ProductCode:  prod,
		})
	}
	// primary via EnumDisplayDevices
	for i := range out {
		out[i].Primary = false
	}
	for i := uint32(0); i < 8; i++ {
		var dd displayDevice
		dd.Cb = uint32(unsafe.Sizeof(dd))
		r, _, _ := procEnumDisplayDevicesW.Call(0, uintptr(i), uintptr(unsafe.Pointer(&dd)), 0)
		if r == 0 {
			break
		}
		if dd.StateFlags&displayPrimary == 0 {
			continue
		}
		gdi := windows.UTF16ToString(dd.DeviceName[:])
		var dm devmodeW
		dm.Size = uint16(unsafe.Sizeof(dm))
		namePtr, _ := windows.UTF16PtrFromString(gdi)
		procEnumDisplaySettingsW.Call(uintptr(unsafe.Pointer(namePtr)), enumCurrentSettings, uintptr(unsafe.Pointer(&dm)))
		for j := range out {
			if out[j].Width == int(dm.PelsWidth) && out[j].Height == int(dm.PelsHeight) {
				out[j].Primary = true
				if dm.DisplayFrequency > 0 {
					out[j].Refresh = int(dm.DisplayFrequency)
				}
				break
			}
		}
	}
	hasP := false
	for _, d := range out {
		if d.Primary {
			hasP = true
			break
		}
	}
	if !hasP && len(out) > 0 {
		out[0].Primary = true
	}
	return out
}

func listDisplaysEnum() []DisplayDev {
	out := []DisplayDev{}
	for i := uint32(0); i < 16; i++ {
		var dd displayDevice
		dd.Cb = uint32(unsafe.Sizeof(dd))
		r, _, _ := procEnumDisplayDevicesW.Call(0, uintptr(i), uintptr(unsafe.Pointer(&dd)), 0)
		if r == 0 {
			break
		}
		devName := windows.UTF16ToString(dd.DeviceName[:])
		adapter := windows.UTF16ToString(dd.DeviceString[:])
		var mon displayDevice
		mon.Cb = uint32(unsafe.Sizeof(mon))
		namePtr, _ := windows.UTF16PtrFromString(devName)
		procEnumDisplayDevicesW.Call(uintptr(unsafe.Pointer(namePtr)), 0, uintptr(unsafe.Pointer(&mon)), 1)
		nice := windows.UTF16ToString(mon.DeviceString[:])
		if nice == "" || strings.Contains(strings.ToLower(nice), "generic pnp") {
			if adapter != "" {
				nice = adapter
			}
		}
		var dm devmodeW
		dm.Size = uint16(unsafe.Sizeof(dm))
		ok, _, _ := procEnumDisplaySettingsW.Call(uintptr(unsafe.Pointer(namePtr)), enumCurrentSettings, uintptr(unsafe.Pointer(&dm)))
		if ok == 0 {
			continue
		}
		brand, model := splitMonitor(nice, "")
		out = append(out, DisplayDev{
			MonitorName: strings.TrimSpace(brand + " " + model),
			Brand:       brand,
			Model:       model,
			Connection:  "Auto",
			Width:       int(dm.PelsWidth),
			Height:      int(dm.PelsHeight),
			Refresh:     int(dm.DisplayFrequency),
			Primary:     dd.StateFlags&displayPrimary != 0,
		})
	}
	return out
}

func targetName(adapter luid, id uint32) (friendly, path string, tech uint32, mfg, prod string) {
	var t displayconfigTargetName
	t.Header.Type = displayConfigDeviceInfoGetTarget
	t.Header.Size = uint32(unsafe.Sizeof(t))
	t.Header.AdapterId = adapter
	t.Header.Id = id
	r, _, _ := procDisplayConfigGetDeviceInfo.Call(uintptr(unsafe.Pointer(&t)))
	if r != 0 {
		return
	}
	friendly = strings.TrimSpace(windows.UTF16ToString(t.MonitorFriendlyDeviceName[:]))
	path = windows.UTF16ToString(t.MonitorDevicePath[:])
	tech = t.OutputTechnology
	mfg = pnpFromEdid(t.EdidManufactureId)
	if b, ok := pnpBrand[mfg]; ok {
		mfg = b
	}
	prod = hex4(t.EdidProductCodeId)
	return
}

func sourceSize(adapter luid, id uint32, modes []displayconfigModeInfo) (int, int) {
	for _, m := range modes {
		if m.InfoType != displayConfigModeTypeSource || m.Id != id {
			continue
		}
		if m.AdapterId != adapter {
			continue
		}
		w := int(*(*uint32)(unsafe.Pointer(&m.Data[0])))
		h := int(*(*uint32)(unsafe.Pointer(&m.Data[4])))
		if w < 640 || h < 480 || w > 16000 || h > 10000 {
			continue
		}
		return w, h
	}
	return 0, 0
}

func targetHz(adapter luid, id uint32, modes []displayconfigModeInfo) int {
	for _, m := range modes {
		if m.InfoType != displayConfigModeTypeTarget || m.Id != id {
			continue
		}
		if m.AdapterId != adapter {
			continue
		}
		num := *(*uint32)(unsafe.Pointer(&m.Data[16]))
		den := *(*uint32)(unsafe.Pointer(&m.Data[20]))
		if den == 0 {
			return 0
		}
		return int((num + den/2) / den)
	}
	return 0
}

func refreshFrom(r displayconfigRational) int {
	if r.Denominator == 0 {
		return 0
	}
	return int((r.Numerator + r.Denominator/2) / r.Denominator)
}

func connectionName(tech uint32) string {
	switch tech {
	case outputHdmi:
		return "HDMI"
	case outputDvi:
		return "DVI"
	case outputDpExternal, outputDpEmbedded:
		return "DisplayPort"
	case outputHd15:
		return "VGA"
	case outputInternal:
		return "Internal"
	}
	if tech != 0 {
		return "Digital"
	}
	return "Auto"
}

func pnpFromEdid(id uint16) string {
	if id == 0 {
		return ""
	}
	c1 := byte(((id >> 10) & 0x1f) + 64)
	c2 := byte(((id >> 5) & 0x1f) + 64)
	c3 := byte((id & 0x1f) + 64)
	return string([]byte{c1, c2, c3})
}

func splitMonitor(friendly, mfg string) (brand, model string) {
	n := strings.TrimSpace(friendly)
	if n == "" || strings.EqualFold(n, "generic pnp monitor") {
		if mfg != "" {
			return mfg, "Monitor"
		}
		return "Unknown", "Monitor"
	}
	up := strings.ToUpper(n)
	brands := []string{"ZOWIE", "BenQ", "ASUS", "ROG", "Samsung", "LG", "Dell", "Alienware", "MSI", "AOC", "Acer", "Gigabyte", "ViewSonic", "Philips", "HP", "Lenovo", "Corsair", "Pixio", "Koorui", "Xiaomi", "Cooler Master", "Huawei", "TCL", "Hisense"}
	for _, b := range brands {
		if strings.Contains(up, strings.ToUpper(b)) {
			rest := strings.TrimSpace(n)
			// strip brand token
			for _, tok := range []string{b, strings.ToUpper(b), strings.ToLower(b)} {
				rest = strings.TrimSpace(strings.ReplaceAll(rest, tok, ""))
			}
			if b == "ROG" {
				b = "ASUS"
			}
			if rest == "" {
				rest = n
			}
			if strings.HasPrefix(strings.ToUpper(rest), "XL") {
				b = "ZOWIE"
			}
			return b, rest
		}
	}
	if mfg != "" && mfg != "Unknown" {
		return mfg, n
	}
	parts := strings.Fields(n)
	if len(parts) >= 2 {
		return parts[0], strings.Join(parts[1:], " ")
	}
	return n, n
}

func absI(v int) int {
	if v < 0 {
		return -v
	}
	return v
}
