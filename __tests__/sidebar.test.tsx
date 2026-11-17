import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";
import ProfileSidebar from "../components/ProfileSidebar";

jest.mock("next/navigation", () => ({ usePathname: () => "/work" }));
jest.mock("../components/ThemeToggle", () => () => null);

describe("sidebar menu", () => {
  beforeEach(() => {
    window.matchMedia = jest.fn<typeof window.matchMedia>().mockReturnValue({
      matches: false,
      media: "(min-width: 1024px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn<MediaQueryList["dispatchEvent"]>(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
  });
  it("opens, closes with Escape, and closes after selecting a page", () => {
    render(<ProfileSidebar />);
    const button = screen.getByRole("button", { name: "Open navigation menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Navigation menu" })).toHaveAttribute("aria-modal", "true");
    expect(screen.getAllByRole("button", { name: "Close navigation menu" })[1]).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.keyDown(screen.getByRole("navigation"), { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
    expect(document.body.style.overflow).toBe("");

    fireEvent.click(button);
    fireEvent.click(screen.getByRole("link", { name: "Work" }));
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("links the privacy policy below the footer credit", () => {
    render(<ProfileSidebar />);
    const credit = screen.getByText("Made with ❤️ by Nahiyan");
    const link = screen.getByRole("link", { name: "Privacy policy" });

    expect(link).toHaveAttribute("href", "/privacy");
    expect(credit.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
