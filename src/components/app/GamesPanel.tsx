import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Monitor, Mouse, Plus } from "lucide-react";
import { toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { gameByName, useLab, type GameSubTab } from "@/lib/lab-store";
import { GAMES } from "@/lib/senslab/games";
import { cloneSetting, entryFor, libraryGames } from "@/lib/senslab/library";
import { gameCm, pixels360, RESOLUTIONS } from "@/lib/senslab/math";
import { monitorById } from "@/lib/senslab/monitors";
import { measureRefreshRate, readDisplay } from "@/lib/senslab/detect";
import { isNativeHost, nativeFetch, nativeUlx, subscribeNative, type NativeDisplay } from "@/lib/senslab/native-live";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SensSlider, SwitchRow } from "./chrome";
import { LivePollMeter } from "./LivePollMeter";
import { ProfilePreview } from "./ProfilePreview";
import { Field, Num, Select } from "./Field";
import { GameMark } from "@/components/brand/GameMark";

const SUBS: { id: GameSubTab; key: "subGeneral" | "subAds" | "subScopes" | "subVehicles" | "subMisc" | "subAdvanced" }[] = [
  { id: "general", key: "subGeneral" },
  { id: "ads", key: "subAds" },
  { id: "scopes", key: "subScopes" },
  { id: "vehicles", key: "subVehicles" },
  { id: "misc", key: "subMisc" },
  { id: "advanced", key: "subAdvanced" },
];

