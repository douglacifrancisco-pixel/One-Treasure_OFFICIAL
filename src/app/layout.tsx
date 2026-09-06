import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "One Treasure — Volume 1 Oficial",
    template: "%s | One Treasure — Volume 1",
  },
  description:
    "Arquivo oficial restrito ao Volume 1: Sinopse, Arquivo 0, Prólogo e Capítulos 1 a 10 completos de One Treasure: O Homem que Enganou o Mundo.",
  openGraph: {
    title: "One Treasure — Volume 1 Oficial",
    description: "Sinopse, Arquivo 0, Prólogo e Capítulos 1 a 10 de One Treasure.",
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
