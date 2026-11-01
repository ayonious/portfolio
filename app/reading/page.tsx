"use client";

import { useSiteContent } from "../../components/ContentProvider";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

import BookList from "../../components/reading/BookList";

export default function ReadingPage() {
  const { pageContent, otherBooks, programmingBooks } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={pageContent.books.title} introduction={pageContent.books.introduction}>
        <Button
          href={pageContent.books.goodreadsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5"
        >
          {pageContent.books.goodreadsLabel}
        </Button>
      </PageHeader>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.programmingTitle}</h2>
        <BookList books={programmingBooks} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.otherTitle}</h2>
        <BookList books={otherBooks} />
      </section>
    </div>
  );
}
