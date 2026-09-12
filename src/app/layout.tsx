import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "One Treasure — Biblioteca Oficial",
    template: "%s | One Treasure",
  },
  description:
    "Biblioteca oficial de One Treasure com leitura guiada, progresso local e volumes desbloqueados em sequência.",
  openGraph: {
    title: "One Treasure — Biblioteca Oficial",
    description: "Acompanhe a saga de One Treasure em uma leitura guiada por volumes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#071522] text-[#F2E9D0] antialiased selection:bg-[#D7A83E]/30 selection:text-[#F4D77A]">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
