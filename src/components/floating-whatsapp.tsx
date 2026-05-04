"use client";

type FloatingWhatsappProps = {
  loading: boolean;
  onWhatsappClick: (message: string) => void;
};

export function FloatingWhatsapp({
  loading,
  onWhatsappClick,
}: FloatingWhatsappProps) {
  return (
    <button
      type="button"
      aria-label="Fale conosco no WhatsApp"
      onClick={() => onWhatsappClick("Olá! Gostaria de consultar minha situação.")}
      disabled={loading}
      className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition hover:scale-110 disabled:opacity-70"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 24 24" className="relative z-10 h-7 w-7 fill-current">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.55 0 .24 5.31.24 11.83c0 2.08.54 4.11 1.57 5.91L0 24l6.43-1.69a11.8 11.8 0 0 0 5.64 1.44h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.12-3.39-8.44ZM12.08 21.7h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.82 9.82 0 0 1-1.52-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.89a9.79 9.79 0 0 1 2.9 6.97c0 5.43-4.42 9.86-9.86 9.86Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.85 1.21 3.05c.15.2 2.08 3.17 5.05 4.45.71.31 1.27.5 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </button>
  );
}