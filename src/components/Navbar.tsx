"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Eventi", href: "/eventi/sacra-rappresentazione",
    children: [
      { label: "Rappresentazione della Passione di Cristo", href: "/eventi/sacra-rappresentazione" },
      { label: "Passione d'estate", href: "/eventi/passione-destate" },
      { label: "A Passioni in Musica", href: "/eventi/concorso" },
    ],
  },
  {
    label: "Archivio Fotografico", href: "/galleria",
    children: [
      { label: "Galleria 1985", href: "/galleria/1985" },
      { label: "Galleria 1987", href: "/galleria/1987" },
      { label: "Galleria 1990", href: "/galleria/1990" },
      { label: "Galleria 2023", href: "/galleria/2023" },
      { label: "Galleria 2024", href: "/galleria/2024" },
    ],
  },
  { label: "Info utili", href: "/info-utili" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => { setMobileOpen(false); setOpenSub(null); };
  const isTransparent = !scrolled && !mobileOpen;
  const textColor = isTransparent ? "rgba(255,255,255,0.94)" : "var(--color-dark)";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        background: isTransparent ? "transparent" : "white",
        boxShadow: isTransparent ? "none" : "0 2px 12px rgba(0,0,0,0.10)",
        transition: "background 0.3s, box-shadow 0.3s",
      }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
            <Link href="/" onClick={close}>
              <Image
                src="/images/as8.webp"
                alt="A Passioni"
                width={130}
                height={52}
                style={{
                  height: 44, width: "auto", objectFit: "contain",
                  filter: isTransparent ? "drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(255,255,255,0.75)) drop-shadow(0 0 32px rgba(255,255,255,0.4)) drop-shadow(0 1px 3px rgba(0,0,0,0.4))" : "none",
                  transition: "filter 0.3s",
                }}
                priority
              />
            </Link>

            {/* Desktop */}
            <div className="nav-desktop">
              {navItems.map((item) => (
                <div key={item.label} style={{ position: "relative" }}>
                  {item.children ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Link href={item.href} style={{ padding: "8px 10px 8px 14px", fontSize: "0.85rem", fontWeight: 500, color: textColor, transition: "color 0.3s" }}>{item.label}</Link>
                        <button onClick={() => setOpenDesktop(openDesktop === item.label ? null : item.label)}
                          style={{ padding: "8px 10px 8px 2px", background: "none", border: "none", cursor: "pointer", color: textColor, display: "flex", alignItems: "center", transition: "color 0.3s" }}>
                          <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: openDesktop === item.label ? "rotate(180deg)" : "rotate(0)" }} />
                        </button>
                      </div>
                      {openDesktop === item.label && (
                        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: "white", borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 280, overflow: "hidden", border: "1px solid var(--color-border)", zIndex: 100 }}>
                          {item.children.map((child, i) => (
                            <Link key={child.href} href={child.href} onClick={() => setOpenDesktop(null)}
                              style={{ display: "block", padding: "12px 20px", fontSize: "0.875rem", color: "var(--color-text)", borderBottom: i < item.children!.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} style={{ display: "block", padding: "8px 14px", fontSize: "0.85rem", fontWeight: 500, color: textColor, transition: "color 0.3s" }}>{item.label}</Link>
                  )}
                </div>
              ))}
              <Link href="/en" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", marginLeft: 8, border: `1.5px solid ${isTransparent ? "rgba(255,255,255,0.5)" : "var(--color-primary)"}`, borderRadius: 4, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: isTransparent ? "rgba(255,255,255,0.94)" : "var(--color-primary)", transition: "all 0.3s" }}>
                <Globe size={13} />EN
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              aria-label="Menu"
              style={{
                color: isTransparent ? "white" : "#1a1a1a",
                borderColor: isTransparent ? "rgba(255,255,255,0.4)" : "#d0ccc6",
                background: isTransparent ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay ${mobileOpen ? "open" : ""}`}>
        <div className="nav-mobile-inner">
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid #f0ece6" }}>
              {item.children ? (
                <>
                  <div style={{ display: "flex", alignItems: "stretch" }}>
                    <Link href={item.href} onClick={close}
                      style={{ flex: 1, padding: "18px 20px", fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 500, color: "#1a1a1a", display: "block" }}>
                      {item.label}
                    </Link>
                    <button onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      style={{ background: "none", border: "none", borderLeft: "1px solid #f0ece6", cursor: "pointer", padding: "0 20px", color: "#1a1a1a" }}>
                      <ChevronDown size={18} style={{ transition: "transform 0.2s", transform: openSub === item.label ? "rotate(180deg)" : "none" }} />
                    </button>
                  </div>
                  {openSub === item.label && (
                    <div style={{ background: "#faf9f7", paddingBottom: 8 }}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={close}
                          style={{ display: "block", padding: "13px 28px", fontSize: "0.95rem", color: "#5a5248" }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={close}
                  style={{ display: "block", padding: "18px 20px", fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 500, color: "#1a1a1a" }}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div style={{ padding: "24px 20px" }}>
            <Link href="/en" onClick={close} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1.5px solid var(--color-primary)", borderRadius: 4, fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase" as const, color: "var(--color-primary)" }}>
              <Globe size={15} /> English
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .nav-desktop { display: flex; align-items: center; gap: 2px; }
        .nav-hamburger { display: none; border: 1.5px solid #d0ccc6; border-radius: 6px; cursor: pointer; padding: 6px 8px; align-items: center; justify-content: center; transition: all 0.3s; }
        .nav-mobile-overlay { display: none; position: fixed; top: 68px; left: 0; right: 0; bottom: 0; background: white; z-index: 499; overflow-y: auto; -webkit-overflow-scrolling: touch; transform: translateX(100%); transition: transform 0.3s ease; }
        .nav-mobile-overlay.open { transform: translateX(0); }
        .nav-mobile-inner { padding-bottom: 48px; }
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-overlay { display: block; }
        }
      `}</style>
    </>
  );
}