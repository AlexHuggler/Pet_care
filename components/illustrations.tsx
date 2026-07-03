import { cn } from "@/lib/cn";

/**
 * Hand-crafted, brand-tinted inline SVGs. No external image requests, fully
 * themeable, crisp at any size. All are decorative (aria-hidden).
 */

/** Furmacy app-icon mark: rounded teal square with a soft white paw. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-11 w-11", className)}>
      <rect width="48" height="48" rx="13" fill="#1FA19C" />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.4" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.5" />
      <g fill="#FFFFFF">
        <circle cx="17" cy="20.6" r="2.9" />
        <circle cx="24" cy="17.4" r="3.1" />
        <circle cx="31" cy="20.6" r="2.9" />
        <path d="M24 23.1c-4.3 0-7.4 3-7.4 6.1 0 2.5 3.1 3.6 7.4 3.6s7.4-1.1 7.4-3.6c0-3.1-3.1-6.1-7.4-6.1Z" />
      </g>
    </svg>
  );
}
