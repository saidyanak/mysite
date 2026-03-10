"use client";

import { useRef } from "react";
import { type Variants, motion, useInView } from "framer-motion";

type Project = {
  name: string;
  description: string;
  longDesc: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: string;
};

const projects: Project[] = [
  {
    name: "Rotax",
    description: "Cargo & logistics platform",
    longDesc:
      "A full-featured cargo and logistics management platform handling shipment tracking, routing, and operations across mobile and web interfaces.",
    stack: ["Spring Boot", "Flutter", "Python", "PostgreSQL", "RabbitMQ", "Docker"],
    github: "https://github.com/saidyanak/Rotax",
  },
  {
    name: "SpyHosting",
    description: "VPS hosting business",
    longDesc:
      "Built a complete VPS hosting business from scratch — provisioning virtual machines, managing customer email, billing, and control panel — all on self-hosted infrastructure.",
    stack: ["Node.js", "BullMQ", "Supabase", "Proxmox", "Mailcow", "CyberPanel", "Docker"],
    status: "Private infrastructure project",
  },
  {
    name: "İlta",
    description: "Freelance client project",
    longDesc:
      /* TODO: Said - add İlta project description here */
      "Freelance client project — built and deployed by Said on personal server infrastructure.",
    stack: ["WordPress", "Docker", "Nginx"],
    live: "https://ilta.saidyanak.dev",
  },
  {
    name: "Sutra",
    description: "Freelance client project",
    longDesc:
      /* TODO: Said - add Sutra project description here */
      "Freelance client project — built and deployed by Said on personal server infrastructure.",
    stack: ["WordPress", "Docker", "Nginx"],
    live: "https://sutra.saidyanak.dev",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-2 font-mono text-sm text-[#3b82f6]"
        >
          03. projects
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-3xl font-bold text-white sm:text-4xl"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.06)]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-[#3b82f6]">{project.description}</p>
                </div>
                {project.status && (
                  <span className="shrink-0 rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[#737373]">
                    private
                  </span>
                )}
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-[#737373]">
                {project.longDesc}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 font-mono text-[11px] text-[#737373]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#737373] transition-colors hover:text-white"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#737373] transition-colors hover:text-[#3b82f6]"
                  >
                    <ExternalIcon />
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
