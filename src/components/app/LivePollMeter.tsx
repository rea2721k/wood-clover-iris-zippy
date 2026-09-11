import { useEffect, useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import { isNativeHost, nativePoll, nativeFetch, subscribeNative, type NativePollDevice } from "@/lib/senslab/native-live";
import { useLab } from "@/lib/lab-store";
import { POLL_RATES } from "@/lib/senslab/monitors";
import { cn } from "@/lib/utils";

export function LivePollMeter({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = copy[lang];
  const target = useLab((s) => s.mouseHz);
  const [hz, setHz] = useState(0);
  const [reports, setReports] = useState(0);
  const [device, setDevice] = useState("");
  const [hist, setHist] = useState<number[]>([]);
  const [devs, setDevs] = useState<NativePollDevice[]>([]);
  const [sel, setSel] = useState("");

  useEffect(() => {
    const apply = () => {
      const p = nativePoll();
      setHz(p.hz || 0);
      setReports(p.reports || 0);
      setDevice(p.device || "");
      setHist(p.samples ?? []);
    };
    apply();
    const unsub = subscribeNative(apply);
    const id = window.setInterval(async () => {
      const list = await nativeFetch<NativePollDevice[]>("/api/poll/devices");
      if (list) setDevs(list);
    }, 1200);
    return () => {
      unsub();
      window.clearInterval(id);
    };
  }, []);

  async function pick(path: string) {
    setSel(path);
    await nativeFetch("/api/poll/devices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    });
  }

  const maxScale = Math.max(
    target >= 4000 ? 8000 : target >= 2000 ? 4000 : target >= 1000 ? 2000 : 1000,
    hz >= 5000 ? 8000 : hz >= 2500 ? 4000 : hz >= 1200 ? 2000 : 1000,
  );
  const fill = Math.max(0, Math.min(100, (hz / maxScale) * 100));
  const shown = hz > 0 ? Math.round(hz) : 0;

  return (
    <section className={cn("rounded-md bg-elevated/90 p-3 shadow-border", compact && "p-3")}>
      <header className="mb-2 flex items-center justify-between gap-2">
        <h3 className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{t.rawInputPoll}</h3>
        <span className="flex items-center gap-1.5 font-display text-xs font-semibold tracking-wider text-success uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-success" />
          {t.live}
        </span>
      </header>
      <p className="font-display font-semibold tracking-tight leading-none">
        <span className="text-6xl tabular-nums text-accent">{shown > 0 ? shown : "—"}</span>
        <span className="ml-1.5 text-lg text-muted">Hz</span>
      </p>
      <p className="mt-2 text-xs text-muted">
        {t.lastInput}: {reports} / 1s
        {device ? ` · ${device}` : ""}
      </p>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-subtle">
        <div className="h-full rounded-full bg-accent transition-[width] duration-75" style={{ width: `${fill}%` }} />
      </div>
      <div className="mt-1 flex justify-between font-mono text-[10px] tabular-nums text-faint">
        <span>0</span>
        <span>8000 Hz</span>
      </div>
      {!compact ? (
        <>
          <div className="mt-3 flex h-28 items-end gap-px overflow-hidden rounded-md bg-bg px-1 pt-1">
            {hist.length === 0 ? (
              <div className="flex h-full w-full items-center justify-center text-xs text-faint">{t.pollMove}</div>
            ) : (
              hist.slice(-96).map((v, i) => (
                <span
                  key={i}
                  className="min-w-px flex-1 rounded-t-sm bg-accent"
                  style={{ height: `${Math.max(4, Math.min(100, (v / Math.max(maxScale, 125)) * 100))}%` }}
                />
              ))
            )}
          </div>
          <div className="poll-pad pointer-events-none mt-3 flex h-44 items-center justify-center rounded-md bg-bg shadow-border">
            <p className="max-w-[16rem] text-center text-sm leading-relaxed text-muted">{t.pollPad}</p>
          </div>
        </>
      ) : null}
      {isNativeHost() && devs.length > 0 ? (
        <label className="mt-3 block text-xs text-muted">
          {t.selectDevice}
          <select
            className="mt-1 h-9 w-full rounded-md bg-bg px-2 text-sm text-fg shadow-border"
            value={sel}
            onChange={(e) => void pick(e.target.value)}
          >
            <option value="">{t.autoDevice}</option>
            {devs.map((d) => (
              <option key={d.path} value={d.path}>
                {d.name} {d.hz ? `· ${Math.round(d.hz)} Hz` : ""}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-1">
        {POLL_RATES.map((r) => (
          <span
            key={r}
            className={cn(
              "rounded-sm px-1.5 py-0.5 font-mono text-[10px] tabular-nums",
              Math.abs(hz - r) / r < 0.12 ? "bg-accent text-bg" : "text-faint shadow-border",
            )}
          >
            {r}
          </span>
        ))}
      </div>
    </section>
  );
}
