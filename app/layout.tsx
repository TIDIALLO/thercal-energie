import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thercal Énergies - Expert en Calorifugeage et Isolation Thermique",
  description: "Spécialiste du calorifugeage industriel et de l'isolation thermique pour améliorer votre confort et réduire vos factures d'énergie jusqu'à 30%. Devis gratuit 24h.",
  keywords: ["calorifugeage", "isolation thermique", "isolation combles", "isolation murs", "économie énergie", "rénovation énergétique", "calorifugeage industriel", "efficacité énergétique"],
  authors: [{ name: "Thercal Énergies" }],
  openGraph: {
    title: "Thercal Énergies - Expert en Calorifugeage et Isolation Thermique",
    description: "Spécialiste du calorifugeage industriel et de l'isolation thermique. Maximisez l'efficacité énergétique de vos installations.",
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
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCTA />
        </AuthProvider>
      </body>
    </html>
  );
}
