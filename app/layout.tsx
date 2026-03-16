import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { CtaLink } from '@/components/cta-link';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'Content-Relay — Social Media Scheduling Platform',
    template: '%s | Content-Relay'
  },
  description: 'Schedule posts to TikTok, Instagram and YouTube from one dashboard.'
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-4 py-6 md:px-6 md:py-8">
          <header className="sticky top-4 z-20 rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-lg backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="text-lg font-semibold tracking-[0.08em] text-ink">
                Content-Relay
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-ink/75">
                <a href="/#features" className="transition hover:text-ink">Features</a>
                <a href="/#platforms" className="transition hover:text-ink">Platforms</a>
                <a href="/#how-it-works" className="transition hover:text-ink">How it works</a>
                <Link href="/terms" className="transition hover:text-ink">Terms</Link>
                <Link href="/privacy" className="transition hover:text-ink">Privacy</Link>
                <CtaLink className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-white transition hover:bg-ocean">
                  Go to app
                </CtaLink>
              </div>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
