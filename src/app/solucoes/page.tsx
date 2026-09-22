"use client";

import Image from "next/image";
import Link from "next/link";
import { TreeDeciduous, Leaf, FileText, BookOpen, Download, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import solucoesData from "@/conteudo/solucoes.json";

const montserrat = Montserrat({ subsets: ["latin"] });

const ICON_MAP = {
  TreeDeciduous,
  Leaf,
  FileText,
  BookOpen,
} as const;

type IconName = keyof typeof ICON_MAP;

export default function SolucoesPage() {
  const { hero, catalogo, portfolio, cta } = solucoesData;

  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[500px] w-full flex-col justify-center items-center overflow-hidden">
        <Image
          src={hero.imagem}
          alt="Banner Soluções"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-black/40" />

        <div className="relative z-10 text-center px-6">
          <h1
            className={cn(
              "text-white font-black [font-variant:all-small-caps] tracking-[0.04em] md:tracking-[3.2px] leading-[1.1]",
              montserrat.className
            )}
            style={{
              fontSize: "clamp(40px, 10vw, 84px)",
              textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
            }}
          >
            {hero.titulo}
          </h1>
          <p className={cn(
            "text-[#F1DD8C] text-[18px] md:text-[22px] font-medium uppercase tracking-[4.8px] mt-4",
            montserrat.className
          )}>
            {hero.subtitulo}
          </p>
        </div>
      </section>

      {/* Solutions Catalog */}
      <section className="px-6 py-24 md:px-[60px] lg:px-[120px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {catalogo.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icone as IconName];
            return (
              <div
                key={idx}
                className={cn(
                  "group relative flex flex-col gap-0 rounded-[45px] transition-all duration-500 bg-white/[0.02] border border-white/5 overflow-hidden",
                  "shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                )}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4427] via-[#1F4427]/40 to-transparent" />
                  <div
                    className="absolute bottom-6 left-10 p-4 rounded-2xl border-2 backdrop-blur-md bg-black/20"
                    style={{ borderColor: item.corDestaque, color: item.corDestaque }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                <div className="flex flex-col gap-8 p-10 pt-4">
                  <h2 className={cn("text-white text-3xl lg:text-4xl font-black uppercase tracking-tight", montserrat.className)}>
                    {item.titulo}
                  </h2>
                  <p className={cn("text-white/80 text-[18px] leading-relaxed", montserrat.className)}>
                    {item.descricao}
                  </p>

                  <div className="flex flex-col gap-5 py-8 border-y border-white/10">
                    <span className={cn("text-[#8CC5A2] text-xs font-bold uppercase tracking-[3px]", montserrat.className)}>Serviços de Excelência</span>
                    <ul className="grid grid-cols-1 gap-4">
                      {item.servicos.map((servico, sIdx) => (
                        <li key={sIdx} className={cn("flex items-center gap-4 text-white/90 text-md font-medium", montserrat.className)}>
                          <div className="h-2 w-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{ backgroundColor: item.corDestaque }} />
                          {servico}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between group/btn text-white font-black uppercase tracking-[2px] py-5 px-8 rounded-2xl border-2 border-white/10 hover:bg-white/5 transition-all text-sm mt-2",
                      montserrat.className
                    )}
                  >
                    Ver Detalhes do Serviço
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" style={{ color: item.corDestaque }} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Download Section */}
      <section className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={cn("text-white text-3xl font-bold uppercase", montserrat.className)}>
              {portfolio.titulo}
            </h2>
            <p className={cn("text-white/70 text-lg", montserrat.className)}>
              {portfolio.descricao}
            </p>
          </div>
          <a
            href={portfolio.botao.arquivo}
            download={portfolio.botao.nomeDownload}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-4 bg-[#F1DD8C] text-[#1F4427] font-extrabold py-5 px-10 rounded-full active:scale-95 transition-all uppercase tracking-widest whitespace-nowrap",
              montserrat.className
            )}
          >
            {portfolio.botao.texto}
            <Download className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-28 flex flex-col items-center gap-12 text-center border-t border-white/5 bg-black/20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8CC5A2]/30 to-transparent shadow-[0_0_20px_rgba(140,197,162,0.1)]" />
        <h2 className={cn("text-white text-[clamp(24px,4vw,48px)] font-extrabold uppercase leading-tight max-w-4xl", montserrat.className)}>
          {cta.titulo}
        </h2>
        <Link
          href={cta.botao.href}
          className={cn(
            "flex w-fit py-5 px-14 justify-center items-center gap-2 rounded-full border-2 border-[#8CC5A2] bg-transparent hover:bg-[#8CC5A2]/10 transition-all group",
            montserrat.className
          )}
        >
          <span className="text-white text-[20px] md:text-[24px] font-bold uppercase">
            {cta.botao.texto}
          </span>
          <ArrowRight className="h-6 w-6 text-[#8CC5A2] transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </main>
  );
}
