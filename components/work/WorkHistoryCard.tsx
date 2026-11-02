"use client";

import { useSiteContent } from "../ContentProvider";

import HeadingLink from "../HeadingLink";
import BrandIcon from "../BrandIcon";
import BrandText from "../BrandText";
import type { WorkHistoryEntry } from "../../config/workHistory";
import TechnologyTags from "./TechnologyTags";

export default function WorkHistoryCard({ job }: { job: WorkHistoryEntry }) {
  const { linkContent } = useSiteContent();
  return (
    <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-slate-50">
            <BrandIcon name={job.company} className="h-6 w-6 shrink-0" />
            {job.url ? (
              <HeadingLink href={job.url} tooltip={linkContent.openWebsite}>
                {job.company}
              </HeadingLink>
            ) : job.company}
          </h2>
          <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">{job.role}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
        </div>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{job.start} – {job.end}</p>
      </div>
      {job.technologies && <TechnologyTags technologies={job.technologies} />}
      <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
        {job.highlights.map((highlight) => <li key={highlight}><BrandText text={highlight} /></li>)}
      </ul>
    </article>
  );
}
