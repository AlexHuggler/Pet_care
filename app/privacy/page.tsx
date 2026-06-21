import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";
import { breadcrumbLd, webPageLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Furmacy handles your information: pet-care records stay on device or in your private iCloud, with RevenueCat used for Pro purchases and Apple Ads attribution.",
  alternates: { canonical: "/privacy" },
};

const TOC = [
  { id: "who-we-are", label: "Who we are" },
  { id: "summary", label: "The short version" },
  { id: "on-device", label: "Information in the app" },
  { id: "you-send", label: "Information you send us" },
  { id: "purchases-attribution", label: "Purchases and attribution" },
  { id: "no-tracking", label: "No behavioral tracking" },
  { id: "providers", label: "Service providers" },
  { id: "children", label: "Children's privacy" },
  { id: "security", label: "Security" },
  { id: "your-choices", label: "Your choices & rights" },
  { id: "international", label: "International users" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Privacy Policy",
            description: "How Furmacy handles your information.",
            path: "/privacy",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <LegalPage
        title="Privacy Policy"
        updated={site.legalEffectiveDate}
        toc={TOC}
        intro={
          <>
            Furmacy is built privacy-first. In plain terms:{" "}
            <strong className="font-semibold text-text">
              your pet&rsquo;s information stays on your device
            </strong>
            , and you can use the app without an account.
          </>
        }
      >
        <h2 id="who-we-are">Who we are</h2>
        <p>
          Furmacy (&ldquo;Furmacy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) is a mobile application operated by {site.company}. This
          Privacy Policy explains how we handle information in connection with the
          Furmacy iOS app and the website at {site.url}.
        </p>

        <h2 id="summary">The short version</h2>
        <ul>
          <li>Your pet-care records stay on your device or, if you enable Pro sync, in your private iCloud.</li>
          <li>
            You can use the app <strong>without creating an account</strong>.
          </li>
          <li>RevenueCat helps Furmacy validate Pro purchases and restore entitlements.</li>
          <li>Apple&rsquo;s standard AdServices attribution token may be sent to RevenueCat for Apple Ads campaign reporting.</li>
          <li>Pet names, medications, dose history, notes, photos, scans, and health entries are not sent to RevenueCat.</li>
          <li>We do not sell personal information or build advertising profiles from your pet-care records.</li>
        </ul>

        <h2 id="on-device">Information in the app stays on your device</h2>
        <p>
          Furmacy is designed to keep the information you enter — such as pet
          profiles, medications and schedules, dose history, weight and symptom logs,
          photos, scanned labels, and vet documents — on your device by default. We do
          not operate servers that receive or store this pet-care information, and we
          cannot access it.
        </p>
        <p>
          If you subscribe to Furmacy Pro and turn on iCloud sync, your pet-care data is
          synced to your own private iCloud database managed by Apple and tied to your
          Apple Account. We do not have access to that private iCloud data. Sync is off
          by default and can be turned off in Settings.
        </p>

        <h2 id="you-send">Information you send us</h2>
        <p>
          If you choose to contact us (for example, by emailing {site.contactEmail})
          or submit an optional form on our website, we receive the information you
          provide — typically your name, email address, and the contents of your
          message. We use it only to respond to you and to improve Furmacy.
        </p>

        <h2 id="purchases-attribution">Purchases and Apple Ads attribution</h2>
        <p>
          Weekly and annual Furmacy Pro subscriptions are processed by Apple through the
          App Store. Furmacy uses RevenueCat to manage purchase status, validate
          entitlements, and restore access. RevenueCat may receive an anonymous app user
          ID, App Store product identifiers, transaction and receipt data, subscription
          status, trial status, renewal status, and related diagnostics needed to make
          purchases and restores work.
        </p>
        <p>
          Furmacy may also send RevenueCat Apple&rsquo;s standard AdServices attribution
          token so RevenueCat can report whether subscription activity came from Apple
          Ads campaigns. This campaign attribution does not include your pet-care
          records and does not use the advertising identifier (IDFA).
        </p>

        <h2 id="no-tracking">No behavioral tracking or in-app ads</h2>
        <p>
          Our website and app are not built around behavioral tracking. We do not show
          in-app ads, sell personal information, use IDFA, or send your pet-care records
          to third-party analytics or advertising SDKs.
        </p>

        <h2 id="providers">Service providers</h2>
        <p>
          We rely on a small number of providers to operate: Apple distributes the app
          through the App Store, processes purchases, and provides private iCloud sync
          if you enable it; RevenueCat helps manage Pro subscription status and Apple
          Ads attribution reporting; and our email provider helps us receive and respond
          to messages you send us. These providers process information only as needed to
          provide their service.
        </p>

        <h2 id="children">Children&rsquo;s privacy</h2>
        <p>
          Furmacy is intended for adults caring for pets and is not directed to
          children under 13. We do not knowingly collect personal information from
          children.
        </p>

        <h2 id="security">Security</h2>
        <p>
          Because your in-app data stays on your device, its security is tied to your
          device&rsquo;s protections (such as your passcode and device encryption). For
          information you send us by email, we use reasonable measures to protect it,
          though no method of transmission or storage is completely secure.
        </p>

        <h2 id="your-choices">Your choices &amp; rights</h2>
        <p>
          You can remove the information stored in the app at any time by deleting it
          within the app or uninstalling Furmacy. For any information you&rsquo;ve sent
          us directly, you may ask us to access or delete it by emailing{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Depending on
          where you live (for example, under Texas law, the CCPA in California, or the
          GDPR in the EU/UK), you may have additional rights regarding your personal
          information; we&rsquo;ll honor applicable rights for information we actually
          hold.
        </p>

        <h2 id="international">International users</h2>
        <p>
          We operate from the United States. If you contact us from outside the United
          States, you understand that the information you send may be processed in the
          United States.
        </p>

        <h2 id="changes">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we&rsquo;ll
          revise the &ldquo;Last updated&rdquo; date above, and significant changes may
          be highlighted in the app or on our website.
        </p>

        <h2 id="contact">Contact us</h2>
        <p>
          Questions about privacy? Email us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. {site.company}{" "}
          is the entity responsible for this policy.
        </p>
      </LegalPage>
    </>
  );
}
