import { useEffect, useState, type ReactNode } from "react";
import { Download, Search, Settings, Trash2, X } from "lucide-react";
import { Toaster, toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { cn } from "@/lib/utils";
import { SensMark } from "@/components/brand/SensMark";
import { RbkWatermark } from "./RbkWatermark";
import { SetupWindow } from "@/components/setup/SetupWindow";
import { SensLabApp } from "@/components/app/SensLabApp";
import { NativeBridge } from "@/lib/senslab/NativeBridge";
import { isNativeHost, nativeLaunchMode } from "@/lib/senslab/native-live";
import { downloadUrl } from "@/lib/download";
import { GetSetupOverlay } from "./GetSetupOverlay";

export function Desktop() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const installed = useSetup((s) => s.installed);
  const desktopShortcut = useSetup((s) => s.desktopShortcut);
  const uninstallShortcut = useSetup((s) => s.uninstallShortcut);
  const setupOpen = useSetup((s) => s.setupOpen);
  const setupMin = useSetup((s) => s.setupMin);
  const appOpen = useSetup((s) => s.appOpen);
  const appMin = useSetup((s) => s.appMin);
  const openSetup = useSetup((s) => s.openSetup);
  const openApp = useSetup((s) => s.openApp);
  const focusSetup = useSetup((s) => s.focusSetup);
  const focusApp = useSetup((s) => s.focusApp);
  const minSetup = useSetup((s) => s.minSetup);
  const minApp = useSetup((s) => s.minApp);
  const closeApp = useSetup((s) => s.closeApp);
  const setLang = useSetup((s) => s.setLang);
  const [tray, setTray] = useState(false);
  const [settings, setSettings] = useState(false);
  const [nativeShell, setNativeShell] = useState(
    () => typeof window !== "undefined" && isNativeHost(),
  );

  useEffect(() => {
    document.documentElement.lang = lang === "tr" ? "tr" : "en";
  }, [lang]);

  useEffect(() => {
    if (isNativeHost()) setNativeShell(true);
  }, []);

  if (nativeShell) {
    const mode = nativeLaunchMode();
    const showSetup = mode === "setup" && (setupOpen || !installed) && !appOpen;
    return (
      <main className="flex h-full min-h-full w-full flex-col overflow-hidden bg-bg text-fg">
        <NativeBridge />
        {showSetup ? (
          <div className="relative flex min-h-0 flex-1 items-center justify-center p-4">
            <RbkWatermark size="hero" />
            <SetupWindow />
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">
            <SensLabApp fill />
          </div>
        )}
        <Toaster theme="dark" position="bottom-right" offset={24} />
      </main>
    );
  }

  return (
    <main className="desktop-bg relative h-dvh overflow-hidden text-fg">
      <NativeBridge />
      <GetSetupOverlay />
      <div className="desktop-grid pointer-events-none absolute inset-0" />
      <RbkWatermark size="hero" />
      <div className="pointer-events-none absolute right-6 bottom-16 z-10 hidden text-right sm:block">
        <p className="rbk-script text-4xl text-fg/25 italic">{t.rbkMark}</p>
        <p className="mt-1 text-xs tracking-[0.28em] text-faint">{t.rbkScript}</p>
      </div>

      <div className="absolute top-5 left-3 z-10 flex flex-col gap-2 sm:top-6 sm:left-4 sm:gap-3">
        <DesktopIcon label={t.recycle} onClick={() => undefined}>
          <Trash2 className="size-6 text-muted" strokeWidth={1.5} />
        </DesktopIcon>
        <DesktopIcon label={t.setupIcon} onClick={() => openSetup()}>
          <SensMark className="size-10" />
        </DesktopIcon>
        {installed && desktopShortcut ? (
          <DesktopIcon label={t.appIcon} onClick={openApp}>
            <SensMark className="size-10" />
          </DesktopIcon>
        ) : null}
        {installed && uninstallShortcut ? (
          <DesktopIcon label={t.uninstallIcon} onClick={() => openSetup("uninstall")}>
            <UninstallMark />
          </DesktopIcon>
        ) : null}
      </div>

      <div className="window-layer">
        {setupOpen && !setupMin ? <SetupWindow /> : null}
        {appOpen && !appMin ? <SensLabApp /> : null}
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-30 flex h-12 items-center gap-1.5 border-t border-border bg-surface/90 px-2 backdrop-blur-md sm:px-3">
        <button
          type="button"
          onClick={() => (installed ? openApp() : openSetup())}
          className="flex size-10 items-center justify-center rounded-md hover:bg-elevated"
          aria-label={t.appName}
        >
          <SensMark className="size-7" />
        </button>
        <div className="hidden h-9 min-w-40 items-center gap-2 rounded-md bg-elevated px-3 text-sm text-faint shadow-border sm:flex">
          <Search className="size-3.5" />
          {t.taskbarSearch}
        </div>
        <div className="ml-1 flex items-center gap-1">
          {setupOpen ? (
            <TaskBtn
              active={!setupMin}
              label={t.setupTitle}
              onClick={() => (setupMin ? focusSetup() : minSetup())}
            >
              <SensMark className="size-5" />
            </TaskBtn>
          ) : null}
          {appOpen ? (
            <TaskBtn
              active={!appMin}
              label={t.appTitle}
              onClick={() => (appMin ? focusApp() : minApp())}
            >
              <SensMark className="size-5" />
            </TaskBtn>
          ) : null}
        </div>
        <div className="relative ml-auto flex items-center gap-2 pr-1">
          <span className="tracking-brand hidden text-xs font-medium text-faint sm:inline">
            {t.rbkMark}
          </span>
          <button
            type="button"
            onClick={() => {
              setTray((v) => !v);
              setSettings(false);
            }}
            className="flex size-9 items-center justify-center rounded-md hover:bg-elevated"
            aria-label={t.appName}
          >
            <SensMark className="size-6" />
          </button>
          <Clock lang={lang} />
          {tray ? (
            <div className="absolute right-0 bottom-12 w-56 overflow-hidden rounded-md bg-surface shadow-window">
              <p className="border-b border-border px-3 py-2 font-display text-xs font-semibold tracking-wider text-muted">
                SensLab {t.v13} · {t.edition}
              </p>
              <TrayItem
                onClick={() => {
                  setTray(false);
                  installed ? openApp() : openSetup();
                }}
              >
                {t.trayOpen}
              </TrayItem>
              <TrayItem
                onClick={() => {
                  setTray(false);
                  void downloadUrl("/downloads/SensLab_Setup.exe", "SensLab_Setup.exe")
                    .then(() => toast.success(t.dlStarted))
                    .catch(() => toast.error(t.dlFailed));
                }}
              >
                <Download className="size-3.5" />
                {t.trayDownload}
              </TrayItem>
              <TrayItem
                onClick={() => {
                  toast(t.upToDate);
                  setTray(false);
                }}
              >
                {t.trayUpdate}
              </TrayItem>
              <TrayItem
                onClick={() => {
                  setSettings(true);
                  setTray(false);
                }}
              >
                <Settings className="size-3.5" />
                {t.traySettings}
              </TrayItem>
              <TrayItem
                onClick={() => {
                  setTray(false);
                  closeApp();
                }}
              >
                {t.trayExit}
              </TrayItem>
            </div>
          ) : null}
          {settings ? (
            <div className="absolute right-0 bottom-12 w-56 rounded-md bg-surface p-3 shadow-window">
              <p className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">{t.settingsLang}</p>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setLang("tr")}
                  className={cn(
                    "h-8 flex-1 rounded-md text-xs font-semibold",
                    lang === "tr" ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
                  )}
                >
                  TR
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={cn(
                    "h-8 flex-1 rounded-md text-xs font-semibold",
                    lang === "en" ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
                  )}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={() => setSettings(false)}
                className="mt-2 w-full text-xs text-muted hover:text-fg"
              >
                {t.close}
              </button>
            </div>
          ) : null}
        </div>
      </footer>
      <Toaster theme="dark" position="bottom-right" offset={72} />
    </main>
  );
}

