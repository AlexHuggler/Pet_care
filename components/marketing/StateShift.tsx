import { statePairs } from "@/lib/marketing";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function StateShift() {
  return (
    <section id="outcome" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <SectionHeading
          eyebrow="The shift"
          title="A little less mental load, every day"
          subtitle="Furmacy is for the moment pet care stops fitting neatly in your head: chronic meds, senior routines, refills, records, and more than one person helping."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {statePairs.map((pair) => (
            <div
              key={pair.current}
              className="grid gap-0 overflow-hidden rounded-card border border-border bg-surface shadow-sm sm:grid-cols-2"
            >
              <div className="border-b border-border bg-bg/60 p-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  What it can feel like
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {pair.current}
                </p>
              </div>
              <div className="bg-hero/60 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                  <Icon name="check" className="h-4 w-4" />
                  How Furmacy helps
                </p>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-text">
                  {pair.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
