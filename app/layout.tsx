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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thercalenergies.com"),
  title: "THERCAL ENERGIES - Expert en Calorifugeage et Isolation Thermique",
  description: "Spécialiste du calorifugeage industriel et de l'isolation thermique pour améliorer votre confort et réduire vos factures d'énergie jusqu'à 30%. Devis gratuit 24h.",
  keywords: ["calorifugeage", "isolation thermique", "isolation combles", "isolation murs", "économie énergie", "rénovation énergétique", "calorifugeage industriel", "efficacité énergétique"],
  authors: [{ name: "THERCAL ENERGIES" }],
  openGraph: {
    title: "THERCAL ENERGIES - Expert en Calorifugeage et Isolation Thermique",
    description: "Spécialiste du calorifugeage industriel et de l'isolation thermique. Maximisez l'efficacité énergétique de vos installations.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/logo_thercaenergies.png",
        width: 1200,
        height: 630,
        alt: "THERCAL ENERGIES - Logo officiel",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-th.png", type: "image/png", sizes: "any" },
    ],
    shortcut: [{ url: "/favicon-th.png" }],
    apple: [{ url: "/logo_thercaenergies.png", sizes: "180x180", type: "image/png" }],
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_#f9fbff,_#eef5ff,_#ffffff)] font-sans antialiased">
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
