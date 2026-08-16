import type { MetadataRoute } from "next";

const siteUrl = "https://jayeshdesai.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    {
      url: `${siteUrl}/projects/vidtrace`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects/animal-classifier`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${siteUrl}/projects/guessing-game`,
      lastModified: new Date(),
      priority: 0.4,
    },
  ];
}
