import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { knowledgeArticles } from "@/lib/data";
import placeholder from "@/assets/trung_tam/11.jpg";

export const metadata: Metadata = {
  title: "Kiến thức",
  description:
    "Chia sẻ kiến thức chuyên môn về tâm lý trẻ em, phát triển kỹ năng và hướng dẫn dành cho phụ huynh.",
  alternates: { canonical: "/kien-thuc" },
};

const categoryColors: Record<string, string> = {
  "Phát triển trẻ em": "bg-primary/15 text-primary-dark",
  "Kỹ năng làm cha mẹ": "bg-secondary/15 text-secondary-dark",
  "Tâm lý trẻ em": "bg-muted/15 text-foreground",
  "Giáo dục đặc biệt": "bg-primary/10 text-secondary-dark",
};

export default function KnowledgePage() {
  const [featured, ...rest] = knowledgeArticles;

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 40%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 10% 70%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Trung tâm VH
          </p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Kiến thức
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Chia sẻ chuyên môn từ đội ngũ chuyên gia, giúp phụ huynh hiểu và
            đồng hành tốt hơn cùng con.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          {featured && (
            <article className="group mb-12 grid overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all hover:shadow-xl sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden sm:aspect-auto">
                <Image
                  src={placeholder}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent sm:block" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
                  Bài nổi bật
                </span>
                <span
                  className={`mt-2 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColors[featured.category] ?? "bg-muted/10 text-muted"
                  }`}
                >
                  {featured.category}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-secondary-dark sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
                  Đọc bài viết
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </article>
          )}

          {/* Rest of articles */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={placeholder}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      categoryColors[article.category] ??
                      "bg-muted/10 text-muted"
                    }`}
                  >
                    {article.category}
                  </span>
                  <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-secondary-dark">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-dark underline-offset-2 hover:underline">
                    Đọc thêm
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-light py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-serif text-2xl font-bold text-secondary-dark">
            Bạn có câu hỏi về sự phát triển của con?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Liên hệ để được tư vấn trực tiếp từ đội ngũ chuyên gia giàu kinh nghiệm.
          </p>
          <Link
            href="/lien-he"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Đặt lịch tư vấn
          </Link>
        </div>
      </section>
    </>
  );
}
