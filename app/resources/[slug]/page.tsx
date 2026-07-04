import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { getResourceGuideBySlug, resourceGuides } from "@/lib/resources";
import { getUseCaseBySlug } from "@/lib/useCases";
import { breadcrumbLd, resourceArticleLd, webPageLd } from "@/lib/structuredData";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Pet Care Guide",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/resources/${guide.slug}` },
    keywords: [...guide.searchTerms],
    openGraph: {
      title: `${guide.metaTitle} · Furmacy`,
      description: guide.description,
      url: absoluteUrl(`/resources/${guide.slug}`),
      images: [
        {
          url: "/social/furmacy-og-product-card.png",
          width: 1200,
          height: 630,
          alt: "Furmacy pet medication care guide preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.metaTitle} · Furmacy`,
      description: guide.description,
      images: ["/social/furmacy-og-product-card.png"],
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const guide = getResourceGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedUseCases = guide.relatedUseCases
    .map((relatedSlug) => getUseCaseBySlug(relatedSlug))
    .filter((useCase): useCase is NonNullable<typeof useCase> => Boolean(useCase));

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: guide.title,
            description: guide.description,
            path: `/resources/${guide.slug}`,
          }),
          resourceArticleLd(guide),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: guide.metaTitle, path: `/resources/${guide.slug}` },
          ]),
          faqLd,
        ]}
      />
      <article className="bg-gradient-to-b from-bg via-bg to-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-intake gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-start">
          <div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent-strong transition hover:text-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              <Icon name="arrow-left" className="h-4 w-4" />
              Resources
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent-strong">
              {guide.category}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {guide.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                Updated {guide.updated}
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                {guide.readingTime}
              </span>
            </div>
          </div>

          <aside className="rounded-card border border-border bg-bg p-6 shadow-sm">
            <h2 className="text-lg font-bold text-text">Quick answer</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {guide.answerSummary}
            </p>
            <div className="mt-5">
              <AppStoreButton />
            </div>
          </aside>
        </div>

        <section className="mx-auto mt-12 max-w-intake px-5 sm:px-8">
          <div className="rounded-card border border-border bg-bg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-text">The short version</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-text sm:grid-cols-2">
              {guide.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto mt-8 grid max-w-intake gap-5 px-5 sm:px-8 md:grid-cols-2">
          {guide.sections.map((section) => (
            <section key={section.heading} className="rounded-card border border-border bg-bg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-text">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {section.body}
              </p>
              {"bullets" in section && section.bullets && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mx-auto mt-12 max-w-intake px-5 sm:px-8">
          <div className="rounded-card border border-border bg-bg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-text">Questions pet parents ask</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {guide.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-text">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {relatedUseCases.length > 0 && (
          <section className="mx-auto mt-12 max-w-intake px-5 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                  Related care examples
                </p>
                <h2 className="mt-2 text-3xl font-bold text-text">
                  See how this shows up in Furmacy.
                </h2>
              </div>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
              >
                All care examples
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedUseCases.map((useCase) => (
                <Link
                  key={useCase.slug}
                  href={`/use-cases/${useCase.slug}`}
                  className="group rounded-card border border-border bg-bg p-5 shadow-sm transition hover:border-accent/50 hover:shadow-card"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                    {useCase.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-text">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {useCase.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong">
                    Read the care example
                    <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
