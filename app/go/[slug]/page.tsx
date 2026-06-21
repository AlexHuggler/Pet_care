import type { Metadata } from "next";
import Link from "next/link";
import { campaignLinkBySlug, campaignLinksWithUrls } from "@/lib/campaigns";
import { site } from "@/lib/site";

interface CampaignRedirectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return campaignLinksWithUrls.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }: CampaignRedirectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = campaignLinkBySlug(slug);

  return {
    title: campaign ? campaign.title : "Campaign link",
    description: "Redirecting to the Furmacy App Store page.",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/go/${slug}`,
    },
  };
}

export default async function CampaignRedirectPage({ params }: CampaignRedirectPageProps) {
  const { slug } = await params;
  const campaign = campaignLinkBySlug(slug);

  if (!campaign) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
          Campaign link unavailable
        </p>
        <h1 className="mt-3 text-3xl font-bold text-text">This Furmacy link is not active.</h1>
        <p className="mt-4 text-text-secondary">
          Visit the Furmacy homepage or contact the team at {site.contactEmail}.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex w-fit rounded-control bg-text px-5 py-3 text-sm font-semibold text-white"
        >
          Go to Furmacy
        </Link>
      </main>
    );
  }

  const redirectScript = `window.location.replace(${JSON.stringify(campaign.appStoreUrl)});`;

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-5 py-16">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <meta httpEquiv="refresh" content={`0;url=${campaign.appStoreUrl}`} />
      <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
        Redirecting to Furmacy
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text">{campaign.title}</h1>
      <p className="mt-4 text-text-secondary">
        We are sending you to the Furmacy App Store page. This link records only the
        campaign slug and custom product page; it does not include pet or user data.
      </p>
      <a
        href={campaign.appStoreUrl}
        className="mt-6 inline-flex w-fit rounded-control bg-text px-5 py-3 text-sm font-semibold text-white"
      >
        Continue to the App Store
      </a>
    </main>
  );
}
