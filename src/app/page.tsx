import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/trung_tam/1.jpg";
import aboutImg from "@/assets/trung_tam/2.jpg";
import gallery5 from "@/assets/trung_tam/5.jpg";
import gallery6 from "@/assets/trung_tam/6.jpg";
import gallery7 from "@/assets/trung_tam/7.jpg";
import gallery8 from "@/assets/trung_tam/8.jpg";
import gallery9 from "@/assets/trung_tam/9.jpg";
import gallery10 from "@/assets/trung_tam/10.jpg";
import { siteConfig, coreValues, services, teamMembers } from "@/lib/data";

const serviceIcons = ["🧠", "🌱", "🤝", "⭐", "💬"];

const galleryImages = [
  { src: gallery5, alt: "Hoạt động kỹ năng sống" },
  { src: gallery6, alt: "Giờ học can thiệp sớm" },
  { src: gallery7, alt: "Hoạt động nhóm" },
  { src: gallery8, alt: "Không gian học tập" },
  { src: gallery9, alt: "Hoạt động ngoại khóa" },
  { src: gallery10, alt: "Tương tác giáo viên và trẻ" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-secondary-dark sm:min-h-[600px]">
        <Image
          src={heroBg}
          alt="Hoạt động tại Trung tâm VH"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center text-white">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90 sm:text-2xl">
            {siteConfig.slogan}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/dich-vu"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
            >
              Tìm hiểu dịch vụ
            </Link>
            <Link
              href="/lien-he"
              className="rounded-full border-2 border-white/60 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Đặt lịch tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={aboutImg}
                alt="Không gian học tập tại Trung tâm VH"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark sm:text-4xl">
                Về Trung tâm VH
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                {siteConfig.description}
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-primary-light/50 p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-primary-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-dark sm:text-4xl">
              Lĩnh vực hoạt động
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Trung tâm VH cung cấp các dịch vụ chuyên môn đa dạng, đáp ứng nhu
              cầu phát triển toàn diện của trẻ.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/dich-vu#${service.id}`}
                className={`group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
            >
              Xem chi tiết dịch vụ
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
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-dark sm:text-4xl">
              Đội ngũ chuyên môn
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Đội ngũ chuyên gia tận tâm, giàu kinh nghiệm trong khám, đánh giá,
              giáo dục và can thiệp cho trẻ.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-primary-light/30 p-6 text-center"
              >
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-secondary-light">
                  <Image
                    src={member.image}
                    alt={`Ảnh ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-dark">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-primary-light/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary-dark sm:text-4xl">
            Hình ảnh hoạt động
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-4/3 overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Bạn cần tư vấn cho con?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Hãy để Trung tâm VH đồng hành cùng bạn. Liên hệ ngay để được tư vấn
            miễn phí và đặt lịch hẹn.
          </p>
          <Link
            href="/lien-he"
            className="mt-8 inline-flex rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </>
  );
}
