import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbLd, webPageLd } from "@/lib/structuredData";
import { getUseCaseBySlug, useCases } from "@/lib/useCases";

interface UseCasePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return {
      title: "Care Example",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: useCase.metaTitle,
    description: useCase.description,
    alternates: { canonical: `/use-cases/${useCase.slug}` },
    keywords: [...useCase.searchTerms],
    openGraph: {
      title: `${useCase.metaTitle} · Furmacy`,
      description: useCase.description,
      url: absoluteUrl(`/use-cases/${useCase.slug}`),
      images: [
        {
          url: useCase.image.src,
          width: 736,
          height: 1600,
          alt: useCase.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${useCase.metaTitle} · Furmacy`,
      description: useCase.description,
      images: [useCase.image.src],
    },
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: useCase.faqs.map((faq) => ({
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
            name: useCase.title,
            description: useCase.description,
            path: `/use-cases/${useCase.slug}`,
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Use cases", path: "/use-cases" },
            { name: useCase.metaTitle, path: `/use-cases/${useCase.slug}` },
          ]),
          faqLd,
        ]}
      />
      <article className="bg-gradient-to-b from-bg via-bg to-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-intake gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent-strong transition hover:text-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              <Icon name="arrow-left" className="h-4 w-4" />
              Use cases
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent-strong">
              {useCase.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
              {useCase.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {useCase.intro}
            </p>

            <ul className="mt-6 grid gap-3 text-[15px] text-text sm:grid-cols-2">
              {useCase.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreButton />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
              >
                Ask a question
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-[min(76vw,310px)] overflow-hidden rounded-[2.25rem] border border-border bg-surface shadow-card">
            <Image
              src={useCase.image.src}
              alt={useCase.image.alt}
              width={736}
              height={1600}
              sizes="(min-width: 1024px) 310px, 76vw"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-intake gap-5 px-5 sm:px-8 md:grid-cols-2">
          {useCase.sections.map((section) => (
            <section key={section.heading} className="rounded-card border border-border bg-bg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-text">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mx-auto mt-12 max-w-intake px-5 sm:px-8">
          <div className="rounded-card border border-border bg-bg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-text">Questions pet parents ask</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {useCase.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-text">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
