"use client";

import Link from "next/link";
import { useState } from "react";
import { Beer, MessageSquare, Heart, Send, ArrowLeft, Flame, Sparkles } from "lucide-react";
import Medieval3DCanvas from "@/components/interactive/Medieval3DCanvas";
import { MENSAGENS_TABERNA, TabernaMensagem } from "@/data/justOneNovel";

export default function TabernaPage() {
  const [mensagens, setMensagens] = useState<TabernaMensagem[]>(MENSAGENS_TABERNA);
  const [novoTexto, setNovoTexto] = useState("");
  const [autorNome, setAutorNome] = useState("");

  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTexto.trim()) return;

    const nova: TabernaMensagem = {
      id: Date.now().toString(),
      autor: autorNome.trim() || "Aventureiro Anônimo",
      classe: "Leitor Andarilho",
      cargo: "Rank F",
      mensagem: novoTexto.trim(),
      tempo: "Agora mesmo",
      curtidas: 1
    };

    setMensagens([nova, ...mensagens]);
    setNovoTexto("");
  };

  const curtir = (id: string) => {
    setMensagens(mensagens.map(m => m.id === id ? { ...m, curtidas: m.curtidas + 1 } : m));
  };

  return (
    <div className="relative min-h-screen bg-[#03070B] text-[#F2E9D0] overflow-hidden pt-24 pb-20 px-4">
      <Medieval3DCanvas atmosphere="tavern" />

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

        {/* Header da Taberna */}
        <div className="bg-[#120C06]/95 border border-[#D7A83E]/40 p-8 rounded-lg mb-8 shadow-2xl text-center relative overflow-hidden">
          <Beer size={42} className="text-[#D7A83E] mx-auto mb-3" />
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#F4D77A]">
            A Taberna do Corvo Torto
          </h1>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)] mt-2 max-w-xl mx-auto">
            O coração social de Mihara. Beba um trago de hidromel, lance suas hipóteses sobre o Arquivo 0 e troque impressões com outros aventureiros.
          </p>
        </div>

        {/* Formulario de Nova Mensagem */}
        <form onSubmit={enviarMensagem} className="p-6 rounded-lg bg-[#071522]/90 border border-[#D7A83E]/30 mb-8 shadow-xl">
          <h3 className="font-serif text-lg font-bold text-[#F4D77A] mb-3 flex items-center gap-2">
            <MessageSquare size={16} className="text-[#D7A83E]" />
            Deixar um recado na Mesa da Taberna
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <input
              type="text"
              placeholder="Seu Nome / Alcunha..."
              value={autorNome}
              onChange={(e) => setAutorNome(e.target.value)}
              className="px-3.5 py-2 rounded bg-[#03070B] border border-[#D7A83E]/20 text-xs font-ui text-[#F2E9D0] focus:border-[#D7A83E] outline-none"
            />
          </div>

          <textarea
            rows={3}
            placeholder="O que você descobriu na sua última leitura? Alguma teoria sobre Denotas ou as cidades vizinhas?"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
            className="w-full px-4 py-3 rounded bg-[#03070B] border border-[#D7A83E]/20 text-sm font-serif text-[#F2E9D0] focus:border-[#D7A83E] outline-none mb-3 resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#D7A83E] hover:bg-[#B8860B] text-[#03070B] text-xs font-ui font-bold transition-all shadow"
          >
            <Send size={14} />
            Compartilhar com a Taberna
          </button>
        </form>

        {/* Lista de Mensagens */}
        <div className="space-y-4">
          {mensagens.map((msg) => (
            <div
              key={msg.id}
              className="p-5 rounded-lg border border-[#D7A83E]/20 bg-[#071522]/80 shadow-md flex items-start gap-4 hover:border-[#D7A83E]/40 transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-[#D7A83E]/15 border border-[#D7A83E]/35 flex items-center justify-center font-serif font-black text-[#F4D77A] text-base shrink-0 shadow">
                {msg.autor[0]?.toUpperCase() || "?"}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#F4D77A]">
                      {msg.autor}
                    </span>
                    <span className="text-[10px] font-ui px-2 py-0.5 rounded bg-[#0C3550] text-[#D7A83E]">
                      {msg.classe} • {msg.cargo}
                    </span>
                  </div>
                  <span className="text-[11px] font-ui text-[rgba(242,233,208,0.4)]">
                    {msg.tempo}
                  </span>
                </div>

                <p className="font-serif text-sm text-[rgba(242,233,208,0.85)] leading-relaxed mb-3">
                  "{msg.mensagem}"
                </p>

                <button
                  onClick={() => curtir(msg.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-ui text-[#D7A83E] hover:text-[#F4D77A] transition-colors"
                >
                  <Heart size={14} className="fill-[#D7A83E]/30" />
                  <span>{msg.curtidas} Brindes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
