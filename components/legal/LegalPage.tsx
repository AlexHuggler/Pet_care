import { type ReactNode } from "react";

interface LegalPageProps {
  title: string;
  updated: string;
  intro?: ReactNode;
  toc: { id: string; label: string }[];
  children: ReactNode;
}

export function LegalPage({ title, updated, intro, toc, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">Legal</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-text-secondary">Last updated: {updated}</p>

      {intro && (
        <div className="mt-5 rounded-card border border-border bg-muted/50 p-4 text-[15px] leading-relaxed text-text-secondary">
          {intro}
        </div>
      )}

      <nav aria-label="On this page" className="mt-6 rounded-card border border-border bg-surface p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
          On this page
        </p>
        <ol className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-accent-strong hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="legal mt-8">{children}</div>
    </div>
  );
}
