import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { resolveSite } from "../config/localizedContent";
import { localeHeader } from "../config/internationalization";

export default getRequestConfig(async () => {
  const { locale, messages } = resolveSite((await headers()).get(localeHeader));
  return { locale, messages, timeZone: "Europe/Berlin" };
});
