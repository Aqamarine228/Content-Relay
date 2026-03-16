import { CtaLink } from '@/components/cta-link';
const statItems = [
  { label: 'Platforms', value: '3 live channels' },
  { label: 'Publishing mode', value: 'Scheduled or queued' },
  { label: 'Ideal for', value: 'Creators and lean teams' }
];
export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 px-6 py-10 shadow-card backdrop-blur md:px-10 md:py-14">
      <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-sun/30 blur-3xl" />
      <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-coral/25 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm font-medium text-ocean">
            Built for platform approval and clear product communication
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
              Schedule and Publish Social Media Content from One Dashboard
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/70 md:text-xl">
              Content-Relay helps creators schedule and publish content across TikTok, Instagram and YouTube.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaLink className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean">
              Start Scheduling
            </CtaLink>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-4 text-base font-semibold text-ink transition hover:border-ink/40 hover:bg-white/70">
              See how it works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-card">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/60">Publishing calendar</p>
                  <p className="mt-2 text-2xl font-semibold">This week</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">Auto publish</div>
              </div>
              <div className="mt-5 space-y-3">
                {['TikTok launch clip', 'Instagram reel cutdown', 'YouTube short teaser'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-sm text-white/55">Queued for day {index + 1}</p>
                    </div>
                    <div className="rounded-full bg-sun px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                      Ready
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {statItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
