"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Calendar } from "lucide-react";

const TARGET = new Date("August 2, 2026 17:00:00");

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
  const [time, setTime] = useState(getTimeLeft());
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} className="passione-hero">
      <div className="passione-hero-bg" style={{ transform: `translateY(${scrollY * 0.18}px) scale(1.08)` }}>
        <Image
          src="/images/galleria/unoo.webp"
          alt="The Cross of the Sacred Representation of the Passion of Christ in Francavilla di Sicilia"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "65% center" }}
          priority
        />
      </div>

      <div className="passione-hero-overlay" />

      <div className="passione-particles" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${(i * 4.3) % 100}%`,
            animationDelay: `${(i % 7) * 1.3}s`,
            animationDuration: `${9 + (i % 5) * 2}s`,
          }} />
        ))}
      </div>

      <div className={`passione-hero-content ${loaded ? "is-visible" : ""}`}>
        <div className="container">
          <span className="passione-badge">
            A Passioni Association
            <br />
            Francavilla di Sicilia, Sicily
          </span>

          <h1 className="passione-title">
            Since 1790.
            <br />
            The Passion <span className="accent">lives on</span>.
          </h1>

          <div className="passione-rule" />

          <p className="passione-subtitle">
            235 years of history, faith and tradition
            <br />
            in the heart of Sicily.
          </p>

          <div className="passione-cta-row">
            <Link href="/en/eventi/sacra-rappresentazione" className="passione-btn passione-btn-primary">
              Discover the event <ArrowRight size={16} />
            </Link>
            <Link href="/en/galleria" className="passione-btn passione-btn-secondary">
              <Camera size={15} /> View the gallery
            </Link>
          </div>

          {loaded && (
            <div className="passione-countdown-card">
              <div className="passione-countdown-label">
                <Calendar size={14} />
                Next event
              </div>
              <div className="passione-countdown-date">2 August 2026</div>
              <div className="passione-countdown-grid">
                {([
                  { value: time.days, label: "Days" },
                  { value: time.hours, label: "Hours" },
                  { value: time.minutes, label: "Minutes" },
                  { value: time.seconds, label: "Seconds" },
                ]).map(({ value, label }, i) => (
                  <div key={label} className="passione-countdown-unit" style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                    <div className="passione-countdown-value">{String(value).padStart(2, "0")}</div>
                    <div className="passione-countdown-unit-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .passione-hero { position: relative; height: 100vh; min-height: 680px; width: 100%; overflow: hidden; background: #08060a; }
        .passione-hero-bg { position: absolute; inset: -5%; z-index: 0; transition: transform 0.05s linear; will-change: transform; }
        .passione-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background:
            radial-gradient(ellipse 60% 50% at 25% 45%, rgba(0,0,0,0.55) 0%, transparent 60%),
            linear-gradient(115deg, rgba(8,5,7,0.97) 0%, rgba(8,5,7,0.88) 28%, rgba(35,10,12,0.55) 55%, rgba(8,5,7,0.35) 78%, rgba(8,5,7,0.7) 100%),
            linear-gradient(to bottom, rgba(8,5,7,0.25) 0%, transparent 30%, rgba(8,5,7,0.85) 100%);
        }
        .passione-particles { position: absolute; inset: 0; z-index: 2; overflow: hidden; pointer-events: none; }
        .particle {
          position: absolute; bottom: -10px; width: 3px; height: 3px; border-radius: 50%;
          background: rgba(255,160,90,0.55); box-shadow: 0 0 6px 1px rgba(255,140,70,0.4);
          animation-name: floatUp; animation-timing-function: ease-in; animation-iteration-count: infinite;
        }
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          70% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .passione-hero-content {
          position: relative; z-index: 3; height: 100%; display: flex; flex-direction: column;
          justify-content: center; padding-top: 110px; padding-bottom: 64px;
          opacity: 0; transform: translateY(16px); transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .passione-hero-content.is-visible { opacity: 1; transform: translateY(0); }
        .passione-badge {
          display: inline-block; font-family: var(--font-body); font-size: 0.74rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-primary-light);
          line-height: 1.6; margin-bottom: 28px;
        }
        .passione-title {
          font-family: var(--font-display); color: #f7f4ef; font-weight: 500;
          font-size: clamp(2.6rem, 6.2vw, 5.2rem); line-height: 1.08; letter-spacing: -0.01em;
          margin: 0 0 24px; max-width: 720px; text-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .passione-title .accent { color: var(--color-primary-light); }
        .passione-rule { width: 64px; height: 2px; background: linear-gradient(90deg, var(--color-primary-light), transparent); margin-bottom: 24px; }
        .passione-subtitle {
          font-family: var(--font-body); color: rgba(245,242,238,0.78); font-size: clamp(1rem, 1.6vw, 1.18rem);
          font-weight: 400; line-height: 1.6; max-width: 480px; margin: 0 0 40px;
        }
        .passione-cta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }
        .passione-btn {
          display: inline-flex; align-items: center; gap: 9px; padding: 15px 28px; border-radius: 4px;
          font-family: var(--font-body); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
          text-transform: uppercase; text-decoration: none; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); white-space: nowrap;
        }
        .passione-btn-primary { background: var(--color-primary); color: white; box-shadow: 0 4px 20px rgba(24,139,135,0.25); }
        .passione-btn-primary:hover { background: var(--color-primary-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(24,139,135,0.4); }
        .passione-btn-secondary { background: rgba(255,255,255,0.04); color: rgba(245,242,238,0.92); border: 1.5px solid rgba(255,255,255,0.25); backdrop-filter: blur(6px); }
        .passione-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.45); transform: translateY(-2px); }
        .passione-countdown-card {
          display: inline-block; background: rgba(20,16,18,0.55); border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-radius: 14px;
          padding: 22px 28px; box-shadow: 0 12px 40px rgba(0,0,0,0.35); max-width: 480px;
        }
        .passione-countdown-label { display: flex; align-items: center; gap: 7px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-primary-light); margin-bottom: 8px; }
        .passione-countdown-date { font-family: var(--font-display); font-size: 1.4rem; font-weight: 500; color: #f7f4ef; margin-bottom: 16px; }
        .passione-countdown-grid { display: flex; gap: 0; }
        .passione-countdown-unit { flex: 1; text-align: center; padding: 0 14px; }
        .passione-countdown-unit:first-child { padding-left: 0; }
        .passione-countdown-value { font-family: var(--font-display); font-size: clamp(1.5rem, 2.4vw, 2rem); font-weight: 600; color: #f7f4ef; line-height: 1; }
        .passione-countdown-unit-label { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(245,242,238,0.45); margin-top: 6px; }

        @media (max-width: 768px) {
          .passione-hero { min-height: 100svh; height: auto; }
          .passione-hero-content { padding-top: 120px; justify-content: flex-start; padding-bottom: 32px; }
          .passione-title { font-size: clamp(2.1rem, 9vw, 2.8rem); margin-bottom: 18px; }
          .passione-subtitle { margin-bottom: 28px; }
          .passione-cta-row { flex-direction: column; align-items: stretch; gap: 12px; margin-bottom: 24px; }
          .passione-btn { justify-content: center; width: 100%; }
          .passione-countdown-card { padding: 16px 18px; max-width: 100%; }
          .passione-countdown-grid { gap: 0; }
          .passione-countdown-unit { padding: 0 6px; }
          .passione-countdown-value { font-size: 1.3rem; }
                  }
        @media (prefers-reduced-motion: reduce) {
          .passione-hero-bg { transform: none !important; }
          .particle { animation: none; display: none; }
          .passione-hero-content { transition: none; }
        }
      `}</style>
    </section>
  );
}