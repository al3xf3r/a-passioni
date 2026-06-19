import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Camera, Heart, Users } from "lucide-react";
import HeroCarouselEN from "@/components/en/HeroCarouselEN";

export const metadata: Metadata = {
  title: "A Passioni – Passion of Christ in Francavilla di Sicilia",
  description: "A Passioni celebrates the Passion of Christ in Francavilla di Sicilia, Sicily. Discover events, traditions and our photo archive.",
};

const missionItems = [
  {
    icon: <Heart size={22} />,
    title: "Cultural and Historical Promotion",
    text: "We organise events and initiatives that highlight the historical roots and cultural significance of the Passion of Christ.",
  },
  {
    icon: <Users size={22} />,
    title: "Social Commitment and Volunteering",
    text: "We support social projects and volunteering activities, contributing to community wellbeing and solidarity.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Intangible Heritage",
    text: "A centuries-old representation dating back to 1790, performed in the ancient village of Francavilla di Sicilia as a natural open-air theatre.",
  },
];

const events = [
  {
    title: "Representation of the Passion of Christ",
    date: "Palm Sunday",
    description: "The Sacred Representation in the ancient village of Francavilla di Sicilia, with over 500 participants in period costumes. An open-air theatre between faith and history.",
    href: "/en/eventi/sacra-rappresentazione",
    image: "/images/galleria/uno.webp",
  },
  {
    title: "Summer Passion",
    date: "Summer 2025",
    description: "An experiential journey in three moments: local street food, Sicilian storytelling, and the Representation of the Passion with video projections.",
    href: "/en/eventi/passione-destate",
    image: "/images/galleria/1b.webp",
  },
  {
    title: "A Passioni in Music",
    date: "Music competition",
    description: "A competition open to musicians and composers to create the official music for the Sacred Representation. Tradition meets contemporary creation.",
    href: "/en/eventi/concorso",
    image: "/images/concorso.webp",
  },
];

const galleryYears = [
  { year: "1985", href: "/en/galleria/1985" },
  { year: "1987", href: "/en/galleria/1987" },
  { year: "1990", href: "/en/galleria/1990" },
  { year: "2023", href: "/en/galleria/2023" },
  { year: "2024", href: "/en/galleria/2024" },
  { year: "2025", href: "/en/galleria/2025" },
  { year: "2026", href: "/en/galleria/2026" },
];

export default function ENHomePage() {
  return (
    <>
      <HeroCarouselEN />

      {/* WHO WE ARE */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 80, alignItems: "center" }} className="grid-2col">
            <div>
              <span className="section-tag">Who we are</span>
              <h2 style={{ marginBottom: 8 }}>An association born from passion</h2>
              <div className="section-divider" />
              <p style={{ marginBottom: 20 }}>
                Founded in January 2023, the Association <strong>&ldquo;a Passioni&rdquo;</strong> was created to promote and safeguard the Sacred Representation of the Passion of Christ.
              </p>
              <p style={{ marginBottom: 20 }}>
                Our activity is based on passion, dedication and the desire to spread and preserve a cultural heritage of immeasurable value. We are committed to rediscovering and enhancing the historical and cultural roots of our village.
              </p>
              <p style={{ marginBottom: 32 }}>
                As a non-profit association, all our activities are oriented towards the common good. We believe in the power of active participation and solidarity.
              </p>
              <Link href="/en/eventi/sacra-rappresentazione" className="btn btn-outline">
                Our history <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: "grid", gap: 20 }}>
              {missionItems.map(({ icon, title, text }) => (
                <div key={title} style={{ display: "flex", gap: 20, padding: "24px 28px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 8, background: "rgba(24,139,135,0.10)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

      {/* VIDEO */}
      <section style={{ padding: "var(--section-py-sm) 0", background: "var(--color-bg-alt)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">Video</span>
            <h2>The Representation in images</h2>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
            <iframe src="https://www.youtube.com/embed/HP3MLFuIrDs?si=x42fnSZf2oL2kj6g" title="Representation of the Passion of Christ – A Passioni"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="https://www.youtube.com/@AssociazioneaPASSIONI" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Watch more on YouTube <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="section-tag">Initiatives</span>
            <h2>Our events</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }} className="grid-events">
            {events.map(({ title, date, description, href, image }) => (
              <div key={title} className="card event-card">
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image src={image} alt={title} fill
                    sizes="(max-width: 768px) 100vw, 50vw" className="event-img" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 8 }}>{date}</div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: 24, lineHeight: 1.65 }}>{description}</p>
                  <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary)" }}>
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY CTA */}
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-dark)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 64, alignItems: "center" }} className="grid-2col">
            <div>
              <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: 16 }}>Photo Archive</span>
              <h2 style={{ color: "white", marginBottom: 20 }}>Over four decades of history</h2>
              <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 36, lineHeight: 1.75 }}>
                From the historic editions of 1985 and 1987 to the modern representations of 2023, 2024 and 2025. A photographic archive telling the evolution of a centuries-old tradition through faces, costumes and places.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {galleryYears.map(({ year, href }) => (
                  <Link key={year} href={href} className="year-btn"
                    style={{ padding: "9px 20px", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 4, fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
                    {year}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="grid-photos-4">
              {["/images/galleria/uno.webp", "/images/galleria/due.webp", "/images/galleria/tre.webp", "/images/galleria/quattro.webp"].map((src, i) => (
                <div key={i} style={{ aspectRatio: "4/3", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                  <Image src={src} alt={`Gallery ${i + 1}`} fill
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