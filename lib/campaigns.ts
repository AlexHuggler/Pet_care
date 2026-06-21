import { site } from "@/lib/site";

const APP_STORE_PRODUCT_URL = "https://apps.apple.com/us/app/furmacy/id6767069388";
const APPLE_PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN ?? "";

export interface CampaignLink {
  slug: string;
  title: string;
  source: string;
  audience: string;
  campaignToken: string;
  customProductPageId?: string;
}

const appStoreUrlFor = (campaign: CampaignLink) => {
  const url = new URL(site.appStoreUrl || APP_STORE_PRODUCT_URL);

  if (campaign.customProductPageId) {
    url.searchParams.set("ppid", campaign.customProductPageId);
  }

  if (APPLE_PROVIDER_TOKEN) {
    url.searchParams.set("pt", APPLE_PROVIDER_TOKEN);
    url.searchParams.set("ct", campaign.campaignToken);
    url.searchParams.set("mt", "8");
  }

  return url.toString();
};

export const campaignLinks = [
  {
    slug: "pet-reminders",
    title: "Broad Pet Meds Reminder",
    source: "general",
    audience: "Pet caregivers looking for medication reminders and records.",
    campaignToken: "pet-reminders",
    customProductPageId: "b6d2afd1-cd1f-4f86-9ff1-3d73473ceb8c",
  },
  {
    slug: "dog-diabetes",
    title: "Dog Diabetes Routine",
    source: "condition-page",
    audience: "Dog caregivers managing insulin, refills, notes, and rechecks.",
    campaignToken: "dog-diabetes",
    customProductPageId: "26bf94bf-8945-44a5-ad27-9288e24b1102",
  },
  {
    slug: "senior-cat",
    title: "Senior Cat Chronic Care",
    source: "condition-page",
    audience: "Senior-cat caregivers managing medications, labs, weights, and vet records.",
    campaignToken: "senior-cat",
    customProductPageId: "15cce948-cb3e-4ac1-8b6a-a29475530805",
  },
  {
    slug: "dog-epilepsy",
    title: "Dog Epilepsy Timing",
    source: "condition-page",
    audience: "Dog caregivers tracking timing-sensitive medication routines.",
    campaignToken: "dog-epilepsy",
    customProductPageId: "b93f165f-71ac-4bd4-ab38-e481d001d66f",
  },
  {
    slug: "pet-meds",
    title: "Multi Pet Handoff",
    source: "general",
    audience: "Multi-pet households and shared caregivers.",
    campaignToken: "pet-meds",
    customProductPageId: "cd32b542-71c3-4c58-9887-c8996230f40d",
  },
  {
    slug: "exotic-pets",
    title: "Exotics Small Pets",
    source: "species-page",
    audience: "Caregivers for birds, reptiles, rabbits, fish, and small mammals.",
    campaignToken: "exotic-pets",
    customProductPageId: "e7e460de-e0ec-4f9e-89d2-a9077e008807",
  },
  {
    slug: "bird-care",
    title: "Bird Senior Care",
    source: "species-page",
    audience: "Bird caregivers organizing meds, weight checks, and vet documents.",
    campaignToken: "bird-care",
    customProductPageId: "8ad4fc48-eeab-405a-ac01-1c848ac3c8a3",
  },
  {
    slug: "rabbit-care",
    title: "Rabbit Recovery Routine",
    source: "species-page",
    audience: "Rabbit caregivers managing recovery routines and recheck records.",
    campaignToken: "rabbit-care",
    customProductPageId: "85e17d36-fed9-47c4-938b-87cb01d14245",
  },
  {
    slug: "reptile-care",
    title: "Reptile Recovery Care",
    source: "species-page",
    audience: "Reptile caregivers tracking meds, feeding support, and follow-up notes.",
    campaignToken: "reptile-care",
    customProductPageId: "8df7e168-dc51-4dad-bc14-5dec57aa3ab6",
  },
  {
    slug: "fish-care",
    title: "Fish Tank Treatment",
    source: "species-page",
    audience: "Fish caregivers keeping treatment and water-care records organized.",
    campaignToken: "fish-care",
    customProductPageId: "79a8e3aa-f334-41c6-99c1-bc4acfe7a8f9",
  },
  {
    slug: "guinea-pig",
    title: "Guinea Pig Small Mammal",
    source: "species-page",
    audience: "Small-mammal caregivers tracking meds, feeding support, and weights.",
    campaignToken: "guinea-pig",
    customProductPageId: "8eb13392-3da7-4fdd-bf07-b0923fae8ba8",
  },
] as const satisfies readonly CampaignLink[];

export const campaignLinksWithUrls = campaignLinks.map((campaign) => ({
  ...campaign,
  appStoreUrl: appStoreUrlFor(campaign),
}));

export const campaignLinkBySlug = (slug: string) =>
  campaignLinksWithUrls.find((campaign) => campaign.slug === slug);
