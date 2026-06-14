import Link from "next/link";
import { Icon, type IconName } from "../icons";
import { SectionHeading } from "./SectionHeading";

const POINTS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "lock",
    title: "Your data stays on your device",
    body: "Pet profiles, medications, logs, and vet documents live on your iPhone — not on our servers.",
  },
  {
    icon: "user",
    title: "No account required",
    body: "Start using Furmacy without signing up. No email, no password, no profile to create.",
  },
  {
    icon: "shield-check",
    title: "No telemetry, no ads",
    body: "Furmacy isn't built around tracking. We don't sell your data, because we don't collect it.",
  },
];

export function PrivacyFirst() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <SectionHeading
          eyebrow="Privacy-first"
          title="Privacy isn't a setting. It's the foundation."
          subtitle="Your pet's health information is personal. Furmacy is designed to keep it that way."
          center
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="rounded-card border border-border bg-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hero text-accent-strong">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-text">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Read the full{" "}
          <Link href="/privacy" className="font-semibold text-accent-strong hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
