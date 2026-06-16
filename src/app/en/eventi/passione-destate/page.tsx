import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summer Passion",
  description: "On 3 August 2025, \"Apericena c'a Passioni\" returns – an experiential journey between gastronomy, storytelling and spirituality in Francavilla di Sicilia.",
};

const momenti = [
  { num: "01", title: "U frittu nto coppu", text: "The evening opens with a gastronomic experience dedicated to local flavours. The stars are zero-kilometre vegetables, fried and served in the traditional paper \"coppu\". A tribute to peasant cuisine and the authenticity of local produce.", image: "/images/galleria/1b.webp" },
  { num: "02", title: "U Cunta Storie", text: "A narrative moment in the Sicilian language, through stories that preserve community memory. An oral testimony that strengthens the bond between generations, reinforcing the value of local language and culture.", image: "/images/galleria/2b.webp" },
  { num: "03", title: "Representation of the Passion of Christ", text: "The evening culminates with the dramatisation of the Passion of Christ, accompanied by video projections. A theatrical and spiritual moment of great intensity, fusing sacredness and visual suggestion.", image: "/images/galleria/3b.webp" },
];

export default function PassioneDestateENPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb">
              <Link href="/en">Home</Link><span className="breadcrumb-sep">/</span>
              <Link href="/en/eventi/sacra-rappresentazione">Events</Link><span className="breadcrumb-sep">/</span>
              <span>Summer Passion</span>
            </nav>
            <h1>Summer Passion</h1>
            <p>An experiential journey between gastronomy, memory and spirituality in the heart of Francavilla di Sicilia.</p>
          </div>
        </div>
      </div>

      <section style={{ padding: "var(--section-py) 0", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 64, alignItems: "center", marginBottom: 80 }} className="grid-2col">
            <div>
              <span className="section-tag">3 August 2025</span>
              <h2 style={{ marginBottom: 8 }}>Apericena c&apos;a Passioni</h2>
              <div className="section-divider" />
              <p style={{ marginBottom: 16 }}>On 3 August 2025, an event that celebrates the cultural identity and spiritual heritage of the territory returns.</p>
              <p style={{ marginBottom: 16 }}>Francavilla di Sicilia prepares to welcome one of the most significant evenings of the summer: &ldquo;Apericena c&apos;a Passioni&rdquo;, bringing together gastronomic tradition, collective memory and spirituality.</p>
              <p style={{ marginBottom: 32 }}>The event will take place from 8:00 PM at the Madonna Gala suburban park, on the banks of the San Paolo river.</p>
              <div style={{ display: "flex", gap: 24, padding: "20px 24px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)", border: "1px solid var(--color-border)" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Date</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-dark)" }}>3 August 2025</div>
                </div>
                <div style={{ width: 1, background: "var(--color-border)" }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Time</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-dark)" }}>8:00 PM</div>
                </div>
                <div style={{ width: 1, background: "var(--color-border)" }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 4 }}>Venue</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-dark)" }}>Parco Madonna Gala</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
              <Image src="/images/galleria/1b.webp" alt="Summer Passion" fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-tag">The programme</span>
              <h2>A journey in three moments</h2>
              <div className="section-divider centered" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {momenti.map(({ num, title, text, image }, i) => (
                <div key={num} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", direction: "ltr" as "ltr" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                    <Image src={image} alt={title} fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, background: "var(--color-primary)", borderRadius: 8, fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: 20 }}>{num}</div>
                    <h3 style={{ marginBottom: 16 }}>{title}</h3>
                    <p style={{ lineHeight: 1.8, color: "var(--color-text-muted)" }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: 12, marginBottom: 64 }} className="grid-3col">
            {["/images/galleria/4b.webp", "/images/galleria/5b.webp", "/images/galleria/6b.webp"].map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden" }}>
                <Image src={src} alt={`Summer Passion ${i + 1}`} fill
                    sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>

          <div style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", borderRadius: 20, padding: "48px 56px", color: "white" }}>
            <h3 style={{ color: "white", marginBottom: 16 }}>An initiative that enhances the community</h3>
            <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, maxWidth: 640 }}>
              The event is promoted by the Association &ldquo;A Passioni&rdquo;, with the support of the Municipal Administration of Francavilla di Sicilia and the Pro Loco Pro Francavilla. A collective act of care and enhancement of the territory.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic" }}>
              3 August 2025 – An evening to be moved by the power of tradition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
