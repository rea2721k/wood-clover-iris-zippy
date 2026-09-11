import { GAMES, type GameProfile } from "./games";
import { gameCm } from "./math";

export type SliderRange = {
  min: number;
  max: number;
  step: number;
  def: number;
};

export type ScopeDef = {
  id: string;
  label: string;
  def: number;
  mult: number;
};

export type LibraryEntry = {
  name: string;
  label: string;
  short: string;
  featured: boolean;
  hip: SliderRange;
  hipLabel: string;
  hasVertical: boolean;
  verticalDef: number;
  hasAim: boolean;
  aimDef: number;
  hasScoped: boolean;
  scopedDef: number;
  hasVehicles: boolean;
  scopes: ScopeDef[];
  fov: number;
  fovType: "vertical" | "horizontal";
};

export type GameSetting = {
  general: number;
  vertical: number;
  aim: number;
  scoped: number;
  vehicles: number;
  ads: Record<string, number>;
  multipliers: Record<string, number>;
  calibrated: boolean;
  cm360: number;
  rawInput: boolean;
  accel: boolean;
  smoothing: boolean;
  invertY: boolean;
  fov: number;
};

export const FEATURED = [
  "PUBG: Battlegrounds",
  "Valorant",
  "Counter-Strike 2",
  "Apex Legends",
  "Call of Duty: Warzone",
  "Rainbow Six Siege",
  "Fortnite",
  "Overwatch 2",
  "The Finals",
  "Escape from Tarkov",
  "Destiny 2",
  "Marvel Rivals",
  "Counter-Strike: GO",
  "Battlefield 2042",
  "Helldivers 2",
] as const;

const LABELS: Record<string, string> = {
  "Call of Duty: Warzone": "Call of Duty",
  "Counter-Strike: GO": "CS2 (Legacy)",
};

const SHORT: Record<string, string> = {
  "PUBG: Battlegrounds": "PUBG",
  Valorant: "VAL",
  "Counter-Strike 2": "CS2",
  "Apex Legends": "APX",
  "Call of Duty: Warzone": "COD",
  "Rainbow Six Siege": "R6",
  Fortnite: "FN",
  "Overwatch 2": "OW2",
  "The Finals": "FIN",
  "Escape from Tarkov": "EFT",
  "Destiny 2": "D2",
  "Marvel Rivals": "MR",
  "Counter-Strike: GO": "CS",
  "Battlefield 2042": "BF",
  "Helldivers 2": "HD2",
};

const PUBG_SCOPES: ScopeDef[] = [
  { id: "x1", label: "1x", def: 35, mult: 1 },
  { id: "x2", label: "2x", def: 32, mult: 0.9 },
  { id: "x3", label: "3x", def: 28, mult: 0.8 },
  { id: "x4", label: "4x", def: 24, mult: 0.7 },
  { id: "x6", label: "6x", def: 20, mult: 0.6 },
  { id: "x8", label: "8x", def: 18, mult: 0.55 },
  { id: "x15", label: "15x", def: 18, mult: 0.4 },
];

const APEX_SCOPES: ScopeDef[] = [
  { id: "x1", label: "1x", def: 1, mult: 1 },
  { id: "x2", label: "2x", def: 1, mult: 0.9 },
  { id: "x3", label: "3x", def: 1, mult: 0.85 },
  { id: "x4", label: "4x", def: 1, mult: 0.8 },
  { id: "x6", label: "6x", def: 1, mult: 0.7 },
  { id: "x8", label: "8x", def: 1, mult: 0.65 },
  { id: "x10", label: "10x", def: 1, mult: 0.55 },
];

const R6_SCOPES: ScopeDef[] = [
  { id: "x1", label: "1.0x", def: 50, mult: 0.6 },
  { id: "x15", label: "1.5x", def: 50, mult: 0.55 },
  { id: "x2", label: "2.0x", def: 50, mult: 0.5 },
  { id: "x25", label: "2.5x", def: 50, mult: 0.45 },
  { id: "x3", label: "3.0x", def: 50, mult: 0.4 },
  { id: "x4", label: "4.0x", def: 50, mult: 0.35 },
  { id: "x5", label: "5.0x", def: 50, mult: 0.3 },
  { id: "x12", label: "12x", def: 50, mult: 0.22 },
];

const COD_SCOPES: ScopeDef[] = [
  { id: "ads", label: "ADS", def: 1, mult: 1 },
  { id: "low", label: "Low", def: 1, mult: 0.95 },
  { id: "high", label: "High", def: 1, mult: 0.9 },
  { id: "x2", label: "2x", def: 1, mult: 0.85 },
  { id: "x3", label: "3x", def: 1, mult: 0.75 },
  { id: "x4", label: "4x", def: 1, mult: 0.65 },
  { id: "x6", label: "6x", def: 1, mult: 0.55 },
  { id: "x8", label: "8x", def: 1, mult: 0.45 },
];

