import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Utensils, BedDouble } from "lucide-react";

export const metadata: Metadata = { title: "Useful Info", description: "Where to eat and sleep in Francavilla di Sicilia during the Sacred Representation. Recommended restaurants, bars and accommodation." };

const bars = [
  { name: "Crema & Cioccolato", address: "Via Roma, 101, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/AWQ5rmp" },
  { name: "Chiosco bar da Claudia", address: "Via Umberto, 10, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/xJ1S8Ko" },
  { name: "Dolce e Salato", address: "Via Cesare Battisti, 60, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/gbi7MtZ" },
  { name: "Da Vincenzino", address: "Via Antonio Gramsci, 1, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/9DkftBT" },
];
const ristoranti = [
  { name: "Trattoria Rapisardi", address: "Via Roma, 63, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/Vo2UTCn" },
  { name: "Il Quadrifoglio Blu", address: "Via Regina Margherita, 26, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/nh8HQzM" },
  { name: "Le Prelibatezze Dell'Alcantara", address: "Via Regina Elena, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/xAKjT9N" },
  { name: "Macelleria Braceria \"U Pacciu\"", address: "Via Roma, 41, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/s4xmszC" },
  { name: "Trattoria Pizzeria I Due Compari", address: "Via Nazionale, 88, 98030 Motta Camastra ME", maps: "https://g.co/kgs/dXqvPoU" },
  { name: "iBurger", address: "Via Don Luigi Sturzo, 5, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/mxYruFL" },
  { name: "LindiBurger", address: "Via Don Nino Russotti, 11, 98034 Francavilla di Sicilia ME", maps: "https://g.co/kgs/ydRDRrW" },
];
const strutture = [
  { name: "Casa Catena", address: "Piazza Garibaldi, 22, 98034 Francavilla di Sicilia ME", link: "https://www.booking.com/hotel/it/casa-catena.it.html", linkLabel: "Booking.com" },
  { name: "Sweet Home", address: "Via Ariosto, 1, 98034 Francavilla di Sicilia ME", link: "https://www.booking.com/hotel/it/sweet-home-francavilla-di-sicilia.it.html", linkLabel: "Booking.com" },
  { name: 'Casa Vacanza "Al n° 5"', address: "Via Cesare Battisti, 60, 98034 Francavilla di Sicilia ME", link: "https://www.booking.com/hotel/it/al-numero-5-francavilla-di-sicilia.it.html", linkLabel: "Booking.com" },
];

function PlaceCard({ name, address, maps, link, linkLabel }: { name: string; address: string; maps?: string; link?: string; linkLabel?: string }) {
  return (
    <div style={{ padding: "20px 24px", background: "white", borderRadius: 10, boxShadow: "var(--shadow-sm)", border: "1px solid var(--color-border)" }}>
      <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--color-dark)", marginBottom: 6 }}>{name}</div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: "0.82rem", color: "var(--color-text-muted)", marginBottom: 12 }}>
        <MapPin size={13} style={{ flexShrink: 0, marginTop: 2 }} />{address}
      </div>
      {(maps || link) && (
        <a href={maps ?? link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.78rem", fontWeight: 600, color: "var(--color-primary)" }}>
          {maps ? "View on Google Maps" : linkLabel ?? "Visit website"}<ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}

export default function InfoUtiliENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link><span className="breadcrumb-sep">/</span><span>Useful Info</span>
            </nav>
            <h1>Useful Info</h1>
            <p>Everything you need to know to make the most of your visit to the Sacred Representation in Francavilla di Sicilia.</p>
          </div>
        </div>
      </div>
      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ marginBottom: 72 }}>
            <span className="section-tag">Location</span>
            <h2 style={{ marginBottom: 8 }}>Main venue</h2>
            <div className="section-divider" />
            <p style={{ marginBottom: 32, maxWidth: 600, color: "var(--color-text-muted)" }}>The Sacred Representation takes place in the ancient village of Francavilla di Sicilia, along the historic streets of the town centre.</p>
            <div className="map-wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.1746744425022!2d15.1367917386376!3d37.898896309510484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13141bed56d3417d%3A0xa2015d743755e74f!2sVia%20Filippo%20Romano%2C%2098034%20Francavilla%20di%20Sicilia%20ME!5e0!3m2!1sit!2sit!4v1743381260508!5m2!1sit!2sit"
                title="Francavilla di Sicilia main location" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div style={{ display: "grid", gap: 64, alignItems: "start" }} className="contact-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(24,139,135,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}><Utensils size={18} /></div>
                <span className="section-tag" style={{ margin: 0 }}>Where to eat</span>
              </div>
              <h2 style={{ marginBottom: 8 }}>Restaurants and cafes</h2>
              <div className="section-divider" />
              <h4 style={{ marginBottom: 16, color: "var(--color-text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bars and Snack Bars</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>{bars.map((b) => <PlaceCard key={b.name} {...b} />)}</div>
              <h4 style={{ marginBottom: 16, color: "var(--color-text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Restaurants</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{ristoranti.map((r) => <PlaceCard key={r.name} {...r} />)}</div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(24,139,135,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}><BedDouble size={18} /></div>
                <span className="section-tag" style={{ margin: 0 }}>Where to sleep</span>
              </div>
              <h2 style={{ marginBottom: 8 }}>Accommodation</h2>
              <div className="section-divider" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{strutture.map((s) => <PlaceCard key={s.name} {...s} />)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
