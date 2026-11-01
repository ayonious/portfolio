"use client";

import { useSiteContent } from "../../components/ContentProvider";
import Image from "next/image";
import InlineLink from "../../components/InlineLink";

import BrandIcon from "../../components/BrandIcon";
import ContactForm from "../../components/about/ContactForm";

export default function AboutPage() {
  const { aboutContent } = useSiteContent();
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{aboutContent.title}</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-300">
            {aboutContent.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.parts.map((part, partIndex) =>
                  part.href ? (
                    <InlineLink
                      key={partIndex}
                      href={part.href}
                    >
                      {part.text}
                    </InlineLink>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={aboutContent.image.src}
          alt={aboutContent.image.alt}
          width={512}
          height={512}
          priority
          className="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-700"
        />
      </section>

      <section className="mt-14 border-y border-slate-200 py-8 dark:border-slate-700">
        <h2 className="text-2xl font-bold">{aboutContent.profilesTitle}</h2>
        <div className="mt-5 divide-y divide-slate-200 dark:divide-slate-700">
          {aboutContent.profiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 py-4 no-underline transition-[color,translate] duration-200 ease-out hover:text-[var(--accent)] motion-safe:hover:translate-x-1 motion-safe:focus-visible:translate-x-1 motion-reduce:transition-none"
            >
              <BrandIcon name={profile.name} className="h-6 w-6 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold">{profile.name}</span>
                <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                  {profile.description}
                </span>
              </span>
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
