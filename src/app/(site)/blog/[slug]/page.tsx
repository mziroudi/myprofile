import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <div className="mx-auto max-w-[44rem]">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Journal · Entry
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[0.98] tracking-[-0.02em] text-foreground">
          {post.metadata.title}
        </h1>
        <div className="mt-6 mb-12 flex items-center justify-between border-b border-border pb-6">
          <Suspense fallback={<p className="h-5" />}>
            <time className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </time>
          </Suspense>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {DATA.name}
          </span>
        </div>
        <article
          className="prose prose-neutral max-w-none font-display text-[17px] leading-[1.7] dark:prose-invert prose-headings:font-display prose-headings:font-medium prose-headings:italic prose-headings:tracking-tight prose-p:font-display prose-p:leading-[1.7] prose-a:underline prose-a:decoration-foreground/40 prose-a:underline-offset-4 prose-a:text-foreground hover:prose-a:decoration-foreground"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </div>
    </section>
  );
}
