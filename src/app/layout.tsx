import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "A Passioni – Rappresentazione della Passione di Cristo a Francavilla di Sicilia",
    template: "%s | A Passioni",
  },
  description:
    "A Passioni è l'associazione che celebra la Passione di Cristo a Francavilla di Sicilia e nei comuni limitrofi. Scopri eventi, tradizioni e come partecipare.",
  keywords: [
    "Passione di Cristo", "Via Crucis", "Settimana Santa", "Francavilla di Sicilia",
    "Rappresentazione sacra", "Tradizione siciliana", "Fiume Alcantara", "Turismo religioso Sicilia",
  ],
  authors: [{ name: "Associazione A Passioni" }],
  openGraph: {
    title: "A Passioni – Rappresentazione della Passione di Cristo a Francavilla di Sicilia",
    description: "Scopri la storia, gli eventi e la spiritualità dell'Associazione A Passioni a Francavilla di Sicilia.",
    url: "https://www.associazioneapassioni.com",
    siteName: "A Passioni",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://www.associazioneapassioni.com/images/as8.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Passioni – La Passione di Cristo a Francavilla di Sicilia",
    description: "Vivi la tradizione della Passione di Cristo con l'Associazione A Passioni a Francavilla di Sicilia.",
  },
  alternates: {
    canonical: "https://www.associazioneapassioni.com",
    languages: { en: "https://www.associazioneapassioni.com/en" },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
