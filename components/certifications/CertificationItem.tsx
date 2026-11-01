import HeadingLink from "../HeadingLink";
import type { Certification } from "../../config/certifications";
import TopicTags from "../TopicTags";

export default function CertificationItem({ certification, completedLabel, dateLabel, resultLabel }: { certification: Certification; completedLabel: string; dateLabel: string; resultLabel: string }) {
  return (
    <article className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 py-4">
      <div className="min-w-0 flex-1 basis-64">
        <h3 className="text-base font-semibold">
          {certification.url ? <HeadingLink
            href={certification.url}
          >
            {certification.name} <span aria-hidden="true">↗</span>
          </HeadingLink> : certification.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{certification.issuer}</p>
        {certification.issued !== completedLabel && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{dateLabel} {certification.issued}</p>}
        {certification.result && <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{resultLabel}: {certification.result}</p>}
        {certification.description && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{certification.description}</p>}
        {certification.tags && <TopicTags tags={certification.tags} title={certification.name} />}
      </div>
      <div className="shrink-0">
        <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--accent)]">{completedLabel}</span>
      </div>
    </article>
  );
}
