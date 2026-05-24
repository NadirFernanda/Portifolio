"use client";

import { motion } from "framer-motion";
import { MapPin, Circle, ArrowDown } from "lucide-react";
import Image from "next/image";
import { ContactButton } from "@/components/ui/ContactButton";
import { person } from "@/data/person";
import { contactLinks } from "@/data/contact";
import { useTranslation } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col px-4"
    >
      {/* Background — overflow confined here */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl" />
      </div>

      {/* Main content — centred, grows to fill space */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 w-full">

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/60 to-transparent blur-md opacity-60" />
              {/* Amber border ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-primary/70 ring-offset-2 ring-offset-surface overflow-hidden bg-surface-card">
                <Image
                  src="/images/profile/fernanda.png"
                  alt={person.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>
              {/* Live dot */}
              {person.availableForWork && (
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-surface ring-1 ring-green-500/30" />
              )}
            </div>
          </motion.div>

          {/* Available badge */}
          {person.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold mb-8 tracking-wide"
            >
              <Circle className="h-2 w-2 fill-primary animate-pulse" />
              {t.hero.available}
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #FAFAF9 30%, #F59E0B 70%, #EF4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {person.name}
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
          >
            <span className="text-xl sm:text-2xl font-bold text-primary">{t.person.title}</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
            <span className="text-lg sm:text-xl font-medium text-muted">{t.person.subtitle}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl mx-auto text-muted text-base sm:text-lg leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted font-mono"
          >
            <MapPin className="h-3 w-3 text-primary" />
            {person.location}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-surface font-bold px-6 py-3 text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              {t.hero.getInTouch}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border text-muted hover:border-primary/50 hover:text-primary px-6 py-3 text-sm font-medium transition-all"
            >
              {t.hero.seeMyWork}
            </a>
            <ContactButton
              link={contactLinks.find((l) => l.type === "cv")!}
              variant="ghost"
              size="md"
              showLabel
            />
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {contactLinks
              .filter((l) => l.type !== "cv")
              .map((link) => (
                <ContactButton key={link.id} link={link} variant="ghost" size="sm" showLabel />
              ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 pb-8 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono tracking-widest">{t.hero.scroll}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
