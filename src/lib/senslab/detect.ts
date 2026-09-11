import { MICE } from "./mice";

export type DisplayInfo = {
  width: number;
  height: number;
  refresh: number;
  name: string;
};

export function readDisplay(): DisplayInfo {
  const s = window.screen;
  const refresh =
    Number((s as Screen & { refreshRate?: number }).refreshRate) ||
    guessRefresh();
  return {
    width: s.width || window.innerWidth,
    height: s.height || window.innerHeight,
    refresh,
    name: `${s.width}×${s.height}`,
  };
}

function guessRefresh() {
  return 60;
}

export function measureRefreshRate(): Promise<number> {
  return new Promise((resolve) => {
    const times: number[] = [];
    let last = 0;
    let frames = 0;
    const tick = (t: number) => {
      if (last) times.push(t - last);
      last = t;
      frames += 1;
      if (frames < 90) {
        requestAnimationFrame(tick);
        return;
      }
      const slice = times.slice(12);
      const sorted = [...slice].sort((a, b) => a - b);
      const mid = sorted[Math.floor(sorted.length / 2)] || 16.67;
      const hz = mid > 0 ? 1000 / mid : 60;
      const snaps = [60, 75, 90, 100, 120, 144, 165, 180, 200, 240, 280, 300, 360, 400, 480, 500, 540, 600];
      const nearest = snaps.reduce((best, r) => (Math.abs(r - hz) < Math.abs(best - hz) ? r : best), snaps[0]);
      resolve(Math.abs(nearest - hz) / nearest < 0.04 ? nearest : Math.round(hz));
    };
    requestAnimationFrame(tick);
  });
}

type HidLike = {
  productName: string;
  vendorId: number;
  productId: number;
};

function vidpid(d: HidLike) {
  const v = d.vendorId.toString(16).padStart(4, "0");
  const p = d.productId.toString(16).padStart(4, "0");
  return `VID ${v} · PID ${p}`.toUpperCase();
}

export function matchMouseProfile(productName: string) {
  const n = productName.toLowerCase();
  const hit = MICE.find((m) => m.name !== "AUTO / ANY MOUSE" && n.includes(m.name.toLowerCase().split(" ").slice(0, 2).join(" ")));
  const loose = MICE.find((m) => {
    if (m.name === "AUTO / ANY MOUSE") return false;
    const tokens = m.name.toLowerCase().split(/[\s/-]+/).filter((t) => t.length > 2);
    return tokens.filter((t) => n.includes(t)).length >= 2;
  });
  return loose ?? hit ?? null;
}

export async function requestHidMouse(): Promise<{
  name: string;
  vidpid: string;
  profile: string | null;
} | null> {
  const hid = (navigator as Navigator & { hid?: {
    requestDevice: (opts: unknown) => Promise<HidLike[]>;
    getDevices: () => Promise<HidLike[]>;
  } }).hid;
  if (!hid) return null;
  let devices: HidLike[] = [];
  try {
    devices = await hid.getDevices();
  } catch {
    devices = [];
  }
  if (!devices.length) {
    try {
      devices = await hid.requestDevice({
        filters: [{ usagePage: 0x01, usage: 0x02 }],
      });
    } catch {
      return null;
    }
  }
  const d = devices[0];
  if (!d) return null;
  const profile = matchMouseProfile(d.productName);
  return {
    name: d.productName || "HID mouse",
    vidpid: vidpid(d),
    profile: profile?.name ?? null,
  };
}

export type PollSample = {
  hz: number;
  avgMs: number;
  jitterMs: number;
  p95Ms: number;
  consistency: number;
  intervals: number[];
  state: "idle" | "running" | "done" | "none";
};

export function summarizeIntervals(intervals: number[]): Omit<PollSample, "state"> {
  if (intervals.length < 8) {
    return { hz: 0, avgMs: 0, jitterMs: 0, p95Ms: 0, consistency: 0, intervals };
  }
  const sorted = [...intervals].sort((a, b) => a - b);
  const avg = sorted.reduce((a, b) => a + b, 0) / sorted.length;
  const variance = sorted.reduce((a, b) => a + (b - avg) ** 2, 0) / sorted.length;
  const jitter = Math.sqrt(variance);
  const p95 = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95))];
  const hz = avg > 0 ? 1000 / avg : 0;
  const consistency = Math.max(0, Math.min(100, 100 - (jitter / avg) * 100));
  return { hz, avgMs: avg, jitterMs: jitter, p95Ms: p95, consistency, intervals: sorted };
}

export function nearestRate(hz: number) {
  const rates = [125, 250, 500, 1000, 2000, 4000, 8000];
  return rates.reduce((best, r) => (Math.abs(r - hz) < Math.abs(best - hz) ? r : best), rates[0]);
}
