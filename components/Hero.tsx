"use client";

import { useEffect, useRef } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(#3b82f6 1px, transparent 1px),
          linear-gradient(90deg, #3b82f6 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function MagneticButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
      className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium ${
        variant === "primary"
          ? "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
          : "border border-[var(--border)] text-[var(--muted-fg)] hover:border-[#444] hover:text-white"
      } transition-colors duration-200`}
    >
      {children}
    </a>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <GridBackground />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted-fg)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {t("hero.available")}
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-xl font-medium text-[#3b82f6] sm:text-2xl"
        >
          {t("hero.title")}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 mx-auto max-w-xl text-[var(--muted-fg)] leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#projects" variant="primary">
            {t("hero.viewProjects")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            {t("hero.hireMe")}
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[var(--border)] p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-[#3b82f6]"
          />
        </div>
      </motion.div>
    </section>
  );
}
