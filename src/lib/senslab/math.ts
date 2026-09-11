import type { GameProfile } from "./games";

export type MatchMode = "360" | "0" | "0.5" | "1";
export type FovType = "vertical" | "horizontal";

export const PUBG_BASE_CM = 64.3;
export const PUBG_BASE_SENS = 50;
export const PUBG_BASE_DPI = 800;

export const PUBG_SCOPES = [
  { id: "red", label: "Red Dot" },
  { id: "x2", label: "2×" },
  { id: "x3", label: "3×" },
  { id: "x4", label: "4×" },
  { id: "x6", label: "6×" },
  { id: "x8", label: "8×" },
  { id: "x15", label: "15×" },
] as const;

export const RESOLUTIONS = [
  "1280×720",
  "1280×960",
  "1440×1080",
  "1600×900",
  "1680×1050",
  "1920×1080",
  "1920×1200",
  "2560×1080",
  "2560×1440",
  "3440×1440",
  "3840×2160",
] as const;

export const MONITORS: Record<string, string> = {
  "60": "Standard",
  "120": "Reference",
  "144": "ZOWIE XL2731",
  "240": "ZOWIE XL2546",
  "280": "ZOWIE XL2546X+",
  "360": "ZOWIE XL2566K",
  "400": "ZOWIE XL2566X+",
  "540": "ZOWIE XL2586X",
  "600": "ZOWIE XL2586X+",
};

export function clamp(v: number, a: number, b: number) {
  return Math.min(b, Math.max(a, v));
}

export function parseRes(v: string) {
  const [w, h] = v.split("×").map(Number);
  return { w: w || 1920, h: h || 1080 };
}

export function hfov(view: number, w: number, h: number, type: FovType) {
  if (type === "horizontal") return view;
  const r = (view * Math.PI) / 180;
  return ((2 * Math.atan(Math.tan(r / 2) * (w / h))) * 180) / Math.PI;
}

function effectiveSens(p: GameProfile, sens: number) {
  if (p.mode === "percent") return sens / 100;
  return sens;
}

export function pubgCm(dpi: number, sens: number) {
  const s = clamp(sens || 50, 1, 100);
  return (PUBG_BASE_CM * (PUBG_BASE_DPI / dpi)) / Math.pow(10, (s - PUBG_BASE_SENS) / 50);
}

export function pubgSensForCm(dpi: number, cm: number) {
  if (!(cm > 0)) return 50;
  return clamp(
    PUBG_BASE_SENS + 50 * Math.log10((PUBG_BASE_CM * (PUBG_BASE_DPI / dpi)) / cm),
    1,
    100,
  );
}

export function cm360Linear(p: GameProfile, dpi: number, sens: number) {
  const es = effectiveSens(p, sens);
  if (!p.yaw || es <= 0) return NaN;
  return 914.4 / (dpi * es * p.yaw);
}

export function gameCm(p: GameProfile, dpi: number, sens: number) {
  if (p.mode === "pubg") return pubgCm(dpi, sens);
  return cm360Linear(p, dpi, sens);
}

export function sensForCm(p: GameProfile, dpi: number, cm: number) {
  if (p.mode === "pubg") return pubgSensForCm(dpi, cm);
  if (!p.yaw) return NaN;
  const es = 914.4 / (dpi * cm * p.yaw);
  return p.mode === "percent" ? es * 100 : es;
}

export function conversionMultiplier(mode: MatchMode, sf: number, tf: number) {
  if (mode === "360") return 1;
  const exp = mode === "0" ? 0 : mode === "0.5" ? 0.5 : 1;
  const sfv = Math.tan((sf * Math.PI) / 360);
  const tfv = Math.tan((tf * Math.PI) / 360);
  if (!(sfv > 0 && tfv > 0)) return 1;
  return Math.pow(sfv / tfv, exp);
}

export type ConvertResult = {
  target: number;
  cm: number;
  sourceCm: number;
  edpi: number;
  dstHFov: number;
  manual: boolean;
};

export function convert(opts: {
  src: GameProfile;
  dst: GameProfile;
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
  measuredCm?: number;
}): ConvertResult {
  const sr = parseRes(opts.srcRes);
  const tr = parseRes(opts.dstRes);
  const sf = hfov(opts.srcFov, sr.w, sr.h, opts.srcFovType);
  const tf = hfov(opts.dstFov, tr.w, tr.h, opts.dstFovType);
  const manual = opts.src.mode === "manual" || opts.dst.mode === "manual";
  const measured = opts.measuredCm && opts.measuredCm > 0 ? opts.measuredCm : undefined;
  if (manual && !measured) {
    return { target: NaN, cm: NaN, sourceCm: NaN, edpi: NaN, dstHFov: tf, manual: true };
  }
  let sourceCm = measured ?? gameCm(opts.src, opts.srcDpi, opts.srcSens);
  if (!Number.isFinite(sourceCm)) sourceCm = 35;
  const targetCm = sourceCm * conversionMultiplier(opts.match, sf, tf);
  const target = sensForCm(opts.dst, opts.dstDpi, targetCm);
  const cm = gameCm(opts.dst, opts.dstDpi, target);
  const edpi = opts.dst.mode === "percent" ? opts.dstDpi * (target / 100) : opts.dstDpi * target;
  return { target, cm, sourceCm, edpi, dstHFov: tf, manual: false };
}

export function pixels360(cm: number, dpi: number) {
  if (!(cm > 0) || !(dpi > 0)) return NaN;
  return (cm / 2.54) * dpi;
}

export function fmtSens(n: number, step: number) {
  if (!Number.isFinite(n)) return "—";
  if (step < 0.05) return n.toFixed(2);
  if (step < 1) return n.toFixed(1);
  return n.toFixed(0);
}

export function qualityTone(q: string) {
  if (q === "Verified" || q === "Community-verified") return "exact" as const;
  if (q === "Calibrated") return "cal" as const;
  if (q === "Manual") return "manual" as const;
  return "est" as const;
}

export function confidenceScore(q: string) {
  if (q === "Verified") return 98;
  if (q === "Community-verified") return 86;
  if (q === "Calibrated") return 92;
  if (q === "Manual") return 40;
  return 62;
}
