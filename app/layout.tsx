import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thercal Énergie - Expert en Isolation Thermique",
  description: "Spécialiste de l'isolation thermique pour améliorer votre confort et réduire vos factures d'énergie. Devis gratuit et rapide.",
  keywords: ["isolation thermique", "isolation combles", "isolation murs", "économie énergie", "rénovation énergétique"],
  authors: [{ name: "Thercal Énergie" }],
  openGraph: {
    title: "Thercal Énergie - Expert en Isolation Thermique",
    description: "Spécialiste de l'isolation thermique pour améliorer votre confort et réduire vos factures d'énergie.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
