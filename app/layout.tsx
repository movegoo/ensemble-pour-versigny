import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
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
      <body className={`${montserrat.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
