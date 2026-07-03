import Link from "next/link";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

const CONDITIONS = [
  "Diabetes",
  "CKD / kidney disease",
  "Seizures",
  "Cushing's",
  "Arthritis & mobility",
  "Senior care",
  "Multiple conditions",
  "Post-surgery recovery",
  "Complex medication schedules",
];

const AUDIENCES = [
  { icon: "heart", title: "Senior dogs and cats", body: "When the routine has more check-ins than it used to, Furmacy keeps the next step easier to see." },
  { icon: "pill", title: "Chronic medication routines", body: "Keep schedules, refills, notes, and dose history together for pets who need steady follow-through." },
  { icon: "users", title: "Multi-pet homes", body: "Give each pet their own care context, then upgrade to Pro when one free pet is not enough room." },
  { icon: "paw", title: "Family and sitter handoffs", body: "Make it easier for the next helper to see what was given, skipped, missed, or still pending." },
] as const;

export function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who it's for"
              title="For pet parents doing their best with a lot to remember"
              subtitle="Some pets just need more care. Furmacy is built for the routines that come with senior pets, chronic meds, recovery, multiple pets, and shared caregiving."
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {CONDITIONS.map((c) => (
                <li
                  key={c}
                  className="rounded-chip border border-border bg-muted px-3.5 py-2 text-sm font-medium text-text"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Furmacy helps you stay organized and reduce missed-dose confusion.
              It isn&rsquo;t veterinary advice; always follow your veterinarian&rsquo;s
              instructions and contact your vet for medical concerns.
            </p>
            <Link
              href="/use-cases"
              className="mt-5 inline-flex items-center gap-1.5 rounded-control border border-border bg-bg px-4 py-2.5 text-sm font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              Explore care examples
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <ul className="grid gap-4">
            {AUDIENCES.map((a) => (
              <li
                key={a.title}
                className="flex items-start gap-4 rounded-card border border-border bg-bg/50 p-5"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-hero text-accent-strong">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-text">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
