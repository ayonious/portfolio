"use client";

import { useSiteContent } from "../ContentProvider";
import TagList from "../TagList";

export default function TechnologyTags({ technologies }: { technologies: string[] }) {
  const { tagContent } = useSiteContent();
  return <TagList items={technologies} label={tagContent.technologies} variant="outline" className="mt-5" />;
}
