import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { shortDate } from "@/components/site/site-chrome";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    <section id="blog" aria-label={post.metadata.title}>
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
      <header className="jhero jhero--post">
        <div className="wrap jhero__in">
          <div className="hero__meta mono">
            <Link href="/blog">← Journal</Link>
            <time dateTime={post.metadata.publishedAt}>{shortDate(post.metadata.publishedAt)}</time>
            <span>{DATA.name}</span>
          </div>
          <h1 className="jhero__post">{post.metadata.title}</h1>
          {post.metadata.summary ? <p className="jhero__lead">{post.metadata.summary}</p> : null}
        </div>
      </header>
      <div className="light">
        <div className="wrap sec sec--tight">
          <article className="prose prose-lg post-body" dangerouslySetInnerHTML={{ __html: post.source }} />
          <p className="post-back"><Link href="/blog">← All entries</Link></p>
        </div>
      </div>
    </section>
  );
}
