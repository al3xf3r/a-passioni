import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Archivio Fotografico",
  description:
    "L'archivio fotografico dell'Associazione A Passioni: quattro decenni di Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia.",
};

const galleries = [
  {
    year: "1985",
    href: "/galleria/1985",
    description: "La grande ripresa della tradizione nel 1985, voluta dal sindaco Salvatore Puglisi.",
    color: "#8B6F47",
  },
  {
    year: "1987",
    href: "/galleria/1987",
    description: "Due anni dopo, la Rappresentazione torna a coinvolgere centinaia di francavillesi.",
    color: "#5B7A6B",
  },
  {
    year: "1990",
    href: "/galleria/1990",
    description: "L'edizione del 1990, tra le più ricche di partecipazione comunitaria.",
    color: "#4A6B8A",
  },
  {
    year: "2023",
    href: "/galleria/2023",
    description: "Il ritorno in grande stile con la formula rinnovata e il debutto dell'Associazione.",
    color: "#188B87",
  },
  {
    year: "2024",
    href: "/galleria/2024",
    description: "L'edizione 2024: la rappresentazione nel borgo antico, ancora più viva.",
    color: "#0f6b68",
  },
];

export default function GalleriaPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Archivio Fotografico</span>
            </nav>
            <h1>Archivio Fotografico</h1>
            <p>Quattro decenni di storia, fede e comunità raccontati attraverso immagini.</p>
          </div>
        </div>
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {galleries.map(({ year, href, description, color }) => (
              <Link key={year} href={href} className="gallery-year-card">
                <div style={{
                  height: 120,
                  background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "-0.02em",
                  }}>
                    {year}
                  </span>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: 8 }}>Galleria {year}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.65 }}>
                    {description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 16, fontSize: "0.82rem", fontWeight: 600, color }}>
                    Sfoglia la galleria <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}