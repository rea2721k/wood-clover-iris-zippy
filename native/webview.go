package main

import (
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/jchv/go-webview2"
	"golang.org/x/sys/windows"
)

func waitAlive(url string) {
	client := &http.Client{Timeout: 250 * time.Millisecond}
	for i := 0; i < 40; i++ {
		resp, err := client.Get(url)
		if err == nil {
			_, _ = io.Copy(io.Discard, resp.Body)
			resp.Body.Close()
			if resp.StatusCode >= 200 && resp.StatusCode < 500 {
				return
			}
		}
		time.Sleep(50 * time.Millisecond)
	}
}

func webviewDataPath() string {
	base, err := os.UserCacheDir()
	if err != nil || base == "" {
		base = os.TempDir()
	}
	dir := filepath.Join(base, "SensLab", "WebView2")
	_ = os.MkdirAll(dir, 0o755)
	return dir
}

func openStudio(url string) {
	waitAlive(url)
	w := webview2.NewWithOptions(webview2.WebViewOptions{
		Debug:     false,
		AutoFocus: true,
		DataPath:  webviewDataPath(),
		WindowOptions: webview2.WindowOptions{
			Title:  "SensLab RBK Edition",
			Width:  1600,
			Height: 1000,
			Center: true,
		},
	})
	if w == nil {
		openURL(url)
		select {}
	}
	defer w.Destroy()
	w.Init("window.__SENSLAB_NATIVE__=true;window.__SENSLAB_MODE__='" + launchMode + "';")
	w.Navigate(url)

	go func() {
		time.Sleep(250 * time.Millisecond)
		w.Dispatch(func() {
			maximizeHWND(uintptr(w.Window()))
		})
	}()
	w.Run()
}

func maximizeHWND(hwnd uintptr) {
	if hwnd == 0 {
		return
	}
	user32 := windows.NewLazySystemDLL("user32.dll")
	show := user32.NewProc("ShowWindow")
	const swMaximize = 3
	show.Call(hwnd, swMaximize)
}
