"use client";

import Image from "next/image";
import { useRef } from "react";
import { type Variants, motion, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "42 Kocaeli Graduate",
    desc: "Peer-to-peer engineering school with no teachers, no lectures — just self-directed learning and collaboration. One of the toughest CS programs in the world.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Backend-First",
    desc: "My core is backend — system design, APIs, databases, and infrastructure. I'm equally comfortable moving into the frontend when a project calls for it.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Own Infrastructure",
    desc: "I run my own VPS servers and host client projects with Docker and Nginx. No dependency on third-party platforms — full control, lower cost.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Open for Freelance",
    desc: "Currently taking on new client projects — from small business sites to complete SaaS backends. Work with clients on Upwork, Fiverr, and Armut.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-2 font-mono text-sm text-[#3b82f6]"
        >
          01. about
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-3xl font-bold text-white sm:text-4xl"
        >
          Who I am
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4 text-[var(--muted-fg)] leading-relaxed"
          >
            {/* Grogu */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[var(--border)]">
                <Image
                  src="/grogu.png"
                  alt="Grogu"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#404040] italic">This is the way.</p>
            </div>
            <p>
              I&apos;m Said, a backend developer based in Turkey. I started my journey at{" "}
              <span className="text-white font-medium">42 Kocaeli</span> — a peer-to-peer
              engineering school that throws you in the deep end from day one. No
              professors, no hand-holding. Just hard problems, dedicated peers, and a
              curriculum that forces you to actually understand what you&apos;re building.
            </p>
            <p>
              I specialize in building robust backend systems — APIs, microservices,
              database architecture — but I can own an entire product from database
              schema to deployed UI. I&apos;ve shipped logistics platforms, built VPS
              hosting infrastructure from scratch, and deployed full freelance projects
              on my own servers.
            </p>
            <p>
              When I take on a project, I don&apos;t just write the code — I handle
              deployment, server setup, and ongoing infrastructure. That means faster
              turnaround and no finger-pointing between a developer and a DevOps team.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--border)]"
              >
                <div className="mb-3 text-[#3b82f6]">{item.icon}</div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#737373]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
