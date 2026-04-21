import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { navLinks, services, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      {/* Amber accent strip */}
      <div className="h-1 w-full bg-linear-to-r from-primary via-primary-dark to-primary" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src={logo}
                alt={`Logo ${siteConfig.name}`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-serif text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm italic leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {siteConfig.address}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Liên kết
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Dịch vụ
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/dich-vu/${s.id}`}
                    className="text-sm text-white/75 transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Liên hệ
            </h3>
            <address className="space-y-3 not-italic">
              <div className="flex gap-3 text-sm text-white/75">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.phone.replace(/\./g, "")}`} className="transition-colors hover:text-primary">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex gap-3 text-sm text-white/75">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
