import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceDetails, services } from "@/lib/data";

import img1 from "@/assets/trung_tam/5.jpg";
import img2 from "@/assets/trung_tam/6.jpg";
import img3 from "@/assets/trung_tam/7.jpg";
import img4 from "@/assets/trung_tam/8.jpg";
import img5 from "@/assets/trung_tam/9.jpg";

const serviceImages = [img1, img2, img3, img4, img5];
const serviceIcons = ["🧠", "🌱", "🤝", "⭐", "💬"];
const serviceSections = serviceDetails.map((detail, index) => ({
  ...detail,
  image: serviceImages[index],
  icon: serviceIcons[index],
  summary: services[index],
}));

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
      <section className="bg-secondary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Dịch vụ chuyên môn
          </h1>
          <p className="mt-4 text-white/80">
            Trung tâm VH đồng hành cùng trẻ và gia đình bằng hệ thống dịch vụ
            đánh giá, can thiệp, giáo dục và tham vấn phù hợp theo từng nhu cầu
            phát triển.
          </p>
        </div>
      </section>

      {/* Service tree */}
      <section className="bg-primary-light/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-xl font-bold text-secondary-dark">
            Sơ đồ dịch vụ
          </h2>
          <div className="flex flex-col items-center">
            <div className="rounded-xl bg-secondary px-8 py-3 text-sm font-bold text-white">
              Dịch vụ Trung tâm VH
            </div>
            <div className="h-6 w-px bg-secondary" />
            <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {serviceSections.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex flex-col items-center gap-1 rounded-xl border border-border bg-white p-3 text-center text-xs font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-xl">{service.icon}</span>
                  <span>{service.summary.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceSections.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 space-y-8 rounded-4xl border px-6 py-8 sm:px-8 sm:py-10 ${
                  i % 2 === 0
                    ? "border-primary/10 bg-primary-light/20"
                    : "border-secondary/10 bg-secondary-light/35"
                }`}
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.summary.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
                      {service.eyebrow}
                    </p>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {service.summary.title}
                    </h2>
                    <p className="mt-3 text-lg font-medium text-secondary-dark">
                      {service.headline}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted">
                      {service.intro}
                    </p>
                    <Link
                      href="/lien-he"
                      className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                      Đặt lịch tư vấn
                    </Link>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {(service.targetTitle || service.targetDescription || service.targetList) && (
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                      {service.targetTitle && (
                        <h3 className="text-xl font-bold text-secondary-dark">
                          {service.targetTitle}
                        </h3>
                      )}
                      {service.targetDescription && (
                        <p className="mt-3 leading-relaxed text-muted">
                          {service.targetDescription}
                        </p>
                      )}
                      {service.targetList && (
                        <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                          {service.targetList.map((item) => (
                            <li
                              key={item}
                              className="rounded-xl bg-primary-light/40 px-4 py-3"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {(service.sectionTitle || service.sectionList) && (
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                      {service.sectionTitle && (
                        <h3 className="text-xl font-bold text-secondary-dark">
                          {service.sectionTitle}
                        </h3>
                      )}
                      {service.sectionList && (
                        <ul className="mt-4 grid gap-3 text-sm text-muted">
                          {service.sectionList.map((item) => (
                            <li
                              key={item}
                              className="rounded-xl border border-border bg-secondary-light/40 px-4 py-3"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {service.specialNotes && (
                  <div className="rounded-2xl bg-secondary-dark p-6 text-white">
                    <h3 className="text-xl font-bold">Điểm nổi bật</h3>
                    <ul className="mt-4 grid gap-3">
                      {service.specialNotes.map((note) => (
                        <li
                          key={note}
                          className="rounded-xl bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/85"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.processSteps && (
                  <div className="rounded-2xl bg-primary-light/30 p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      {service.processTitle}
                    </h3>
                    {service.processIntro && (
                      <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                        {service.processIntro}
                      </p>
                    )}
                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                      {service.processSteps.map((step) => (
                        <div
                          key={step.title}
                          className="rounded-2xl bg-white p-5 shadow-sm"
                        >
                          <h4 className="font-bold text-secondary-dark">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      {service.featuresTitle}
                    </h3>
                    <ul className="mt-6 grid gap-4 lg:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-2xl bg-secondary-light/40 px-5 py-4 text-sm leading-relaxed text-muted"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.courses && (
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      {service.coursesTitle}
                    </h3>
                    <ul className="mt-6 grid gap-4">
                      {service.courses.map((course) => (
                        <li
                          key={course}
                          className="rounded-2xl border border-border bg-primary-light/30 px-5 py-4 text-sm leading-relaxed text-muted"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.team && (
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      Đội ngũ nhân sự
                    </h3>
                    <ul className="mt-6 grid gap-4 md:grid-cols-2">
                      {service.team.map((member) => (
                        <li
                          key={member}
                          className="rounded-2xl bg-primary-light/30 px-5 py-4 text-sm leading-relaxed text-muted"
                        >
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Bạn chưa chắc chắn dịch vụ nào phù hợp?
          </h2>
          <p className="mt-3 text-white/80">
            Liên hệ với chúng tôi để được tư vấn miễn phí. Đội ngũ chuyên gia sẽ
            giúp bạn lựa chọn hướng hỗ trợ tốt nhất cho con.
          </p>
          <Link
            href="/lien-he"
            className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </>
  );
}
