"use client";

import { useRef, useState } from "react";
import { type Variants, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/saidyanak",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saidyanak/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:said@saidyanak.dev",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:said@saidyanak.dev?subject=Freelance%20inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-2 font-mono text-sm text-[#3b82f6]"
        >
          {t("contact.sectionLabel")}
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl"
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 max-w-lg text-[#737373]"
        >
          {t("contact.description")}
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.form
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#737373]">
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("contact.form.namePlaceholder")}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[#404040] outline-none transition-colors focus:border-[#3b82f6]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#737373]">
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.form.emailPlaceholder")}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[#404040] outline-none transition-colors focus:border-[#3b82f6]"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[#737373]">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full resize-none rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[#404040] outline-none transition-colors focus:border-[#3b82f6]"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full rounded-md bg-[#3b82f6] py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563eb] disabled:opacity-60"
            >
              {sent ? t("contact.form.sent") : t("contact.form.send")}
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <p className="text-sm text-[#737373] mb-6">
              {t("contact.or")}
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-[var(--muted-fg)] transition-all hover:border-[#3b82f6]/30 hover:text-[var(--foreground)]"
              >
                <span className="text-[#3b82f6]">{link.icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
                <span className="ml-auto">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
