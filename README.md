# Furmacy — Website

> Your pet's health, simplified.

The public marketing + product site for **Furmacy**, a free-to-download,
privacy-first iPhone pet health and medication app with a Furmacy Pro upgrade
path, plus the legal pages and campaign redirects. Built
with Next.js (App Router) + TypeScript + Tailwind and shipped as a **fully static
export** to **GitHub Pages** at `https://furmacy.org`. Privacy-respecting, with
**no website analytics, trackers, ads, or external fonts/images**; the app's
purchase-scoped RevenueCat and Apple Ads attribution disclosures live on the legal
pages.

Operated by **Huggler Holdings LLC**.

## Pages

| Route | What it is | Indexed |
| --- | --- | --- |
| `/` | Public homepage: real app media, current-to-solution story, Pro offer, features, who it's for, privacy, FAQ, CTA | ✅ |
| `/privacy` | Privacy Policy (on-device-first posture) | ✅ |
| `/terms` | Terms of Use / EULA (incl. Apple App Store clauses + veterinary disclaimer) | ✅ |
| `/contact` | Contact page built around `contact@furmacy.org` | ✅ |
| `/beta` | Legacy handoff page that points visitors to the public App Store listing and contact page | 🚫 `noindex` |

## Tech stack

Next.js 15 (App Router, `output: "export"`) · React · TypeScript · Tailwind CSS v3.
Only extra runtime dependency is `clsx`.

## Getting started

Requires **Node 18.18+ or 20+** (developed on Node 22) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # type-checks, lints, and exports a static site to ./out
npm run lint
```

`npm run build` produces a static site in **`./out`** (because of
`output: "export"`). Serve it with any static server, e.g. `npx serve out`.

Copy env defaults (all optional): `cp .env.example .env.local`.

## Configuration (`lib/site.ts` + env)

Most identity/legal/app-store values live in **`lib/site.ts`** (single source of
truth). Subscription-first offer data lives in **`lib/marketing.ts`**. A few
values read from public env vars (baked in at build time):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, canonical URLs, sitemap, OG images. Default `https://furmacy.org`. |
| `NEXT_PUBLIC_APP_STORE_URL` | Optional override for the public App Store listing. Default `https://apps.apple.com/us/app/furmacy-pet-med-tracker/id6767069388?uo=4`. |
| `NEXT_PUBLIC_APPLE_APP_ID` | Apple numeric app ID — enables the `apple-itunes-app` smart-banner meta. |
| `NEXT_PUBLIC_APPLE_PROVIDER_TOKEN` | Optional App Store Connect provider token for `/go/<slug>/` campaign links. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact alias. Default `contact@furmacy.org`. |

### Public App Store listing
`lib/site.ts` defaults to the live public App Store URL, so CTAs, JSON-LD
`downloadUrl`, campaign fallback links, and the smart banner are public-launch
ready without extra environment configuration.

The current public copy can mention that Furmacy is free to download, one pet is
free, Furmacy Pro has weekly and annual subscription options, and annual includes
a 14-day trial for eligible subscribers. Exact live prices should be shown by the
App Store purchase sheet rather than hardcoded into the public website.

## Marketing assets

Real Furmacy app media is committed under:

- `public/brand/furmacy-app-icon.png`
- `public/screenshots/furmacy-today-clean.png`
- `public/screenshots/furmacy-today-cat-avatar.png`
- `public/screenshots/furmacy-today-dog-avatar.png`
- `public/social/furmacy-public-launch-card.svg`
- `public/social/furmacy-og-product-card.png`
- `public/social/furmacy-share-square.png`
- `public/badges/download-on-the-app-store.svg`

Asset provenance and usage notes live in `docs/marketing/source-assets.md`. The
cat/dog avatar screenshots use stock-photo mockups, not customer pets,
endorsements, or medical outcome proof.

Offer strategy lives in `docs/marketing/furmacy-website-offer-brief.md`.

## SEO

- Per-page `metadata` (title template `%s · Furmacy`, descriptions, **canonical**),
  Open Graph + Twitter (`summary_large_image`).
