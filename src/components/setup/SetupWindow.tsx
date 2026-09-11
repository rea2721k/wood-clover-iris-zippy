import { copy, type Lang } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { Button } from "@/components/ui/button";
import { SensMark } from "@/components/brand/SensMark";
import { AppWindow } from "@/components/window/AppWindow";
import { SetupBody, SetupDownloads } from "./SetupBody";
import { CheckRow } from "./CheckRow";

const INSTALL_STEPS = 6;

export function SetupWindow() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const installed = useSetup((s) => s.installed);
  const mode = useSetup((s) => s.setupMode);
  const step = useSetup((s) => s.step);
  const busy = useSetup((s) => s.busy);
  const accepted = useSetup((s) => s.accepted);
  const wizard = useSetup((s) => s.wizard);
  const zSetup = useSetup((s) => s.zSetup);
  const closeSetup = useSetup((s) => s.closeSetup);
  const minSetup = useSetup((s) => s.minSetup);
  const focusSetup = useSetup((s) => s.focusSetup);
  const setStep = useSetup((s) => s.setStep);
  const openSetup = useSetup((s) => s.openSetup);
  const runInstall = useSetup((s) => s.runInstall);
  const runUninstall = useSetup((s) => s.runUninstall);
  const openApp = useSetup((s) => s.openApp);
  const setLang = useSetup((s) => s.setLang);
  const setWizard = useSetup((s) => s.setWizard);
  const desktopShortcut = useSetup((s) => s.desktopShortcut);
  const startShortcut = useSetup((s) => s.startShortcut);
  const setOpt = useSetup((s) => s.setOpt);
  const setLoc = useSetup((s) => s.setLoc);
  const locKind = useSetup((s) => s.locKind);
  const removeData = useSetup((s) => s.removeData);
  const setRemoveData = useSetup((s) => s.setRemoveData);

  const simple =
    !wizard &&
    ((mode !== "uninstall" && (step === 0 || step === 4 || step === 5)) ||
      (mode === "uninstall" && (step === 0 || step === 1 || step === 2)));

  const alreadyGate = installed && mode !== "uninstall" && step === 0 && wizard;
  const installDone = mode !== "uninstall" && step === 5;
  const uninstallDone = mode === "uninstall" && step === 2;
  const uninstallConfirm = mode === "uninstall" && step === 0;

  const canNext =
    wizard &&
    !busy &&
    (step !== 1 || accepted) &&
    !alreadyGate &&
    !installDone &&
    !uninstallDone &&
    !uninstallConfirm;

  function back() {
    if (busy) return;
    if (mode === "uninstall" && step === 0) {
      openSetup("repair");
      return;
    }
    if (step > 0) setStep(step - 1);
  }

  function next() {
    if (!canNext) return;
    if (mode === "uninstall") return;
    if (step === 3) {
      void runInstall();
      return;
    }
    if (step < INSTALL_STEPS - 1) setStep(step + 1);
  }

  const showBack = wizard && !busy && !installDone && !uninstallDone && (step > 0 || uninstallConfirm);

  return (
    <AppWindow
      title={mode === "uninstall" ? t.unTitle : t.setupTitle}
      icon={<SensMark className="size-5" />}
      badge={wizard ? t.version : undefined}
      lang={lang}
      zIndex={zSetup}
      onClose={closeSetup}
      onMinimize={minSetup}
      onFocus={focusSetup}
      className={simple ? "window-setup-simple" : "setup-size"}
      bodyClassName={simple ? "min-h-0 overflow-auto" : "setup-split grid min-h-0 overflow-hidden"}
      footer={
        wizard ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <LangToggle lang={lang} onChange={setLang} tr={t.langTr} en={t.langEn} />
            <span className="tracking-brand hidden font-medium text-muted sm:inline">{t.rbkFooter}</span>
            <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
              {showBack ? (
                <Button variant="ghost" onClick={back} disabled={busy}>
                  {t.back}
                </Button>
              ) : (
                <Button variant="quiet" onClick={closeSetup}>
                  {installDone || uninstallDone ? t.finish : t.cancel}
                </Button>
              )}
              {alreadyGate ? (
                <>
                  <Button variant="dangerGhost" onClick={() => openSetup("uninstall")}>
                    {t.uninstall}
                  </Button>
                  <Button variant="accent" onClick={() => void runInstall()}>
                    {t.repair}
                  </Button>
                </>
              ) : null}
              {uninstallConfirm ? (
                <Button variant="danger" onClick={() => void runUninstall()}>
                  {t.unConfirm}
                </Button>
              ) : null}
              {installDone ? (
                <Button variant="accent" onClick={openApp}>
                  {t.launch}
                </Button>
              ) : null}
              {canNext ? (
                <Button variant={step === 3 ? "accent" : "primary"} onClick={next}>
                  {step === 3 ? t.install : t.next}
                </Button>
              ) : null}
            </div>
          </div>
        ) : null
      }
    >
      {simple ? (
        <SimpleBody
          mode={mode}
          step={step}
          busy={busy}
          installed={installed}
          t={t}
          lang={lang}
          onLang={setLang}
          desktopShortcut={desktopShortcut}
          startShortcut={startShortcut}
          allUsers={locKind === "program"}
          setOpt={setOpt}
          setLoc={setLoc}
          removeData={removeData}
          setRemoveData={setRemoveData}
          onInstall={() => {
            useSetup.getState().setAccepted(true);
            void runInstall();
          }}
          onCustomize={() => setWizard(true)}
          onUninstall={() => void runUninstall()}
          onCancel={closeSetup}
          onLaunch={openApp}
          onRepair={() => void runInstall()}
          onOpenUninstall={() => openSetup("uninstall")}
        />
      ) : (
        <>
          <aside className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden bg-elevated px-4 py-8">
            <SensMark className="size-20" />
            <p className="mt-4 font-display text-2xl font-semibold tracking-wide">{t.wordmark}</p>
            <p className="mt-1 text-center text-xs tracking-wide text-accent">{t.intel}</p>
          </aside>
          <div className="relative min-h-0 overflow-auto px-5 py-5 sm:px-7 sm:py-6">
            <div className="relative min-h-full pb-8">
              <SetupBody />
            </div>
            {mode !== "uninstall" && !alreadyGate && step < 4 ? (
              <Dots total={5} current={Math.min(step, 4)} />
            ) : null}
          </div>
        </>
      )}
    </AppWindow>
  );
}

