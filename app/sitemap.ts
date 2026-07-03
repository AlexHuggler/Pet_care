import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { useCases } from "@/lib/useCases";

// Required for `output: export` (GitHub Pages) — emit a static sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" },
    ...useCases.map((useCase) => ({
      path: `/use-cases/${useCase.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
