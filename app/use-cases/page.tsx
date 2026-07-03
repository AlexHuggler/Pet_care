import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/structuredData";
import { useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Pet Medication Care Examples",
  description:
    "Explore Furmacy examples for senior dog medication reminders, cat medication tracking, dog seizure medication schedules, and multi-pet care routines.",
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Furmacy pet medication care examples",
            description:
              "Warm, practical examples of how Furmacy helps pet parents organize medication reminders, dose history, refills, vet records, and multi-pet routines.",
            path: "/use-cases",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Use cases", path: "/use-cases" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-b from-bg via-bg to-surface py-16 sm:py-20">
        <div className="mx-auto max-w-intake px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
              Care examples
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
              Pet medication tracking for the routines people actually live with.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Furmacy is for the everyday work of loving a pet who needs care:
              meds, refills, notes, records, symptoms, weight checks, and the
              quiet relief of knowing what already happened.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group grid gap-5 rounded-card border border-border bg-bg p-5 shadow-sm transition hover:border-accent/50 hover:shadow-card sm:grid-cols-[150px_1fr]"
              >
                <div className="mx-auto w-[150px] overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-card">
                  <Image
                    src={useCase.image.src}
                    alt={useCase.image.alt}
                    width={736}
                    height={1600}
                    sizes="150px"
                    className="h-auto w-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                    {useCase.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-bold leading-snug text-text">
                    {useCase.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {useCase.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong">
                    Read the care example
                    <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AppStoreButton />
            <Link
              href="/#product-tour"
              className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              See product screens
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
