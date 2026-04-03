"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          sy<span className="text-[#3b82f6]">.</span>dev
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted-fg)] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CV Links */}
          {mounted && (
            <>
              <a
                href="/cv-tr.pdf"
                download="Said_Yanak_CV_TR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-xs text-[var(--muted-fg)] transition-colors duration-200 hover:text-white md:inline-flex"
              >
                {t("nav.cvTR")}
              </a>
              <a
                href="/cv-en.pdf"
                download="Said_Yanak_CV_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-xs text-[var(--muted-fg)] transition-colors duration-200 hover:text-white md:inline-flex"
              >
                {t("nav.cvEN")}
              </a>
            </>
          )}

          {/* Language Toggle */}
          {mounted && (
            <button
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="rounded-md px-2 py-1 text-xs font-medium text-[var(--muted-fg)] transition-colors hover:bg-[var(--muted)] hover:text-white"
              aria-label="Toggle language"
            >
              {language === "tr" ? "EN" : "TR"}
            </button>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-[var(--muted-fg)] transition-colors hover:bg-[var(--muted)] hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          )}

          <a
            href="#contact"
            className="hidden rounded-md bg-[#3b82f6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563eb] md:inline-flex"
          >
            {t("nav.hireMe")}
          </a>
        </div>
      </nav>
    </header>
  );
}
