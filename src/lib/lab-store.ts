import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GAMES } from "./senslab/games";
import { MICE } from "./senslab/mice";
import { cloneSetting, defaultSetting, type GameSetting } from "./senslab/library";
import { sensForCm, type FovType, type MatchMode } from "./senslab/math";

export type Tab =
  | "convert"
  | "games"
  | "monitor"
  | "mouse"
  | "poll"
  | "calibrate"
  | "profiles"
  | "confidence";

export type GameSubTab = "general" | "ads" | "scopes" | "vehicles" | "misc" | "advanced";
export type CalMethod = "pad" | "ingame" | "counts";

export type SavedProfile = {
  id: string;
  name: string;
  game: string;
  at: number;
  dpi: number;
  mouseHz: number;
  monitorHz: number;
  monitorId: string;
  mouse: string;
  setting: GameSetting;
};

export type Crosshair = {
  color: string;
  gap: number;
  length: number;
  thickness: number;
  outline: boolean;
};

type State = {
  tab: Tab;
  subTab: GameSubTab;
  previewScope: string;
  activeGame: string;
  settings: Record<string, GameSetting>;
  srcGame: string;
  dstGame: string;
  srcDpi: number;
  dstDpi: number;
  srcSens: number;
  srcRes: string;
  dstRes: string;
  srcFov: number;
  dstFov: number;
  srcFovType: FovType;
  dstFovType: FovType;
  match: MatchMode;
  measuredCm: string;
  mouse: string;
  dpi: number;
  mouseHz: number;
  monitorId: string;
  monitorHz: number;
  monitorRes: string;
  monitorNative: boolean;
  calMethod: CalMethod;
  gameQuery: string;
  detectedName: string;
  detectedVidPid: string;
  profiles: SavedProfile[];
  crosshair: Crosshair;
  libraryExpanded: boolean;
  requestedGames: string[];
};

type Actions = {
  setTab: (tab: Tab) => void;
  setSubTab: (subTab: GameSubTab) => void;
  set: <K extends keyof State>(key: K, value: State[K]) => void;
  setting: (game?: string) => GameSetting;
  patchSetting: (game: string, patch: Partial<GameSetting>) => void;
  setAds: (game: string, id: string, value: number) => void;
  setMult: (game: string, id: string, value: number) => void;
  calibrateGame: (game: string, cm: number) => void;
  resetGame: (game: string) => void;
  applyCmToGame: (game: string, cm: number) => void;
  saveProfile: (name: string) => void;
  loadProfile: (id: string) => void;
  deleteProfile: (id: string) => void;
  importSetting: (game: string, setting: GameSetting) => void;
  swap: () => void;
  reset: () => void;
  setDetected: (name: string, vidpid: string) => void;
};

const defaultCrosshair: Crosshair = {
  color: "#2ad4ea",
  gap: 4,
  length: 10,
  thickness: 2,
  outline: true,
};

const defaults: State = {
  tab: "games",
  subTab: "general",
  previewScope: "hip",
  activeGame: "PUBG: Battlegrounds",
  settings: { "PUBG: Battlegrounds": cloneSetting("PUBG: Battlegrounds") },
  srcGame: "Valorant",
  dstGame: "PUBG: Battlegrounds",
  srcDpi: 1600,
  dstDpi: 1600,
  srcSens: 0.4,
  srcRes: "1920×1080",
  dstRes: "1920×1080",
  srcFov: 103,
  dstFov: 80,
  srcFovType: "horizontal",
  dstFovType: "vertical",
  match: "360",
  measuredCm: "86.7",
  mouse: "AUTO / ANY MOUSE",
  dpi: 800,
  mouseHz: 1000,
  monitorId: "detected",
  monitorHz: 60,
  monitorRes: "1920×1080",
  monitorNative: false,
  calMethod: "pad",
  gameQuery: "",
  detectedName: "",
  detectedVidPid: "",
  profiles: [],
  crosshair: defaultCrosshair,
  libraryExpanded: false,
  requestedGames: [],
};

function writeSetting(s: State, game: string, next: GameSetting): State {
  return { ...s, settings: { ...s.settings, [game]: next } };
}

