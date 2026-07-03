import { AppStoreButton } from "../AppStoreButton";
import Link from "next/link";
import { Icon } from "../icons";

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-hero to-muted px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-text sm:text-4xl">
            Care days are a lot. Furmacy helps make them easier to follow.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Start free with one pet, then upgrade when unlimited pets, medications,
            full history, iCloud sync, and expanded documents would make life calmer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AppStoreButton />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              Contact the team
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Furmacy helps organize care; it is not veterinary advice.
          </p>
        </div>
      </div>
    </section>
  );
}
