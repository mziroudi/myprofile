import { shortDate } from "@/components/site/site-chrome";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Journal",
  description: "Notes on design, software, and building products.",
};

export default async function BlogPage() {
  const posts = (await getBlogPosts()).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <>
      <section className="jhero" aria-labelledby="journal-h">
        <div className="wrap jhero__in">
          <div className="hero__meta mono">
            <span>Journal</span>
            <span>Design, software and the seams between</span>
            <span>{String(posts.length).padStart(2, "0")} entries</span>
          </div>
          <h1 className="jhero__title" id="journal-h">Journal<span className="o">.</span></h1>
          <p className="jhero__lead">Notes from 7+ years between Figma and the code editor. Short when short is enough, long when the idea deserves it.</p>
        </div>
      </section>

      <section className="light" aria-label="Entries">
        <div className="wrap sec sec--tight">
          <ol className="jlist">
            {posts.map((post, i) => (
              <li key={post.slug} data-reveal>
                <Link href={`/blog/${post.slug}`} className="jlist__row">
                  <span className="mono jlist__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="jlist__main">
                    <span className="jlist__title">{post.metadata.title}</span>
                    {post.metadata.summary ? <span className="jlist__sum">{post.metadata.summary}</span> : null}
                  </span>
                  <time className="mono jlist__date" dateTime={post.metadata.publishedAt}>{shortDate(post.metadata.publishedAt)}</time>
                  <span className="jlist__go" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
