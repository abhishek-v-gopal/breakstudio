import type { ReactNode } from "react";

export const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-none">
    <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.5L5 22v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  </svg>
);

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-xs uppercase tracking-[0.14em] text-muted ${className}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, children, id }: { eyebrow: string; title: string; children?: ReactNode; id?: string }) {
  return (
    <div className="mb-10 flex max-w-3xl flex-col gap-3.5 md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="font-display text-[clamp(2.4rem,6.2vw,4.25rem)] font-extrabold uppercase leading-[0.95] text-balance">{title}</h2>
      {children && <p className="max-w-xl text-lg text-muted">{children}</p>}
    </div>
  );
}
