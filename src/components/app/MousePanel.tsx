import { useEffect, useState } from "react";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab } from "@/lib/lab-store";
import { MICE } from "@/lib/senslab/mice";
import { POLL_RATES } from "@/lib/senslab/monitors";
import { matchMouseProfile, nearestRate, requestHidMouse } from "@/lib/senslab/detect";
import { nativeFetch, nativeMice, nativeUlx, isNativeHost, subscribeNative, type NativeMouse } from "@/lib/senslab/native-live";
import { useLiveInput } from "@/lib/senslab/live-input";
import { Button } from "@/components/ui/button";
import { DashPanel, HzChips } from "./chrome";
import { Field, Num, Select } from "./Field";
import { cn } from "@/lib/utils";

export function MousePanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const live = useLiveInput();
  const [busy, setBusy] = useState(false);
  const [ulx, setUlx] = useState(nativeUlx());
  const [mice, setMice] = useState(nativeMice());
  useEffect(() => {
    const unsub = subscribeNative(() => {
      setUlx(nativeUlx());
      setMice(nativeMice());
    });
    return () => {
      unsub();
    };
  }, []);
  const profile = MICE.find((m) => m.name === lab.mouse) ?? MICE[0];
  const near = live.hz > 0 ? nearestRate(live.hz) : 0;
  const displayName = lab.detectedName || t.anyMouse;
  const lookingUlx =
    !ulx?.connected &&
    (/finalmouse|ultralight|361D/i.test(`${lab.detectedName} ${lab.mouse} ${lab.detectedVidPid}`) ||
      mice.some((m) => /361D/i.test(m.vidpid) || /finalmouse|ultralight/i.test(m.name)));

  function applyUlx(src: NonNullable<typeof ulx>) {
    lab.setDetected(src.name || "Finalmouse UltralightX", src.vidpid || lab.detectedVidPid);
    lab.set("mouse", "Finalmouse UltralightX");
    if (src.pollHz && src.pollHz >= 125) lab.set("mouseHz", src.pollHz);
    if (src.dpi && src.dpi >= 50) {
      lab.set("dpi", src.dpi);
      lab.set("srcDpi", src.dpi);
      lab.set("dstDpi", src.dpi);
    }
  }

  async function detect() {
    setBusy(true);
    try {
      if (isNativeHost()) {
        const liveUlx = nativeUlx();
        if (liveUlx?.connected) {
          applyUlx(liveUlx);
          return;
        }
        const list = (await nativeFetch<NativeMouse[]>("/api/mice")) ?? nativeMice();
        const hid = list[0];
        if (hid) {
          lab.setDetected(hid.name, hid.vidpid);
          const m = matchMouseProfile(hid.name);
          if (m) {
            lab.set("mouse", m.name);
            if (m.max && !liveUlx?.pollHz) {
              lab.set("mouseHz", m.max >= 1000 ? Math.min(m.max, lab.mouseHz > 1000 ? m.max : 1000) : m.max);
            }
          }
          return;
        }
      }
      const hid = await requestHidMouse();
      if (hid) {
        lab.setDetected(hid.name, hid.vidpid);
        if (hid.profile) lab.set("mouse", hid.profile);
        else {
          const m = matchMouseProfile(hid.name);
          if (m) lab.set("mouse", m.name);
        }
      } else {
        lab.setDetected(lab.detectedName || "HID Pointer", lab.detectedVidPid || "pointer events");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="space-y-4">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-wide">{t.mouseTitle}</h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{t.mouseLead}</p>
        </div>
        <DashPanel title={t.pollRate}>
          <p className="mb-3 font-display text-4xl font-semibold tabular-nums text-accent">
            {lab.mouseHz}
            <span className="ml-2 text-lg text-muted">Hz</span>
          </p>
          <HzChips rates={POLL_RATES} value={lab.mouseHz} onChange={(v) => lab.set("mouseHz", v)} />
          {ulx?.connected ? (
            <p className="mt-3 text-xs text-success">{t.firmwareApplied}</p>
          ) : null}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat k={t.liveHz} v={live.hz > 0 ? `${Math.round(live.hz)}` : "—"} unit="Hz" />
            <Stat k={t.nearestClass} v={near ? `${near}` : "—"} unit="Hz" />
            <Stat k={t.profileMax} v={profile.max ? `${profile.max}` : "ANY"} unit="Hz" />
          </div>
        </DashPanel>
        {ulx?.connected || lookingUlx ? (
          <DashPanel
            title={t.xpanelTitle}
            action={
              <span className={cn("text-xs font-semibold", ulx?.connected ? "text-success" : "text-muted")}>
                {ulx?.connected ? t.firmwareOn : t.xpanelSearching}
              </span>
            }
          >
            <p className="mb-3 text-xs text-muted">{t.xpanelLead}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat k="Hz" v={ulx?.pollHz ? `${ulx.pollHz}` : "—"} unit="Hz" />
              <Stat k="DPI" v={ulx?.dpi ? `${ulx.dpi}` : "—"} />
              <Stat k={t.lod} v={ulx?.lodMm ? `${ulx.lodMm} mm` : "—"} />
              <Stat k={t.battery} v={ulx?.batteryPct ? `${ulx.batteryPct}%` : "—"} />
              <Stat k={t.motionSync} v={ulx?.connected ? (ulx.motionSync ? t.syncOn : t.syncOff) : "—"} />
              <Stat k={t.firmware} v={ulx?.firmware || "—"} />
              <Stat k="Dongle" v={ulx?.dongleFw || "—"} />
              <Stat k={t.charging} v={ulx?.charging ? t.syncOn : ulx?.connected ? t.syncOff : "—"} />
            </div>
          </DashPanel>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t.dpi}>
            <Num
              value={lab.dpi}
              onChange={(v) => {
                lab.set("dpi", v);
                lab.set("srcDpi", v);
                lab.set("dstDpi", v);
              }}
              step="50"
              min={50}
            />
          </Field>
          <Field label="Mouse">
            <Select value={lab.mouse} onChange={(v) => lab.set("mouse", v)}>
              {MICE.map((m) => (
                <option key={m.name} value={m.name}>
                  {m.name}
                  {m.max ? ` · ${m.max} Hz` : ""}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <DashPanel title={t.liveHid}>
          <p className="font-display text-xl font-semibold">{displayName}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {lab.detectedVidPid || "VID/PID — HID veya hareket bekleniyor"}
          </p>
          <Button className="mt-4" variant="accent" onClick={() => void detect()} disabled={busy}>
            {busy ? t.detecting : t.detectMouse}
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-muted">{t.hidHint}</p>
        </DashPanel>
      </div>
      <DashPanel title={t.selectMouse}>
        <div className="dash-scroll max-h-[32rem] overflow-auto">
          {MICE.map((m) => (
            <button
              key={m.name}
              type="button"
              onClick={() => lab.set("mouse", m.name)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left text-sm",
                m.name === lab.mouse ? "bg-accent/15 shadow-border" : "hover:bg-subtle",
              )}
            >
              <span>
                <span className="block font-medium">{m.name}</span>
                <span className="text-xs text-muted">{m.source}</span>
              </span>
              <span className="tabular-nums text-muted">{m.max ? `${m.max} Hz` : "ANY"}</span>
            </button>
          ))}
        </div>
      </DashPanel>
    </div>
  );
}

function Stat({ k, v, unit }: { k: string; v: string; unit?: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{k}</p>
      <p className="font-display text-2xl font-semibold tabular-nums">
        {v}
        {v !== "—" && v !== "ANY" && unit ? <span className="ml-1 text-xs text-muted">{unit}</span> : null}
      </p>
    </div>
  );
}
