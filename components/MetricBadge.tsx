import type { ReactNode } from "react";
import BrandIcon from "./BrandIcon";

type MetricBadgeProps = {
  icon: string;
  label: string;
  children: ReactNode;
  symbol?: string;
  href?: string;
  linkLabel?: string;
};

export default function MetricBadge({ icon, label, children, symbol, href, linkLabel }: MetricBadgeProps) {
  const badge = (
    <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-2 py-0.5 text-sm font-semibold text-[var(--accent)]" aria-label={label}>
      <BrandIcon name={icon} className="h-[1.05rem] w-[1.05rem]" />
      {symbol && <span aria-hidden="true">{symbol}</span>}
      {children}
    </span>
  );

  if (!href) return badge;

  return (
    <a href={href} target="_blank" rel="noreferrer" title={linkLabel} className="hover-lift group relative z-0 inline-flex shrink-0 cursor-pointer rounded-full no-underline hover:z-40 focus-visible:z-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
      {badge}
      {linkLabel && (
        <span aria-hidden="true" className="sidebar-tooltip absolute bottom-full left-0 z-50 mb-2 w-max group-hover:opacity-100 group-focus-visible:opacity-100">
          {linkLabel}
        </span>
      )}
    </a>
  );
}
