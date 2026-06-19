import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CloudinaryGallery from "@/components/CloudinaryGallery";

const validYears = ["1985", "1987", "1990", "2023", "2024", "2025", "2026"];

export async function generateStaticParams() {
  return validYears.map((year) => ({ year }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ year: string }> }
): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Galleria Fotografica ${year}`,
    description: `Archivio fotografico della Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia – edizione ${year}.`,
  };
}

export default async function GalleriaYearPage(
  { params }: { params: Promise<{ year: string }> }
) {
  const { year } = await params;
  if (!validYears.includes(year)) notFound();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/galleria">Archivio Fotografico</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{year}</span>
            </nav>
            <h1>Galleria {year}</h1>
            <p>Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia – edizione {year}.</p>
          </div>
        </div>
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
            {validYears.map((y) => (
              <Link
                key={y}
                href={`/galleria/${y}`}
                style={{
                  padding: "8px 18px",
                  borderRadius: 4,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  background: y === year ? "var(--color-primary)" : "white",
                  color: y === year ? "white" : "var(--color-text-muted)",
                  border: `1.5px solid ${y === year ? "var(--color-primary)" : "var(--color-border)"}`,
                }}
              >
                {y}
              </Link>
            ))}
          </div>

          <CloudinaryGallery year={year} />
        </div>
      </section>
    </>
  );
}