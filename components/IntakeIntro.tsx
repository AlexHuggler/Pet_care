import { type ReactNode } from "react";
import { Icon, type IconName } from "./icons";
import { HeroArt } from "./illustrations";

function TrustPoint({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-hero text-accent-strong">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="text-sm leading-relaxed text-text-secondary">{children}</span>
    </li>
  );
}

export function IntakeIntro() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-hero px-3 py-1 text-xs font-semibold text-accent-strong">
          <Icon name="sparkle" className="h-3.5 w-3.5" />
          Private beta
        </span>
        <h1 className="text-2xl font-bold leading-tight text-text sm:text-[30px]">
          Help shape Furmacy&rsquo;s beta
        </h1>
        <p className="text-[15px] leading-relaxed text-text-secondary">
          This quick intake is about{" "}
          <strong className="font-semibold text-text">fit and feedback</strong> for
          the beta &mdash; not veterinary advice. Share what&rsquo;s useful; most
          questions are optional, and we save your progress as you go.
        </p>
      </div>

      {/* Reassurance + illustration are desktop-only so the form starts in the
          first viewport on mobile. */}
      <div className="hidden space-y-6 lg:block">
        <ul className="space-y-3">
          <TrustPoint icon="lock">
            Privacy-first &mdash; your answers stay on your device until you
            choose to submit.
          </TrustPoint>
          <TrustPoint icon="check">
            About 3 minutes, and most of it is optional.
          </TrustPoint>
          <TrustPoint icon="save">
            Your draft saves automatically if you need to step away.
          </TrustPoint>
        </ul>

        <HeroArt className="max-w-[380px]" />
      </div>
    </div>
  );
}
