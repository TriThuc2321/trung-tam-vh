import type { MetadataRoute } from "next";
import { serviceDetails, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const serviceUrls: MetadataRoute.Sitemap = serviceDetails.map((s) => ({
    url: `${base}/dich-vu/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dich-vu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...serviceUrls,
    { url: `${base}/tin-tuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kien-thuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/lien-he`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
