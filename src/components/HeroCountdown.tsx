"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const TARGET = new Date("March 21, 2027 17:00:00");

export default function HeroCountdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    setTime(getTimeLeft(TARGET));
    const interval = setInterval(() => setTime(getTimeLeft(TARGET)), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(10,10,10,0.75)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div className="container">
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          gap: 24,
          flexWrap: "wrap",
        }}>
          {/* Event info */}
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: 4 }}>
              Prossimo evento
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 500, color: "white" }}>
              Rappresentazione della Passione di Cristo
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
              21 marzo 2027
            </div>
          </div>

          {/* Countdown */}
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { value: time.days, label: "giorni" },
              { value: time.hours, label: "ore" },
              { value: time.minutes, label: "minuti" },
              { value: time.seconds, label: "secondi" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 600,
                  color: "white",
                  lineHeight: 1,
                  minWidth: 52,
                }}>
                  {String(value).padStart(2, "0")}
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/eventi/passione-destate" className="btn btn-primary" style={{ fontSize: "0.8rem", flexShrink: 0 }}>
            Scopri di più
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}