import { useState } from "react";
import { toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab } from "@/lib/lab-store";
import { GAMES } from "@/lib/senslab/games";
import { entryFor } from "@/lib/senslab/library";
import { confidenceScore } from "@/lib/senslab/math";
import { isNativeHost, nativeFetch } from "@/lib/senslab/native-live";
import { QualityMark } from "./Field";
import { DashPanel } from "./chrome";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ConfidencePanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const query = useLab((s) => s.gameQuery);
  const active = useLab((s) => s.activeGame);
  const set = useLab((s) => s.set);
  const q = query.toLowerCase().trim();
  const rows = GAMES.filter((g) => !q || `${g.name} ${g.engine} ${g.quality}`.toLowerCase().includes(q));
  const current = GAMES.find((g) => g.name === active) ?? GAMES[0];
  const score = confidenceScore(current.quality);
  const [busy, setBusy] = useState(false);
  const [confirmUn, setConfirmUn] = useState(false);

  async function update() {
    setBusy(true);
    try {
      const r = await nativeFetch<{ ok?: boolean }>("/api/update", { method: "POST" });
      toast(r?.ok ? t.updateOk : t.updateFail);
    } catch {
      toast(t.updateFail);
    } finally {
      setBusy(false);
    }
  }

  async function uninstall() {
    setBusy(true);
    try {
      localStorage.removeItem("senslab-lab-v15");
      await nativeFetch("/api/uninstall", { method: "POST" });
      toast(t.unProgressLead);
    } catch {
      toast(t.updateFail);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-3xl font-semibold tracking-wide">{t.confTitle}</h2>
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{t.confLead}</p>
      </div>
      <DashPanel title={`${t.updateTitle} · ${t.v13}`}>
        <p className="text-sm text-muted">{t.updateLead}</p>
        {isNativeHost() ? (
          <Button className="mt-3" variant="accent" disabled={busy} onClick={() => void update()}>
            {t.updateNow}
          </Button>
        ) : (
          <p className="mt-2 text-xs text-faint">/indir → SensLab_Setup.exe</p>
        )}
      </DashPanel>
      <DashPanel title={t.unTitle}>
        <p className="text-sm text-muted">{t.unLead}</p>
        {isNativeHost() ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {!confirmUn ? (
              <Button variant="dangerGhost" disabled={busy} onClick={() => setConfirmUn(true)}>
                {t.uninstall}
              </Button>
            ) : (
              <>
                <Button variant="danger" disabled={busy} onClick={() => void uninstall()}>
                  {t.unConfirm}
                </Button>
                <Button variant="ghost" disabled={busy} onClick={() => setConfirmUn(false)}>
                  {t.cancel}
                </Button>
              </>
            )}
          </div>
        ) : (
          <p className="mt-2 text-xs text-faint">{t.unDoneLead}</p>
        )}
      </DashPanel>
      <DashPanel title={entryFor(current.name).label}>
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <p className="text-xs text-muted">{t.score}</p>
            <p className="font-display text-5xl font-semibold tabular-nums text-accent">{score}</p>
          </div>
          <div>
            <p className="text-xs text-muted">{t.quality}</p>
            <QualityMark q={current.quality} />
          </div>
          <div>
            <p className="text-xs text-muted">{t.yawConst}</p>
            <p className="font-mono text-sm tabular-nums">{current.yaw ?? "—"}</p>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-subtle">
          <div className="h-full rounded-full bg-accent" style={{ width: `${score}%` }} />
        </div>
        <p className="mt-2 text-xs text-muted">{current.note}</p>
      </DashPanel>
      <div className="dash-scroll max-h-[28rem] overflow-auto rounded-md shadow-border">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-elevated text-xs text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">{t.game}</th>
              <th className="px-3 py-2 font-medium">{t.quality}</th>
              <th className="px-3 py-2 font-medium">{t.yawConst}</th>
              <th className="px-3 py-2 font-medium">{t.score}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((g) => (
              <tr
                key={g.name}
                className={cn(
                  "cursor-pointer border-t border-border/70 hover:bg-subtle",
                  g.name === active ? "bg-accent/10" : "",
                )}
                onClick={() => set("activeGame", g.name)}
              >
                <td className="px-3 py-2">{entryFor(g.name).label}</td>
                <td className="px-3 py-2">
                  <QualityMark q={g.quality} />
                </td>
                <td className="px-3 py-2 font-mono text-xs tabular-nums">{g.yaw ?? "—"}</td>
                <td className="px-3 py-2 tabular-nums">{confidenceScore(g.quality)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
