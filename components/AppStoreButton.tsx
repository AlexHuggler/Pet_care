import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

interface AppStoreButtonProps {
  className?: string;
  size?: "lg" | "sm";
}

export function AppStoreButton({ className, size = "lg" }: AppStoreButtonProps) {
  const href = site.appStoreUrl;
  const width = size === "lg" ? 180 : 136;
  const height = size === "lg" ? 60 : 45;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40",
        className,
      )}
      aria-label="Download Furmacy Pet Med Tracker on the App Store"
    >
      <Image
        src="/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={width}
        height={height}
        unoptimized
        className="h-auto max-w-full"
      />
    </a>
  );
}
