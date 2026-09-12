"use client";

import { useState } from "react";
import { CheckCircle2, LockKeyhole, RotateCcw } from "lucide-react";
import { quizByVolume } from "@/data/library";
import { isQuizPassed, markQuizPassed } from "@/lib/progress";

type QuizVolume = keyof typeof quizByVolume;

export default function VolumeQuiz({
  volumeNumero,
  onPassed,
}: {
  volumeNumero: number;
  onPassed: () => void;
}) {
  const questions =
    volumeNumero in quizByVolume
      ? quizByVolume[volumeNumero as QuizVolume]
      : [];
  const [answers, setAnswers] = useState<number[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [passed, setPassed] = useState(() => isQuizPassed(volumeNumero));

  if (questions.length === 0) return null;

  const submit = () => {
    const correct = questions.every(
      (question, index) => answers[index] === question.answer,
    );

    if (!correct) {
      setMessage("Ainda há respostas por rever. Lê novamente o volume e tenta outra vez.");
      return;
    }

    markQuizPassed(volumeNumero);
    setPassed(true);
    setMessage("Memória confirmada. O próximo volume foi desbloqueado.");
    onPassed();
  };

  if (passed) {
    return (
      <div className="mt-12 rounded border border-emerald-400/30 bg-emerald-950/20 p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-emerald-300" size={28} />
        <p className="font-ui text-sm font-semibold text-emerald-200">
          Volume concluído e próximo volume desbloqueado
        </p>
      </div>
    );
  }

  return (
    <section className="mt-12 rounded border border-[#D7A83E]/35 bg-[#0C3550]/30 p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-3">
        <LockKeyhole className="mt-1 shrink-0 text-[#D7A83E]" size={22} />
        <div>
          <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[#D7A83E]">
            Prova de memória
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#F4D77A]">
            Antes de atravessar para o próximo volume
          </h2>
          <p className="mt-2 font-ui text-sm leading-relaxed text-[rgba(242,233,208,0.7)]">
            Responde às perguntas sobre o que acabaste de ler. É uma confirmação de leitura,
            não uma corrida.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question, questionIndex) => (
          <fieldset key={question.question} className="space-y-2">
            <legend className="font-serif text-lg text-[#F2E9D0]">
              {questionIndex + 1}. {question.question}
            </legend>
            <div className="grid gap-2">
              {question.options.map((option, optionIndex) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 rounded border border-white/10 bg-black/10 p-3 font-ui text-sm text-[rgba(242,233,208,0.8)] transition hover:border-[#D7A83E]/50"
                >
                  <input
                    type="radio"
                    name={`quiz-${volumeNumero}-${questionIndex}`}
                    checked={answers[questionIndex] === optionIndex}
                    onChange={() => {
                      setAnswers((current) => {
                        const next = [...current];
                        next[questionIndex] = optionIndex;
                        return next;
                      });
                      setMessage(null);
                    }}
                    className="accent-[#D7A83E]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={submit}
          className="btn-primary text-xs"
          disabled={answers.length !== questions.length}
        >
          Confirmar respostas
        </button>
        <button
          type="button"
          onClick={() => {
            setAnswers([]);
            setMessage(null);
          }}
          className="btn-ghost text-xs"
        >
          <RotateCcw size={14} />
          Limpar
        </button>
        {message && (
          <p role="status" className="font-ui text-xs text-[#F4D77A]">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}