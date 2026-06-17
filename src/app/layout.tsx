import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.associazioneapassioni.com";
const OG_IMAGE = `${BASE_URL}/images/og-passioni.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "A Passioni · La Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia",
    template: "%s · A Passioni",
  },
  description:
    "Dal 1790, il borgo antico di Francavilla di Sicilia si trasforma in teatro naturale per la Sacra Rappresentazione della Passione di Cristo. Scopri eventi, tradizioni e archivio fotografico.",
  keywords: [
    "Passione di Cristo", "Sacra Rappresentazione", "Francavilla di Sicilia",
    "Via Crucis", "Settimana Santa Sicilia", "Tradizione religiosa siciliana",
    "Fiume Alcantara", "Turismo religioso Sicilia", "Associazione A Passioni",
  ],
  authors: [{ name: "Associazione A Passioni", url: BASE_URL }],
  creator: "Associazione A Passioni",
  publisher: "Associazione A Passioni",
  openGraph: {
    title: "A Passioni · La Sacra Rappresentazione della Passione di Cristo",
    description: "Dal 1790, il borgo antico di Francavilla di Sicilia si trasforma in teatro naturale per una delle rappresentazioni sacre più antiche della Sicilia.",
    url: BASE_URL,
    siteName: "A Passioni",
    locale: "it_IT",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sacra Rappresentazione della Passione di Cristo a Francavilla di Sicilia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Passioni · La Passione di Cristo a Francavilla di Sicilia",
    description: "Dal 1790, una tradizione centenaria nel borgo antico di Francavilla di Sicilia.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "it-IT": BASE_URL, "en-US": `${BASE_URL}/en` },
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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