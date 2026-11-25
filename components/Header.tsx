import Image from "next/image";
import { SITE, whatsappLink } from "../lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-[1180px] items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" aria-label="Break Studio home" className="flex items-center gap-2.5 font-display text-[26px] font-black uppercase tracking-wider whitespace-nowrap">
          <Image src="/logo.jpg" alt="" width={42} height={42} priority className="h-[42px] w-[42px] rounded-md" />
          {SITE.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-7">
          {[["Work", "#work"], ["Services", "#services"], ["Process", "#process"], ["FAQ", "#faq"]].map(([l, h]) => (
            <a key={h} href={h} className="hidden text-[15px] font-medium text-muted hover:text-ink md:inline">{l}</a>
          ))}
          <a href={whatsappLink("Hi Break Studio, I'd like to talk about my brand.")} target="_blank" rel="noopener noreferrer"
             className="inline-flex min-h-[42px] items-center rounded-full bg-wa px-[18px] text-[15px] font-semibold text-white transition hover:-translate-y-px">
            WhatsApp us
          </a>
        </nav>
      </div>
    </header>
  );
}
