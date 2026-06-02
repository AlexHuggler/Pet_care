import { BrandHeader } from "@/components/BrandHeader";
import { IntakeIntro } from "@/components/IntakeIntro";
import { Wizard } from "@/components/Wizard";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-intake px-5 py-8 sm:px-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-12 lg:self-start">
            <BrandHeader className="mb-8" />
            <IntakeIntro />
          </aside>

          <div id="intake-main" className="scroll-mt-6">
            <Wizard />
          </div>
        </div>
      </div>
    </main>
  );
}
