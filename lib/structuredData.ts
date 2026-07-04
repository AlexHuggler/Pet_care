import { absoluteUrl, features, site } from "./site";
import { faqs } from "./faq";
import type { ResourceGuide } from "./resources";

type Ld = Record<string, unknown>;

export function organizationLd(): Ld {
  const sameAs = Object.values(site.social);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    url: site.url,
    logo: absoluteUrl("/brand/furmacy-app-icon.png"),
    brand: { "@type": "Brand", name: site.name },
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer support",
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd(): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: site.company },
  };
}

export function softwareApplicationLd(): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: site.name,
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    description: site.description,
    url: site.url,
    image: absoluteUrl("/brand/furmacy-app-icon.png"),
    screenshot: [
      absoluteUrl("/screenshots/scenarios/maple-dog-today-plan.png"),
      absoluteUrl("/screenshots/scenarios/scout-dog-medication-detail.png"),
      absoluteUrl("/screenshots/scenarios/olive-cat-vet-records.png"),
      absoluteUrl("/screenshots/scenarios/kiwi-bird-health-trends.png"),
    ],
    featureList: features.map((f) => f.title),
    publisher: { "@type": "Organization", name: site.company },
    sameAs: site.appStoreUrl,
    downloadUrl: site.appStoreUrl,
    installUrl: site.appStoreUrl,
    isAccessibleForFree: false,
    keywords: [
      "pet medication reminder app",
      "dog medication tracker",
      "cat medication tracker",
      "pet dose history app",
      "pet refill reminder app",
      "vet records app for pets",
      "multi-pet medication tracker",
    ].join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: site.appStoreUrl,
      category: "Paid subscription",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description:
          "Furmacy currently requires Pro access. Weekly and annual options are shown by the App Store before purchase.",
      },
    },
  };
}

export function faqPageLd(): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function webPageLd(args: { name: string; description: string; path: string }): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.company },
  };
}

export function collectionPageLd(args: {
  name: string;
  description: string;
  path: string;
  items: readonly { name: string; path: string; description: string }[];
}): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.company },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: args.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.path),
      })),
    },
  };
}

export function resourceArticleLd(guide: ResourceGuide): Ld {
  const path = `/resources/${guide.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: absoluteUrl(path),
    datePublished: guide.updated,
    dateModified: guide.updated,
    inLanguage: "en-US",
    articleSection: guide.category,
    keywords: guide.searchTerms.join(", "),
    author: { "@type": "Organization", name: site.company, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.company,
      logo: { "@type": "ImageObject", url: absoluteUrl("/brand/furmacy-app-icon.png") },
    },
    image: absoluteUrl("/social/furmacy-og-product-card.png"),
    about: [
      { "@type": "Thing", name: "pet medication reminders" },
      { "@type": "Thing", name: "pet dose history" },
      { "@type": "Thing", name: "pet refill reminders" },
      { "@type": "Thing", name: "vet records for pets" },
    ],
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };
}
