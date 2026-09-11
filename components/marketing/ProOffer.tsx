import Link from "next/link";
import { launchPricing, offerCopy, proBenefits, valuePoints } from "@/lib/marketing";
import { AppStoreButton } from "../AppStoreButton";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";



export function ProOffer() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="One-time purchase"
              title={offerCopy.proHeading}
              subtitle={offerCopy.proSubtitle}
            />

            <div className="mt-7 rounded-card border border-border bg-bg/70 p-6">
              <p className="text-4xl font-bold text-text">{launchPricing.price}</p>
              <p className="mt-3 text-text-secondary">{launchPricing.summary}</p>
              <p className="mt-4 text-sm text-text-secondary">Already using Furmacy? Update the same app to keep your records and receive full access.</p>
              <p className="mt-3 text-sm text-text-secondary">If you previously subscribed, check Apple subscription settings. Updating the app does not automatically cancel billing.</p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-card border border-border bg-bg/50 p-6">
              <h3 className="text-lg font-bold text-text">Included with Furmacy</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {proBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-text">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((point) => (
                <div key={point.title} className="rounded-card border border-border bg-bg/50 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-hero text-accent-strong">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-text">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{point.body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
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
        </div>
      </div>
    </section>
  );
}
