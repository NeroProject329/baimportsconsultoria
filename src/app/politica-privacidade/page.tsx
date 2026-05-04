"use client";

import Link from "next/link";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useWhatsapp } from "@/hooks/use-whatsapp";

const sections = [
  {
    title: "1. Introdução",
    content:
      "A Consultoria Azul está comprometida em proteger a privacidade e os dados pessoais de nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.",
  },
  {
    title: "2. Informações que Coletamos",
    content:
      "Coletamos informações que você nos fornece diretamente, incluindo:",
    items: [
      "Nome completo",
      "Documentos de identificação (CPF, RG)",
      "Informações de contato (telefone, e-mail)",
      "Informações financeiras relacionadas às dívidas",
      "Dados de navegação em nosso site",
    ],
  },
  {
    title: "3. Como Utilizamos suas Informações",
    content: "Utilizamos suas informações pessoais para:",
    items: [
      "Prestar nossos serviços de consultoria e negociação",
      "Comunicar-nos com você sobre nossos serviços",
      "Melhorar nossos serviços e experiência do usuário",
      "Cumprir obrigações legais e regulatórias",
      "Prevenir fraudes e garantir a segurança",
    ],
  },
  {
    title: "4. Compartilhamento de Informações",
    content: "Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas:",
    items: [
      "Com credores e instituições financeiras para fins de negociação",
      "Com prestadores de serviços que nos auxiliam na operação",
      "Quando exigido por lei ou ordem judicial",
      "Para proteger nossos direitos e segurança",
    ],
  },
  {
    title: "5. Segurança dos Dados",
    paragraphs: [
      "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
      "No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.",
    ],
  },
  {
    title: "6. Retenção de Dados",
    content:
      "Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.",
  },
  {
    title: "7. Seus Direitos",
    content: "De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:",
    items: [
      "Acessar suas informações pessoais",
      "Corrigir dados incompletos, inexatos ou desatualizados",
      "Solicitar a exclusão de dados desnecessários",
      "Revogar seu consentimento a qualquer momento",
      "Solicitar a portabilidade dos dados",
    ],
  },
  {
    title: "8. Cookies e Tecnologias Similares",
    content:
      "Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.",
  },
  {
    title: "9. Alterações nesta Política",
    content:
      "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política em nosso site com a data de atualização.",
  },
  {
    title: "10. Consentimento",
    content:
      "Ao utilizar nossos serviços, você consente com a coleta e uso de informações conforme descrito nesta Política de Privacidade.",
  },
];

export default function PoliticaPrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="mt-4 text-slate-500">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-12">
            {sections.map((section) => (
              <section key={section.title} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl font-bold text-pink-600 sm:text-3xl">
                  {section.title}
                </h2>

                {"content" in section && section.content ? (
                  <p className="font-body mt-5 text-base leading-8 text-slate-700">
                    {section.content}
                  </p>
                ) : null}

                {"paragraphs" in section && section.paragraphs
                  ? section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-body mt-5 text-base leading-8 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))
                  : null}

                {"items" in section && section.items ? (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700 marker:text-pink-600">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
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