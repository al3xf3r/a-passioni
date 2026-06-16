"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

interface DropdownItem { label: string; href: string; }
interface NavItem { label: string; href: string; children?: DropdownItem[]; }

const navItems: NavItem[] = [
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav ref={navRef} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "white",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.10)" : "0 1px 0 rgba(0,0,0,0.07)",
        transition: "box-shadow 0.3s",
      }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image src="/images/as8.webp" alt="A Passioni" width={130} height={52}
                style={{ height: 44, width: "auto", objectFit: "contain" }} priority />
            </Link>

            {/* Desktop nav */}
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navItems.map((item) => (
                <div key={item.label} style={{ position: "relative" }}>
                  {item.children ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Link href={item.href} style={{ padding: "8px 10px 8px 14px", fontSize: "0.85rem", fontWeight: 500, color: "var(--color-dark)", transition: "color 0.2s" }}>
                          {item.label}
                        </Link>
                        <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          style={{ padding: "8px 10px 8px 2px", background: "none", border: "none", cursor: "pointer", color: "var(--color-dark)", display: "flex", alignItems: "center" }}>
                          <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0)" }} />
                        </button>
                      </div>
                      {openDropdown === item.label && (
                        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: "white", borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 280, overflow: "hidden", border: "1px solid var(--color-border)" }}>
                          {item.children.map((child, i) => (
                            <Link key={child.href} href={child.href} onClick={() => setOpenDropdown(null)} className="nav-dropdown-item"
                              style={{ display: "block", padding: "12px 20px", fontSize: "0.875rem", color: "var(--color-text)", borderBottom: i < item.children!.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} style={{ display: "block", padding: "8px 14px", fontSize: "0.85rem", fontWeight: 500, color: "var(--color-dark)", transition: "color 0.2s" }}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link href="/en" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", marginLeft: 8, border: "1.5px solid var(--color-primary)", borderRadius: 4, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-primary)", transition: "all 0.2s" }}>
                <Globe size={13} />EN
              </Link>
            </div>

            {/* Hamburger — always visible on mobile */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle"
              style={{ display: "none", background: "none", border: "1.5px solid var(--color-border)", borderRadius: 6, cursor: "pointer", color: "var(--color-dark)", padding: "6px 8px", alignItems: "center", justifyContent: "center" }}
              aria-label="Apri menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "white", overflowY: "auto", paddingTop: 68 }}>
          <div style={{ padding: "16px 20px 48px" }}>
            {navItems.map((item) => (
              <div key={item.label} style={{ borderBottom: "1px solid var(--color-border)" }}>
                {item.children ? (
                  <>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Link href={item.href} onClick={() => setMobileOpen(false)}
                        style={{ padding: "16px 0", fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 500, color: "var(--color-dark)", flex: 1, display: "block" }}>
                        {item.label}
                      </Link>
                      <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "16px 0 16px 16px", color: "var(--color-dark)" }}>
                        <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: openDropdown === item.label ? "rotate(180deg)" : "none" }} />
                      </button>
                    </div>
                    {openDropdown === item.label && (
                      <div style={{ paddingBottom: 8 }}>
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                            style={{ display: "block", padding: "10px 12px", fontSize: "0.9rem", color: "var(--color-text-muted)", borderRadius: 6 }}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "16px 0", fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 500, color: "var(--color-dark)" }}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ marginTop: 28 }}>
              <Link href="/en" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1.5px solid var(--color-primary)", borderRadius: 4, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-primary)" }}>
                <Globe size={14} />English
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none !important; }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-dropdown-item:hover { background: var(--color-bg) !important; color: var(--color-primary) !important; }
      `}</style>
    </>
  );
}
