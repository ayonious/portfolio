"use client";

import { useSiteContent } from "../../components/ContentProvider";
import PageHeader from "../../components/PageHeader";

export default function AiPage() {
  const { pageContent, aiCapabilities, aiTools, aiWork } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={pageContent.ai.title} introduction={pageContent.ai.introduction} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold">{pageContent.ai.workTitle}</h2>
        <div className="mt-6 space-y-4">
          {aiWork.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                {project.scale}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.ai.toolsTitle}</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="border-b border-slate-200 p-5 last:border-b-0 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-6 dark:border-slate-700"
            >
              <h3 className="font-bold">{tool.name}</h3>
              <p className="mt-1 text-slate-600 sm:mt-0 dark:text-slate-300">
                {tool.use}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.ai.capabilitiesTitle}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {aiCapabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
