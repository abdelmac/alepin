import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alepin — Le pain du Levant, façonné en France",
  description:
    "Découvrez Alepin, le véritable pain syro-libanais : tendre, généreux et façonné en France dans le respect du geste traditionnel.",
  keywords: [
    "pain alepin",
    "pain pita",
    "pain syro-libanais",
    "boulangerie levantine",
    "pain fabriqué en France",
  ],
  icons: {
    icon: `${pagesBasePath}/alepin-mark.svg`,
  },
  openGraph: {
    title: "Alepin — Le pain du Levant",
    description: "Une recette de famille façonnée en France, avec le goût de là-bas.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
