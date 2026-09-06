import Link from "next/link";
import { locaisVolume1 } from "@/data/volume1";
import { MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locais — Volume 1",
  description: "Locais e territórios mapeados durante os eventos do Volume 1.",
};

export default function LocaisPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Cartografia Restrita
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Locais do Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl">
          Das vielas de Del Láguas aos festivais de Valdoria e às brumas da Broken Line.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locaisVolume1.map((loc) => (
          <Link
            key={loc.id}
            href={`/locais/${loc.slug}`}
            className="card-volume p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-xs text-[#D7A83E] font-ui">
                  <MapPin size={14} />
                  <span>Nível de Mistério: {loc.nivelMisterio}/5</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-[#F4D77A] group-hover:text-white transition-colors mb-2">
                {loc.nome}
              </h2>
              <p className="text-xs text-[rgba(242,233,208,0.75)] font-ui leading-relaxed line-clamp-3 mb-4">
                {loc.descricao}
              </p>

              <div className="space-y-1 text-xs font-ui text-[rgba(242,233,208,0.6)] mb-4">
                <p><strong>Clima:</strong> {loc.clima}</p>
                <p><strong>Habitantes:</strong> {loc.habitantes.join(", ")}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(215,168,62,0.15)] flex items-center justify-between text-xs font-ui text-[#D7A83E]">
              <span>Explorar registro cartográfico</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
