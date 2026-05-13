import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content-Relay Privacy Policy',
  description: 'Privacy Policy for the Content-Relay social media scheduling application and public marketing site.'
};

const LAST_UPDATED = 'May 13, 2026';
const CONTACT_EMAIL = 'autotraffic1337@gmail.com';

const sections = [
  {
    title: '1. Scope of this Policy',
    content:
      'This Privacy Policy explains how Content-Relay ("Content-Relay", "we", "us", "our") collects, uses, stores, shares, and protects information when you visit this public marketing website or use the Content-Relay social media scheduling application (the "Service"). By using the Service you agree to the practices described here. If you do not agree, please do not use the Service.'
  },
  {
    title: '2. Information We Collect',
    content:
      'Account information you provide directly, such as name, email address, password hash, organization, and billing details where applicable. Connected platform information returned by TikTok, Instagram, and YouTube when you link an account, including your platform user ID, display name, avatar, username/handle, account type, public profile metadata, and OAuth access and refresh tokens. Content you upload or schedule, including video files, images, thumbnails, captions, titles, descriptions, hashtags, mentions, privacy/disclosure settings, and scheduling metadata. Publishing activity such as post status, platform response codes, error messages, and timestamps. Usage and device data including IP address, browser type, operating system, referring URLs, pages viewed, and interaction events collected through cookies and similar technologies. Support communications you send to us.'
  },
  {
    title: '3. How We Use Information',
    content:
      'We use the information above only to: (a) operate, maintain, and improve the Service; (b) authenticate you and keep your connected TikTok, Instagram, and YouTube accounts linked; (c) prepare, schedule, upload, and publish the content you explicitly submit through the Service to the destination platforms you select; (d) display the status of your scheduled and published posts; (e) provide customer support, respond to inquiries, and send service-related notices; (f) detect, prevent, and address fraud, abuse, security incidents, and violations of our Terms of Service; and (g) comply with legal obligations. We do not use content or information obtained through the TikTok Content Posting API for advertising, profiling, training generative AI/ML models, resale, or any purpose other than delivering the publishing feature you requested.'
  },
  {
    title: '4. TikTok, Instagram, and YouTube Data',
    content:
      'When you connect a TikTok account, Content-Relay uses the TikTok Login Kit and the TikTok Content Posting API. We request only the scopes required to publish on your behalf and to read the minimum profile information necessary to display your connected account in the dashboard. Content uploaded to TikTok through Content-Relay is sent directly to TikTok using the official API and is governed by the TikTok Terms of Service, TikTok Privacy Policy, and TikTok Community Guidelines, in addition to this Policy. The same principle applies to Instagram (via the Instagram Graph API and Meta Platform Terms) and YouTube (via the YouTube API Services, the Google Privacy Policy at https://policies.google.com/privacy, and the YouTube Terms of Service at https://www.youtube.com/t/terms). You can revoke our access to any connected platform at any time from the Content-Relay dashboard or directly from your TikTok, Instagram, or YouTube account settings; revocation immediately stops further API calls on your behalf.'
  },
  {
    title: '5. How We Share Information',
    content:
      'We do not sell or rent personal information. We share information only with: (a) the destination platform you have selected (TikTok, Instagram, or YouTube), and only the content and metadata required to publish your post; (b) vetted infrastructure subprocessors that host, store, transmit, or monitor the Service under written confidentiality and data-protection obligations; (c) professional advisors and authorities when required by law, subpoena, or to protect rights, safety, and property; and (d) successors in a merger, acquisition, or asset sale, subject to this Policy.'
  },
  {
    title: '6. Data Retention and Deletion',
    content:
      'We retain account data while your account is active. Uploaded media is retained only as long as needed to deliver scheduled or queued posts, after which it is deleted from our publishing storage (typically within 30 days of successful publication or cancellation). OAuth tokens are retained until you disconnect the platform, revoke access, or delete your account. You may delete your account at any time by emailing ' +
      CONTACT_EMAIL +
      '; upon deletion we will remove your personal data within 30 days, except where retention is required by law or for the establishment, exercise, or defense of legal claims. Aggregated, de-identified data that can no longer be linked to you may be retained indefinitely.'
  },
  {
    title: '7. Your Rights and Choices',
    content:
      'Depending on where you live, you may have the right to access, correct, port, restrict, object to, or delete personal information we hold about you, and the right to withdraw consent at any time. You may also lodge a complaint with your local data protection authority. To exercise any of these rights, contact us at ' +
      CONTACT_EMAIL +
      '. We will verify your request and respond within the timeframe required by applicable law. You can disconnect any TikTok, Instagram, or YouTube account directly from the Content-Relay dashboard at any time.'
  },
  {
    title: '8. Security',
    content:
      'We apply administrative, technical, and organizational safeguards designed to protect personal information, including encryption of OAuth tokens at rest, TLS in transit, scoped access controls, audit logging, and least-privilege engineering practices. No system is perfectly secure, and you are responsible for keeping your Content-Relay password and connected-platform credentials confidential. If we become aware of a security incident affecting your personal information, we will notify you and the relevant authorities as required by law.'
  },
  {
    title: '9. Cookies and Analytics',
    content:
      'The public Content-Relay website uses strictly necessary cookies to operate and, where you consent, analytics cookies to understand aggregate usage. You can control cookies through your browser settings. We do not use third-party advertising cookies on this site.'
  },
  {
    title: '10. Children’s Privacy',
    content:
      'The Service is not directed to children under 13, and we do not knowingly collect personal information from anyone under 13. Where local law sets a higher minimum age for processing personal data or for using TikTok (for example, the minimum age required by TikTok in your country), that higher age applies. If you believe a child has provided personal information to us, please contact ' +
      CONTACT_EMAIL +
      ' and we will delete it.'
  },
  {
    title: '11. International Transfers',
    content:
      'Content-Relay operates on cloud infrastructure that may store and process data outside of your country of residence. Where required by applicable law (including the GDPR and UK GDPR), we use appropriate safeguards such as Standard Contractual Clauses to protect cross-border transfers.'
  },
  {
    title: '12. Changes to this Policy',
    content:
      'We may update this Policy from time to time. Material changes will be communicated through the Service or by email before they take effect. The "Last updated" date below indicates when this Policy was last revised. Continued use of the Service after an update constitutes acceptance of the updated Policy.'
  },
  {
    title: '13. Contact Us',
    content:
      'For any questions, requests, or complaints related to this Policy or to your personal information, contact Content-Relay at ' +
      CONTACT_EMAIL +
      '. We will respond within the timeframe required by applicable law.'
  }
];

export default function PrivacyPage() {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/85 px-6 py-8 shadow-card backdrop-blur md:px-8 md:py-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Privacy Policy</p>
        <h1 className="text-4xl font-semibold text-ink">How Content-Relay handles website, integration, and publishing data.</h1>
        <p className="text-lg leading-8 text-ink/70">
          This Privacy Policy applies to the Content-Relay application and the public Content-Relay website used to describe its social
          media scheduling service. It covers data collected through TikTok, Instagram, and YouTube integrations.
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
        For service terms, review <Link className="font-medium text-ocean hover:text-ink" href="/terms">Terms of Service</Link>.
      </div>
    </section>
  );
}
