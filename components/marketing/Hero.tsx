import Link from "next/link";
import { AppStoreButton } from "../AppStoreButton";
import { Icon } from "../icons";
import { HeroArt } from "../illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-intake items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-hero px-3 py-1 text-xs font-semibold text-accent-strong">
            <Icon name="lock" className="h-3.5 w-3.5" />
            Privacy-first &middot; for iPhone
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">
            Your pet&rsquo;s health, simplified.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
            Furmacy is a privacy-first iOS app that helps you manage medications and
            doses, refills and routine care, weight and symptom tracking, and vet
            records — with care handoff for households and sitters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <AppStoreButton />
            <Link
              href="#features"
              className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              See what it does
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            No account required. Your pet&rsquo;s data stays on your device.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[36px] bg-hero/70 blur-2xl"
            aria-hidden="true"
          />
          <HeroArt className="mx-auto w-full max-w-[460px]" />
        </div>
      </div>
    </section>
  );
}
