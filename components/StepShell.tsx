import { type ReactNode, type Ref } from "react";
import { Icon, type IconName } from "./icons";

interface StepShellProps {
  icon: IconName;
  eyebrow?: string;
  title: string;
  description?: string;
  headingRef?: Ref<HTMLHeadingElement>;
  children: ReactNode;
}

export function StepShell({
  icon,
  eyebrow,
  title,
  description,
  headingRef,
  children,
}: StepShellProps) {
  return (
    <div>
      <div className="flex items-start gap-3.5">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-hero text-accent-strong">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <div className="min-w-0 pt-0.5">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
              {eyebrow}
            </p>
          )}
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="text-xl font-bold leading-snug text-text outline-none sm:text-[22px]"
          >
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
      <div className="mt-6 space-y-6">{children}</div>
    </div>
  );
}
