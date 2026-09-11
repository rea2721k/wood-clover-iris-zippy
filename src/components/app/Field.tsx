import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs font-medium tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Select({
  value,
  onChange,
  children,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-11 w-full rounded-xl bg-elevated px-3 text-sm text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40",
        className,
      )}
    >
      {children}
    </select>
  );
}

export function Num({
  value,
  onChange,
  step = "0.01",
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  step?: string;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      value={Number.isFinite(value) ? value : ""}
      step={step}
      min={min}
      max={max}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="h-11 w-full rounded-xl bg-elevated px-3 text-sm tabular-nums text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40"
    />
  );
}

export function QualityMark({ q }: { q: string }) {
  const tone =
    q === "Verified" || q === "Community-verified"
      ? "text-accent"
      : q === "Calibrated"
        ? "text-success"
        : q === "Manual"
          ? "text-danger"
          : "text-muted";
  return <span className={cn("text-xs font-medium", tone)}>{q}</span>;
}
