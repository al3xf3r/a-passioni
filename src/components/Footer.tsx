import Link from "next/link";
import Image from "next/image";

function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
function YoutubeIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="var(--yt-play, #188B87)" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>;
}

const TEAL = "#188B87";
const TEAL_DARK = "#0f6b68";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* CTA rimani aggiornato — sfondo bianco, testo e bottone teal */}
      <div style={{ background: "white", borderTop: "1px solid #e8e4df", padding: "56px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: TEAL, marginBottom: 16 }}>Rimani aggiornato</h2>
          <p style={{ color: "#5a5248", marginBottom: 32, maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Segui la nostra pagina Facebook per non perdere eventi, aggiornamenti e notizie dalla comunità francavillese.
          </p>
          <a
            href="https://www.facebook.com/sacrarappresentazionefrancavilladisicilia/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 28px",
              background: "white",
              color: TEAL,
              border: `2px solid ${TEAL}`,
              borderRadius: 4,
              fontSize: "0.85rem", fontWeight: 700,
              letterSpacing: "0.04em", textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            Segui su Facebook
          </a>
        </div>
      </div>

      {/* Footer principale — sfondo teal */}
      <div style={{ background: TEAL, padding: "48px 0 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="footer-grid">

            {/* Brand */}
            <div>
              <Image src="/images/as8.webp" alt="A Passioni" width={130} height={52}
                style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 16 }} />
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 20, maxWidth: 260 }}>
                Un&apos;antica tradizione francavillese che l&apos;associazione laica &ldquo;a Passioni&rdquo; vuole mantenere viva.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { href: "https://www.facebook.com/sacrarappresentazionefrancavilladisicilia/", icon: <FacebookIcon />, label: "Facebook" },
                  { href: "https://www.instagram.com/s.rappresentazionefrancavilla?igsh=NjY0dDJoYW8yc3Q=", icon: <InstagramIcon />, label: "Instagram" },
                  { href: "https://www.youtube.com/@AssociazioneaPASSIONI", icon: <YoutubeIcon />, label: "YouTube" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
                Pagine
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "Rappresentazione", href: "/eventi/sacra-rappresentazione" },
                  { label: "Passione d'estate", href: "/eventi/passione-destate" },
                  { label: "A Passioni in Musica", href: "/eventi/concorso" },
                  { label: "Archivio Fotografico", href: "/galleria" },
                  { label: "Info utili", href: "/info-utili" },
                  { label: "Contatti", href: "/contatti" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", transition: "color 0.2s" }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* IBAN */}
            <div>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
                Sostienici
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", marginBottom: 16, lineHeight: 1.6 }}>
                Puoi supportare l&apos;associazione con un contributo volontario.
              </p>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "14px 16px" }}>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>IBAN</div>
                <div style={{ fontSize: "0.8rem", color: "white", fontWeight: 600, wordBreak: "break-all", lineHeight: 1.5, fontFamily: "monospace" }}>
                  IT76P0871383930000000434677
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Associazione &ldquo;a Passioni&rdquo;</div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: 40, padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
              &copy; {year} Associazione A Passioni. Tutti i diritti riservati.
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
              Realizzato da{" "}
              <a href="https://hash42.xyz/it" target="_blank" rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
                Hash42 Labs
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
