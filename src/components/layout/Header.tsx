"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen, Castle, Shield, Beer, Landmark, Skull } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHub = [
    { href: "/", label: "Capital Mihara", icon: Castle },
    { href: "/guilda", label: "Guilda (Quests)", icon: Shield },
    { href: "/taberna", label: "Taberna", icon: Beer },
    { href: "/prefeitura", label: "Prefeitura", icon: Landmark },
    { href: "/thassalar", label: "Thassalar (One Treasure)", icon: Skull, highlight: true },
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
          <Castle
            size={24}
            className="text-[#D7A83E] group-hover:text-[#F4D77A] transition-colors"
          />
          <div className="flex flex-col">
            <span className="font-serif font-black text-[#F4D77A] tracking-wider text-base uppercase leading-none">
              JUST ONE NOVEL
            </span>
            <span className="font-ui text-[9px] tracking-widest text-[#D7A83E]/70 uppercase mt-0.5">
              Beyond the Stories
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegação principal">
          {navHub.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded text-xs font-ui tracking-wider transition-colors flex items-center gap-1.5 ${
                item.highlight
                  ? "bg-[#8F1D2C]/30 border border-[#8F1D2C] text-[#F87171] hover:bg-[#8F1D2C]/50"
                  : "text-[rgba(242,233,208,0.85)] hover:text-[#F4D77A] hover:bg-[#0C3550]/40"
              }`}
            >
              <item.icon size={13} className={item.highlight ? "text-[#F87171]" : "text-[#D7A83E]"} />
              {item.label}
            </Link>
          ))}
          <Link
            href="/buscar"
            aria-label="Buscar no acervo"
            className="p-2 text-[rgba(242,233,208,0.7)] hover:text-[#F4D77A] transition-colors ml-1"
          >
            <Search size={16} />
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/buscar"
            aria-label="Buscar"
            className="p-2 text-[rgba(242,233,208,0.7)] hover:text-[#F4D77A]"
          >
            <Search size={18} />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="p-2 text-[#D7A83E] hover:text-[#F4D77A]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-[#03070B]/98 border-b border-[rgba(215,168,62,0.2)] px-4 py-6">
          <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
            {navHub.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded text-sm font-ui tracking-wider transition-colors flex items-center gap-2.5 ${
                  item.highlight
                    ? "bg-[#8F1D2C]/30 border border-[#8F1D2C] text-[#F87171]"
                    : "text-[rgba(242,233,208,0.85)] hover:text-[#F4D77A] hover:bg-[#0C3550]/40"
                }`}
              >
                <item.icon size={16} className={item.highlight ? "text-[#F87171]" : "text-[#D7A83E]"} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
