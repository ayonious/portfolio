import type { Metadata } from "next";
import type { ReactNode } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { headers } from "next/headers";
import { resolveSite } from "../config/localizedContent";
import { localeHeader } from "../config/internationalization";
import { ContentProvider } from "../components/ContentProvider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return resolveSite((await headers()).get(localeHeader)).content.siteMetadata;
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const site = resolveSite((await headers()).get(localeHeader));
  return (
    <html lang={site.locale}>
      <body>
        <ContentProvider site={site}>
          <div className="lg:mx-auto lg:grid lg:max-w-[1360px] lg:grid-cols-[330px_minmax(0,1fr)]">
            <ProfileSidebar />
            <main className="px-6 py-6 sm:px-8 lg:px-10 lg:py-10 xl:px-14">
              {children}
            </main>
          </div>
        </ContentProvider>
      </body>
    </html>
  );
}
