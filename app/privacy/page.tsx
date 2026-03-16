import Link from 'next/link';
const sections = [
  {
    title: 'Data Collection',
    content: 'Content-Relay collects account, scheduling, and content metadata needed to operate the external application and explain product behavior on this public website.'
  },
  {
    title: 'OAuth Tokens',
    content: 'When users connect supported platforms, OAuth tokens and related authorization credentials are processed only as needed to maintain platform connections and perform requested publishing actions.'
  },
  {
    title: 'Data Usage',
    content: 'Collected information is used to support scheduling workflows, improve product reliability, and provide users with the publishing capabilities they request across connected channels.'
  },
  {
    title: 'Third Party APIs',
    content: 'Content-Relay may interact with the TikTok API, Instagram Graph API, and YouTube Data API. Data shared with those services is governed both by this policy and the applicable third-party platform terms.'
  },
  {
    title: 'Security',
    content: 'We apply reasonable administrative and technical safeguards to protect connected account data and platform credentials, while users remain responsible for securing their own access devices and passwords.'
  }
];
export default function PrivacyPage() {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/85 px-6 py-8 shadow-card backdrop-blur md:px-8 md:py-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Privacy Policy</p>
        <h1 className="text-4xl font-semibold text-ink">How Content-Relay handles website, integration, and publishing data.</h1>
        <p className="text-lg leading-8 text-ink/70">
          This policy describes data handling for the public site and the connected external application used for social media scheduling.
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
        For service terms, review <Link className="font-medium text-ocean hover:text-ink" href="/terms">Terms of Service</Link>.
      </div>
    </section>
  );
}
