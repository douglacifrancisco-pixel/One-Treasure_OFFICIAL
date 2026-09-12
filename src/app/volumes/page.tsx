import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, LockKeyhole, Sparkles } from "lucide-react";
import { sectionsByVolume, volumeCatalog } from "@/data/library";

export const metadata: Metadata = {
  title: "Volumes — Biblioteca Oficial",
  description: "A biblioteca oficial de One Treasure, organizada por volumes e leitura guiada.",
};

const volumeStyles: Record<number, string> = {
  1: "border-[#D7A83E]/40",
  2: "volume-two-card",
  3: "border-cyan-400/30",
  4: "border-red-400/30",
};

export default function VolumesIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-[0.28em] text-[#D7A83E] uppercase mb-2">
          Arquivo canônico
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Biblioteca de Volumes
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-2xl">
          A leitura acontece em sequência. Cada volume guarda a próxima porta — e algumas
          portas fazem perguntas antes de abrir.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="space-y-8">
        {volumeCatalog.map((volume) => {
          const sections = sectionsByVolume[volume.numero];
          const isSecond = volume.numero === 2;

          return (
            <section
              key={volume.id}
              className={`card-volume p-7 sm:p-10 ${volumeStyles[volume.numero] ?? ""} ${
                isSecond ? "volume-two-shell" : ""
              }`}
            >
              <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="status-badge status-disponivel">Disponível</span>
                    <span className="font-ui text-xs uppercase tracking-widest text-[#D7A83E]">
                      Volume {volume.numero}
                    </span>
                    {isSecond && (
                      <span className="volume-two-badge">
                        <Sparkles size={12} />
                        Identidade própria
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F4D77A] mb-2">
                    {volume.titulo}
                  </h2>
                  <p className="font-serif italic text-lg text-[rgba(242,233,208,0.8)] mb-4">
                    {volume.subtitulo}
                  </p>
                  <p className="text-sm text-[rgba(242,233,208,0.7)] font-ui leading-relaxed mb-6">
                    {volume.descricao}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/volumes/${volume.slug}`} className="btn-primary text-xs">
                      Abrir volume
                      <ArrowRight size={14} />
                    </Link>
                    <span className="inline-flex items-center gap-2 px-3 py-2 font-ui text-xs text-[rgba(242,233,208,0.55)]">
                      <LockKeyhole size={13} />
                      Leitura sequencial
                    </span>
                  </div>
                </div>

                <div className="shrink-0 rounded border border-white/10 bg-[#03070B]/50 p-6 text-center w-full lg:w-52">
                  <BookOpen size={32} className="text-[#D7A83E] mx-auto mb-2" />
                  <p className="font-serif text-2xl text-[#F4D77A] font-bold">
                    {sections.length}
                  </p>
                  <p className="font-ui text-[11px] text-[rgba(242,233,208,0.5)] uppercase tracking-wider">
                    Partes de leitura
                  </p>
                  <p className="mt-3 font-ui text-[11px] text-[rgba(242,233,208,0.45)]">
                    O progresso fica guardado neste navegador
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}