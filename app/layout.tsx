import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vic-brick.vercel.app"),

  title: "Vic Brick | Immobiliària a Vic i Osona",
  description:
    "Immobiliària local especialitzada en venda d’habitatges, valoracions immobiliàries i assessorament a Vic i comarca d’Osona.",

  keywords: [
    "immobiliària Vic",
    "immobiliària Osona",
    "vendre pis Vic",
    "valoració habitatge Vic",
    "agència immobiliària Vic",
  ],

  openGraph: {
    title: "Vic Brick",
    description: "Venda i valoració d’habitatges a Vic i Osona.",
    url: "https://vic-brick.vercel.app",
    siteName: "Vic Brick",
    locale: "ca_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  );
}
