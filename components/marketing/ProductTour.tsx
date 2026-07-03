import Image from "next/image";
import { productTour } from "@/lib/marketing";
import { Icon } from "../icons";
import { SectionHeading } from "./SectionHeading";

export function ProductTour() {
  return (
    <section id="product-tour" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <SectionHeading
          eyebrow="Product tour"
          title="Real app screens for real care moments"
          subtitle="A senior dog with timed meds. A cat with lab work. A pet whose symptoms need watching. The screens below match the everyday jobs Furmacy helps with."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productTour.map((item, index) => (
            <article
              key={item.title}
              className="rounded-card border border-border bg-surface p-5 shadow-sm"
            >
              <div className="mx-auto w-[min(74vw,230px)] overflow-hidden rounded-[1.75rem] border border-border bg-bg shadow-card xl:w-[min(100%,210px)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={736}
                  height={1600}
                  sizes="(min-width: 1280px) 210px, (min-width: 768px) 45vw, 74vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                  0{index + 1} · {item.kicker}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-text">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 flex-none text-accent-strong"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
