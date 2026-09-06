import Link from "next/link";
import { secoesVolume1 } from "@/data/volume1";
import { ArrowRight, BookOpen } from "lucide-react";

export default function SinopsePage() {
  const sinopse = secoesVolume1.find((s) => s.slug === "sinopse");

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Ponto de Partida Oficial
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-4">
          Sinopse Oficial
        </h1>
        <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)]">
          One Treasure — O Homem que Enganou o Mundo
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <article className="card-volume p-8 sm:p-12 mb-10">
        <div className="font-serif text-lg md:text-xl leading-relaxed text-[rgba(242,233,208,0.9)] space-y-6">
          {sinopse?.conteudoTexto.split("\n\n").map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p.trim()}
            </p>
          ))}
        </div>
      </article>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="btn-ghost text-xs">
          ← Voltar ao Início
        </Link>
        <Link href="/arquivo-0" className="btn-primary text-xs flex items-center gap-2">
          <span>Próximo Passo: Arquivo 0 (Confidencial)</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
