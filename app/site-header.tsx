"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Join", href: "/join" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
];

// Shared base for the icon buttons (hamburger, close).
const LINK_BASE =
  "text-body-ink transition-colors hover:text-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The current page's nav link gets a steady den-green underline so it reads as
  // "you're here," matching the hover underline used elsewhere on the site.
  const navLinkClass = (href: string, size: string) => {
    const active = pathname === href;
    const state = active
      ? "text-den-green-deep underline decoration-den-green-deep decoration-[1.5px] underline-offset-4"
      : "text-body-ink hover:text-den-green-deep";
    return `${size} transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep ${state}`;
  };

  // While the overlay is open: Escape closes it and the page behind it
  // doesn't scroll.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-body-ink/10 bg-porch-cream/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 md:px-16">
          <a
            href="/"
            aria-label="The Care Den — home"
            className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-den-green-deep"
          >
            <Image
              src="/logo.svg"
              alt="The Care Den"
              width={3379}
              height={1000}
              priority
              className="h-auto w-[184px] sm:w-[173px]"
            />
          </a>

          {/* Desktop: links right-aligned in a row. */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={navLinkClass(link.href, "text-[1.0625rem]")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: hamburger opens the full-screen overlay. */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={`-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden ${LINK_BASE}`}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6.5" x2="21" y2="6.5" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17.5" x2="21" y2="17.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay, portaled to <body> so it escapes the
          header's backdrop-blur containing block and anchors to the viewport. */}
      {menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-porch-cream px-6 py-12 md:hidden">
            <div className="flex items-center justify-between">
              <a
                href="/"
                aria-label="The Care Den — home"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-den-green-deep"
              >
                <Image
                  src="/logo.svg"
                  alt="The Care Den"
                  width={3379}
                  height={1000}
                  className="h-auto w-[184px]"
                />
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className={`-mr-2 inline-flex h-11 w-11 items-center justify-center ${LINK_BASE}`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              </button>
            </div>

            <nav aria-label="Primary" className="mt-16">
              <ul className="flex flex-col gap-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={navLinkClass(link.href, "text-2xl")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
