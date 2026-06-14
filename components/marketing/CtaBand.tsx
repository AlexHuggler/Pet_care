import { AppStoreButton } from "../AppStoreButton";

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-intake px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-hero to-muted px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Keep your pet&rsquo;s care organized — and your mind at ease.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Medications, routines, and vet records in one calm, private place.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButton />
          </div>
          <p className="mt-4 text-sm text-text-secondary">Coming soon to iPhone.</p>
        </div>
      </div>
    </section>
  );
}
