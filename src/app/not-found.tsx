import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center bg-[#071522]">
      <div className="card-volume p-12 max-w-lg border-[#8F1D2C]/50">
        <p className="font-ui text-xs tracking-widest text-[#D7A83E] uppercase mb-4">
          Erro 404 — Rota Não Mapeada
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#F4D77A] mb-4">
          Águas Proibidas
        </h1>
        <blockquote className="quote-importante font-serif italic text-base sm:text-lg mb-8">
          “Você chegou a um lugar que não existe.<br />
          Ou existe, mas El Denotas não quer que você encontre.”
        </blockquote>
        <Link href="/" className="btn-primary text-xs">
          Retornar às Águas Conhecidas
        </Link>
      </div>
    </div>
  );
}