const TARKOV_SCOPES: ScopeDef[] = [
  { id: "ads", label: "ADS", def: 1, mult: 1 },
  { id: "x1", label: "1x", def: 1, mult: 0.95 },
  { id: "x2", label: "2x", def: 1, mult: 0.85 },
  { id: "x4", label: "4x", def: 1, mult: 0.7 },
  { id: "x6", label: "6x", def: 1, mult: 0.6 },
  { id: "x8", label: "8x", def: 1, mult: 0.5 },
  { id: "x12", label: "12x", def: 1, mult: 0.4 },
  { id: "x16", label: "16x", def: 1, mult: 0.32 },
];

function genericScopes(p: GameProfile): ScopeDef[] {
  if (p.mode === "percent") {
    return [
      { id: "ads", label: "Targeting", def: 50, mult: 1 },
      { id: "scope", label: "Scope", def: 45, mult: 0.9 },
      { id: "sniper", label: "Sniper", def: 40, mult: 0.75 },
    ];
  }
  return [
    { id: "ads", label: "ADS", def: 1, mult: 1 },
    { id: "scoped", label: "Scoped", def: 1, mult: 0.8 },
  ];
}

function hipFor(p: GameProfile): SliderRange {
  if (p.mode === "pubg") return { min: 1, max: 100, step: 1, def: 50 };
  if (p.mode === "percent") return { min: 1, max: 100, step: 0.1, def: 12 };
  if (p.name === "Valorant") return { min: 0.01, max: 5, step: 0.01, def: 0.4 };
  if (p.name.startsWith("Call of Duty")) return { min: 0.1, max: 20, step: 0.01, def: 6 };
  if (p.name === "Rainbow Six Siege") return { min: 1, max: 100, step: 1, def: 12 };
  if (p.name === "Overwatch 2") return { min: 0.5, max: 100, step: 0.1, def: 15 };
  if (p.name === "Escape from Tarkov") return { min: 0.1, max: 3, step: 0.01, def: 0.4 };
  if (p.engine.includes("Source")) return { min: 0.01, max: 8, step: 0.01, def: 1 };
  if (p.mode === "manual") return { min: 1, max: 100, step: 0.1, def: 50 };
  return { min: 0.01, max: 20, step: 0.01, def: 1 };
}

const OVERRIDES: Record<string, Partial<LibraryEntry>> = {
  "PUBG: Battlegrounds": {
    hip: { min: 1, max: 100, step: 1, def: 43 },
    hipLabel: "General Sensitivity",
    hasAim: true,
    aimDef: 41,
    hasScoped: true,
    scopedDef: 40,
    hasVehicles: true,
    scopes: PUBG_SCOPES,
    fov: 80,
    fovType: "vertical",
  },
  Valorant: {
    hip: { min: 0.01, max: 5, step: 0.01, def: 0.4 },
    hipLabel: "Sensitivity",
    scopes: [
      { id: "ads", label: "ADS", def: 1, mult: 1 },
      { id: "x25", label: "2.5x", def: 1, mult: 0.9 },
      { id: "x5", label: "5x", def: 1, mult: 0.8 },
    ],
    fov: 103,
    fovType: "horizontal",
  },
  "Counter-Strike 2": {
    hipLabel: "sensitivity",
    scopes: [{ id: "zoom", label: "zoom_sensitivity", def: 1, mult: 1 }],
    fov: 90,
    fovType: "horizontal",
  },
  "Apex Legends": {
    hip: { min: 0.2, max: 10, step: 0.1, def: 1.5 },
    hasVehicles: true,
    scopes: APEX_SCOPES,
    fov: 110,
    fovType: "horizontal",
  },
  "Call of Duty: Warzone": {
    hip: { min: 0.1, max: 20, step: 0.01, def: 6 },
    hasVehicles: true,
    scopes: COD_SCOPES,
    fov: 120,
    fovType: "horizontal",
  },
  "Rainbow Six Siege": {
    hip: { min: 1, max: 100, step: 1, def: 12 },
    scopes: R6_SCOPES,
    fov: 90,
    fovType: "vertical",
  },
  Fortnite: {
    hip: { min: 1, max: 100, step: 0.1, def: 10 },
    hipLabel: "X/Y Sensitivity",
    scopes: [
      { id: "ads", label: "Targeting", def: 12, mult: 1 },
      { id: "scope", label: "Scope", def: 10, mult: 0.85 },
      { id: "sniper", label: "Sniper", def: 8, mult: 0.7 },
    ],
    fov: 80,
    fovType: "horizontal",
  },
  "Overwatch 2": {
    hip: { min: 0.5, max: 100, step: 0.1, def: 15 },
    scopes: [{ id: "ads", label: "Relative aim", def: 100, mult: 1 }],
    fov: 103,
    fovType: "horizontal",
  },
  "The Finals": {
    hip: { min: 0.1, max: 10, step: 0.01, def: 1.2 },
    scopes: [{ id: "ads", label: "ADS", def: 1, mult: 1 }],
    fov: 90,
    fovType: "vertical",
  },
  "Escape from Tarkov": {
    hip: { min: 0.1, max: 3, step: 0.01, def: 0.4 },
    scopes: TARKOV_SCOPES,
    fov: 75,
    fovType: "vertical",
  },
  "Destiny 2": {
    hip: { min: 1, max: 20, step: 0.1, def: 8 },
    scopes: [
      { id: "ads", label: "ADS", def: 1, mult: 1 },
      { id: "sniper", label: "Sniper", def: 1, mult: 0.6 },
    ],
    fov: 105,
    fovType: "horizontal",
  },
  "Marvel Rivals": {
    hip: { min: 0.1, max: 10, step: 0.01, def: 2 },
    scopes: [{ id: "ads", label: "ADS", def: 1, mult: 1 }],
    fov: 103,
    fovType: "horizontal",
  },
  "Counter-Strike: GO": {
    hipLabel: "sensitivity",
    scopes: [{ id: "zoom", label: "zoom_sensitivity", def: 1, mult: 1 }],
    fov: 90,
    fovType: "horizontal",
  },
  "Battlefield 2042": {
    hip: { min: 1, max: 100, step: 1, def: 20 },
    hasVehicles: true,
    scopes: [
      { id: "x1", label: "1x", def: 100, mult: 1 },
      { id: "x2", label: "2x", def: 90, mult: 0.9 },
      { id: "x4", label: "4x", def: 75, mult: 0.75 },
      { id: "x6", label: "6x", def: 60, mult: 0.6 },
      { id: "x10", label: "10x", def: 45, mult: 0.45 },
    ],
    fov: 105,
    fovType: "vertical",
  },
  "Helldivers 2": {
    hip: { min: 0.1, max: 5, step: 0.01, def: 1 },
    hasVehicles: true,
    scopes: [{ id: "ads", label: "ADS", def: 1, mult: 1 }],
    fov: 90,
    fovType: "horizontal",
  },
};

