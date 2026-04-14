import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ Trung tâm VH để tư vấn và đặt lịch hẹn. Địa chỉ: 150 Lê Văn Sỹ, Phường 10, Quận Phú Nhuận, TP.HCM.",
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-secondary-dark py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 75% 25%, var(--color-secondary) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Trung tâm VH
          </p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Liên hệ
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Tư vấn và đặt lịch hẹn — chúng tôi luôn sẵn sàng đồng hành cùng bạn.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">

            {/* Contact info + map */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary-dark/60">
                Thông tin
              </p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-secondary-dark sm:text-3xl">
                Thông tin liên hệ
              </h2>

              <address className="mt-8 space-y-4 not-italic">
                {/* Address */}
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Địa chỉ
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Điện thoại / Zalo
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                      className="mt-1 block text-sm font-semibold text-secondary-dark transition-colors hover:text-primary-dark"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm font-semibold text-secondary-dark transition-colors hover:text-primary-dark"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </address>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.98560529756!2d106.65266376960477!3d10.792430731762563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b661297db%3A0x5d1d4805d170469e!2zMTUwIMSQLiBMw6ogVsSDbiBT4bu5LCBQaMaw4budbmcgMTAsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1775145169919!5m2!1svi!2s"
                  width="600"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Trung tâm VH"
                  className="h-[320px] w-full"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary-dark/60">
                Đặt lịch
              </p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-secondary-dark sm:text-3xl">
                Tư vấn và đặt lịch hẹn
              </h2>
              <p className="mt-3 text-sm text-muted">
                Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
              </p>

              <div className="mt-6 rounded-3xl border-l-4 border-primary bg-primary-light/20 p-6 sm:p-8">
                <ContactForm />
                <p className="mt-5 text-xs text-muted">
                  Hoặc gửi email trực tiếp:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-primary-dark hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
