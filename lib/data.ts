export const CLIENTS = [
  { name: "Heel Studio", sector: "Footwear & bags", logo: "heel-studio" },
  { name: "Vanitha Sishuvikasana Vakuppu", sector: "Women & child development", logo: "vanitha-sishuvikasana-vakuppu" },
  { name: "Bellavita", sector: "Fresh drinks", logo: "bellavita" },
  { name: "Global Education Gateway", sector: "Education", logo: "global-education-gateway" },
  { name: "Inovus Labs", sector: "Tech learning", logo: "inovus-labs" },
  { name: "Nazareth Family Restaurant", sector: "Family restaurant", logo: "nazareth" },
  { name: "Petsee", sector: "Pet care", logo: "petsee" },
  { name: "PSP The Family Store", sector: "Family retail", logo: "psp-the-family-store" },
  { name: "Sruthees", sector: "Handloom boutique", logo: "sruthees" },
  { name: "Pearls Boutique", sector: "Fashion", logo: "pearls-boutique" },
  { name: "Aionious Management Solutions", sector: "Management solutions", logo: "aionious" },
  { name: "Inspirit Safety Solutions", sector: "Safety training", logo: "inspirit-safety-solutions" },
] as const;

export const SERVICE_GROUPS = [
  {
    title: "Get found",
    items: [
      { name: "Performance Marketing", blurb: "Meta and Google ads built around enquiries and sales, not likes." },
      { name: "SEO Services", blurb: "Rank for the searches your buyers already make." },
      { name: "Google My Business & Local SEO", blurb: "Show up on the map when people search near you." },
      { name: "Social Media Marketing", blurb: "Consistent posting, reels and community care for your pages." },
      { name: "Influencer Marketing", blurb: "The right local creators, briefed and managed for you." },
    ],
  },
  {
    title: "Look the part",
    items: [
      { name: "Content Creation", blurb: "Reels, ad films and product shoots with a cinematic eye, scripted in Malayalam or English." },
      { name: "Branding & Designing", blurb: "Logos, brand kits and creatives that look the same everywhere." },
    ],
  },
  {
    title: "Convert & keep",
    items: [
      { name: "Website Development", blurb: "Fast, clear sites that turn visitors into WhatsApp chats and calls." },
      { name: "WhatsApp Automation", blurb: "Instant replies and follow-ups so no enquiry waits overnight." },
      { name: "Business Automation & CRM", blurb: "Every lead logged, assigned and followed up in one place." },
    ],
  },
] as const;

export const SERVICE_OPTIONS = [
  "Not sure yet",
  ...SERVICE_GROUPS.flatMap((g) => g.items.map((i) => i.name)),
];

export const STEPS = [
  { title: "Discovery call", body: "We learn what you sell, who buys it and what a good month looks like." },
  { title: "Plan & script", body: "A clear plan, ad angles and scripts for you to approve before we shoot." },
  { title: "Shoot & build", body: "Production, edits, creatives and the lead system behind them." },
  { title: "Launch & improve", body: "Ads go live, enquiries are tracked and the best creatives get more budget." },
] as const;

export const WHY = [
  { title: "One team, whole funnel", body: "Film, ads, website and WhatsApp follow-up under one roof, so nothing gets lost between agencies." },
  { title: "Made for Kerala buyers", body: "Malayalam and English creatives and a WhatsApp-first enquiry flow, the way your customers actually reach out." },
  { title: "Tracked to the enquiry", body: "We follow each campaign from ad click to lead, so you see which creative brings customers." },
] as const;

export const FAQS = [
  { q: "What does Break Studio do?", a: "Break Studio is a Kerala agency that shoots cinematic ad films, runs Meta and Google ads, and automates follow-up on WhatsApp so every enquiry gets answered." },
  { q: "Do you make ads in Malayalam?", a: "Yes. We script and produce creatives in Malayalam and English, built for Kerala buyers." },
  { q: "Is the first call free?", a: "Yes. The first strategy call is free with no obligation. Message us on WhatsApp to book it." },
  { q: "Which businesses do you work with?", a: "Retail, education, food, pet care, fashion, government departments and B2B brands across Kerala." },
] as const;
