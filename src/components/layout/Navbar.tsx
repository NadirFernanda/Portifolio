"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border shadow-xl shadow-surface/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1.5">
          <span className="text-sm font-black font-mono">
            <span className="text-primary">fernanda</span>
            <span className="text-muted">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted hover:text-text hover:bg-surface-light"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-xl border border-primary/50 text-primary hover:bg-primary hover:text-surface hover:border-primary px-4 py-1.5 text-sm font-bold transition-all"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-muted hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-text hover:bg-surface-light"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-xl bg-primary text-surface font-bold px-4 py-2.5 text-sm"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
