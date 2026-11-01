"use client";

import { useSiteContent } from "../ContentProvider";

import HeadingLink from "../HeadingLink";
import type { Book } from "../../config/books";
import TopicTags from "../TopicTags";

export default function BookList({ books }: { books: Book[] }) {
  const { linkContent } = useSiteContent();
  return (
    <ul className="mt-5 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
      {books.map((book) => (
        <li key={book.url} className="flex gap-3 py-4">
          <span aria-hidden="true" className="pt-0.5 text-lg">📖</span>
          <div>
            <h3 className="font-bold">
              <HeadingLink href={book.url} tooltip={linkContent.seeInGoodreads}>
                {book.title} <span aria-hidden="true">↗</span>
              </HeadingLink>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{book.authors}</p>
            {book.details && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{book.details}</p>
            )}
            <TopicTags tags={book.tags} title={book.title} />
          </div>
        </li>
      ))}
    </ul>
  );
}
