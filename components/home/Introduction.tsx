import { homeContent } from "../../config/siteContent";

export default function Introduction() {
  return (
    <section className="max-w-2xl py-8 sm:py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
        {homeContent.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
        {homeContent.title}
      </h1>
      <p className="mt-6 text-xl leading-8 text-slate-700 dark:text-slate-200">
        {homeContent.introduction}
      </p>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {homeContent.currentWork}
      </p>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {homeContent.openSource}
      </p>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {homeContent.outsideWork}
      </p>
    </section>
  );
}
