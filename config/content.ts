import { siteMetadata, homeContent, sidebarContent, aboutContent, pageContent, aboutSiteContent, linkContent, tagContent } from "./siteContent";
import { otherBooks, programmingBooks } from "./books";
import { openSourceProjectsConfig } from "./projects";
import { skillGroups } from "./skills";
import { aiCapabilities, aiTools, aiWork } from "./ai";
import { workHistory } from "./workHistory";
import { workProjects } from "./workProjects";
import { certifications } from "./certifications";
import { featuredBlogPosts } from "./blogPosts";
import { majorDependencies } from "./siteCredits";

export const defaultContent = {
  siteMetadata,
  homeContent,
  sidebarContent,
  aboutContent,
  pageContent,
  aboutSiteContent,
  linkContent,
  tagContent,
  otherBooks,
  programmingBooks,
  openSourceProjectsConfig,
  skillGroups,
  aiCapabilities,
  aiTools,
  aiWork,
  workHistory,
  workProjects,
  certifications,
  featuredBlogPosts,
  majorDependencies,
};
export type SiteContent = typeof defaultContent;
export type ContentOverrides<T> = T extends readonly unknown[] ? T : T extends object ? { [K in keyof T]?: ContentOverrides<T[K]> } : T;

export function mergeContent<T>(base: T, override?: ContentOverrides<T>): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || typeof base !== "object" || base === null) return override as T;
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(override as object)) {
    if (value !== undefined) result[key] = mergeContent(result[key], value);
  }
  return result as T;
}
