import PageHeader from "../../components/PageHeader";
import { certifications } from "../../config/certifications";
import { pageContent } from "../../config/siteContent";
import CertificationItem from "../../components/certifications/CertificationItem";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={pageContent.certifications.title} introduction={pageContent.certifications.introduction} />

      {pageContent.certifications.sections.map((section) => (
        <section key={section.category} className="mt-10" aria-label={section.title}>
          <h2 className="mb-4 text-2xl font-bold">{section.title} <span aria-hidden="true">{section.emoji}</span></h2>
          <ul className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
            {certifications.filter((item) => item.category === section.category).map((certification) => (
              <li key={certification.name}>
                <CertificationItem certification={certification} dateLabel={section.dateLabel} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
