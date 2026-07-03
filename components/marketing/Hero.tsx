import Image from "next/image";
import Link from "next/link";
import { heroScreenshots, launchHighlights, launchPricing } from "@/lib/marketing";
import { AppStoreButton } from "../AppStoreButton";
import { Icon } from "../icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg via-bg to-surface">
      <div className="mx-auto grid max-w-intake items-center gap-8 px-5 pb-6 pt-7 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <ul className="mb-4 flex flex-wrap gap-2">
            {launchHighlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-chip border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-accent-strong shadow-sm"
              >
                <Icon name={highlight === "Now on the App Store" ? "download" : "check"} className="h-3.5 w-3.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <h1 className="text-[2rem] font-bold leading-[1.06] text-text sm:text-5xl lg:text-[3.25rem]">
            Furmacy keeps pet medication care from becoming guesswork.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-5 sm:text-lg">
            A free-to-download iPhone app for medication reminders, dose history,
            refills, weight and symptom logs, and vet records. Start with one pet
            free, then upgrade to Pro when care grows.
          </p>

          <div className="mx-auto mt-4 h-[230px] w-[min(72vw,245px)] overflow-hidden rounded-[1.8rem] border border-border bg-surface shadow-card sm:hidden">
            <Image
              src={heroScreenshots[0].src}
              alt={heroScreenshots[0].alt}
              width={736}
              height={1600}
              sizes="72vw"
              priority
              className="h-auto w-full"
            />
          </div>

          <ul className="mt-6 hidden max-w-xl gap-3 text-[15px] leading-relaxed text-text sm:grid sm:grid-cols-2">
            {[
              "Know what is due today",
              "See Given, Skip, Pending, and Missed",
              "Keep refills and vet records close",
              "Start free, upgrade when care grows",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <AppStoreButton />
            <Link
              href="#product-tour"
              className="inline-flex items-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              See the product
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary">
            Furmacy Pro offers {launchPricing.summary} Exact live pricing is shown
            before purchase in the App Store. Furmacy is not veterinary advice.
          </p>
        </div>

        <div className="relative hidden min-h-[520px] sm:block lg:min-h-[590px]">
          <div
            className="absolute -inset-4 rounded-[34px] bg-hero/70 blur-2xl"
            aria-hidden="true"
          />
          <div className="absolute left-0 top-20 hidden w-[42%] rotate-[-7deg] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card sm:block lg:top-28">
            <Image
              src={heroScreenshots[1].src}
              alt={heroScreenshots[1].alt}
              width={736}
              height={1600}
              sizes="(min-width: 1024px) 190px, 150px"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute right-0 top-24 hidden w-[42%] rotate-[6deg] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card sm:block lg:top-32">
            <Image
              src={heroScreenshots[2].src}
              alt={heroScreenshots[2].alt}
              width={736}
              height={1600}
              sizes="(min-width: 1024px) 190px, 150px"
              className="h-auto w-full"
            />
          </div>
          <div className="relative mx-auto w-[66%] max-w-[300px] overflow-hidden rounded-[2.25rem] border border-border bg-surface shadow-card">
            <Image
              src={heroScreenshots[0].src}
              alt={heroScreenshots[0].alt}
              width={736}
              height={1600}
              sizes="(min-width: 1024px) 330px, 72vw"
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 w-[min(92%,420px)] -translate-x-1/2 rounded-card border border-border bg-surface/95 p-4 shadow-card backdrop-blur">
            <p className="text-sm font-semibold text-text">Fictional pet data, real product UI</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">
              Screenshots use mock pet profiles and stock-photo avatars for marketing previews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
