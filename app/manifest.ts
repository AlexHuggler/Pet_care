import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required for `output: export` (GitHub Pages) — emit a static manifest.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Furmacy — Your pet's health, simplified.",
    short_name: "Furmacy",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#FAF7F2",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/brand/furmacy-app-icon.png", sizes: "1024x1024", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
