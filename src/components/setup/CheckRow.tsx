import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckRow({
  checked,
  onChange,
  title,
  hint,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  title: string;
  hint?: string;
  id: string;
}) {
  return (
    <button
      type="button"
      id={id}
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl bg-elevated/70 px-3.5 py-3 text-left shadow-border transition-[background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:bg-subtle hover:shadow-border-hover",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs shadow-border transition-colors duration-[var(--motion-quick)]",
          checked ? "bg-accent text-accent-fg" : "bg-subtle text-transparent",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium">{title}</span>
        {hint ? (
          <span className="mt-0.5 block text-sm text-muted">{hint}</span>
        ) : null}
      </span>
    </button>
  );
}
