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

export default function KnowledgePage() {
  return (
    <>
      <section className="bg-secondary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Kiến thức
          </h1>
          <p className="mt-4 text-white/80">
            Chia sẻ chuyên môn từ đội ngũ chuyên gia, giúp phụ huynh hiểu và đồng
            hành tốt hơn cùng con.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {knowledgeArticles.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={placeholder}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold leading-snug text-foreground group-hover:text-secondary-dark">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary-dark">
                    Đọc thêm
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-light py-12 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-muted">
            Bạn có câu hỏi về sự phát triển của con? Liên hệ để được tư vấn trực
            tiếp từ chuyên gia.
          </p>
          <Link
            href="/lien-he"
            className="mt-4 inline-flex rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Đặt lịch tư vấn
          </Link>
        </div>
      </section>
    </>
  );
}
