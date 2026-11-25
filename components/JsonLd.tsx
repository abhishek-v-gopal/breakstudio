import { FAQS, SERVICE_GROUPS } from "../lib/data";
import { SITE } from "../lib/site";

export default function JsonLd() {
  const graph = [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo.jpg`,
      image: `${SITE.url}/logo.jpg`,
      description: SITE.description,
      telephone: SITE.phoneTel,
      email: SITE.email,
      areaServed: { "@type": "AdministrativeArea", name: "Kerala, India" },
      address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
      sameAs: [SITE.instagram],
      contactPoint: { "@type": "ContactPoint", telephone: SITE.phoneTel, contactType: "sales", availableLanguage: ["English", "Malayalam"] },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICE_GROUPS.flatMap((g) => [...g.items] as { name: string; blurb: string }[]).map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.blurb },
        })),
      },
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en-IN", publisher: { "@id": `${SITE.url}/#organization` } },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />;
}
