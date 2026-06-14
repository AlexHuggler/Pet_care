import { faqs } from "@/lib/faq";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" center />
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-card border border-border bg-bg/50 p-5 open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-text [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <Icon
                  name="chevron-down"
                  className="h-5 w-5 flex-none text-text-secondary transition group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
