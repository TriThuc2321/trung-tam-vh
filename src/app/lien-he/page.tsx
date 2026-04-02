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
      <section className="bg-secondary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Liên hệ
          </h1>
          <p className="mt-4 text-white/80">
            Tư vấn và đặt lịch hẹn — chúng tôi luôn sẵn sàng đồng hành cùng bạn.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info + map */}
            <div>
              <h2 className="text-2xl font-bold text-secondary-dark">
                Thông tin liên hệ
              </h2>
              <address className="mt-6 space-y-5 not-italic">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Địa chỉ</p>
                    <p className="text-sm text-muted">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted transition-colors hover:text-primary-dark">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Điện thoại</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-muted transition-colors hover:text-primary-dark">{siteConfig.phone}</a>
                  </div>
                </div>
              </address>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.98560529756!2d106.65266376960477!3d10.792430731762563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b661297db%3A0x5d1d4805d170469e!2zMTUwIMSQLiBMw6ogVsSDbiBT4bu5LCBQaMaw4budbmcgMTAsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1775145169919!5m2!1svi!2s"
                  width="600"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Trung tâm VH"
                  className="h-[350px] w-full"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="rounded-2xl border border-border bg-primary-light/30 p-6 sm:p-8">
                <h2 className="mb-1 text-2xl font-bold text-secondary-dark">
                  Tư vấn và đặt lịch hẹn
                </h2>
                <p className="mb-6 text-sm text-muted">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian
                  sớm nhất.
                </p>
                <ContactForm />
                <p className="mt-4 text-xs text-muted">
                  Hoặc gửi thông tin trực tiếp qua email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-dark hover:underline">
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
