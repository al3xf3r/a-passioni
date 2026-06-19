import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Archive",
  description: "The photographic archive of the A Passioni Association: four decades of the Sacred Representation of the Passion of Christ in Francavilla di Sicilia.",
};

const galleries = [
  { year: "1985", href: "/en/galleria/1985", description: "The great revival of the tradition in 1985, championed by Mayor Salvatore Puglisi.", color: "#8B6F47" },
  { year: "1987", href: "/en/galleria/1987", description: "Two years later, the Representation again involves hundreds of people from Francavilla.", color: "#5B7A6B" },
  { year: "1990", href: "/en/galleria/1990", description: "The 1990 edition, among the richest in community participation.", color: "#4A6B8A" },
  { year: "2023", href: "/en/galleria/2023", description: "A grand return with the renewed format and the debut of the Association.", color: "#188B87" },
  { year: "2024", href: "/en/galleria/2024", description: "The 2024 edition: the representation in the ancient village, more alive than ever.", color: "#0f6b68" },
  { year: "2025", href: "/en/galleria/2025", description: "The 2025 edition of the Sacred Representation of the Passion of Christ.", color: "#1a8a85" },
  { year: "2026", href: "/en/galleria/2026", description: "The 2026 edition of the Sacred Representation of the Passion of Christ.", color: "#0d5552" },
];

export default function GalleriaENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link><span className="breadcrumb-sep">/</span>
              <span>Photo Archive</span>
            </nav>
            <h1>Photo Archive</h1>
            <p>Four decades of history, faith and community told through images.</p>
          </div>
        </div>
      </div>
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {galleries.map(({ year, href, description, color }) => (
              <Link key={year} href={href} className="gallery-year-card">
                <div style={{ height: 120, background: `linear-gradient(135deg, ${color}, ${color}bb)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em" }}>{year}</span>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: 8 }}>Gallery {year}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.65 }}>{description}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 16, fontSize: "0.82rem", fontWeight: 600, color }}>Browse gallery <ArrowRight size={13} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}