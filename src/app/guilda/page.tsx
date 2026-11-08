"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Coins, Sparkles, CheckCircle2, ArrowLeft, AlertCircle } from "lucide-react";
import Medieval3DCanvas from "@/components/interactive/Medieval3DCanvas";
import { MISSOES_GUILDA } from "@/data/justOneNovel";

export default function GuildaPage() {
  const [moedas, setMoedas] = useState(120);
  const [completadas, setCompletadas] = useState<string[]>([]);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  const completarMissao = (id: string, moedasRecompensa: number) => {
    if (completadas.includes(id)) return;
    const novoSaldo = moedas + moedasRecompensa;
    setMoedas(novoSaldo);
    setCompletadas([...completadas, id]);
    localStorage.setItem("aethel_coins", novoSaldo.toString());
    setMensagemSucesso(`Missão concluída! Você recebeu +${moedasRecompensa} Moedas de Ouro.`);
    setTimeout(() => setMensagemSucesso(null), 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#03070B] text-[#F2E9D0] overflow-hidden pt-24 pb-20 px-4">
      <Medieval3DCanvas atmosphere="mihara" />

      <div className="relative z-10 max-w-5xl mx-auto">
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

        {/* Header da Guilda */}
        <div className="bg-[#071522]/90 border border-[#D7A83E]/40 p-8 rounded-lg mb-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D7A83E]/20 text-[#D7A83E] text-xs font-ui uppercase tracking-wider mb-2">
              <Shield size={14} />
              Quartel-General dos Aventureiros
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#F4D77A]">
              Guilda de Mihara
            </h1>
            <p className="font-serif italic text-sm text-[rgba(242,233,208,0.75)] mt-2 max-w-xl">
              Aceite contratos oficiais de leitura, investigue arquivos secretos e ganhe reputação entre as elites do reino.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#03070B]/80 border border-[#D7A83E]/30 text-center min-w-[180px]">
            <span className="text-xs font-ui uppercase tracking-wider text-[rgba(242,233,208,0.6)] block mb-1">
              Seu Saldo Atual
            </span>
            <div className="flex items-center justify-center gap-1.5 font-serif font-black text-2xl text-[#F4D77A]">
              <Coins size={22} className="text-[#D7A83E]" />
              <span>{moedas}</span>
            </div>
            <span className="text-[11px] font-ui text-emerald-400 mt-1 block">
              {completadas.length} de {MISSOES_GUILDA.length} Quests Concluídas
            </span>
          </div>
        </div>

        {/* Toast Notificação */}
        {mensagemSucesso && (
          <div className="mb-6 p-4 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-sm font-ui flex items-center gap-2 animate-bounce">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <span>{mensagemSucesso}</span>
          </div>
        )}

        {/* Lista de Contratos */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#F4D77A] mb-4">
            Contratos Disponíveis no Mural
          </h2>

          {MISSOES_GUILDA.map((quest) => {
            const isDone = completadas.includes(quest.id);
            return (
              <div
                key={quest.id}
                className={`p-6 rounded-lg border transition-all ${
                  isDone
                    ? "bg-[#071522]/40 border-emerald-500/40 opacity-75"
                    : "bg-[#071522]/90 border-[#D7A83E]/25 hover:border-[#D7A83E]/60 shadow-lg"
                } flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#D7A83E]/20 text-[#F4D77A] font-ui text-xs font-bold">
                      RANK {quest.dificuldade}
                    </span>
                    <span className="text-xs font-ui uppercase tracking-wider text-[rgba(242,233,208,0.5)]">
                      {quest.categoria}
                    </span>
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-xs font-ui text-emerald-400">
                        <CheckCircle2 size={12} /> Concluída
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F4D77A]">
                    {quest.titulo}
                  </h3>
                  <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)] mt-1.5 leading-relaxed">
                    {quest.descricao}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
                  <div className="text-right">
                    <div className="text-sm font-ui font-bold text-[#D7A83E]">
                      +{quest.recompensaMoedas} Moedas
                    </div>
                    <div className="text-xs font-ui text-emerald-400">
                      +{quest.recompensaXp} XP
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={quest.link}
                      className="px-4 py-2.5 rounded border border-[#D7A83E]/40 bg-[#0C3550]/60 text-xs font-ui font-semibold text-[#F4D77A] hover:bg-[#0C3550] transition-colors"
                    >
                      Ir ao Local
                    </Link>

                    {!isDone && (
                      <button
                        onClick={() => completarMissao(quest.id, quest.recompensaMoedas)}
                        className="px-4 py-2.5 rounded bg-[#D7A83E] hover:bg-[#B8860B] text-[#03070B] text-xs font-ui font-bold transition-all shadow"
                      >
                        Reivindicar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
