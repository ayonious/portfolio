"use client";

import { useSiteContent } from "../ContentProvider";
import type { DownloadStat } from "../../config/projects";

import MetricBadge from "../MetricBadge";

export default function NpmDownloads({ stat }: { stat: DownloadStat }) {
  const { pageContent } = useSiteContent();
  return (
    <MetricBadge
      icon={stat.icon}
      symbol="↓"
      label={`${stat.label}, ${stat.period}`}
      href={stat.url}
      linkLabel={stat.url.includes("npmjs.com") ? pageContent.projects.openInNpm : pageContent.projects.openLink}
    >
      {stat.label}
    </MetricBadge>
  );
}
