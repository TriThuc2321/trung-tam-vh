"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { navLinks, services, siteConfig } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Trang chủ"
        >
          <Image
            src={logo}
            alt={`Logo ${siteConfig.name}`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <div>
            <p className="font-serif text-lg font-bold text-secondary-dark sm:text-xl">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted">{siteConfig.slogan}</p>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex" aria-label="Menu chính">
          {navLinks.map((link) => {
            if (link.href === "/dich-vu") {
              const servicesActive =
                pathname === "/dich-vu" || pathname.startsWith("/dich-vu/");
              return (
                <div
                  key={link.href}
                  className="group relative flex items-center"
                >
                  <Link
                    href="/dich-vu"
                    className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                      servicesActive
                        ? "text-secondary-dark"
                        : "text-foreground/70 hover:text-secondary-dark"
                    }`}
                    aria-current={servicesActive ? "page" : undefined}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.label}
                    <svg
                      className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {servicesActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
                    )}
                  </Link>

                  <div className="invisible absolute left-1/2 top-full z-60 w-[min(92vw,26rem)] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                    <div
                      className="rounded-2xl border border-border/80 bg-white p-3 shadow-xl ring-1 ring-black/5"
                      role="menu"
                      aria-label="Danh sách dịch vụ"
                    >
                      <div className="space-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            href={`/dich-vu/${s.id}`}
                            className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-primary-light/60"
                            role="menuitem"
                          >
                            <span className="min-w-0 flex-1">
                              <span className="line-clamp-1 font-semibold text-secondary-dark uppercase">
                                {s.title}
                              </span>
                            </span>
                            <span
                              className="shrink-0 self-center text-primary"
                              aria-hidden
                            >
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
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/dich-vu"
                        className="mt-2 block rounded-xl border border-primary/20 bg-primary-light/40 px-3 py-2.5 text-center text-sm font-semibold text-secondary-dark transition-colors hover:bg-primary-light"
                      >
                        Xem tất cả dịch vụ
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  active
                    ? "text-secondary-dark"
                    : "text-foreground/70 hover:text-secondary-dark"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/lien-he"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark md:inline-flex"
        >
          Đặt lịch tư vấn
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground/70 hover:bg-primary-light md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
        >
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[72px] bg-black/20 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <nav
            className="relative border-t border-border bg-white px-4 pb-5 pt-3 md:hidden"
            aria-label="Menu di động"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/dich-vu"
                  ? pathname === "/dich-vu" || pathname.startsWith("/dich-vu/")
                  : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary-light text-secondary-dark"
                      : "text-foreground/80 hover:bg-primary-light/50 hover:text-secondary-dark"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/lien-he"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Đặt lịch tư vấn
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
