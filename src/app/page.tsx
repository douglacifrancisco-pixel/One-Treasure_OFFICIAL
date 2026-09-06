"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { volume1Info, secoesVolume1, frasesVolume1 } from "@/data/volume1";
import { getLastRead } from "@/lib/progress";
import { BookOpen, ShieldAlert, Scroll, Compass, ArrowRight, Play } from "lucide-react";

export default function Home() {
  const [frase, setFrase] = useState(frasesVolume1[0]);
  const [lastReadSlug, setLastReadSlug] = useState<string | null>(null);

  useEffect(() => {
    setFrase(frasesVolume1[Math.floor(Math.random() * frasesVolume1.length)]);
    setLastReadSlug(getLastRead());
  }, []);

  const lastReadItem = lastReadSlug
    ? secoesVolume1.find((s) => s.slug === lastReadSlug)
    : null;

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 bg-gradient-to-b from-[#03070B] via-[#071522] to-[#071522]">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,#0C3550_0%,transparent_75%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D7A83E]/40 bg-[#0C3550]/40 text-[#D7A83E] text-xs font-ui tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D7A83E] animate-pulse" />
            Edição Oficial Restrita — Volume 1
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black text-[#F4D77A] tracking-tight leading-none mb-4">
            ONE TREASURE
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-[rgba(242,233,208,0.85)] mb-8">
            O Homem que Enganou o Mundo
          </p>

          <hr className="divider-gold max-w-sm mx-auto mb-8" />

          <p className="font-serif text-lg md:text-xl text-[rgba(242,233,208,0.85)] max-w-2xl mx-auto italic leading-relaxed mb-10">
            “Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada.
            É a história que todos acreditam.”
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ler/sinopse" className="btn-primary group text-sm font-semibold">
              <Play size={16} className="group-hover:translate-x-0.5 transition-transform" />
              Começar Leitura Oficial
            </Link>
            <Link href="/arquivo-0" className="btn-ghost text-sm">
              <ShieldAlert size={16} />
              Acessar Arquivo 0
            </Link>
            <Link href="/volumes/volume-1" className="btn-ghost text-sm">
              <BookOpen size={16} />
              Ver Capítulos (1 a 10)
            </Link>
          </div>

          {/* Continuar leitura se existir */}
          {lastReadItem && (
            <div className="mt-8 inline-block">
              <Link
                href={`/ler/${lastReadItem.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#D7A83E]/40 bg-[#0C3550]/60 text-xs font-ui text-[#F4D77A] hover:border-[#D7A83E] transition-colors"
              >
                <span>Continuar de onde parou: <strong>{lastReadItem.titulo}</strong></span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* A ORDEM OFICIAL */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
            Estrutura Canônica
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4D77A]">
            A Ordem Correta de Leitura
          </h2>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.6)] mt-2">
            A narrativa foi construída estrategicamente para guiar sua percepção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-volume p-6 flex flex-col justify-between">
            <div>
              <span className="font-ui text-xs font-bold text-[#D7A83E]">PASSO 1</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Sinopse Oficial</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                A introdução a Denotas, a Broken Line e a nova era de mentiras e ambições.
              </p>
            </div>
            <Link href="/ler/sinopse" className="mt-6 btn-ghost text-xs w-full text-center">
              Ler Sinopse
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between border-[#8F1D2C]/60 bg-[#42121B]/20">
            <div>
              <span className="font-ui text-xs font-bold text-red-400">PASSO 2 (RESTRITO)</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Arquivo 0</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                "Como o Mundo Funciona" — o que move os mares, a regra de ouro e as 3 verdades.
              </p>
            </div>
            <Link href="/ler/arquivo-0" className="mt-6 btn-ghost text-xs w-full text-center border-red-500/40 text-red-300 hover:border-red-400">
              Abrir Arquivo 0
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between">
            <div>
              <span className="font-ui text-xs font-bold text-[#D7A83E]">PASSO 3</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Prólogo</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                "O Fim de Uma Era" — mil eras atrás, a lenda do One Piece e o surgimento de El Denotas.
              </p>
            </div>
            <Link href="/ler/prologo" className="mt-6 btn-ghost text-xs w-full text-center">
              Ler Prólogo
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between border-[#D7A83E]/50">
            <div>
              <span className="font-ui text-xs font-bold text-[#D7A83E]">PASSO 4</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Volume 1 Completo</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                Do Capítulo 1 ao Capítulo 10: o roubo de Valdoria, o Mar dos Bolsos até a Decisão Final.
              </p>
            </div>
            <Link href="/volumes/volume-1" className="mt-6 btn-primary text-xs w-full text-center">
              Acessar Capítulos
            </Link>
          </div>
        </div>
      </section>

      {/* FRASE DESTAQUE */}
      <section className="py-16 px-4 bg-[#03070B]/80 border-y border-[rgba(215,168,62,0.15)] text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-4">
            {frase.secao}
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-[#F4D77A] leading-relaxed mb-4">
            “{frase.texto}”
          </blockquote>
          <p className="font-ui text-xs text-[rgba(242,233,208,0.5)]">
            — {frase.personagem}
          </p>
        </div>
      </section>

      {/* ÍNDICE DOS CAPÍTULOS DO VOLUME 1 */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
              Índice Completo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F4D77A]">
              Capítulos do Volume 1
            </h2>
          </div>
          <p className="font-ui text-xs text-[rgba(242,233,208,0.5)] mt-2 md:mt-0">
            Todos os 10 capítulos disponíveis na íntegra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secoesVolume1.filter((s) => s.tipo === "capitulo").map((cap) => (
            <Link
              key={cap.id}
              href={`/ler/${cap.slug}`}
              className="card-volume p-5 flex items-start justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-ui text-[11px] font-bold text-[#D7A83E] uppercase tracking-wider">
                    Capítulo {cap.numero}
                  </span>
                  <span className="text-[rgba(215,168,62,0.3)]">·</span>
                  <span className="font-ui text-[11px] text-[rgba(242,233,208,0.4)]">
                    {cap.duracaoEstimada}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#F4D77A] group-hover:text-white transition-colors">
                  {cap.titulo.replace(/Capítulo \d+ — /, "")}
                </h3>
                <p className="text-xs text-[rgba(242,233,208,0.6)] line-clamp-2 mt-1 font-ui">
                  {cap.resumo}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-[#D7A83E] mt-2 group-hover:translate-x-1 transition-transform shrink-0"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
