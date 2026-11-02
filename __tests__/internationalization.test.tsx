import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { ContentProvider } from "../components/ContentProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Introduction from "../components/home/Introduction";
import { localizedPath, resolveLocale } from "../config/internationalization";
import { mergeContent, resolveSite } from "../config/localizedContent";

describe("internationalization", () => {
  it("defaults missing and invalid selections to English", () => {
    expect(resolveLocale("de")).toBe("de");
    expect(resolveLocale("en")).toBe("en");
    expect(resolveLocale(null)).toBe("en");
    expect(resolveLocale("fr")).toBe("en");
  });

  it("uses a locale prefix for both language URLs", () => {
    expect(localizedPath("/work", "en")).toBe("/en/work");
    expect(localizedPath("/work", "de")).toBe("/de/work");
    expect(localizedPath("/de/work", "en")).toBe("/en/work");
    expect(localizedPath("/", "en")).toBe("/en");
    expect(localizedPath("/", "de")).toBe("/de");
  });

  it("shows language choices with the current locale marked", () => {
    render(<ContentProvider site={resolveSite()}><LanguageSwitcher /></ContentProvider>);
    expect(screen.queryByRole("menuitemradio", { name: "Deutsch" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Change language" }));
    expect(screen.getByRole("menuitemradio", { name: "Deutsch" })).not.toHaveAttribute("aria-current");
    expect(screen.getByRole("menuitemradio", { name: "English" })).toHaveAttribute("aria-current", "true");
  });

  it("renders German with the actual next-intl provider and translated structured content", () => {
    const site = resolveSite("de");
    const { rerender } = render(<ContentProvider site={site}><Introduction /></ContentProvider>);
    expect(screen.getByRole("heading", { name: "Hallo, ich bin Nahiyan!" })).toBeInTheDocument();
    expect(site.content.linkContent.openWebsite).toBe("Website öffnen");
    expect(site.content.workHistory[0].highlights[0]).toMatch(/Migration/);
    expect(site.content.workProjects[0].title).toBe("Zentraler E-Mail-Dienst");
    expect(site.content.openSourceProjectsConfig.profile.projects[0].description).toMatch(/Huffman-Codierung/);
    expect(site.content.featuredBlogPosts[1].title).toBe("Eine geheime Nachricht senden");
    expect(site.content.majorDependencies[0].description).toMatch(/Anwendungsframework/);
    rerender(<ContentProvider site={resolveSite()}><Introduction /></ContentProvider>);
    expect(screen.getByRole("heading", { name: "Hey, I'm Nahiyan!" })).toBeInTheDocument();
    expect(resolveSite("de").content.homeContent.title).toBe("Hallo, ich bin Nahiyan!");
  });

  it("merges nested overrides, replaces lists and leaves base content unchanged", () => {
    const base = { nested: { a: "A", b: "B" }, list: ["one"] };
    expect(mergeContent(base, { nested: { a: "translated" }, list: ["two"] }))
      .toEqual({ nested: { a: "translated", b: "B" }, list: ["two"] });
    expect(base.nested.a).toBe("A");
  });
});
