import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Landmark } from "lucide-react";

export const metadata: Metadata = { title: "Contacts", description: "Contact the A Passioni Association in Francavilla di Sicilia. Phone numbers, email and address." };

const contacts = [
  { icon: <Phone size={20} />, label: "Phone", values: ["+39 348 72 22 126", "+39 393 93 55 516", "+39 393 91 33 663"] },
  { icon: <Mail size={20} />, label: "Email", values: ["s.rappresentazionefrancavilla@gmail.com"] },
  { icon: <MapPin size={20} />, label: "Address", values: ["Via Alessandro Volta, 14", "98034 Francavilla di Sicilia (ME)"] },
];

export default function ContattiENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link><span className="breadcrumb-sep">/</span><span>Contacts</span>
            </nav>
            <h1>Contacts</h1>
            <p>We are in Francavilla di Sicilia. Write to us, call us or come visit.</p>
          </div>
        </div>
      </div>
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 64, alignItems: "start" }} className="contact-grid">
            <div>
              <span className="section-tag">How to reach us</span>
              <h2 style={{ marginBottom: 8 }}>Where we are</h2>
              <div className="section-divider" />
              <p style={{ marginBottom: 40, color: "var(--color-text-muted)" }}>For information on events, participation or any other need, you can contact us through the following details.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {contacts.map(({ icon, label, values }) => (
                  <div key={label} style={{ display: "flex", gap: 20, padding: "24px 28px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                    <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 8, background: "rgba(24,139,135,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 6 }}>{label}</div>
                      {values.map((v) => <div key={v} style={{ fontSize: "0.95rem", color: "var(--color-dark)", fontWeight: 500, lineHeight: 1.5 }}>{v}</div>)}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 16 }}>Follow us</div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a href="https://www.facebook.com/sacrarappresentazionefrancavilladisicilia/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "0.82rem" }}>Facebook</a>
                  <a href="https://www.instagram.com/s.rappresentazionefrancavilla?igsh=NjY0dDJoYW8yc3Q=" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "0.82rem" }}>Instagram</a>
                  <a href="https://www.youtube.com/@AssociazioneaPASSIONI" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "0.82rem" }}>YouTube</a>
                </div>
              </div>
            </div>
            <div>
              <div className="map-wrapper" style={{ marginBottom: 32 }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.179255361792!2d15.13181517535622!3d37.90287260477162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13141bf3ca37dac9%3A0xa645e12bf71cdd50!2sVia%20Alessandro%20Volta%2C%2014%2C%2098034%20Francavilla%20di%20Sicilia%20ME!5e0!3m2!1sit!2sit!4v1741736235837!5m2!1sit!2sit"
                  title="A Passioni Association" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div style={{ background: "var(--color-dark)", borderRadius: 16, padding: "32px 28px", color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(24,139,135,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-light)" }}><Landmark size={18} /></div>
                  <h4 style={{ color: "white", margin: 0 }}>Support us</h4>
                </div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: 20 }}>If you want to help us, you can do so with a small contribution.</p>
                <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "16px 20px" }}>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Account holder</div>
                  <div style={{ fontSize: "0.95rem", color: "white", fontWeight: 500, marginBottom: 12 }}>Associazione &ldquo;a Passioni&rdquo;</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>IBAN</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", fontWeight: 600, wordBreak: "break-all", lineHeight: 1.5 }}>IT76P0871383930000000434677</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
