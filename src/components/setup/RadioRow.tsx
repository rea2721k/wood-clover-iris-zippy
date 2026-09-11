import { cn } from "@/lib/utils";

export function RadioRow({
  selected,
  onSelect,
  title,
  hint,
  name,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  hint?: string;
  name: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      name={name}
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl px-3.5 py-3 text-left shadow-border transition-[background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
        selected ? "bg-subtle shadow-border-hover" : "bg-elevated/70 hover:bg-subtle",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full shadow-border",
          selected ? "border border-accent" : "bg-subtle",
        )}
      >
        <span
          className={cn(
            "size-2.5 rounded-full transition-transform duration-[var(--motion-quick)]",
            selected ? "scale-100 bg-accent" : "scale-0 bg-transparent",
          )}
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium">{title}</span>
        {hint ? (
          <span className="mt-0.5 block font-mono text-xs text-muted">{hint}</span>
        ) : null}
      </span>
    </button>
  );
}
