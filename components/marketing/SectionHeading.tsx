import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center }: SectionHeadingProps) {
  return (
    <div className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
