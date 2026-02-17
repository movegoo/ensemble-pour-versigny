import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Pour un village dynamique — Versigny 2026",
  description: "Site de campagne pour les élections municipales de Versigny (02800). Découvrez nos propositions et notre équipe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
