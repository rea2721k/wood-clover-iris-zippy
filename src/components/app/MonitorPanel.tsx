import { useEffect, useState } from "react";
import { Monitor } from "lucide-react";
import { toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab } from "@/lib/lab-store";
import { MONITORS_CATALOG, REFRESH_RATES, matchMonitor, monitorById } from "@/lib/senslab/monitors";
import { RESOLUTIONS } from "@/lib/senslab/math";
import { measureRefreshRate, readDisplay } from "@/lib/senslab/detect";
import { nativeFetch, nativeDisplays, isNativeHost, subscribeNative, type NativeDisplay } from "@/lib/senslab/native-live";
import { Button } from "@/components/ui/button";
import { DashPanel, HzChips, SwitchRow } from "./chrome";
import { Field, Select } from "./Field";
import { cn } from "@/lib/utils";

export function MonitorPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const mon = monitorById(lab.monitorId);
  const [measured, setMeasured] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [live, setLive] = useState<NativeDisplay | null>(nativeDisplays().find((d) => d.primary) ?? nativeDisplays()[0] ?? null);

  useEffect(() => {
    const unsub = subscribeNative(() => {
      const ds = nativeDisplays();
      setLive(ds.find((d) => d.primary) ?? ds[0] ?? null);
    });
    return () => {
      unsub();
    };
  }, []);

  function applyDisplay(primary: NativeDisplay) {
    const res = `${primary.width}×${primary.height}`;
    lab.set("monitorRes", res);
    if (primary.refresh) {
      lab.set("monitorHz", primary.refresh);
      setMeasured(primary.refresh);
    }
    lab.set("monitorNative", true);
    const hit = matchMonitor(primary.refresh, res, `${primary.brand ?? ""} ${primary.model ?? ""} ${primary.monitorName}`);
    if (hit) lab.set("monitorId", hit.id);
    toast.success(`${primary.brand ?? ""} ${primary.model ?? primary.monitorName} · ${primary.refresh} Hz`.trim());
  }

  async function detect() {
    setBusy(true);
    try {
      if (isNativeHost()) {
        const ds = (await nativeFetch<NativeDisplay[]>("/api/displays")) ?? [];
        const primary = ds.find((d) => d.primary) ?? ds[0];
        if (primary) {
          setLive(primary);
          applyDisplay(primary);
          return;
        }
      }
      const d = readDisplay();
      lab.set("monitorRes", `${d.width}×${d.height}`);
      const hz = await measureRefreshRate();
      setMeasured(hz);
      if (hz) lab.set("monitorHz", hz);
      toast.success(`${t.detectedHz}: ${hz} Hz`);
    } finally {
      setBusy(false);
    }
  }

  const title = live
    ? [live.brand, live.model].filter(Boolean).join(" ") || live.monitorName
    : `${mon.brand} ${mon.name}`;
  const conn = live?.connection || mon.conn;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
      <div className="space-y-4">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-wide">{t.monitorTitle}</h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{t.monitorLead}</p>
        </div>
        <DashPanel title={t.detectedDisplay}>
          <div className="flex items-start gap-3">
            <Monitor className="mt-1 size-10 shrink-0 text-accent" strokeWidth={1.35} />
            <div className="min-w-0">
              <p className="font-display text-2xl font-semibold tracking-wide">{title}</p>
              <p className="mt-1 text-sm text-muted">
                {live?.manufacturer && live.manufacturer !== live.brand ? `${live.manufacturer} · ` : ""}
                {conn} · {lab.monitorRes} @ {lab.monitorHz} Hz
              </p>
              {live?.brand ? (
                <p className="mt-2 text-xs tracking-wide text-faint uppercase">
                  {t.monitorBrand}: {live.brand}
                  {live.model ? ` · ${t.monitorModel}: ${live.model}` : ""}
                </p>
              ) : null}
            </div>
          </div>
          <Button className="mt-4" variant="accent" onClick={() => void detect()} disabled={busy}>
            {busy ? t.detecting : t.detectDisplay}
          </Button>
        </DashPanel>
        <DashPanel title={t.refreshRate}>
          <p className="mb-3 font-display text-4xl font-semibold tabular-nums text-accent">
            {lab.monitorHz}
            <span className="ml-2 text-lg text-muted">Hz</span>
          </p>
          <HzChips rates={REFRESH_RATES} value={lab.monitorHz} onChange={(v) => lab.set("monitorHz", v)} />
          {measured ? (
            <p className="mt-3 text-sm text-muted">
              {t.detectedHz}: <span className="tabular-nums text-fg">{measured} Hz</span>
            </p>
          ) : null}
        </DashPanel>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t.resolution}>
            <Select value={lab.monitorRes} onChange={(v) => lab.set("monitorRes", v)}>
              {RESOLUTIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={t.connection}>
            <div className="flex h-11 items-center rounded-xl bg-elevated px-3 text-sm shadow-border">{conn}</div>
          </Field>
        </div>
        <DashPanel>
          <SwitchRow label={t.native} checked={lab.monitorNative} onChange={(v) => lab.set("monitorNative", v)} />
          <SwitchRow label={t.dyac} checked={true} onChange={() => undefined} />
          <SwitchRow label={t.blurReduction} checked={true} onChange={() => undefined} />
        </DashPanel>
      </div>
      <DashPanel title={t.selectMonitor}>
        <div className="dash-scroll max-h-[28rem] space-y-1 overflow-auto">
          {MONITORS_CATALOG.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                lab.set("monitorId", m.id);
                if (!m.hz.includes(lab.monitorHz)) lab.set("monitorHz", m.hz[m.hz.length - 1]);
                if (!m.res.includes(lab.monitorRes)) lab.set("monitorRes", m.native);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-2 py-2 text-left",
                m.id === lab.monitorId ? "bg-accent/15 shadow-border" : "hover:bg-subtle",
              )}
            >
              <Monitor className="size-8 shrink-0 text-accent" strokeWidth={1.4} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {m.brand} {m.name}
                </span>
                <span className="text-xs text-muted">
                  {m.native} · {m.hz.join("/")} Hz
                </span>
              </span>
            </button>
          ))}
        </div>
      </DashPanel>
    </div>
  );
}
