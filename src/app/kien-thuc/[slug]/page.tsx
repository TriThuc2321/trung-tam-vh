import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  knowledgeArticles,
  type KnowledgeContentBlock,
} from "@/lib/knowledge-articles-data";
import { siteConfig } from "@/lib/data";
import heroImg from "@/assets/trung_tam/11.jpg";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = knowledgeArticles.find((a) => a.id === slug);
  if (!article) return { title: "Kiến thức" };
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: { canonical: `/kien-thuc/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/kien-thuc/${slug}`,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: [article.author],
      tags: [article.category],
    },
  };
}

function ArticleBody({ blocks }: { blocks: KnowledgeContentBlock[] }) {
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
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="mt-8 scroll-mt-24 text-xl font-bold sm:text-2xl"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mt-4 leading-relaxed">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={i} className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = knowledgeArticles.find((a) => a.id === slug);
  if (!article) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Kiến thức", item: `${siteConfig.url}/kien-thuc` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteConfig.url}/kien-thuc/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/og-image.jpg` },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    url: `${siteConfig.url}/kien-thuc/${slug}`,
    inLanguage: "vi",
    about: { "@type": "Thing", name: article.category },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                  href="/kien-thuc"
                  className="transition-colors hover:text-secondary-dark"
                >
                  Kiến thức
                </Link>
              </li>
              <li aria-hidden className="select-none text-border">
                /
              </li>
              <li className="line-clamp-1 font-medium text-foreground">
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
          <span
            className={`inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95`}
          >
            {article.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
            {article.excerpt}
          </p>
          <p className="mt-6 text-sm text-white/60">
            <span className="font-medium text-white/80">Tác giả:</span>{" "}
            {article.author}
          </p>
        </div>
      </header>

      <div className="relative -mt-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
          <div className="relative aspect-[21/9] w-full max-h-72 sm:aspect-[3/1]">
            <Image
              src={heroImg}
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
              <p className="text-sm font-medium text-muted">
                Tác giả: {article.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary-light/60 px-8 py-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
              Cần tư vấn thêm về con?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Trung tâm VH đồng hành sàng lọc, đánh giá và can thiệp cá nhân
              hóa theo năng lực từng trẻ.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Đặt lịch tư vấn
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/kien-thuc"
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
            Quay lại danh sách kiến thức
          </Link>
        </div>
      </section>
    </>
  );
}
