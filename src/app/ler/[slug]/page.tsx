"use client";

import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { allSections, sectionsByVolume, volumeCatalog } from "@/data/library";
import {
  getProgress,
  isComplete,
  isQuizPassed,
  markRead,
  saveProgress,
  toggleFavorite,
  isFavorite,
} from "@/lib/progress";
import VolumeQuiz from "@/components/reader/VolumeQuiz";
import AntiBurlaReader from "@/components/reader/AntiBurlaReader";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookOpen,
  CheckCircle2,
  LockKeyhole,
  Share2,
  Type,
  List,
} from "lucide-react";

export default function LeitorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const currentIndex = allSections.findIndex((section) => section.slug === slug);
  if (currentIndex === -1) return notFound();

  const item = allSections[currentIndex];
  const previousItem = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextItem = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;
  const volumeNumero = item.volumeNumero ?? 1;
  const volume = volumeCatalog.find((entry) => entry.numero === volumeNumero) ?? volumeCatalog[0];
  const volumeSections = sectionsByVolume[volumeNumero];
  const isLastInVolume = volumeSections[volumeSections.length - 1]?.slug === item.slug;
  const isCrossingVolume = Boolean(nextItem && nextItem.volumeNumero !== volumeNumero);

  const [fontSize, setFontSize] = useState<number>(18);
  const [favorite, setFavorite] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [nextUnlocked, setNextUnlocked] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    const previousIsReady = !previousItem
      ? true
      : previousItem.volumeNumero !== volumeNumero
        ? isQuizPassed(previousItem.volumeNumero ?? 1)
        : isComplete(previousItem.slug);

    setAllowed(previousIsReady);
    setCompleted(isComplete(item.slug));
    setNextUnlocked(isComplete(item.slug));
    setQuizPassed(isQuizPassed(volumeNumero));
    setFavorite(isFavorite("secao", item.id));
    setHydrated(true);

    const handleScroll = () => {
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      if (totalH <= 0) return;

      const pct = Math.min(100, Math.round((window.scrollY / totalH) * 100));
      saveProgress(item.slug, pct);
      if (pct >= 95) setNextUnlocked(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [item, previousItem, volumeNumero]);

  const showToastMsg = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleFavorite = () => {
    const isNowFav = toggleFavorite("secao", item.id, item.titulo);
    setFavorite(isNowFav);
    showToastMsg(isNowFav ? "Adicionado aos favoritos" : "Removido dos favoritos");
  };

  const handleShare = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(window.location.href);
    showToastMsg("Link copiado para a área de transferência!");
  };

  const completeReading = () => {
    markRead(item.slug);
    setCompleted(true);
    setNextUnlocked(true);
    showToastMsg("Leitura concluída. A próxima parte foi preparada.");
  };

  const currentProgress = hydrated ? Math.round(getProgress(item.slug)) : 0;
  const volumeClass = volumeNumero === 2 ? "volume-two-reader" : "";

  if (hydrated && !allowed) {
    return (
      <div className={`min-h-screen bg-[#071522] text-[#F2E9D0] px-4 pt-36 pb-24 ${volumeClass}`}>
        <div className="mx-auto max-w-xl rounded border border-[#D7A83E]/35 bg-[#03070B]/70 p-8 text-center">
          <LockKeyhole className="mx-auto mb-4 text-[#D7A83E]" size={38} />
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-[#D7A83E]">
            Leitura bloqueada
          </p>
          <h1 className="mt-3 font-serif text-3xl text-[#F4D77A]">
            A história exige uma ordem
          </h1>
          <p className="mt-4 font-ui text-sm leading-relaxed text-[rgba(242,233,208,0.7)]">
            {previousItem?.volumeNumero !== volumeNumero
              ? "Conclui o volume anterior e responde à prova de memória para abrir esta passagem."
              : "Conclui a parte anterior para desbloquear esta leitura."}
          </p>
          {previousItem && (
            <Link href={`/ler/${previousItem.slug}`} className="btn-primary mt-7 text-xs">
              <ChevronLeft size={15} />
              Voltar à leitura anterior
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#071522] text-[#F2E9D0] ${volumeClass}`}>
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#03070B]/90 backdrop-blur border-b border-[rgba(215,168,62,0.15)] px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-ui">
          <div className="flex items-center gap-2 truncate">
            <Link href={`/volumes/${volume.slug}`} className="text-[#D7A83E] hover:underline flex items-center gap-1 shrink-0">
              <BookOpen size={14} />
              <span>Volume {volumeNumero}</span>
            </Link>
            <span className="text-[rgba(215,168,62,0.3)]">/</span>
            <span className="truncate text-[rgba(242,233,208,0.7)] font-medium">{item.titulo}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 bg-[#0C3550]/60 px-2 py-1 rounded border border-[rgba(215,168,62,0.2)]">
              <Type size={12} className="text-[#D7A83E]" />
              <button onClick={() => setFontSize((font) => Math.max(14, font - 1))} className="px-1 text-[#D7A83E] font-bold" title="Diminuir fonte">A-</button>
              <span className="text-[10px] text-[rgba(242,233,208,0.6)]">{fontSize}px</span>
              <button onClick={() => setFontSize((font) => Math.min(26, font + 1))} className="px-1 text-[#D7A83E] font-bold" title="Aumentar fonte">A+</button>
            </div>
            <button onClick={handleFavorite} className={`p-1.5 rounded ${favorite ? "text-[#D7A83E]" : "text-[rgba(242,233,208,0.5)]"}`} title="Favoritar">
              <Bookmark size={15} fill={favorite ? "currentColor" : "none"} />
            </button>
            <button onClick={handleShare} className="p-1.5 rounded text-[rgba(242,233,208,0.5)] hover:text-[#D7A83E]" title="Copiar link">
              <Share2 size={15} />
            </button>
            <button onClick={() => setShowToc(!showToc)} className="p-1.5 rounded text-[rgba(242,233,208,0.5)] hover:text-[#D7A83E]" title="Sumário">
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {showToc && (
        <div className="fixed inset-0 z-50 bg-black/75 flex justify-end">
          <div className="w-full max-w-md bg-[#03070B] border-l border-[rgba(215,168,62,0.2)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(215,168,62,0.2)] mb-4">
              <h3 className="font-serif text-lg text-[#F4D77A]">Sumário do Volume {volumeNumero}</h3>
              <button onClick={() => setShowToc(false)} className="font-ui text-xs text-[#D7A83E]">Fechar ✕</button>
            </div>
            <div className="space-y-1 font-ui text-sm">
              {volumeSections.map((section) => {
                const sectionIndex = allSections.findIndex((entry) => entry.slug === section.slug);
                const previous = sectionIndex > 0 ? allSections[sectionIndex - 1] : null;
                const unlocked = !previous
                  ? true
                  : previous.volumeNumero !== volumeNumero
                    ? isQuizPassed(previous.volumeNumero ?? 1)
                    : isComplete(previous.slug);

                return (
                  <Link
                    key={section.slug}
                    href={unlocked ? `/ler/${section.slug}` : "#"}
                    onClick={(event) => {
                      if (!unlocked) event.preventDefault();
                      else setShowToc(false);
                    }}
                    className={`flex items-center gap-2 rounded px-3 py-2.5 ${
                      section.slug === item.slug
                        ? "bg-[#D7A83E]/20 text-[#F4D77A] border-l-2 border-[#D7A83E]"
                        : unlocked
                          ? "text-[rgba(242,233,208,0.7)] hover:bg-[#0C3550]/40"
                          : "text-[rgba(242,233,208,0.3)]"
                    }`}
                  >
                    {unlocked ? <BookOpen size={13} /> : <LockKeyhole size={13} />}
                    <span>{section.titulo}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="pt-36 pb-24 px-4">
        <article className="max-w-2xl mx-auto">
          <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 rounded bg-[#0C3550]/50 border border-[rgba(215,168,62,0.3)] text-[#D7A83E] text-xs uppercase tracking-widest font-ui mb-4">
              {item.tipo.toUpperCase()} {item.numero > 0 ? `· ${item.numero}` : ""}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-[#F4D77A] mb-3 leading-tight">{item.titulo}</h1>
            <p className="font-serif italic text-base text-[rgba(242,233,208,0.6)] mb-4">{item.subtitulo}</p>
            <div className="font-ui text-xs text-[#D7A83E]/60 flex items-center justify-center gap-4">
              <span>{item.duracaoEstimada} de leitura</span>
              <span>·</span>
              <span>Volume {volumeNumero} Oficial</span>
              {currentProgress > 0 && <><span>·</span><span>{currentProgress}% lido</span></>}
            </div>
          </header>

          <hr className="divider-gold mb-12" />

          <div className="leading-relaxed font-serif text-[rgba(242,233,208,0.92)] space-y-6" style={{ fontSize: `${fontSize}px` }}>
            {item.conteudoTexto.split("\n\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("“") || trimmed.startsWith("\"") || trimmed.startsWith("📜") || trimmed.startsWith("📖")) {
                return (
                  <div key={index} className="p-4 rounded bg-[#0C3550]/30 border-l-2 border-[#D7A83E] font-medium text-[#F4D77A] italic my-6 whitespace-pre-line">
                    {trimmed}
                  </div>
                );
              }
              return <p key={index} className="whitespace-pre-line">{trimmed}</p>;
            })}
          </div>

          {/* MÓDULO CANÔNICO ANTI-BURLA COM QUIZ OBRIGATÓRIO */}
          <AntiBurlaReader
            capituloId={item.slug}
            tituloCapitulo={item.titulo}
            tempoMinimoSegundos={90}
            recompensaMoedas={150}
            recompensaXp={350}
            perguntas={[
              {
                id: 1,
                pergunta: `De acordo com os acontecimentos de "${item.titulo}", qual é o princípio que dita as ações neste trecho?`,
                opcoes: [
                  "A força bruta sempre supera a astúcia e a estratégia.",
                  "A percepção e a narrativa moldam a realidade e o destino dos homens.",
                  "A marinha possui o controle absoluto e benevolente dos oceanos.",
                  "O ouro acumulado é a única coisa que tem valor duradouro."
                ],
                correta: 1,
                explicacao: "Conforme o Arquivo 0 e a filosofia de Denotas, o mundo é movido pela percepção que as pessoas acreditam."
              },
              {
                id: 2,
                pergunta: "Qual é a relação de Denotas com o tesouro deixado para trás?",
                opcoes: [
                  "Ele quer ser coroado rei dos piratas e ter seu nome em estátuas públicas.",
                  "Ele busca apagar seu próprio nome da história, escolhendo ser esquecido.",
                  "Ele quer destruir todos os navios da Broken Line com uma arma mística.",
                  "Ele deseja apenas enriquecer para viver em paz em Mihara."
                ],
                correta: 1,
                explicacao: "A sinopse e o prólogo revelam que seu sacrifício final é não ser temido nem lembrado: 'Não ser ninguém'."
              },
              {
                id: 3,
                pergunta: "Em relação ao poder natural versus anômalo e invisível neste universo:",
                opcoes: [
                  "O poder invisível (controle da informação e narrativas) é o mais perigoso.",
                  "O treinamento muscular simples é a forma mais elevada de soberania.",
                  "As frutas anômalas não possuem nenhuma fraqueza conhecida.",
                  "Apenas reis por direito de sangue conseguem liderar tropas."
                ],
                correta: 0,
                explicacao: "Quem controla a informação nunca precisa lutar; esse é o verdadeiro ápice do poder."
              }
            ]}
            onCertificadoEmitido={(hash) => {
              markRead(item.slug);
              saveProgress(item.slug, 100);
              setCompleted(true);
              setNextUnlocked(true);
              setToast("Certificado emitido! +150 Moedas de Ouro creditadas.");
            }}
          />

          <hr className="divider-gold mt-16 mb-10" />

          {!completed && (
            <div className="mb-10 rounded border border-[#D7A83E]/30 bg-[#0C3550]/25 p-5 text-center">
              <p className="font-ui text-sm text-[rgba(242,233,208,0.7)]">
                Chegaste ao fim desta parte? Confirma para desbloquear a próxima.
              </p>
              <button type="button" onClick={completeReading} className="btn-primary mt-4 text-xs">
                <CheckCircle2 size={15} />
                Marcar como lido
              </button>
            </div>
          )}

          {isLastInVolume && (
            <VolumeQuiz
              volumeNumero={volumeNumero}
              onPassed={() => {
                setQuizPassed(true);
                setNextUnlocked(true);
              }}
            />
          )}

          <nav className="flex items-center justify-between gap-4 font-ui text-xs" aria-label="Navegação entre partes">
            {previousItem ? (
              <Link href={`/ler/${previousItem.slug}`} className="btn-ghost !py-2 !px-4 flex items-center gap-2">
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Anterior:</span>
                <span className="truncate max-w-[120px]">{previousItem.titulo}</span>
              </Link>
            ) : <div />}

            <Link href={`/volumes/${volume.slug}`} className="text-[#D7A83E] hover:underline">
              Sumário
            </Link>

            {nextItem && (!isCrossingVolume || (nextUnlocked && (!isLastInVolume || quizPassed))) ? (
              <Link href={`/ler/${nextItem.slug}`} className="btn-primary !py-2 !px-4 flex items-center gap-2">
                <span className="hidden sm:inline">Próximo:</span>
                <span className="truncate max-w-[120px]">{nextItem.titulo}</span>
                <ChevronRight size={16} />
              </Link>
            ) : nextItem ? (
              <span className="flex items-center gap-1 text-[#D7A83E]/60 italic">
                <LockKeyhole size={13} />
                Responde à prova
              </span>
            ) : (
              <span className="text-[#D7A83E]/50 italic">Fim da biblioteca</span>
            )}
          </nav>
        </article>
      </div>

      {toast && (
        <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0C3550] border border-[#D7A83E] text-[#F4D77A] font-ui text-xs px-5 py-2.5 rounded-full shadow-2xl z-50 animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}