- Static product-led OG/Twitter image
  (`public/social/furmacy-og-product-card.png`, 1200×630), favicon
  (`app/icon.svg`), **Apple touch icon** (`app/apple-icon.tsx`), and the real
  app icon at `public/brand/furmacy-app-icon.png`.
- **JSON-LD** (`lib/structuredData.ts`): `Organization` + `WebSite` site-wide;
  `MobileApplication` + `FAQPage` on the home page; `WebPage` + `BreadcrumbList`
  on legal/contact pages.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` (each `force-static` for
  the export), semantic headings, theme-color.

## LLMO (so ChatGPT / Gemini / Claude / Perplexity can surface & cite Furmacy)

- **`public/llms.txt`** — a structured markdown brief (what Furmacy is, features,
  audience, privacy, key links, FAQ, contact).
- **`app/robots.ts` explicitly welcomes AI crawlers** (GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, anthropic-ai, Claude-User, Google-Extended,
  PerplexityBot, Applebot-Extended, Amazonbot, CCBot, and more) in addition to
  allowing all by default.
- FAQ in clean Q&A form (`lib/faq.ts`, reused by the page, `FAQPage` JSON-LD, and
  `llms.txt`), crisp definitional sentences, clear entity/publisher signals, and
  dated legal content.

## ASO (App Store Optimization)

Website hooks are in place: `apple-itunes-app` smart banner (set the app ID),
App Store CTAs, and `MobileApplication` schema (`operatingSystem: iOS`,
`applicationCategory: HealthApplication`). The listing itself is managed in **App
Store Connect** — suggested starting points:

- **App name:** `Furmacy`
- **Subtitle (30 chars):** `Pet meds, reminders, records`
- **Keywords (100 chars):** `pet meds,dog meds,cat meds,med reminder,dose tracker,vet records,senior cat,diabetes,seizure,refills`
- **Description:** lead with the one-line definition, then the feature list and
  the privacy-first/on-device angle. Avoid medical claims; include the
  "not veterinary advice" note.
- **Screenshots:** medication reminders, the Given/Skip dose action, refills,
  weight/symptom logging, vet records, and care handoff.

## Email alias

The site only ever shows **`contact@furmacy.org`**. Configure that as an alias at
your email provider so it forwards to your team inbox. Update the address in one
place via `NEXT_PUBLIC_CONTACT_EMAIL` / `lib/site.ts`.

For Furmacy outbound email outreach, use the Furmacy alias inside the
`hugglerholdings.com` Gmail account. Do not send new Furmacy outreach from
`alexhuggler@gmail.com` unless explicitly overridden, and verify the exact sender
alias in Gmail before sending.

## Legal pages — please review

`/privacy` and `/terms` are written to reflect Furmacy's current app posture:
pet-care records stay on device by default or in the user's private iCloud when
Pro sync is enabled; RevenueCat manages Pro purchase status and entitlement
restores; Apple's standard AdServices attribution token may be sent to RevenueCat
for Apple Ads campaign reporting; and pet-care records are not sent to RevenueCat.
The pages name **Huggler Holdings LLC** with **Texas** governing law (centralized
in `lib/site.ts`). They are a strong starting point, **not a substitute for legal
advice** — have counsel review them periodically, and confirm entity details,
governing law, and the effective date after material changes.

## Campaign attribution links

Static redirect pages live at `/go/<slug>/` and are generated from
`lib/campaigns.ts`. Each slug points to the App Store base listing or a custom
product page `ppid` URL and can append Apple campaign parameters when
`NEXT_PUBLIC_APPLE_PROVIDER_TOKEN` is configured. Keep campaign names channel- or
creative-level only; never include pet names, user names, email addresses, or other
personal data in a slug or campaign token.

## Legacy `/beta` route

The legacy `/beta` URL is retained as a `noindex` handoff page. It no longer
collects intake submissions; it points visitors to the public App Store listing
and the contact page.

## Deployment (GitHub Pages)

`next build` exports a static site to `./out`, deployed to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set with `public/CNAME`
(`furmacy.org`). Because it's fully static there's no server runtime — all config
is build-time `NEXT_PUBLIC_*`.

## License

Private — © Huggler Holdings LLC.