function TrayItem({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-subtle"
    >
      {children}
    </button>
  );
}

function DesktopIcon({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-20 flex-col items-center gap-1.5 rounded-md p-1.5 hover:bg-fg/5"
    >
      <span className="flex size-11 items-center justify-center">{children}</span>
      <span className="line-clamp-2 text-center text-xs leading-tight text-fg/90">{label}</span>
    </button>
  );
}

function TaskBtn({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className={cn(
        "relative flex h-9 min-w-11 items-center justify-center rounded-md px-2",
        active ? "bg-elevated" : "hover:bg-elevated/70",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full",
          active ? "bg-accent" : "bg-faint",
        )}
      />
    </button>
  );
}

function UninstallMark() {
  return (
    <span className="relative inline-flex">
      <SensMark className="size-10" />
      <span className="absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-danger text-bg">
        <X className="size-2.5" strokeWidth={3} />
      </span>
    </span>
  );
}

function Clock({ lang }: { lang: "tr" | "en" }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  return (
    <div className="h-8 w-16 pr-1 text-right text-xs leading-tight">
      {now ? (
        <>
          <div className="tabular-nums">
            {now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="text-muted">
            {now.toLocaleDateString(locale, { day: "numeric", month: "short" })}
          </div>
        </>
      ) : null}
    </div>
  );
}
