import { ArrowLeftRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { copy, type Lang } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { gameByName, useLab } from "@/lib/lab-store";
import { GAMES } from "@/lib/senslab/games";
import { convert, RESOLUTIONS, type MatchMode } from "@/lib/senslab/math";
import { Button } from "@/components/ui/button";
import { Field, Num, QualityMark, Select } from "./Field";
import { entryFor } from "@/lib/senslab/library";

const MATCH: { id: MatchMode; key: "match360" | "match0" | "match50" | "match100" }[] = [
  { id: "360", key: "match360" },
  { id: "0", key: "match0" },
  { id: "0.5", key: "match50" },
  { id: "1", key: "match100" },
];

export function ConvertPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const src = gameByName(lab.srcGame);
  const dst = gameByName(lab.dstGame);
  const measured = parseFloat(lab.measuredCm);
  const result = convert({
    src,
    dst,
    srcDpi: lab.srcDpi || 800,
    dstDpi: lab.dstDpi || lab.dpi || 800,
    srcSens: lab.srcSens || 1,
    srcRes: lab.srcRes,
    dstRes: lab.dstRes,
    srcFov: lab.srcFov || 103,
    dstFov: lab.dstFov || 103,
    srcFovType: lab.srcFovType,
    dstFovType: lab.dstFovType,
    match: lab.match,
    measuredCm: Number.isFinite(measured) && measured > 0 ? measured : undefined,
  });

  const engines = Array.from(new Set(GAMES.map((g) => g.engine)));
  const fmt =
    dst.mode === "pubg" || dst.mode === "percent"
      ? result.target.toFixed(2)
      : result.target.toFixed(6);

  async function copyResult() {
    const txt = `SensLab\n${src.name} → ${dst.name}\n${fmt}\n${result.cm.toFixed(2)} cm/360 · ${result.edpi.toFixed(1)} eDPI\nMouse ${lab.mouseHz} Hz · Monitor ${lab.monitorHz} Hz`;
    try {
      await navigator.clipboard.writeText(txt);
      toast.success(t.copied);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {MATCH.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => lab.set("match", m.id)}
              className={
                lab.match === m.id
                  ? "h-9 rounded-md bg-accent px-3.5 text-xs font-medium text-accent-fg"
                  : "h-9 rounded-md bg-elevated px-3.5 text-xs font-medium text-muted shadow-border hover:text-fg"
              }
            >
              {t[m.key]}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Side
            title={t.source}
            game={lab.srcGame}
            onGame={(v) => lab.set("srcGame", v)}
            dpi={lab.srcDpi}
            onDpi={(v) => lab.set("srcDpi", v)}
            sens={lab.srcSens}
            onSens={(v) => lab.set("srcSens", v)}
            res={lab.srcRes}
            onRes={(v) => lab.set("srcRes", v)}
            fov={lab.srcFov}
            onFov={(v) => lab.set("srcFov", v)}
            fovType={lab.srcFovType}
            onFovType={(v) => lab.set("srcFovType", v)}
            engines={engines}
            t={t}
          />
          <Side
            title={t.target}
            game={lab.dstGame}
            onGame={(v) => {
              lab.set("dstGame", v);
              lab.set("activeGame", v);
            }}
            dpi={lab.dstDpi}
            onDpi={(v) => {
              lab.set("dstDpi", v);
              lab.set("dpi", v);
            }}
            res={lab.dstRes}
            onRes={(v) => lab.set("dstRes", v)}
            fov={lab.dstFov}
            onFov={(v) => lab.set("dstFov", v)}
            fovType={lab.dstFovType}
            onFovType={(v) => lab.set("dstFovType", v)}
            engines={engines}
            t={t}
            hideSens
          />
        </div>
        {(src.mode === "manual" || dst.mode === "manual") && (
          <div className="rounded-md bg-elevated/80 p-4 shadow-border">
            <p className="text-sm text-muted">{t.profileGuard}</p>
            <div className="mt-3 max-w-56">
              <Field label={t.measureLabel}>
                <Num
                  value={Number.isFinite(measured) ? measured : 0}
                  onChange={(v) => lab.set("measuredCm", String(v))}
                  step="0.1"
                  min={1}
                />
              </Field>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" onClick={lab.swap}>
            <ArrowLeftRight className="size-4" />
            {t.swap}
          </Button>
          <Button variant="ghost" onClick={() => void copyResult()}>
            <Copy className="size-4" />
            {t.copyOut}
          </Button>
          <Button variant="quiet" onClick={lab.reset}>
            {t.resetLab}
          </Button>
          {Number.isFinite(result.cm) ? (
            <Button
              variant="accent"
              onClick={() => {
                lab.applyCmToGame(lab.dstGame, result.cm);
                toast.success(t.applied);
              }}
            >
              {t.applyCal}
            </Button>
          ) : null}
        </div>
      </div>
      <aside className="rounded-md bg-elevated p-5 shadow-border">
        <p className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{t.target}</p>
        <p className="mt-2 font-medium tracking-tight">
          <span className="font-display text-4xl tabular-nums text-accent">
            {Number.isFinite(result.target) ? fmt : "—"}
          </span>
        </p>
        <p className="mt-2 text-sm text-muted">
          {entryFor(dst.name).label}
          <span className="mx-2 text-faint">·</span>
          <QualityMark q={dst.quality} />
        </p>
        <dl className="mt-5 space-y-2 text-sm">
          <Row k={t.cm360} v={Number.isFinite(result.cm) ? result.cm.toFixed(2) : "—"} />
          <Row k={t.edpi} v={Number.isFinite(result.edpi) ? result.edpi.toFixed(1) : "—"} />
          <Row k="H FOV" v={`${result.dstHFov.toFixed(1)}°`} />
          <Row k={t.dpi} v={String(lab.dstDpi)} />
          <Row k={t.pollRate} v={`${lab.mouseHz} Hz`} />
          <Row k={t.refreshRate} v={`${lab.monitorHz} Hz`} />
        </dl>
      </aside>
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

function Side({
  title,
  game,
  onGame,
  dpi,
  onDpi,
  sens,
  onSens,
  res,
  onRes,
  fov,
  onFov,
  fovType,
  onFovType,
  engines,
  t,
  hideSens,
}: {
  title: string;
  game: string;
  onGame: (v: string) => void;
  dpi: number;
  onDpi: (v: number) => void;
  sens?: number;
  onSens?: (v: number) => void;
  res: string;
  onRes: (v: string) => void;
  fov: number;
  onFov: (v: number) => void;
  fovType: "vertical" | "horizontal";
  onFovType: (v: "vertical" | "horizontal") => void;
  engines: string[];
  t: (typeof copy)[Lang];
  hideSens?: boolean;
}) {
  const g = gameByName(game);
  return (
    <div className="space-y-3 rounded-md bg-elevated/60 p-4 shadow-border">
      <div className="flex items-center justify-between gap-2">
        <p className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{title}</p>
        <QualityMark q={g.quality} />
      </div>
      <Field label={t.game}>
        <Select value={game} onChange={onGame}>
          {engines.map((eng) => (
            <optgroup key={eng} label={eng}>
              {GAMES.filter((x) => x.engine === eng).map((x) => (
                <option key={x.name} value={x.name}>
                  {entryFor(x.name).label}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label={t.dpi}>
          <Num value={dpi} onChange={onDpi} step="50" min={50} />
        </Field>
        {!hideSens && onSens ? (
          <Field label={t.sensitivity}>
            <Num value={sens ?? 0} onChange={onSens} step="0.01" min={0} />
          </Field>
        ) : (
          <Field label={t.resolution}>
            <Select value={res} onChange={onRes}>
              {RESOLUTIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </Select>
          </Field>
        )}
      </div>
      {!hideSens ? (
        <Field label={t.resolution}>
          <Select value={res} onChange={onRes}>
            {RESOLUTIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
        </Field>
      ) : null}
      <div className="grid grid-cols-2 gap-3">
        <Field label={t.fov}>
          <Num value={fov} onChange={onFov} step="1" min={60} max={180} />
        </Field>
        <Field label="FOV type">
          <Select value={fovType} onChange={(v) => onFovType(v as "vertical" | "horizontal")}>
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </Select>
        </Field>
      </div>
      <p className="text-xs leading-relaxed text-muted">{g.note}</p>
    </div>
  );
}
