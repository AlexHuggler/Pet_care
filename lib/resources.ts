export interface ResourceGuide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  updated: string;
  readingTime: string;
  searchTerms: readonly string[];
  answerSummary: string;
  intro: string;
  takeaways: readonly string[];
  sections: readonly {
    heading: string;
    body: string;
    bullets?: readonly string[];
  }[];
  faqs: readonly {
    q: string;
    a: string;
  }[];
  relatedUseCases: readonly string[];
}

export const resourceGuides = [
  {
    slug: "pet-medication-routine-checklist",
    title: "A simple pet medication routine checklist for busy care days",
    metaTitle: "Pet Medication Routine Checklist",
    description:
      "A practical checklist for pet parents managing pet medication reminders, refills, dose notes, and vet records without keeping every detail in their head.",
    category: "Medication routines",
    updated: "2026-07-04",
    readingTime: "4 min read",
    searchTerms: [
      "pet medication routine checklist",
      "pet medication reminder checklist",
      "dog medication schedule checklist",
      "cat medication schedule checklist",
      "pet medicine organization",
    ],
    answerSummary:
      "A reliable pet medication routine usually includes the medication name, dose timing, given or skipped status, refill context, vet instructions, symptoms, weight notes, and records tied to the right pet. Furmacy helps organize those details in one paid-access iPhone app.",
    intro:
      "Pet care gets harder when the routine lives in alarms, texts, sticky notes, and memory. A simple checklist can lower the mental load: what is due, what happened, what is running low, and what the vet may ask about later.",
    takeaways: [
      "Write down the medication, schedule, dose status, refill context, and vet instructions.",
      "Keep dose history simple: Pending, Given, Skipped, or Missed is enough for most handoffs.",
      "Attach records and notes to the pet, especially in multi-pet homes.",
      "Use Furmacy Pro when you want the checklist, reminders, records, and history in one iPhone app.",
    ],
    sections: [
      {
        heading: "Start with the daily dose question",
        body: "The most useful routine starts with one practical question: what needs attention today? For each medication, note the pet, time, instructions, and current status. Keep the status language plain enough that a partner, sitter, or tired version of you can understand it quickly.",
        bullets: [
          "Pending for doses still due",
          "Given for doses already handled",
          "Skipped when you intentionally do not give a dose",
          "Missed when a dose window passed",
        ],
      },
      {
        heading: "Keep refills next to the medication",
        body: "Refills are easiest to miss when they are tracked separately from the schedule. Add the refill count, pharmacy or clinic context, and prescribing-vet note beside the medication itself so the next step is easier to see.",
      },
      {
        heading: "Save the context your vet may ask for",
        body: "Weight notes, symptom logs, lab results, prescription labels, and recheck notes can make follow-up conversations clearer. The goal is not to diagnose anything; it is to bring better context into the conversation with your vet.",
      },
      {
        heading: "When an app helps",
        body: "A written checklist can work for simple routines. Furmacy helps when the care routine needs reminders, dose history, refill context, weight and symptom notes, vet records, or more than one pet in the same place.",
      },
    ],
    faqs: [
      {
        q: "What should be on a pet medication checklist?",
        a: "Include the pet, medication name, schedule, instructions, dose status, refill context, prescribing-vet note, and any relevant symptoms, weight notes, or records.",
      },
      {
        q: "Can Furmacy replace my vet's instructions?",
        a: "No. Furmacy helps organize reminders and records. Your veterinarian's instructions should always come first.",
      },
    ],
    relatedUseCases: ["senior-dog-medication-reminders", "cat-medication-tracker-vet-records"],
  },
  {
    slug: "how-to-track-pet-dose-history",
    title: "How to track pet dose history without turning care into a spreadsheet",
    metaTitle: "How to Track Pet Dose History",
    description:
      "Learn a simple way to track pet dose history, missed doses, skipped doses, and care handoffs for dogs, cats, and other companion animals.",
    category: "Dose history",
    updated: "2026-07-04",
    readingTime: "4 min read",
    searchTerms: [
      "pet dose history",
      "dog dose history app",
      "cat medicine log",
      "missed pet medication tracking",
      "pet medication log app",
    ],
    answerSummary:
      "Pet dose history is easiest to maintain when each scheduled dose has a clear state such as Pending, Given, Skipped, or Missed, plus optional notes for refills, symptoms, and vet context. Furmacy records this history inside a paid-access iPhone app.",
    intro:
      "Dose history is the care trail that answers the question everyone asks sooner or later: did someone already give it? It does not need to be complicated. It just needs to be clear, consistent, and easy to check.",
    takeaways: [
      "Use a small set of dose states so the history stays readable.",
      "Add notes only when they help future-you or your vet understand context.",
      "Keep dose history tied to the pet and medication, not scattered across alarms.",
      "Furmacy Pro includes medication reminders, dose states, and full history.",
    ],
    sections: [
      {
        heading: "Use clear dose states",
        body: "A reliable dose log does not need a paragraph for every dose. Most care days can be captured with four states: Pending, Given, Skipped, and Missed. That language is easy to scan and easy for another caregiver to understand.",
      },
      {
        heading: "Add context when something changes",
        body: "Notes are most useful when they explain an exception: a dose was skipped per vet instruction, the pet had a symptom worth mentioning, the refill count changed, or a clinic asked for a recheck.",
      },
      {
        heading: "Keep the history close to the schedule",
        body: "If the history lives in one place and the reminder lives somewhere else, the routine gets harder to trust. Furmacy keeps reminders, dose states, and medication detail together so the record stays close to the action.",
      },
      {
        heading: "Share better handoff context",
        body: "For families, partners, fosters, rescues, and sitters, dose history can reduce repeated questions. The goal is simple: the next helper should be able to see what happened without waking someone up or searching a text thread.",
      },
    ],
    faqs: [
      {
        q: "What is pet dose history?",
        a: "Pet dose history is a record of scheduled medication doses and whether each dose was given, skipped, missed, or is still pending.",
      },
      {
        q: "Does Furmacy support full dose history?",
        a: "Yes. Furmacy Pro includes full dose history along with medication reminders, refills, records, and iCloud sync.",
      },
    ],
    relatedUseCases: ["dog-seizure-medication-tracker", "multi-pet-medication-tracker"],
  },
  {
    slug: "pet-refill-reminders-and-vet-records",
    title: "Pet refill reminders and vet records belong next to the routine",
    metaTitle: "Pet Refill Reminders and Vet Records",
    description:
      "A guide for organizing pet refill reminders, prescription labels, lab records, vet notes, and medication instructions in one calmer care routine.",
    category: "Refills and records",
    updated: "2026-07-04",
    readingTime: "4 min read",
    searchTerms: [
      "pet refill reminder app",
      "dog refill reminder",
      "cat prescription tracker",
      "vet records app for pets",
      "pet medication records",
    ],
    answerSummary:
      "Pet refill reminders work best when refill counts, prescription labels, vet instructions, lab records, and medication schedules stay together. Furmacy helps store refill context and vet records in a paid-access iPhone app.",
    intro:
      "Refills and records are easy to lose track of because they often live outside the daily medication routine. Bringing them closer to the schedule can make care feel less scattered.",
    takeaways: [
      "Track refill counts beside the medication schedule.",
      "Keep prescription labels, lab results, discharge notes, and recheck records tied to the pet.",
      "Use records to support vet conversations, not to self-diagnose.",
      "Furmacy Pro adds expanded documents, full history, and iCloud sync.",
    ],
    sections: [
      {
        heading: "Make refill context visible",
        body: "A refill reminder is most useful before the bottle is almost empty. Keep the count, clinic or pharmacy context, and prescribing-vet detail near the medication so the next step is easy to find.",
      },
      {
        heading: "Attach documents to the right pet",
        body: "In a multi-pet home, a lab result or prescription label should be attached to the pet it belongs to. That helps prevent the quiet confusion that happens when records are stored only in camera rolls, downloads, or email.",
      },
      {
        heading: "Bring clearer notes to the clinic",
        body: "A simple record of dose history, symptoms, weight changes, and documents can make the next vet conversation more grounded. Furmacy is not veterinary advice, but it can help keep the context organized.",
      },
      {
        heading: "Use expanded documents when the routine grows",
        body: "Furmacy Pro is built for larger care setups with expanded documents, full history, unlimited pets, unlimited active medications, and iCloud sync.",
      },
    ],
    faqs: [
      {
        q: "Can Furmacy track pet refills?",
        a: "Yes. Furmacy can keep refill context beside medication details so it is easier to see what may need attention.",
      },
      {
        q: "Can I store vet records in Furmacy?",
        a: "Yes. Furmacy supports vet record storage, with expanded documents included in Pro.",
      },
    ],
    relatedUseCases: ["cat-medication-tracker-vet-records", "senior-dog-medication-reminders"],
  },
  {
    slug: "multi-pet-medication-handoff",
    title: "A calmer handoff plan for multi-pet medication routines",
    metaTitle: "Multi-Pet Medication Handoff Guide",
    description:
      "A practical guide for families, sitters, fosters, and rescues coordinating medication routines across more than one pet.",
    category: "Shared care",
    updated: "2026-07-04",
    readingTime: "4 min read",
    searchTerms: [
      "multi pet medication tracker",
      "multiple pets medication app",
      "pet care handoff",
      "pet sitter medication instructions",
      "foster pet medication tracker",
    ],
    answerSummary:
      "A multi-pet medication handoff should separate each pet's medications, dose states, refills, symptoms, weight notes, and records. Furmacy Pro supports unlimited pets and unlimited active medications in a paid-access iPhone app.",
    intro:
      "Multi-pet care can get busy fast. A good handoff plan helps the next caregiver see which pet needs what, what already happened, and where the important records live.",
    takeaways: [
      "Give each pet their own medication and record context.",
      "Use plain dose states for shared routines: Pending, Given, Skipped, Missed.",
      "Keep sitter instructions close to medications and records.",
      "Furmacy Pro supports unlimited pets, unlimited active medications, full history, and iCloud sync.",
    ],
    sections: [
      {
        heading: "Separate the pets first",
        body: "The fastest way to reduce confusion is to make each pet's routine its own small care context. Names, photos, medications, records, and notes should be easy to separate at a glance.",
      },
      {
        heading: "Make the next action obvious",
        body: "A sitter or family member should not have to infer the next step from a long text. Keep the next due dose, instructions, refill context, and dose state visible.",
      },
      {
        heading: "Record what happened",
        body: "The handoff gets easier when each dose leaves a small trail. Given, Skipped, Missed, and Pending states help the next person understand what happened without guessing.",
      },
      {
        heading: "Use Pro when the household needs more room",
        body: "Furmacy currently requires Pro access. Pro supports unlimited pets, unlimited active medications, full history, iCloud sync, and expanded documents for larger care routines.",
      },
    ],
    faqs: [
      {
        q: "Can Furmacy manage multiple pets?",
        a: "Yes. Furmacy Pro supports unlimited pets and unlimited active medications.",
      },
      {
        q: "Is Furmacy useful for pet sitters or family handoffs?",
        a: "Yes. Furmacy helps organize dose states, history, refills, and records so shared care is easier to understand.",
      },
    ],
    relatedUseCases: ["multi-pet-medication-tracker", "dog-seizure-medication-tracker"],
  },
] as const satisfies readonly ResourceGuide[];

export const featuredResources = resourceGuides.slice(0, 3);

export const getResourceGuideBySlug = (slug: string) =>
  resourceGuides.find((guide) => guide.slug === slug);
