"use client";

import Link from "next/link";
import { useState } from "react";
import { Landmark, Scroll, CheckCircle2, ArrowLeft, BookPlus, Sparkles } from "lucide-react";
import Medieval3DCanvas from "@/components/interactive/Medieval3DCanvas";

export default function PrefeituraPage() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("Dark Fantasy");
  const [sinopse, setSinopse] = useState("");
  const [enviado, setEnviado] = useState(false);

  const submeter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim() || !sinopse.trim()) return;
    setEnviado(true);
  };

  return (
    <div className="relative min-h-screen bg-[#03070B] text-[#F2E9D0] overflow-hidden pt-24 pb-20 px-4">
      <Medieval3DCanvas atmosphere="mihara" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Voltar */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7A83E]/30 bg-[#071522]/80 text-xs font-ui text-[#D7A83E] hover:border-[#D7A83E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Retornar para a Praça de Mihara</span>
          </Link>
        </div>

        {/* Header da Prefeitura */}
        <div className="bg-[#071522]/95 border border-[#D7A83E]/40 p-8 rounded-lg mb-8 shadow-2xl text-center">
          <Landmark size={42} className="text-[#D7A83E] mx-auto mb-3" />
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#F4D77A]">
            Prefeitura & Cartório Real de Mihara
          </h1>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)] mt-2 max-w-xl mx-auto">
            O centro burocrático e canônico de Aethel-Pages. Aqui, autores e contadores de histórias registram seus manuscritos para fundar novas cidades ou publicar suas novels.
          </p>
        </div>

        {enviado ? (
          <div className="p-8 rounded-lg bg-[#071522]/90 border border-emerald-500/40 text-center shadow-2xl">
            <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#F4D77A] mb-2">
              Manuscrito Submetido aos Arquivistas!
            </h3>
            <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)] max-w-md mx-auto mb-6">
              Sua obra <strong>"{titulo}"</strong> foi enviada para o Conselho de Sábios de Mihara. Em breve você receberá um selo oficial da Guilda.
            </p>
            <button
              onClick={() => {
                setEnviado(false);
                setTitulo("");
                setSinopse("");
              }}
              className="px-6 py-2.5 rounded bg-[#D7A83E] text-[#03070B] font-ui font-bold text-xs hover:bg-[#B8860B] transition-all"
            >
              Registrar Outro Manuscrito
            </button>
          </div>
        ) : (
          <form onSubmit={submeter} className="p-8 rounded-lg bg-[#071522]/90 border border-[#D7A83E]/30 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 border-b border-[#D7A83E]/20 pb-4">
              <BookPlus size={20} className="text-[#D7A83E]" />
              <h2 className="font-serif text-xl font-bold text-[#F4D77A]">
                Protocolo de Submissão de Novel
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-ui uppercase tracking-wider text-[#D7A83E] mb-2">
                  Título da Obra *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: As Crônicas do Abismo Negro"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#03070B] border border-[#D7A83E]/25 text-sm font-serif text-[#F2E9D0] focus:border-[#D7A83E] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-ui uppercase tracking-wider text-[#D7A83E] mb-2">
                  Nome do Autor / Pseudônimo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mestre das Sombras"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#03070B] border border-[#D7A83E]/25 text-sm font-serif text-[#F2E9D0] focus:border-[#D7A83E] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-ui uppercase tracking-wider text-[#D7A83E] mb-2">
                Território / Gênero Principal
              </label>
              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#03070B] border border-[#D7A83E]/25 text-sm font-ui text-[#F2E9D0] focus:border-[#D7A83E] outline-none"
              >
                <option value="Thassalar (Dark Fantasy & Mistério)">Thassalar (Dark Fantasy & Mistério)</option>
                <option value="Valkengard (Alta Fantasia & Épico)">Valkengard (Alta Fantasia & Épico)</option>
                <option value="Lunafell (Romance & Magia)">Lunafell (Romance & Magia)</option>
                <option value="Neoverse (Cyberpunk & LitRPG)">Neoverse (Cyberpunk & LitRPG)</option>
                <option value="Novo Continente">Requisitar Novo Continente Próprio</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-ui uppercase tracking-wider text-[#D7A83E] mb-2">
                Sinopse / Argumento da História *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Descreva o conflito principal, o protagonista e qual é o mistério que move a sua história..."
                value={sinopse}
                onChange={(e) => setSinopse(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#03070B] border border-[#D7A83E]/25 text-sm font-serif text-[#F2E9D0] focus:border-[#D7A83E] outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#D7A83E] to-[#B8860B] text-[#03070B] font-ui font-bold text-sm hover:brightness-110 transition-all shadow-lg"
              >
                Carimbar e Registrar Manuscrito
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
