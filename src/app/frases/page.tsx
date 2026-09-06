import { frasesVolume1 } from "@/data/volume1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frases Marcantes — Volume 1",
  description: "Citações e diálogos memoráveis extraídos do Volume 1.",
};

export default function FrasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Ecos Verbais
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Frases Marcantes do Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)]">
          Palavras que definiram o rumo dos acontecimentos e a filosofia de Denotas.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="space-y-6">
        {frasesVolume1.map((f) => (
          <div key={f.id} className="card-volume p-6 sm:p-8">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F4D77A] leading-relaxed mb-4">
              “{f.texto}”
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-[rgba(215,168,62,0.15)] text-xs font-ui">
              <span className="text-[#D7A83E] font-semibold">
                — {f.personagem}
              </span>
              <span className="text-[rgba(242,233,208,0.5)] italic">
                {f.secao}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
