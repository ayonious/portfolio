import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { ContentProvider } from "../components/ContentProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Introduction from "../components/home/Introduction";
import { domainGroups, languageUrl, resolveDomain } from "../config/internationalization";
import { mergeContent, resolveSite } from "../config/localizedContent";

describe("subdomain internationalization", () => {
  it("uses exact normalized hostnames and English for unknown hosts", () => {
    expect(resolveDomain("DE.LOCALHOST.:3000").locale).toBe("de");
    expect(resolveDomain("en.localhost").locale).toBe("en");
    for (const host of [null, "de.localhost.evil.test", "toString", "unknown.example"]) {
      expect(resolveDomain(host)).toEqual({ locale: "en", domains: null });
    }
  });

  it("preserves the page, query, fragment and dev port when switching domains", () => {
    expect(languageUrl("http://localhost:3000/work?view=all#projects", "de"))
      .toBe("http://de.localhost:3000/work?view=all#projects");
    expect(languageUrl("https://de.localhost/reading", "en"))
      .toBe("https://en.localhost/reading");
    expect(languageUrl("https://unknown.example/work", "de")).toBeNull();
  });

  it("resolves the portfolio's production subdomains and English aliases", () => {
    expect(resolveDomain("de.nahiyan.de").locale).toBe("de");
    expect(languageUrl("https://www.nahiyan.de/work?q=one#details", "de"))
      .toBe("https://de.nahiyan.de/work?q=one#details");
    expect(languageUrl("https://de.nahiyan.de/work", "en"))
      .toBe("https://en.nahiyan.de/work");
  });

  it("shows language links with the current locale marked", () => {
    render(<ContentProvider site={resolveSite("localhost")}><LanguageSwitcher /></ContentProvider>);
    expect(screen.queryByRole("link", { name: "Deutsch" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Language" }));
    expect(screen.getByRole("link", { name: "Deutsch" })).toHaveAttribute("href", "http://de.localhost/");
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("aria-current", "true");
  });

  it("hides testing language links on production domains", () => {
    const productionSite = resolveSite("de.nahiyan.de");
    expect(productionSite.locale).toBe("de");
    expect(productionSite.showLanguageSwitcher).toBe(false);
    render(<ContentProvider site={productionSite}><LanguageSwitcher /></ContentProvider>);
    expect(screen.queryByRole("link", { name: "English" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Deutsch" })).not.toBeInTheDocument();
  });

  it("supports configured production groups without crossing deployments", () => {
    domainGroups.push({ en: "en.example.com", de: "de.example.com" });
    try {
      expect(languageUrl("https://de.example.com/about", "en")).toBe("https://en.example.com/about");
    } finally { domainGroups.pop(); }
  });

  it("renders German with the actual next-intl provider and translated structured content", () => {
    const site = resolveSite("de.localhost");
    const { rerender } = render(<ContentProvider site={site}><Introduction /></ContentProvider>);
    expect(screen.getByRole("heading", { name: "Hallo, ich bin Nahiyan!" })).toBeInTheDocument();
    expect(site.content.linkContent.openWebsite).toBe("Website öffnen");
    expect(site.content.workHistory[0].highlights[0]).toMatch(/Migration/);
    expect(site.content.workProjects[0].title).toBe("Zentraler E-Mail-Dienst");
    expect(site.content.openSourceProjectsConfig.profile.projects[0].description).toMatch(/Huffman-Codierung/);
    expect(site.content.featuredBlogPosts[1].title).toBe("Eine geheime Nachricht senden");
    expect(site.content.majorDependencies[0].description).toMatch(/Anwendungsframework/);
    rerender(<ContentProvider site={resolveSite("localhost")}><Introduction /></ContentProvider>);
    expect(screen.getByRole("heading", { name: "Hey, I'm Nahiyan!" })).toBeInTheDocument();
    expect(resolveSite("de.localhost").content.homeContent.title).toBe("Hallo, ich bin Nahiyan!");
  });

  it("merges nested overrides, replaces lists and leaves base content unchanged", () => {
    const base = { nested: { a: "A", b: "B" }, list: ["one"] };
    expect(mergeContent(base, { nested: { a: "translated" }, list: ["two"] }))
      .toEqual({ nested: { a: "translated", b: "B" }, list: ["two"] });
    expect(base.nested.a).toBe("A");
  });
});
