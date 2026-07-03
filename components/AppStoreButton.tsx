import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M17.05 12.04c-.03-2.6 2.13-3.84 2.22-3.9-1.21-1.78-3.1-2.02-3.77-2.05-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.91-3.4-.89-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.46 7.84 1.3 10.41.86 1.26 1.89 2.66 3.24 2.61 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.14-2.54.99-1.46 1.4-2.87 1.42-2.94-.03-.02-2.72-1.05-2.75-4.15ZM14.6 4.94c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.53-.65.77-1.23 1.99-1.08 3.16 1.14.09 2.3-.58 3.01-1.44Z" />
    </svg>
  );
}

interface AppStoreButtonProps {
  className?: string;
  size?: "lg" | "sm";
}

/**
 * Apple-style download button. NOTE: for production, swap in Apple's official
 * "Download on the App Store" badge asset per Apple's brand guidelines.
 */
export function AppStoreButton({ className, size = "lg" }: AppStoreButtonProps) {
  const href = site.appStoreUrl;

  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-control bg-text font-semibold text-white shadow-sm transition hover:bg-[#0a2e38] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40",
    size === "lg" ? "px-5 py-3" : "px-4 py-2.5",
    className,
  );

  const inner = (
    <>
      <AppleGlyph className={size === "lg" ? "h-7 w-7" : "h-6 w-6"} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide text-white/70">
          Download on the
        </span>
        <span className={cn("font-semibold leading-tight", size === "lg" ? "text-[17px]" : "text-[15px]")}>
          App Store
        </span>
      </span>
    </>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={classes}
      aria-label="Download Furmacy Pet Med Tracker on the App Store"
    >
      {inner}
    </a>
  );
}
