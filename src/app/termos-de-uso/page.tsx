"use client";

import Link from "next/link";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useWhatsapp } from "@/hooks/use-whatsapp";

const terms = [
  {
    title: "1. Aceitação dos Termos",
    text:
      "Ao acessar e utilizar este site, você concorda com estes Termos de Uso e com todas as leis e regulamentos aplicáveis.",
  },
  {
    title: "2. Objeto do Serviço",
    text:
      "A Consultoria Azul disponibiliza conteúdos informativos e atendimento comercial voltado à análise e consultoria para negociação de situações financeiras.",
  },
  {
    title: "3. Responsabilidades do Usuário",
    text:
      "O usuário se compromete a fornecer informações verdadeiras, atualizadas e completas durante o atendimento e a utilizar o site de forma lícita e ética.",
  },
  {
    title: "4. Propriedade Intelectual",
    text:
      "Todo o conteúdo deste site, incluindo textos, imagens, marcas, identidade visual e elementos gráficos, é protegido por direitos autorais e não pode ser reproduzido sem autorização.",
  },
  {
    title: "5. Limitação de Responsabilidade",
    text:
      "A Consultoria Azul envida seus melhores esforços para manter as informações corretas e atualizadas, mas não garante ausência total de erros, indisponibilidades temporárias ou resultados específicos.",
  },
  {
    title: "6. Links e Plataformas de Terceiros",
    text:
      "O site pode conter links ou integrações com plataformas de terceiros, como o WhatsApp. O uso desses serviços também está sujeito aos termos e políticas dessas plataformas.",
  },
  {
    title: "7. Privacidade e Dados",
    text:
      "O tratamento de dados pessoais é realizado conforme a nossa Política de Privacidade e em conformidade com a legislação aplicável.",
  },
  {
    title: "8. Alterações nos Termos",
    text:
      "Podemos atualizar estes Termos de Uso periodicamente. Recomendamos a leitura regular desta página para verificar alterações.",
  },
  {
    title: "9. Contato",
    text:
      "Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelos canais oficiais disponibilizados no site.",
  },
];

export default function TermosDeUsoPage() {
  const { loading, openWhatsapp } = useWhatsapp();

  return (
    <>
      <SiteHeader loading={loading} onWhatsappClick={openWhatsapp} />

      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-pink-600 transition hover:-translate-x-1 hover:text-pink-700"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <div className="mt-10 border-b-2 border-pink-200 pb-8 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Termos de Uso
            </h1>
            <p className="mt-4 text-slate-500">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-12">
            {terms.map((term) => (
              <section key={term.title} className="mb-10 last:mb-0">
                <h2 className="font-display text-2xl font-bold text-pink-600 sm:text-3xl">
                  {term.title}
                </h2>
                <p className="font-body mt-5 text-base leading-8 text-slate-700">
                  {term.text}
                </p>
              </section>
            ))}

            <div className="mt-12 border-t-2 border-slate-200 pt-8 text-center">
              <Link
                href="/"
                className="inline-flex rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
              >
                Voltar para o Início
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingWhatsapp loading={loading} onWhatsappClick={openWhatsapp} />
    </>
  );
}