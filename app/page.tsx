import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import { Clients, Contact, Faq, FloatingWhatsApp, Footer, Hero, Process, Services } from "../components/Sections";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="top">
        <Hero />
        <div className="slate" aria-hidden="true" />
        <Clients />
        <Services />
        <Process />
        <Faq />
        <div className="slate" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
