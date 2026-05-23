import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portifolio-nine-azure-22.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
