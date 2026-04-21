import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/trung_tam/1.jpg";
import aboutImg from "@/assets/trung_tam/2.jpg";
// Service activity images per trang_chu.txt
import svcKhamTest from "@/assets/hoat_dong/49.jpg";
import svcCanThiep from "@/assets/hoat_dong/11.jpg";
import svcHoaNhap from "@/assets/hoat_dong/27.jpg";
import svcKyNang from "@/assets/hoat_dong/32.jpg";
import svcThamVan from "@/assets/dich_vu/2.jpg";
// Facility gallery
import csvc1 from "@/assets/co_so_vat_chat/1.jpg";
import csvc2 from "@/assets/co_so_vat_chat/2.jpg";
import csvc3 from "@/assets/co_so_vat_chat/3.jpg";
import csvc4 from "@/assets/co_so_vat_chat/4.jpg";
import csvc5 from "@/assets/co_so_vat_chat/5.jpg";
import csvc6 from "@/assets/co_so_vat_chat/6.jpg";
import { siteConfig, services, teamMembers } from "@/lib/data";

const serviceImages = [
  svcKhamTest,
  svcCanThiep,
  svcHoaNhap,
  svcKyNang,
  svcThamVan,
];

const galleryImages = [
  { src: csvc1, alt: "Phòng học tại Trung tâm VH" },
  { src: csvc2, alt: "Không gian can thiệp" },
  { src: csvc3, alt: "Phòng tham vấn" },
  { src: csvc4, alt: "Khu vực học nhóm" },
  { src: csvc5, alt: "Sân hoạt động ngoài trời" },
  { src: csvc6, alt: "Khu vực tiếp nhận" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-secondary-dark sm:min-h-[680px]">
        <Image
          src={heroBg}
          alt="Hoạt động tại Trung tâm VH"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        {/* Gradient overlay — warm left side */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(74,141,163,0.55) 0%, rgba(74,141,163,0.10) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-[80px]">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-2xl font-medium text-white/85 sm:text-2xl">
              {siteConfig.slogan}
            </p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              Đồng hành cùng trẻ và gia đình qua những bước phát triển quan
              trọng nhất.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dich-vu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Tìm hiểu dịch vụ
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
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={aboutImg}
                  alt="Không gian học tập tại Trung tâm VH"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 rounded-2xl bg-primary/20 lg:block" />
            </div>
            <div>
              <p className="text-md font-semibold uppercase tracking-widest text-primary-dark">
                Về chúng tôi
              </p>
              <h2 className="mt-2 font-serif text-4xl font-bold text-secondary-dark sm:text-5xl">
                Về Trung tâm VH
              </h2>
              <p className="mt-5 leading-relaxed text-justify text-muted">
                {siteConfig.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 font-serif text-5xl font-bold text-secondary-dark">
              Lĩnh vực hoạt động
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted text-lg">
              Trung tâm VH cung cấp các dịch vụ chuyên môn đa dạng, đáp ứng nhu
              cầu phát triển toàn diện của trẻ.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/dich-vu/${service.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-5/4 overflow-hidden">
                  <Image
                    src={serviceImages[i]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm backdrop-blur-sm">
                      {service.icon}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground transition-colors group-hover:text-secondary-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.shortDesc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-dark">
                    Xem chi tiết
                    <svg
                      className="h-3.5 w-3.5"
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

          <div className="mt-10 text-center">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-9 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
            >
              Xem tất cả dịch vụ
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
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 font-serif text-5xl font-bold text-secondary-dark ">
              Đội ngũ chuyên môn
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted text-lg">
              Đội ngũ chuyên gia tận tâm, giàu kinh nghiệm trong khám, đánh giá,
              giáo dục và can thiệp cho trẻ.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-3xl border border-border bg-primary-light/20 p-8 text-center shadow-sm"
              >
                <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-full ring-4 ring-primary/20 ring-offset-2">
                  <Image
                    src={member.image}
                    alt={`Ảnh ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary-dark">
                  {member.role}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="bg-primary-light/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
                Không gian của chúng tôi
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-secondary-dark sm:text-4xl">
                Cơ sở vật chất
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-sm ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
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
