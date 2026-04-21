import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails, services } from "@/lib/data";

// Khám - test tâm lý
import dichVu1 from "@/assets/dich_vu/1.jpg";
// Can thiệp sớm
import dichVu3 from "@/assets/dich_vu/3.jpg";
import dichVu4 from "@/assets/dich_vu/4.jpg";
import dichVu5 from "@/assets/dich_vu/5.jpg";
import dichVu6 from "@/assets/dich_vu/6.jpg";
import dichVu7 from "@/assets/dich_vu/7.jpg";
// Giáo dục hoà nhập
import dichVu8 from "@/assets/dich_vu/8.jpg";
import dichVu9 from "@/assets/dich_vu/9.jpg";
import dichVu10 from "@/assets/dich_vu/10.jpg";
// Kỹ năng sống
import dichVu11 from "@/assets/dich_vu/11.jpg";
import dichVu13 from "@/assets/dich_vu/13.jpg";
// Tham vấn
import thamVan from "@/assets/trung_tam/9.jpg";

type CourseImage = { src: Parameters<typeof Image>[0]["src"]; alt: string };

const serviceMainImages = [dichVu1, dichVu3, dichVu8, dichVu11, thamVan];

const serviceFeatureImages: (Parameters<typeof Image>[0]["src"] | null)[] = [
  null,
  null,
  null,
  dichVu13,
  null,
];

const serviceCourseImages: (CourseImage[] | null)[] = [
  null,
  [
    { src: dichVu4, alt: "Khoá cá nhân can thiệp sớm" },
    { src: dichVu5, alt: "Khoá cá nhân can thiệp sớm 2" },
    { src: dichVu6, alt: "Khoá nhóm can thiệp sớm" },
    { src: dichVu7, alt: "Khoá bán trú can thiệp sớm" },
  ],
  [
    { src: dichVu8, alt: "Khoá cá nhân giáo dục hoà nhập" },
    { src: dichVu9, alt: "Khoá nhóm giáo dục hoà nhập" },
    { src: dichVu10, alt: "Khoá bán trú giáo dục hoà nhập" },
  ],
  null,
  null,
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.id === slug);
  const summary = services.find((s) => s.id === slug);
  if (!detail || !summary) return { title: "Dịch vụ" };
  return {
    title: summary.title,
    description: summary.shortDesc,
    alternates: { canonical: `/dich-vu/${slug}` },
  };
}

