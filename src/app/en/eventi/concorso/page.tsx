import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "A Passioni in Music – Competition",
  description: "A music competition open to composers and musicians to create the official music for the Sacred Representation of the Passion of Christ in Francavilla di Sicilia.",
};

export default function ConcorsoENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link><span className="breadcrumb-sep">/</span>
              <Link href="/en/eventi/sacra-rappresentazione">Events</Link><span className="breadcrumb-sep">/</span>
              <span>A Passioni in Music</span>
            </nav>
            <h1>A Passioni in Music</h1>
            <p>A competition to give a new and unique sound to the Sacred Representation of the Passion of Christ.</p>
          </div>
        </div>
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 80, alignItems: "start" }} className="grid-2col-sidebar">
            <div>
              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)", marginBottom: 48 }}>
                <Image src="/images/concorso.webp" alt="A Passioni in Music" fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div className="prose">
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
                  Are you a musician, composer, or music lover? The a Passioni association invites you to give a new and unique sound to the Sacred Representation of the Passion of Christ in Francavilla di Sicilia (ME).
                </p>
                <h3>What we are looking for</h3>
                <p>Original musical pieces to accompany the key moments of the Passion, such as the Last Supper, the Garden of Gethsemane, the Crucifixion and others.</p>
                <h3>Your music becomes history</h3>
                <p>Selected pieces will become the official music of our Representation. You will receive maximum publicity for your art, and your name will be linked to one of the oldest cultural traditions of eastern Sicily.</p>
              </div>
            </div>
            <div style={{ top: 96 }} className="sidebar-sticky">
              <div style={{ background: "white", borderRadius: 16, padding: "32px 28px", boxShadow: "var(--shadow-md)", marginBottom: 20, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, background: "rgba(24,139,135,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", margin: "0 auto 20px" }}>
                  <Music size={28} />
                </div>
                <h4 style={{ marginBottom: 12 }}>Enter the competition</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: 24 }}>Download the full call with all details and the registration form.</p>
                <a href="/assets/concorso.pdf" download className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <Download size={16} /> Download the call
                </a>
              </div>
              <div style={{ background: "var(--color-dark)", borderRadius: 16, padding: "28px", color: "white" }}>
                <h4 style={{ color: "white", marginBottom: 12 }}>Any questions?</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: 20 }}>For information about the competition, contact us directly.</p>
                <Link href="/en/contatti" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}>Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
