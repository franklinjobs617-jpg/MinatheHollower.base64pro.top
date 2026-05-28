import type { MetadataRoute } from "next";
import { getSiteUrl, guides, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: siteConfig.lastChecked,
      changeFrequency: "daily",
      priority: 1,
    },
    ...guides.map((guide) => ({
      url: `${siteUrl}/${guide.slug}`,
      lastModified: guide.updatedAt,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}