// ─── check-mark icon ─────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = serviceDetails.findIndex((s) => s.id === slug);
  if (index === -1) notFound();

  const service = serviceDetails[index]!;
  const summary = services[index]!;
  const mainImg = serviceMainImages[index];
  const featureImg = serviceFeatureImages[index];
  const courseImgs = serviceCourseImages[index];

  return (
    <>
      {/* ── Breadcrumb bar (outside hero) ────────────────────────────────── */}
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
                  href="/dich-vu"
                  className="transition-colors hover:text-secondary-dark"
                >
                  Dịch vụ
                </Link>
              </li>
              <li aria-hidden className="select-none text-border">
                /
              </li>
              <li className="font-medium text-secondary-dark">
                {summary.title}
              </li>
            </ol>
          </nav>

          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-secondary/40 hover:bg-secondary-light hover:text-secondary-dark"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Tất cả dịch vụ
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary-dark py-14 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-4xl shadow-inner backdrop-blur-sm">
              {summary.icon}
            </span>
            <div className="min-w-0 flex-1">
              {service.eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/90">
                  {service.eyebrow}
                </p>
              )}
              <h1 className="mt-1 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {summary.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                {summary.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-16">
          {/* 1. Intro + main image + second image ───────────────────────── */}
          <section className="grid items-start gap-10 lg:grid-cols-5">
            {/* images */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              <div className="relative aspect-video overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={mainImg}
                  alt={summary.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              </div>
            </div>

            {/* intro text */}
            <div className="lg:col-span-2 lg:pt-2">
              {/* headline as large lead */}
              <p className="border-l-4 border-primary pl-4 text-lg font-semibold leading-snug text-secondary-dark sm:text-xl">
                {service.headline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                {service.intro}
              </p>

              <Link
                href="/lien-he"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                Đặt lịch tư vấn
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
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

          {/* 2. Target audience ─────────────────────────────────────────── */}
          {(service.targetTitle ||
            service.targetDescription ||
            service.targetList) && (
            <section>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-base"
                  aria-hidden
                >
                  🎯
                </span>
                {service.targetTitle && (
                  <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                    {service.targetTitle}
                  </h2>
                )}
              </div>

              {service.targetDescription && (
                <p className="mb-5 rounded-2xl bg-secondary-light/60 px-5 py-4 text-sm leading-relaxed text-secondary-dark sm:text-base">
                  {service.targetDescription}
                </p>
              )}

              {service.targetList && (
                <ul className="flex flex-wrap gap-2">
                  {service.targetList.map((item, i) => (
                    <li
                      key={item}
                      className="rounded-full border px-4 py-1.5 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* 3. Section list (sub-services / skills) ────────────────────── */}
          {(service.sectionTitle || service.sectionList) && (
            <section>
              {service.sectionTitle && (
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-base"
                    aria-hidden
                  >
                    📋
                  </span>
                  <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                    {service.sectionTitle}
                  </h2>
                </div>
              )}
              {service.sectionList && (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.sectionList.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary-light text-sm font-bold text-secondary-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* 4. Special notes ────────────────────────────────────────────── */}
          {service.specialNotes && (
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-base"
                  aria-hidden
                >
                  ✨
                </span>
                <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                  Điểm đặc biệt
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.specialNotes.map((note, ni) => (
                  <div
                    key={ni}
                    className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary-light/30 p-6"
                  >
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-sm">
                      {ni + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{note}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Process steps ────────────────────────────────────────────── */}
          {service.processSteps && (
            <section className="rounded-3xl bg-secondary-light/50 px-6 py-10 sm:px-10">
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-base"
                  aria-hidden
                >
                  🔄
                </span>
                <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                  {service.processTitle}
                </h2>
              </div>
              {service.processIntro && (
                <p className="mb-8 ml-11 text-sm text-muted">
                  {service.processIntro}
                </p>
              )}
              <ol className="relative space-y-0">
                {service.processSteps.map((step, si) => (
                  <li key={step.title} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white shadow-md">
                        {si + 1}
                      </div>
                      {si < service.processSteps!.length - 1 && (
                        <div className="my-1 w-0.5 flex-1 bg-secondary/25" />
                      )}
                    </div>
                    <div
                      className={
                        si < service.processSteps!.length - 1 ? "pb-8" : ""
                      }
                    >
                      <h3 className="pt-2 font-semibold text-secondary-dark">
                        {step.title.replace(/^\d+\.\s*/, "")}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* 6. Features ─────────────────────────────────────────────────── */}
          {service.features && (
            <section>
              {service.featuresTitle && (
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-base"
                    aria-hidden
                  >
                    💡
                  </span>
                  <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                    {service.featuresTitle}
                  </h2>
                </div>
              )}
              <div className="grid gap-8 lg:grid-cols-6">
                {featureImg && (
                  <div className="relative min-h-[220px] overflow-hidden rounded-3xl shadow-md lg:col-span-3">
                    <Image
                      src={featureImg}
                      alt={`${summary.title} - chương trình`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                )}
                <ul
                  className={`grid content-start gap-3 ${
                    featureImg
                      ? "sm:grid-cols-1 lg:col-span-3"
                      : "sm:grid-cols-2 lg:col-span-6"
                  }`}
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-sm"
                    >
                      <CheckIcon />
                      <span className="text-sm leading-relaxed text-muted">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 7. Courses ──────────────────────────────────────────────────── */}
          {service.courses && (
            <section>
              {service.coursesTitle && (
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-base"
                    aria-hidden
                  >
                    📚
                  </span>
                  <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                    {service.coursesTitle}
                  </h2>
                </div>
              )}

              {courseImgs ? (
                /* Photo course cards */
                <div
                  className={`grid gap-5 ${
                    courseImgs.length >= 4
                      ? "sm:grid-cols-2 lg:grid-cols-4"
                      : "sm:grid-cols-3"
                  }`}
                >
                  {service.courses.map((course, ci) => (
                    <div
                      key={ci}
                      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      {courseImgs[ci] && (
                        <div className="relative aspect-4/3 overflow-hidden">
                          <Image
                            src={courseImgs[ci]!.src}
                            alt={courseImgs[ci]!.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      )}
                      <div className="p-4 text-sm leading-relaxed text-muted">
                        {course}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Text-only course cards */
                <ul className="grid gap-4 sm:grid-cols-3">
                  {service.courses.map((course, ci) => (
                    <li
                      key={ci}
                      className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-xl font-bold text-primary-dark">
                        {ci + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-muted">
                        {course}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* 8. Team ─────────────────────────────────────────────────────── */}
          {service.team && (
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-base"
                  aria-hidden
                >
                  👩‍⚕️
                </span>
                <h2 className="font-serif text-xl font-bold text-secondary-dark sm:text-2xl">
                  Đội ngũ nhân sự
                </h2>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {service.team.map((member, mi) => (
                  <li
                    key={member}
                    className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-light text-lg font-bold text-secondary-dark">
                      {mi === 0 ? "👩‍⚕️" : "👩‍🎓"}
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {member}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary-dark py-16 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, var(--color-primary) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Cần tư vấn thêm?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              Đội ngũ chuyên gia sẽ đồng hành cùng gia đình để chọn hướng phù
              hợp nhất.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            Liên hệ tư vấn
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
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
