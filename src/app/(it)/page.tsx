import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Camera, Heart, Users } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "A Passioni – Rappresentazione della Passione di Cristo a Francavilla di Sicilia",
  description:
    "A Passioni è l'associazione che celebra la Passione di Cristo a Francavilla di Sicilia. Scopri eventi, tradizioni e archivio fotografico.",
};

const missionItems = [
  {
    icon: <Heart size={22} />,
    title: "Promozione Culturale e Storica",
    text: "Organizziamo eventi, manifestazioni e iniziative che mettono in luce le radici storiche e il significato culturale della Passione di Cristo.",
  },
  {
    icon: <Users size={22} />,
    title: "Impegno Sociale e Volontariato",
    text: "Sosteniamo progetti sociali e attività di volontariato, contribuendo al benessere della comunità e promuovendo la solidarietà.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Patrimonio Immateriale",
    text: "Una rappresentazione ultra-centenaria, dal 1790 ad oggi, che il borgo antico di Francavilla di Sicilia accoglie come teatro naturale.",
  },
];

const events = [
  {
    title: "Rappresentazione della Passione di Cristo",
    date: "Domenica delle Palme",
    description:
      "La Sacra Rappresentazione nel borgo antico di Francavilla di Sicilia, con oltre 500 partecipanti in costume d'epoca. Un teatro a cielo aperto tra fede e storia.",
    href: "/eventi/sacra-rappresentazione",
    image: "/images/galleria/uno.webp",
  },
  {
    title: "Passione d'Estate",
    date: "Estate 2025",
    description:
      'Un percorso esperienziale in tre momenti: "U frittu nto coppu", "U Cunta Storie" e la Rappresentazione della Passione con proiezioni video.',
    href: "/eventi/passione-destate",
    image: "/images/galleria/1b.webp",
  },
  {
    title: "A Passioni in Musica",
    date: "Concorso musicale",
    description:
      "Un concorso aperto a musicisti e compositori per creare le musiche ufficiali della Sacra Rappresentazione. La tradizione che incontra la creazione contemporanea.",
    href: "/eventi/concorso",
    image: "/images/concorso.webp",
  },
];

const galleryYears = [
  { year: "1985", href: "/galleria/1985" },
  { year: "1987", href: "/galleria/1987" },
  { year: "1990", href: "/galleria/1990" },
  { year: "2023", href: "/galleria/2023" },
  { year: "2024", href: "/galleria/2024" },
  { year: "2025", href: "/galleria/2025" },
  { year: "2026", href: "/galleria/2026" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroCarousel />

      {/* ─── CHI SIAMO ─────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 80, alignItems: "center" }} className="grid-2col">
            <div>
              <span className="section-tag">Chi siamo</span>
              <h2 style={{ marginBottom: 8 }}>Un&apos;associazione nata dalla passione</h2>
              <div className="section-divider" />
              <p style={{ marginBottom: 20 }}>
                Fondata nel gennaio del 2023, l&apos;Associazione <strong>&ldquo;a Passioni&rdquo;</strong> nasce con l&apos;obiettivo di promuovere e salvaguardare la Sacra Rappresentazione della Passione di Cristo.
              </p>
              <p style={{ marginBottom: 20 }}>
                La nostra attività si basa sulla passione, la dedizione e la volontà di diffondere e preservare un patrimonio culturale di inestimabile valore. Ci impegniamo a riscoprire e valorizzare le radici storiche e culturali del nostro paese.
              </p>
              <p style={{ marginBottom: 32 }}>
                In qualità di associazione senza scopo di lucro, ogni nostra attività è orientata al bene comune. Crediamo nella forza della partecipazione attiva e nella solidarietà.
              </p>
              <Link href="/eventi/sacra-rappresentazione" className="btn btn-outline">
                La nostra storia
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {missionItems.map(({ icon, title, text }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "24px 28px",
                    background: "white",
                    borderRadius: 12,
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: "rgba(24,139,135,0.10)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {icon}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 6, fontSize: "1rem" }}>{title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── YOUTUBE ────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-py-sm) 0", background: "var(--color-bg-alt)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">Video</span>
            <h2>La Rappresentazione in immagini</h2>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
            <iframe
              src="https://www.youtube.com/embed/HP3MLFuIrDs?si=x42fnSZf2oL2kj6g"
              title="Rappresentazione della Passione di Cristo – A Passioni"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href="https://www.youtube.com/@AssociazioneaPASSIONI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Guarda altri video su YouTube
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── EVENTI ─────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="section-tag">Iniziative</span>
            <h2>I nostri eventi</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }} className="grid-events">
            {events.map(({ title, date, description, href, image }) => (
              <div key={title} className="card event-card">
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="event-img"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  }} />
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 8 }}>
                    {date}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: 24, lineHeight: 1.65 }}>
                    {description}
                  </p>
                  <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary)", letterSpacing: "0.02em" }}>
                    Scopri di più <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY CTA ────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-dark)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 64, alignItems: "center" }} className="grid-2col">
            <div>
              <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: 16 }}>
                Archivio Fotografico
              </span>
              <h2 style={{ color: "white", marginBottom: 20 }}>Oltre quattro decenni di storia</h2>
              <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 36, lineHeight: 1.75 }}>
                Dalle edizioni storiche del 1985 e 1987 alle rappresentazioni moderne del 2023, 2024 e 2025. Un archivio fotografico che racconta l&apos;evoluzione di una tradizione secolare attraverso volti, costumi e luoghi.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {galleryYears.map(({ year, href }) => (
                  <Link
                    key={year}
                    href={href}
                    className="year-btn"
                    style={{
                      padding: "9px 20px",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                      borderRadius: 4,
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {year}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="grid-photos-4">
              {[
                "/images/galleria/uno.webp",
                "/images/galleria/due.webp",
                "/images/galleria/tre.webp",
                "/images/galleria/quattro.webp",
              ].map((src, i) => (
                <div key={i} style={{ aspectRatio: "4/3", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                  <Image src={src} alt={`Galleria ${i + 1}`} fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}