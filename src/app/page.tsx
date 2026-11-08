"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Castle, 
  Compass, 
  Shield, 
  Beer, 
  Landmark, 
  Skull, 
  Coins, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  MapPin, 
  BookOpen, 
  ScrollText,
  Users
} from "lucide-react";
import Medieval3DCanvas from "@/components/interactive/Medieval3DCanvas";
import Mihara3DWorld from "@/components/interactive/Mihara3DWorld";
import { CIDADES_DO_REINO, MISSOES_GUILDA, MENSAGENS_TABERNA } from "@/data/justOneNovel";

export default function Home() {
  const [moedas, setMoedas] = useState(120);
  const [rank, setRank] = useState("Aventureiro Rank F");
  const [activeTab, setActiveTab] = useState<"cidades" | "guilda" | "taberna">("cidades");

  useEffect(() => {
    const savedCoins = localStorage.getItem("aethel_coins");
    if (savedCoins) setMoedas(parseInt(savedCoins));
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03070B] text-[#F2E9D0] overflow-hidden">
      {/* 3D ATMOSPHERIC WORLD CANVAS */}
      <Medieval3DCanvas atmosphere="mihara" />

      {/* HERO SECTION: MIHARA CAPITAL CENTRAL */}
      <section className="relative z-10 pt-28 pb-16 px-4 max-w-7xl mx-auto text-center">
        {/* Status Bar do Aventureiro */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2 rounded-full border border-[#D7A83E]/40 bg-[#071522]/80 backdrop-blur-md mb-8 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-ui text-[#D7A83E]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D7A83E] animate-pulse" />
            <span>Local: <strong>Praça Central de Mihara</strong></span>
          </div>
          <span className="text-[#D7A83E]/40">|</span>
          <div className="flex items-center gap-1.5 text-xs font-ui text-[#F4D77A]">
            <Coins size={14} className="text-[#D7A83E]" />
            <span><strong>{moedas}</strong> Moedas de Ouro</span>
          </div>
          <span className="text-[#D7A83E]/40">|</span>
          <div className="flex items-center gap-1 text-xs font-ui text-emerald-400">
            <Shield size={14} />
            <span>{rank}</span>
          </div>
        </div>

        {/* Título Principal de Just One Novel */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F4D77A] via-[#D7A83E] to-[#996515] tracking-tight leading-none mb-4 drop-shadow-md">
          JUST ONE NOVEL
        </h1>

        <p className="font-serif italic text-2xl md:text-3xl text-[#D7A83E]/90 mb-6">
          Beyond the Stories
        </p>

        <p className="font-serif text-base sm:text-lg text-[rgba(242,233,208,0.85)] max-w-3xl mx-auto leading-relaxed mb-10">
          Bem-vindo à capital de <strong>Mihara</strong>. Em um reino onde livros moldam realidades e a percepção dita impérios, 
          escolha sua jornada, aceite contratos na Guilda, beba com sábios na Taberna ou arrisque sua sanidade nos mares do continente de <strong>Thassalar</strong>.
        </p>

        {/* Portais Rápidos para Edifícios de Mihara */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/guilda"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded bg-gradient-to-r from-[#D7A83E] to-[#B8860B] text-[#03070B] font-ui font-bold text-sm hover:brightness-110 transition-all shadow-lg hover:shadow-[#D7A83E]/20"
          >
            <Shield size={18} />
            Guilda dos Aventureiros (Quests)
          </Link>
          <Link
            href="/taberna"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded border border-[#D7A83E]/50 bg-[#0C3550]/60 backdrop-blur text-sm font-ui font-semibold text-[#F4D77A] hover:bg-[#0C3550] transition-colors"
          >
            <Beer size={18} className="text-[#D7A83E]" />
            Taberna do Corvo Torto
          </Link>
          <Link
            href="/prefeitura"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded border border-[#D7A83E]/30 bg-[#071522]/80 text-sm font-ui text-[rgba(242,233,208,0.8)] hover:border-[#D7A83E] transition-colors"
          >
            <Landmark size={18} className="text-[#D7A83E]" />
            Prefeitura (Submeter Novels)
          </Link>
        </div>

        {/* MUNDO 3D ISOMÉTRICO INTERATIVO DE MIHARA */}
        <div className="my-10 max-w-5xl mx-auto">
          <Mihara3DWorld />
        </div>

        {/* DESTAQUE ESPECIAL: O PORTAL DE THASSALAR (ONE TREASURE) */}
        <div className="relative max-w-4xl mx-auto my-12 p-8 rounded-lg border-2 border-[#8F1D2C]/70 bg-gradient-to-r from-[#8F1D2C]/30 via-[#071522]/90 to-[#03070B] text-left shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-15 pointer-events-none">
            <Skull size={180} className="text-[#8F1D2C]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8F1D2C]/40 border border-[#8F1D2C] text-[#F87171] text-xs font-ui uppercase tracking-wider mb-3">
                <Skull size={14} />
                Ala Especial Restrita • Continente Proibido
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#F4D77A] group-hover:text-white transition-colors">
                Thassalar: O Homem que Enganou o Mundo
              </h3>
              <p className="font-serif italic text-sm text-[rgba(242,233,208,0.75)] max-w-xl mt-2">
                "Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam." 
                Conheça a trajetória de Denotas e acesse os segredos do <strong>Arquivo 0</strong>.
              </p>
            </div>

            <Link
              href="/thassalar"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#8F1D2C] hover:bg-[#A82436] text-white text-sm font-ui font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-red-900/40"
            >
              <span>Acessar Ala Proibida</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAL INTERATIVA DO HUB: CIDADES, GUILDA E TABERNA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        {/* Navegação entre Abas do Reino */}
        <div className="flex items-center justify-center gap-3 border-b border-[#D7A83E]/20 pb-4 mb-10">
          <button
            onClick={() => setActiveTab("cidades")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-ui text-sm font-semibold transition-all ${
              activeTab === "cidades"
                ? "bg-[#D7A83E] text-[#03070B] shadow"
                : "text-[rgba(242,233,208,0.7)] hover:text-[#F4D77A] hover:bg-[#0C3550]/40"
            }`}
          >
            <Compass size={16} />
            Cidades & Continentes (Gêneros)
          </button>
          <button
            onClick={() => setActiveTab("guilda")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-ui text-sm font-semibold transition-all ${
              activeTab === "guilda"
                ? "bg-[#D7A83E] text-[#03070B] shadow"
                : "text-[rgba(242,233,208,0.7)] hover:text-[#F4D77A] hover:bg-[#0C3550]/40"
            }`}
          >
            <Shield size={16} />
            Mural da Guilda ({MISSOES_GUILDA.length} Quests)
          </button>
          <button
            onClick={() => setActiveTab("taberna")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-ui text-sm font-semibold transition-all ${
              activeTab === "taberna"
                ? "bg-[#D7A83E] text-[#03070B] shadow"
                : "text-[rgba(242,233,208,0.7)] hover:text-[#F4D77A] hover:bg-[#0C3550]/40"
            }`}
          >
            <Beer size={16} />
            Taberna do Corvo Torto
          </button>
        </div>

        {/* CONTEÚDO: ABA CIDADES & TERRITÓRIOS */}
        {activeTab === "cidades" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CIDADES_DO_REINO.map((cidade) => (
              <div
                key={cidade.id}
                className="card-volume p-6 flex flex-col justify-between border border-[#D7A83E]/25 hover:border-[#D7A83E]/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-ui font-semibold text-[#D7A83E] px-2.5 py-1 rounded bg-[#03070B]/60 border border-[#D7A83E]/30">
                      {cidade.genero}
                    </span>
                    <span className="text-[11px] font-ui text-[rgba(242,233,208,0.5)]">
                      {cidade.nivelRecomendado}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#F4D77A] mb-2 group-hover:translate-x-1 transition-transform">
                    {cidade.nome}
                  </h3>

                  <p className="font-serif italic text-sm text-[rgba(242,233,208,0.75)] mb-4 leading-relaxed">
                    {cidade.descricao}
                  </p>

                  <div className="p-3 rounded bg-[#03070B]/50 border border-white/5 mb-6">
                    <span className="text-[10px] font-ui uppercase tracking-wider text-[#D7A83E]/80 block mb-1">
                      Destaque da Região:
                    </span>
                    <span className="text-xs font-serif text-white">
                      {cidade.destaqueNovel}
                    </span>
                  </div>
                </div>

                <Link
                  href={cidade.link}
                  className="inline-flex items-center justify-between text-xs font-ui font-semibold text-[#D7A83E] hover:text-[#F4D77A] pt-4 border-t border-white/5"
                >
                  <span>Explorar Território</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* CONTEÚDO: ABA GUILDA DE QUESTS */}
        {activeTab === "guilda" && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-[#071522]/80 border border-[#D7A83E]/30 p-6 rounded-lg mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#F4D77A] mb-2">
                Quadro de Contratos e Caçadas
              </h3>
              <p className="text-xs font-ui text-[rgba(242,233,208,0.7)] leading-relaxed">
                Cumpra objetivos de leitura, descubra enigmas e interaja com os cidadãos para acumular <strong>Moedas de Ouro</strong> e subir seu Rank de Aventureiro no reino de Just One Novel.
              </p>
            </div>

            {MISSOES_GUILDA.map((quest) => (
              <div
                key={quest.id}
                className="p-5 rounded-lg border border-[#D7A83E]/20 bg-[#071522]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D7A83E]/50 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-[#D7A83E]/20 text-[#F4D77A] font-ui text-[10px] font-bold">
                      RANK {quest.dificuldade}
                    </span>
                    <span className="text-xs font-ui uppercase tracking-wider text-[rgba(242,233,208,0.5)]">
                      {quest.categoria}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#F4D77A]">{quest.titulo}</h4>
                  <p className="font-serif italic text-xs text-[rgba(242,233,208,0.7)] mt-1">
                    {quest.descricao}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                  <div className="text-right">
                    <div className="text-xs font-ui font-bold text-[#D7A83E]">+{quest.recompensaMoedas} Moedas</div>
                    <div className="text-[11px] font-ui text-emerald-400">+{quest.recompensaXp} XP</div>
                  </div>
                  <Link
                    href={quest.link}
                    className="px-4 py-2 rounded bg-[#0C3550] hover:bg-[#D7A83E] hover:text-[#03070B] text-xs font-ui font-semibold text-[#F4D77A] transition-all whitespace-nowrap"
                  >
                    Aceitar Missão
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CONTEÚDO: ABA TABERNA DO CORVO TORTO */}
        {activeTab === "taberna" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#120C06]/90 border border-[#D7A83E]/40 p-6 rounded-lg text-center relative overflow-hidden">
              <div className="relative z-10">
                <Beer size={36} className="text-[#D7A83E] mx-auto mb-3" />
                <h3 className="font-serif text-3xl font-bold text-[#F4D77A] mb-2">
                  A Taberna do Corvo Torto
                </h3>
                <p className="font-serif italic text-xs text-[rgba(242,233,208,0.8)] max-w-lg mx-auto">
                  O local onde segredos são sussurrados entre canecas de hidromel. Compartilhe suas teorias com leitores de todo o reino.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {MENSAGENS_TABERNA.map((msg) => (
                <div
                  key={msg.id}
                  className="p-5 rounded-lg border border-[#D7A83E]/20 bg-[#071522]/70 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D7A83E]/20 border border-[#D7A83E]/40 flex items-center justify-center font-serif font-bold text-[#F4D77A] text-sm shrink-0">
                    {msg.autor[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#F4D77A]">{msg.autor}</span>
                        <span className="text-[10px] font-ui text-[rgba(242,233,208,0.5)]">({msg.classe} • {msg.cargo})</span>
                      </div>
                      <span className="text-[10px] font-ui text-[rgba(242,233,208,0.4)]">{msg.tempo}</span>
                    </div>
                    <p className="font-serif text-sm text-[rgba(242,233,208,0.85)] leading-relaxed">
                      "{msg.mensagem}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/taberna"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded border border-[#D7A83E]/40 bg-[#0C3550]/40 text-xs font-ui font-semibold text-[#F4D77A] hover:bg-[#D7A83E] hover:text-[#03070B] transition-all"
              >
                <Beer size={14} />
                Entrar na Mesa Redonda da Taberna
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
