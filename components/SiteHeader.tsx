import Link from "next/link";
import { AppStoreButton } from "./AppStoreButton";
import { Icon } from "./icons";
import { Logo } from "./illustrations";

const NAV = [
  { href: "/#product-tour", label: "Tour" },
  { href: "/#features", label: "Features" },
  { href: "/#pro", label: "Pro" },
  { href: "/#who", label: "Who it's for" },
  { href: "/resources", label: "Guides" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex max-w-intake items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
        >
          <Logo className="h-9 w-9" />
          <span className="text-lg font-bold text-text">Furmacy</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded text-sm font-semibold text-text-secondary transition hover:text-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AppStoreButton size="sm" className="hidden sm:inline-flex" />

          {/* Mobile menu — native disclosure, no client JS. */}
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-control border border-border bg-surface text-text [&::-webkit-details-marker]:hidden">
              <Icon name="menu" className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-56 rounded-card border border-border bg-surface p-2 shadow-card">
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="block rounded-control px-3 py-2.5 text-sm font-semibold text-text transition hover:bg-muted"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-border pt-2">
                <AppStoreButton size="sm" className="w-full" />
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
