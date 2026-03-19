import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content-Relay Terms of Service',
  description: 'Terms of Service for the Content-Relay social media scheduling application and public marketing site.'
};
const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing this website or the external Content-Relay application, you agree to these Terms of Service and to use the service only for lawful business or creator publishing purposes.'
  },
  {
    title: 'Platform Usage',
    content: 'Content-Relay is designed to help users schedule and publish content for supported platforms, including TikTok, Instagram, and YouTube. Users are responsible for following each platform\'s rules, developer terms, and community guidelines.'
  },
  {
    title: 'API Integrations',
    content: 'Platform connectivity may rely on approved API integrations, including the TikTok Content Posting API, Instagram Graph API, and YouTube Data API. Access to these integrations is subject to each provider\'s approval and technical limitations.'
  },
  {
    title: 'User Responsibilities',
    content: 'Users must maintain accurate account information, secure access credentials, and ensure they have the rights to upload, schedule, and publish all content managed through Content-Relay.'
  },
  {
    title: 'Content Ownership',
    content: 'Users retain ownership of the content they create and publish. By using the service, users grant only the permissions necessary for scheduling, processing, and delivering that content to connected platforms.'
  },
  {
    title: 'Liability Disclaimer',
    content: 'Content-Relay provides the site and external application on an as-available basis. We do not guarantee uninterrupted platform availability, posting success, or third-party API uptime, and we limit liability to the fullest extent permitted by law.'
  }
];
export default function TermsPage() {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/85 px-6 py-8 shadow-card backdrop-blur md:px-8 md:py-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Terms of Service</p>
        <h1 className="text-4xl font-semibold text-ink">Terms for the public Content-Relay website and connected publishing platform.</h1>
        <p className="text-lg leading-8 text-ink/70">
          These Terms of Service apply to the Content-Relay app and the public Content-Relay website, including review materials and connected publishing workflows.
        </p>
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
