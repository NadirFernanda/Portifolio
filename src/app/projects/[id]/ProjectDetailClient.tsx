"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, LockKeyhole, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/types";
import { projects } from "@/data/projects";
import { useTranslation } from "@/i18n/LanguageContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

function OtherProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex gap-4 p-4 rounded-2xl border border-border bg-surface-card hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
    >
      {project.images.thumbnail && (
        <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-light">
          <Image
            src={project.images.thumbnail}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="96px"
          />
        </div>
      )}
      <div className="min-w-0 flex flex-col justify-center">
        <h3 className="font-bold text-text text-sm group-hover:text-primary transition-colors truncate">
          {project.name}
        </h3>
        <p className="text-xs text-primary font-mono mt-0.5 truncate">{project.tagline}</p>
        <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">{project.description}</p>
      </div>
    </Link>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const { t } = useTranslation();
  const pd = t.projectDetail;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const screenshots = project.images.screenshots;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length)),
    [screenshots.length]
  );

  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % screenshots.length)),
    [screenshots.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  return (
    <>
      <main className="min-h-screen bg-surface px-4 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <motion.div {...fadeUp(0)}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors mb-10 font-medium"
            >
              {pd.back}
            </Link>
          </motion.div>

          {/* Hero screenshot — clickable to open lightbox */}
          {screenshots[0] && (
            <motion.div {...fadeUp(0.08)}>
              <button
                onClick={() => setLightboxIndex(0)}
                className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface-card mb-10 group cursor-zoom-in block"
                aria-label="Open screenshot"
              >
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <Image
                    src={screenshots[0]}
                    alt={`${project.name} screenshot`}
                    fill
                    priority
                    quality={90}
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                </div>
                {/* zoom hint */}
                <div className="absolute bottom-3 right-3 bg-surface/70 backdrop-blur-sm border border-border text-muted text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 Click to expand
                </div>
              </button>
            </motion.div>
          )}

          {/* Header */}
          <motion.div {...fadeUp(0.16)} className="mb-10">
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
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.22)} className="text-muted leading-relaxed text-base mb-12 max-w-3xl">
            {project.description}
          </motion.p>

          {/* Two-column detail */}
          <motion.div {...fadeUp(0.28)} className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 flex flex-col gap-8">
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                  {pd.theProblem}
                </h2>
                <p className="text-muted leading-relaxed text-sm mt-4">{project.problem}</p>
              </div>

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

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h2 className="text-xs font-semibold text-text uppercase tracking-widest mb-4">
                  {pd.techStack}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded font-mono bg-surface-light border border-border text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h2 className="text-xs font-semibold text-text uppercase tracking-widest mb-3">
                  {pd.role}
                </h2>
                <p className="text-sm text-muted leading-relaxed">{project.role}</p>
              </div>

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
          </motion.div>

          {/* ── Screenshot gallery (only when 2+ images) ── */}
          {screenshots.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                {pd.screenshots}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {screenshots.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative rounded-xl overflow-hidden border border-border bg-surface-card hover:border-primary/40 transition-all duration-300 cursor-zoom-in"
                    style={{ paddingBottom: "56.25%" }}
                    aria-label={`Screenshot ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs font-semibold text-text bg-surface/80 px-3 py-1.5 rounded-lg border border-border">
                        {i + 1} / {screenshots.length}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── Other projects ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
              {pd.otherProjects}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProjects.map((p) => (
                <OtherProjectCard key={p.id} project={p} />
              ))}
            </div>
          </motion.section>

          {/* ── Prev / Next navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 border-t border-border pt-8"
          >
            <Link
              href={`/projects/${prevProject.id}`}
              className="group flex flex-col gap-1.5 p-4 rounded-2xl border border-border bg-surface-card hover:border-primary/40 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-1 text-xs text-muted group-hover:text-primary transition-colors">
                <ChevronLeft className="h-3.5 w-3.5" />
                {pd.prevProject}
              </span>
              <span className="font-bold text-text text-sm group-hover:text-primary transition-colors truncate">
                {prevProject.name}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-end gap-1.5 p-4 rounded-2xl border border-border bg-surface-card hover:border-primary/40 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-1 text-xs text-muted group-hover:text-primary transition-colors">
                {pd.nextProject}
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
              <span className="font-bold text-text text-sm group-hover:text-primary transition-colors truncate">
                {nextProject.name}
              </span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-surface/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-xl border border-border text-muted hover:text-primary hover:border-primary/40 transition-all bg-surface-card"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-muted bg-surface-card border border-border px-3 py-1.5 rounded-full">
              {lightboxIndex + 1} / {screenshots.length}
            </span>

            {/* Prev */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 sm:left-6 p-2.5 rounded-xl border border-border text-muted hover:text-primary hover:border-primary/40 transition-all bg-surface-card"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl mx-16 sm:mx-24"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[lightboxIndex]}
                alt={`${project.name} screenshot ${lightboxIndex + 1}`}
                fill
                quality={95}
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </motion.div>

            {/* Next */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 sm:right-6 p-2.5 rounded-xl border border-border text-muted hover:text-primary hover:border-primary/40 transition-all bg-surface-card"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* ESC hint */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted/50 font-mono hidden sm:block">
              ESC to close · ← → to navigate
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
