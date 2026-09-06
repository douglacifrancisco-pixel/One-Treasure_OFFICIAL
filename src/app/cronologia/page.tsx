import { cronologiaVolume1 } from "@/data/volume1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cronologia — Volume 1",
  description: "Linha do tempo histórica restrita aos acontecimentos do Volume 1.",
};

export default function CronologiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Linha do Tempo
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Cronologia do Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)]">
          Reconstituição dos eventos que moldaram o despertar de Denotas até sua decisão de partir.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D7A83E]/30 space-y-10">
        {cronologiaVolume1.map((item, idx) => (
          <div key={item.id} className="relative group">
            {/* Marcador */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#03070B] border-2 border-[#D7A83E] group-hover:scale-125 transition-transform" />

            <div className="card-volume p-6">
              <span className="font-ui text-[11px] text-[#D7A83E] uppercase tracking-wider font-semibold block mb-1">
                {item.secao}
              </span>
              <h2 className="font-serif text-2xl text-[#F4D77A] mb-2">
                {item.titulo}
              </h2>
              <p className="text-xs font-ui text-[rgba(242,233,208,0.8)] leading-relaxed">
                {item.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
