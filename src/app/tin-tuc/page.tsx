import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/data";
import placeholder from "@/assets/trung_tam/10.jpg";

export const metadata: Metadata = {
  title: "Tin tức & Sự kiện",
  description:
    "Cập nhật tin tức mới nhất từ Trung tâm VH: hội thảo, khai giảng các lớp kỹ năng sống, hợp tác giáo dục và kết quả can thiệp trẻ em tại Phú Nhuận, TP.HCM.",
  alternates: { canonical: "/tin-tuc" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Sự kiện": "bg-primary/15 text-primary-dark",
  "Thông báo": "bg-secondary/15 text-secondary-dark",
  "Tin tức": "bg-muted/15 text-foreground",
};

export default function NewsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 60%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 85% 30%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Trung tâm VH
          </p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Tin tức
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Cập nhật các hoạt động, sự kiện và thông tin mới nhất từ Trung tâm VH.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {newsArticles.map((article) => (
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
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  {/* Category badge on image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        categoryColors[article.category] ??
                        "bg-muted/10 text-muted"
                      }`}
                    >
                      {article.category}
                    </span>
                    <time
                      className="text-xs text-muted"
                      dateTime={article.date}
                    >
                      {formatDate(article.date)}
                    </time>
                  </div>
                  <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-secondary-dark">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark underline-offset-2 hover:underline">
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

      {/* Follow CTA */}
      <section className="bg-primary-light/40 py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-serif text-2xl font-bold text-secondary-dark">
            Cập nhật thông tin mới nhất
          </h2>
          <p className="mt-3 text-sm text-muted">
            Theo dõi trang tin tức để không bỏ lỡ các sự kiện, thông báo và
            chương trình mới từ Trung tâm VH.
          </p>
          <Link
            href="/lien-he"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Liên hệ với chúng tôi
          </Link>
        </div>
      </section>
    </>
  );
}
