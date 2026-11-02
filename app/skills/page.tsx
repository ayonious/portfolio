"use client";

import { useSiteContent } from "../../components/ContentProvider";
import PageHeader from "../../components/PageHeader";

import SkillGroup from "../../components/skills/SkillGroup";

export default function SkillsPage() {
  const { pageContent, skillGroups } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={pageContent.skills.title} introduction={pageContent.skills.introduction} />

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
      </section>
    </div>
  );
}
