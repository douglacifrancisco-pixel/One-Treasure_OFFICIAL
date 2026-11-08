"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, AlertTriangle, Clock, Award, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
}

interface AntiBurlaProps {
  capituloId: string;
  tituloCapitulo: string;
  tempoMinimoSegundos?: number;
  recompensaMoedas?: number;
  recompensaXp?: number;
  perguntas: Question[];
  onCertificadoEmitido?: (certHash: string) => void;
}

export default function AntiBurlaReader({
  capituloId,
  tituloCapitulo,
  tempoMinimoSegundos = 120, // 2 minutos mínimo de leitura real
  recompensaMoedas = 150,
  recompensaXp = 300,
  perguntas,
  onCertificadoEmitido
}: AntiBurlaProps) {
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [leituraValida, setLeituraValida] = useState(false);
  const [respostas, setRespostas] = useState<{ [key: number]: number }>({});
  const [quizSubmetido, setQuizSubmetido] = useState(false);
  const [erros, setErros] = useState<number[]>([]);
  const [aprovado, setAprovado] = useState(false);
  const [certHash, setCertHash] = useState<string | null>(null);

  // Monitorar tempo real de leitura
  useEffect(() => {
    // Verificar se já possui certificado salvo no storage
    const salvo = localStorage.getItem(`cert_${capituloId}`);
    if (salvo) {
      setAprovado(true);
      setCertHash(salvo);
      setLeituraValida(true);
      return;
    }

    const interval = setInterval(() => {
      setTempoDecorrido((prev) => {
        const next = prev + 1;
        if (next >= tempoMinimoSegundos) {
          setLeituraValida(true);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [capituloId, tempoMinimoSegundos]);

  const handleSelecionar = (perguntaId: number, opcaoIdx: number) => {
    if (aprovado) return;
    setRespostas({ ...respostas, [perguntaId]: opcaoIdx });
  };

  const validarQuiz = () => {
    if (!leituraValida) return;

    const novosErros: number[] = [];
    perguntas.forEach((p) => {
      if (respostas[p.id] !== p.correta) {
        novosErros.push(p.id);
      }
    });

    setQuizSubmetido(true);
    setErros(novosErros);

    // Se acertou 100% de todas as perguntas
    if (novosErros.length === 0 && Object.keys(respostas).length === perguntas.length) {
      const hash = `CERT_CANON_${capituloId.toUpperCase()}_${Date.now()}_VALID`;
      setAprovado(true);
      setCertHash(hash);
      localStorage.setItem(`cert_${capituloId}`, hash);

      // Adicionar moedas na carteira do aventureiro
      const moedasAtuais = parseInt(localStorage.getItem("aethel_coins") || "120");
      const novoSaldo = moedasAtuais + recompensaMoedas;
      localStorage.setItem("aethel_coins", novoSaldo.toString());

      if (onCertificadoEmitido) {
        onCertificadoEmitido(hash);
      }
    }
  };

  const segundosRestantes = Math.max(0, tempoMinimoSegundos - tempoDecorrido);
  const minutos = Math.floor(segundosRestantes / 60);
  const segundos = segundosRestantes % 60;

  return (
    <div className="my-12 p-8 rounded-xl border-2 border-[#D7A83E]/40 bg-[#071522]/95 shadow-2xl relative overflow-hidden">
      {/* Selo Anti-Burla */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D7A83E]/20 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7A83E]/15 border border-[#D7A83E]/40 text-[#D7A83E] text-xs font-ui uppercase tracking-wider mb-2">
            <ShieldCheck size={14} />
            Protocolo Canônico Anti-Burla de Mihara
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#F4D77A]">
            Certificação de Leitura: {tituloCapitulo}
          </h3>
          <p className="font-serif italic text-xs text-[rgba(242,233,208,0.7)] mt-1">
            Nenhuma moeda ou capítulo seguinte é liberado de graça. O sistema exige comprovação de leitura e acerto de 100% no teste.
          </p>
        </div>

        {/* Cronômetro */}
        {!aprovado && (
          <div className={`p-3 rounded-lg border text-center min-w-[170px] ${
            leituraValida 
              ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
              : "bg-[#03070B] border-[#D7A83E]/30 text-[#D7A83E]"
          }`}>
            <div className="flex items-center justify-center gap-1.5 text-xs font-ui uppercase tracking-wider mb-0.5">
              <Clock size={13} />
              <span>{leituraValida ? "Tempo Mínimo Atingido" : "Tempo Restante"}</span>
            </div>
            <div className="font-serif font-black text-xl">
              {leituraValida ? "LEITURA ATIVA" : `${minutos}m ${segundos < 10 ? `0${segundos}` : segundos}s`}
            </div>
          </div>
        )}
      </div>

      {/* Se já foi aprovado */}
      {aprovado ? (
        <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/60 text-center animate-fadeIn">
          <Award size={48} className="text-emerald-400 mx-auto mb-3" />
          <h4 className="font-serif text-2xl font-bold text-emerald-200 mb-1">
            Leitura Autenticada pelo Conselho de Mihara!
          </h4>
          <p className="font-serif italic text-xs text-emerald-300/80 mb-4">
            Código Criptografado do Certificado: <code className="text-[#F4D77A] font-mono">{certHash}</code>
          </p>

          <div className="inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-[#03070B]/80 border border-emerald-500/30 text-xs font-ui">
            <span className="text-[#D7A83E] font-bold">+{recompensaMoedas} Moedas de Ouro Creditadas</span>
            <span className="text-emerald-400 font-bold">+{recompensaXp} XP de Aventureiro</span>
          </div>
        </div>
      ) : (
        <div>
          {/* Alerta se tentar responder antes do tempo */}
          {!leituraValida && (
            <div className="mb-6 p-4 rounded bg-[#8F1D2C]/20 border border-[#8F1D2C]/50 text-xs font-ui text-[#F87171] flex items-center gap-2.5">
              <AlertTriangle size={18} className="shrink-0" />
              <span>
                <strong>Atenção:</strong> Rolar para baixo não valida a leitura. Você deve permanecer no capítulo por pelo menos 2 minutos para liberar a submissão do teste.
              </span>
            </div>
          )}

          {/* Perguntas Canônicas */}
          <div className="space-y-6">
            {perguntas.map((p, idx) => {
              const temErro = quizSubmetido && erros.includes(p.id);
              return (
                <div
                  key={p.id}
                  className={`p-5 rounded-lg border transition-all ${
                    temErro 
                      ? "bg-[#8F1D2C]/20 border-[#8F1D2C]" 
                      : "bg-[#03070B]/60 border-[#D7A83E]/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-ui text-xs font-bold text-[#D7A83E]">
                      QUESTÃO {idx + 1} DE {perguntas.length}
                    </span>
                    {temErro && (
                      <span className="inline-flex items-center gap-1 text-xs font-ui text-[#F87171]">
                        <XCircle size={14} /> Resposta Incorreta
                      </span>
                    )}
                  </div>

                  <p className="font-serif text-base font-bold text-[#F4D77A] mb-4">
                    {p.pergunta}
                  </p>

                  <div className="space-y-2">
                    {p.opcoes.map((opcao, oIdx) => {
                      const isSelected = respostas[p.id] === oIdx;
                      return (
                        <button
                          key={oIdx}
                          disabled={!leituraValida}
                          onClick={() => handleSelecionar(p.id, oIdx)}
                          className={`w-full text-left p-3 rounded font-serif text-xs transition-all border ${
                            isSelected
                              ? "bg-[#D7A83E]/25 border-[#D7A83E] text-white"
                              : "bg-[#071522]/60 border-white/5 text-[rgba(242,233,208,0.8)] hover:border-[#D7A83E]/40"
                          } ${!leituraValida ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <span className="font-ui font-bold mr-2 text-[#D7A83E]">
                            {String.fromCharCode(65 + oIdx)})
                          </span>
                          {opcao}
                        </button>
                      );
                    })}
                  </div>

                  {temErro && (
                    <p className="mt-3 text-xs font-serif italic text-[rgba(242,233,208,0.7)] border-t border-[#8F1D2C]/30 pt-2">
                      Dica: {p.explicacao}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botão de Envio */}
          <div className="mt-8 text-center">
            <button
              disabled={!leituraValida || Object.keys(respostas).length < perguntas.length}
              onClick={validarQuiz}
              className={`px-8 py-3.5 rounded font-ui font-bold text-sm transition-all shadow-xl ${
                leituraValida && Object.keys(respostas).length === perguntas.length
                  ? "bg-gradient-to-r from-[#D7A83E] to-[#B8860B] text-[#03070B] hover:brightness-110 cursor-pointer"
                  : "bg-gray-800 text-gray-500 border border-white/5 cursor-not-allowed"
              }`}
            >
              Autenticar Respostas & Reivindicar Ouro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
