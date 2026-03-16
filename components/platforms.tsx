const platforms = [
  {
    name: 'TikTok',
    detail: 'Short-form video scheduling and review-ready product messaging.',
    accent: 'bg-[#111111] text-white'
  },
  {
    name: 'Instagram',
    detail: 'Feed, reels, and campaign planning with a clear publishing workflow.',
    accent: 'bg-[#f24e74] text-white'
  },
  {
    name: 'YouTube',
    detail: 'Support for video publishing queues and creator content distribution.',
    accent: 'bg-[#ff3d00] text-white'
  }
];
export function Platforms() {
  return (
    <section id="platforms" className="rounded-[2rem] border border-ink/10 bg-[#fff7f0] px-6 py-8 md:px-8 md:py-10">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Supported Platforms</p>
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">Built around the channels that matter for creator publishing.</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {platforms.map((platform) => (
          <article key={platform.name} className="rounded-[1.5rem] bg-white p-6 shadow-card">
            <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${platform.accent}`}>
              {platform.name}
            </div>
            <p className="mt-4 text-base leading-7 text-ink/70">{platform.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
