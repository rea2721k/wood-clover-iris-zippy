package main

import (
	"embed"
	"net"
	"os"
	"strings"
	"time"

	"golang.org/x/sys/windows"
)

//go:embed ui/*
var uiFS embed.FS

//go:embed SensLab.ico
var iconData []byte

var launchMode = "setup"

func main() {
	if len(os.Args) > 1 && os.Args[1] == "--uninstall" {
		doUninstall()
		return
	}

	if !claimSingleInstance() {
		openURL("http://127.0.0.1:17331/")
		time.Sleep(400 * time.Millisecond)
		return
	}

	asApp := hasFlag("--app") || strings.EqualFold(exeBase(), "senslab.exe")
	if asApp {
		launchMode = "app"
	}

	initQPC()
	go func() {
		defer func() { recover() }()
		_ = startRawInput()
	}()
	startHidPollers()
	startUlx()

	ln, err := net.Listen("tcp", "127.0.0.1:17331")
	if err != nil {
		openStudio("http://127.0.0.1:17331/")
		return
	}
	go serve(ln)
	openStudio("http://127.0.0.1:17331/")
}

func hasFlag(f string) bool {
	for _, a := range os.Args[1:] {
		if a == f {
			return true
		}
	}
	return false
}

func exeBase() string {
	p, _ := os.Executable()
	i := strings.LastIndexAny(p, `\/`)
	if i >= 0 {
		return p[i+1:]
	}
	return p
}

func openURL(u string) {
	verb, _ := windows.UTF16PtrFromString("open")
	url, _ := windows.UTF16PtrFromString(u)
	_ = windows.ShellExecute(0, verb, url, nil, nil, windows.SW_SHOWNORMAL)
}

func claimSingleInstance() bool {
	name, _ := windows.UTF16PtrFromString("Local\\SensLabRBKSingleton")
	handle, err := windows.CreateMutex(nil, false, name)
	if err != nil {
		if err == windows.ERROR_ALREADY_EXISTS {
			return false
		}
		return true
	}
	_ = handle
	return true
}
