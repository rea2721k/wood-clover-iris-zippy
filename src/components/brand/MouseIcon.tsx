import { cn } from "@/lib/utils";

export function MouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#0c1116" />
      <path
        fill="#6ed9ce"
        d="M16 5.6c-4.6 0-7.8 3.3-7.8 8.4v6c0 4.2 3.4 7.4 7.8 7.4s7.8-3.2 7.8-7.4v-6c0-5.1-3.2-8.4-7.8-8.4zm-.85 1.7v6.4H9.55C10 10.3 12.4 7.5 15.15 7.3zm1.7 0c2.75.2 5.15 3 5.6 6.4h-5.6V7.3z"
      />
    </svg>
  );
}
