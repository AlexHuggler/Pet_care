import type { Metadata } from "next";
import Link from "next/link";
import { campaignLinksWithUrls } from "@/lib/campaigns";

export const metadata: Metadata = {
  title: "Campaign Links",
  description: "Privacy-preserving Furmacy App Store campaign links.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-static";

export default function CampaignLinksPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
        Campaign links
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text">Furmacy campaign map</h1>
      <p className="mt-4 text-text-secondary">
        These static redirect links support App Store custom product pages and optional
        Apple campaign tokens. They do not collect pet records, account details, or
        contact information.
      </p>
      <div className="mt-8 grid gap-3">
        {campaignLinksWithUrls.map((campaign) => (
          <Link
            key={campaign.slug}
            href={`/go/${campaign.slug}`}
            className="rounded-card border border-border bg-surface p-4 transition hover:border-accent/60"
          >
            <span className="font-semibold text-text">{campaign.title}</span>
            <span className="mt-1 block text-sm text-text-secondary">/go/{campaign.slug}</span>
            <span className="mt-2 block text-sm text-text-secondary">{campaign.audience}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
