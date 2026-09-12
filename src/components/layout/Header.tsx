"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/sinopse", label: "Sinopse" },
    { href: "/arquivo-0", label: "Arquivo 0" },
    { href: "/prologo", label: "Prólogo" },
    { href: "/volumes", label: "Volumes" },
    { href: "/personagens", label: "Personagens" },
    { href: "/locais", label: "Locais" },
    { href: "/cronologia", label: "Cronologia" },
    { href: "/pistas", label: "Pistas" },
    { href: "/frases", label: "Frases" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#03070B]/95 backdrop-blur-md border-b border-[rgba(215,168,62,0.2)] shadow-lg"
          : "bg-gradient-to-b from-[#03070B]/90 to-transparent"
      }`}
    >
      <a href="#main" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <BookOpen
            size={22}
            className="text-[#D7A83E] group-hover:text-[#F4D77A] transition-colors"
          />
          <div className="flex flex-col">
            <span className="font-serif font-black text-[#F4D77A] tracking-wider text-base uppercase leading-none">
              One Treasure
            </span>
            <span className="font-ui text-[9px] tracking-widest text-[#D7A83E]/70 uppercase mt-0.5">
               Biblioteca Oficial
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Navegação principal">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link text-xs">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/buscar"
            className="p-2 text-[#D7A83E] hover:text-[#F4D77A] rounded transition-colors"
             aria-label="Pesquisar na biblioteca"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/ler/sinopse"
            className="hidden md:inline-flex btn-primary text-xs !py-1.5 !px-3"
          >
            Começar Leitura
          </Link>
          <button
            className="xl:hidden text-[#D7A83E] p-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          className="xl:hidden bg-[#03070B]/98 border-t border-[rgba(215,168,62,0.2)] px-6 py-6 max-h-[85vh] overflow-y-auto"
          aria-label="Menu mobile"
        >
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Link
              href="/ler/sinopse"
              onClick={() => setOpen(false)}
              className="btn-primary text-center text-xs !py-2.5"
            >
              Iniciar da Sinopse
            </Link>
            <Link
              href="/arquivo-0"
              onClick={() => setOpen(false)}
              className="btn-ghost text-center text-xs !py-2.5"
            >
              Ver Arquivo 0
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-[rgba(215,168,62,0.1)]">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-3 nav-link text-sm"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="py-3 nav-link text-xs text-[rgba(215,168,62,0.4)]"
              onClick={() => setOpen(false)}
            >
              Painel Admin
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
