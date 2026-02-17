import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
