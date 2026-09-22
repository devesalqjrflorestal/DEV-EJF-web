import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import solucoesDetalheData from "@/conteudo/solucoes-detalhe.json";

const montserrat = Montserrat({ subsets: ["latin"] });

type SlugEntry = {
  titulo: string;
  descricao: string;
  corDestaque: string;
  imagemPrincipal: string;
  servicos: { nome: string; imagem: string }[];
};

export function generateStaticParams() {
  return Object.keys(solucoesDetalheData.slugs).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const slugs = solucoesDetalheData.slugs as Record<string, SlugEntry | undefined>;
  const data = slugs[slug];
  const cta = solucoesDetalheData.cta;

  if (!data) {
    notFound();
  }

  const accentColor = data.corDestaque;

  return (
    <main className={cn(
      "flex flex-col min-h-screen relative overflow-hidden",
      "bg-[radial-gradient(circle_at_top,_#1F4427_0%,_#0b1c0f_100%)]"
    )}>
      {/* Ambient Glows */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] blur-[120px] rounded-full pointer-events-none transition-all duration-1000 opacity-30"
        style={{ backgroundColor: `${accentColor}33` }}
      />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Detail Content Section */}
      <section className="relative z-10 px-6 py-24 md:px-[60px] lg:px-[120px]">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className={cn(
                "text-white text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-none tracking-tight",
                montserrat.className
              )}>
                {data.titulo}
              </h2>
              <div className="h-2 w-24 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
            <div className="lg:col-span-7">
              <p className={cn(
                "text-white/80 text-[18px] md:text-[22px] leading-relaxed font-normal p-8 md:p-12 rounded-[40px] bg-white/[0.03] backdrop-blur-md border border-white/5 shadow-2xl",
                montserrat.className
              )}>
                {data.descricao}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <h3 className={cn("text-white text-2xl font-bold uppercase tracking-[2px] flex items-center gap-4", montserrat.className)}>
              O QUE OFERECEMOS <div className="flex-grow h-[1px] bg-white/10" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-wrap lg:justify-center">
              {data.servicos.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col gap-6 p-6 rounded-[35px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden lg:w-[calc(25%-24px)] lg:min-w-[220px] lg:max-w-[300px]"
                >
                  <div className="relative h-48 w-full rounded-[25px] overflow-hidden">
                    <img
                      src={service.imagem}
                      alt={service.nome}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h4 className={cn("text-white text-lg font-bold leading-snug group-hover:text-emerald-300 transition-colors text-center", montserrat.className)}>
                    {service.nome}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-28 md:px-[105px] border-t border-white/10 bg-black/20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8CC5A2]/30 to-transparent" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center pointer-events-auto">
          <h2 className={cn(
            "text-white text-[clamp(28px,5vw,56px)] font-black uppercase leading-tight tracking-tight",
            montserrat.className
          )}>
            {cta.titulo} <br />
            <span className="text-[#8CC5A2]">{cta.subtitulo}</span>
          </h2>
          <Link
            href={cta.botao.href}
            className={cn(
              "flex w-fit py-5 px-14 justify-center items-center gap-3 rounded-full bg-[#8CC5A2] text-[#0b1c0f] font-black uppercase tracking-widest hover:scale-105 transition-all",
              montserrat.className
            )}
          >
            {cta.botao.texto}
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="relative z-10 px-6 py-12 md:px-[105px] border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/solucoes" className="flex items-center gap-3 text-white/50 hover:text-white transition-all group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
            <span className={cn("font-bold uppercase tracking-widest text-[11px]", montserrat.className)}>Ver Outras Soluções</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
