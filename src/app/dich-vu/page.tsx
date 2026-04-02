import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

import img1 from "@/assets/trung_tam/5.jpg";
import img2 from "@/assets/trung_tam/6.jpg";
import img3 from "@/assets/trung_tam/7.jpg";
import img4 from "@/assets/trung_tam/8.jpg";
import img5 from "@/assets/trung_tam/9.jpg";

const serviceImages = [img1, img2, img3, img4, img5];
const serviceIcons = ["🧠", "🌱", "🤝", "⭐", "💬"];

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Các dịch vụ chuyên môn: Khám Test tâm lý, Can thiệp sớm, Giáo dục hoà nhập, Kỹ năng sống, Tham vấn & điều trị tâm lý.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-secondary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Dịch vụ của chúng tôi
          </h1>
          <p className="mt-4 text-white/80">
            Trung tâm VH cung cấp hệ thống dịch vụ toàn diện, đồng hành cùng trẻ
            và gia đình trên hành trình phát triển.
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
              {services.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex flex-col items-center gap-1 rounded-xl border border-border bg-white p-3 text-center text-xs font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-xl">{serviceIcons[i]}</span>
                  <span>{s.title}</span>
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
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={serviceImages[i]}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                      {serviceIcons[i]}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted">
                      {service.fullDesc}
                    </p>
                    <Link
                      href="/lien-he"
                      className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                      Đặt lịch tư vấn
                    </Link>
                  </div>
                </div>
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
