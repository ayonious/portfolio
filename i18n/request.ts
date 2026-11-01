import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { resolveSite } from "../config/localizedContent";

export default getRequestConfig(async () => {
  const { locale, messages } = resolveSite((await headers()).get("host"));
  return { locale, messages, timeZone: "Europe/Berlin" };
});
