import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center sm:py-32">
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-hero text-accent-strong">
        <Icon name="compass" className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-text">Page not found</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
        We couldn&rsquo;t find that page. It may have moved, or the link may be off.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-control bg-accent-strong px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0b6864] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
      >
        Back to home
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </div>
  );
}
