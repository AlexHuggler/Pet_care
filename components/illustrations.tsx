import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Decorative brand marks used in headers and compact brand moments.
 */

/** Real Furmacy app icon, served locally for static export. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/furmacy-app-icon.png"
      alt=""
      width={96}
      height={96}
      aria-hidden="true"
      className={cn("h-11 w-11 rounded-[13px] shadow-sm", className)}
      priority={false}
    />
  );
}
