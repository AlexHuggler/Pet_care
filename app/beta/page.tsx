import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get Furmacy",
  description: "Furmacy is now available on the App Store.",
  // Legacy by-invite URL. Keep it out of search and AI indexes.
  robots: { index: false, follow: false },
  alternates: { canonical: "/beta" },
};

export default function BetaPage() {
  return (
    <section className="mx-auto flex min-h-[64vh] w-full max-w-3xl flex-col justify-center px-5 py-16 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
        Public App Store release
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
        Furmacy is ready to download.
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        The old intake page has been retired. Furmacy is now a free-to-download
        iPhone app, and you can try it with one pet for free before deciding
        whether Pro is useful for unlimited pets, medications, sync, history,
        and expanded records.
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
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-text-secondary">
        Furmacy helps organize care. It is not veterinary advice, diagnosis,
        treatment, or medication guidance.
      </p>
    </section>
  );
}
