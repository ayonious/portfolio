import InlineLink from "../../components/InlineLink";
import PageHeader from "../../components/PageHeader";
import BrandText from "../../components/BrandText";
import { privacyContent } from "../../config/siteContent";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={privacyContent.title} introduction={privacyContent.introduction} />
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{privacyContent.lastUpdated}</p>

      <ul className="mt-10 border-t border-slate-200 dark:border-slate-700">
        {privacyContent.sections.map((section) => (
          <li
            key={section.title}
            className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 dark:border-slate-700"
          >
            <h2 className="font-bold">
              <BrandText text={section.title} />
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              <BrandText text={section.description} />
              {section.link && (
                <>
                  {" "}
                  <InlineLink href={section.link.href} className="underline underline-offset-4">
                    {section.link.label}
                  </InlineLink>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
