import type { ReactNode } from "react";
import { Download, Folder, ShieldCheck } from "lucide-react";
import { copy, LICENSE, PATHS, type Lang } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { Progress } from "@/components/ui/progress";
import { CheckRow } from "./CheckRow";
import { RadioRow } from "./RadioRow";
import { DownloadBtn } from "@/components/app/DownloadBtn";

const INSTALL_ORDER = [
  "exe",
  "ico",
  "uninstall",
  "desktop",
  "start",
  "unShortcut",
  "registry",
] as const;

const UNINSTALL_ORDER = [
  "app",
  "desktop",
  "start",
  "unShortcut",
  "registry",
  "files",
] as const;

export function SetupBody() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const mode = useSetup((s) => s.setupMode);
  const step = useSetup((s) => s.step);
  const installed = useSetup((s) => s.installed);
  const accepted = useSetup((s) => s.accepted);
  const setAccepted = useSetup((s) => s.setAccepted);
  const locKind = useSetup((s) => s.locKind);
  const setLoc = useSetup((s) => s.setLoc);
  const customPath = useSetup((s) => s.customPath);
  const setCustomPath = useSetup((s) => s.setCustomPath);
  const installPath = useSetup((s) => s.installPath);
  const desktopShortcut = useSetup((s) => s.desktopShortcut);
  const startShortcut = useSetup((s) => s.startShortcut);
  const uninstallShortcut = useSetup((s) => s.uninstallShortcut);
  const launchAfter = useSetup((s) => s.launchAfter);
  const setOpt = useSetup((s) => s.setOpt);
  const progress = useSetup((s) => s.progress);
  const progressKey = useSetup((s) => s.progressKey);

  if (installed && mode !== "uninstall" && step === 0) {
    return (
      <Split>
        <CopyBlock title={t.alreadyTitle} lead={t.alreadyLead} />
        <div className="mt-6 rounded-xl bg-elevated/80 p-4 shadow-border">
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            {t.alreadyPath}
          </p>
          <p className="mt-1.5 font-mono text-sm break-all">{installPath}</p>
        </div>
      </Split>
    );
  }

  if (mode === "uninstall") {
    if (step === 0) {
      return (
        <Split>
          <CopyBlock title={t.unTitle} lead={t.unLead} />
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {UNINSTALL_ORDER.map((k) => (
              <li key={k} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-danger/80" />
                {t.unFiles[k]}
              </li>
            ))}
          </ul>
        </Split>
      );
    }
    if (step === 1) {
      return (
        <ProgressPanel
          title={t.unProgressTitle}
          lead={t.unProgressLead}
          progress={progress}
          items={UNINSTALL_ORDER.map((k) => t.unFiles[k])}
          active={UNINSTALL_ORDER.indexOf(
            progressKey as (typeof UNINSTALL_ORDER)[number],
          )}
        />
      );
    }
    return <CopyBlock title={t.unDoneTitle} lead={t.unDoneLead} />;
  }

  if (step === 0) {
    return (
      <Split>
        <CopyBlock title={t.welcomeTitle} lead={t.welcomeLead} />
        <p className="mt-6 text-sm text-muted">{t.welcomeMeta}</p>
        <SetupDownloads t={t} />
      </Split>
    );
  }

  if (step === 1) {
    return (
      <div className="flex h-full flex-col gap-4">
        <CopyBlock title={t.licenseTitle} lead={t.licenseLead} />
        <pre className="min-h-0 flex-1 overflow-auto rounded-xl bg-elevated/80 p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted shadow-border">
          {LICENSE[lang]}
        </pre>
        <CheckRow
          id="eula"
          checked={accepted}
          onChange={setAccepted}
          title={t.accept}
        />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex h-full flex-col gap-4">
        <CopyBlock title={t.destTitle} lead={t.destLead} />
        <div role="radiogroup" className="space-y-2">
          <RadioRow
            name="loc"
            selected={locKind === "local"}
            onSelect={() => setLoc("local")}
            title={t.locLocal}
            hint={PATHS.local[lang]}
          />
          <RadioRow
            name="loc"
            selected={locKind === "program"}
            onSelect={() => setLoc("program")}
            title={t.locProgram}
            hint={PATHS.program[lang]}
          />
          <RadioRow
            name="loc"
            selected={locKind === "custom"}
            onSelect={() => setLoc("custom")}
            title={t.locCustom}
            hint={customPath}
          />
        </div>
        {locKind === "custom" ? (
          <label className="block">
            <span className="sr-only">{t.locCustom}</span>
            <input
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
              className="h-11 w-full rounded-xl bg-elevated px-3.5 font-mono text-sm text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
        ) : null}
        <div className="mt-auto flex items-center justify-between rounded-xl bg-elevated/70 px-3.5 py-3 text-sm shadow-border">
          <span className="flex items-center gap-2 text-muted">
            <Folder className="size-4" />
            {t.destSpace}
          </span>
          <span className="tabular-nums">{t.destSpaceVal}</span>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted">
          <ShieldCheck className="size-4 text-accent" />
          {t.destHint}
        </p>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="flex h-full flex-col gap-4">
        <CopyBlock title={t.optionsTitle} lead={t.optionsLead} />
        <div className="space-y-2">
          <CheckRow
            id="desk"
            checked={desktopShortcut}
            onChange={(v) => setOpt("desktopShortcut", v)}
            title={t.optDesktop}
            hint={t.optDesktopHint}
          />
          <CheckRow
            id="start"
            checked={startShortcut}
            onChange={(v) => setOpt("startShortcut", v)}
            title={t.optStart}
            hint={t.optStartHint}
          />
          <CheckRow
            id="un"
            checked={uninstallShortcut}
            onChange={(v) => setOpt("uninstallShortcut", v)}
            title={t.optUninstall}
            hint={t.optUninstallHint}
          />
          <CheckRow
            id="launch"
            checked={launchAfter}
            onChange={(v) => setOpt("launchAfter", v)}
            title={t.optLaunch}
          />
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <ProgressPanel
        title={t.progressTitle}
        lead={t.progressLead}
        progress={progress}
        items={INSTALL_ORDER.map((k) => t.files[k])}
        active={INSTALL_ORDER.indexOf(
          progressKey as (typeof INSTALL_ORDER)[number],
        )}
      />
    );
  }

  return <CopyBlock title={t.doneTitle} lead={t.doneLead} />;
}

