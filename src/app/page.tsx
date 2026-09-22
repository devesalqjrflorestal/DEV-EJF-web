import Image from "next/image";
import Link from "next/link";
import { Leaf, TreeDeciduous, FileText, BookOpen } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/Counter";
import homeData from "@/conteudo/home.json";
import { parseParceiros } from "@/lib/parseMd";

const montserrat = Montserrat({ subsets: ["latin"] });

const ICON_MAP = {
  TreeDeciduous,
  Leaf,
  FileText,
  BookOpen,
} as const;

type IconName = keyof typeof ICON_MAP;

export default function Home() {
  const { hero, solucoes, metricas, parceiros, orcamento } = homeData;
  const listaParceiros = parseParceiros();
  const todosLogos = [...listaParceiros, ...listaParceiros];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[500px] md:h-[714px] w-full flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat overflow-hidden py-20 md:py-0"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${hero.imagemFundo}')` }}
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
              {hero.titulo}
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
              {hero.subtitulo}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center px-4 md:justify-start md:px-[122px]">
          <Link
            href={hero.botao.href}
            className={cn(
              "whitespace-nowrap inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] sm:px-8 sm:text-[15px] md:px-10 md:py-4 md:text-[18px] font-semibold text-[#0b2e22] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-neutral-100 transition-all active:scale-95 uppercase tracking-wider",
              montserrat.className
            )}
          >
            {hero.botao.texto}
          </Link>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="flex w-full flex-wrap justify-center items-center content-center gap-8 self-stretch px-6 md:px-20 py-20 bg-[#1F4427]">
        {solucoes.map((service, idx) => {
          const IconComponent = ICON_MAP[service.icone as IconName];
          return (
            <div
              key={idx}
              className={cn(
                "group flex flex-col items-center w-[300px] h-[480px] rounded-[40px] overflow-hidden",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)]",
                "border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 shadow-2xl"
              )}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.imagem || "/banners/hero-bg.png"}
                  alt={service.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4427] to-transparent opacity-60" />
                <div
                  className="absolute bottom-4 left-6 p-2.5 rounded-xl border backdrop-blur-md bg-black/10"
                  style={{ borderColor: service.corDestaque, color: service.corDestaque }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1 p-6 pt-2">
                <h3 className={cn(
                  "self-stretch text-center text-white text-[20px] font-bold uppercase leading-tight tracking-wide",
                  montserrat.className
                )}>
                  {service.titulo}
                </h3>
                <p className={cn(
                  "text-center text-white/70 text-[15px] font-normal leading-relaxed overflow-hidden",
                  montserrat.className
                )}>
                  {service.descricao}
                </p>
                <Link
                  href={service.href}
                  className={cn(
                    "mt-auto mx-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border text-white text-xs font-bold transition-all hover:bg-white/10 uppercase tracking-widest",
                    montserrat.className
                  )}
                  style={{ borderColor: service.corDestaque }}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why Choose Us Section */}
      <section className="flex w-full flex-col items-center gap-12 md:gap-[73px] self-stretch px-6 md:px-[105px] py-12 md:py-[65px] bg-[#1F4427]">
        <h2
          className={cn(
            "self-stretch text-center text-[#8CC5A2] text-[28px] font-extrabold uppercase leading-normal tracking-[1.12px]",
            montserrat.className
          )}
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {metricas.titulo}
        </h2>

        <div className="flex flex-wrap justify-center items-start gap-12 md:gap-[100px] self-stretch">
          {metricas.numeros.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <Counter
                end={metric.valor}
                decimals={metric.decimais}
                suffix="+"
                className="text-white text-[100px] font-bold leading-none"
              />
              <p className={cn(
                "text-[#E9E9E9] text-[18px] font-medium uppercase tracking-wider whitespace-pre-line",
                montserrat.className
              )}>
                {metric.descricao}
              </p>
            </div>
          ))}
        </div>

        <p className={cn(
          "max-w-4xl text-center text-white text-[18px] font-normal leading-relaxed tracking-[0.72px] opacity-90",
          montserrat.className
        )}>
          {metricas.texto}
        </p>
      </section>

      {/* Partners Section */}
      <section className="flex w-full flex-col items-center gap-[10px] self-stretch px-6 md:px-[57px] py-[60px] bg-[#1F4427]">
        <h2
          className={cn(
            "self-stretch text-center text-white text-[28px] font-extrabold uppercase leading-normal tracking-[1.12px]",
            montserrat.className
          )}
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {parceiros.titulo}
        </h2>

        <div className="relative w-full overflow-hidden h-40 md:h-56 flex items-center">
          <div className="flex w-max items-center gap-16 md:gap-32 animate-infinite-scroll">
            {todosLogos.map((parceiro, idx) => (
              <div
                key={idx}
                className="flex h-32 w-48 shrink-0 items-center justify-center transition-all duration-500 hover:scale-110"
              >
                <Image
                  src={`/logos/${parceiro.logo}`}
                  alt={parceiro.nome}
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
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('${orcamento.imagemFundo}')` }}
      >
        <div className="flex flex-col items-center gap-4">
          <h2
            className={cn(
              "text-white text-[clamp(20px,3vw,32px)] font-extrabold uppercase tracking-widest leading-tight md:whitespace-nowrap",
              montserrat.className
            )}
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
          >
            {orcamento.titulo}
          </h2>
          <p
            className={cn(
              "text-white text-[clamp(14px,2vw,18px)] uppercase tracking-wide leading-tight md:whitespace-nowrap",
              montserrat.className
            )}
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
          >
            {orcamento.subtitulo}
          </p>
        </div>

        <Link
          href={orcamento.botao.href}
          className={cn(
            "flex w-fit mx-auto py-3 px-8 justify-center items-center gap-2 rounded-full border-2 border-[#2B0F70] bg-transparent hover:bg-[#2B0F70]/10 transition-all group",
            montserrat.className
          )}
        >
          <span className="text-white text-[18px] md:text-[24px] font-bold uppercase transition-transform whitespace-nowrap">
            {orcamento.botao.texto}
          </span>
        </Link>
      </section>
    </main>
  );
}