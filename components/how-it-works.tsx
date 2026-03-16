const steps = [
  {
    step: '01',
    title: 'Prepare your post plan',
    description: 'Map out captions, assets, and publishing windows for each platform from a single workflow.'
  },
  {
    step: '02',
    title: 'Schedule content in advance',
    description: 'Assign dates and times so recurring content pipelines stay on track without manual follow-up.'
  },
  {
    step: '03',
    title: 'Publish through the external app',
    description: 'Every CTA on this site routes users to the hosted Content-Relay application for active publishing.'
  }
];
export function HowItWorks() {
  return (
    <section id="how-it-works" className="space-y-6">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">How It Works</p>
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">Keep publishing predictable without building a heavy control panel here.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((item) => (
          <article key={item.step} className="rounded-[1.75rem] border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur">
            <p className="text-sm font-semibold tracking-[0.24em] text-coral">{item.step}</p>
            <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
