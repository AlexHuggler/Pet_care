export interface Faq {
  q: string;
  a: string;
}

/**
 * Factual, entity-clear Q&A — reused by the on-page FAQ accordion, the FAQPage
 * JSON-LD, and llms.txt. Written for both humans and AI answer engines.
 */
export const faqs: readonly Faq[] = [
  {
    q: "What is Furmacy?",
    a: "Furmacy is a privacy-first iOS app that helps pet caregivers manage medications and doses, refills and routine care, weight and symptom tracking, and vet records. It's designed for real-life pet care, including multi-pet households and chronic conditions.",
  },
  {
    q: "What kinds of pets does Furmacy support?",
    a: "Furmacy works for many companion animals, including dogs, cats, birds, rabbits, and reptiles.",
  },
  {
    q: "How does Furmacy protect my privacy?",
    a: "Furmacy is built privacy-first: your pet's health information is kept on your device. There's no required account, and the app isn't built around tracking, telemetry, or ads.",
  },
  {
    q: "Can Furmacy help with chronic conditions like diabetes or kidney disease?",
    a: "Yes. Furmacy is designed for complex, ongoing care — including diabetes, CKD/kidney disease, seizures, Cushing's, arthritis and mobility, senior care, and pets with multiple conditions — by keeping schedules, doses, and records organized in one place.",
  },
  {
    q: "Can more than one person manage a pet's care?",
    a: "Yes. Furmacy supports care handoff so households, family members, and sitters can see the routine and what's already been done — helpful for the \"did someone already give it?\" moments.",
  },
  {
    q: "Is Furmacy a substitute for veterinary care?",
    a: "No. Furmacy helps you stay organized and reduce missed-dose confusion, but it is not veterinary advice. Always follow your veterinarian's instructions, and contact your vet for medical concerns.",
  },
  {
    q: "Does Furmacy work on Android?",
    a: "Furmacy is currently an iOS app for iPhone. An Android version isn't available yet.",
  },
  {
    q: "How much does Furmacy cost?",
    a: "Furmacy is launching on the Apple App Store; current pricing is shown on the App Store listing.",
  },
  {
    q: "How do I get Furmacy?",
    a: "Furmacy is launching on the Apple App Store. Visit furmacy.org for the latest, or check the App Store.",
  },
  {
    q: "Who makes Furmacy?",
    a: "Furmacy is made by Huggler Holdings LLC. You can reach the team at contact@furmacy.org.",
  },
];
