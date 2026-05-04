"use client";

import { useEffect, useRef, useState } from "react";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useWhatsapp } from "@/hooks/use-whatsapp";

const features = [
  {
    title: "Confiança e Segurança",
    description:
      "Nossa equipe especializada estará sempre ao seu lado para orientá-lo e garantir que você tome as melhores decisões.",
    icon: "shield",
  },
  {
    title: "Eficiência e Resultados",
    description:
      "Processos otimizados e estratégias comprovadas para acelerar o crescimento do seu negócio.",
    icon: "lightning",
  },
  {
    title: "Equipe Especializada",
    description:
      "Profissionais experientes e qualificados em diversas áreas de consultoria empresarial.",
    icon: "people",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Soluções customizadas para atender às necessidades específicas do seu negócio.",
    icon: "target",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Análise e Diagnóstico",
    description:
      "Realizamos uma análise completa da sua situação atual, identificando todas as oportunidades para você voltar ao azul com os melhores descontos do mercado.",
  },
  {
    number: "02",
    title: "Estratégia e Planejamento",
    description:
      "Desenvolvemos um plano estratégico personalizado com metas claras e cronograma de implementação.",
  },
  {
    number: "03",
    title: "Implementação e Execução",
    description:
      "Colocamos em prática todas as estratégias planejadas com acompanhamento constante e ajustes quando necessário.",
  },
  {
    number: "04",
    title: "Resultados e Otimização",
    description:
      "Monitoramos os resultados, analisamos o desempenho e implementamos melhorias contínuas para maximizar o sucesso.",
  },
] as const;

const benefits = [
  { icon: "gem", text: "Consulta Grátis" },
  { icon: "graph", text: "Até 98% OFF" },
  { icon: "laptop", text: "100% Online" },
  { icon: "flash", text: "Sem Burocracia" },
  { icon: "rocket", text: "Resultado Rápido" },
  { icon: "lock", text: "Seguro e Confiável" },
] as const;

const testimonials = [
  {
    name: "Marina Silva",
    role: "Empresária",
    image: "/img/maria.jpg",
    text: "Excelente empresa, atendimento rápido e muito profissional. Recomendo super!",
  },
  {
    name: "Paulo Roberto",
    role: "Analista",
    image: "/img/customer-paulo.png",
    text: "A consultoria resolveu nossos problemas em tempo recorde. Atendimento excepcional!",
  },
  {
    name: "Juliana Costa",
    role: "Autônoma",
    image: "/img/customer-juliana.png",
    text: "Resolveram nosso problema de forma ótima. Empresa séria e confiável!",
  },
  {
    name: "Ricardo Mendes",
    role: "Contador",
    image: "/img/customer-ricardo.png",
    text: "Consegui negociar todas as minhas dívidas com descontos incríveis. O processo foi simples e rápido, super recomendo!",
  },
  {
    name: "Ana Paula Santos",
    role: "Designer",
    image: "/img/customer-ana-paula.png",
    text: "Fiquei impressionada com a eficiência e o cuidado no atendimento. Me ajudaram a sair do vermelho de forma organizada e sem estresse.",
  },
] as const;

const stats = [
  { value: 16000000, suffix: "+", label: "Clientes Atendidos" },
  { value: 12, suffix: "+", label: "Anos de Experiência" },
  { value: 98, suffix: "%", label: "Satisfação dos Clientes" },
] as const;

function formatNumber(value: number, suffix: string) {
  if (value >= 1000) {
    return `${Math.floor(value).toLocaleString("pt-BR")}${suffix}`;
  }
  return `${Math.floor(value)}${suffix}`;
}

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);

        const duration = 2000;
        const start = performance.now();

        const frame = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(value * progress);
          if (progress < 1) requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
    >
      <div className="font-display text-4xl font-bold text-pink-600 sm:text-5xl">
        {formatNumber(display, suffix)}
      </div>
      <div className="mt-3 text-sm font-medium text-slate-500 sm:text-base">
        {label}
      </div>
    </div>
  );
}

function FeatureIcon({ type }: { type: (typeof features)[number]["icon"] }) {
  const cls = "h-10 w-10";

  switch (type) {
    case "shield":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3 4.5 6v6c0 5.2 3.6 8.3 7.5 9 3.9-.7 7.5-3.8 7.5-9V6L12 3Z" />
          <path d="m9.5 12 1.7 1.7L14.8 10" />
        </svg>
      );
    case "lightning":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "people":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.9" />
          <path d="M16.5 4.1a3 3 0 0 1 0 5.8" />
        </svg>
      );
    case "target":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

