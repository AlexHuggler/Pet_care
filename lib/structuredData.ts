import { absoluteUrl, features, site } from "./site";
import { faqs } from "./faq";

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
    downloadUrl: site.appStoreUrl,
    installUrl: site.appStoreUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: site.appStoreUrl,
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
