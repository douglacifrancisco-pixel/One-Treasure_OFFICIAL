import { notFound } from "next/navigation";
import Link from "next/link";
import { locaisVolume1 } from "@/data/volume1";
import { MapPin, AlertTriangle, Users } from "lucide-react";

export default function LocalDetailPage({ params }: { params: { slug: string } }) {
  const loc = locaisVolume1.find((x) => x.slug === params.slug);
  if (!loc) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.5)] mb-6">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/locais" className="hover:text-[#D7A83E]">Locais</Link>
        <span className="mx-2">/</span>
        <span className="text-[#D7A83E]">{loc.nome}</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-ui text-[#D7A83E] mb-2">
          <MapPin size={16} />
          <span>Mistério Cartográfico: {loc.nivelMisterio}/5</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          {loc.nome}
        </h1>
        <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)]">
          Registro Oficial do Volume 1
        </p>
      </div>

      <hr className="divider-gold mb-8" />

      <div className="card-volume p-8 mb-8">
        <h2 className="font-serif text-2xl text-[#F4D77A] mb-4">Descrição Geral</h2>
        <p className="font-ui text-sm leading-relaxed text-[rgba(242,233,208,0.85)] mb-6">
          {loc.descricao}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[rgba(215,168,62,0.15)] text-xs font-ui">
          <div>
            <h3 className="text-[#D7A83E] uppercase tracking-wider font-bold mb-2">
              Condições Climáticas
            </h3>
            <p className="text-[rgba(242,233,208,0.8)]">{loc.clima}</p>
          </div>
          <div>
            <h3 className="text-[#D7A83E] uppercase tracking-wider font-bold mb-2">
              Populações Presentes
            </h3>
            <p className="text-[rgba(242,233,208,0.8)]">{loc.habitantes.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* RISCOS E FACÇÕES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card-volume p-6">
          <h3 className="font-serif text-xl text-[#F4D77A] mb-3 flex items-center gap-2">
            <AlertTriangle size={18} className="text-red-400" />
            <span>Perigos Mapeados</span>
          </h3>
          <ul className="space-y-2 text-xs font-ui text-[rgba(242,233,208,0.8)]">
            {loc.perigos.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#D7A83E]">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-volume p-6">
          <h3 className="font-serif text-xl text-[#F4D77A] mb-3 flex items-center gap-2">
            <Users size={18} className="text-[#D7A83E]" />
            <span>Facções em Atividade</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {loc.faccoes.map((f, i) => (
              <span
                key={i}
                className="font-ui text-xs px-2.5 py-1 rounded bg-[#0C3550] border border-[rgba(215,168,62,0.2)] text-[#F4D77A]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* VERSÃO OFICIAL X SUSPEITA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded border border-[#8F1D2C]/40 bg-[#42121B]/20">
          <h3 className="font-ui text-xs uppercase tracking-widest text-red-300 font-bold mb-2">
            Versão Oficial dos Registros
          </h3>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)]">
            "{loc.versaoOficial}"
          </p>
        </div>

        <div className="p-6 rounded border border-[#D7A83E]/40 bg-[#0C3550]/30">
          <h3 className="font-ui text-xs uppercase tracking-widest text-[#D7A83E] font-bold mb-2">
            Versão Suspeita / Oculta
          </h3>
          <p className="font-serif italic text-sm text-[rgba(242,233,208,0.8)]">
            "{loc.versaoSuspeita}"
          </p>
        </div>
      </div>
    </div>
  );
}
