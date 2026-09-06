import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(215,168,62,0.15)] mt-24 py-16 px-4 bg-[#03070B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-serif text-[#F4D77A] text-2xl font-bold mb-3">
              One Treasure — Volume 1
            </h3>
            <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)] mb-4">
              O Homem que Enganou o Mundo
            </p>
            <p className="text-sm text-[rgba(242,233,208,0.6)] font-ui leading-relaxed max-w-md">
              Arquivo oficial restrito ao Volume 1. Narrativa original de aventura náutica,
              estratégia e ficção dos mares.
            </p>
            <blockquote className="mt-4 border-l-2 border-[#D7A83E] pl-3 italic text-xs text-[#D7A83E]">
              "Um homem que vale 100 homens."
            </blockquote>
          </div>

          <div>
            <h4 className="font-ui text-xs text-[#D7A83E] uppercase tracking-widest font-semibold mb-4">
              A Ordem de Leitura
            </h4>
            <ul className="space-y-2 text-sm font-ui">
              <li>
                <Link href="/sinopse" className="nav-link hover:text-[#F4D77A]">
                  1. Sinopse Oficial
                </Link>
              </li>
              <li>
                <Link href="/arquivo-0" className="nav-link hover:text-[#F4D77A]">
                  2. Arquivo 0 (Confidencial)
                </Link>
              </li>
              <li>
                <Link href="/prologo" className="nav-link hover:text-[#F4D77A]">
                  3. Prólogo
                </Link>
              </li>
              <li>
                <Link href="/volumes/volume-1" className="nav-link hover:text-[#F4D77A]">
                  4. Volume 1 (Caps 1 a 10)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs text-[#D7A83E] uppercase tracking-widest font-semibold mb-4">
              Arquivo & Lore
            </h4>
            <ul className="space-y-2 text-sm font-ui">
              <li>
                <Link href="/personagens" className="nav-link">
                  Personagens
                </Link>
              </li>
              <li>
                <Link href="/locais" className="nav-link">
                  Locais
                </Link>
              </li>
              <li>
                <Link href="/cronologia" className="nav-link">
                  Cronologia
                </Link>
              </li>
              <li>
                <Link href="/pistas" className="nav-link">
                  Pistas & Enigmas
                </Link>
              </li>
              <li>
                <Link href="/frases" className="nav-link">
                  Frases Marcantes
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="nav-link">
                  Sobre a Obra
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="divider-gold my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-ui text-[rgba(242,233,208,0.4)]">
          <span>© One Treasure — Volume 1 Oficial. Todos os direitos reservados.</span>
          <span className="microtexto">
            "Se tudo isso fizer sentido para você… então você já foi enganado."
          </span>
        </div>
      </div>
    </footer>
  );
}
