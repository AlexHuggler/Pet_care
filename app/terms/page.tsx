import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";
import { breadcrumbLd, webPageLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using the Furmacy app and website. Furmacy is an organizational tool and is not veterinary advice.",
  alternates: { canonical: "/terms" },
};

const TOC = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "license", label: "Your license" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "data", label: "Your data" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "not-vet", label: "Not veterinary advice" },
  { id: "no-warranty", label: "No warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "ip", label: "Intellectual property" },
  { id: "apple", label: "Apple App Store terms" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Terms of Use",
            description: "The terms for using the Furmacy app and website.",
            path: "/terms",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
          ]),
        ]}
      />
      <LegalPage
        title="Terms of Use"
        updated={site.legalEffectiveDate}
        toc={TOC}
        intro={
          <>
            These Terms govern your use of Furmacy. Please read them — and note that{" "}
            <strong className="font-semibold text-text">
              Furmacy is not a substitute for veterinary care
            </strong>
            .
          </>
        }
      >
        <h2 id="acceptance">Acceptance of these terms</h2>
        <p>
          By downloading, accessing, or using the Furmacy app or the website at{" "}
          {site.url} (together, the &ldquo;Service&rdquo;), you agree to these Terms of
          Use. If you do not agree, please do not use the Service. The Service is
          provided by {site.company} (&ldquo;{site.company},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;).
        </p>

        <h2 id="eligibility">Eligibility</h2>
        <p>
          You must be at least 18 years old, or the age of majority where you live, to
          agree to these Terms and use the Service.
        </p>

        <h2 id="license">Your license to use Furmacy</h2>
        <p>
          Subject to these Terms, {site.company} grants you a personal, limited,
          non-exclusive, non-transferable, revocable license to download and use
          Furmacy on Apple-branded devices that you own or control, in accordance with
          the App Store Terms of Service and Usage Rules. This license is for your
          personal, non-commercial use.
        </p>

        <h2 id="subscriptions">Subscriptions and purchases</h2>
        <p>Furmacy Pro is available as weekly and annual auto-renewable subscriptions.</p>
        <ul>
          <li>The annual plan includes a 7-day free trial for new eligible subscribers.</li>
          <li>
            Payment is charged to your Apple Account at confirmation of purchase. For
            the annual plan&rsquo;s free trial, payment is charged when the trial ends
            unless you cancel at least 24 hours before the end of the trial.
          </li>
          <li>
            Subscriptions renew automatically unless cancelled at least 24 hours before
            the end of the current period.
          </li>
          <li>
            You can manage or cancel subscriptions in your App Store account settings;
            deleting the app does not cancel a subscription.
          </li>
          <li>
            Prices are shown in the app before purchase and may change for future
            periods; Apple will notify you as its policies require.
          </li>
          <li>
            All billing, refunds, and payment handling are performed by Apple under its
            terms. To request a refund, use Apple&rsquo;s Report a Problem page.
          </li>
        </ul>

        <h2 id="data">Your data</h2>
        <p>
          Your pet-care data is stored on your device and, if you enable it, in your
          private iCloud database. You are responsible for maintaining backups,
          including before deleting the app or using the in-app delete features.
          Furmacy uses RevenueCat to manage purchase status, but pet names, medication
          details, dose history, notes, photos, scans, documents, and other health
          entries are not sent to RevenueCat. See the{" "}
          <a href="/privacy">Furmacy Privacy Policy</a> for details.
        </p>

        <h2 id="acceptable-use">Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the Service for any unlawful purpose or in violation of these Terms;</li>
          <li>
            copy, modify, distribute, sell, or lease any part of the Service, or
            reverse engineer it except to the limited extent the law permits;
          </li>
          <li>interfere with or disrupt the integrity or performance of the Service;</li>
          <li>attempt to gain unauthorized access to the Service or related systems.</li>
        </ul>

        <h2 id="not-vet">Not veterinary or medical advice</h2>
        <p>
          <strong>
            Furmacy is an organizational tool that helps you track medications,
            routines, and records. It does not provide veterinary, medical, or
            professional advice, diagnosis, or treatment, and it is not a substitute
            for professional veterinary care.
          </strong>{" "}
          Always follow your veterinarian&rsquo;s instructions, and contact your
          veterinarian — or an emergency veterinary service — for any medical concern
          about your pet. Reminders and other features are aids only; you are
          responsible for your pet&rsquo;s care decisions, and you should not rely on
          the Service as your sole means of managing critical care.
        </p>

        <h2 id="no-warranty">No warranties</h2>
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
          without warranties of any kind, whether express or implied, including
          implied warranties of merchantability, fitness for a particular purpose, and
          non-infringement, to the fullest extent permitted by law. We do not warrant
          that the Service will be uninterrupted, timely, secure, or error-free, or
          that reminders will always be delivered.
        </p>

        <h2 id="liability">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {site.company} and its officers,
          members, and affiliates will not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of data, arising
          from or related to your use of (or inability to use) the Service —
          including any missed, delayed, or duplicated dose or reminder. To the extent
          liability cannot be excluded, our total aggregate liability for any claim
          relating to the app is limited to the amount you paid us for the app in the
          twelve months before the claim. Nothing in these Terms excludes liability
          that cannot be excluded under applicable law.
        </p>

        <h2 id="ip">Intellectual property</h2>
        <p>
          Furmacy, the Furmacy name and logo, and all related content and software are
          owned by {site.company} and protected by intellectual-property laws. Except
          for the license granted above, these Terms do not grant you any rights in
          the Service.
        </p>

        <h2 id="apple">Apple App Store terms</h2>
        <p>
          The following applies to your use of Furmacy obtained through the Apple App
          Store:
        </p>
        <ul>
          <li>These Terms are between you and {site.company} only, not with Apple.</li>
          <li>
            Apple&rsquo;s standard Licensed Application End User License Agreement also
            applies where required by Apple. If these Terms conflict with it for
            Apple-required topics, Apple&rsquo;s terms control.
          </li>
          <li>
            Apple has no obligation to provide maintenance or support for the app.
          </li>
          <li>
            Apple is not responsible for addressing any claims relating to the app,
            including product-liability, legal/regulatory, or consumer-protection
            claims.
          </li>
          <li>
            Apple and its subsidiaries are third-party beneficiaries of these Terms and
            may enforce them against you.
          </li>
          <li>
            You represent that you are not located in a country subject to a U.S.
            Government embargo and are not on any U.S. Government restricted-parties
            list, and you will comply with applicable App Store Usage Rules.
          </li>
        </ul>

        <h2 id="termination">Termination</h2>
        <p>
          We may suspend or end your license if you breach these Terms. You can end
          your use at any time by deleting the app. Sections that by their nature
          should survive termination (such as intellectual property, disclaimers, and
          limitation of liability) will survive.
        </p>

        <h2 id="governing-law">Governing law</h2>
        <p>
          These Terms are governed by the laws of {site.jurisdiction}, without regard
          to its conflict-of-laws rules. You agree that the state and federal courts
          located in {site.jurisdiction} will have exclusive jurisdiction over any
          dispute that is not subject to other agreed resolution, to the extent
          permitted by law.
        </p>

        <h2 id="changes">Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we&rsquo;ll revise
          the &ldquo;Last updated&rdquo; date above. Your continued use of the Service
          after changes take effect means you accept the updated Terms.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          Questions about these Terms? Email us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </LegalPage>
    </>
  );
}