function shortOf(name: string) {
  if (SHORT[name]) return SHORT[name];
  const parts = name.replace(/[^a-zA-Z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function entryFor(name: string): LibraryEntry {
  const p = GAMES.find((g) => g.name === name) ?? GAMES[0];
  const hip = hipFor(p);
  const base: LibraryEntry = {
    name: p.name,
    label: LABELS[p.name] ?? p.name,
    short: shortOf(p.name),
    featured: FEATURED.includes(p.name as (typeof FEATURED)[number]),
    hip,
    hipLabel: "Sensitivity",
    hasVertical: true,
    verticalDef: 1,
    hasAim: false,
    aimDef: hip.def,
    hasScoped: false,
    scopedDef: hip.def,
    hasVehicles: false,
    scopes: genericScopes(p),
    fov: 90,
    fovType: "horizontal",
  };
  return { ...base, ...OVERRIDES[p.name], name: p.name };
}

const CACHE: Record<string, GameSetting> = {};

export function defaultSetting(name: string): GameSetting {
  if (CACHE[name]) return CACHE[name];
  const e = entryFor(name);
  const p = GAMES.find((g) => g.name === name) ?? GAMES[0];
  const ads: Record<string, number> = {};
  const multipliers: Record<string, number> = {};
  for (const s of e.scopes) {
    ads[s.id] = s.def;
    multipliers[s.id] = s.mult;
  }
  const cm = gameCm(p, 800, e.hip.def);
  CACHE[name] = {
    general: e.hip.def,
    vertical: e.verticalDef,
    aim: e.aimDef,
    scoped: e.scopedDef,
    vehicles: e.hip.def,
    ads,
    multipliers,
    calibrated: Number.isFinite(cm),
    cm360: Number.isFinite(cm) ? cm : 0,
    rawInput: true,
    accel: false,
    smoothing: false,
    invertY: false,
    fov: e.fov,
  };
  return CACHE[name];
}

export function cloneSetting(name: string): GameSetting {
  const d = defaultSetting(name);
  return {
    ...d,
    ads: { ...d.ads },
    multipliers: { ...d.multipliers },
  };
}

export function libraryGames() {
  const featured = FEATURED.map((n) => GAMES.find((g) => g.name === n)).filter(
    (g): g is GameProfile => Boolean(g),
  );
  const rest = GAMES.filter((g) => !FEATURED.includes(g.name as (typeof FEATURED)[number]));
  return { featured, rest };
}
