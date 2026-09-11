import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none rounded-md transition-[transform,background-color,color,box-shadow,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-fg text-bg shadow-btn hover:bg-fg/92",
        accent: "bg-accent text-accent-fg shadow-btn hover:brightness-110",
        ghost:
          "text-fg bg-elevated/80 shadow-btn-ghost hover:bg-subtle hover:shadow-border-hover",
        quiet: "text-muted hover:text-fg hover:bg-elevated",
        danger:
          "bg-danger text-bg shadow-btn hover:brightness-110",
        dangerGhost:
          "text-danger shadow-btn-ghost hover:bg-danger/12",
      },
      size: {
        sm: "h-9 min-h-9 px-3.5 text-sm",
        md: "h-11 min-h-11 px-5 text-sm",
        lg: "h-12 min-h-12 px-6 text-base",
        icon: "size-9 min-h-9 min-w-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
