import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, collectionPageLd } from "@/lib/structuredData";
import { resourceGuides } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Pet Medication Care Guides",
  description:
    "Warm, practical Furmacy guides for pet medication reminders, dose history, refills, vet records, and multi-pet care handoffs.",
  alternates: { canonical: "/resources" },
  keywords: [
    "pet medication reminder guide",
    "pet medication checklist",
    "pet dose history",
    "pet refill reminder app",
    "vet records app for pets",
    "multi pet medication tracker",
  ],
  openGraph: {
    title: "Pet Medication Care Guides · Furmacy",
    description:
      "Warm, practical Furmacy guides for pet medication reminders, dose history, refills, vet records, and multi-pet care handoffs.",
    url: "/resources",
    images: [
      {
        url: "/social/furmacy-og-product-card.png",
        width: 1200,
        height: 630,
        alt: "Furmacy pet medication care guides preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Medication Care Guides · Furmacy",
    description:
      "Warm, practical Furmacy guides for pet medication reminders, dose history, refills, vet records, and multi-pet care handoffs.",
    images: ["/social/furmacy-og-product-card.png"],
  },
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageLd({
            name: "Furmacy pet medication care guides",
            description:
              "Evergreen guides for pet parents organizing medication reminders, dose history, refills, vet records, and shared care routines.",
            path: "/resources",
            items: resourceGuides.map((guide) => ({
              name: guide.title,
              description: guide.description,
              path: `/resources/${guide.slug}`,
            })),
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-b from-bg via-bg to-surface py-16 sm:py-20">
        <div className="mx-auto max-w-intake px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
              Pet care guides
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
              Practical medication-care help for real pet-parent days.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Short, useful guides for the moments when you are trying to keep
              meds, refills, dose history, and vet records from living entirely
              in your head. Furmacy helps organize the routine; your
              veterinarian&rsquo;s directions still come first.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resourceGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/${guide.slug}`}
                className="group flex min-h-[260px] flex-col rounded-card border border-border bg-bg p-6 shadow-sm transition hover:border-accent/50 hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                      {guide.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-snug text-text">
                      {guide.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-text-secondary">
                    {guide.readingTime}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {guide.description}
                </p>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong">
                    Read the guide
                    <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AppStoreButton />
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              Explore care examples
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
