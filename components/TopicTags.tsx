"use client";

import { useSiteContent } from "./ContentProvider";
import TagList from "./TagList";

export default function TopicTags({ tags, title }: { tags: string[]; title: string }) {
  const { tagContent } = useSiteContent();
  return <TagList items={tags} label={`${tagContent.topicsPrefix} ${title}`} className="mt-2" />;
}
