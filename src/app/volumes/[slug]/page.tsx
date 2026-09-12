import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, ChevronRight, LockKeyhole } from "lucide-react";
import { sectionsByVolume, volumeCatalog } from "@/data/library";

export default async function VolumeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const volume = volumeCatalog.find((item) => item.slug === slug);
  if (!volume) return notFound();

  const sections = sectionsByVolume[volume.numero];

  return (
    <div className={`max-w-5xl mx-auto px-4 pt-28 pb-20 ${volume.numero === 2 ? "volume-two-shell" : ""}`}>
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.5)] mb-6">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/volumes" className="hover:text-[#D7A83E]">Volumes</Link>
        <span className="mx-2">/</span>
        <span className="text-[#D7A83E]">Volume {volume.numero}</span>
      </nav>

      <div className="mb-10">
        <span className="status-badge status-disponivel mb-3 inline-block">Leitura guiada</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          {volume.titulo}
        </h1>
        <p className="font-serif italic text-xl text-[rgba(242,233,208,0.8)] mb-4">
          {volume.subtitulo}
        </p>
        <p className="text-sm text-[rgba(242,233,208,0.7)] font-ui leading-relaxed max-w-2xl">
          {volume.descricao}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        <Link href={`/ler/${sections[0].slug}`} className="btn-primary text-xs">
          Começar leitura
          <ArrowRight size={14} />
        </Link>
        <span className="inline-flex items-center gap-2 px-3 py-2 font-ui text-xs text-[rgba(242,233,208,0.55)]">
          <LockKeyhole size={14} />
          Cada parte desbloqueia a seguinte
        </span>
      </div>

      <hr className="divider-gold mb-10" />

      <div className="space-y-4">
        <h2 className="font-serif text-2xl text-[#F4D77A] mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-[#D7A83E]" />
          Índice do Volume {volume.numero}
        </h2>

        {sections.map((item, index) => (
          <Link
            key={item.id}
            href={`/ler/${item.slug}`}
            className="card-volume p-5 flex items-center justify-between group block"
          >
            <div className="flex items-start gap-4">
              <span className="font-ui text-xs font-bold text-[#D7A83E] px-2.5 py-1 rounded bg-[#0C3550]/60 shrink-0">
                {index + 1}
              </span>
              <div>
                <span className="font-ui text-[10px] text-[#D7A83E]/70 uppercase tracking-widest block mb-0.5">
                  {item.tipo}
                </span>
                <h3 className="font-serif text-lg text-[#F4D77A] group-hover:text-white transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-xs text-[rgba(242,233,208,0.6)] font-ui mt-1 line-clamp-1">
                  {item.resumo}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <span className="hidden sm:inline font-ui text-xs text-[rgba(242,233,208,0.4)]">
                {item.duracaoEstimada}
              </span>
              <ChevronRight size={18} className="text-[#D7A83E] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}