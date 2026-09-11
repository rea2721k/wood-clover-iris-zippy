import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "./i18n";
import { PATHS } from "./i18n";

export type SetupMode = "install" | "repair" | "uninstall";
export type LocKind = "local" | "program" | "custom";
export type PollRate = 125 | 500 | 1000 | 2000 | 4000 | 8000;

type State = {
  lang: Lang;
  installed: boolean;
  installPath: string;
  locKind: LocKind;
  customPath: string;
  desktopShortcut: boolean;
  startShortcut: boolean;
  uninstallShortcut: boolean;
  launchAfter: boolean;
  accepted: boolean;
  setupOpen: boolean;
  setupMin: boolean;
  setupMode: SetupMode;
  wizard: boolean;
  removeData: boolean;
  step: number;
  busy: boolean;
  progress: number;
  progressKey: string;
  appOpen: boolean;
  appMin: boolean;
  pollRate: PollRate;
  zSetup: number;
  zApp: number;
  zTop: number;
};

type Actions = {
  setLang: (lang: Lang) => void;
  openSetup: (mode?: SetupMode) => void;
  closeSetup: () => void;
  minSetup: () => void;
  openApp: () => void;
  closeApp: () => void;
  minApp: () => void;
  focusSetup: () => void;
  focusApp: () => void;
  setStep: (step: number) => void;
  setAccepted: (v: boolean) => void;
  setWizard: (v: boolean) => void;
  setRemoveData: (v: boolean) => void;
  setLoc: (kind: LocKind) => void;
  setCustomPath: (path: string) => void;
  setOpt: (
    key: "desktopShortcut" | "startShortcut" | "uninstallShortcut" | "launchAfter",
    v: boolean,
  ) => void;
  setPollRate: (rate: PollRate) => void;
  runInstall: () => Promise<void>;
  runUninstall: () => Promise<void>;
  resetWizard: () => void;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function resolvedPath(s: State): string {
  if (s.locKind === "program") return PATHS.program[s.lang];
  if (s.locKind === "custom" && s.customPath.trim()) return s.customPath.trim();
  return PATHS.local[s.lang];
}

export const useSetup = create<State & Actions>()(
  persist(
    (set, get) => ({
      lang: "tr",
      installed: false,
      installPath: PATHS.local.tr,
      locKind: "local",
      customPath: PATHS.local.tr,
      desktopShortcut: true,
      startShortcut: true,
      uninstallShortcut: true,
      launchAfter: true,
      accepted: false,
      setupOpen: false,
      setupMin: false,
      setupMode: "install",
      wizard: false,
      removeData: true,
      step: 0,
      busy: false,
      progress: 0,
      progressKey: "",
      appOpen: true,
      appMin: false,
      pollRate: 1000,
      zSetup: 20,
      zApp: 10,
      zTop: 20,

      setLang: (lang) =>
        set((s) => ({
          lang,
          installPath:
            s.locKind === "custom"
              ? s.customPath
              : s.locKind === "program"
                ? PATHS.program[lang]
                : PATHS.local[lang],
          customPath: s.locKind === "custom" ? s.customPath : PATHS.local[lang],
        })),

      openSetup: (mode) => {
        const s = get();
        const z = s.zTop + 1;
        const nextMode: SetupMode =
          mode ?? (s.installed ? "repair" : "install");
        set({
          setupOpen: true,
          setupMin: false,
          setupMode: nextMode,
          wizard: false,
          step: 0,
          accepted: nextMode !== "install",
          progress: 0,
          progressKey: "",
          zSetup: z,
          zTop: z,
        });
      },
      closeSetup: () =>
        set({
          setupOpen: false,
          setupMin: false,
          busy: false,
          step: 0,
          progress: 0,
        }),
      minSetup: () => set({ setupMin: true }),
      openApp: () => {
        const z = get().zTop + 1;
        set({ appOpen: true, appMin: false, zApp: z, zTop: z });
      },
      closeApp: () => set({ appOpen: false, appMin: false }),
      minApp: () => set({ appMin: true }),
      focusSetup: () => {
        const z = get().zTop + 1;
        set({ zSetup: z, zTop: z, setupMin: false });
      },
      focusApp: () => {
        const z = get().zTop + 1;
        set({ zApp: z, zTop: z, appMin: false });
      },
      setStep: (step) => set({ step }),
      setAccepted: (accepted) => set({ accepted }),
      setWizard: (wizard) => set({ wizard, step: 0 }),
      setRemoveData: (removeData) => set({ removeData }),
      setLoc: (locKind) =>
        set((s) => ({
          locKind,
          installPath:
            locKind === "program"
              ? PATHS.program[s.lang]
              : locKind === "custom"
                ? s.customPath
                : PATHS.local[s.lang],
        })),
      setCustomPath: (customPath) =>
        set({ customPath, locKind: "custom", installPath: customPath }),
      setOpt: (key, v) => set({ [key]: v }),
      setPollRate: (pollRate) => set({ pollRate }),

      runInstall: async () => {
        const s = get();
        if (s.busy) return;
        const files = ["exe", "ico", "uninstall", "desktop", "start", "unShortcut", "registry"];
        set({
          busy: true,
          setupMode: s.installed ? "repair" : "install",
          step: 4,
          progress: 0,
          progressKey: files[0],
        });
        const n = files.length;
        void fetch("/api/install", { method: "POST", cache: "no-store" }).catch(() => undefined);
        for (let i = 0; i < n; i++) {
          if (!get().setupOpen) return;
          set({ progressKey: files[i], progress: Math.round((i / n) * 100) });
          await sleep(380 + (i === 0 || i === 2 ? 220 : 0));
        }
        const path = resolvedPath(get());
        const launch = get().launchAfter;
        set({
          busy: false,
          progress: 100,
          progressKey: "registry",
          installed: true,
          installPath: path,
          step: 5,
        });
        if (launch) {
          await sleep(280);
          set({ setupMin: true });
          get().openApp();
        }
      },

      runUninstall: async () => {
        if (get().busy) return;
        const wipe = get().removeData;
        const files = ["app", "desktop", "start", "unShortcut", "registry", "files"];
        set({
          busy: true,
          setupMode: "uninstall",
          step: 1,
          progress: 0,
          progressKey: files[0],
          appOpen: false,
          appMin: false,
        });
        const n = files.length;
        void fetch("/api/uninstall", { method: "POST", cache: "no-store" }).catch(() => undefined);
        for (let i = 0; i < n; i++) {
          if (!get().setupOpen) return;
          set({ progressKey: files[i], progress: Math.round((i / n) * 100) });
          await sleep(340);
        }
        set({
          busy: false,
          progress: 100,
          installed: false,
          step: 2,
          accepted: false,
          locKind: "local",
          removeData: true,
        });
        if (wipe) {
          try {
            localStorage.removeItem("senslab-lab-v13");
          } catch {
            /* ignore */
          }
        }
      },

      resetWizard: () =>
        set((s) => ({
          step: 0,
          setupMode: s.installed ? "repair" : "install",
          progress: 0,
          progressKey: "",
          accepted: s.installed,
        })),
    }),
    {
      name: "senslab-setup",
      partialize: (s) => ({
        lang: s.lang,
        installed: s.installed,
        installPath: s.installPath,
        desktopShortcut: s.desktopShortcut,
        startShortcut: s.startShortcut,
        uninstallShortcut: s.uninstallShortcut,
        launchAfter: s.launchAfter,
        pollRate: s.pollRate,
      }),
    },
  ),
);
