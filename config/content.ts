export type SiteContent = typeof import("./locales/en").englishContent;
export type ContentOverrides<T> = T extends readonly unknown[] ? T : T extends object ? { [K in keyof T]?: ContentOverrides<T[K]> } : T;

export function mergeContent<T>(base: T, override?: ContentOverrides<T>): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || typeof base !== "object" || base === null) return override as T;
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(override as object)) {
    if (value !== undefined) result[key] = mergeContent(result[key], value);
  }
  return result as T;
}
