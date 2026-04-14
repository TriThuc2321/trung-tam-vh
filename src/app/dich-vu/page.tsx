import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceDetails, services } from "@/lib/data";

// Khám - test tâm lý
import dichVu1 from "@/assets/dich_vu/1.jpg";
import dichVu2 from "@/assets/dich_vu/2.jpg";
// Can thiệp sớm
import dichVu3 from "@/assets/dich_vu/3.jpg";
import canThiepSom from "@/assets/dich_vu/can_thiep_som.png";
import dichVu4 from "@/assets/dich_vu/4.jpg";
import dichVu5 from "@/assets/dich_vu/5.jpg";
import dichVu6 from "@/assets/dich_vu/6.jpg";
import dichVu7 from "@/assets/dich_vu/7.jpg";
// Giáo dục hoà nhập
import hoaNhap from "@/assets/dich_vu/hoa_nhap.png";
import dichVu8 from "@/assets/dich_vu/8.jpg";
import dichVu9 from "@/assets/dich_vu/9.jpg";
import dichVu10 from "@/assets/dich_vu/10.jpg";
// Kỹ năng sống
import dichVu11 from "@/assets/dich_vu/11.jpg";
import dichVu12 from "@/assets/dich_vu/12.jpg";
import dichVu13 from "@/assets/dich_vu/13.jpg";
// Tham vấn
import thamVan from "@/assets/trung_tam/9.jpg";

const serviceIcons = ["🧠", "🌱", "🤝", "⭐", "💬"];

type CourseImage = { src: Parameters<typeof Image>[0]["src"]; alt: string };

const serviceMainImages = [dichVu1, dichVu3, dichVu8, dichVu11, thamVan];

const serviceSecondImages: (Parameters<typeof Image>[0]["src"] | null)[] = [
  dichVu2,
  null,
  null,
  dichVu12,
  null,
];

