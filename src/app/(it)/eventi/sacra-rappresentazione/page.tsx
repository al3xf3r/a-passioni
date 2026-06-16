import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Rappresentazione della Passione di Cristo",
  description: "La storia ultra-centenaria della Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia, dal 1790 ad oggi.",
};

const timeline = [
  { year: "1790", text: "Padre Silvestro organizza la prima Via Crucis con personaggi viventi. Tutti i ruoli erano interpretati da bambini." },
  { year: "1865", text: "Padre Gaetano Calabrese coinvolge centinaia di fedeli, dando vita alla \"Sacra Rappresentazione del Venerdì Santo\" come è stata tramandata." },
  { year: "1985", text: "Il sindaco Salvatore Puglisi ripropone l'antica tradizione. La rappresentazione si rinnova mantenendo intatta la propria essenza." },
  { year: "2014", text: "Grazie alla passione di alcuni volontari, la formula viene rinnovata: il borgo antico diventa teatro naturale con scene dinamiche e recitate." },
  { year: "2023", text: "Nasce l'Associazione \"a Passioni\", con l'obiettivo di garantire continuità e tutela a questa straordinaria tradizione." },
];

const edizioni = [
  "1790","1865","1874","1886","1892","1901","1908","1915","1922",
  "1931","1937","1938","1957","1962","1985","1987","1990","2000",
  "2002","2014","2015","2017","2019","2023","2024",
];

export default function SacraRappresentazionePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Rappresentazione della Passione di Cristo</span>
            </nav>
            <h1>Rappresentazione della<br />Passione di Cristo</h1>
            <p>Una tradizione ultra-centenaria che dal 1790 trasforma il borgo antico di Francavilla di Sicilia in teatro naturale.</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", aspectRatio: "21/8", overflow: "hidden" }}>
        <Image src="/images/l5.webp" alt="Rappresentazione della Passione di Cristo" fill
          sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4))" }} />
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div className="sacra-grid">

            {/* Main prose */}
            <div className="prose">
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 20 }}>
                La Sacra Rappresentazione della Passione di Cristo di Francavilla di Sicilia vanta una storia ultra-centenaria, che affonda le radici nel 1790.
              </p>
              <p>Era il 1790 quando Padre Silvestro organizzava la Via Crucis con personaggi viventi e tutti i ruoli erano interpretati da bambini.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/uno.webp" alt="Sacra Rappresentazione" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>In seguito, Padre Gaetano Calabrese nel 1865 volle coinvolgere centinaia di fedeli dando vita alla &ldquo;Sacra Rappresentazione del Venerdì Santo&rdquo;, come ci è stata tramandata.</p>
              <p>Questo evento, svolto solo periodicamente, coinvolgeva oltre 500 partecipanti, tutti rigorosamente con costumi dell&apos;epoca.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/due.webp" alt="Il corteo storico" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>Le varie scene della Passione di Cristo, dall&apos;Entrata delle Palme alla Crocifissione, sfilavano a piedi o su carri con un corteo lungo il centro abitato.</p>
              <p>Le edizioni di fine &apos;800 e inizio del &apos;900 furono promosse e dirette dal Cav. Carmelo Orsina. Nel 1985 il sindaco Salvatore Puglisi volle fortemente riproporre questa antica tradizione, realizzata con le stesse modalità fino al 2002.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/tre.webp" alt="Partecipanti in costume" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>Dobbiamo aspettare il 2014, anno in cui grazie alla passione e alla dedizione di alcuni volontari, l&apos;evento fu ripreso con una formula rinnovata.</p>
              <p>Nonostante le difficoltà legate alla riduzione di risorse umane, economiche e logistiche, si è riusciti a trasformare l&apos;evento adattandolo alle nuove esigenze mantenendone intatta l&apos;essenza nel tempo.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/quattro.webp" alt="Il borgo antico" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>Il borgo antico di Francavilla di Sicilia è diventato così un teatro naturale che accoglie le scene della passione: non più statiche e silenziose, ma dinamiche e recitate, trasformando i partecipanti in veri &ldquo;attori&rdquo;.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/cinque.webp" alt="La comunità di Francavilla" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>Ed è questa formula che la Sacra Rappresentazione viene riproposta nel 2015, 2017, 2019, 2023, 2024. Dal 2017 viene spostata alla Domenica delle Palme e nel 2023 viene istituita l&apos;Associazione <strong>&ldquo;a Passioni&rdquo;</strong>.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/w.webp" alt="La Rappresentazione" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="sacra-sidebar">
              <div style={{ background: "white", borderRadius: 16, padding: "24px", boxShadow: "var(--shadow-md)", marginBottom: 20 }}>
                <h4 style={{ marginBottom: 4 }}>Le edizioni</h4>
                <div className="section-divider" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {edizioni.map((y) => (
                    <span key={y} style={{ padding: "4px 10px", background: "var(--color-bg-alt)", borderRadius: 20, fontSize: "0.78rem", fontWeight: 500, color: "var(--color-text-muted)" }}>
                      {y}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: "white", borderRadius: 16, padding: "24px", boxShadow: "var(--shadow-md)", marginBottom: 20 }}>
                <h4 style={{ marginBottom: 4 }}>Momenti chiave</h4>
                <div className="section-divider" />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {timeline.map(({ year, text }) => (
                    <div key={year} style={{ display: "flex", gap: 12 }}>
                      <div style={{ flexShrink: 0, width: 48, height: 26, background: "var(--color-primary)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, color: "white", letterSpacing: "0.04em" }}>
                        {year}
                      </div>
                      <p style={{ fontSize: "0.83rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.55 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/galleria" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", borderRadius: 12, color: "white", textDecoration: "none" }}>
                <Camera size={18} />
                <div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8, marginBottom: 1 }}>Dal 1985 al 2024</div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Archivio Fotografico</div>
                </div>
                <ArrowRight size={15} style={{ marginLeft: "auto" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sacra-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
          align-items: start;
        }
        .sacra-sidebar {
          position: sticky;
          top: 88px;
        }
        @media (max-width: 900px) {
          .sacra-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .sacra-sidebar {
            position: static;
          }
        }
      `}</style>
    </>
  );
}
