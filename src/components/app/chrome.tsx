import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { fmtSens } from "@/lib/senslab/math";

export function DashPanel({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-md bg-elevated/90 p-3 shadow-border", className)}>
      {title ? (
        <header className="mb-2.5 flex items-center justify-between gap-2">
          <h3 className="font-display text-xs font-semibold tracking-wider text-muted uppercase">
            {title}
          </h3>
          {action}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export function SensSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  onReset,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  onReset?: () => void;
}) {
  return (
    <div className="sens-card min-w-0">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-xs text-muted">{label}</span>
        <span className="flex items-center gap-1 font-display text-lg font-semibold tabular-nums leading-none text-fg">
          {fmtSens(value, step)}
          {onReset ? (
            <button
              type="button"
              onClick={onReset}
              className="text-faint hover:text-fg"
              aria-label="reset"
            >
              <X className="size-3" strokeWidth={2.5} />
            </button>
          ) : null}
        </span>
      </div>
      <input
        type="range"
        className="sens-range mt-2.5"
        min={min}
        max={max}
        step={step}
        value={Number.isFinite(value) ? value : min}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <div className="mt-1 flex justify-between font-mono text-xs tabular-nums text-faint">
        <span>{fmtSens(min, step)}</span>
        <span>{fmtSens(max, step)}</span>
      </div>
    </div>
  );
}

export function HzChips({
  rates,
  value,
  onChange,
  suffix = "Hz",
}: {
  rates: readonly number[];
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {rates.map((r) => (
        <button
          key={r}
          type="button"
          data-on={value === r}
          onClick={() => onChange(r)}
          className="hz-chip bg-elevated text-sm text-muted hover:text-fg data-[on=true]:text-accent-fg"
        >
          {r} {suffix}
        </button>
      ))}
    </div>
  );
}

export function SwitchRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 rounded-md px-1 py-2 text-left text-sm"
    >
      <span className="text-muted">{label}</span>
      <span
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors duration-[var(--motion-quick)]",
          checked ? "bg-accent" : "bg-subtle shadow-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 size-4 rounded-full bg-fg transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)]",
            checked ? "translate-x-4 bg-accent-fg" : "translate-x-0",
          )}
        />
      </span>
    </button>
  );
}
