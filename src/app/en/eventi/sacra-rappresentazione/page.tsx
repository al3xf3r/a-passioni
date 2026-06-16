import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Representation of the Passion of Christ",
  description: "The centuries-old history of the Sacred Representation of the Passion of Christ in Francavilla di Sicilia, from 1790 to today.",
};

const timeline = [
  { year: "1790", text: "Father Silvestro organises the first living Way of the Cross. All roles were played by children." },
  { year: "1865", text: "Father Gaetano Calabrese involves hundreds of faithful, giving life to the Sacred Representation as it has been handed down." },
  { year: "1985", text: "Mayor Salvatore Puglisi revives the ancient tradition. The representation is renewed while keeping its essence intact." },
  { year: "2014", text: "Thanks to the passion of volunteers, the format is renewed: the ancient village becomes a natural theatre with dynamic, acted scenes." },
  { year: "2023", text: "The Association \"a Passioni\" is founded, ensuring continuity and protection of this extraordinary tradition." },
];

const edizioni = [
  "1790","1865","1874","1886","1892","1901","1908","1915","1922",
  "1931","1937","1938","1957","1962","1985","1987","1990","2000",
  "2002","2014","2015","2017","2019","2023","2024",
];

export default function SacraRappresentazioneENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Representation of the Passion of Christ</span>
            </nav>
            <h1>Representation of the<br />Passion of Christ</h1>
            <p>A centuries-old tradition that since 1790 transforms the ancient village of Francavilla di Sicilia into a natural theatre.</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", aspectRatio: "21/8", overflow: "hidden" }}>
        <Image src="/images/l5.webp" alt="Representation of the Passion of Christ" fill
          sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4))" }} />
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div className="sacra-grid">

            <div className="prose">
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 20 }}>
                The Sacred Representation of the Passion of Christ in Francavilla di Sicilia has a centuries-old history, with roots going back to 1790.
              </p>
              <p>It was 1790 when Father Silvestro organised the Way of the Cross with living characters, all roles played by children.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/uno.webp" alt="Sacred Representation" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>Later, Father Gaetano Calabrese in 1865 involved hundreds of faithful, giving life to the &ldquo;Sacred Representation of Good Friday&rdquo; as it has been handed down to us.</p>
              <p>This event, held only periodically, involved over 500 participants, all strictly in period costumes.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/due.webp" alt="Historical procession" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>The various scenes of the Passion of Christ, from the Entry of Palms to the Crucifixion, processed on foot or on floats along the village streets.</p>
              <p>The late 19th and early 20th century editions were promoted and directed by Cav. Carmelo Orsina. In 1985, Mayor Salvatore Puglisi strongly wanted to revive this ancient tradition.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/tre.webp" alt="Participants in costume" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>We had to wait until 2014, when thanks to the passion and dedication of volunteers, the event was revived with a renewed format.</p>
              <p>Despite difficulties related to reduced human, economic and logistical resources, it was possible to transform the event while keeping its essence intact over time.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/quattro.webp" alt="The ancient village" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>The ancient village of Francavilla di Sicilia has thus become a natural theatre hosting the scenes of the Passion: no longer static and silent but dynamic and acted, turning participants into true &ldquo;actors&rdquo;.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/galleria/cinque.webp" alt="The community of Francavilla" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>

              <p>This is the format in which the Sacred Representation has been staged in 2015, 2017, 2019, 2023, 2024. From 2017 it was moved to Palm Sunday, and in 2023 the Association <strong>&ldquo;a Passioni&rdquo;</strong> was founded.</p>

              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", margin: "32px 0" }}>
                <Image src="/images/w.webp" alt="The Representation" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className="sacra-sidebar">
              <div style={{ background: "white", borderRadius: 16, padding: "24px", boxShadow: "var(--shadow-md)", marginBottom: 20 }}>
                <h4 style={{ marginBottom: 4 }}>The editions</h4>
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
                <h4 style={{ marginBottom: 4 }}>Key moments</h4>
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

              <Link href="/en/galleria" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", borderRadius: 12, color: "white", textDecoration: "none" }}>
                <Camera size={18} />
                <div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8, marginBottom: 1 }}>From 1985 to 2024</div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Photo Archive</div>
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
          .sacra-grid { grid-template-columns: 1fr; gap: 32px; }
          .sacra-sidebar { position: static; }
        }
      `}</style>
    </>
  );
}
