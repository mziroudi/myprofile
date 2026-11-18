/**
 * Project Deck. Designed & built by Aakash Mehra (21st.dev/@aakashmehra/components/scroll-stacking-cards).
 * Adapted for mziroudi.site: dark ground, 16:10 screenshots, colours passed as props, no sample data.
 *
 * A scroll-dealt deck of websites. As you scroll, the next card rises from below leaning toward you in 3D
 * and out of focus, and flattens and sharpens as it lands; the cards beneath lean back, sink and dim.
 * The bottom-right corner of each card is cut away to hold the visit button.
 */
"use client";

import { useRef, type ReactNode } from "react";
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  name: string;
  /** One sentence for screen readers: what the site is. */
  summary: string;
  url: string;
  /** Short label shown under the name, e.g. the year and type of work. */
  display?: string;
  /** A screenshot of the site, 16:10. */
  image: string;
  /** Optional responsive sources for the screenshot. */
  srcSet?: string;
  /** The arrow's colour, from the site's own brand. */
  accent: string;
};

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export type ProjectDeckProps = {
  projects: Project[];
  /** The page ground; the cut-out corner that holds the visit button is filled with it. */
  ground?: string;
  /** Text colour on the ground. */
  ink?: string;
  /** Secondary text colour on the ground. */
  muted?: string;
  className?: string;
  children?: ReactNode;
};

export function ProjectDeck({ projects, ground = "#0f0f0e", ink = "#efece6", muted = "#9b978f", className, children }: ProjectDeckProps) {
  const deck = useRef(null as HTMLElement | null);
  const reduce = useReducedMotion() ?? false;
  const count = projects.length;
  const { scrollYProgress } = useScroll({ target: deck, offset: ["start start", "end end"] });
  // a light, critically damped smoothing: it follows the wheel closely and never overshoots
  const progress = useSpring(scrollYProgress, { stiffness: 380, damping: 48, mass: 0.35 });

  return (
    <MotionConfig reducedMotion="user">
      {/* one screen of scroll per card; the stage stays pinned while they are dealt onto it */}
      <section ref={deck} className={cn("relative w-full", className)} style={{ height: `${Math.max(1, count) * 100}svh` }} aria-label="Client websites">
        <div className="sticky top-0 grid h-[100svh] place-items-center overflow-hidden px-4 [perspective:1800px] sm:px-10 lg:px-14">
          {projects.map((p, i) => (
            <Card key={p.url} p={p} i={i} count={count} progress={progress} still={reduce} ground={ground} ink={ink} muted={muted} />
          ))}
        </div>
      </section>
      {children}
    </MotionConfig>
  );
}

const easeOut = (t: number) => 1 - (1 - t) ** 3;
const ENTER = 0.72; // share of each card's screen spent arriving; the rest it rests in place

/** How far card `j` has arrived (0 below the window, 1 landed) at deck progress `v`. */
function arrived(j: number, v: number, count: number) {
  if (j <= 0) return 1;
  const span = Math.max(1, count - 1);
  return easeOut(clamp01((v * span - (j - 1)) / ENTER));
}

function Card({ p, i, count, progress, still, ground, ink, muted }: {
  p: Project; i: number; count: number; progress: MotionValue<number>; still: boolean; ground: string; ink: string; muted: string;
}) {
  // cards now lying on top of this one, counted smoothly
  const above = (v: number) => {
    let n = 0;
    for (let j = i + 1; j < count; j++) n += arrived(j, v, count);
    return Math.min(3, n);
  };
  const y = useTransform(progress, (v) => `${(1 - arrived(i, v, count)) * 108 - above(v) * 5}svh`); // covered cards lift so their edges show
  const rotateX = useTransform(progress, (v) => -(1 - arrived(i, v, count)) * 30 + above(v) * 5);
  const scale = useTransform(progress, (v) => 0.9 + 0.1 * arrived(i, v, count) - above(v) * 0.05);
  const filter = useTransform(progress, (v) => `blur(${((1 - arrived(i, v, count)) ** 2 * 12 + above(v) * 1.1).toFixed(2)}px)`);
  const dim = useTransform(progress, (v) => above(v) * 0.18);
  // reduced motion: no travel, each card simply appears in place when its turn comes
  const stillY = useTransform(progress, (v) => (arrived(i, v, count) >= 0.5 ? "0svh" : "110svh"));

  return (
    <motion.article
      aria-label={`${p.name}: ${p.summary}`}
      className="col-start-1 row-start-1 mt-[4svh] w-[min(100%,calc(80svh*16/10),1400px)] origin-[50%_25%] will-change-[transform,filter]"
      style={{ zIndex: i + 1, ...(still ? { y: stillY } : { y, rotateX, scale, filter }) }}
    >
      <div className="relative overflow-hidden rounded-[18px] shadow-[0_50px_90px_-35px_rgba(0,0,0,0.7)] sm:rounded-[24px]" style={{ background: ground }}>
        {/* the whole site, edge to edge */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          srcSet={p.srcSet}
          sizes="(max-width: 640px) 100vw, min(1400px, 128svh)"
          width={2400}
          height={1500}
          alt={`The ${host(p.url)} homepage`}
          loading={i < 2 ? "eager" : "lazy"}
          decoding="async"
          className="block aspect-[16/10] w-full object-cover object-top"
        />
        <Visit p={p} ground={ground} ink={ink} muted={muted} />
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: still ? 0 : dim }} />
      </div>
    </motion.article>
  );
}

/** The visit button, set into a corner cut out of the card. */
function Visit({ p, ground, ink, muted }: { p: Project; ground: string; ink: string; muted: string }) {
  const R = 18;
  const corner = (
    <svg aria-hidden width={R} height={R} viewBox={`0 0 ${R} ${R}`} className="block">
      <path d={`M${R} 0 V${R} H0 A${R} ${R} 0 0 0 ${R} 0 Z`} fill={ground} />
    </svg>
  );
  return (
    <div className="absolute bottom-0 right-0 z-10">
      <div className="absolute bottom-full right-0">{corner}</div>
      <div className="absolute bottom-0 right-full">{corner}</div>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${p.name} at ${host(p.url)} (opens in a new tab)`}
        className="group flex items-center gap-3 rounded-tl-[18px] py-2 pl-4 pr-1 outline-none sm:gap-5 sm:py-4 sm:pl-7"
        style={{ background: ground, color: ink }}
      >
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-semibold tracking-[-0.015em] sm:text-[21px]" style={{ fontFamily: "var(--display)" }}>{p.name}</span>
          <span className="text-[12px] underline-offset-4 group-hover:underline group-focus-visible:underline sm:text-[14px]" style={{ color: muted }}>{p.display ?? host(p.url)}</span>
        </span>
        <span
          className="grid size-10 place-items-center rounded-full text-white transition-transform duration-200 ease-out group-hover:rotate-45 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-active:scale-90 sm:size-[52px]"
          style={{ background: p.accent, outlineColor: p.accent }}
        >
          <ArrowUpRight className="size-5 sm:size-6" strokeWidth={2.2} />
        </span>
      </a>
    </div>
  );
}
