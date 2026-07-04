export interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  image: {
    src: string;
    alt: string;
  };
  searchTerms: readonly string[];
  intro: string;
  bullets: readonly string[];
  sections: readonly {
    heading: string;
    body: string;
  }[];
  faqs: readonly {
    q: string;
    a: string;
  }[];
}

export const useCases = [
  {
    slug: "senior-dog-medication-reminders",
    title: "Senior dog medication reminders that are easier to keep up with",
    metaTitle: "Senior Dog Medication Reminder App",
    description:
      "Furmacy helps pet parents track senior dog medication reminders, dose history, refills, notes, and vet records in one iPhone app.",
    eyebrow: "Senior dog care",
    image: {
      src: "/screenshots/scenarios/maple-dog-today-plan.png",
      alt: "Furmacy Today screen showing Maple's senior dog medication reminders and dose actions",
    },
    searchTerms: [
      "senior dog medication reminder",
      "dog medication tracker",
      "dog dose history app",
      "dog refill reminder",
    ],
    intro:
      "Senior dogs can have routines that change over time: morning meds, evening meds, meal notes, refills, and recheck questions. Furmacy gives the day a calm place to land so you can see what is due and what already happened.",
    bullets: [
      "Track today's senior dog medication schedule",
      "Mark doses Given, Skipped, Pending, or Missed",
      "Keep refill and vet details near the medication",
      "Choose weekly or annual Pro access when you are ready to use Furmacy",
    ],
    sections: [
      {
        heading: "For the daily did-we-give-it check",
        body: "The Today view shows pending and given doses, the next dose time, and the pet attached to the routine. It is built for the ordinary moments when everyone wants one clear answer.",
      },
      {
        heading: "For refills and vet conversations",
        body: "Dose history, refill context, weight notes, symptom logs, and documents help you bring a clearer picture into the next visit without digging through scattered notes.",
      },
    ],
    faqs: [
      {
        q: "Can I use Furmacy for a senior dog?",
        a: "Yes. Furmacy is designed for senior pet routines, including medication reminders, dose history, refills, weight and symptom logs, and vet records.",
      },
      {
        q: "Is Furmacy veterinary advice?",
        a: "No. Furmacy helps organize the routine; your veterinarian's directions still come first.",
      },
    ],
  },
  {
    slug: "cat-medication-tracker-vet-records",
    title: "Cat medication tracking with vet records close by",
    metaTitle: "Cat Medication Tracker and Vet Records App",
    description:
      "Furmacy helps cat caregivers organize medication reminders, thyroid or kidney care notes, lab records, prescriptions, and recheck documents.",
    eyebrow: "Cat care",
    image: {
      src: "/screenshots/scenarios/olive-cat-vet-records.png",
      alt: "Furmacy Documents screen showing Olive's cat lab results, prescription label, and recheck record",
    },
    searchTerms: [
      "cat medication tracker",
      "cat medicine reminder app",
      "cat vet records app",
      "senior cat medication tracker",
    ],
    intro:
      "Cats with ongoing care can come with lab results, prescription labels, recheck notes, and dose timing that should not have to live in five places. Furmacy keeps the care context attached to the pet.",
    bullets: [
      "Keep cat medication reminders and dose states together",
      "Store labs, prescriptions, and recheck notes",
      "Track symptoms and weight between visits",
      "Upgrade to Pro for expanded documents and full history",
    ],
    sections: [
      {
        heading: "For cats with labs, prescriptions, and follow-ups",
        body: "Furmacy keeps documents organized by pet so a kidney panel, thyroid prescription label, or clinic note is easier to find when the vet asks.",
      },
      {
        heading: "For calmer care at home",
        body: "Reminders and dose history help reduce the small daily uncertainty around whether a medication was given, skipped, missed, or is still pending.",
      },
    ],
    faqs: [
      {
        q: "Can Furmacy help with cat medication reminders?",
        a: "Yes. Furmacy supports medication schedules, dose states, refills, weight and symptom logs, and vet records for cats.",
      },
      {
        q: "Can I store cat vet records in Furmacy?",
        a: "Yes. Furmacy includes vet record storage, with expanded documents available through Pro.",
      },
    ],
  },
  {
    slug: "dog-seizure-medication-tracker",
    title: "Dog seizure medication tracking for timing-sensitive routines",
    metaTitle: "Dog Seizure Medication Tracker App",
    description:
      "Furmacy helps caregivers track timing-sensitive dog medication routines, dose history, refills, vet notes, and reminders.",
    eyebrow: "Timing-sensitive meds",
    image: {
      src: "/screenshots/scenarios/scout-dog-medication-detail.png",
      alt: "Furmacy medication detail screen showing Scout's anti-seizure medication schedule, refills, and vet note",
    },
    searchTerms: [
      "dog seizure medication tracker",
      "dog epilepsy medication reminder",
      "dog medication schedule app",
      "pet dose history app",
    ],
    intro:
      "Some routines feel especially stressful because timing matters. Furmacy helps keep the schedule, next dose, refill count, and vet note together so the important details are easier to check.",
    bullets: [
      "See the next dose and schedule",
      "Track dose history and status",
      "Keep refill counts and vet notes near the medication",
      "Use Pro for full history, sync, expanded records, and more pets",
    ],
    sections: [
      {
        heading: "For routines where timing matters",
        body: "Furmacy surfaces the next dose and the schedule without asking you to reconstruct it from alarms, texts, and memory.",
      },
      {
        heading: "For the details around the medication",
        body: "Medication detail screens keep form, refill count, prescribing-vet context, notes, and history closer to the action.",
      },
    ],
    faqs: [
      {
        q: "Can Furmacy track dog seizure medication schedules?",
        a: "Furmacy can organize timing-sensitive medication reminders, dose states, refills, and vet notes. It does not provide treatment guidance.",
      },
      {
        q: "Does Furmacy replace my vet's instructions?",
        a: "No. Furmacy is an organization tool. Always follow your veterinarian's instructions.",
      },
    ],
  },
  {
    slug: "multi-pet-medication-tracker",
    title: "A multi-pet medication tracker for households with more to coordinate",
    metaTitle: "Multi-Pet Medication Tracker App",
    description:
      "Furmacy currently requires Pro access and supports households that need unlimited pets, unlimited active medications, iCloud sync, full history, and expanded documents.",
    eyebrow: "Multi-pet homes",
    image: {
      src: "/screenshots/scenarios/maple-dog-today-plan.png",
      alt: "Furmacy Today screen showing a household medication plan with pending and given doses",
    },
    searchTerms: [
      "multi pet medication tracker",
      "multiple pets medication app",
      "pet medication organizer",
      "pet care handoff app",
    ],
    intro:
      "One pet can be simple. Two, three, or four pets can turn into a lot of tiny details: who needs what, what was given, which refill is low, and where the records live. Furmacy gives each pet their own care context.",
    bullets: [
      "Choose Pro access to use Furmacy",
      "Track unlimited pets and active medications with Pro",
      "Keep records, symptoms, weight, and dose history attached to the right pet",
      "Use iCloud sync with Pro across Apple devices",
    ],
    sections: [
      {
        heading: "For more than one loved pet",
        body: "Furmacy is built so each pet can have their own medications, reminders, records, and health notes instead of everything blending together.",
      },
      {
        heading: "For shared household routines",
        body: "Clear dose states and history make it easier for partners, family, and sitters to understand what already happened and what is still due.",
      },
    ],
    faqs: [
      {
        q: "Can Furmacy manage more than one pet?",
        a: "Yes. Furmacy Pro supports unlimited pets and unlimited active medications.",
      },
      {
        q: "Does Furmacy support different kinds of pets?",
        a: "Yes. Furmacy can be used for many companion animals, including dogs, cats, birds, rabbits, reptiles, and other pets with care routines.",
      },
    ],
  },
] as const satisfies readonly UseCase[];

export const getUseCaseBySlug = (slug: string) =>
  useCases.find((useCase) => useCase.slug === slug);
