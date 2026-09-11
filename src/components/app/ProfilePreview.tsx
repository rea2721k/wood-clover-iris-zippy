import { useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import { useLab } from "@/lib/lab-store";
import { gameCm, pixels360 } from "@/lib/senslab/math";
import { entryFor } from "@/lib/senslab/library";
import { gameByName } from "@/lib/lab-store";
import { DashPanel } from "./chrome";
import { cn } from "@/lib/utils";

export function ProfilePreview({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const lab = useLab();
  const game = lab.activeGame;
  const setting = lab.setting(game);
  const entry = entryFor(game);
  const p = gameByName(game);
  const [edit, setEdit] = useState(false);
  const scope = lab.previewScope;
  const dpi = lab.dpi || 800;

  let sens = setting.general;
  let cm = gameCm(p, dpi, setting.general);
  if (scope !== "hip") {
    const sc = entry.scopes.find((s) => s.id === scope);
    if (sc) {
      const ads = setting.ads[sc.id] ?? sc.def;
      const mult = setting.multipliers[sc.id] ?? sc.mult;
      sens = p.mode === "pubg" || p.mode === "percent" ? ads : setting.general * mult;
      cm = gameCm(p, dpi, Number.isFinite(sens) ? sens : setting.general);
    }
  }
  const px = pixels360(cm, dpi);
  const tabs = [
    { id: "hip", label: t.hipfire },
    ...entry.scopes.slice(0, 3).map((s) => ({
      id: s.id,
      label: /ads|zoom/i.test(s.label) ? s.label : `ADS ${s.label}`,
    })),
  ];

  return (
    <DashPanel
      title={t.profilePreview}
      action={
        <button
          type="button"
          onClick={() => setEdit((v) => !v)}
          className="text-xs font-medium text-accent hover:underline"
        >
          {t.editCrosshair}
        </button>
      }
    >
      <div className="mb-2 flex flex-wrap gap-1">
        {tabs.map((tb) => (
          <button
            key={tb.id}
            type="button"
            onClick={() => lab.set("previewScope", tb.id)}
            className={cn(
              "h-7 rounded-sm px-2 text-xs font-medium",
              scope === tb.id ? "bg-fg text-bg" : "text-muted hover:bg-subtle hover:text-fg",
            )}
          >
            {tb.label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto size-40 rounded-md bg-bg shadow-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <CrosshairHair xh={lab.crosshair} />
        </div>
      </div>
      <dl className="mt-3 space-y-1 text-sm">
        <Row k={t.sensitivity} v={Number.isFinite(sens) ? sens.toFixed(sens < 10 ? 2 : 1) : "—"} />
        <Row k="cm/360°" v={Number.isFinite(cm) ? cm.toFixed(1) : "—"} />
        <Row k="pixels/360°" v={Number.isFinite(px) ? Math.round(px).toLocaleString() : "—"} />
      </dl>
      {edit ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(["#2ad4ea", "#e7f3fb", "#3dd68c", "#ef4455"] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => lab.set("crosshair", { ...lab.crosshair, color: c })}
              className="h-8 rounded-sm shadow-border"
              style={{ background: c }}
              aria-label={c}
            />
          ))}
          <label className="col-span-2 text-xs text-muted">
            {t.crosshairGap}
            <input
              type="range"
              className="sens-range mt-1"
              min={0}
              max={16}
              value={lab.crosshair.gap}
              onChange={(e) => lab.set("crosshair", { ...lab.crosshair, gap: Number(e.target.value) })}
            />
          </label>
          <label className="col-span-2 text-xs text-muted">
            {t.crosshairLength}
            <input
              type="range"
              className="sens-range mt-1"
              min={4}
              max={22}
              value={lab.crosshair.length}
              onChange={(e) =>
                lab.set("crosshair", { ...lab.crosshair, length: Number(e.target.value) })
              }
            />
          </label>
        </div>
      ) : null}
    </DashPanel>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted">{k}</dt>
      <dd className="tabular-nums">{v}</dd>
    </div>
  );
}

function CrosshairHair({
  xh,
}: {
  xh: { color: string; gap: number; length: number; thickness: number; outline: boolean };
}) {
  const t = xh.thickness;
  const g = xh.gap;
  const l = xh.length;
  const arm = { background: xh.color, boxShadow: xh.outline ? "0 0 0 1px #041018" : undefined };
  return (
    <div className="relative size-28">
      <span className="absolute top-1/2 left-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: xh.color }} />
      <span className="absolute left-1/2 -translate-x-1/2" style={{ ...arm, width: t, height: l, top: `calc(50% - ${g + l}px)` }} />
      <span className="absolute left-1/2 -translate-x-1/2" style={{ ...arm, width: t, height: l, top: `calc(50% + ${g}px)` }} />
      <span className="absolute top-1/2 -translate-y-1/2" style={{ ...arm, height: t, width: l, left: `calc(50% - ${g + l}px)` }} />
      <span className="absolute top-1/2 -translate-y-1/2" style={{ ...arm, height: t, width: l, left: `calc(50% + ${g}px)` }} />
    </div>
  );
}
