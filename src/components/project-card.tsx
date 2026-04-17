import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  number?: string;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

/**
 * Typographic cover used when a project has no screenshot.
 * Each project gets a variant based on its number so the grid feels composed.
 */
function ProjectCover({
  number,
  title,
  tags,
  dates,
}: {
  number?: string;
  title: string;
  tags: readonly string[];
  dates: string;
}) {
  const n = number ? parseInt(number, 10) : 0;
  const variant = n % 3;

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-card p-6 sm:p-8">
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* top meta */}
      <div className="relative flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>№ {number ?? "—"}</span>
        <span>{dates}</span>
      </div>

      {/* center title (variant-specific treatment) */}
      <div className="relative flex flex-1 items-center justify-center py-6">
        {variant === 0 ? (
          <p className="font-display text-[clamp(2rem,6vw,4rem)] font-light italic leading-[0.95] tracking-tight text-foreground text-balance">
            {title.split(" - ")[0]}
          </p>
        ) : variant === 1 ? (
          <p className="text-center font-display text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[0.95] tracking-tight text-foreground text-balance">
            {title.split(" - ")[0]}
            <span className="mt-2 block font-light italic text-muted-foreground text-[0.65em]">
              {title.includes(" - ") ? title.split(" - ")[1] : ""}
            </span>
          </p>
        ) : (
          <p className="font-display text-[clamp(5rem,14vw,10rem)] font-light italic leading-none text-foreground">
            {String(number ?? "").replace(/^0/, "")}
            <span className="text-muted-foreground/50">.</span>
          </p>
        )}
      </div>

      {/* bottom stack */}
      <div className="relative flex items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="max-w-[70%] truncate">
          {tags.slice(0, 3).join(" · ")}
        </span>
        <span aria-hidden className="text-foreground">↗</span>
      </div>
    </div>
  );
}

export function ProjectCard({
  number,
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <article className={cn("group flex h-full flex-col gap-4", className)}>
      {/* Image plate */}
      <Link
        href={href || "#"}
        className="relative block overflow-hidden border border-border bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-[4/3] w-full">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
          )}
          {!video && !image && (
            <ProjectCover number={number} title={title} tags={tags} dates={dates} />
          )}
          {number && (video || image) ? (
            <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80 mix-blend-difference">
              № {number}
            </span>
          ) : null}
        </div>
      </Link>

      {/* Caption */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[22px] font-medium leading-tight tracking-tight text-foreground sm:text-2xl">
            <Link
              href={href || "#"}
              className="transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {title}
            </Link>
          </h3>
          <time className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {dates}
          </time>
        </div>

        <Markdown className="prose prose-sm prose-neutral max-w-prose font-sans text-[14px] leading-relaxed text-muted-foreground dark:prose-invert prose-p:m-0">
          {description}
        </Markdown>

        {tags && tags.length > 0 && (
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {tags.map((t, i) => (
              <span key={t}>
                <span className="text-foreground/80">{t}</span>
                {i < tags.length - 1 ? <span className="text-border"> · </span> : null}
              </span>
            ))}
          </p>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            {links.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground underline decoration-[0.04em] underline-offset-[0.3em] decoration-foreground/30 transition-colors hover:decoration-foreground"
              >
                {item.icon}
                {item.type}
                <span aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* hidden print link */}
      <div className="sr-only">
        {link?.replace("https://", "").replace("www.", "")}
      </div>
    </article>
  );
}
