import { ConvertPanel } from "./ConvertPanel";
import { GamesPanel } from "./GamesPanel";
import { MonitorPanel } from "./MonitorPanel";
import { MousePanel } from "./MousePanel";
import { PollPanel } from "./PollPanel";
import { CalibrationPanel } from "./CalibrationPanel";
import { ProfilesPanel } from "./ProfilesPanel";
import { ConfidencePanel } from "./ConfidencePanel";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab, type Tab } from "@/lib/lab-store";
import { SensMark } from "@/components/brand/SensMark";
import { AppWindow } from "@/components/window/AppWindow";
import { cn } from "@/lib/utils";
import { DownloadBtn } from "./DownloadBtn";

const TABS: { id: Tab; key: "tabConvert" | "tabGames" | "tabMonitor" | "tabMouse" | "tabPoll" | "tabCalibrate" | "tabProfiles" | "tabConfidence" }[] = [
  { id: "convert", key: "tabConvert" },
  { id: "games", key: "tabGames" },
  { id: "monitor", key: "tabMonitor" },
  { id: "mouse", key: "tabMouse" },
  { id: "poll", key: "tabPoll" },
  { id: "calibrate", key: "tabCalibrate" },
  { id: "profiles", key: "tabProfiles" },
  { id: "confidence", key: "tabConfidence" },
];

export function SensLabApp({ fill = false }: { fill?: boolean }) {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const z = useSetup((s) => s.zApp);
  const closeApp = useSetup((s) => s.closeApp);
  const minApp = useSetup((s) => s.minApp);
  const focusApp = useSetup((s) => s.focusApp);
  const tab = useLab((s) => s.tab);
  const setTab = useLab((s) => s.setTab);

  const body = (
    <>
      <header className="relative shrink-0 overflow-hidden border-b border-border">
        <div className="header-ops pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] bg-gradient-to-r from-surface via-surface/55 to-transparent md:block" />
        <div className="relative flex flex-wrap items-center gap-3 px-4 py-4 sm:px-5">
          <SensMark className="size-12" />
          <div className="min-w-0">
            <p className="font-display text-3xl font-semibold leading-none tracking-wide">{t.wordmark}</p>
            <p className="mt-0.5 text-xs font-semibold tracking-wide text-accent">{t.intel}</p>
            <p className="mt-0.5 hidden text-xs text-muted lg:block">{t.intelSub}</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <DownloadBtn
              href="/downloads/SensLab_Setup.exe"
              filename="SensLab_Setup.exe"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-accent px-3 text-xs font-semibold text-accent-fg shadow-btn hover:brightness-110"
            >
              {t.downloadBtn}
            </DownloadBtn>
            <div className="hidden text-right sm:block">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-fg">{t.edition}</p>
              <p className="text-xs text-muted">{t.v13}</p>
              <p className="mt-1 text-xs tracking-wider text-faint">{t.precision}</p>
            </div>
          </div>
        </div>
        <nav className="relative flex gap-1 overflow-x-auto px-3 pb-3 sm:px-4">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              type="button"
              onPointerDown={() => setTab(tb.id)}
              onClick={() => setTab(tb.id)}
              className={cn(
                "h-8 shrink-0 rounded-sm px-3 text-xs font-semibold tracking-wide uppercase",
                tab === tb.id
                  ? "bg-fg text-bg"
                  : "text-muted shadow-border hover:bg-subtle hover:text-fg",
              )}
            >
              {t[tb.key]}
            </button>
          ))}
        </nav>
      </header>
      <div
        className={
          tab === "games"
            ? "flex min-h-0 flex-1 flex-col overflow-hidden p-3 sm:p-4"
            : "dash-scroll min-h-0 flex-1 overflow-auto p-3 sm:p-4"
        }
      >
        {tab === "convert" ? <ConvertPanel /> : null}
        {tab === "games" ? <GamesPanel /> : null}
        {tab === "monitor" ? <MonitorPanel /> : null}
        {tab === "mouse" ? <MousePanel /> : null}
        {tab === "poll" ? <PollPanel /> : null}
        {tab === "calibrate" ? <CalibrationPanel /> : null}
        {tab === "profiles" ? <ProfilesPanel /> : null}
        {tab === "confidence" ? <ConfidencePanel /> : null}
      </div>
      <footer className="flex shrink-0 items-center justify-between border-t border-border px-4 py-1.5 text-xs text-faint">
        <span className="tracking-wider">{t.footerLeft}</span>
        <span className="tracking-wider">{t.precision}</span>
      </footer>
    </>
  );

  if (fill) {
    return <div className="flex min-h-0 w-full flex-1 flex-col bg-surface">{body}</div>;
  }

  return (
    <AppWindow
      title={t.appTitle}
      icon={<SensMark className="size-5 rounded-sm" />}
      lang={lang}
      zIndex={z}
      onClose={closeApp}
      onMinimize={minApp}
      onFocus={focusApp}
      className="window-app studio-size"
      bodyClassName="flex min-h-0 flex-col"
    >
      {body}
    </AppWindow>
  );
}
