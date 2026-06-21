import Link from "next/link";
import { launchPricing, proBenefits, valuePoints } from "@/lib/marketing";
import { site } from "@/lib/site";
import { AppStoreButton } from "../AppStoreButton";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function ProOffer() {
  const appStoreLive = Boolean(site.appStoreUrl);

  return (
    <section id="pro" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Furmacy Pro"
              title="Worth subscribing to when care gets bigger than the free starter vault"
              subtitle="The free plan is useful for getting started. Pro is for households where missing context costs time, stress, and confidence."
            />

            <div className="mt-7 rounded-card border border-border bg-bg/70 p-6">
              <p className="text-sm font-semibold text-text">Launch plan</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-control border border-border bg-surface p-4">
                  <p className="text-2xl font-bold text-text">{launchPricing.annual}</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Built for ongoing care, with a {launchPricing.annualTrial}.
                  </p>
                </div>
                <div className="rounded-control border border-border bg-surface p-4">
                  <p className="text-2xl font-bold text-text">{launchPricing.weekly}</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Flexible weekly access when App Store purchases are live.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                Exact live prices are shown by the App Store before purchase. If the App Store
                link is not live yet, joining the beta or launch list will not automatically
                enroll you in a paid plan.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-card border border-border bg-bg/50 p-6">
              <h3 className="text-lg font-bold text-text">Pro unlocks</h3>
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
              {!appStoreLive && (
                <Link
                  href="/beta"
                  className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
                >
                  Join the launch list
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
