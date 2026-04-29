import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

import canThiepSom1 from "@/assets/dich_vu/can_thiep_som/1.jpg";
import giaoDucHoaNhap1 from "@/assets/dich_vu/giao_duc_hoa_nhap/1.jpg";
import khamTamLy1 from "@/assets/dich_vu/kham_test_tam_ly/1.jpg";
import kyNangSong1 from "@/assets/dich_vu/ky_nang_song/1.jpg";
import thamVan from "@/assets/trung_tam/9.jpg";

const serviceThumbnails = [
  khamTamLy1,
  canThiepSom1,
  giaoDucHoaNhap1,
  kyNangSong1,
  thamVan,
];

export const metadata: Metadata = {
  title: "Dịch vụ Can thiệp & Giáo dục Trẻ Em",
  description:
    "Trung tâm VH cung cấp đầy đủ các dịch vụ: khám - test tâm lý, can thiệp sớm (18 tháng–6 tuổi), giáo dục hòa nhập, kỹ năng sống và tham vấn điều trị tâm lý. Đội ngũ chuyên gia giàu kinh nghiệm tại Phú Nhuận, TP.HCM.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 40%, var(--color-primary) 0%, transparent 45%), radial-gradient(circle at 85% 15%, var(--color-secondary) 0%, transparent 35%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08) 0%, transparent 40%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/10 md:right-8"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-3 text-lg font-semibold uppercase tracking-widest text-primary/90">
            Trung tâm VH
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Dịch vụ chuyên môn
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Hệ thống dịch vụ đánh giá, can thiệp, giáo dục và tham vấn — đồng
            hành cùng trẻ và gia đình theo từng nhu cầu phát triển.
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-secondary-light/60 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-2">
            {services.map((service, i) => (
              <li key={service.id}>
                <Link
                  href={`/dich-vu/${service.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/90 bg-white shadow-sm ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/20"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-secondary-light/40">
                    <Image
                      src={serviceThumbnails[i]!}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 40vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-secondary-dark/70 via-secondary-dark/15 to-transparent"
                      aria-hidden
                    />
                    <p className="absolute bottom-4 left-4 right-4 font-serif text-xl font-bold leading-snug text-white drop-shadow-sm sm:text-2xl">
                      {service.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="flex-1 text-sm leading-relaxed text-muted sm:text-base">
                      {service.shortDesc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary-dark transition-colors group-hover:text-primary-dark">
                      Xem chi tiết
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
            Bạn cần tư vấn cho con?
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Hãy để Trung tâm VH đồng hành cùng bạn. Liên hệ ngay để được tư vấn
            miễn phí và đặt lịch hẹn.
          </p>
          <Link
            href="/lien-he"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            Liên hệ ngay
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