export const useLab = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...defaults,
      setTab: (tab) => set({ tab }),
      setSubTab: (subTab) => set({ subTab }),
      set: (key, value) => set({ [key]: value } as Partial<State>),
      setting: (game) => {
        const name = game ?? get().activeGame;
        return get().settings[name] ?? defaultSetting(name);
      },
      patchSetting: (game, patch) => {
        const cur = get().settings[game] ?? cloneSetting(game);
        set((s) => writeSetting(s, game, { ...cur, ...patch }));
      },
      setAds: (game, id, value) => {
        const cur = get().settings[game] ?? cloneSetting(game);
        set((s) => writeSetting(s, game, { ...cur, ads: { ...cur.ads, [id]: value } }));
      },
      setMult: (game, id, value) => {
        const cur = get().settings[game] ?? cloneSetting(game);
        set((s) =>
          writeSetting(s, game, { ...cur, multipliers: { ...cur.multipliers, [id]: value } }),
        );
      },
      calibrateGame: (game, cm) => {
        const dpi = get().dpi || 800;
        const p = GAMES.find((g) => g.name === game) ?? GAMES[0];
        let general = sensForCm(p, dpi, cm);
        if (!Number.isFinite(general)) general = get().setting(game).general;
        const cur = get().settings[game] ?? cloneSetting(game);
        const prev = cur.general || 1;
        const scale = prev > 0 ? general / prev : 1;
        const independent = p.mode === "pubg" || p.mode === "percent";
        const ads: Record<string, number> = { ...cur.ads };
        if (independent) {
          for (const id of Object.keys(ads)) {
            ads[id] = ads[id] * scale;
          }
        }
        set((s) =>
          writeSetting(s, game, {
            ...cur,
            general,
            ads,
            cm360: cm,
            calibrated: true,
          }),
        );
        set({ measuredCm: String(cm) });
      },
      resetGame: (game) => {
        set((s) => writeSetting(s, game, cloneSetting(game)));
      },
      applyCmToGame: (game, cm) => {
        get().calibrateGame(game, cm);
        set({ activeGame: game, tab: "games" });
      },
      saveProfile: (name) => {
        const s = get();
        const setting = s.settings[s.activeGame] ?? cloneSetting(s.activeGame);
        const profile: SavedProfile = {
          id: `${Date.now()}`,
          name: name.trim() || s.activeGame,
          game: s.activeGame,
          at: Date.now(),
          dpi: s.dpi,
          mouseHz: s.mouseHz,
          monitorHz: s.monitorHz,
          monitorId: s.monitorId,
          mouse: s.mouse,
          setting: {
            ...setting,
            ads: { ...setting.ads },
            multipliers: { ...setting.multipliers },
          },
        };
        set({ profiles: [profile, ...s.profiles].slice(0, 24) });
      },
      loadProfile: (id) => {
        const p = get().profiles.find((x) => x.id === id);
        if (!p) return;
        set((s) => ({
          ...writeSetting(s, p.game, {
            ...p.setting,
            ads: { ...p.setting.ads },
            multipliers: { ...p.setting.multipliers },
          }),
          activeGame: p.game,
          dpi: p.dpi,
          srcDpi: p.dpi,
          dstDpi: p.dpi,
          mouseHz: p.mouseHz,
          monitorHz: p.monitorHz,
          monitorId: p.monitorId,
          mouse: p.mouse,
          tab: "games",
        }));
      },
      deleteProfile: (id) => set({ profiles: get().profiles.filter((p) => p.id !== id) }),
      importSetting: (game, setting) => {
        set((s) =>
          writeSetting(s, game, {
            ...cloneSetting(game),
            ...setting,
            ads: { ...setting.ads },
            multipliers: { ...setting.multipliers },
          }),
        );
        set({ activeGame: game, tab: "games" });
      },
      swap: () => {
        const s = get();
        set({
          srcGame: s.dstGame,
          dstGame: s.srcGame,
          srcDpi: s.dstDpi,
          dstDpi: s.srcDpi,
          srcRes: s.dstRes,
          dstRes: s.srcRes,
          srcFov: s.dstFov,
          dstFov: s.srcFov,
          srcFovType: s.dstFovType,
          dstFovType: s.srcFovType,
        });
      },
      reset: () =>
        set({
          ...defaults,
          detectedName: get().detectedName,
          detectedVidPid: get().detectedVidPid,
          settings: { "PUBG: Battlegrounds": cloneSetting("PUBG: Battlegrounds") },
        }),
      setDetected: (detectedName, detectedVidPid) => set({ detectedName, detectedVidPid }),
    }),
    {
      name: "senslab-lab-v15",
      partialize: (s) => ({
        tab: s.tab,
        activeGame: s.activeGame,
        settings: s.settings,
        srcGame: s.srcGame,
        dstGame: s.dstGame,
        srcDpi: s.srcDpi,
        dstDpi: s.dstDpi,
        srcSens: s.srcSens,
        mouse: s.mouse,
        dpi: s.dpi,
        mouseHz: s.mouseHz,
        monitorId: s.monitorId,
        monitorHz: s.monitorHz,
        monitorRes: s.monitorRes,
        monitorNative: s.monitorNative,
        match: s.match,
        profiles: s.profiles,
        crosshair: s.crosshair,
        calMethod: s.calMethod,
        measuredCm: s.measuredCm,
        requestedGames: s.requestedGames,
      }),
    },
  ),
);

export function gameByName(name: string) {
  return GAMES.find((g) => g.name === name) ?? GAMES[0];
}
