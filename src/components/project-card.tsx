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
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-background/60">
              <span className="font-display text-7xl italic text-muted-foreground/30 sm:text-8xl">
                {title.slice(0, 1)}
              </span>
            </div>
          )}
          {number ? (
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
