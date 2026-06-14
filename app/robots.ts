import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required for `output: export` (GitHub Pages) — emit a static robots.txt.
export const dynamic = "force-static";

/**
 * We *want* AI answer/search engines to read and cite Furmacy, so we explicitly
 * welcome their crawlers (in addition to allowing all by default). Only the API
 * is disallowed. The /beta page is intentionally left crawlable so its per-page
 * `noindex` is actually seen and honored.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Claude-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
  "Bytespider",
  "Meta-ExternalAgent",
  "FacebookBot",
  "DuckAssistBot",
  "YouBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
