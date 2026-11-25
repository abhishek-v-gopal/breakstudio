import Image from "next/image";
import { CLIENTS, FAQS, SERVICE_GROUPS, STEPS, WHY } from "../lib/data";
import { SITE, whatsappLink } from "../lib/site";
import { SectionHead, Eyebrow, WaIcon } from "./ui";
import EnquiryForm from "./EnquiryForm";
import CopyButton from "./CopyButton";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.25fr_.85fr] lg:gap-16">
        <div>
          <Eyebrow>Cinematic content &amp; ad production · Kerala</Eyebrow>
          <h1 id="hero-title" className="mt-4 font-display text-[clamp(3.25rem,9vw,7rem)] font-black uppercase leading-[0.95] text-balance">
            Ads people watch. <em className="not-italic text-accent">Leads you can answer.</em>
          </h1>
          <p className="mt-6 max-w-[34em] text-[clamp(1.1rem,2.2vw,1.3rem)] text-muted">
            Break Studio shoots the film, runs the ads and automates the follow-up. Every rupee of ad spend gets a story to carry it and a system to catch the enquiry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink("Hi Break Studio, I'd like a free strategy call.")} target="_blank" rel="noopener noreferrer"
               className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-wa px-6 font-semibold text-white transition hover:-translate-y-px"><WaIcon />Get a free strategy call</a>
            <a href="#work" className="inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-ink px-6 font-semibold transition hover:-translate-y-px">See who we work with</a>
          </div>
          <div className="mt-9 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-line pt-5">
            <strong className="font-display text-5xl font-extrabold leading-none">12</strong>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Brands across retail, education,<br />food, government and B2B</span>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section id="work" aria-labelledby="work-title" className="px-4 py-14 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead eyebrow="Our clients" title="Brands that trust Break Studio" id="work-title">
          From a family restaurant to a state government department, we make content that fits the brand and the buyer.
        </SectionHead>
        <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((c) => (
            <li key={c.name} className="group flex min-w-0 flex-col">
              <div className="flex aspect-[1/.82] items-center justify-center overflow-hidden rounded-[10px] border border-line bg-white p-4">
                <Image src={`/clients/${c.logo}.jpg`} alt={`${c.name} logo`} width={320} height={320} sizes="(min-width:1024px) 270px, (min-width:640px) 30vw, 45vw"
                  className="max-h-full w-auto object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-within:grayscale-0" />
              </div>
              <b className="mt-2.5 text-[15px] font-semibold leading-tight">{c.name}</b>
              <span className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted">{c.sector}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-4 pb-14 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead eyebrow="Services" title="Everything from the first frame to the first enquiry" id="services-title">
          Pick one service or bring us the whole funnel. Tap any service to ask about it on WhatsApp.
        </SectionHead>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {SERVICE_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="flex items-baseline justify-between border-b-2 border-ink pb-3.5 font-display text-[26px] font-bold uppercase leading-[1.05]">
                {g.title}<small className="font-mono text-xs font-medium text-muted">{String(g.items.length).padStart(2, "0")}</small>
              </h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s.name} className="border-b border-line">
                    <a href={whatsappLink(`Hi Break Studio, I'd like to know about ${s.name.replace("&", "and")}.`)} target="_blank" rel="noopener noreferrer" className="group block py-5">
                      <strong className="flex justify-between gap-3 text-[19px] font-semibold leading-tight">{s.name}<span aria-hidden="true" className="text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></strong>
                      <p className="mt-1.5 text-[15.5px] text-muted">{s.blurb}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="px-4 pb-14 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead eyebrow="How we work" title="From first call to first lead" id="process-title" />
        <ol className="grid overflow-hidden rounded-[14px] border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="-mb-px -mr-px border-b border-r border-line px-6 pb-8 pt-7">
              <Eyebrow className="!text-accent">Step {i + 1}</Eyebrow>
              <h3 className="mt-3.5 font-display text-[26px] font-bold uppercase leading-[1.05]">{s.title}</h3>
              <p className="mt-2.5 text-[15.5px] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
          {WHY.map((w) => (
            <div key={w.title} className="border-t-2 border-ink pt-[18px]">
              <h3 className="font-display text-[26px] font-bold uppercase leading-[1.05]">{w.title}</h3>
              <p className="mt-2.5 text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-4 pb-14 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead eyebrow="FAQ" title="Quick answers" id="faq-title" />
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}<span aria-hidden="true" className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const rows = [
    { k: "Phone / WhatsApp", v: SITE.phoneDisplay, href: `tel:${SITE.phoneTel}`, copy: SITE.phoneDisplay },
    { k: "Email", v: SITE.email, href: `mailto:${SITE.email}`, copy: SITE.email },
    { k: "Instagram", v: SITE.instagramHandle, href: SITE.instagram },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-brand px-4 py-16 text-brand-ink md:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1180px] items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-ink/60">Let&apos;s talk</p>
          <h2 id="contact-title" className="mt-3.5 font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.95] text-balance">
            Tell us what you <span className="text-gold">sell.</span>
          </h2>
          <p className="mt-5 max-w-[30em] text-[19px] text-brand-ink/80">We&apos;ll show you how to sell more of it. The first call is free and there is no obligation.</p>
          <a href={whatsappLink("Hi Break Studio, I'd like a free strategy call.")} target="_blank" rel="noopener noreferrer"
             className="mt-7 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-wa px-6 font-semibold text-white transition hover:-translate-y-px"><WaIcon />Chat on WhatsApp</a>
        </div>
        <address className="border-t border-brand-ink/25 not-italic">
          {rows.map((r) => (
            <div key={r.k} className="flex items-center justify-between gap-3.5 border-b border-brand-ink/25 py-[18px]">
              <div className="flex min-w-0 flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-ink/60">{r.k}</span>
                <a href={r.href} {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-words text-[19px] font-medium hover:underline">{r.v}</a>
              </div>
              {r.copy && <CopyButton text={r.copy} label={r.k} />}
            </div>
          ))}
        </address>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 py-7 md:px-6">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-x-6 gap-y-2.5 text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} {SITE.name}. Cinematic content &amp; ad production.</span>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="border-b border-line">Instagram {SITE.instagramHandle}</a>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink("Hi Break Studio, I'd like to talk about my brand.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with Break Studio on WhatsApp"
       className="fixed bottom-4 right-4 z-30 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-wa text-white shadow-[0_6px_20px_rgba(0,0,0,.28)]">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[30px] w-[30px]"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.5L5 22v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></svg>
    </a>
  );
}
