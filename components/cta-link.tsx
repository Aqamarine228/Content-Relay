import type { ReactNode } from 'react';
import { getAppUrl } from '@/lib/app-url';
type CtaLinkProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};
export function CtaLink({ children, className = '', label = 'Open Content-Relay app' }: CtaLinkProps) {
  const href = getAppUrl();
  return (
    <a href={href} aria-label={label} className={className}>
      {children}
    </a>
  );
}
