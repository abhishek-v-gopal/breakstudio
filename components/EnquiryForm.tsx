"use client";

import { useId, useState } from "react";
import { SERVICE_OPTIONS } from "../lib/data";
import { whatsappLink } from "../lib/site";

const NOTE = "Opens WhatsApp with your message ready to send.";

export default function EnquiryForm() {
  const id = useId();
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [svc, setSvc] = useState(SERVICE_OPTIONS[0]);
  const [error, setError] = useState(false);

  const message = () => {
    const who = name.trim() ? `I'm ${name.trim()}` : "I'd like to talk";
    const from = biz.trim() ? ` from ${biz.trim()}` : "";
    const need = svc !== "Not sure yet" ? `. I'm interested in ${svc}.` : ". I'd like help choosing the right service.";
    return `Hi Break Studio, ${who}${from}${need}`;
  };

  const send = () => {
    if (!name.trim()) { setError(true); return; }
    setError(false);
    window.open(whatsappLink(message()), "_blank", "noopener,noreferrer");
  };

  const field = "w-full min-h-[50px] rounded-lg border-[1.5px] border-line bg-bg px-3.5 text-base text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20";
  const label = "font-mono text-xs uppercase tracking-widest text-muted";

  return (
    <form onSubmit={(e) => { e.preventDefault(); send(); }} noValidate aria-labelledby={`${id}-t`} className="rounded-[14px] border border-line bg-white p-6 md:p-8">
      <h2 id={`${id}-t`} className="font-display text-[clamp(1.9rem,4vw,2.5rem)] font-extrabold uppercase leading-[0.95]">Start with a free call</h2>
      <p className="mt-2.5 text-[15px] text-muted">Tell us a little. We reply on WhatsApp with next steps.</p>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor={`${id}-n`} className={label}>Your name</label>
        <input id={`${id}-n`} className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Anita Thomas" aria-invalid={error} aria-describedby={`${id}-note`} />
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor={`${id}-b`} className={label}>Business name</label>
        <input id={`${id}-b`} className={field} value={biz} onChange={(e) => setBiz(e.target.value)} autoComplete="organization" placeholder="Your brand or shop" />
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor={`${id}-s`} className={label}>What do you need?</label>
        <select id={`${id}-s`} className={field} value={svc} onChange={(e) => setSvc(e.target.value)}>
          {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-wa px-6 text-base font-semibold text-white transition hover:-translate-y-px">
        Send on WhatsApp
      </button>
      <p id={`${id}-note`} role="status" className={`mt-3 min-h-6 text-center text-[13px] ${error ? "font-semibold text-red-700" : "text-muted"}`}>
        {error ? "Please add your name so we know who to reply to." : NOTE}
      </p>
    </form>
  );
}
