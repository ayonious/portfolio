"use client";

import { useSiteContent } from "../ContentProvider";
import HeadingLink from "../HeadingLink";
import Button from "../Button";
import TagList from "../TagList";

import ProjectStars from "./ProjectStars";
import NpmDownloads from "./NpmDownloads";
import type { OpenSourceProject } from "../../config/projects";
import { getProjectTechnologies } from "./projectUtils";

export default function ProjectCard({ project }: { project: OpenSourceProject }) {
  const { pageContent, tagContent } = useSiteContent();
  const technologies = getProjectTechnologies(project);
  const linkLabel = project.url.includes("github.com") ? pageContent.projects.openOnGitHub : pageContent.projects.openProject;

  return (
    <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-50">
          <HeadingLink href={project.url} tooltip={linkLabel}>
            {project.name}
          </HeadingLink>
        </h3>
        <ProjectStars stars={project.stars} url={project.url} />
      </div>
      {project.downloadStat && <div className="mt-3"><NpmDownloads stat={project.downloadStat} /></div>}
      <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
      {technologies.length > 0 && (
        <TagList items={technologies} label={tagContent.technologiesUsed} className="mt-4" />
      )}
      {project.demoUrl && project.demoLabel && (
        <Button href={project.demoUrl} target="_blank" rel="noreferrer" className="relative z-20 mt-5">
          {project.demoLabel} ↗
        </Button>
      )}
    </article>
  );
}
