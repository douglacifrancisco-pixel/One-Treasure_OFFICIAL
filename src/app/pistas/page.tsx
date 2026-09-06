import Link from "next/link";
import { pistasVolume1 } from "@/data/volume1";
import { Key, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pistas & Enigmas — Volume 1",
  description: "Registros e pistas recolhidas durante o Volume 1 de One Treasure.",
};

export default function PistasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Evidências Recolhidas
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Pistas & Enigmas do Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl">
          Detalhes e incoerências descobertos por Denotas que comprovam a manipulação da história.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pistasVolume1.map((p) => (
          <div key={p.id} className="card-volume p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="status-badge status-disponivel">
                  {p.status}
                </span>
                <span className="text-xs font-ui text-[#D7A83E]">
                  Capítulo Ref: {p.capituloSlug}
                </span>
              </div>

              <h2 className="font-serif text-xl text-[#F4D77A] mb-3">
                {p.titulo}
              </h2>
              <p className="text-xs font-ui text-[rgba(242,233,208,0.8)] leading-relaxed mb-6">
                {p.descricao}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-ui px-2 py-0.5 rounded bg-[#0C3550] border border-[rgba(215,168,62,0.2)] text-[rgba(242,233,208,0.7)]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/ler/${p.capituloSlug}`}
              className="pt-4 border-t border-[rgba(215,168,62,0.15)] flex items-center justify-between text-xs font-ui text-[#D7A83E] hover:underline"
            >
              <span>Ler capítulo correspondente</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
