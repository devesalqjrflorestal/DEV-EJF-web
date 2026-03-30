import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Target, Newspaper, TreeDeciduous, FileText, BookOpen } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/Counter";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[500px] md:h-[714px] w-full flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat overflow-hidden py-20 md:py-0"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/banners/hero-bg.png')" }}
      >
        <div className="relative z-10 w-full px-6 md:px-[122px] text-center md:text-left">
          <div className="max-w-none">
            <h1
              className={cn(
                "text-white font-bold [font-variant:all-small-caps] tracking-[0.04em] md:tracking-[3.2px] leading-[1.1] mb-6",
                montserrat.className
              )}
              style={{
                fontSize: "clamp(40px, 10vw, 84px)",
                textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
              }}
            >
              ESALQ Júnior <br className="hidden md:block" />
              Florestal
            </h1>
            <p
              className={cn(
                "text-white font-medium tracking-wide md:tracking-[1.12px] max-w-3xl mx-auto md:mx-0 mb-10 opacity-90",
                montserrat.className
              )}
              style={{
                fontSize: "clamp(18px, 4vw, 24px)",
                textShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)"
              }}
            >
              Desde 1991 impactando o setor com soluções florestais de qualidade.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center px-4 md:justify-start md:px-[122px]">
          <Link
            href="/solucoes"
            className={cn(
              "whitespace-nowrap inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] sm:px-8 sm:text-[15px] md:px-10 md:py-4 md:text-[18px] font-semibold text-[#0b2e22] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-neutral-100 transition-all active:scale-95 uppercase tracking-wider",
              montserrat.className
            )}
          >
            Conheça nossos serviços
          </Link>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        className="flex w-full flex-wrap justify-center items-center content-center gap-8 self-stretch px-6 md:px-20 py-20 bg-[#1F4427]"
      >
        {[
          {
            title: "LEGISLAÇÃO",
            desc: "Regularização e adequação ambiental por meio de serviços como CAR e PRADA, garantindo conformidade com a legislação vigente.",
            href: "/solucoes/legislacao",
            borderColor: "#F1DD8C",
            icon: TreeDeciduous,
            image: "/solucoes/legislacao.jpg"
          },
          {
            title: "MANEJO FLORESTAL",
            desc: "Soluções técnicas para gestão e manejo florestal, incluindo monitoramento arbóreo, inventário florestal e projetos de paisagismo.",
            href: "/solucoes/manejo",
            borderColor: "#8CC5A2",
            icon: Leaf,
            image: "/solucoes/manejo.jpg"
          },
          {
            title: "CONSULTORIA",
            desc: "Análises e diagnósticos estratégicos, com foco em relatórios de sustentabilidade e pesquisas de mercado no setor ambiental e florestal.",
            href: "/solucoes/consultoria",
            borderColor: "#8CC5A2",
            icon: FileText,
            image: "/solucoes/consultoria.jpg"
          },
          {
            title: "ENSINO",
            desc: "Desenvolvimento de ações educativas e projetos de educação ambiental, promovendo conscientização e formação socioambiental.",
            href: "/solucoes/ensino",
            borderColor: "#1C8F42",
            icon: BookOpen,
            image: "/solucoes/ensino.jpeg"
          }
        ].map((service, idx) => {
          const IconComponent = service.icon;

          return (
            <div
              key={idx}
              className={cn(
                "group flex flex-col items-center w-[300px] h-[480px] rounded-[40px] overflow-hidden",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)]",
                "border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 shadow-2xl"
              )}
            >
              {/* Header Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image || "/banners/hero-bg.png"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4427] to-transparent opacity-60" />

                {/* Icon Overlay */}
                <div
                  className="absolute bottom-4 left-6 p-2.5 rounded-xl border backdrop-blur-md bg-black/10"
                  style={{ borderColor: service.borderColor, color: service.borderColor }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col items-center gap-4 flex-1 p-6 pt-2">
                <h3 className={cn(
                  "self-stretch text-center text-white text-[20px] font-bold uppercase leading-tight tracking-wide",
                  montserrat.className
                )}>
                  {service.title}
                </h3>

                <p className={cn(
                  "text-center text-white/70 text-[15px] font-normal leading-relaxed overflow-hidden",
                  montserrat.className
                )}>
                  {service.desc}
                </p>

                <Link
                  href={service.href}
                  className={cn(
                    "mt-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border text-white text-xs font-bold transition-all hover:bg-white/10 uppercase tracking-widest",
                    montserrat.className
                  )}
                  style={{ borderColor: service.borderColor }}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why Choose Us Section */}
      <section
        className="flex w-full flex-col items-center gap-12 md:gap-[73px] self-stretch px-6 md:px-[105px] py-12 md:py-[65px] bg-[#1F4427]"
      >
        <h2 className={cn(
          "self-stretch text-center text-[#8CC5A2] text-[28px] font-extrabold uppercase leading-normal tracking-[1.12px]",
          montserrat.className
        )}
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
          Por que escolher a Esalq Junior Florestal?
        </h2>

        {/* Metrics Widget */}
        <div className="flex flex-wrap justify-center items-start gap-12 md:gap-[100px] self-stretch">
          {[
            { value: 35, desc: "ANOS NO\nMERCADO", decimals: 0 },
            { value: 15, desc: "PRÊMIOS NO\nMEJ", decimals: 0 },
            { value: 4.9, desc: "DE MÉDIA DE\nCSAT", decimals: 1 }
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <Counter
                end={metric.value}
                decimals={metric.decimals}
                suffix="+"
                className="text-white text-[100px] font-bold leading-none"
              />
              <p className={cn(
                "text-[#E9E9E9] text-[18px] font-medium uppercase tracking-wider whitespace-pre-line",
                montserrat.className
              )}>
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        <p className={cn(
          "max-w-4xl text-center text-white text-[18px] font-normal leading-relaxed tracking-[0.72px] opacity-90",
          montserrat.className
        )}>
          A ESALQ Junior Florestal construiu sua trajetória ao longo de diversos anos de atuação no Movimento Empresa Júnior, acumulando aprendizados e amadurecimento a cada projeto realizado. Esse caminho foi reconhecido dentro do MEJ por meio de premiações que refletem protagonismo, responsabilidade e excelência na execução. Tudo isso se sustenta em um compromisso constante com quem confia no nosso trabalho, traduzido em relações transparentes e em um alto nível de satisfação dos clientes ao final de cada entrega.
        </p>
      </section>
      {/* Partners Section */}
      <section
        className="flex w-full flex-col items-center gap-[10px] self-stretch px-6 md:px-[57px] py-[60px] bg-[#1F4427]"
      >
        <h2 className={cn(
          "self-stretch text-center text-white text-[28px] font-extrabold uppercase leading-normal tracking-[1.12px]",
          montserrat.className
        )}
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
          Quem confia no nosso trabalho
        </h2>

        {/* Partners Carousel (Infinite Scroll) */}
        <div className="relative w-full overflow-hidden h-40 md:h-56 flex items-center">
          <div className="flex w-fit items-center gap-16 md:gap-32 animate-infinite-scroll pl-[252px]">
            {[
              "/logos/logo-fejesp.png", "/logos/logo-esalq.png", "/logos/logo-nucleo-campinas.png", "/logos/logo-brasil-junior.png", "/logos/logo-usp.png",
              "/logos/logo-fejesp.png", "/logos/logo-esalq.png", "/logos/logo-nucleo-campinas.png", "/logos/logo-brasil-junior.png", "/logos/logo-usp.png" // Duplicated
            ].map((logo, idx) => (
              <div
                key={idx}
                className="flex h-32 w-48 shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Parceiro ${idx}`}
                  width={200}
                  height={100}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Budget Section */}
      <section
        className="relative flex min-h-[500px] w-full flex-col justify-center items-center gap-12 self-stretch px-6 md:px-20 lg:px-[200px] bg-cover bg-center bg-no-repeat overflow-hidden text-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/banners/orcamento-bg.png')" }}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className={cn(
            "text-white text-[clamp(20px,3vw,32px)] font-extrabold uppercase tracking-widest leading-tight md:whitespace-nowrap",
            montserrat.className
          )}
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
            🚀 Seu projeto não pode esperar!
          </h2>

          <p className={cn(
            "text-white text-[clamp(14px,2vw,18px)] uppercase tracking-wide leading-tight md:whitespace-nowrap",
            montserrat.className
          )}
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
            <span className="font-semibold">Vamos construir a melhor solução para o </span>
            <span className={cn("inline-block", montserrat.className)} style={{ fontWeight: 800 }}>seu</span>
            <span> </span>
            <span className={cn("inline-block", montserrat.className)} style={{ fontWeight: 700 }}>caso.</span>
          </p>
        </div>

        <Link
          href="/contato"
          className={cn(
            "flex w-fit mx-auto py-3 px-8 justify-center items-center gap-2 rounded-full border-2 border-[#2B0F70] bg-transparent hover:bg-[#2B0F70]/10 transition-all group",
            montserrat.className
          )}
        >
          <span className="text-white text-[18px] md:text-[24px] font-bold uppercase transition-transform whitespace-nowrap">
            QUERO UM ORÇAMENTO
          </span>
        </Link>
      </section>
    </main>
  );
}
