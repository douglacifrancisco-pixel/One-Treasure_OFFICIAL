"use client";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { secoesVolume1 } from "@/data/volume1";
import {
  saveProgress,
  getProgress,
  markRead,
  toggleFavorite,
  isFavorite,
} from "@/lib/progress";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookOpen,
  Share2,
  Type,
  List,
} from "lucide-react";

export default function LeitorPage({ params }: { params: { slug: string } }) {
  const currentIndex = secoesVolume1.findIndex((s) => s.slug === params.slug);
  if (currentIndex === -1) return notFound();

  const item = secoesVolume1[currentIndex];
  const prevItem = currentIndex > 0 ? secoesVolume1[currentIndex - 1] : null;
  const nextItem =
    currentIndex < secoesVolume1.length - 1
      ? secoesVolume1[currentIndex + 1]
      : null;

  const [fontSize, setFontSize] = useState<number>(18);
  const [favorite, setFavorite] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite("secao", item.id));
    markRead(item.slug);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalH =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalH > 0) {
        const pct = Math.round((scrollY / totalH) * 100);
        saveProgress(item.slug, pct);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [item]);

  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleFavorite = () => {
    const isNowFav = toggleFavorite("secao", item.id, item.titulo);
    setFavorite(isNowFav);
    showToastMsg(
      isNowFav ? "Adicionado aos favoritos" : "Removido dos favoritos"
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToastMsg("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-[#071522] text-[#F2E9D0]">
      {/* BARRA SUPERIOR FIXA DE CONTROLE */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#03070B]/90 backdrop-blur border-b border-[rgba(215,168,62,0.15)] px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-ui">
          <div className="flex items-center gap-2 truncate">
            <Link
              href="/volumes/volume-1"
              className="text-[#D7A83E] hover:underline flex items-center gap-1 shrink-0"
            >
              <BookOpen size={14} />
              <span>Volume 1</span>
            </Link>
            <span className="text-[rgba(215,168,62,0.3)]">/</span>
            <span className="truncate text-[rgba(242,233,208,0.7)] font-medium">
              {item.titulo}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Seletor de Tamanho */}
            <div className="flex items-center gap-1 bg-[#0C3550]/60 px-2 py-1 rounded border border-[rgba(215,168,62,0.2)]">
              <Type size={12} className="text-[#D7A83E]" />
              <button
                onClick={() => setFontSize((f) => Math.max(14, f - 1))}
                className="px-1 text-[#D7A83E] font-bold hover:text-white"
                title="Diminuir fonte"
              >
                A-
              </button>
              <span className="text-[10px] text-[rgba(242,233,208,0.6)]">
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize((f) => Math.min(26, f + 1))}
                className="px-1 text-[#D7A83E] font-bold hover:text-white"
                title="Aumentar fonte"
              >
                A+
              </button>
            </div>

            {/* Favorito */}
            <button
              onClick={handleFavorite}
              className={`p-1.5 rounded transition-colors ${
                favorite
                  ? "text-[#D7A83E] bg-[#D7A83E]/10"
                  : "text-[rgba(242,233,208,0.5)] hover:text-[#D7A83E]"
              }`}
              title="Favoritar"
            >
              <Bookmark size={15} fill={favorite ? "currentColor" : "none"} />
            </button>

            {/* Compartilhar */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded text-[rgba(242,233,208,0.5)] hover:text-[#D7A83E] transition-colors"
              title="Copiar link"
            >
              <Share2 size={15} />
            </button>

            {/* Sumário */}
            <button
              onClick={() => setShowToc(!showToc)}
              className="p-1.5 rounded text-[rgba(242,233,208,0.5)] hover:text-[#D7A83E] transition-colors"
              title="Sumário de seções"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE SUMÁRIO */}
      {showToc && (
        <div className="fixed inset-0 z-50 bg-black/75 flex justify-end">
          <div className="w-full max-w-md bg-[#03070B] border-l border-[rgba(215,168,62,0.2)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(215,168,62,0.2)] mb-4">
              <h3 className="font-serif text-lg text-[#F4D77A]">Sumário do Volume 1</h3>
              <button
                onClick={() => setShowToc(false)}
                className="font-ui text-xs text-[#D7A83E]"
              >
                Fechar ✕
              </button>
            </div>
            <div className="space-y-1 font-ui text-sm">
              {secoesVolume1.map((s) => (
                <Link
                  key={s.slug}
                  href={`/ler/${s.slug}`}
                  onClick={() => setShowToc(false)}
                  className={`block px-3 py-2.5 rounded transition-colors ${
                    s.slug === item.slug
                      ? "bg-[#D7A83E]/20 text-[#F4D77A] font-semibold border-l-2 border-[#D7A83E]"
                      : "text-[rgba(242,233,208,0.7)] hover:bg-[#0C3550]/40 hover:text-white"
                  }`}
                >
                  <span className="text-xs text-[#D7A83E]/70 mr-2 uppercase">
                    {s.tipo}
                  </span>
                  <span>{s.titulo}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ÁREA DE LEITURA DO TEXTO ORIGINAL */}
      <div className="pt-36 pb-24 px-4">
        <article className="max-w-2xl mx-auto">
          {/* CABEÇALHO DO CAPÍTULO */}
          <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 rounded bg-[#0C3550]/50 border border-[rgba(215,168,62,0.3)] text-[#D7A83E] text-xs uppercase tracking-widest font-ui mb-4">
              {item.tipo.toUpperCase()} {item.numero > 0 ? `· ${item.numero}` : ""}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-[#F4D77A] mb-3 leading-tight">
              {item.titulo}
            </h1>
            <p className="font-serif italic text-base text-[rgba(242,233,208,0.6)] mb-4">
              {item.subtitulo}
            </p>
            <div className="font-ui text-xs text-[#D7A83E]/60 flex items-center justify-center gap-4">
              <span>{item.duracaoEstimada} de leitura</span>
              <span>·</span>
              <span>Volume 1 Oficial</span>
            </div>
          </header>

          <hr className="divider-gold mb-12" />

          {/* CORPO DO TEXTO (100% INTACTO) */}
          <div
            className="leading-relaxed font-serif text-[rgba(242,233,208,0.92)] space-y-6"
            style={{ fontSize: `${fontSize}px` }}
          >
            {item.conteudoTexto.split("\n\n").map((paragrafo, idx) => {
              const trimmed = paragrafo.trim();
              if (!trimmed) return null;

              // Verifica se é um destaque/citação
              if (
                trimmed.startsWith("“") ||
                trimmed.startsWith('"') ||
                trimmed.startsWith("📜") ||
                trimmed.startsWith("📖")
              ) {
                return (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#0C3550]/30 border-l-2 border-[#D7A83E] font-medium text-[#F4D77A] italic my-6 whitespace-pre-line"
                  >
                    {trimmed}
                  </div>
                );
              }

              return (
                <p key={idx} className="whitespace-pre-line">
                  {trimmed}
                </p>
              );
            })}
          </div>

          <hr className="divider-gold mt-16 mb-10" />

          {/* NAVEGAÇÃO ANTERIOR / PRÓXIMO */}
          <nav
            className="flex items-center justify-between gap-4 font-ui text-xs"
            aria-label="Navegação entre seções"
          >
            {prevItem ? (
              <Link
                href={`/ler/${prevItem.slug}`}
                className="btn-ghost !py-2 !px-4 flex items-center gap-2"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Anterior:</span>{" "}
                <span className="truncate max-w-[120px]">{prevItem.titulo}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/volumes/volume-1"
              className="text-[#D7A83E] hover:underline"
            >
              Sumário do Volume 1
            </Link>

            {nextItem ? (
              <Link
                href={`/ler/${nextItem.slug}`}
                className="btn-primary !py-2 !px-4 flex items-center gap-2"
              >
                <span className="hidden sm:inline">Próximo:</span>{" "}
                <span className="truncate max-w-[120px]">{nextItem.titulo}</span>
                <ChevronRight size={16} />
              </Link>
            ) : (
              <span className="text-[#D7A83E]/50 italic">
                Fim do Volume 1
              </span>
            )}
          </nav>
        </article>
      </div>

      {/* TOAST DE NOTIFICAÇÃO */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0C3550] border border-[#D7A83E] text-[#F4D77A] font-ui text-xs px-5 py-2.5 rounded-full shadow-2xl z-50 animate-bounce"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