function SimpleBody({
  mode,
  step,
  busy,
  installed,
  t,
  lang,
  onLang,
  desktopShortcut,
  startShortcut,
  allUsers,
  setOpt,
  setLoc,
  removeData,
  setRemoveData,
  onInstall,
  onCustomize,
  onUninstall,
  onCancel,
  onLaunch,
  onRepair,
  onOpenUninstall,
}: {
  mode: string;
  step: number;
  busy: boolean;
  installed: boolean;
  t: (typeof copy)[Lang];
  lang: Lang;
  onLang: (l: "tr" | "en") => void;
  desktopShortcut: boolean;
  startShortcut: boolean;
  allUsers: boolean;
  setOpt: ReturnType<typeof useSetup.getState>["setOpt"];
  setLoc: ReturnType<typeof useSetup.getState>["setLoc"];
  removeData: boolean;
  setRemoveData: (v: boolean) => void;
  onInstall: () => void;
  onCustomize: () => void;
  onUninstall: () => void;
  onCancel: () => void;
  onLaunch: () => void;
  onRepair: () => void;
  onOpenUninstall: () => void;
}) {
  if (mode === "uninstall") {
    return (
      <div className="flex flex-col items-center px-6 py-7 text-center">
        <SensMark className="size-16" />
        <p className="mt-4 font-display text-2xl font-semibold tracking-wide">{t.wordmark}</p>
        <p className="mt-3 text-sm text-muted">{t.unLead}</p>
        {step === 0 ? (
          <>
            <div className="mt-5 w-full text-left">
              <CheckRow id="wipe" checked={removeData} onChange={setRemoveData} title={t.removeData} />
            </div>
            <div className="mt-6 grid w-full grid-cols-2 gap-2">
              <Button variant="danger" onClick={onUninstall}>
                {t.uninstall}
              </Button>
              <Button variant="ghost" onClick={onCancel}>
                {t.cancel}
              </Button>
            </div>
          </>
        ) : step === 1 ? (
          <p className="mt-6 text-sm text-muted">{t.unProgressLead}</p>
        ) : (
          <>
            <p className="mt-6 text-sm text-muted">{t.unDoneLead}</p>
            <Button className="mt-5" variant="accent" onClick={onCancel}>
              {t.finish}
            </Button>
          </>
        )}
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="flex flex-col items-center px-6 py-8 text-center">
        <SensMark className="size-16" />
        <p className="mt-4 font-display text-2xl font-semibold">{t.progressTitle}</p>
        <p className="mt-2 text-sm text-muted">{t.progressLead}</p>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="flex flex-col items-center px-6 py-8 text-center">
        <SensMark className="size-16" />
        <p className="mt-4 font-display text-2xl font-semibold">{t.doneTitle}</p>
        <p className="mt-2 text-sm text-muted">{t.doneLead}</p>
        <Button className="mt-5" variant="accent" onClick={onLaunch}>
          {t.launch}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center px-6 py-6 text-center">
      <div className="absolute top-2 right-2">
        <LangToggle lang={lang} onChange={onLang} tr={t.langTr} en={t.langEn} />
      </div>
      <SensMark className="size-16" />
      <p className="mt-4 font-display text-3xl font-semibold tracking-wide">{t.wordmark}</p>
      <p className="mt-1 text-xs font-semibold tracking-wide text-accent">{t.intel}</p>
      <p className="mt-1 text-xs text-muted">{t.intelSub}</p>
      <p className="mt-3 font-display text-xs font-semibold tracking-[0.2em] text-fg">{t.edition}</p>
      {installed ? (
        <div className="mt-6 grid w-full gap-2">
          <Button variant="accent" onClick={onLaunch}>
            {t.launch}
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="ghost" onClick={onRepair} disabled={busy}>
              {t.repair}
            </Button>
            <Button variant="dangerGhost" onClick={onOpenUninstall}>
              {t.uninstall}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6 grid w-full grid-cols-2 gap-2">
            <Button variant="accent" onClick={onInstall} disabled={busy}>
              {t.install}
            </Button>
            <Button variant="ghost" onClick={onCustomize}>
              {t.customize}
            </Button>
          </div>
          <div className="mt-5 w-full space-y-2 text-left">
            <CheckRow
              id="desk"
              checked={desktopShortcut}
              onChange={(v) => setOpt("desktopShortcut", v)}
              title={t.optDesktop}
            />
            <CheckRow
              id="start"
              checked={startShortcut}
              onChange={(v) => setOpt("startShortcut", v)}
              title={t.optStart}
            />
            <CheckRow
              id="all"
              checked={allUsers}
              onChange={(v) => setLoc(v ? "program" : "local")}
              title={t.optAllUsers}
            />
          </div>
          <p className="mt-4 text-xs text-faint">{t.licenseFoot}</p>
          <SetupDownloads t={t} />
        </>
      )}
    </div>
  );
}

function Dots({ total, current }: { total: number; current: number }) {
  return (
    <div className="pointer-events-none absolute right-5 bottom-4 hidden gap-1.5 md:flex">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={i === current ? "h-1.5 w-5 rounded-full bg-accent" : "size-1.5 rounded-full bg-faint/70"}
        />
      ))}
    </div>
  );
}

function LangToggle({
  lang,
  onChange,
  tr,
  en,
}: {
  lang: "tr" | "en";
  onChange: (l: "tr" | "en") => void;
  tr: string;
  en: string;
}) {
  return (
    <div className="flex rounded-md bg-elevated p-0.5 shadow-border">
      <button
        type="button"
        onClick={() => onChange("tr")}
        className={
          lang === "tr"
            ? "h-7 rounded-sm bg-subtle px-2.5 text-xs font-medium"
            : "h-7 rounded-sm px-2.5 text-xs font-medium text-muted"
        }
      >
        {tr}
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={
          lang === "en"
            ? "h-7 rounded-sm bg-subtle px-2.5 text-xs font-medium"
            : "h-7 rounded-sm px-2.5 text-xs font-medium text-muted"
        }
      >
        {en}
      </button>
    </div>
  );
}
