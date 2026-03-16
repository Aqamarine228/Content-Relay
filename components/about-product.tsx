import { CtaLink } from '@/components/cta-link';
export function AboutProduct() {
  return (
    <section className="grid gap-6 rounded-[2rem] bg-ink px-6 py-8 text-white shadow-card md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-10">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sun">About Product</p>
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">Content-Relay is a lightweight scheduling platform made for creators and small teams who need reliable multi-channel publishing.</h2>
        <p className="max-w-2xl text-base leading-7 text-white/70">
          This website is intentionally limited to product information and legal documentation. Login and application functionality live on the external Content-Relay app domain.
        </p>
      </div>
      <CtaLink className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist">
        Open the app
      </CtaLink>
    </section>
  );
}
