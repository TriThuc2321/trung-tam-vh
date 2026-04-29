import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { knowledgeArticles } from "@/lib/data";
import imgChamNoi from "@/assets/dich_vu/can_thiep_som/1.jpg";
import imgVonTu from "@/assets/dich_vu/can_thiep_som/2.jpg";
import imgRlpTk from "@/assets/dich_vu/giao_duc_hoa_nhap/1.jpg";

const articleCoverById: Record<string, StaticImageData> = {
  "cham-noi": imgChamNoi,
  "chien-luoc-von-tu": imgVonTu,
  "roi-loan-pho-tu-ky-hoa-nhap": imgRlpTk,
};

export const metadata: Metadata = {
  title: "Kiến thức Tâm lý & Phát triển Trẻ Em",
  description:
    "Chia sẻ kiến thức chuyên môn về tâm lý trẻ em, chậm nói, rối loạn phổ tự kỷ, can thiệp sớm và kỹ năng sống. Hướng dẫn thực tế từ đội ngũ chuyên gia Trung tâm VH dành cho phụ huynh.",
  alternates: { canonical: "/kien-thuc" },
};

const categoryColors: Record<string, string> = {
  "Phát triển trẻ em": "bg-primary/15 text-primary-dark",
  "Kỹ năng làm cha mẹ": "bg-secondary/15 text-secondary-dark",
  "Tâm lý trẻ em": "bg-muted/15 text-foreground",
  "Giáo dục đặc biệt": "bg-primary/10 text-secondary-dark",
};

export default function KnowledgePage() {
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
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            TRUNG TÂM VH
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Chia sẻ chuyên môn từ đội ngũ chuyên gia, giúp phụ huynh hiểu và
            đồng hành tốt hơn cùng con.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {knowledgeArticles.map((article) => (
              <Link
                key={article.id}
                href={`/kien-thuc/${article.id}`}
                className="group block overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={articleCoverById[article.id] ?? imgChamNoi}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-secondary-dark">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, var(--color-primary) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Bạn cần tư vấn cho con?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
            Hãy để Trung tâm VH đồng hành cùng bạn. Liên hệ ngay để được tư vấn
            miễn phí và đặt lịch hẹn.
          </p>
          <Link
            href="/lien-he"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            Liên hệ ngay
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
          </Link>
        </div>
      </section>
    </>
  );
}
