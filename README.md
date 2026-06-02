# Furmacy — Beta-Tester Intake

> Your pet's health, simplified.

A warm, privacy-first intake site for the **Furmacy** iOS beta. Testers open it
from an email link, answer a short, mostly-optional multi-step form, review their
answers, and submit. It's built to feel like a calm, real intake tool — not a
marketing landing page or a clinical questionnaire.

**This intake is for beta fit and feedback — it is not veterinary advice.**

## Highlights

- **8 guided steps** with a progress bar, Back/Continue navigation, and a final
  review screen you can jump back from to edit any section.
- **Draft auto-save** to `localStorage` — refreshing never loses answers.
- **Accessible by default**: real labels, `fieldset`/`legend` groups, keyboard
  navigation, visible focus rings, inline validation that moves focus to the
  first problem, and full `prefers-reduced-motion` support.
- **Privacy-first**: no analytics, trackers, ads, third-party scripts, or
  external fonts/images. Answers stay on-device until the tester submits. The
  page is marked `noindex`.
- **Pluggable submission backend** with a safe local-dev fallback (writes JSON
  to `./submissions/`). No secrets in code.
- **Inline SVG** brand icons + soft illustrations (no stock imagery).

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) · React · TypeScript
- [Tailwind CSS v3](https://tailwindcss.com) with Furmacy design tokens
- [Zod](https://zod.dev) as the single source of truth for the data model
- `clsx` for class composition — that's the whole dependency list.

## Getting started

Prerequisites: **Node 18.18+ or 20+** (developed on Node 22) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also type-checks + lints)
npm run start      # serve the production build
npm run lint       # ESLint (next/core-web-vitals)
```

Optionally, copy the env template:

```bash
cp .env.example .env.local
```

All env vars are optional — the app runs fully without any.

## Environment variables

| Variable | Exposed? | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_TESTFLIGHT_URL` | Browser | Public TestFlight link on the success screen. Unset → that section is hidden. |
| `SUBMIT_WEBHOOK_URL` | Server only | Forward submissions to any endpoint (Zapier, Make, n8n, your function). |
| `FORMSPREE_FORM_ID` | Server only | Send submissions to a [Formspree](https://formspree.io) form. |
| `SUPABASE_*` / `AIRTABLE_*` | Server only | Commented templates in the API route — uncomment to enable. |

Only `NEXT_PUBLIC_*` values reach the browser. Keep all keys/secrets un-prefixed.

## Where submissions go (connect the real backend)

All submission logic lives in **`app/api/submit/route.ts`**. The client posts to
`/api/submit`; the route picks the first configured provider:

1. **`SUBMIT_WEBHOOK_URL`** — POSTs the JSON record to your endpoint.
2. **`FORMSPREE_FORM_ID`** — POSTs to `https://formspree.io/f/<id>`.
3. **Supabase / Airtable** — ready-to-uncomment `TODO` blocks (server-only keys).
4. **No provider configured** — in development, writes
   `./submissions/intake-<timestamp>.json` (gitignored) so you can inspect real
   responses. In production it logs a warning and returns success so a tester is
   never blocked by backend setup.

To wire your backend: set the relevant variable(s) in `.env.local` (see
`.env.example`), or uncomment the Supabase/Airtable block in the route. The data
shape is `{ data: IntakeData, meta: {...}, receivedAt }`.

## Project structure

```
app/
  layout.tsx              Root layout, metadata, skip link
  page.tsx                Two-column intake page (brand/intro + form)
  globals.css             Tailwind + focus + reduced-motion
  api/submit/route.ts     Submission endpoint (provider abstraction + TODOs)
components/
  Wizard.tsx              Multi-step controller: state, validation, persistence, submit
  IntakeSteps.tsx         The 8 step bodies
  ReviewScreen.tsx        Editable summary before submit
  SuccessScreen.tsx       Thank-you + optional TestFlight link
  StepShell / ProgressBar / NavButtons / BrandHeader / IntakeIntro
  icons.tsx / illustrations.tsx
  fields/                 TextField, TextArea, RadioChips, CheckboxChips, Checkbox
lib/
  intake.ts               Zod schema, options, IntakeData type, defaults
  steps.ts                Step metadata + per-step validators
  summary.ts              Human-readable review summary
  submit.ts               Client submit helper
  useLocalStorageDraft.ts Versioned draft persistence hook
  cn.ts
```

## Data model

`IntakeData` is inferred from the Zod schema in `lib/intake.ts` (the single
source of truth). The schema is intentionally lenient so partial drafts always
parse; friendly "required" messages live in `lib/steps.ts`. Only **name, email,
TestFlight comfort, primary care goal, and the three consent checkboxes** are
required — everything else is clearly marked **Optional**.

## Accessibility & motion

- Every control has a real label; chip groups use `fieldset`/`legend`; selects
  are backed by native radio/checkbox inputs for free keyboard + SR support.
- Validation sets `aria-invalid` + `aria-describedby`, announces via `role="alert"`,
  and moves focus to the first invalid field.
- Focus moves to each step's heading on navigation; there's a skip link.
- A global `prefers-reduced-motion` rule disables transitions/animations, and
  motion utilities use the `motion-safe`/`motion-reduce` variants.
- Buttons use a darkened teal (`accent-strong`, ~5:1 on white) so white button
  text meets WCAG AA; the brand teal is reserved for borders, icons, and tints.

## Deployment

It's a standard Next.js app:

- **Vercel** — import the repo; set any env vars in the project settings; deploy.
- **Netlify** — use the Next.js runtime; set env vars; deploy.
- **Node host** — `npm run build` then `npm run start` (the `/api/submit` route
  needs the Node.js runtime, which it requests explicitly).

> Note: the local-dev JSON fallback writes to disk and won't persist on
> serverless hosts — configure a provider (above) for production.

## License

Private — Furmacy beta intake.
