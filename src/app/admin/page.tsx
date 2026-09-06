"use client";
import { useState } from "react";
import Link from "next/link";
import { secoesVolume1, personagensVolume1, locaisVolume1 } from "@/data/volume1";
import { BookOpen, Users, MapPin, Key } from "lucide-react";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "onetreasure") {
      setLogged(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  if (!logged) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="card-volume p-8 w-full max-w-sm text-center">
          <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-4">
            Acesso Restrito
          </p>
          <h1 className="font-serif text-2xl text-[#F4D77A] mb-6">
            Painel do Administrador
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha de acesso"
              className="w-full p-3 rounded bg-[#0C3550]/40 border border-[#D7A83E]/30 text-sm font-ui text-white mb-3 text-center focus:outline-none focus:border-[#D7A83E]"
            />
            {err && (
              <p className="text-red-400 text-xs font-ui mb-3">
                Senha incorreta.
              </p>
            )}
            <button type="submit" className="btn-primary text-xs w-full">
              Entrar no Painel
            </button>
            <p className="microtexto mt-4 text-[10px]">Senha demo: onetreasure</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-ui text-xs text-[#D7A83E] uppercase tracking-widest">
            Gerenciador Oficial
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#F4D77A]">
            Painel Administrativo — Volume 1
          </h1>
        </div>
        <button
          onClick={() => setLogged(false)}
          className="btn-ghost text-xs"
        >
          Desconectar
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="card-volume p-5 text-center">
          <BookOpen size={24} className="text-[#D7A83E] mx-auto mb-2" />
          <p className="font-serif text-2xl font-bold text-[#F4D77A]">
            {secoesVolume1.length}
          </p>
          <p className="font-ui text-[11px] text-[rgba(242,233,208,0.6)] uppercase">
            Seções Ativas
          </p>
        </div>
        <div className="card-volume p-5 text-center">
          <Users size={24} className="text-[#D7A83E] mx-auto mb-2" />
          <p className="font-serif text-2xl font-bold text-[#F4D77A]">
            {personagensVolume1.length}
          </p>
          <p className="font-ui text-[11px] text-[rgba(242,233,208,0.6)] uppercase">
            Personagens
          </p>
        </div>
        <div className="card-volume p-5 text-center">
          <MapPin size={24} className="text-[#D7A83E] mx-auto mb-2" />
          <p className="font-serif text-2xl font-bold text-[#F4D77A]">
            {locaisVolume1.length}
          </p>
          <p className="font-ui text-[11px] text-[rgba(242,233,208,0.6)] uppercase">
            Locais Mapeados
          </p>
        </div>
        <div className="card-volume p-5 text-center">
          <Key size={24} className="text-[#D7A83E] mx-auto mb-2" />
          <p className="font-serif text-2xl font-bold text-[#F4D77A]">10</p>
          <p className="font-ui text-[11px] text-[rgba(242,233,208,0.6)] uppercase">
            Capítulos do Vol. 1
          </p>
        </div>
      </div>

      <div className="card-volume p-6">
        <h2 className="font-serif text-xl text-[#F4D77A] mb-4">
          Seções Registradas do Volume 1
        </h2>
        <div className="divide-y divide-[rgba(215,168,62,0.1)]">
          {secoesVolume1.map((s) => (
            <div
              key={s.id}
              className="py-3 flex items-center justify-between text-xs font-ui"
            >
              <div>
                <span className="font-bold text-[#D7A83E] mr-2">
                  #{s.ordem}
                </span>
                <span className="text-white font-medium">{s.titulo}</span>
                <span className="text-[rgba(242,233,208,0.4)] ml-2">
                  ({s.tipo})
                </span>
              </div>
              <Link
                href={`/ler/${s.slug}`}
                className="text-[#D7A83E] hover:underline"
              >
                Visualizar →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
