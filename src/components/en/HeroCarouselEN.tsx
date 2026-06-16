"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { src: "/images/galleria/unoo.webp", alt: "Sacred Representation – Passion scene" },
  { src: "/images/galleria/tree.webp", alt: "Sacred Representation – historical procession" },
  { src: "/images/galleria/quattroo.webp", alt: "Sacred Representation – Francavilla di Sicilia" },
];

const TARGET = new Date("March 21, 2027 17:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function HeroCarouselEN() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(getTimeLeft());
  const [loaded, setLoaded] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);
  useEffect(() => {
    setLoaded(true);
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100svh", minHeight: 600, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {SLIDES.map((slide, i) => (
        <div key={slide.src} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 0.9s ease", zIndex: 0 }}>
          <Image src={slide.src} alt={slide.alt} fill sizes="100vw" style={{ objectFit: "cover" }} priority={i === 0} />
        </div>
      ))}

      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.95) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "80px 0 24px" }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: 14 }}>
              A Passioni Association · Francavilla di Sicilia, Sicily
            </span>
            <h1 style={{ color: "white", fontSize: "clamp(1.9rem, 5vw, 4.2rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: 18 }}>
              The Passion of Christ
              <br />
              <span style={{ color: "var(--color-primary-light)" }}>lives on</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: 1.7, maxWidth: 480, marginBottom: 28 }}>
              Since 1790, the ancient village of Francavilla di Sicilia becomes a natural theatre for one of Sicily&apos;s oldest sacred representations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <Link href="/en/eventi/sacra-rappresentazione" className="btn btn-primary" style={{ fontSize: "0.82rem" }}>
                Discover the Representation <ArrowRight size={15} />
              </Link>
              <Link href="/en/galleria" className="btn btn-ghost" style={{ fontSize: "0.82rem" }}>
                <Camera size={15} /> Photo Archive
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", gap: 8, paddingBottom: 12 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? "var(--color-primary-light)" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
        ))}
      </div>

      <button onClick={prev} aria-label="Previous" style={{ position: "absolute", left: 12, top: "42%", transform: "translateY(-50%)", zIndex: 3, background: "rgba(0,0,0,0.35)", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white" }}>
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} aria-label="Next" style={{ position: "absolute", right: 12, top: "42%", transform: "translateY(-50%)", zIndex: 3, background: "rgba(0,0,0,0.35)", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white" }}>
        <ChevronRight size={18} />
      </button>

      <div style={{ position: "relative", zIndex: 2, flexShrink: 0, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, padding: "14px 0" }}>
            <div style={{ minWidth: 0, flex: "1 1 160px" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: 2 }}>Next event</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 500, color: "white", lineHeight: 1.3 }}>Representation of the Passion of Christ</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginTop: 1 }}>21 March 2027</div>
            </div>
            {loaded && (
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                {([
                  { value: time.days, label: "days" },
                  { value: time.hours, label: "hrs" },
                  { value: time.minutes, label: "min" },
                  { value: time.seconds, label: "sec" },
                ] as { value: number; label: string }[]).map(({ value, label }, i) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", fontWeight: 700, color: "white", lineHeight: 1, minWidth: 32, textAlign: "center" }}>
                        {String(value).padStart(2, "0")}
                      </div>
                      <div style={{ fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</div>
                    </div>
                    {i < 3 && <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1rem" }}>:</span>}
                  </div>
                ))}
              </div>
            )}
            <Link href="/en/eventi/sacra-rappresentazione" className="btn btn-primary" style={{ fontSize: "0.75rem", flexShrink: 0 }}>
              Learn more <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