export function GamesPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const game = lab.activeGame;
  const entry = entryFor(game);
  const setting = lab.setting(game);
  const profile = gameByName(game);
  const dpi = lab.dpi || 800;
  const { featured, rest } = libraryGames();
  const q = lab.gameQuery.toLowerCase().trim();
  const shownFeatured = featured.filter((g) => {
    if (!q) return true;
    const e = entryFor(g.name);
    return `${e.label} ${g.name} ${g.engine}`.toLowerCase().includes(q);
  });
  const shownRest = rest.filter((g) => {
    if (!q) return true;
    return `${g.name} ${g.engine}`.toLowerCase().includes(q);
  });
  const extra = lab.requestedGames.filter((n) => !q || n.toLowerCase().includes(q));

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-hidden lg:grid-cols-[15rem_minmax(0,1fr)_16.5rem]">
      <aside className="flex min-h-0 flex-col overflow-hidden rounded-md bg-elevated/70 p-2.5 shadow-border">
        <p className="px-1 font-display text-xs font-semibold tracking-wider text-muted uppercase">
          {t.gameLibrary}
        </p>
        <input
          value={lab.gameQuery}
          onChange={(e) => lab.set("gameQuery", e.target.value)}
          placeholder={t.searchGames}
          className="mt-2 h-9 w-full shrink-0 rounded-md bg-subtle px-2.5 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
        />
        <div className="dash-scroll mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {shownFeatured.map((g) => (
            <GameRow
              key={g.name}
              name={g.name}
              active={g.name === game}
              onClick={() => {
                lab.set("activeGame", g.name);
                lab.set("dstGame", g.name);
                lab.setSubTab("general");
              }}
            />
          ))}
          {extra.map((n) => (
            <button
              key={n}
              type="button"
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-muted"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-subtle font-display text-xs font-bold text-accent shadow-border">
                +
              </span>
              <span className="truncate">{n}</span>
            </button>
          ))}
          {(shownRest.length > 0 || !q) && (
            <p className="mt-2 px-1 text-[10px] font-semibold tracking-wider text-faint uppercase">
              {t.moreGames}
            </p>
          )}
          {shownRest.map((g) => (
            <GameRow
              key={g.name}
              name={g.name}
              active={g.name === game}
              onClick={() => {
                lab.set("activeGame", g.name);
                lab.set("dstGame", g.name);
                lab.setSubTab("general");
              }}
            />
          ))}
        </div>
        <RequestGame />
      </aside>

      <div className="dash-scroll min-h-0 overflow-auto">
        <div className="flex flex-wrap items-center gap-3">
          <GameMark name={game} size="md" />
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-semibold tracking-wide uppercase">
              {entry.label}
            </h2>
            <p className="text-xs text-muted">
              {profile.engine} · {profile.note}
            </p>
          </div>
          <span
            className={cn(
              "ml-auto flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-semibold tracking-wide uppercase",
              Number.isFinite(gameCm(profile, dpi, setting.general)) ? "bg-success/15 text-success" : "bg-subtle text-muted",
            )}
          >
            <span className={cn("size-1.5 rounded-full", Number.isFinite(gameCm(profile, dpi, setting.general)) ? "bg-success" : "bg-faint")} />
            {Number.isFinite(gameCm(profile, dpi, setting.general)) ? t.calibrated : t.notCalibrated}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {SUBS.filter((s) => s.id !== "vehicles" || entry.hasVehicles).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => lab.setSubTab(s.id)}
              className={cn(
                "h-8 rounded-sm px-3 text-xs font-semibold tracking-wide uppercase",
                lab.subTab === s.id ? "bg-fg text-bg" : "text-muted hover:bg-subtle hover:text-fg",
              )}
            >
              {t[s.key]}
            </button>
          ))}
        </div>

        {lab.subTab === "general" ? (
          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            <SensSlider
              label={entry.hipLabel || t.generalSens}
              value={setting.general}
              min={entry.hip.min}
              max={entry.hip.max}
              step={entry.hip.step}
              onChange={(v) => lab.patchSetting(game, { general: v })}
              onReset={() => lab.patchSetting(game, { general: entry.hip.def })}
            />
            {entry.hasVertical ? (
              <SensSlider
                label={t.verticalSens}
                value={setting.vertical}
                min={0.7}
                max={1.3}
                step={0.01}
                onChange={(v) => lab.patchSetting(game, { vertical: v })}
                onReset={() => lab.patchSetting(game, { vertical: 1 })}
              />
            ) : null}
            {entry.hasAim ? (
              <SensSlider
                label={t.aimSens}
                value={setting.aim}
                min={entry.hip.min}
                max={entry.hip.max}
                step={entry.hip.step}
                onChange={(v) => lab.patchSetting(game, { aim: v })}
                onReset={() => lab.patchSetting(game, { aim: entry.aimDef })}
              />
            ) : null}
            {entry.hasScoped ? (
              <SensSlider
                label={t.scopedSens}
                value={setting.scoped}
                min={entry.hip.min}
                max={entry.hip.max}
                step={entry.hip.step}
                onChange={(v) => lab.patchSetting(game, { scoped: v })}
                onReset={() => lab.patchSetting(game, { scoped: entry.scopedDef })}
              />
            ) : null}
          </div>
        ) : null}

        {lab.subTab === "ads" ? (
          entry.scopes.length > 0 ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {entry.scopes.map((sc) => (
                <SensSlider
                  key={sc.id}
                  label={`${sc.label} Scope`}
                  value={setting.ads[sc.id] ?? sc.def}
                  min={profile.mode === "yaw" && sc.def <= 3 ? 0.1 : entry.hip.min}
                  max={profile.mode === "yaw" && sc.def <= 3 ? 3 : entry.hip.max}
                  step={profile.mode === "yaw" && sc.def <= 3 ? 0.01 : entry.hip.step}
                  onChange={(v) => lab.setAds(game, sc.id, v)}
                  onReset={() => lab.setAds(game, sc.id, sc.def)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">{t.noAds}</p>
          )
        ) : null}

        {lab.subTab === "scopes" ? (
          entry.scopes.length > 0 ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {entry.scopes.map((sc) => (
                <SensSlider
                  key={sc.id}
                  label={sc.label}
                  value={setting.multipliers[sc.id] ?? sc.mult}
                  min={0.1}
                  max={3}
                  step={0.01}
                  onChange={(v) => lab.setMult(game, sc.id, v)}
                  onReset={() => lab.setMult(game, sc.id, sc.mult)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">{t.noAds}</p>
          )
        ) : null}

        {lab.subTab === "vehicles" ? (
          <div className="mt-3 max-w-sm">
            <SensSlider
              label={t.vehiclesSens}
              value={setting.vehicles}
              min={entry.hip.min}
              max={entry.hip.max}
              step={entry.hip.step}
              onChange={(v) => lab.patchSetting(game, { vehicles: v })}
            />
          </div>
        ) : null}

        {lab.subTab === "misc" ? (
          <div className="mt-3 max-w-sm rounded-md bg-elevated/80 p-3 shadow-border">
            <SwitchRow
              label={t.miscRaw}
              checked={setting.rawInput}
              onChange={(v) => lab.patchSetting(game, { rawInput: v })}
            />
            <SwitchRow
              label={t.miscAccel}
              checked={setting.accel}
              onChange={(v) => lab.patchSetting(game, { accel: v })}
            />
            <SwitchRow
              label={t.miscSmooth}
              checked={setting.smoothing}
              onChange={(v) => lab.patchSetting(game, { smoothing: v })}
            />
            <SwitchRow
              label={t.miscInvert}
              checked={setting.invertY}
              onChange={(v) => lab.patchSetting(game, { invertY: v })}
            />
          </div>
        ) : null}

        {lab.subTab === "advanced" ? (
          <div className="mt-3 grid max-w-xl gap-3 sm:grid-cols-2">
            <Field label={t.advFov}>
              <Num value={setting.fov} onChange={(v) => lab.patchSetting(game, { fov: v })} step="1" min={60} max={180} />
            </Field>
            <Field label={t.advRes}>
              <Select value={lab.monitorRes} onChange={(v) => lab.set("monitorRes", v)}>
                {RESOLUTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </Field>
            <p className="col-span-full text-xs leading-relaxed text-muted">{profile.note}</p>
          </div>
        ) : null}

        {lab.subTab === "general" || lab.subTab === "ads" || lab.subTab === "scopes" ? (
          <>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  lab.resetGame(game);
                  toast(t.resetOk);
                }}
              >
                {t.resetDefault} ({entry.short})
              </Button>
              <ImportExport />
              <Button variant="accent" size="sm" onClick={() => applyGame()}>
                <Check className="size-3.5" />
                {t.applyToGame}
              </Button>
            </div>

            <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_16rem]">
              <CalTable game={game} />
              <FineCal game={game} />
            </div>
          </>
        ) : null}

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
          <div>
            <p className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{entry.label}</p>
            <p className="mt-1 text-xs text-faint">{profile.engine}</p>
          </div>
          <GameMark name={game} size="hero" />
        </div>
      </div>

      <aside className="dash-scroll flex min-h-0 flex-col gap-3 overflow-auto">
        <SystemCard />
        <LivePollMeter lang={lang} compact />
        <ProfilePreview lang={lang} />
      </aside>
    </div>
  );

  function applyGame() {
    const s = lab.setting(game);
    const e = entryFor(game);
    const lines = [
      `SensLab v1.3 — ${e.label}`,
      `DPI ${lab.dpi} · Mouse ${lab.mouseHz} Hz · Monitor ${lab.monitorHz} Hz · ${lab.monitorRes}`,
      `${e.hipLabel}: ${s.general}`,
      `Vertical: ${s.vertical}`,
      ...e.scopes.map(
        (sc) =>
          `${sc.label}: ${s.ads[sc.id] ?? sc.def}  (×${(s.multipliers[sc.id] ?? sc.mult).toFixed(2)})`,
      ),
      `cm/360: ${gameCm(profile, dpi, s.general).toFixed(2)}`,
    ];
    void navigator.clipboard.writeText(lines.join("\n")).catch(() => undefined);
    toast.success(t.applied);
  }
}

function GameRow({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  const e = entryFor(name);
  return (
    <button
      type="button"
      onPointerDown={onClick}
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm [content-visibility:auto]",
        active ? "bg-accent/15 text-fg shadow-border" : "text-muted hover:bg-subtle hover:text-fg",
      )}
    >
      <GameMark name={name} />
      <span className="min-w-0 flex-1 truncate">{e.label}</span>
    </button>
  );
}

function CalTable({ game }: { game: string }) {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const setting = lab.setting(game);
  const entry = entryFor(game);
  const p = gameByName(game);
  const dpi = lab.dpi || 800;
  const hipCm = gameCm(p, dpi, setting.general);
  const rows = [
    { id: "hip", label: t.hipfire, sens: setting.general, mult: 1, cm: hipCm },
    ...entry.scopes.map((sc) => {
      const ads = setting.ads[sc.id] ?? sc.def;
      const mult = setting.multipliers[sc.id] ?? sc.mult;
      const independent = p.mode === "pubg" || p.mode === "percent";
      const use = independent ? ads : setting.general * mult;
      return { id: sc.id, label: sc.label, sens: independent ? ads : use, mult, cm: gameCm(p, dpi, use) };
    }),
  ];

  return (
    <DashLike title={`${t.calTable} (${entry.short})`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-xs">
          <thead className="text-muted">
            <tr className="border-b border-border">
              <th className="py-1.5 font-medium">{t.colScope}</th>
              <th className="py-1.5 font-medium">{t.colDist}</th>
              <th className="py-1.5 font-medium">{t.colPx}</th>
              <th className="py-1.5 font-medium">{t.colSens}</th>
              <th className="py-1.5 font-medium">{t.colMult}</th>
              <th className="py-1.5 font-medium">{t.colCal}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-border/60">
                <td className="py-1.5">{r.label}</td>
                <td className="py-1.5 tabular-nums">{Number.isFinite(r.cm) ? r.cm.toFixed(1) : "—"}</td>
                <td className="py-1.5 tabular-nums">
                  {Number.isFinite(r.cm) ? Math.round(pixels360(r.cm, dpi)).toLocaleString() : "—"}
                </td>
                <td className="py-1.5 tabular-nums">
                  {Number.isFinite(r.sens) ? r.sens.toFixed(r.sens < 10 ? 2 : 1) : "—"}
                </td>
                <td className="py-1.5 tabular-nums">{r.mult.toFixed(2)}</td>
                <td className="py-1.5">
                  {Number.isFinite(r.cm) ? <Check className="size-3.5 text-success" /> : <span className="text-faint">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashLike>
  );
}

function FineCal({ game }: { game: string }) {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const p = gameByName(game);
  const setting = lab.setting(game);
  const dpi = lab.dpi || 800;
  const hip = gameCm(p, dpi, setting.general);
  const [cm, setCm] = useState(Number.isFinite(hip) ? hip.toFixed(1) : lab.measuredCm);

  useEffect(() => {
    const next = gameCm(gameByName(game), lab.dpi || 800, lab.setting(game).general);
    if (Number.isFinite(next)) setCm(next.toFixed(1));
  }, [game, lab.dpi]);

  return (
    <DashLike title={t.fineCal}>
      <p className="text-xs leading-relaxed text-muted">{t.fineCalLead}</p>
      <label className="mt-3 block">
        <span className="mb-1 block text-xs text-muted">{t.measured360}</span>
        <input
          value={cm}
          onChange={(e) => setCm(e.target.value)}
          className="h-10 w-full rounded-md bg-subtle px-3 font-display text-xl font-semibold tabular-nums shadow-border outline-none focus:ring-2 focus:ring-accent/40"
        />
      </label>
      <label className="mt-3 block">
        <span className="mb-1 block text-xs text-muted">{t.calMethod}</span>
        <select
          value={lab.calMethod}
          onChange={(e) => lab.set("calMethod", e.target.value as typeof lab.calMethod)}
          className="h-10 w-full rounded-md bg-subtle px-3 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
        >
          <option value="pad">{t.methodPad}</option>
          <option value="ingame">{t.methodIngame}</option>
          <option value="counts">{t.methodCounts}</option>
        </select>
      </label>
      <Button
        variant="accent"
        className="mt-3 w-full"
        onClick={() => {
          const n = parseFloat(cm);
          if (!(n > 0)) return;
          lab.calibrateGame(game, n);
          toast.success(t.calibrated);
        }}
      >
        <Check className="size-3.5" />
        {t.calNow}
      </Button>
    </DashLike>
  );
}

function DashLike({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-md bg-elevated/90 p-3 shadow-border">
      <h3 className="mb-2 font-display text-xs font-semibold tracking-wider text-muted uppercase">{title}</h3>
      {children}
    </section>
  );
}

function SystemCard() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const mon = monitorById(lab.monitorId);
  const [ulx, setUlx] = useState(nativeUlx());
  useEffect(() => {
    const unsub = subscribeNative(() => setUlx(nativeUlx()));
    return () => {
      unsub();
    };
  }, []);

  async function refresh() {
    if (isNativeHost()) {
      const ds = (await nativeFetch<NativeDisplay[]>("/api/displays")) ?? [];
      const primary = ds.find((d) => d.primary) ?? ds[0];
      if (primary) {
        lab.set("monitorRes", `${primary.width}×${primary.height}`);
        if (primary.refresh) lab.set("monitorHz", primary.refresh);
        lab.set("monitorNative", true);
        return;
      }
    }
    const d = readDisplay();
    lab.set("monitorRes", `${d.width}×${d.height}`);
    const hz = await measureRefreshRate();
    if (hz) lab.set("monitorHz", hz);
  }

  return (
    <section className="rounded-md bg-elevated/90 p-3 shadow-border">
      <header className="mb-2.5 flex items-center justify-between">
        <h3 className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{t.sysInfo}</h3>
        <button type="button" onClick={() => void refresh()} className="text-xs text-accent hover:underline">
          {t.refreshBtn}
        </button>
      </header>
      <ul className="space-y-2.5 text-sm">
        <li className="flex gap-2.5">
          <Monitor className="mt-0.5 size-8 text-accent" strokeWidth={1.4} />
          <div className="min-w-0">
            <p className="font-medium">
              {mon.brand} {mon.name} <span className="text-muted">({mon.conn})</span>
            </p>
            <p className="text-xs text-muted">
              {lab.monitorRes} @ {lab.monitorHz} Hz
            </p>
            <span className="mt-0.5 inline-flex rounded-sm bg-success/15 px-1.5 py-0.5 text-xs font-semibold text-success">
              {lab.monitorNative ? t.native : t.scaled}
            </span>
          </div>
        </li>
        <li className="flex gap-2.5">
          <Mouse className="mt-0.5 size-8 text-accent" strokeWidth={1.4} />
          <div className="min-w-0">
            <p className="truncate font-medium">{lab.detectedName || lab.mouse}</p>
            <p className="text-xs text-muted">
              {lab.dpi} {t.dpiUnit} · {lab.mouseHz} Hz · {t.hidConn}
            </p>
            {ulx?.connected ? (
              <p className="mt-0.5 text-xs text-success">
                Xpanel {ulx.pollHz ?? "—"} Hz
                {ulx.lodMm ? ` · LOD ${ulx.lodMm} mm` : ""}
                {ulx.dpi ? ` · ${ulx.dpi} DPI` : ""}
              </p>
            ) : null}
          </div>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-0.5 flex size-8 items-center justify-center rounded-sm bg-subtle font-display text-xs font-bold text-accent shadow-border">
            OS
          </span>
          <div>
            <p className="font-medium">{t.osName}</p>
            <p className="text-xs text-muted">{t.osBuild}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

function ImportExport() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const fileRef = useRef<HTMLInputElement>(null);

  function exportJson() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            senslab: "1.3",
            game: lab.activeGame,
            dpi: lab.dpi,
            mouseHz: lab.mouseHz,
            monitorHz: lab.monitorHz,
            setting: lab.setting(lab.activeGame),
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `senslab-${entryFor(lab.activeGame).short}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast(t.exported);
  }

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => fileRef.current?.click()}>
        {t.importBtn}
      </Button>
      <Button variant="ghost" size="sm" onClick={exportJson}>
        {t.exportBtn}
      </Button>
      <input
        ref={fileRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (!f) return;
          try {
            const data = JSON.parse(await f.text()) as {
              game?: string;
              setting?: ReturnType<typeof cloneSetting>;
            };
            if (data.game && data.setting) {
              lab.importSetting(data.game, { ...cloneSetting(data.game), ...data.setting });
              toast.success(t.imported);
            }
          } catch {
            /* ignore */
          }
        }}
      />
    </>
  );
}

function RequestGame() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="mt-1 border-t border-border pt-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-muted hover:bg-subtle hover:text-fg"
      >
        <Plus className="size-3.5" />
        {t.requestGame}
      </button>
      {open ? (
        <form
          className="mt-1 px-1"
          onSubmit={(e) => {
            e.preventDefault();
            const n = name.trim();
            if (!n) return;
            if (!GAMES.some((g) => g.name === n) && !lab.requestedGames.includes(n)) {
              lab.set("requestedGames", [...lab.requestedGames, n]);
            }
            setName("");
            setOpen(false);
            toast(t.requestSent);
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.requestPlaceholder}
            className="h-9 w-full rounded-md bg-subtle px-2 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
          />
        </form>
      ) : null}
    </div>
  );
}
