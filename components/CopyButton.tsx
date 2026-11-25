"use client";

import { useState } from "react";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState("Copy");
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setState("Copied"); } catch { setState("Select it"); }
    setTimeout(() => setState("Copy"), 1600);
  };
  return (
    <button type="button" onClick={copy} aria-label={`Copy ${label}`}
      className="min-h-[38px] flex-none rounded-full border-[1.5px] border-brand-ink/45 px-3.5 text-sm font-semibold text-brand-ink hover:bg-brand-ink/15">
      {state}
    </button>
  );
}
