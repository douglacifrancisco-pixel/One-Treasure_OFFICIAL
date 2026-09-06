import Link from "next/link";
import { secoesVolume1 } from "@/data/volume1";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function PrologoPage() {
  const prologo = secoesVolume1.find((s) => s.slug === "prologo");

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Gênese da Lenda
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Prólogo: O Fim de Uma Era
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)]">
          Mil eras atrás e o surgimento do homem que enganaria o mundo.
        </p>
      </div>

      <hr className="divider-gold mb-10" />

      <article className="card-volume p-8 sm:p-12 mb-10">
        <div className="font-serif text-base sm:text-lg leading-relaxed text-[rgba(242,233,208,0.9)] space-y-6">
          {prologo?.conteudoTexto.split("\n\n").map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p.trim()}
            </p>
          ))}
        </div>
      </article>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/arquivo-0" className="btn-ghost text-xs flex items-center gap-2">
          <ArrowLeft size={14} />
          <span>Etapa Anterior: Arquivo 0</span>
        </Link>
        <Link href="/ler/capitulo-1" className="btn-primary text-xs flex items-center gap-2">
          <span>Iniciar Volume 1: Capítulo 1</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
