import Link from "next/link";
import { featuredResources } from "@/lib/resources";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function ResourceTeaser() {
  return (
    <section id="resources" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Care guides"
            title="Helpful answers for the care routine around the app."
            subtitle="Evergreen guides for pet parents who are trying to keep medication schedules, dose history, refills, and records easier to follow."
          />
          <Link
            href="/resources"
            className="inline-flex w-fit items-center gap-1.5 rounded-control border border-border bg-bg px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
          >
            All guides
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredResources.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/${guide.slug}`}
              className="group flex min-h-[250px] flex-col rounded-card border border-border bg-bg p-5 shadow-sm transition hover:border-accent/50 hover:shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                {guide.category}
              </p>
              <h3 className="mt-2 text-xl font-bold leading-snug text-text">
                {guide.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {guide.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-strong">
                Read guide
                <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
