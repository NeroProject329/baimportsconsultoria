"use client";

type SiteHeaderProps = {
  loading: boolean;
  onWhatsappClick: (message: string) => void;
};

export function SiteHeader({ loading, onWhatsappClick }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-display text-2xl font-bold tracking-tight text-slate-900">
          Consultoria<span className="text-pink-600"> Azul</span>
        </div>

        <button
          type="button"
          onClick={() => onWhatsappClick("Olá! Gostaria de falar com a Consultoria Azul.")}
          disabled={loading}
          className="rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(233,30,99,0.22)] transition hover:-translate-y-0.5 hover:bg-pink-700 disabled:opacity-70"
        >
          {loading ? "Carregando..." : "Fale Conosco"}
        </button>
      </div>
    </header>
  );
}