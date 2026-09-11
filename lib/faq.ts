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
    a: "Furmacy is a privacy-first iPhone and iPad app that helps pet caregivers manage medication reminders, dose history, refills, weight and symptom tracking, and vet records. Furmacy costs $4.99 once in the U.S. App Store, with all features included and no subscription.",
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
    a: "Furmacy is built privacy-first: your pet's health information is kept on your device or, if you enable optional sync, in your private iCloud. There's no required account, no in-app ads, and the paid update does not connect to RevenueCat.",
  },
  {
    q: "Can Furmacy help with chronic conditions like diabetes or kidney disease?",
    a: "Yes. Furmacy is designed for complex, ongoing care, including diabetes, CKD/kidney disease, seizures, Cushing's, arthritis and mobility, senior care, and pets with multiple conditions. It keeps schedules, doses, refills, and records organized in one place.",
  },
  {
    q: "Can I track more than one pet?",
    a: "Yes. Furmacy includes unlimited pets and unlimited active medications for households that need more room.",
  },
  {
    q: "Can Furmacy help with family or sitter handoffs?",
    a: "You can choose records and share a PDF with family or a sitter. Shared accounts, live household updates, and multi-person dose logging are not available. Private iCloud sync connects your own Apple devices.",
  },
  {
    q: "What does the one-time purchase include?",
    a: "Your one-time purchase includes unlimited pets, unlimited active medications, full dose history, more room for vet documents, iCloud sync across Apple devices, and fuller records for ongoing care.",
  },
  {
    q: "Is Furmacy a substitute for veterinary care?",
    a: "No. Furmacy helps you stay organized and reduce missed-dose confusion, but it is not veterinary advice. Always follow your veterinarian's instructions, and contact your vet for medical concerns.",
  },
  {
    q: "Does Furmacy work on Android?",
    a: "Furmacy is currently an iOS app for iPhone and iPad. An Android version isn't available yet.",
  },
  {
    q: "How much does Furmacy cost?",
    a: "Furmacy costs $4.99 once in the U.S. App Store. All features are included without a subscription or in-app upgrade. Apple shows local storefront prices before purchase.",
  },
  {
    q: "How do I get Furmacy?",
    a: "Download Furmacy from the App Store: https://apps.apple.com/us/app/furmacy-pet-med-tracker/id6767069388?uo=4.",
  },
  {
    q: "What happens if I already have Furmacy?",
    a: "Update the same app to keep your records and receive full feature access. If you previously started a subscription, review it in Apple subscription settings. Updating does not automatically cancel billing.",
  },
  {
    q: "Who makes Furmacy?",
    a: "Furmacy is made by Huggler Holdings LLC. You can reach the team at contact@furmacy.org.",
  },
];
