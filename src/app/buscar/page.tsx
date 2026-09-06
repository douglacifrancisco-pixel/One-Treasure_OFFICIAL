"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { secoesVolume1, personagensVolume1, locaisVolume1, frasesVolume1, pistasVolume1 } from "@/data/volume1";
import { Search, BookOpen, User, MapPin, Key, Quote } from "lucide-react";

export default function BuscarPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    const items: {
      tipo: string;
      titulo: string;
      descricao: string;
      href: string;
      icon: any;
    }[] = [];

    secoesVolume1.forEach((s) => {
      if (
        s.titulo.toLowerCase().includes(q) ||
        s.resumo.toLowerCase().includes(q) ||
        s.conteudoTexto.toLowerCase().includes(q)
      ) {
        items.push({
          tipo: s.tipo === "capitulo" ? `Capítulo ${s.numero}` : s.tipo.toUpperCase(),
          titulo: s.titulo,
          descricao: s.resumo,
          href: `/ler/${s.slug}`,
          icon: BookOpen,
        });
      }
    });

    personagensVolume1.forEach((p) => {
      if (
        p.nome.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q) ||
        p.aliases.some((a) => a.toLowerCase().includes(q))
      ) {
        items.push({
          tipo: "Personagem",
          titulo: p.nome,
          descricao: p.descricao,
          href: `/personagens/${p.slug}`,
          icon: User,
        });
      }
    });

    locaisVolume1.forEach((l) => {
      if (
        l.nome.toLowerCase().includes(q) ||
        l.descricao.toLowerCase().includes(q)
      ) {
        items.push({
          tipo: "Local",
          titulo: l.nome,
          descricao: l.descricao,
          href: `/locais/${l.slug}`,
          icon: MapPin,
        });
      }
    });

    pistasVolume1.forEach((pis) => {
      if (
        pis.titulo.toLowerCase().includes(q) ||
        pis.descricao.toLowerCase().includes(q)
      ) {
        items.push({
          tipo: "Pista",
          titulo: pis.titulo,
          descricao: pis.descricao,
          href: `/pistas`,
          icon: Key,
        });
      }
    });

    frasesVolume1.forEach((f) => {
      if (
        f.texto.toLowerCase().includes(q) ||
        f.personagem.toLowerCase().includes(q)
      ) {
        items.push({
          tipo: "Frase",
          titulo: `"${f.texto.slice(0, 60)}..."`,
          descricao: `— ${f.personagem} (${f.secao})`,
          href: `/frases`,
          icon: Quote,
        });
      }
    });

    return items;
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Pesquisa Oficial
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Buscar no Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)]">
          Pesquise por capítulos, personagens, locais, diálogos ou palavras-chave.
        </p>
      </div>

      <div className="relative mb-12">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D7A83E]"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: Denotas, Valdoria, Joy Boy, Ki, biblioteca, Garvin..."
          className="w-full pl-12 pr-4 py-4 rounded bg-[#0C3550]/40 border border-[#D7A83E]/30 text-base font-ui text-[#F2E9D0] placeholder-[rgba(242,233,208,0.4)] focus:outline-none focus:border-[#D7A83E]"
        />
      </div>

      {query.trim().length >= 2 && (
        <div>
          <p className="font-ui text-xs text-[rgba(242,233,208,0.5)] mb-4">
            {results.length} resultado{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
          </p>

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="card-volume p-5 flex items-start gap-4 group block"
                >
                  <r.icon size={20} className="text-[#D7A83E] mt-1 shrink-0" />
                  <div>
                    <span className="font-ui text-[10px] uppercase tracking-wider text-[#D7A83E] font-semibold">
                      {r.tipo}
                    </span>
                    <h2 className="font-serif text-lg text-[#F4D77A] group-hover:text-white transition-colors">
                      {r.titulo}
                    </h2>
                    <p className="text-xs font-ui text-[rgba(242,233,208,0.7)] line-clamp-2 mt-1">
                      {r.descricao}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card-volume p-12 text-center">
              <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)] mb-2">
                "Essa informação ainda não existe no Volume 1."
              </p>
              <p className="font-serif italic text-sm text-[#D7A83E]/70">
                Ou alguém a apagou dos registros.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
