import Link from 'next/link';
import { CtaLink } from '@/components/cta-link';
export function Footer() {
  return (
    <footer className="rounded-[2rem] border border-ink/10 bg-white/80 px-6 py-8 shadow-card backdrop-blur">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-2xl font-semibold text-ink">Content-Relay</p>
          <p className="max-w-xl text-base leading-7 text-ink/70">
            Product information, platform support details, and legal documents for social media API approval.
          </p>
        </div>
        <CtaLink className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean">
          Launch Content-Relay
        </CtaLink>
      </div>
      <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
        <p>Supported platforms: TikTok, Instagram, YouTube</p>
        <div className="flex items-center gap-5">
          <Link href="/terms" className="transition hover:text-ink">Terms of Service</Link>
          <Link href="/privacy" className="transition hover:text-ink">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
