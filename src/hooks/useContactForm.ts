"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(data: FormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMessage("");
  }

  return { status, errorMessage, submit, reset };
}
