import { features } from "@/lib/site";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything the daily care loop needs"
          subtitle="Furmacy focuses on the workflows that make people subscribe: medication consistency, refill confidence, long-term history, and records ready when care gets complicated."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-card border border-border bg-bg/50 p-6 transition hover:border-accent/40 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hero text-accent-strong">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-text">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