const serviceFeatureImages: (Parameters<typeof Image>[0]["src"] | null)[] = [
  null,
  canThiepSom,
  hoaNhap,
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

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Các dịch vụ chuyên môn tại Trung tâm VH: khám - test tâm lý, can thiệp sớm, giáo dục hoà nhập, kỹ năng sống và tham vấn, điều trị tâm lý.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Trung tâm VH
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Dịch vụ chuyên môn
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Hệ thống dịch vụ đánh giá, can thiệp, giáo dục và tham vấn —
            <br className="hidden sm:block" />
            đồng hành cùng trẻ và gia đình theo từng nhu cầu phát triển.
          </p>
        </div>

        {/* Service quick nav */}
        <nav
          className="relative mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2 px-4"
          aria-label="Điều hướng dịch vụ"
        >
          {services.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/20 hover:text-white"
            >
              <span>{serviceIcons[i]}</span>
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      {/* Services detail */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-28">
            {serviceDetails.map((service, i) => {
              const summary = services[i];
              const mainImg = serviceMainImages[i];
              const secondImg = serviceSecondImages[i];
              const featureImg = serviceFeatureImages[i];
              const courseImgs = serviceCourseImages[i];
              const isEven = i % 2 === 0;

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  {/* Section header line */}
                  <div className="mb-10 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-3xl">
                      {serviceIcons[i]}
                    </div>
                    <div>
                      {service.eyebrow && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
                          {service.eyebrow}
                        </p>
                      )}
                      <h2 className="font-serif text-3xl font-bold text-secondary-dark sm:text-4xl">
                        {summary.title}
                      </h2>
                    </div>
                  </div>

                  {/* Main image + intro */}
                  <div
                    className={`grid items-start gap-10 lg:grid-cols-2 ${
                      !isEven ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Images column */}
                    <div
                      className={`space-y-3 ${
                        !isEven ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-3xl shadow-lg">
                        <Image
                          src={mainImg}
                          alt={summary.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                      {secondImg && (
                        <div className="relative aspect-16/10 overflow-hidden rounded-2xl shadow-md">
                          <Image
                            src={secondImg}
                            alt={`${summary.title} - hình 2`}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                        </div>
                      )}
                    </div>

                    {/* Text column */}
                    <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                      <p className="text-xl font-semibold leading-snug text-secondary-dark">
                        {service.headline}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {service.intro}
                      </p>

                      {/* Target audience */}
                      {(service.targetTitle ||
                        service.targetDescription ||
                        service.targetList) && (
                        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-light/40 p-5">
                          {service.targetTitle && (
                            <h3 className="font-serif text-lg font-bold text-secondary-dark">
                              {service.targetTitle}
                            </h3>
                          )}
                          {service.targetDescription && (
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {service.targetDescription}
                            </p>
                          )}
                          {service.targetList && (
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {service.targetList.map((item) => (
                                <li
                                  key={item}
                                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-secondary-dark shadow-sm"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Section list */}
                      {(service.sectionTitle || service.sectionList) && (
                        <div className="mt-5 rounded-2xl border border-secondary/15 bg-secondary-light/50 p-5">
                          {service.sectionTitle && (
                            <h3 className="font-serif text-lg font-bold text-secondary-dark">
                              {service.sectionTitle}
                            </h3>
                          )}
                          {service.sectionList && (
                            <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                              {service.sectionList.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      <Link
                        href="/lien-he"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
                      >
                        Đặt lịch tư vấn
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
                  </div>

                  {/* Special notes */}
                  {service.specialNotes && (
                    <div className="mt-10 rounded-2xl border-l-4 border-primary bg-primary-light/30 p-6 sm:p-8">
                      <h3 className="font-serif text-xl font-bold text-secondary-dark">
                        Điểm đặc biệt
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {service.specialNotes.map((note, ni) => (
                          <li
                            key={ni}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                              {ni + 1}
                            </span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Process steps */}
                  {service.processSteps && (
                    <div className="mt-10 rounded-3xl bg-secondary-light/50 p-6 sm:p-10">
                      <h3 className="font-serif text-2xl font-bold text-secondary-dark">
                        {service.processTitle}
                      </h3>
                      {service.processIntro && (
                        <p className="mt-2 text-sm text-muted">
                          {service.processIntro}
                        </p>
                      )}
                      <ol className="relative mt-8 space-y-0">
                        {service.processSteps.map((step, si) => (
                          <li key={step.title} className="flex gap-5">
                            {/* Connector */}
                            <div className="flex flex-col items-center">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-white">
                                {si + 1}
                              </div>
                              {si < service.processSteps!.length - 1 && (
                                <div className="my-1 w-0.5 flex-1 bg-secondary/30" />
                              )}
                            </div>
                            <div className="pb-8">
                              <h4 className="font-semibold text-secondary-dark">
                                {step.title.replace(/^\d+\.\s*/, "")}
                              </h4>
                              <p className="mt-1 text-sm leading-relaxed text-muted">
                                {step.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Features with optional image */}
                  {service.features && (
                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                      {featureImg && (
                        <div className="relative overflow-hidden rounded-3xl shadow-md">
                          <Image
                            src={featureImg}
                            alt={`${summary.title} - chương trình`}
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                        </div>
                      )}
                      <div className={featureImg ? "" : "lg:col-span-2"}>
                        <h3 className="font-serif text-2xl font-bold text-secondary-dark">
                          {service.featuresTitle}
                        </h3>
                        <ul
                          className={`mt-5 grid gap-3 ${
                            featureImg ? "" : "sm:grid-cols-2"
                          }`}
                        >
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3 rounded-xl border border-border bg-white p-4 text-sm leading-relaxed text-muted shadow-sm"
                            >
                              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Courses */}
                  {service.courses && (
                    <div className="mt-10">
                      <h3 className="font-serif text-2xl font-bold text-secondary-dark">
                        {service.coursesTitle}
                      </h3>

                      {courseImgs ? (
                        /* Course cards with photos */
                        <div
                          className={`mt-6 grid gap-5 ${
                            courseImgs.length === 4
                              ? "sm:grid-cols-2 lg:grid-cols-4"
                              : "sm:grid-cols-3"
                          }`}
                        >
                          {service.courses.map((course, ci) => (
                            <div
                              key={ci}
                              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
                            >
                              {courseImgs[ci] && (
                                <div className="relative aspect-4/3 overflow-hidden">
                                  <Image
                                    src={courseImgs[ci].src}
                                    alt={courseImgs[ci].alt}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
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
                        /* Text-only course list */
                        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                          {service.courses.map((course, ci) => (
                            <li
                              key={ci}
                              className="rounded-2xl border border-border bg-primary-light/30 p-5"
                            >
                              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary-dark">
                                Khoá {ci + 1}
                              </span>
                              <p className="text-sm leading-relaxed text-muted">
                                {course}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Team */}
                  {service.team && (
                    <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                      <h3 className="font-serif text-2xl font-bold text-secondary-dark">
                        Đội ngũ nhân sự
                      </h3>
                      <ul className="mt-5 grid gap-4 md:grid-cols-2">
                        {service.team.map((member) => (
                          <li
                            key={member}
                            className="flex gap-3 rounded-xl bg-secondary-light/50 p-4 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Divider */}
                  {i < serviceDetails.length - 1 && (
                    <div className="mt-28 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, var(--color-primary) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Bạn chưa chắc dịch vụ nào phù hợp?
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Liên hệ với chúng tôi để được tư vấn miễn phí. Đội ngũ chuyên gia sẽ
            giúp bạn lựa chọn hướng hỗ trợ tốt nhất cho con.
          </p>
          <Link
            href="/lien-he"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            Liên hệ tư vấn ngay
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
