import { useEffect, useState } from "react";
import { summarizeIntervals } from "./detect";
import { isNativeHost, nativePoll, subscribeNative } from "./native-live";

export type LiveInput = {
  hz: number;
  avgMs: number;
  jitterMs: number;
  last: number;
  intervals: number[];
  source: "native" | "pointer";
};

const EMPTY: LiveInput = { hz: 0, avgMs: 0, jitterMs: 0, last: 0, intervals: [], source: "pointer" };

export function useLiveInput(): LiveInput {
  const [stats, setStats] = useState<LiveInput>(EMPTY);

  useEffect(() => {
    const applyNative = () => {
      if (!isNativeHost()) return false;
      const p = nativePoll();
      if (!(p.hz > 0) && p.state === "IDLE") return false;
      setStats({
        hz: p.hz,
        avgMs: p.avgIntervalMs,
        jitterMs: p.jitterMs,
        last: performance.now(),
        intervals: p.samples ?? [],
        source: "native",
      });
      return p.hz > 0 || p.state === "RUNNING" || p.state === "LIVE";
    };

    const unsub = subscribeNative(() => {
      applyNative();
    });
    if (isNativeHost()) {
      applyNative();
      return () => {
        unsub();
      };
    }

    const times: number[] = [];
    let lastT = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const now = performance.now();
      if (lastT) times.push(now - lastT);
      lastT = now;
      if (times.length > 400) times.shift();
    };
    const id = window.setInterval(() => {
      if (applyNative()) return;
      const iv = times.filter((d) => d > 0.04 && d < 120);
      const sum = summarizeIntervals(iv);
      setStats({
        hz: sum.hz,
        avgMs: sum.avgMs,
        jitterMs: sum.jitterMs,
        last: lastT,
        intervals: iv.slice(-64),
        source: "pointer",
      });
    }, 120);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      unsub();
      window.clearInterval(id);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return stats;
}

export function agoLabel(last: number, lang: "tr" | "en") {
  if (!last) return "—";
  const ms = performance.now() - last;
  if (ms < 1000) return lang === "tr" ? `${ms.toFixed(0)} ms önce` : `${ms.toFixed(0)} ms ago`;
  return lang === "tr" ? `${(ms / 1000).toFixed(1)} sn önce` : `${(ms / 1000).toFixed(1)}s ago`;
}
