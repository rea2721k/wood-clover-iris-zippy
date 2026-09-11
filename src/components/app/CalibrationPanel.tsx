import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { gameByName, useLab } from "@/lib/lab-store";
import { GAMES } from "@/lib/senslab/games";
import { entryFor } from "@/lib/senslab/library";
import { gameCm, pixels360, sensForCm } from "@/lib/senslab/math";
import { Button } from "@/components/ui/button";
import { DashPanel } from "./chrome";
import { Field, Select } from "./Field";

export function CalibrationPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const game = lab.activeGame;
  const p = gameByName(game);
  const e = entryFor(game);
  const setting = lab.setting(game);
  const dpi = lab.dpi || 800;
  const current = gameCm(p, dpi, setting.general);
  const [cm, setCm] = useState(lab.measuredCm || "86.7");
  const measured = parseFloat(cm);
  const target = Number.isFinite(measured) && measured > 0 ? sensForCm(p, dpi, measured) : NaN;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="space-y-4">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-wide">{t.calTitle}</h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{t.calLead}</p>
        </div>
        <Field label={t.game}>
          <Select
            value={game}
            onChange={(v) => {
              lab.set("activeGame", v);
              lab.set("dstGame", v);
            }}
          >
            {GAMES.map((g) => (
              <option key={g.name} value={g.name}>
                {entryFor(g.name).label}
              </option>
            ))}
          </Select>
        </Field>
        <DashPanel title={t.measured360}>
          <input
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            className="h-14 w-full rounded-md bg-subtle px-3 font-display text-4xl font-semibold tabular-nums shadow-border outline-none focus:ring-2 focus:ring-accent/40"
          />
          <p className="mt-2 text-xs text-muted">{t.fineCalLead}</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(["pad", "ingame", "counts"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => lab.set("calMethod", m)}
                className={
                  lab.calMethod === m
                    ? "h-10 rounded-md bg-accent text-sm font-semibold text-accent-fg"
                    : "h-10 rounded-md bg-elevated text-sm text-muted shadow-border hover:text-fg"
                }
              >
                {m === "pad" ? t.methodPad : m === "ingame" ? t.methodIngame : t.methodCounts}
              </button>
            ))}
          </div>
          <Button
            variant="accent"
            className="mt-4 w-full"
            disabled={!(measured > 0)}
            onClick={() => {
              lab.calibrateGame(game, measured);
              toast.success(`${e.label}: ${t.calibrated}`);
            }}
          >
            <Check className="size-4" />
            {t.calNow}
          </Button>
        </DashPanel>
      </div>
      <div className="space-y-3">
        <DashPanel title={e.label}>
          <dl className="space-y-2 text-sm">
            <Row k={t.currentCm} v={Number.isFinite(current) ? `${current.toFixed(2)} cm` : "—"} />
            <Row k={t.targetSens} v={Number.isFinite(target) ? target.toFixed(target < 10 ? 3 : 1) : "—"} />
            <Row k={t.dpi} v={String(dpi)} />
            <Row k={t.pollRate} v={`${lab.mouseHz} Hz`} />
            <Row k={t.refreshRate} v={`${lab.monitorHz} Hz`} />
            <Row
              k="px/360"
              v={Number.isFinite(current) ? Math.round(pixels360(current, dpi)).toLocaleString() : "—"}
            />
          </dl>
          {p.mode === "manual" ? <p className="mt-3 text-xs text-muted">{t.profileGuard}</p> : null}
        </DashPanel>
      </div>
    </div>
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
