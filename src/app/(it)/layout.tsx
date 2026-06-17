import type { Metadata } from "next";
import NavbarEN from "@/components/en/NavbarEN";
import FooterEN from "@/components/en/FooterEN";

const BASE_URL = "https://www.associazioneapassioni.com";
const OG_IMAGE = `${BASE_URL}/images/og-passioni.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "A Passioni · The Sacred Representation of the Passion of Christ in Francavilla di Sicilia",
    template: "%s · A Passioni",
  },
  description:
    "Since 1790, the ancient village of Francavilla di Sicilia becomes a natural open-air theatre for the Sacred Representation of the Passion of Christ. Discover events, traditions and our photo archive.",
  keywords: [
    "Passion of Christ",
    "Sacred Representation Sicily",
    "Francavilla di Sicilia",
    "Via Crucis Sicily",
    "Holy Week Sicily",
    "Sicilian religious tradition",
    "Easter Sicily",
    "Religious tourism Sicily",
    "A Passioni Association",
    "Alcantara river Sicily",
  ],
  authors: [{ name: "Associazione A Passioni", url: BASE_URL }],
  creator: "Associazione A Passioni",
  publisher: "Associazione A Passioni",
  openGraph: {
    title: "A Passioni · The Sacred Representation of the Passion of Christ",
    description:
      "Since 1790, the ancient village of Francavilla di Sicilia transforms into a natural theatre for one of Sicily's oldest sacred representations. A tradition of faith, community and collective memory.",
    url: `${BASE_URL}/en`,
    siteName: "A Passioni",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sacred Representation of the Passion of Christ in Francavilla di Sicilia, Sicily",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Passioni · Passion of Christ in Francavilla di Sicilia, Sicily",
    description:
      "Since 1790, a century-old tradition in the ancient village of Francavilla di Sicilia. Discover the Sacred Representation of the Passion of Christ.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      "en-US": `${BASE_URL}/en`,
      "it-IT": BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ENLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarEN />
      <main>{children}</main>
      <FooterEN />
    </>
  );
}