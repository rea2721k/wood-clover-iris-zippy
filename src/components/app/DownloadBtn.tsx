import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DownloadBtn({
  href,
  filename,
  className,
  children,
}: {
  href: string;
  filename: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download={filename}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "cursor-pointer")}
    >
      {children}
    </a>
  );
}
