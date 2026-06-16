import type { Metadata } from "next";
import NavbarEN from "@/components/en/NavbarEN";
import FooterEN from "@/components/en/FooterEN";

export const metadata: Metadata = {
  title: {
    default: "A Passioni – Passion of Christ in Francavilla di Sicilia",
    template: "%s | A Passioni",
  },
  description:
    "A Passioni is the association that celebrates the Passion of Christ in Francavilla di Sicilia, Sicily. Discover events, traditions and how to participate.",
  alternates: {
    canonical: "https://www.associazioneapassioni.com/en",
    languages: { it: "https://www.associazioneapassioni.com" },
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
