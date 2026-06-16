import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Passione d'Estate",
  description:
    'Il 3 agosto 2025 torna "Apericena c\'a Passioni" – un percorso esperienziale tra gastronomia, narrazione e spiritualità a Francavilla di Sicilia.',
};

const momenti = [
  {
    num: "01",
    title: "U frittu nto coppu",
    text: 'La serata si apre con un\'esperienza gastronomica dedicata ai sapori locali. Protagoniste sono le verdure a chilometro zero, fritte e servite nel tradizionale "coppu" di carta. Un omaggio alla cucina contadina e all\'autenticità dei prodotti della terra.',
    image: "/images/galleria/1b.webp",
  },
  {
    num: "02",
    title: "U Cunta Storie",
    text: "Un momento narrativo in lingua siciliana, attraverso storie che custodiscono la memoria della comunità. Una testimonianza orale che rinsalda il legame tra le generazioni, rafforzando il valore della lingua e della cultura locale.",
    image: "/images/galleria/2b.webp",
  },
  {
    num: "03",
    title: "Rappresentazione della Passione di Cristo",
    text: "La serata culmina con la drammatizzazione della Passione di Cristo, accompagnata da proiezioni video. Un momento teatrale e spirituale di grande intensità, che fonde sacralità e suggestione visiva, invitando alla riflessione.",
    image: "/images/galleria/3b.webp",
  },
];

export default function PassioneDestatePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/eventi/sacra-rappresentazione">Eventi</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Passione d'estate</span>
            </nav>
            <h1>Passione d&apos;Estate</h1>
            <p>Un percorso esperienziale tra gastronomia, memoria e spiritualità nel cuore di Francavilla di Sicilia.</p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 64, alignItems: "center", marginBottom: 80 }} className="grid-2col">
            <div>
              <span className="section-tag">3 Agosto 2025</span>
              <h2 style={{ marginBottom: 8 }}>Apericena c&apos;a Passioni</h2>
              <div className="section-divider" />
              <p style={{ marginBottom: 16 }}>
                Il 3 agosto 2025 torna un evento che celebra l&apos;identità culturale e il patrimonio spirituale del territorio.
              </p>
              <p style={{ marginBottom: 16 }}>
                Francavilla di Sicilia si prepara ad accogliere una delle serate più significative dell&apos;estate: &ldquo;Apericena c&apos;a Passioni&rdquo;, un appuntamento che unisce tradizione gastronomica, memoria collettiva e spiritualità in un contesto carico di autenticità.
              </p>
              <p style={{ marginBottom: 32 }}>
                L&apos;evento si terrà a partire dalle ore 20:00 nel Parco suburbano Madonna Gala, sulle sponde del fiume San Paolo, un luogo molto caro ai Francavillesi, ricco di passione e storia.
              </p>
              <div style={{
                display: "flex",
                gap: 24,
                padding: "20px 24px",
                background: "white",
                borderRadius: 12,
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border)",
              }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Data</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-dark)" }}>3 Agosto 2025</div>
                </div>
                <div style={{ width: 1, background: "var(--color-border)" }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Orario</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-dark)" }}>20:00</div>
                </div>
                <div style={{ width: 1, background: "var(--color-border)" }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Luogo</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-dark)" }}>Parco Madonna Gala</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
              <Image src="/images/galleria/1b.webp" alt="Passione d'estate" fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
            </div>
          </div>

          {/* Tre momenti */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-tag">Il programma</span>
              <h2>Un percorso in tre momenti</h2>
              <div className="section-divider centered" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {momenti.map(({ num, title, text, image }, i) => (
                <div
                  key={num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                    gap: 56,
                    alignItems: "center",
                    direction: "ltr" as "ltr",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                    <Image src={image} alt={title} fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      background: "var(--color-primary)",
                      borderRadius: 8,
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 20,
                    }}>
                      {num}
                    </div>
                    <h3 style={{ marginBottom: 16 }}>{title}</h3>
                    <p style={{ lineHeight: 1.8, color: "var(--color-text-muted)" }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery strip */}
          <div style={{ display: "grid", gap: 12, marginBottom: 64 }} className="grid-3col">
            {["/images/galleria/4b.webp", "/images/galleria/5b.webp", "/images/galleria/6b.webp"].map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden" }}>
                <Image src={src} alt={`Passione d'estate ${i + 1}`} fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>

          {/* Sostegno */}
          <div style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
            borderRadius: 20,
            padding: "48px 56px",
            color: "white",
          }}>
            <h3 style={{ color: "white", marginBottom: 16 }}>Un&apos;iniziativa che valorizza la comunità</h3>
            <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, maxWidth: 640 }}>
              L&apos;evento è promosso dall&apos;Associazione &ldquo;A Passioni&rdquo;, con il sostegno dell&apos;Amministrazione Comunale di Francavilla di Sicilia e della Pro Loco Pro Francavilla. Un gesto collettivo di cura e valorizzazione del territorio, un atto d&apos;amore verso la propria storia e il proprio futuro.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic" }}>
              3 agosto 2025 – Una serata per lasciarsi coinvolgere dalla forza della tradizione.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
