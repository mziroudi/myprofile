import Link from "next/link";

interface Props {
  index?: string;
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode | ((props: { className?: string }) => React.ReactNode);
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  index,
  title,
  description,
  dates,
  location,
  links,
}: Props) {
  return (
    <li className="list-none border-b border-border last:border-b-0">
      <article className="grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-5 py-6 sm:py-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {index ?? "—"}
        </span>

        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium leading-tight tracking-tight text-foreground sm:text-xl">
            {title}
          </h3>
          {location ? (
            <p className="mt-0.5 font-display text-[13px] italic text-muted-foreground">
              {location}
            </p>
          ) : null}
          {description ? (
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {links && links.length > 0 ? (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {links.map((linkItem, idx) => (
                <Link
                  href={linkItem.href}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground underline decoration-[0.04em] underline-offset-[0.3em] decoration-foreground/30 transition-colors hover:decoration-foreground"
                >
                  {linkItem.icon &&
                    (typeof linkItem.icon === "function"
                      ? linkItem.icon({ className: "size-3 shrink-0" })
                      : linkItem.icon)}
                  <span>{linkItem.title}</span>
                  <span aria-hidden>↗</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <time className="shrink-0 font-mono text-[10px] tabular-nums uppercase tracking-[0.18em] text-muted-foreground">
          {dates}
        </time>
      </article>
    </li>
  );
}
