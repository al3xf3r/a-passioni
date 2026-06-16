import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: 700, color: "var(--color-primary)", lineHeight: 1, marginBottom: 16 }}>404</h1>
      <h2 style={{ marginBottom: 12 }}>Pagina non trovata</h2>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>La pagina che cerchi non esiste o è stata spostata.</p>
      <Link href="/" className="btn btn-primary">Torna alla home</Link>
    </div>
  );
}
