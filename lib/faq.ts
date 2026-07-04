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
    a: "Furmacy is a privacy-first iPhone app that helps pet caregivers manage medication reminders, dose history, refills, weight and symptom tracking, and vet records. Furmacy currently requires Pro access, with weekly and annual options shown by the App Store before purchase.",
  },
  {
    q: "What kinds of pets does Furmacy support?",
    a: "Furmacy works for many companion animals, including dogs, cats, birds, rabbits, reptiles, and other pets with medication and record-keeping routines.",
  },
  {
    q: "Can I use Furmacy for a senior dog or cat?",
    a: "Yes. Furmacy is built for everyday senior-pet care routines, including medication reminders, dose history, refills, weight and symptom logs, and vet records.",
  },
  {
    q: "How does Furmacy protect my privacy?",
    a: "Furmacy is built privacy-first: your pet's health information is kept on your device or, if you enable Pro sync, in your private iCloud. There's no required account, no in-app ads, and pet-care records are not sent to RevenueCat.",
  },
  {
    q: "Can Furmacy help with chronic conditions like diabetes or kidney disease?",
    a: "Yes. Furmacy is designed for complex, ongoing care, including diabetes, CKD/kidney disease, seizures, Cushing's, arthritis and mobility, senior care, and pets with multiple conditions. It keeps schedules, doses, refills, and records organized in one place.",
  },
  {
    q: "Can I track more than one pet?",
    a: "Yes. Furmacy Pro supports unlimited pets and unlimited active medications for households that need more room.",
  },
  {
    q: "Can Furmacy help with family or sitter handoffs?",
    a: "Yes. Dose states and history make it easier for partners, family members, and sitters to see what was given, skipped, missed, or is still pending.",
  },
  {
    q: "What does Furmacy Pro include?",
    a: "Furmacy Pro unlocks unlimited pets, unlimited active medications, full dose history, more room for vet documents, iCloud sync across Apple devices, and fuller records for ongoing care.",
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
    a: "Furmacy currently requires Pro access to use the app. Furmacy Pro has weekly and annual subscription options, and annual includes a 14-day trial for eligible subscribers. Exact live pricing is shown by the App Store before purchase.",
  },
  {
    q: "How do I get Furmacy?",
    a: "Download Furmacy from the App Store: https://apps.apple.com/us/app/furmacy-pet-med-tracker/id6767069388?uo=4.",
  },
  {
    q: "Who makes Furmacy?",
    a: "Furmacy is made by Huggler Holdings LLC. You can reach the team at contact@furmacy.org.",
  },
];
