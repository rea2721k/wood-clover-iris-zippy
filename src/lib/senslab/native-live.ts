export type NativeMouse = { name: string; vidpid: string; path?: string };
export type NativeDisplay = {
  monitorName: string;
  brand?: string;
  model?: string;
  manufacturer?: string;
  connection?: string;
  width: number;
  height: number;
  refresh: number;
  primary?: boolean;
};
export type NativePoll = {
  hz: number;
  avgIntervalMs: number;
  jitterMs: number;
  p95Ms: number;
  consistency: number;
  state: string;
  samples: number[];
  reports?: number;
  source?: string;
  device?: string;
};
export type NativePollDevice = { name: string; path: string; vidpid: string; hz: number; reports: number };
export type NativeUlx = {
  connected: boolean;
  name?: string;
  vidpid?: string;
  pollHz?: number;
  dpi?: number;
  lodMm?: number;
  motionSync?: number | null;
  batteryPct?: number;
  firmware?: string;
  dongleFw?: string;
  serial?: string;
  rssi?: number;
  charging?: number;
};
export type NativeStatus = {
  native: boolean;
  installed: boolean;
  installDir: string;
  poll: NativePoll;
  mice: NativeMouse[];
  displays: NativeDisplay[];
  systemDpi?: number;
  ulx?: NativeUlx;
};

let native = false;
let live: NativePoll = {
  hz: 0,
  avgIntervalMs: 0,
  jitterMs: 0,
  p95Ms: 0,
  consistency: 0,
  state: "IDLE",
  samples: [],
};
let mice: NativeMouse[] = [];
let displays: NativeDisplay[] = [];
let ulx: NativeUlx | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

export function isNativeHost() {
  return native || (typeof window !== "undefined" && Boolean((window as Window & { __SENSLAB_NATIVE__?: boolean }).__SENSLAB_NATIVE__));
}

export function nativeLaunchMode(): "setup" | "app" | "web" {
  if (typeof window === "undefined") return "web";
  const w = window as Window & { __SENSLAB_NATIVE__?: boolean; __SENSLAB_MODE__?: string };
  if (w.__SENSLAB_MODE__ === "setup" || w.__SENSLAB_MODE__ === "app") return w.__SENSLAB_MODE__;
  if (w.__SENSLAB_NATIVE__) return "app";
  return "web";
}

export function nativePoll() {
  return live;
}
export function nativeMice() {
  return mice;
}
export function nativeDisplays() {
  return displays;
}
export function nativeUlx() {
  return ulx;
}

export function subscribeNative(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function ingestStatus(s: NativeStatus) {
  native = true;
  if (typeof window !== "undefined") {
    (window as Window & { __SENSLAB_NATIVE__?: boolean }).__SENSLAB_NATIVE__ = true;
  }
  live = s.poll ?? live;
  if (s.mice?.length) mice = s.mice;
  if (s.displays?.length) displays = s.displays;
  if (s.ulx) ulx = s.ulx;
  emit();
}

export async function nativeFetch<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const r = await fetch(path, { cache: "no-store", ...init });
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch {
    return null;
  }
}

export async function startNativePoll() {
  return nativeFetch<NativePoll>("/api/poll/start");
}
