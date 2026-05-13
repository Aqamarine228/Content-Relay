import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content-Relay Terms of Service',
  description: 'Terms of Service for the Content-Relay social media scheduling application and public marketing site.'
};

const LAST_UPDATED = 'May 13, 2026';
const CONTACT_EMAIL = 'autotraffic1337@gmail.com';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'These Terms of Service (the "Terms") govern your access to and use of the Content-Relay website and the Content-Relay social media scheduling application (together, the "Service"), provided by Content-Relay ("Content-Relay", "we", "us", "our"). By creating an account, connecting a TikTok, Instagram, or YouTube account, or otherwise using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, you must not use the Service.'
  },
  {
    title: '2. Eligibility',
    content:
      'You must be at least 13 years old, or the higher minimum age required in your country (including any minimum age required to hold a TikTok account, an Instagram account, or a YouTube/Google account), to use the Service. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.'
  },
  {
    title: '3. Accounts and Connected Platforms',
    content:
      'You are responsible for the accuracy of the information you provide, for keeping your Content-Relay password confidential, and for all activity that occurs under your account. When you connect a TikTok, Instagram, or YouTube account, you authorize Content-Relay to use the official platform APIs (including the TikTok Login Kit and TikTok Content Posting API, the Instagram Graph API, and the YouTube Data API) to read the minimum profile information required to operate the Service and to upload, schedule, and publish the content you submit. You can revoke this authorization at any time from the Content-Relay dashboard or from the destination platform’s settings; revocation immediately stops further publishing on your behalf.'
  },
  {
    title: '4. Third-Party Platform Terms',
    content:
      'The Service interoperates with third-party platforms. Your use of those platforms through Content-Relay is also subject to their terms and policies, which you must comply with at all times. These include, without limitation: the TikTok Terms of Service, the TikTok Community Guidelines, the TikTok Developer Terms of Service, the Meta Terms of Service and Instagram Community Guidelines, and the YouTube Terms of Service together with the Google Privacy Policy. If a conflict arises between these Terms and a third-party platform’s rules with respect to content posted on that platform, the third-party platform’s rules govern that content on that platform.'
  },
  {
    title: '5. User Content and License',
    content:
      'You retain all rights and ownership in the content you upload, schedule, or publish through the Service ("User Content"). You represent and warrant that you own or have obtained all rights, licenses, consents, and permissions necessary to upload, schedule, and publish your User Content on the destination platforms, including rights in any music, footage, likenesses, trademarks, and other materials it contains. You grant Content-Relay a limited, worldwide, royalty-free license to host, process, transmit, transcode, and display your User Content solely as needed to deliver the Service and to publish that content to the platforms you designate. We claim no other rights in your User Content.'
  },
  {
    title: '6. Acceptable Use',
    content:
      'You agree not to use the Service to: (a) upload, schedule, or publish content that violates law, infringes intellectual property, or violates the rules of any destination platform, including the TikTok Community Guidelines; (b) post spam, scams, malware, deceptive content, sexually explicit content involving minors, content promoting violence or hate, or content that misleads users about its source; (c) impersonate any person or entity or misrepresent your affiliation; (d) interfere with, probe, or circumvent the security or rate limits of the Service or any connected platform; (e) reverse engineer, scrape, or build a competing product from the Service; (f) use the Service to publish content on behalf of a TikTok, Instagram, or YouTube account without the account holder’s clear authorization; or (g) use the Service to violate any third-party rights. We may remove content, suspend publishing, or terminate accounts that violate this section.'
  },
  {
    title: '7. Content Disclosure and Compliance',
    content:
      'When publishing to TikTok through the Service, you are responsible for setting the correct privacy level, disclosure settings (such as commercial content, branded content, or AI-generated content disclosures), and any other metadata required by TikTok’s policies and applicable law. Content-Relay surfaces these controls but does not edit, moderate, or change the substance of your User Content. You acknowledge that TikTok, Instagram, and YouTube each independently review, rank, and moderate published content, and Content-Relay does not guarantee that any post will be accepted, distributed, or remain available on a destination platform.'
  },
  {
    title: '8. Service Availability and Changes',
    content:
      'We work to keep the Service reliable, but we provide the Service on an "as is" and "as available" basis. We may add, change, suspend, or discontinue features at any time, including to comply with third-party platform requirements. Scheduled posts depend on the availability and acceptance of the destination platform’s APIs, which we do not control.'
  },
  {
    title: '9. Fees',
    content:
      'If a paid plan applies to your use of the Service, the fees, billing cycle, and refund rules will be presented to you before you subscribe. Failure to pay may result in suspension or termination of paid features.'
  },
  {
    title: '10. Termination',
    content:
      'You may stop using the Service and delete your account at any time by following the instructions in the dashboard or by contacting ' +
      CONTACT_EMAIL +
      '. We may suspend or terminate your access if you breach these Terms, create risk or legal exposure for us, or if a connected platform requires us to do so. On termination, the rights granted to you under these Terms end, and we will delete or anonymize your personal data as described in the Privacy Policy.'
  },
  {
    title: '11. Disclaimers',
    content:
      'To the maximum extent permitted by law, the Service is provided without warranties of any kind, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, or uninterrupted operation. We do not warrant that any post will be successfully published, retained, ranked, or monetized by TikTok, Instagram, or YouTube.'
  },
  {
    title: '12. Limitation of Liability',
    content:
      'To the maximum extent permitted by law, Content-Relay and its officers, employees, and suppliers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or related to the Service, even if advised of the possibility of such damages. Our aggregate liability for any claim arising out of these Terms or the Service is limited to the greater of (a) the amount you paid Content-Relay in the twelve months preceding the event giving rise to the claim, or (b) USD 100.'
  },
  {
    title: '13. Indemnification',
    content:
      'You agree to defend, indemnify, and hold harmless Content-Relay from and against any claims, damages, liabilities, and expenses (including reasonable legal fees) arising out of or related to your User Content, your use of the Service, your violation of these Terms, or your violation of any third-party right, including any third-party platform terms.'
  },
  {
    title: '14. Governing Law and Disputes',
    content:
      'These Terms are governed by the laws of the jurisdiction in which Content-Relay is established, without regard to conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Service will be brought exclusively in the competent courts of that jurisdiction, except that either party may seek injunctive relief in any court of competent jurisdiction to protect its intellectual property rights.'
  },
  {
    title: '15. Changes to these Terms',
    content:
      'We may update these Terms from time to time. Material changes will be communicated through the Service or by email before they take effect, and the "Last updated" date below will be revised. Continued use of the Service after an update constitutes acceptance of the updated Terms.'
  },
  {
    title: '16. Contact',
    content:
      'For questions about these Terms or the Service, contact Content-Relay at ' + CONTACT_EMAIL + '.'
  }
];

export default function TermsPage() {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/85 px-6 py-8 shadow-card backdrop-blur md:px-8 md:py-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Terms of Service</p>
        <h1 className="text-4xl font-semibold text-ink">Terms for the public Content-Relay website and connected publishing platform.</h1>
        <p className="text-lg leading-8 text-ink/70">
          These Terms of Service apply to the Content-Relay application and the public Content-Relay website, including connected
          publishing workflows for TikTok, Instagram, and YouTube.
        </p>
        <p className="text-sm text-ink/60">Last updated: {LAST_UPDATED}</p>
      </div>
      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.5rem] border border-ink/10 bg-mist/50 p-6">
            <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-ink/75">{section.content}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-sm text-ink/60">
        Need the policy companion as well? Visit <Link className="font-medium text-ocean hover:text-ink" href="/privacy">Privacy Policy</Link>.
      </div>
    </section>
  );
}
