const features = [
  {
    title: 'Multi Platform Publishing',
    description: 'Prepare one campaign view and publish scheduled content across TikTok, Instagram, and YouTube.',
    icon: 'MP'
  },
  {
    title: 'Smart Scheduling',
    description: 'Queue content in advance so creators can keep a consistent cadence without manual posting windows.',
    icon: 'SS'
  },
  {
    title: 'Media Management',
    description: 'Organize assets, captions, and post timing in one lightweight workflow built for fast-moving teams.',
    icon: 'MM'
  },
  {
    title: 'Analytics',
    description: 'Review post performance trends and understand what content deserves another publishing cycle.',
    icon: 'AN'
  }
];
export function Features() {
  return (
    <section id="features" className="space-y-6">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Features</p>
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">A compact publishing workflow that still feels deliberate.</h2>
        <p className="text-lg leading-8 text-ink/70">
          Content-Relay focuses on the practical parts of social publishing: planning, scheduling, and getting content out the door.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-[1.75rem] border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white">
              {feature.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">{feature.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink/70">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
