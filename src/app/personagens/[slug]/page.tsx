"use client";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { personagensVolume1 } from "@/data/volume1";
import { Shield, Eye, EyeOff } from "lucide-react";

export default function PersonagemDetailPage({ params }: { params: { slug: string } }) {
  const p = personagensVolume1.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.5)] mb-6">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/personagens" className="hover:text-[#D7A83E]">Personagens</Link>
        <span className="mx-2">/</span>
        <span className="text-[#D7A83E]">{p.nome}</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-ui text-xs text-[#D7A83E] uppercase tracking-wider block mb-1">
            {p.faccao}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-2">
            {p.nome}
          </h1>
          <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)]">
            {p.titulo}
          </p>
        </div>

        <div className="bg-[#03070B] border border-[rgba(215,168,62,0.2)] px-4 py-3 rounded">
          <p className="font-ui text-[10px] text-[#D7A83E] uppercase tracking-wider mb-1">
            Nível de Periculosidade
          </p>
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`threat-dot ${
                  i < p.ameaca ? "bg-[#D7A83E]" : "bg-[#D7A83E]/20"
                }`}
              />
            ))}
            <span className="font-ui text-xs text-[#D7A83E] ml-2 font-bold">
              {p.ameaca}/5
            </span>
          </div>
        </div>
      </div>

      <hr className="divider-gold mb-8" />

      {/* DETALHES GERAIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="card-volume p-6">
          <h2 className="font-serif text-xl text-[#F4D77A] mb-3">Biografia do Volume 1</h2>
          <p className="text-sm font-ui leading-relaxed text-[rgba(242,233,208,0.85)] mb-4">
            {showSpoilers ? p.descricaoSpoilers : p.descricao}
          </p>
          <button
            onClick={() => setShowSpoilers(!showSpoilers)}
            className="btn-ghost text-xs flex items-center gap-1.5"
          >
            {showSpoilers ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showSpoilers ? "Ocultar Spoilers" : "Exibir Análise Restrita"}</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="card-volume p-5">
            <h3 className="font-ui text-xs text-[#D7A83E] uppercase tracking-wider mb-1">
              Personalidade
            </h3>
            <p className="text-xs font-ui text-[rgba(242,233,208,0.8)] leading-relaxed">
              {p.personalidade}
            </p>
          </div>

          <div className="card-volume p-5">
            <h3 className="font-ui text-xs text-[#D7A83E] uppercase tracking-wider mb-1">
              Aparência & Presença
            </h3>
            <p className="text-xs font-ui text-[rgba(242,233,208,0.8)] leading-relaxed">
              {p.aparencia}
            </p>
          </div>

          <div className="card-volume p-5">
            <h3 className="font-ui text-xs text-[#D7A83E] uppercase tracking-wider mb-1">
              Habilidades & Poderes Registrados
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.poderes.map((pod) => (
                <span
                  key={pod}
                  className="font-ui text-xs px-2.5 py-1 rounded bg-[#0C3550] border border-[rgba(215,168,62,0.3)] text-[#F4D77A]"
                >
                  {pod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VERSÕES OFICIAL X SUSPEITA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded border border-[#8F1D2C]/40 bg-[#42121B]/20">
          <h3 className="font-ui text-xs uppercase tracking-widest text-red-300 font-bold mb-2">
            Versão Oficial
          </h3>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)]">
            "{p.versaoOficial}"
          </p>
        </div>

        <div className="p-6 rounded border border-[#D7A83E]/40 bg-[#0C3550]/30">
          <h3 className="font-ui text-xs uppercase tracking-widest text-[#D7A83E] font-bold mb-2">
            Versão Suspeita
          </h3>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)]">
            "{p.versaoSuspeita}"
          </p>
        </div>
      </div>

      {/* FRASES MARCANTES */}
      <div className="card-volume p-6 mb-10">
        <h3 className="font-serif text-xl text-[#F4D77A] mb-4">
          Frases Registradas no Volume 1
        </h3>
        <div className="space-y-3">
          {p.frases.map((f, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-[#D7A83E] pl-4 font-serif italic text-base text-[rgba(242,233,208,0.85)]"
            >
              “{f}”
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
