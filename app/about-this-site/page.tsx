"use client";

import { useSiteContent } from "../../components/ContentProvider";
import PageHeader from "../../components/PageHeader";
import HeadingLink from "../../components/HeadingLink";
import Button from "../../components/Button";

import BrandText from "../../components/BrandText";
import BrandIcon from "../../components/BrandIcon";

export default function AboutThisSitePage() {
  const { aboutSiteContent, majorDependencies } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={aboutSiteContent.title} introduction={aboutSiteContent.introduction} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold">{aboutSiteContent.majorTitle}</h2>
        <ul className="mt-5 border-t border-slate-200 dark:border-slate-700">
          {majorDependencies.map((dependency) => (
            <li
              key={dependency.name}
              className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 dark:border-slate-700"
            >
              <h3 className="font-bold">
                <HeadingLink
                  href={dependency.url}
                  className="gap-2"
                >
                  <BrandIcon name={dependency.name} className="h-5 w-5 shrink-0" />
                  <span>{dependency.name} ↗</span>
                </HeadingLink>
              </h3>
              <div>
                <p className="text-slate-600 dark:text-slate-300">
                  <BrandText text={dependency.description} />
                </p>
                {dependency.action && (
                  <Button href={dependency.action.url} target="_blank" rel="noreferrer" className="mt-4">
                    <BrandText text={dependency.action.label} />
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{aboutSiteContent.deployment.title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.deployment.introduction}
        </p>
        <ul className="mt-5 border-t border-slate-200 dark:border-slate-700">
          {aboutSiteContent.deployment.details.map((detail) => (
            <li
              key={detail.title}
              className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 dark:border-slate-700"
            >
              <h3 className="font-bold">{detail.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">
                {detail.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold">{aboutSiteContent.reuse.title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.reuse.introduction}
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.reuse.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <Button
          href={aboutSiteContent.reuse.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6"
        >
          {aboutSiteContent.reuse.repositoryLabel}
        </Button>
      </section>

      <section className="mt-14 rounded-2xl bg-[var(--accent-soft)] p-6">
        <h2 className="text-2xl font-bold">{aboutSiteContent.creditsTitle}</h2>
        <ul className="mt-4 space-y-3">
          {aboutSiteContent.credits.map((credit) => (
            <li key={credit.url} className="text-slate-700 dark:text-slate-200">
              <span aria-hidden="true" className="mr-2">
                {credit.emoji}
              </span>
              {credit.role}:{" "}
              <HeadingLink href={credit.url}>
                {credit.name}
              </HeadingLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
