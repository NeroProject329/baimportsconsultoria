import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="font-display text-3xl font-bold tracking-tight">
            Consultoria <span className="text-pink-500"> Azul</span>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75">
            Transformando desafios em oportunidades de crescimento para o seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <img
              src="/img/100.png"
              alt="Selo de Qualidade"
              className="h-auto max-w-[120px] opacity-90 transition hover:opacity-100"
            />
            <img
              src="/img/sgr.png"
              alt="Selo SGR"
              className="h-auto max-w-[120px] opacity-90 transition hover:opacity-100"
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/85">
            Atividades de contabilidade especializada
          </p>

          <p className="mt-4 text-sm text-white/70">
            © 2026 Ba Imports Consultoria - Atividades de contabilidade. Todos os direitos reservados.
          </p>

          <p className="mt-3 text-sm text-white/70">
            CNPJ: 48.290.973/0001-39
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Rua Joao Alves dos Santos, 151, Centro, CEP: 79580-000, Inocência, MS
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <Link
              href="/politica-privacidade"
              className="transition hover:text-pink-400 hover:underline"
            >
              Política de Privacidade
            </Link>
            <span>|</span>
            <Link
              href="/termos-de-uso"
              className="transition hover:text-pink-400 hover:underline"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}