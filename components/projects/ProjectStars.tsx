"use client";

import { useSiteContent } from "../ContentProvider";

import MetricBadge from "../MetricBadge";

export default function ProjectStars({ stars, url }: { stars: number; url?: string }) {
  const { pageContent } = useSiteContent();
  if (stars <= 0) return null;

  return (
    <MetricBadge icon="GitHub" symbol="★" label={`${stars} GitHub stars`} href={url} linkLabel={pageContent.projects.openOnGitHub}>
      {stars}
    </MetricBadge>
  );
}
