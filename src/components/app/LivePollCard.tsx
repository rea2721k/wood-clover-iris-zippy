import { agoLabel, useLiveInput } from "@/lib/senslab/live-input";
import { copy, type Lang } from "@/lib/i18n";
import { DashPanel } from "./chrome";

export function LivePollCard({ lang, targetHz }: { lang: Lang; targetHz: number }) {
  const t = copy[lang];
  const live = useLiveInput();
  const fill = Math.max(2, Math.min(24, Math.round((live.hz / Math.max(targetHz, 125)) * 24) || (live.hz > 0 ? 8 : 2)));

  return (
    <DashPanel
      title={t.rawInputPoll}
      action={
        <span className="flex items-center gap-1.5 font-display text-xs font-semibold tracking-wider text-success uppercase">
          <span className="size-1.5 rounded-full bg-success" />
          {t.live}
        </span>
      }
    >
      <dl className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <dt className="text-muted">{t.currentPoll}</dt>
          <dd className="font-display text-xl font-semibold tabular-nums text-fg">
            {live.hz > 0 ? Math.round(live.hz) : "—"}
            <span className="ml-1 text-xs text-muted">Hz</span>
          </dd>
        </div>
        <div>
          <dt className="text-muted">{t.average}</dt>
          <dd className="font-display text-xl font-semibold tabular-nums">
            {live.hz > 0 ? live.hz.toFixed(1) : "—"}
            <span className="ml-1 text-xs text-muted">Hz</span>
          </dd>
        </div>
        <div>
          <dt className="text-muted">{t.jitter}</dt>
          <dd className="font-display text-xl font-semibold tabular-nums">
            {live.jitterMs ? live.jitterMs.toFixed(2) : "—"}
            <span className="ml-1 text-xs text-muted">ms</span>
          </dd>
        </div>
      </dl>
      <p className="mt-2 text-xs text-muted">
        {t.lastInput}: {agoLabel(live.last, lang)}
      </p>
      <div className="mt-2 flex h-3 gap-px">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className={i < fill ? "flex-1 rounded-sm bg-accent" : "flex-1 rounded-sm bg-subtle"}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-faint">
        {live.source === "native" ? t.rawActive : t.pointerFallback} · {t.deviceSpecific} · {t.noSmoothing}
      </p>
    </DashPanel>
  );
}
