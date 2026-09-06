import Link from "next/link";
import { personagensVolume1 } from "@/data/volume1";
import { ArrowRight, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personagens — Volume 1",
  description: "Fichas confidenciais dos personagens que aparecem no Volume 1 de One Treasure.",
};

export default function PersonagensPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Arquivo de Indivíduos
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Personagens do Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl">
          Informações restritas exclusivamente às figuras conhecidas no decorrer dos acontecimentos do Volume 1.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personagensVolume1.map((p) => (
          <Link
            key={p.id}
            href={`/personagens/${p.slug}`}
            className="card-volume p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-ui text-[11px] text-[#D7A83E] uppercase tracking-wider">
                  {p.faccao}
                </span>
                <div className="flex gap-1" title={`Nível de Ameaça: ${p.ameaca}/5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`threat-dot ${
                        i < p.ameaca ? "bg-[#D7A83E]" : "bg-[#D7A83E]/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="font-serif text-2xl text-[#F4D77A] group-hover:text-white transition-colors mb-1">
                {p.nome}
              </h2>
              <p className="font-ui text-xs text-[rgba(242,233,208,0.5)] uppercase tracking-wider mb-4">
                {p.titulo}
              </p>
              <p className="text-xs text-[rgba(242,233,208,0.75)] font-ui leading-relaxed line-clamp-4 mb-4">
                {p.descricao}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(215,168,62,0.15)] flex items-center justify-between text-xs font-ui text-[#D7A83E]">
              <span>Ver ficha detalhada</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
