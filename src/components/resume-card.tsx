"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  index?: string;
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  index,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <li className="list-none border-b border-border last:border-b-0">
      <Link
        href={href || "#"}
        className={cn(
          "group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-5 py-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:py-7",
          description ? "cursor-pointer" : ""
        )}
        onClick={handleClick}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {index ?? "—"}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-medium leading-tight tracking-tight text-foreground sm:text-xl">
              {title}
            </h3>
            {badges && badges.length > 0 ? (
              <span className="inline-flex flex-wrap gap-1.5 align-middle">
                {badges.map((badge, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="rounded-none border border-border bg-transparent px-1.5 py-0 font-mono text-[9px] font-normal uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {badge}
                  </Badge>
                ))}
              </span>
            ) : null}
            {description ? (
              <ChevronRightIcon
                className={cn(
                  "size-3.5 text-muted-foreground transition-transform duration-300",
                  isExpanded && "rotate-90 text-foreground"
                )}
              />
            ) : null}
          </div>
          {subtitle ? (
            <p className="mt-1 font-display text-[15px] italic leading-snug text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>

        <time className="shrink-0 font-mono text-[10px] tabular-nums uppercase tracking-[0.18em] text-muted-foreground">
          {period}
        </time>
      </Link>

      {description ? (
        <motion.div
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-[2.25rem_1fr_auto] gap-x-5 pb-6">
            <span aria-hidden />
            <ul className="max-w-prose space-y-2 text-sm leading-relaxed text-muted-foreground">
              {description
                .split("\n")
                .filter((line) => line.trim())
                .map((point, i) => (
                  <li key={i}>{point.replace(/^•\s*/, "")}</li>
                ))}
            </ul>
            <span aria-hidden />
          </div>
        </motion.div>
      ) : null}
    </li>
  );
};