function Split({ children }: { children: ReactNode }) {
  return <div className="flex h-full flex-col justify-start gap-1 pt-1">{children}</div>;
}

export function SetupDownloads({ t }: { t: (typeof copy)[Lang] }) {
  return (
    <div className="mt-5 w-full rounded-xl bg-elevated/80 p-3 text-left shadow-border">
      <p className="text-[11px] font-medium tracking-wide text-muted uppercase">{t.dlTitle}</p>
      <div className="mt-2 grid gap-2">
        <DownloadBtn
          href="/downloads/SensLab_Windows_Setup.zip"
          filename="SensLab_Windows_Setup.zip"
          className="flex min-h-11 items-center gap-3 rounded-lg bg-accent px-3 py-2 text-left text-accent-fg shadow-btn transition-colors hover:brightness-110"
        >
          <Download className="size-4 shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">{t.dlExe}</span>
            <span className="block text-xs opacity-80">{t.dlExeHint}</span>
          </span>
        </DownloadBtn>
        <DownloadBtn
          href="/downloads/SensLab_RBK_Edition.zip"
          filename="SensLab_RBK_Edition.zip"
          className="flex min-h-11 items-center gap-3 rounded-lg bg-subtle/80 px-3 py-2 text-left shadow-border transition-colors hover:bg-subtle"
        >
          <Download className="size-4 shrink-0 text-accent" />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-fg">{t.dlPortableZip}</span>
            <span className="block text-xs text-muted">{t.dlPortableZipHint}</span>
          </span>
        </DownloadBtn>
        <DownloadBtn
          href="/downloads/SensLab_RBK_Edition.html"
          filename="SensLab_RBK_Edition.html"
          className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-left text-muted transition-colors hover:bg-subtle hover:text-fg"
        >
          <Download className="size-4 shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">{t.dlPortable}</span>
            <span className="block text-xs text-faint">{t.dlPortableHint}</span>
          </span>
        </DownloadBtn>
      </div>
    </div>
  );
}

function CopyBlock({ title, lead }: { title: string; lead: string }) {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
        {lead}
      </p>
    </div>
  );
}

function ProgressPanel({
  title,
  lead,
  progress,
  items,
  active,
}: {
  title: string;
  lead: string;
  progress: number;
  items: string[];
  active: number;
}) {
  return (
    <div className="flex h-full flex-col">
      <CopyBlock title={title} lead={lead} />
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted">
            {items[Math.max(0, active)] ?? items[items.length - 1]}
          </span>
          <span className="tabular-nums text-fg">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>
      <ul className="mt-6 space-y-1.5 font-mono text-xs">
        {items.map((label, i) => (
          <li
            key={label}
            className={
              i < active
                ? "text-accent"
                : i === active
                  ? "text-fg"
                  : "text-faint"
            }
          >
            {i < active ? "OK  " : i === active ? "··  " : "    "}
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
