import { markFor } from "@/lib/senslab/game-marks";
import { entryFor } from "@/lib/senslab/library";
import { GAME_LOGOS } from "./game-logos";
import { cn } from "@/lib/utils";

export function GameMark({
  name,
  size = "sm",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
}) {
  const e = entryFor(name);
  const m = markFor(name, e.short);
  const Logo = GAME_LOGOS[name];
  const box =
    size === "hero"
      ? "h-32 w-32"
      : size === "lg"
        ? "h-16 w-16"
        : size === "md"
          ? "h-12 w-12"
          : "size-8";
  return (
    <span
      title={e.label}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md shadow-border",
        box,
        className,
      )}
      style={{ background: m.bg, color: m.fg }}
    >
      <span className="pointer-events-none absolute inset-0 opacity-25" style={{ background: `linear-gradient(160deg, #fff 0%, transparent 42%)` }} />
      {Logo ? (
        <Logo />
      ) : (
        <svg viewBox="0 0 128 128" className="relative size-full" aria-hidden>
          <text
            x="64"
            y="76"
            textAnchor="middle"
            fill="currentColor"
            fontSize={m.text.length > 2 ? 34 : 48}
            fontWeight="800"
            fontFamily="Rajdhani, Arial Black, sans-serif"
          >
            {m.text}
          </text>
        </svg>
      )}
    </span>
  );
}