function BenefitIcon({ type }: { type: (typeof benefits)[number]["icon"] }) {
  const cls = "h-9 w-9";

  switch (type) {
    case "gem":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="m6 7 3-4h6l3 4-6 14L6 7Z" />
          <path d="M3 7h18" />
          <path d="m9 3 3 4 3-4" />
        </svg>
      );
    case "graph":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 19h16" />
          <path d="m7 9 4 4 6-8" />
        </svg>
      );
    case "laptop":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4" y="5" width="16" height="11" rx="1.5" />
          <path d="M2 19h20" />
        </svg>
      );
    case "flash":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 19c2.5-6 7-10.5 13-13 0 0 1 5-2.2 8.2C12.7 17.3 8 21 2 22l3-3Z" />
        </svg>
      );
    case "lock":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        </svg>
      );
  }
}

function StarRow() {
  return (
    <div className="mb-5 flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.52 6.12 20.62l1.12-6.56L2.48 9.42l6.58-.96L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const { loading, openWhatsapp } = useWhatsapp();
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        const timer = setTimeout(() => setShowCookieBanner(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setShowCookieBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const getTestimonialScrollAmount = () => {
    const container = testimonialsRef.current;
    if (!container) return 0;

    const card = container.querySelector("[data-testimonial-card]") as HTMLElement | null;
    if (!card) return 0;

    const styles = window.getComputedStyle(container);
    const gap = parseInt(styles.gap || styles.columnGap || "24", 10);

    return card.offsetWidth + gap;
  };

  const scrollTestimonials = (direction: "prev" | "next") => {
    const container = testimonialsRef.current;
    if (!container) return;

    const amount = getTestimonialScrollAmount();
    if (!amount) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      const next = container.scrollLeft + amount;

      if (next >= maxScrollLeft - 8) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: amount, behavior: "smooth" });
      }
    } else {
      const prev = container.scrollLeft - amount;

      if (prev <= 0) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -amount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      const container = testimonialsRef.current;
      if (!container) return;
      if (window.innerWidth < 768) return;
      if (isTestimonialsHovered) return;

      const amount = getTestimonialScrollAmount();
      if (!amount) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = container.scrollLeft + amount;

      if (next >= maxScrollLeft - 8) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: amount, behavior: "smooth" });
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isTestimonialsHovered]);

  const acceptCookies = () => {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch {}
    setShowCookieBanner(false);
  };

  const rejectCookies = () => {
    try {
      localStorage.setItem("cookieConsent", "rejected");
    } catch {}
    setShowCookieBanner(false);
  };

  return (
    <>
      <SiteHeader loading={loading} onWhatsappClick={openWhatsapp} />

      <main>
        <section
          className="relative overflow-hidden text-white"
          style={{
            backgroundColor: "#e83170",
            backgroundImage:
              "linear-gradient(135deg, rgba(232,49,112,0.78), rgba(194,24,91,0.82)), url('/img/gplay.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "auto",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_35%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/10 to-transparent" />

          <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
            <div className="relative">
              <div className="absolute -left-6 top-0 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur-md">
                Descontos exclusivos • Atendimento rápido
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Descontos de até{" "}
                <strong className="font-display text-[#FFD700] [text-shadow:0_2px_15px_rgba(255,215,0,0.55)]">
                  98%
                </strong>
                . Fique hoje mesmo no Azul
              </h1>

              <p className="font-body mt-6 max-w-xl text-lg leading-8 text-white/90">
                Verifique as ofertas disponíveis para você e consulte sua situação.
              </p>

              <button
                type="button"
                onClick={() =>
                  openWhatsapp("Olá! Gostaria de consultar agora grátis.")
                }
                disabled={loading}
                className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-pink-600 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-pink-700 hover:text-white disabled:opacity-70"
              >
                {loading ? "Carregando..." : "Consultar Agora Grátis"}
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" />
              <div className="absolute -inset-2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <img
                  src="/img/123.webp"
                  alt="Consultoria Financeira"
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {stats.map((item) => (
              <AnimatedStat
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Por que Escolher Nossos Serviços?
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
              Descubra as vantagens de trabalhar conosco
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-black/5 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_12px_40px_rgba(233,30,99,0.12)]"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-50 text-pink-600">
                    <FeatureIcon type={feature.icon} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="font-body mt-4 text-base leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Nosso Processo de Consultoria
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
              Uma abordagem estruturada e comprovada para transformar sua situação
            </p>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 rounded-3xl border border-black/5 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:translate-x-2 hover:border-pink-200 hover:shadow-[0_12px_40px_rgba(233,30,99,0.12)] md:grid-cols-[100px_1fr]"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-50 font-display text-4xl font-extrabold text-pink-600">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="font-body mt-3 text-base leading-8 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-pink-600 to-pink-800 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-5xl">
              Seus Benefícios
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {benefits.map((item) => (
                <div
                  key={item.text}
                  className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <BenefitIcon type={item.icon} />
                  </div>
                  <span className="font-display text-base font-semibold tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-left">
                  O que Nossos Clientes Dizem
                </h2>
                <p className="font-body mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500 md:mx-0 md:text-left">
                  Histórico de sucesso e satisfação dos clientes
                </p>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => scrollTestimonials("prev")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-50"
                  aria-label="Voltar depoimentos"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-2"
                  >
                    <path d="m15 6-6 6 6 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTestimonials("next")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-50"
                  aria-label="Avançar depoimentos"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-2"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={testimonialsRef}
              onMouseEnter={() => setIsTestimonialsHovered(true)}
              onMouseLeave={() => setIsTestimonialsHovered(false)}
              className="hide-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pt-8 pb-4"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  data-testimonial-card
                  className="relative h-[320px] w-[82vw] max-w-[300px] flex-none snap-center overflow-visible rounded-3xl border border-black/5 bg-white px-6 pb-6 pt-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_16px_48px_rgba(233,30,99,0.14)] md:h-[300px] md:w-[320px] md:max-w-[320px] md:px-7 md:pb-7 md:pt-10"
                >
                  <div className="absolute left-6 top-0 z-10 h-14 w-14 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-pink-600 shadow-[0_4px_15px_rgba(233,30,99,0.35)]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex h-full flex-col">
                    <div className="mt-2">
                      <StarRow />
                    </div>

                    <p className="font-body relative flex-1 overflow-hidden pl-4 text-[14px] leading-7 text-slate-700 before:absolute before:-left-1 before:-top-3 before:text-5xl before:text-pink-600/20 before:content-['“'] md:text-[15px]">
                      {testimonial.text}
                    </p>

                    <div className="mt-5 border-t border-black/8 pt-4">
                      <strong className="block text-base font-semibold text-pink-600">
                        {testimonial.name}
                      </strong>
                      <span className="text-sm text-slate-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 to-pink-800 px-6 py-28 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Pronto para Transformar sua Situação?
            </h2>
            <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Nossa metodologia comprovada já ajudou milhões de brasileiros a
              alcançarem resultados excepcionais. Não perca mais tempo e comece sua
              jornada de sucesso hoje mesmo!
            </p>

            <button
              type="button"
              onClick={() =>
                openWhatsapp("Olá! Gostaria de consultar agora grátis.")
              }
              disabled={loading}
              className="mt-10 inline-flex rounded-lg bg-white px-8 py-4 text-lg font-semibold text-pink-600 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-pink-700 hover:text-white disabled:opacity-70"
            >
              {loading ? "Carregando..." : "Consultar Agora Grátis"}
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />

      {showCookieBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[1000] border-t-4 border-pink-600 bg-white p-5 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-start">
              <div className="mt-1 text-3xl text-pink-600">🍪</div>

              <div>
                <strong className="block text-lg font-semibold text-slate-900">
                  Utilizamos cookies
                </strong>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Este site utiliza cookies para garantir a melhor experiência
                  possível. Ao continuar navegando, você concorda com nossa{" "}
                  <a
                    href="/politica-privacidade"
                    className="font-medium text-pink-600 underline"
                  >
                    Política de Privacidade
                  </a>{" "}
                  e{" "}
                  <a
                    href="/termos-de-uso"
                    className="font-medium text-pink-600 underline"
                  >
                    Termos de Uso
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={rejectCookies}
                className="rounded-lg border-2 border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={acceptCookies}
                className="rounded-lg bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Aceitar todos os Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      <FloatingWhatsapp loading={loading} onWhatsappClick={openWhatsapp} />
    </>
  );
}