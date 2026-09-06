import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Obra — Volume 1",
  description: "Detalhes sobre a criação e universo de One Treasure — Volume 1.",
};

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Manifesto Editorial
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          One Treasure — Volume 1
        </h1>
        <p className="font-serif italic text-xl text-[rgba(242,233,208,0.8)]">
          O Homem que Enganou o Mundo
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="card-volume p-8 sm:p-12 mb-10 space-y-6 font-serif text-base sm:text-lg leading-relaxed text-[rgba(242,233,208,0.9)]">
        <p>
          <strong>One Treasure</strong> é uma narrativa original de aventura marítima, suspense intelectual e estratégia. Acompanhamos <strong>Denotas</strong> (Alphonse del Cart D.), um jovem que nasce no cais de Del Láguas e decide trilhar um caminho onde percepção, leitura humana e planejamento valem mais do que qualquer espada ou título nobiliárquico.
        </p>
        <blockquote className="quote-importante">
          “Um homem que vale 100 homens.”
        </blockquote>
        <p>
          Este portal oficial foi estruturado com rigor canônico para apresentar a totalidade do <strong>Volume 1</strong>, compreendendo a Sinopse Oficial, o documento confidencial Arquivo 0, o Prólogo e os Capítulos 1 a 10, mantendo cada palavra rigorosamente fiel ao manuscrito original.
        </p>
        <p>
          A experiência do leitor foi projetada para espelhar a atmosfera da obra: um arquivo de manuscritos, relatórios de inteligência e diários de bordo, onde cada capítulo revela pistas sobre o que realmente aconteceu aos mares após a mítica Era da Quebra.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/ler/sinopse" className="btn-primary text-xs">
          Iniciar Leitura Guiada
        </Link>
        <Link href="/volumes/volume-1" className="btn-ghost text-xs">
          Ver Todos os Capítulos
        </Link>
      </div>
    </div>
  );
}
