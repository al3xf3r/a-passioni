"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

interface DropdownItem { label: string; href: string; }
interface NavItem { label: string; href: string; children?: DropdownItem[]; }

const navItems: NavItem[] = [
  { label: "Home", href: "/en" },
  {
    label: "Events", href: "/en/eventi/sacra-rappresentazione",
    children: [
      { label: "Representation of the Passion of Christ", href: "/en/eventi/sacra-rappresentazione" },
      { label: "Summer Passion", href: "/en/eventi/passione-destate" },
      { label: "A Passioni in Music", href: "/en/eventi/concorso" },
    ],
  },
  {
    label: "Photo Archive", href: "/en/galleria",
    children: [
      { label: "Gallery 1985", href: "/en/galleria/1985" },
      { label: "Gallery 1987", href: "/en/galleria/1987" },
      { label: "Gallery 1990", href: "/en/galleria/1990" },
      { label: "Gallery 2023", href: "/en/galleria/2023" },
      { label: "Gallery 2024", href: "/en/galleria/2024" },
    ],
  },
  { label: "Useful Info", href: "/en/info-utili" },
  { label: "Contacts", href: "/en/contatti" },
];

function MobileDrawerEN({ onClose }: { onClose: () => void }) {
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!mounted) return null;

  const drawer = (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 99999, background: "white", overflowY: "auto",
      WebkitOverflowScrolling: "touch",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 68, borderBottom: "1px solid #e2ddd7", position: "sticky", top: 0, background: "white", zIndex: 1 }}>
        <Link href="/en" onClick={onClose}>
          <Image src="/images/as8.webp" alt="A Passioni" width={120} height={44} style={{ height: 40, width: "auto" }} />
        </Link>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", padding: 8, display: "flex" }}>
          <X size={24} />
        </button>
      </div>
      <div style={{ padding: "8px 0 48px" }}>
        {navItems.map((item) => (
          <div key={item.label} style={{ borderBottom: "1px solid #f0ece6" }}>
            {item.children ? (
              <>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <Link href={item.href} onClick={onClose} style={{ flex: 1, padding: "18px 20px", fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 500, color: "#1a1a1a", display: "block" }}>
                    {item.label}
                  </Link>
                  <button onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                    style={{ background: "none", border: "none", borderLeft: "1px solid #f0ece6", cursor: "pointer", padding: "0 20px", color: "#1a1a1a" }}>
                    <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: openSub === item.label ? "rotate(180deg)" : "none" }} />
                  </button>
                </div>
                {openSub === item.label && (
                  <div style={{ background: "#faf9f7", paddingBottom: 8 }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={onClose} style={{ display: "block", padding: "12px 28px", fontSize: "0.92rem", color: "#5a5248" }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} onClick={onClose} style={{ display: "block", padding: "18px 20px", fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 500, color: "#1a1a1a" }}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div style={{ padding: "24px 20px" }}>
          <Link href="/" onClick={onClose} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1.5px solid var(--color-primary)", borderRadius: 4, fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-primary)" }}>
            <Globe size={15} /> Italiano
          </Link>
        </div>
      </div>
    </div>
  );

  return createPortal(drawer, document.body);
}

export default function NavbarEN() {
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
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <nav ref={navRef} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000, background: "white", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 0 rgba(0,0,0,0.07)", transition: "box-shadow 0.3s" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
            <Link href="/en" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image src="/images/as8.webp" alt="A Passioni" width={130} height={52} style={{ height: 44, width: "auto", objectFit: "contain" }} priority />
            </Link>
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navItems.map((item) => (
                <div key={item.label} style={{ position: "relative" }}>
                  {item.children ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Link href={item.href} style={{ padding: "8px 10px 8px 14px", fontSize: "0.85rem", fontWeight: 500, color: "var(--color-dark)" }}>{item.label}</Link>
                        <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} style={{ padding: "8px 10px 8px 2px", background: "none", border: "none", cursor: "pointer", color: "var(--color-dark)", display: "flex", alignItems: "center" }}>
                          <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0)" }} />
                        </button>
                      </div>
                      {openDropdown === item.label && (
                        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: "white", borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 280, overflow: "hidden", border: "1px solid var(--color-border)", zIndex: 100 }}>
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
                    <Link href={item.href} style={{ display: "block", padding: "8px 14px", fontSize: "0.85rem", fontWeight: 500, color: "var(--color-dark)" }}>{item.label}</Link>
                  )}
                </div>
              ))}
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", marginLeft: 8, border: "1.5px solid var(--color-primary)", borderRadius: 4, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-primary)" }}>
                <Globe size={13} />IT
              </Link>
            </div>
            <button onClick={() => setMobileOpen(true)} className="mobile-toggle"
              style={{ display: "none", background: "none", border: "1.5px solid #d0ccc6", borderRadius: 6, cursor: "pointer", color: "#1a1a1a", padding: "6px 8px", alignItems: "center", justifyContent: "center" }}
              aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && <MobileDrawerEN onClose={() => setMobileOpen(false)} />}

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
