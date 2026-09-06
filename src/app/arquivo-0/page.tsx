import Link from "next/link";
import { secoesVolume1 } from "@/data/volume1";
import { ArrowRight, ShieldAlert, ArrowLeft } from "lucide-react";

export default function ArquivoZeroPage() {
  const arq = secoesVolume1.find((s) => s.slug === "arquivo-0");

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8F1D2C]/20 border border-[#8F1D2C]/50 text-red-300 text-xs font-ui uppercase tracking-widest mb-3">
          <ShieldAlert size={14} />
          Documento Confidencial
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Arquivo 0: Como o Mundo Funciona
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl mx-auto">
          "Se você está lendo isso… então já está dentro do jogo."
        </p>
      </div>

      <hr className="divider-gold mb-10" />

      <article className="card-volume p-8 sm:p-12 border-[#8F1D2C]/40 bg-[#42121B]/15 mb-10">
        <div className="font-serif text-base sm:text-lg leading-relaxed text-[rgba(242,233,208,0.9)] space-y-6">
          {arq?.conteudoTexto.split("\n\n").map((p, i) => {
            const trimmed = p.trim();
            if (trimmed.startsWith("“") || trimmed.startsWith("📜") || trimmed.includes("O QUE MOVE O MUNDO") || trimmed.includes("A REGRA DE OURO")) {
              return (
                <div
                  key={i}
                  className="p-4 rounded bg-[#0C3550]/40 border-l-2 border-[#D7A83E] text-[#F4D77A] font-medium my-4 whitespace-pre-line"
                >
                  {trimmed}
                </div>
              );
            }
            return (
              <p key={i} className="whitespace-pre-line">
                {trimmed}
              </p>
            );
          })}
        </div>
      </article>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/sinopse" className="btn-ghost text-xs flex items-center gap-2">
          <ArrowLeft size={14} />
          <span>Etapa Anterior: Sinopse</span>
        </Link>
        <Link href="/prologo" className="btn-primary text-xs flex items-center gap-2">
          <span>Próximo Passo: Prólogo (O Fim de Uma Era)</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
