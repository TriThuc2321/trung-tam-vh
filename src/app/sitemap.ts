import type { MetadataRoute } from "next";
import {
  knowledgeArticles,
  newsArticles,
  serviceDetails,
  siteConfig,
} from "@/lib/data";

const SITE_LAUNCH = new Date("2025-06-15");
const SERVICES_UPDATED = new Date("2026-04-25");
const STATIC_PAGES_UPDATED = new Date("2026-04-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const serviceUrls: MetadataRoute.Sitemap = serviceDetails.map((s) => ({
    url: `${base}/dich-vu/${s.id}`,
    lastModified: SERVICES_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const knowledgeUrls: MetadataRoute.Sitemap = knowledgeArticles.map((a) => ({
    url: `${base}/kien-thuc/${a.id}`,
    lastModified: new Date(a.dateModified ?? a.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const sortedNews = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const newsUrls: MetadataRoute.Sitemap = sortedNews.map((a) => ({
    url: `${base}/tin-tuc/${a.id}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const latestNewsDate =
    sortedNews.length > 0 ? new Date(sortedNews[0].date) : SITE_LAUNCH;

  return [
    {
      url: base,
      lastModified: STATIC_PAGES_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/dich-vu`,
      lastModified: SERVICES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${base}/tin-tuc`,
      lastModified: latestNewsDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...newsUrls,
    {
      url: `${base}/kien-thuc`,
      lastModified: STATIC_PAGES_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...knowledgeUrls,
    {
      url: `${base}/lien-he`,
      lastModified: STATIC_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
