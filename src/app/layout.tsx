import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus & Arts | Sua Agência de Posicionamento Digital",
  description: "Destaque sua empresa no Google. Otimização de Perfil (GMB), SEO e Sites de Alta Performance. Atraia clientes organicamente.",
  keywords: ["agência digital", "seo", "google meu negócio", "sites profissionais", "tráfego orgânico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans selection:bg-neon-green selection:text-brand-dark">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
