package main

import (
	"encoding/base64"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"syscall"
	"time"
	"unicode/utf16"
)

func installDir() string {
	base := os.Getenv("LOCALAPPDATA")
	if base == "" {
		if h, err := os.UserHomeDir(); err == nil {
			base = filepath.Join(h, "AppData", "Local")
		}
	}
	return filepath.Join(base, "Programs", "SensLab")
}

func isInstalled() bool {
	_, err := os.Stat(filepath.Join(installDir(), "SensLab.exe"))
	return err == nil
}

func copyFile(src, dst string) error {
	b, err := os.ReadFile(src)
	if err != nil {
		return err
	}
	return os.WriteFile(dst, b, 0o755)
}

func runPS(script string) error {
	u := utf16.Encode([]rune(script))
	buf := make([]byte, 0, len(u)*2)
	for _, r := range u {
		buf = append(buf, byte(r), byte(r>>8))
	}
	enc := base64.StdEncoding.EncodeToString(buf)
	cmd := exec.Command("powershell.exe", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", enc)
	cmd.SysProcAttr = &syscall.SysProcAttr{HideWindow: true}
	cmd.Stdout = nil
	cmd.Stderr = nil
	return cmd.Run()
}

func doInstall() (string, error) {
	dir := installDir()
	if err := os.MkdirAll(dir, 0o755); err != nil {
		return "", err
	}
	self, err := os.Executable()
	if err != nil {
		return "", err
	}
	target := filepath.Join(dir, "SensLab.exe")
	if err := copyFile(self, target); err != nil {
		return "", err
	}
	uninstaller := filepath.Join(dir, "Uninstall.exe")
	_ = copyFile(self, uninstaller)
	iconPath := filepath.Join(dir, "SensLab.ico")
	if len(iconData) > 0 {
		_ = os.WriteFile(iconPath, iconData, 0o644)
	}
	desktop := filepath.Join(os.Getenv("USERPROFILE"), "Desktop", "SensLab.lnk")
	start := filepath.Join(os.Getenv("APPDATA"), "Microsoft", "Windows", "Start Menu", "Programs", "SensLab.lnk")
	script := fmt.Sprintf(`$ErrorActionPreference='Stop'
$ws=New-Object -ComObject WScript.Shell
$s=$ws.CreateShortcut('%s');$s.TargetPath='%s';$s.WorkingDirectory='%s';$s.IconLocation='%s,0';$s.Save()
$s=$ws.CreateShortcut('%s');$s.TargetPath='%s';$s.WorkingDirectory='%s';$s.IconLocation='%s,0';$s.Save()
$u='HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\SensLab'
New-Item -Path $u -Force | Out-Null
New-ItemProperty -Path $u -Name DisplayName -Value 'SensLab RBK Edition' -PropertyType String -Force | Out-Null
New-ItemProperty -Path $u -Name DisplayVersion -Value '1.4.2' -PropertyType String -Force | Out-Null
New-ItemProperty -Path $u -Name Publisher -Value 'SensLab · RBK' -PropertyType String -Force | Out-Null
New-ItemProperty -Path $u -Name InstallLocation -Value '%s' -PropertyType String -Force | Out-Null
New-ItemProperty -Path $u -Name DisplayIcon -Value '%s' -PropertyType String -Force | Out-Null
New-ItemProperty -Path $u -Name UninstallString -Value '"%s" --uninstall' -PropertyType String -Force | Out-Null
`, esc(desktop), esc(target), esc(dir), esc(iconPath), esc(start), esc(target), esc(dir), esc(iconPath), esc(dir), esc(iconPath), esc(uninstaller))
	if err := runPS(script); err != nil {
		return dir, err
	}
	return dir, nil
}

func esc(s string) string {
	return strings.ReplaceAll(s, "'", "''")
}

func doUninstall() {
	dir := installDir()
	desktop := filepath.Join(os.Getenv("USERPROFILE"), "Desktop", "SensLab.lnk")
	start := filepath.Join(os.Getenv("APPDATA"), "Microsoft", "Windows", "Start Menu", "Programs", "SensLab.lnk")
	script := fmt.Sprintf(`$ErrorActionPreference='SilentlyContinue'
Remove-Item '%s' -Force
Remove-Item '%s' -Force
Remove-Item 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\SensLab' -Recurse -Force
Start-Process -FilePath cmd.exe -ArgumentList '/c','ping 127.0.0.1 -n 3 >nul & rmdir /s /q "%s"' -WindowStyle Hidden
`, esc(desktop), esc(start), dir)
	_ = runPS(script)
	time.Sleep(200 * time.Millisecond)
}
