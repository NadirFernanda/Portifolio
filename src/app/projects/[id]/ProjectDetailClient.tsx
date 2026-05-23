"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, LockKeyhole } from "lucide-react";
import type { Project } from "@/types";
import { useTranslation } from "@/i18n/LanguageContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const { t } = useTranslation();
  const pd = t.projectDetail;

  return (
    <main className="min-h-screen bg-surface px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors mb-10 font-medium"
        >
          {pd.back}
        </Link>

        {/* Full screenshot */}
        {project.images.screenshots[0] && (
          <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface-card mb-10">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <Image
                src={project.images.screenshots[0]}
                alt={`${project.name} screenshot`}
                fill
                priority
                quality={90}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-surface-light border border-border text-muted">
              {project.year}
            </span>
            {project.status === "production" && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
                Live
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-text tracking-tight mb-2">
            {project.name}
          </h1>
          <p className="text-base font-mono text-primary">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed text-base mb-12 max-w-3xl">
          {project.description}
        </p>

        {/* Two-column detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — Problem + Features */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* The Problem */}
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                {pd.theProblem}
              </h2>
              <p className="text-muted leading-relaxed text-sm mt-4">
                {project.problem}
              </p>
            </div>

            {/* Key Features */}
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                {pd.keyFeatures}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Stack, Role, Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Tech Stack */}
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h2 className="text-xs font-semibold text-text uppercase tracking-widest mb-4">
                {pd.techStack}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded font-mono bg-surface-light border border-border text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h2 className="text-xs font-semibold text-text uppercase tracking-widest mb-3">
                {pd.role}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{project.role}</p>
            </div>

            {/* Links */}
            <div className="rounded-2xl border border-primary/30 bg-surface-card p-6 flex flex-col gap-3">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-surface font-bold px-5 py-3 text-sm transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  {pd.liveDemo}
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-border text-muted px-5 py-3 text-sm">
                  <LockKeyhole className="h-4 w-4" />
                  {pd.privateSystem}
                </span>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border text-muted hover:border-primary/50 hover:text-primary px-5 py-3 text-sm font-medium transition-all"
                >
                  <GithubIcon className="h-4 w-4" />
                  {pd.viewOnGithub}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
