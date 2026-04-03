"use client";

import { useRef } from "react";
import { type Variants, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: t("services.items.wordpress.title"),
      desc: t("services.items.wordpress.desc"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: t("services.items.rest.title"),
      desc: t("services.items.rest.desc"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: t("services.items.fullstack.title"),
      desc: t("services.items.fullstack.desc"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      title: t("services.items.vps.title"),
      desc: t("services.items.vps.desc"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: t("services.items.postgres.title"),
      desc: t("services.items.postgres.desc"),
    },
  ];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

  return (
    <section id="services" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-2 font-mono text-sm text-[#3b82f6]"
        >
          {t("services.sectionLabel")}
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          {t("services.title")}
        </motion.h2>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 max-w-xl text-[#737373]"
        >
          {t("services.description")}
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--border)]"
            >
              <div className="mb-4 text-[#3b82f6]">{service.icon}</div>
              <h3 className="mb-2 text-sm font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="text-sm leading-relaxed text-[#737373]">{service.desc}</p>
            </motion.div>
          ))}

          {/* Hosting highlight card */}
          <motion.div
            custom={services.length + 3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="sm:col-span-2 lg:col-span-full rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 text-[#3b82f6]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p className="text-sm text-[var(--muted-fg)]">
                <span className="font-medium text-[var(--foreground)]">{t("services.hosting.title")}</span>{" "}
                {t("services.hosting.desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
