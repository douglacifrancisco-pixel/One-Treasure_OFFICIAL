import Link from "next/link";
import { volume1Info, secoesVolume1 } from "@/data/volume1";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volumes — Biblioteca Oficial",
  description: "Biblioteca oficial de volumes de One Treasure. Volume 1 disponível na íntegra.",
};

export default function VolumesIndexPage() {
  const caps = secoesVolume1.filter((s) => s.tipo === "capitulo");

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Arquivo Canônico
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Biblioteca de Volumes
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl">
          Por determinação oficial, o acervo está focado e restrito exclusivamente ao Volume 1.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      {/* CARD DO VOLUME 1 */}
      <div className="card-volume p-8 sm:p-12 mb-12 border-[#D7A83E]/40">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="status-badge status-disponivel">Disponível Completo</span>
              <span className="font-ui text-xs text-[#D7A83E]">Volume 1</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4D77A] mb-2">
              {volume1Info.titulo}
            </h2>
            <p className="font-serif italic text-lg text-[rgba(242,233,208,0.8)] mb-4">
              {volume1Info.subtitulo}
            </p>
            <p className="text-sm text-[rgba(242,233,208,0.7)] font-ui leading-relaxed max-w-2xl mb-6">
              {volume1Info.descricao}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/ler/sinopse" className="btn-primary text-xs">
                Iniciar Leitura Guiada
              </Link>
              <Link href="/volumes/volume-1" className="btn-ghost text-xs">
                Ver Índice de Capítulos
              </Link>
            </div>
          </div>

          <div className="shrink-0 bg-[#03070B] border border-[rgba(215,168,62,0.2)] p-6 rounded text-center w-full md:w-56">
            <BookOpen size={36} className="text-[#D7A83E] mx-auto mb-2" />
            <p className="font-serif text-2xl text-[#F4D77A] font-bold">10</p>
            <p className="font-ui text-[11px] text-[rgba(242,233,208,0.5)] uppercase tracking-wider mb-3">
              Capítulos
            </p>
            <p className="font-serif text-xl text-[#F4D77A] font-bold">3</p>
            <p className="font-ui text-[11px] text-[rgba(242,233,208,0.5)] uppercase tracking-wider">
              Textos de Abertura
            </p>
          </div>
        </div>
      </div>

      {/* LISTAGEM DOS CAPÍTULOS */}
      <div className="mt-12">
        <h3 className="font-serif text-2xl text-[#F4D77A] mb-6 flex items-center gap-2">
          <Layers size={20} className="text-[#D7A83E]" />
          <span>Sumário do Volume 1</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caps.map((cap) => (
            <Link
              key={cap.id}
              href={`/ler/${cap.slug}`}
              className="card-volume p-5 flex items-start justify-between group"
            >
              <div>
                <span className="font-ui text-[11px] font-bold text-[#D7A83E] uppercase">
                  Capítulo {cap.numero}
                </span>
                <h4 className="font-serif text-lg text-[#F4D77A] group-hover:text-white transition-colors mt-0.5">
                  {cap.titulo.replace(/Capítulo \d+ — /, "")}
                </h4>
                <p className="text-xs text-[rgba(242,233,208,0.6)] line-clamp-2 mt-1 font-ui">
                  {cap.resumo}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-[#D7A83E] mt-2 group-hover:translate-x-1 transition-transform shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
