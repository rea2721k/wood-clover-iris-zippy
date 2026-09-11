import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab } from "@/lib/lab-store";
import { POLL_RATES } from "@/lib/senslab/monitors";
import { DashPanel, HzChips } from "./chrome";
import { LivePollMeter } from "./LivePollMeter";
import { isNativeHost } from "@/lib/senslab/native-live";

export function PollPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const mouseHz = useLab((s) => s.mouseHz);
  const set = useLab((s) => s.set);

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,1fr)]">
      <div className="space-y-4">
        <div>
          <p className="font-display text-xs font-semibold tracking-wider text-muted uppercase">{t.tabPoll}</p>
          <h2 className="font-display text-3xl font-semibold tracking-wide">{t.rawInputPoll}</h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">{isNativeHost() ? t.pollNativeHint : t.hidHint}</p>
        </div>
        <LivePollMeter lang={lang} />
      </div>
      <div className="space-y-4">
        <DashPanel title={t.targetHz}>
          <p className="mb-3 font-display text-4xl font-semibold tabular-nums text-accent">
            {mouseHz}
            <span className="ml-2 text-lg text-muted">Hz</span>
          </p>
          <HzChips rates={POLL_RATES} value={mouseHz} onChange={(v) => set("mouseHz", v)} />
        </DashPanel>
        <DashPanel title={t.pollPad}>
          <p className="text-sm leading-relaxed text-muted">{t.pollMove}</p>
        </DashPanel>
      </div>
    </div>
  );
}
