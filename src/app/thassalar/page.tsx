"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { volume1Info, secoesVolume1, frasesVolume1 } from "@/data/volume1";
import { getLastRead } from "@/lib/progress";
import { BookOpen, ShieldAlert, Compass, ArrowRight, Play, Skull, ArrowLeft } from "lucide-react";
import Medieval3DCanvas from "@/components/interactive/Medieval3DCanvas";

export default function ThassalarPage() {
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
    <div className="relative min-h-screen bg-[#03070B] text-[#F2E9D0] overflow-hidden">
      {/* 3D ATMOSPHERIC WORLD CANVAS - MODO THASSALAR */}
      <Medieval3DCanvas atmosphere="thassalar" />

      {/* HERO SECTION - CONTINENTE DE THASSALAR */}
      <section className="relative z-10 pt-28 pb-16 px-4 max-w-5xl mx-auto text-center">
        {/* Retornar ao Hub de Mihara */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7A83E]/30 bg-[#071522]/80 text-xs font-ui text-[#D7A83E] hover:border-[#D7A83E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Retornar para Mihara (Hub Central)</span>
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8F1D2C] bg-[#8F1D2C]/20 text-[#F87171] text-xs font-ui tracking-widest uppercase mb-6">
          <Skull size={14} className="animate-pulse" />
          Ala Especial Proibida — Território de Thassalar
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black text-[#F4D77A] tracking-tight leading-none mb-3">
          ONE TREASURE
        </h1>

        <p className="font-serif italic text-2xl md:text-3xl text-[rgba(242,233,208,0.85)] mb-8">
          O Homem que Enganou o Mundo
        </p>

        <hr className="divider-gold max-w-sm mx-auto mb-8 border-[#D7A83E]/30" />

        <p className="font-serif text-lg md:text-xl text-[rgba(242,233,208,0.85)] max-w-2xl mx-auto italic leading-relaxed mb-10">
          “Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada.
          É a história que todos acreditam.”
        </p>

        {/* Botoes de Acao de Leitura */}
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

        {/* Continuar Leitura */}
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
      </section>

      {/* A ORDEM OFICIAL DE LEITURA */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
            Estrutura Canônica do Volume 1
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
            <Link href="/sinopse" className="text-xs text-[#D7A83E] font-ui hover:underline mt-4 inline-flex items-center gap-1">
              Ler Sinopse <ArrowRight size={12} />
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between border-[#8F1D2C]/50">
            <div>
              <span className="font-ui text-xs font-bold text-[#F87171]">PASSO 2</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Arquivo 0</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                As regras secretas do mundo: o que move o mundo, quem manda e como o poder funciona.
              </p>
            </div>
            <Link href="/arquivo-0" className="text-xs text-[#D7A83E] font-ui hover:underline mt-4 inline-flex items-center gap-1">
              Abrir Arquivo 0 <ArrowRight size={12} />
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between">
            <div>
              <span className="font-ui text-xs font-bold text-[#D7A83E]">PASSO 3</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Prólogo</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                A abertura da história: o primeiro contato com a manipulação e o silêncio.
              </p>
            </div>
            <Link href="/prologo" className="text-xs text-[#D7A83E] font-ui hover:underline mt-4 inline-flex items-center gap-1">
              Ler Prólogo <ArrowRight size={12} />
            </Link>
          </div>

          <div className="card-volume p-6 flex flex-col justify-between">
            <div>
              <span className="font-ui text-xs font-bold text-[#D7A83E]">PASSO 4</span>
              <h3 className="font-serif text-xl text-[#F4D77A] mt-2 mb-2">Capítulos 1 a 10</h3>
              <p className="text-xs text-[rgba(242,233,208,0.7)] font-ui leading-relaxed">
                A jornada completa do Volume 1, da ambição inicial até as revelações finais.
              </p>
            </div>
            <Link href="/volumes/volume-1" className="text-xs text-[#D7A83E] font-ui hover:underline mt-4 inline-flex items-center gap-1">
              Ver Capítulos <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
