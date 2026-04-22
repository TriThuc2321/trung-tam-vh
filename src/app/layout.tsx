import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
});

const headingFont = Lora({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "trung tâm giáo dục trẻ em",
    "can thiệp sớm",
    "giáo dục hòa nhập",
    "khám tâm lý trẻ em",
    "tham vấn tâm lý",
    "kỹ năng sống cho trẻ",
    "rối loạn phổ tự kỷ",
    "chậm nói",
    "Phú Nhuận",
    "TP HCM",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — ${siteConfig.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-image.jpg`,
  image: `${siteConfig.url}/og-image.jpg`,
  description: siteConfig.description,
  telephone: siteConfig.phone.replace(/\./g, ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "150 Lê Văn Sỹ",
    addressLocality: "Phường Phú Nhuận",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.7924,
    longitude: 106.6527,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  sameAs: [],
  medicalSpecialty: "Pediatrics",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
