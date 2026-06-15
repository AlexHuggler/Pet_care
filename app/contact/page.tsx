import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Icon, type IconName } from "@/components/icons";
import { site } from "@/lib/site";
import { breadcrumbLd, webPageLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the Furmacy team. Email ${site.contactEmail} for support, privacy questions, press, or anything else.`,
  alternates: { canonical: "/contact" },
};

const TOPICS: { icon: IconName; title: string; body: string; subject: string }[] = [
  { icon: "chat", title: "Support & feedback", body: "Questions, bugs, or ideas for Furmacy.", subject: "Furmacy support" },
  { icon: "lock", title: "Privacy", body: "Questions about your data or our Privacy Policy.", subject: "Furmacy privacy question" },
  { icon: "mail", title: "Press & partnerships", body: "Media, collaborations, and partnerships.", subject: "Furmacy press / partnership" },
  { icon: "shield-check", title: "Legal", body: "Terms, legal, or other formal requests.", subject: "Furmacy legal" },
];

const mailto = (subject?: string) =>
  `mailto:${site.contactEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <JsonLd
        data={[
          webPageLd({ name: "Contact", description: "Contact the Furmacy team.", path: "/contact" }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">Contact</p>
      <h1 className="mt-2 text-3xl font-bold text-text sm:text-4xl">Get in touch</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
        We&rsquo;d love to hear from you. The best way to reach the Furmacy team is by
        email — we read everything and aim to reply within a few business days.
      </p>

      <div className="mt-8 rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-secondary">Email us</p>
            <a
              href={mailto()}
              className="mt-1 block text-xl font-bold text-text transition hover:text-accent-strong"
            >
              {site.contactEmail}
            </a>
          </div>
          <a
            href={mailto("Hello from furmacy.org")}
            className="inline-flex items-center gap-2 rounded-control bg-accent-strong px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0b6864] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            <Icon name="mail" className="h-5 w-5" />
            Send an email
          </a>
        </div>
      </div>

      <h2 className="mt-12 text-lg font-bold text-text">What can we help with?</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {TOPICS.map((t) => (
          <a
            key={t.title}
            href={mailto(t.subject)}
            className="group rounded-card border border-border bg-bg/50 p-5 transition hover:border-accent/40 hover:shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hero text-accent-strong">
              <Icon name={t.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-3 text-base font-bold text-text group-hover:text-accent-strong">
              {t.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">{t.body}</p>
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-secondary">
        Furmacy is made by {site.company}. For privacy requests, see our{" "}
        <Link href="/privacy" className="font-semibold text-accent-strong hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
