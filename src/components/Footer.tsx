import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image src={logo} alt={`Logo ${siteConfig.name}`} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {siteConfig.slogan}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Liên kết
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Dịch vụ
            </h3>
            <ul className="space-y-2">
              <li><Link href="/dich-vu#kham-test-tam-ly" className="text-sm text-white/80 transition-colors hover:text-primary">Khám — Test tâm lý</Link></li>
              <li><Link href="/dich-vu#can-thiep-som" className="text-sm text-white/80 transition-colors hover:text-primary">Can thiệp sớm</Link></li>
              <li><Link href="/dich-vu#giao-duc-hoa-nhap" className="text-sm text-white/80 transition-colors hover:text-primary">Giáo dục hoà nhập</Link></li>
              <li><Link href="/dich-vu#ky-nang-song" className="text-sm text-white/80 transition-colors hover:text-primary">Kỹ năng sống</Link></li>
              <li><Link href="/dich-vu#tham-van-dieu-tri-tam-ly" className="text-sm text-white/80 transition-colors hover:text-primary">Tham vấn tâm lý</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Liên hệ
            </h3>
            <address className="space-y-3 not-italic">
              <div className="flex gap-3 text-sm text-white/80">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex gap-3 text-sm text-white/80">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">{siteConfig.email}</a>
              </div>
              <div className="flex gap-3 text-sm text-white/80">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">{siteConfig.phone}</a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
