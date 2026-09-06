import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de Poderes — Volume 1",
  description: "Conceitos de força, mente e energia apresentados no Volume 1.",
};

export default function PoderesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-2">
          Fundamentos Registrados
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#F4D77A] mb-3">
          Poder & Percepção no Volume 1
        </h1>
        <p className="font-serif italic text-base text-[rgba(242,233,208,0.7)] max-w-xl mx-auto">
          No universo do Volume 1, o verdadeiro poder não decorre apenas de força bruta, mas de limites rigorosos e clareza mental.
        </p>
      </div>

      <hr className="divider-gold mb-12" />

      <div className="space-y-6">
        <div className="card-volume p-8 border-[#D7A83E]/40">
          <span className="font-ui text-[10px] uppercase tracking-wider text-[#D7A83E] font-bold block mb-1">
            Pilar Fundamental
          </span>
          <h2 className="font-serif text-2xl text-[#F4D77A] mb-3">
            Percepção e Leitura de Movimentos
          </h2>
          <p className="text-sm font-ui text-[rgba(242,233,208,0.85)] leading-relaxed mb-4">
            A habilidade primordial demonstrada por Denotas desde o Mar dos Bolsos: observar a respiração, microexpressões e o centro de equilíbrio dos adversários para antecipar reações com antecedência absoluta.
          </p>
          <div className="bg-[#03070B] p-4 rounded text-xs font-ui text-[rgba(242,233,208,0.7)] border border-[rgba(215,168,62,0.15)]">
            <strong>Regra Prática:</strong> “Informação é arquitetura. Você constrói o espaço onde a outra pessoa vai pensar.”
          </div>
        </div>

        <div className="card-volume p-8">
          <span className="font-ui text-[10px] uppercase tracking-wider text-[#D7A83E] font-bold block mb-1">
            Energia Corporal (Capítulo 7)
          </span>
          <h2 className="font-serif text-2xl text-[#F4D77A] mb-3">
            Fundamentos de Ki
          </h2>
          <p className="text-sm font-ui text-[rgba(242,233,208,0.85)] leading-relaxed mb-4">
            O despertar do controle interno no Capítulo 7 (“O Corpo Que Não Acompanha a Mente”). Uma disciplina física e respiratória que sincroniza reflexos com o pensamento lógico, gerando precisão sem desperdício motor.
          </p>
          <div className="bg-[#03070B] p-4 rounded text-xs font-ui text-[rgba(242,233,208,0.7)] border border-[rgba(215,168,62,0.15)]">
            <strong>Limitação Canônica:</strong> O excesso gera exaustão e dano muscular. O poder só possui relevância narrativa quando acompanhado de limite.
          </div>
        </div>
      </div>
    </div>
  );
}
