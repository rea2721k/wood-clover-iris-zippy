import { useId } from "react";
import { cn } from "@/lib/utils";

export function SensMark({ className }: { className?: string }) {
  const gid = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7af0ff" />
          <stop offset="1" stopColor="#1bb8d4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="#071422" />
      <path
        fill={`url(#${gid})`}
        d="M33.6 15.1c-.6-3.8-4.2-6.4-9.9-6.4-6.6 0-10.8 3.3-10.8 8.3 0 3.8 2.6 6.1 9.3 7.6l2.3.5c4.3 1 6.3 2.2 6.3 4.8 0 3-2.7 4.8-7.3 4.8-4.8 0-7.6-2-8.4-5.7l-5.5.8c1.2 6.3 6.7 10.1 14 10.1 8.1 0 13.3-4 13.3-10.3 0-4.4-2.8-7.2-9.5-8.8l-2.3-.5c-4.2-1-5.8-2.1-5.8-4.4 0-2.6 2.4-4.4 6.4-4.4 3.6 0 6 1.6 6.6 4.4l5.3-.8z"
      />
    </svg>
  );
}
