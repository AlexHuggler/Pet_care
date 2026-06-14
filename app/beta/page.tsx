import type { Metadata } from "next";
import { IntakeIntro } from "@/components/IntakeIntro";
import { Wizard } from "@/components/Wizard";

export const metadata: Metadata = {
  title: "Beta Tester Intake",
  description: "Private beta intake for Furmacy testers.",
  // Internal/by-invite page — keep it out of search and AI indexes.
  robots: { index: false, follow: false },
  alternates: { canonical: "/beta" },
};

export default function BetaPage() {
  return (
    <div className="mx-auto w-full max-w-intake px-5 py-10 sm:px-8 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <IntakeIntro />
        </aside>
        <div id="intake-main" className="scroll-mt-24">
          <Wizard />
        </div>
      </div>
    </div>
  );
}
