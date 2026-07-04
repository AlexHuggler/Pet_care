import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./illustrations";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-text">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="rounded text-sm text-text-secondary transition hover:text-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-intake px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="text-lg font-bold text-text">Furmacy</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              {site.tagline} A privacy-first way to keep medication routines,
              refills, dose history, and vet records organized.
            </p>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-semibold text-accent-strong hover:underline"
              >
                {site.contactEmail}
              </a>
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/#product-tour", label: "Product tour" },
              { href: "/#features", label: "Features" },
              { href: "/use-cases", label: "Use cases" },
              { href: "/resources", label: "Care guides" },
              { href: "/#outcome", label: "Outcome" },
              { href: "/#pro", label: "Furmacy Pro" },
              { href: "/#who", label: "Who it's for" },
              { href: "/#faq", label: "FAQ" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Use" },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.company}. All rights reserved.
          </p>
          <p className="text-text-secondary/80">
            Furmacy helps you stay organized — it isn&rsquo;t veterinary advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
