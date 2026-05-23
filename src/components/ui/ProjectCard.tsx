"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, LockKeyhole, ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { useTranslation } from "@/i18n/LanguageContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projectGradients: Record<string, string> = {
  medfreela:               "from-rose-900/60 via-surface-card to-surface-card",
  angolawifi:              "from-amber-900/60 via-surface-card to-surface-card",
  "isp-bie":               "from-orange-900/60 via-surface-card to-surface-card",
  "ispbie-billing":        "from-sky-900/60 via-surface-card to-surface-card",
  "angolawifi-management": "from-violet-900/60 via-surface-card to-surface-card",
  portfolio:               "from-emerald-900/60 via-surface-card to-surface-card",
};

const projectAccent: Record<string, string> = {
  medfreela:               "#FB7185",
  angolawifi:              "#F59E0B",
  "isp-bie":               "#FB923C",
  "ispbie-billing":        "#38BDF8",
  "angolawifi-management": "#A78BFA",
  portfolio:               "#10B981",
};

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const { t } = useTranslation();
  const gradient = projectGradients[project.id] ?? "from-stone-900/60 via-surface-card to-surface-card";
  const accent = projectAccent[project.id] ?? "#F59E0B";

  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-border bg-surface-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {/* Stretched link — covers the whole card except footer buttons */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label={`View ${project.name} details`}
      />

      {/* Thumbnail */}
      <div className={`relative h-52 overflow-hidden ${project.images.thumbnail ? "bg-surface-card" : `bg-gradient-to-br ${gradient} flex items-center justify-center`}`}>

        {project.images.thumbnail ? (
          <>
            <Image
              src={project.images.thumbnail}
              alt={`${project.name} screenshot`}
              fill
              priority={priority}
              quality={priority ? 90 : 75}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* subtle gradient overlay so badges are readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 via-transparent to-transparent" />
            {/* Hover overlay — communicates the card is clickable */}
            <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 bg-surface/80 border border-primary/40 text-primary text-xs font-semibold px-4 py-2 rounded-xl shadow-lg shadow-surface/50">
                {t.projects.viewDetails}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(${accent}44 1px, transparent 1px), linear-gradient(90deg, ${accent}44 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div
              className="absolute top-4 left-6 w-24 h-24 rounded-full blur-2xl opacity-30"
              style={{ backgroundColor: accent }}
            />
            <span
              className="relative z-10 text-6xl font-black tracking-tighter opacity-20 select-none"
              style={{ color: accent }}
            >
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}

        {/* Year badge */}
        <span className="absolute top-3 right-3 z-10 text-xs font-mono bg-surface/70 backdrop-blur-sm px-2 py-1 rounded-md border border-border text-muted">
          {project.year}
        </span>

        {/* Status badge */}
        {project.status === "production" && (
          <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-surface/70 backdrop-blur-sm border border-border" style={{ color: accent }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: accent }} />
            Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-xs font-mono mt-0.5 mb-3 text-primary">{project.tagline}</p>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>

        {/* Highlights */}
        <ul className="mt-4 space-y-1 flex-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-muted">
              <span className="text-primary mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded font-mono bg-surface-light border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        <p className="mt-4 text-xs text-muted border-t border-border pt-3">
          <span className="text-secondary font-medium">Role: </span>
          {project.role}
        </p>

        {/* Footer: links + "View details" indicator */}
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between relative z-10">
          <div className="flex gap-4">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t.projects.liveDemo}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <LockKeyhole className="h-3.5 w-3.5" />
                {t.projects.privateSystem}
              </span>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted/50 group-hover:text-primary transition-colors pointer-events-none">
            {t.projects.viewDetails}
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
