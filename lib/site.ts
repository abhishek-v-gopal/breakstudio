export const SITE = {
  name: "Break Studio",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  title: "Break Studio | Cinematic Ad Films & Performance Marketing in Kerala",
  description:
    "Break Studio is a Kerala agency for cinematic ad films, Meta & Google ads, SEO, websites and WhatsApp automation. Ads people watch, leads you can answer.",
  phoneDisplay: "+91 97448 55798",
  phoneTel: "+919744855798",
  whatsappNumber: "919744855798",
  email: "atbreakstudio@gmail.com",
  instagram: "https://www.instagram.com/thebreakads",
  instagramHandle: "@thebreakads",
  region: "Kerala, India",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
