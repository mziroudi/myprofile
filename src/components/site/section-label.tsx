import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}
