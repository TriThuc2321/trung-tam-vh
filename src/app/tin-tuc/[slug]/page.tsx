import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  newsArticles,
  type NewsContentBlock,
} from "@/lib/news-articles-data";
import { siteConfig } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

function toAbsoluteImageUrl(src: string): string {
  if (src.startsWith("http")) return src;
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
}

function collectImageUrls(blocks: NewsContentBlock[], thumbnail: {
  src: string;
}): string[] {
  const urls = new Set<string>([toAbsoluteImageUrl(thumbnail.src)]);
  for (const b of blocks) {
    if (b.type === "image") {
      urls.add(toAbsoluteImageUrl(b.src.src));
    }
  }
  return [...urls];
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.id === slug);
  if (!article) {
    return { title: "Tin tức" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: { canonical: `/tin-tuc/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/tin-tuc/${slug}`,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.thumbnail.src,
          width: article.thumbnail.width,
          height: article.thumbnail.height,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

function ArticleBody({ blocks }: { blocks: NewsContentBlock[] }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-secondary-dark prose-p:text-foreground/90 prose-li:marker:text-primary-dark">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-10 scroll-mt-24 text-2xl font-bold first:mt-0 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mt-4 leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <figure key={i} className="my-8 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          </figure>
        );
      })}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.id === slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.id !== article.id);

  const imageUrls = collectImageUrls(article.content, article.thumbnail);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tin tức",
        item: `${siteConfig.url}/tin-tuc`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/tin-tuc/${slug}`,
      },
    ],
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: imageUrls,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/tin-tuc/${slug}`,
    },
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-image.jpg`,
      },
    },
    inLanguage: "vi",
    articleSection: article.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-secondary-dark"
                >
                  Trang chủ
                </Link>
              </li>
              <li aria-hidden className="select-none text-border">
                /
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="transition-colors hover:text-secondary-dark"
                >
                  Tin tức
                </Link>
              </li>
              <li aria-hidden className="select-none text-border">
                /
              </li>
              <li className="line-clamp-1 max-w-[min(100%,18rem)] font-medium text-foreground sm:max-w-md">
                {article.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-secondary-dark py-14 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 45%), radial-gradient(circle at 90% 20%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95">
            {article.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <p>
              <span className="font-medium text-white/90">Tác giả:</span>{" "}
              {article.author}
            </p>
            <time dateTime={article.date}>
              {formatDate(article.date)}
            </time>
          </div>
        </div>
      </header>

      <div className="relative -mt-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
          <div className="relative aspect-[21/9] w-full max-h-72 sm:aspect-[3/1]">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
          </div>
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <ArticleBody blocks={article.content} />
            <div className="mt-12 border-t border-border pt-10">
              <p className="text-sm text-muted">
                <span className="font-medium">Tác giả:</span> {article.author}
                {" · "}
                <time dateTime={article.date} className="text-muted">
                  {formatDate(article.date)}
                </time>
              </p>
            </div>
          </div>
        </article>
      </div>

      {related.length > 0 ? (
        <section
          className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="related-heading"
        >
          <h2
            id="related-heading"
            className="font-serif text-2xl font-bold text-secondary-dark"
          >
            Bài viết khác
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((a) => (
              <Link
                key={a.id}
                href={`/tin-tuc/${a.id}`}
                className="group flex overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-32 w-36 shrink-0 sm:h-36 sm:w-44">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(min-width: 640px) 176px, 144px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
                  <time
                    className="text-xs text-muted"
                    dateTime={a.date}
                  >
                    {formatDate(a.date)}
                  </time>
                  <h3 className="mt-1 line-clamp-2 font-serif text-base font-bold text-foreground group-hover:text-secondary-dark">
                    {a.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary-light/40 px-8 py-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
              Cần tư vấn thêm về con?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Trung tâm VH đồng hành sàng lọc, đánh giá và can thiệp cá nhân hóa
              theo năng lực từng trẻ.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Liên hệ với chúng tôi
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark underline-offset-4 hover:underline"
          >
            <svg
              className="h-4 w-4 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Quay lại danh sách tin tức
          </Link>
        </div>
      </section>
    </>
  );
}
