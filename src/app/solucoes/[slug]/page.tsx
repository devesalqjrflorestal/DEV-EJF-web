import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, CheckCircle2, ChevronDown } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const solutionsData: Record<string, any> = {
  legislacao: {
    title: "LEGISLAÇÃO AMBIENTAL",
    heroTitle: "SERVIÇOS",
    description: "A ESALQ Júnior Florestal atua na regularização ambiental por meio do CAR e PRADA, auxiliando proprietários rurais na adequação à legislação. Com análises técnicas e planejamento estratégico, garantimos segurança jurídica, identificação de passivos ambientais e definição de soluções para recuperação e uso sustentável da área.",
    color: "#F1DD8C",
    mainImage: "/legislacao_forest_aerial_1774739802682.png",
    services: [
      { name: "Cadastro Ambiental Rural (CAR)", image: "/solucoes/legislacao/cadastro-ambiental-rural-car.jpg" },
      { name: "Planos de Restauração (PRAD)", image: "/solucoes/legislacao/planos-de-restauracao-prad.jpg" },
      { name: "Licenciamento de Supressão", image: "/solucoes/legislacao/licenciamento-de-supressao.jpg" },
      { name: "Regularização de Reserva Legal", image: "/solucoes/legislacao/regularizacao-de-reserva-legal.jpg" }
    ]
  },
  manejo: {
    title: "MANEJO FLORESTAL",
    heroTitle: "SERVIÇOS",
    description: "A ESALQ Júnior Florestal oferece serviços voltados ao manejo florestal, como inventário, monitoramento arbóreo e paisagismo. A partir de análises técnicas, fornecemos dados e orientações para planejamento, conservação e valorização de áreas, garantindo funcionalidade, segurança e sustentabilidade ambiental.",
    color: "#8CC5A2",
    mainImage: "/manejo_hands_moss_1774739816081.png",
    services: [
      { name: "Inventário Florestal", image: "/solucoes/manejo/inventario-florestal.jpg" },
      { name: "Monitoramento Arbóreo", image: "/solucoes/manejo/monitoramento-arboreo.jpg" },
      { name: "Projetos de Paisagismo", image: "/solucoes/manejo/projeto-de-paisagismo.jpg" },
      { name: "Recomendação de Espécies para Plantio", image: "/solucoes/manejo/recomendacao-de-especies-para-plantio.jpg"}
    ]
  },
  consultoria: {
    title: "CONSULTORIA FLORESTAL",
    heroTitle: "ESTRATÉGIA",
    description: "A consultoria da ESALQ Júnior Florestal auxilia empresas e instituições na tomada de decisões estratégicas. Por meio de pesquisas de mercado e relatórios de sustentabilidade, entregamos análises completas que identificam oportunidades, riscos e caminhos para um crescimento sustentável.",
    color: "#8CC5A2",
    mainImage: "/consultoria_wood_biomass_1774739827206.png",
    services: [
      { name: "Relatórios ESG e Sustentabilidade", image: "/solucoes/consultoria/relatorios-esg-e-sustentabilidade.jpg" },
      { name: "Diagnóstico de Áreas Degradadas", image: "/solucoes/consultoria/diagnostico-de-areas-degradadas.jpg" },
      { name: "Pesquisa de Mercado Florestal", image: "/solucoes/consultoria/pesquisa-de-mercado-florestal.jpg" }
    ]
  },
  ensino: {
    title: "ENSINO",
    heroTitle: "CONHECIMENTO",
    description: "Acreditamos na educação como o principal motor da preservação. O pilar de ensino da ESALQ Júnior Florestal democratiza o conhecimento técnico de ponta através de metodologias ativas, capacitações e workshops que conectam as pessoas à natureza e às melhores práticas do setor.",
    color: "#1C8F42",
    mainImage: "/ensino_forest_workshop_1774739838112_1774745221977.png",
    services: [
      { name: "Educação Ambiental", image: "/solucoes/ensino/educacao-ambiental.jpg" },
      { name: "Capacitação Técnica", image: "/solucoes/ensino/capacitacao-tecnica.jpg" },
      { name: "Palestras do Setor", image: "/solucoes/ensino/palestras-do-setor.jpg" },
      { name: "Workshops Práticos", image: "/solucoes/ensino/workshops-praticos.jpg" }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutionsData[slug];

  if (!data) {
    notFound();
  }

  const accentColor = data.color;

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

          {/* Main Context with Left/Right Division */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className={cn(
                "text-white text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-none tracking-tight",
                montserrat.className
              )}>
                {data.title}
              </h2>
              <div className="h-2 w-24 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
            <div className="lg:col-span-7">
              <p className={cn(
                "text-white/80 text-[18px] md:text-[22px] leading-relaxed font-normal p-8 md:p-12 rounded-[40px] bg-white/[0.03] backdrop-blur-md border border-white/5 shadow-2xl",
                montserrat.className
              )}>
                {data.description}
              </p>
            </div>
          </div>

          {/* Sub-Services Grid ("Better Division") */}
          <div className="flex flex-col gap-12">
            <h3 className={cn("text-white text-2xl font-bold uppercase tracking-[2px] flex items-center gap-4", montserrat.className)}>
              O QUE OFERECEMOS <div className="flex-grow h-[1px] bg-white/10" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-wrap lg:justify-center">
              {data.services.map((service: any, idx: number) => (
                <div
                  key={idx}
                  className="group relative flex flex-col gap-6 p-6 rounded-[35px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden lg:w-[calc(25%-24px)] lg:min-w-[220px] lg:max-w-[300px]"
                >
                  <div className="relative h-48 w-full rounded-[25px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h4 className={cn("text-white text-lg font-bold leading-snug group-hover:text-emerald-300 transition-colors text-center", montserrat.className)}>
                    {service.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed Division */}
      <section className="relative z-10 px-6 py-28 md:px-[105px] border-t border-white/10 bg-black/20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8CC5A2]/30 to-transparent" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center pointer-events-auto">
          <h2 className={cn(
            "text-white text-[clamp(28px,5vw,56px)] font-black uppercase leading-tight tracking-tight",
            montserrat.className
          )}>
            Ficou interessado? <br />
            <span className="text-[#8CC5A2]">Construa seu futuro conosco.</span>
          </h2>
          <Link
            href="/contato"
            className={cn(
              "flex w-fit py-5 px-14 justify-center items-center gap-3 rounded-full bg-[#8CC5A2] text-[#0b1c0f] font-black uppercase tracking-widest hover:scale-105 transition-all",
              montserrat.className
            )}
          >
            SOLICITAR ORÇAMENTO
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
