package main

import (
	"encoding/json"
	"io"
	"io/fs"
	"net"
	"net/http"
	"os"
	"strings"
	"time"
)

func serve(ln net.Listener) {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, map[string]any{"ok": true, "native": true, "version": appVersion})
	})
	mux.HandleFunc("/api/status", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, map[string]any{
			"native":     true,
			"version":    appVersion,
			"installed":  isInstalled(),
			"installDir": installDir(),
			"poll":       eng.snapshot(),
			"mice":       cachedMice(),
			"displays":   cachedDisplays(),
			"systemDpi":  systemDPI(),
			"ulx":        currentUlx(),
		})
	})
	mux.HandleFunc("/api/mice", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, cachedMice())
	})
	mux.HandleFunc("/api/displays", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, cachedDisplays())
	})
	mux.HandleFunc("/api/poll/status", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, eng.snapshot())
	})
	mux.HandleFunc("/api/poll/devices", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			var body struct {
				Path string `json:"path"`
			}
			_ = json.NewDecoder(r.Body).Decode(&body)
			setPollDevice(body.Path)
		}
		writeJSON(w, listPollDevices())
	})
	mux.HandleFunc("/api/ulx", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, currentUlx())
	})
	mux.HandleFunc("/api/poll/start", func(w http.ResponseWriter, r *http.Request) {
		eng.startTest(8 * time.Second)
		writeJSON(w, eng.snapshot())
	})
	mux.HandleFunc("/api/version", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, map[string]any{"version": appVersion, "installed": isInstalled(), "dir": installDir()})
	})
	mux.HandleFunc("/api/update", func(w http.ResponseWriter, r *http.Request) {
		dir, err := doInstall()
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		writeJSON(w, map[string]any{"ok": true, "version": appVersion, "dir": dir})
	})
	mux.HandleFunc("/api/install", func(w http.ResponseWriter, r *http.Request) {
		dir, err := doInstall()
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		writeJSON(w, map[string]any{"ok": true, "dir": dir, "version": appVersion})
	})
	mux.HandleFunc("/api/uninstall", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, map[string]any{"ok": true})
		go func() {
			time.Sleep(600 * time.Millisecond)
			doUninstall()
			os.Exit(0)
		}()
	})

	sub, _ := fs.Sub(uiFS, "ui")
	file := http.FileServer(http.FS(sub))
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" || r.URL.Path == "/index.html" {
			f, err := sub.Open("index.html")
			if err != nil {
				http.Error(w, "ui missing", 500)
				return
			}
			defer f.Close()
			b, _ := io.ReadAll(f)
			html := strings.Replace(
				string(b),
				"<head>",
				"<head>\n<script>window.__SENSLAB_NATIVE__=true;window.__SENSLAB_MODE__='"+launchMode+"';</script>",
				1,
			)
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Header().Set("Cache-Control", "no-store")
			_, _ = w.Write([]byte(html))
			return
		}
		file.ServeHTTP(w, r)
	})

	_ = http.Serve(ln, withCORS(mux))
}

func withCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodOptions {
			w.WriteHeader(204)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	_ = json.NewEncoder(w).Encode(v)
}
