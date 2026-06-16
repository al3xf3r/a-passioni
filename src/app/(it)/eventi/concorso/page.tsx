import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "A Passioni in Musica – Concorso",
  description:
    "Un concorso musicale aperto a compositori e musicisti per creare le musiche ufficiali della Sacra Rappresentazione della Passione di Cristo di Francavilla di Sicilia.",
};

export default function ConcorsoPage() {
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
              <span>A Passioni in Musica</span>
            </nav>
            <h1>A Passioni in Musica</h1>
            <p>Un concorso per dare un suono nuovo e unico alla Sacra Rappresentazione della Passione di Cristo.</p>
          </div>
        </div>
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 80, alignItems: "start" }} className="grid-2col-sidebar">
            <div>
              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)", marginBottom: 48 }}>
                <Image src="/images/concorso.webp" alt="A Passioni in Musica" fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>

              <div className="prose">
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
                  Sei un musicista, un compositore, o un amante della musica? L&apos;associazione a Passioni ti invita a dare un suono nuovo e unico alla Sacra Rappresentazione della Passione di Cristo di Francavilla di Sicilia (ME).
                </p>

                <h3>Cosa cerchiamo</h3>
                <p>
                  Brani musicali inediti per accompagnare i momenti chiave della Passione, come l&apos;Ultima Cena, l&apos;Orto degli Ulivi, la Crocifissione e altri.
                </p>

                <h3>La tua musica diventa storia</h3>
                <p>
                  I brani selezionati diventeranno le musiche ufficiali della nostra Rappresentazione. Riceverai massima pubblicità per la tua arte e il tuo nome sarà legato a una delle tradizioni culturali più antiche della Sicilia orientale.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ top: 96 }} className="sidebar-sticky">
              {/* Music icon block */}
              <div style={{
                background: "white",
                borderRadius: 16,
                padding: "32px 28px",
                boxShadow: "var(--shadow-md)",
                marginBottom: 20,
                textAlign: "center",
              }}>
                <div style={{
                  width: 64,
                  height: 64,
                  background: "rgba(24,139,135,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  margin: "0 auto 20px",
                }}>
                  <Music size={28} />
                </div>
                <h4 style={{ marginBottom: 12 }}>Partecipa al concorso</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: 24 }}>
                  Non perdere tempo. Scarica subito il bando completo con tutti i dettagli e il modulo di iscrizione.
                </p>
                <a
                  href="/assets/concorso.pdf"
                  download
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Download size={16} />
                  Scarica il bando
                </a>
              </div>

              {/* Contact block */}
              <div style={{ background: "var(--color-dark)", borderRadius: 16, padding: "28px", color: "white" }}>
                <h4 style={{ color: "white", marginBottom: 12 }}>Hai domande?</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: 20 }}>
                  Per informazioni sul concorso, contattaci direttamente.
                </p>
                <Link href="/contatti" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}>
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
