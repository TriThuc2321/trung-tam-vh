import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dich-vu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tin-tuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kien-thuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/lien-he`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
