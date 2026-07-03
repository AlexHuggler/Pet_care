import Link from "next/link";
import { launchPricing, proBenefits, valuePoints } from "@/lib/marketing";
import { AppStoreButton } from "../AppStoreButton";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

const PLAN_COMPARISON = [
  {
    name: "Free",
    note: "Start with one pet",
    items: ["One pet", "Medication reminders", "Dose states", "Refill, weight, symptom, and vet-record basics"],
  },
  {
    name: "Pro",
    note: "For bigger routines",
    items: ["Unlimited pets", "Unlimited active medications", "Full history", "iCloud sync and expanded documents"],
  },
] as const;

export function ProOffer() {
  return (
    <section id="pro" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Furmacy Pro"
              title="Start free. Upgrade when care grows."
              subtitle="One pet is included free so you can try the core routine. Pro is for households where unlimited pets, active medications, sync, history, and records are worth having in one place."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {PLAN_COMPARISON.map((plan) => (
                <div key={plan.name} className="rounded-card border border-border bg-bg/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                    {plan.note}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-text">{plan.name}</h3>
                  <ul className="mt-4 grid gap-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 flex-none text-accent-strong"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-card border border-border bg-bg/70 p-6">
              <p className="text-sm font-semibold text-text">Pro options</p>
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
                    Flexible weekly access when ongoing care needs more room.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                Exact live prices are shown by the App Store before purchase.
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
