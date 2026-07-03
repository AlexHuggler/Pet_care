import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Faq } from "@/components/marketing/Faq";
import { Features } from "@/components/marketing/Features";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { PrivacyFirst } from "@/components/marketing/PrivacyFirst";
import { ProOffer } from "@/components/marketing/ProOffer";
import { StateShift } from "@/components/marketing/StateShift";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { faqPageLd, softwareApplicationLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  description:
    "Furmacy is a free-to-download iPhone app for pet medication reminders, dose history, refills, weight and symptom logs, vet records, and Pro upgrades when care grows.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationLd(), faqPageLd()]} />
      <Hero />
      <StateShift />
      <ProOffer />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <PrivacyFirst />
      <Faq />
      <CtaBand />
    </>
  );
}
