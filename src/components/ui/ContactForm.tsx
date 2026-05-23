"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslation } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { status, errorMessage, submit, reset } = useContactForm();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useTranslation();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submit(form);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-primary" />
        <h3 className="text-lg font-semibold text-text">{t.form.successTitle}</h3>
        <p className="text-muted text-sm">
          {t.form.successMessage}
        </p>
        <button
          onClick={() => { reset(); setForm({ name: "", email: "", message: "" }); }}
          className="mt-2 text-sm text-primary hover:text-primary-dark transition-colors"
        >
          {t.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wider">
            {t.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            placeholder={t.form.namePlaceholder}
            className="rounded-lg bg-surface-light border border-border px-4 py-3 text-sm text-text placeholder-muted/50 outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-muted uppercase tracking-wider">
            {t.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="rounded-lg bg-surface-light border border-border px-4 py-3 text-sm text-text placeholder-muted/50 outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wider">
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={t.form.messagePlaceholder}
          className="rounded-lg bg-surface-light border border-border px-4 py-3 text-sm text-text placeholder-muted/50 outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 text-sm transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t.form.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t.form.send}
          </>
        )}
      </button>
    </form>
  );
}
