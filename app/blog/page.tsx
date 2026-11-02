"use client";

import { useSiteContent } from "../../components/ContentProvider";
import Button from "../../components/Button";
import HeadingLink from "../../components/HeadingLink";

export default function BlogPage() {
  const { pageContent, featuredBlogPosts } = useSiteContent();
  return (
    <section className="max-w-3xl py-8 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
        {pageContent.blog.title}
      </h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
        {pageContent.blog.introduction}
      </p>

      <ol className="mt-10 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
        {featuredBlogPosts.map((post, index) => (
          <li key={post.url} className="flex gap-4 py-6">
            <span className="mt-1 font-mono text-sm font-semibold text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-950 dark:text-slate-50">
                <HeadingLink href={post.url}>
                  {post.title} ↗
                </HeadingLink>
              </h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                {post.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Button
        href={pageContent.blog.url}
        target="_blank"
        rel="noreferrer"
        className="mt-8"
      >
        {pageContent.blog.linkLabel}
      </Button>
    </section>
  );
}
