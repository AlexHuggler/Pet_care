import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Faq } from "@/components/marketing/Faq";
import { Features } from "@/components/marketing/Features";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { PrivacyFirst } from "@/components/marketing/PrivacyFirst";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { faqPageLd, softwareApplicationLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  description:
    "Furmacy is a privacy-first iOS app for pet medication reminders, dose tracking, refills, weight & symptom logging, and vet records — with care handoff for households and sitters.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationLd(), faqPageLd()]} />
      <Hero />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <PrivacyFirst />
      <Faq />
      <CtaBand />
    </>
  );
}
