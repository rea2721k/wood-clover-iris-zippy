import { cn } from "@/lib/utils";

export function RbkWatermark({
  className,
  size = "hero",
}: {
  className?: string;
  size?: "hero" | "panel";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className,
      )}
    >
      <span
        className={cn(
          "rbk-mark absolute text-fg",
          size === "hero"
            ? "rbk-hero top-1/2 left-1/2"
            : "rbk-panel",
        )}
      >
        RBK
      </span>
    </div>
  );
}
