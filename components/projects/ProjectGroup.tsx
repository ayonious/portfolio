import HeadingLink from "../HeadingLink";
import Button from "../Button";
import BrandIcon, { brandNames } from "../BrandIcon";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "../ScrollReveal";
import ProjectStars from "./ProjectStars";
import NpmDownloads from "./NpmDownloads";
import { getProjectTechnologies } from "./projectUtils";
import type { DownloadStat, OpenSourceProject } from "../../config/projects";
import { pageContent } from "../../config/siteContent";

export type ProjectGroupProps = {
  label: string;
  description?: string;
  downloadStat?: DownloadStat;
  limit?: number;
  onlyPinned?: boolean;
  projects: OpenSourceProject[];
  showStats?: boolean;
  view?: "cards" | "list";
  url?: string;
};

export default function ProjectGroup({ label, limit, onlyPinned, projects, description, downloadStat, showStats = true, view = "cards", url }: ProjectGroupProps) {
  const filteredProjects = onlyPinned ? projects.filter((project) => project.pinned) : projects;
  const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  const totalStars = visibleProjects.reduce((total, project) => total + project.stars, 0);

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{label}</h2>
        {url && <Button href={url} target="_blank" rel="noreferrer">{pageContent.projects.viewOnGitHub}</Button>}
      </div>
      {description && <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>}
      {showStats && (
        <p className="mt-2 flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300">
          <span>{visibleProjects.length} projects</span>
          {totalStars > 0 && <><span aria-hidden="true">·</span><ProjectStars stars={totalStars} url={url} /></>}
          {downloadStat && (
            <>
              <span aria-hidden="true">·</span>
              <NpmDownloads stat={downloadStat} />
            </>
          )}
        </p>
      )}
      {view === "list" ? (
        <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          {visibleProjects.map((project) => {
            const technologies = getProjectTechnologies(project);
            const linkLabel = project.url.includes("github.com") ? "Open in GitHub" : "Open project";
            return (
              <ScrollReveal as="li" key={project.url} className="flex min-w-0 items-center gap-3 py-2.5 text-sm">
                <HeadingLink href={project.url} tooltip={linkLabel} className="min-w-0 font-semibold">
                  <span className="truncate">{project.name}</span>
                </HeadingLink>
                <ProjectStars stars={project.stars} url={project.url} />
                {technologies.length > 0 && (
                  <span className="ml-auto hidden shrink-0 items-center gap-2 sm:inline-flex" aria-label="Technologies used">
                    {technologies.map((technology) => (
                      <span key={technology} title={technology} className="inline-flex items-center">
                        <BrandIcon name={technology} className="h-[1.05rem] w-[1.05rem]" />
                        <span className={brandNames.includes(technology) ? "sr-only" : "text-xs text-slate-500 dark:text-slate-400"}>{technology}</span>
                      </span>
                    ))}
                  </span>
                )}
                {project.demoUrl && project.demoLabel && (
                  <Button href={project.demoUrl} target="_blank" rel="noreferrer" className="relative z-20 shrink-0">{project.demoLabel} ↗</Button>
                )}
              </ScrollReveal>
            );
          })}
        </ul>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visibleProjects.map((project, index) => <ScrollReveal key={project.url} delay={(index % 2) * 80} className="relative z-0 hover:z-20 focus-within:z-20"><ProjectCard project={project} /></ScrollReveal>)}
        </div>
      )}
    </section>
  );
}
