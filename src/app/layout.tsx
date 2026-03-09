import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "FIS-RDC — Fonds d'Investissement Stratégique de la République Démocratique du Congo",
  description:
    "Établissement public dédié à la mobilisation et la structuration des financements pour accélérer la mise en œuvre de la stratégie nationale de développement de la RDC. Créé par Décret n°25/031 du 02 octobre 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
