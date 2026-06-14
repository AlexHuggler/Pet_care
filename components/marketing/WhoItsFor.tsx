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
  { icon: "users", title: "Multi-pet households", body: "Keep every pet's meds and routines straight without a whiteboard." },
  { icon: "heart", title: "Senior and chronic-care families", body: "Track the care details that matter between vet visits." },
  { icon: "paw", title: "Sitters and shared caregivers", body: "Hand off the routine clearly, so nothing is missed or doubled up." },
] as const;

export function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who it's for"
              title="Made for the families most likely to feel the value every day"
              subtitle="Furmacy shines when care gets complicated: multiple medications, multiple times a day, and conditions that need consistency."
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
              Furmacy helps you stay organized and reduce missed-dose confusion. It
              isn&rsquo;t veterinary advice — always follow your veterinarian&rsquo;s
              instructions.
            </p>
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
