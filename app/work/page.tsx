"use client";

import { useSiteContent } from "../../components/ContentProvider";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";
import WorkHistoryCard from "../../components/work/WorkHistoryCard";
import WorkProjectCard from "../../components/work/WorkProjectCard";

export default function WorkHistoryPage() {
  const { pageContent, workHistory, workProjects } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section>
        <PageHeader title={pageContent.work.title} introduction={pageContent.work.introduction} />
        <div className="mt-10 space-y-6">
          {workHistory.map((job) => <ScrollReveal key={`${job.company}-${job.start}`}><WorkHistoryCard job={job} /></ScrollReveal>)}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-slate-50">{pageContent.work.projectsTitle}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{pageContent.work.projectsIntroduction}</p>
        <div className="mt-8 space-y-6">
          {workProjects.map((project) => (
            <ScrollReveal key={project.title}><WorkProjectCard project={project} scaleTitle={pageContent.work.scaleTitle} /></ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
