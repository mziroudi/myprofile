import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Journal",
  description: "Notes on design, software, and building products.",
};

const D = 0.05;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const year = new Date().getFullYear();

  return (
    <section className="relative">
      <header className="flex flex-col gap-6 border-b border-foreground/90 pb-3">
        <BlurFade delay={D}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-foreground">Journal · Vol. 07 · {year}</span>
            <span>—</span>
            <span>Longform notes</span>
          </div>
        </BlurFade>
        <BlurFade delay={D * 2}>
          <h1 className="font-display text-[clamp(3rem,12vw,8rem)] font-medium leading-[0.85] tracking-[-0.03em] text-foreground">
            Writing<span className="italic font-light">.</span>
          </h1>
        </BlurFade>
      </header>

      <BlurFade delay={D * 3}>
        <nav className="flex items-center justify-between border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-foreground">Contents</span>
          <span>{posts.length} entries</span>
          <Link href="/" className="transition-colors hover:text-foreground">
            ← Index
          </Link>
        </nav>
      </BlurFade>

      <ol className="mt-8 flex flex-col border-t border-border">
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade key={post.slug} delay={D * 4 + id * 0.05}>
              <li className="list-none border-b border-border">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-5 py-8 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(id + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:italic sm:text-2xl">
                      {post.metadata.title}
                    </h2>
                    {post.metadata.summary ? (
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                        {post.metadata.summary}
                      </p>
                    ) : null}
                  </div>
                  <time className="shrink-0 font-mono text-[10px] tabular-nums uppercase tracking-[0.2em] text-muted-foreground">
                    {post.metadata.publishedAt}
                  </time>
                </Link>
              </li>
            </BlurFade>
          ))}
      </ol>
    </section>
  );
}
