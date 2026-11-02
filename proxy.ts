import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, localeHeader, localizedPath, resolveLocale } from "./config/internationalization";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const match = pathname.match(/^\/(en|de)(?=\/|$)/);
  if (!match) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = localizedPath(pathname, defaultLocale);
    return NextResponse.redirect(redirectUrl);
  }
  const locale = resolveLocale(match?.[1] ?? defaultLocale);
  const internalPath = match ? pathname.slice(match[0].length) || "/" : pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeader, locale);
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = internalPath;
  return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|.*\\..*).*)"],
};
