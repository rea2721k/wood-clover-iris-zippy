import {
  type PointerEvent as REPointerEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { copy, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  icon?: ReactNode;
  badge?: string;
  lang: Lang;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  initial?: { x: number; y: number };
};

export function AppWindow({
  title,
  icon,
  badge,
  lang,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  footer,
  children,
  className,
  bodyClassName,
  initial,
}: Props) {
  const t = copy[lang];
  const [pos, setPos] = useState({ x: initial?.x ?? 0, y: initial?.y ?? 0 });
  const drag = useRef<{
    px: number;
    py: number;
    x: number;
    y: number;
  } | null>(null);

  const onPointerDown = useCallback(
    (e: REPointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("button")) return;
      onFocus();
      drag.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y };
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    [onFocus, pos.x, pos.y],
  );

  const onPointerMove = useCallback((e: REPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.px;
    const dy = e.clientY - drag.current.py;
    setPos({ x: drag.current.x + dx, y: drag.current.y + dy });
  }, []);

  const onPointerUp = useCallback(() => {
    drag.current = null;
  }, []);

  return (
    <section
      role="dialog"
      aria-label={title}
      onMouseDown={onFocus}
      style={{
        zIndex,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      className={cn(
        "window-frame pointer-events-auto relative flex flex-col overflow-hidden rounded-lg bg-surface shadow-window",
        className,
      )}
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="flex h-8 shrink-0 cursor-grab items-center gap-2 border-b border-border bg-elevated/90 px-2 active:cursor-grabbing max-md:cursor-default"
      >
        <div className="flex size-5 items-center justify-center">{icon}</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium leading-none">{title}</p>
        </div>
        {badge ? (
          <span className="hidden rounded-full bg-subtle px-2.5 py-1 text-xs font-medium tracking-wide text-muted sm:inline">
            {badge}
          </span>
        ) : null}
        <div className="flex items-center gap-0.5">
          <Button
            variant="quiet"
            size="icon"
            aria-label={t.minimize}
            onClick={onMinimize}
            className="size-8 min-h-8 min-w-8 rounded-none text-muted"
          >
            <Minus className="size-3.5" strokeWidth={2} />
          </Button>
          <Button
            variant="quiet"
            size="icon"
            aria-label={t.restore}
            className="hidden size-8 min-h-8 min-w-8 rounded-none text-muted md:inline-flex"
            tabIndex={-1}
          >
            <Square className="size-3" strokeWidth={2} />
          </Button>
          <Button
            variant="quiet"
            size="icon"
            aria-label={t.close}
            onClick={onClose}
            className="size-8 min-h-8 min-w-8 rounded-none text-muted hover:bg-danger hover:text-fg"
          >
            <X className="size-3.5" strokeWidth={2} />
          </Button>
        </div>
      </div>
      <div className={cn("min-h-0 flex-1 overflow-auto", bodyClassName)}>
        {children}
      </div>
      {footer ? (
        <div className="shrink-0 border-t border-border bg-elevated/60 px-4 py-3 sm:px-5">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
