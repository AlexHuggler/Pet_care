import { Icon, type IconName } from "../icons";
import { SectionHeading } from "./SectionHeading";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "paw",
    title: "Start with the real routine",
    body: "Add each pet, medication, schedule, prescribing vet, and refill details once.",
  },
  {
    icon: "calendar",
    title: "Work from today",
    body: "See what is due now, what is coming next, and what was already marked Given or Skipped.",
  },
  {
    icon: "users",
    title: "Upgrade when care grows",
    body: "Use Pro for unlimited pets and medications, full history, iCloud sync, and expanded records.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A subscription-worthy workflow in three steps"
          center
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-card border border-border bg-surface p-6"
            >
              <span className="absolute right-5 top-5 text-sm font-bold text-accent/40">
                0{i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hero text-accent-strong">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-text">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
