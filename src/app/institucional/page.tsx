"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { MVVSection } from "@/components/MVVSection";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function InstitucionalPage() {
  const membros = [
    { name: "JOSÉ RENATO SCHMIDT DE CARVALHO", role: "DIRETOR PRESIDENTE", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/jose-renato-presidente.png" },
    { name: "ANA GABRIELA VOLPATO", role: "DIRETORA DE MARKETING", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/ana-gabriela-direx-marketing.png" },
    { name: "ENZO NOGUEIRA DE TOLEDO", role: "DIRETOR COMERCIAL", course: "ENGENHARIA AGRONÔMICA", image: "/institucional/membros/enzo-nogueira-direx-comercial.png" },
    { name: "VITÓRIA ROSSI GALDINO DA SILVA", role: "ASSESSORA DE RH E CONSELHEIRA", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/vitoria-rossi-assessora-rh-conselho.png" },
    { name: "PEDRO HENRIQUE DOS SANTOS NEVES", role: "ASSESSOR COMERCIAL", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/pedro-neves-assessor-comercial.png" },
    { name: "CLARA SANTOS KROLL", role: "ASSESSORA DE MARKETING", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/clara-kroll-assessora-marketing.png" },
    { name: "PEDRO DE ALMEIDA RIBEIRO", role: "ASSESSOR JURÍDICO-FINANCEIRO", course: "ENGENHARIA FLORESTAL", image: "/institucional/membros/pedro-almeida-assessor-juridico-financeiro.png" },
    { name: "FELIPE MODOLO NUNES", role: "ASSESSOR JURÍDICO-FINANCEIRO", course: "ENGENHARIA AGRONÔMICA", image: "/institucional/membros/felipe-modolo-assessor-juridico-financeiro.png" },
  ];

  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ITEM_WIDTH = 260;
  const GAP = 55;
  const STEP = ITEM_WIDTH + GAP;

  useEffect(() => {
    const updateWidths = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
        setTrackWidth(carouselRef.current.scrollWidth);
      }
    };

    updateWidths();
    const timer = setTimeout(updateWidths, 500);

    const handleResize = () => updateWidths();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const scrollTo = async (index: number) => {
    setActiveIndex(index);
    const maxScroll = Math.max(0, trackWidth - containerWidth);
    const targetX = -index * STEP;
    const finalX = Math.max(-maxScroll, targetX);

    await controls.start({
      x: finalX,
      // Suavizei levemente o spring para não dar um tranco tão rígido ao finalizar o scroll
      transition: { type: "spring", stiffness: 250, damping: 30, mass: 1 }
    });
  };

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    // 1. Calculamos o movimento projetado (o que ele já arrastou + inércia do movimento)
    // Multiplicamos a velocidade por 0.2 (constante de atrito) para prever onde o mouse "pararia"
    const projectedMovement = info.offset.x + info.velocity.x * 0.2;

    // 2. Vemos quantos "itens" (STEPs) esse movimento representa
    const moveSteps = Math.round(projectedMovement / STEP);

    // 3. Calculamos o novo índice permitindo pular múltiplos itens de uma vez
    // (Subtraímos moveSteps porque um arrasto para a esquerda é negativo, mas avança o index)
    let newIndex = activeIndex - moveSteps;

    // 4. Garantimos que não saia dos limites do array
    newIndex = Math.max(0, Math.min(newIndex, membros.length - 1));

    scrollTo(newIndex);
  };

  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Institutional "Quem Somos" Section */}
      <section className="px-6 py-12 md:px-20 lg:px-[120px] pt-24">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-12"
          style={{ gridTemplateRows: "repeat(2, auto)" }}
        >
          <div className="flex flex-col justify-center items-start gap-6">
            <h2 className={cn("text-white font-medium uppercase tracking-widest opacity-80", montserrat.className)} style={{ fontSize: "20px" }}>
              QUEM SOMOS?
            </h2>
            <p className={cn("text-[#8CC5A2] font-normal leading-tight", montserrat.className)} style={{ fontSize: "32px" }}>
              Especialistas em projetos florestais, consultoria e monitoramento arbóreo:
            </p>
          </div>

          <div className="relative h-[250px] lg:h-[300px] rounded-[24px] overflow-hidden shadow-xl border border-white/5">
            <Image src="/institucional/esalq-institucional-att.png" alt="USP Campus" fill className="object-cover opacity-80" />
            <div className="object-cover" />
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <p className={cn("text-white leading-relaxed text-left", montserrat.className)} style={{ fontSize: "16px" }}>
              Fundada em 23 de outubro de 1991, a <strong className="font-extrabold">ESALQ Júnior Florestal </strong>é formada por estudantes de graduação da Escola Superior de Agricultura &quot;Luiz de Queiroz&quot; (ESALQ), campus da USP localizado em Piracicaba - SP, sob orientação do Professor Doutor Silvio Frosini de Barros Ferraz.
            </p>
            <p className={cn("text-white font-semibold leading-relaxed text-left opacity-90", montserrat.className)} style={{ fontSize: "16px" }}>
              Atuamos na área florestal, impactando o mercado, trazendo as melhores soluções aos nossos clientes através de projetos realizados e concluídos com excelência, além de capacitar nossos membros preparando-os para o mercado de trabalho.
            </p>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-xl border border-white/10">
            <Image
              src="/institucional/time-esalq-att.png"
              alt="NOSSO TIME"
              width={1200}
              height={800}
              className="w-full h-[250px] lg:h-[300px] object-cover" />
          </div>
        </div>
      </section>

      <MVVSection />

      {/* Team Carousel Section */}
      <section className="flex flex-col items-center gap-10 self-stretch px-6 py-16 bg-[#1F4427] border-t border-white/10 overflow-hidden">
        <h2 className={cn("text-center text-white font-extrabold uppercase tracking-wider", montserrat.className)} style={{ fontSize: "28px" }}>
          Conheça o nosso time
        </h2>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-start overflow-hidden" ref={carouselRef}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -Math.max(0, trackWidth - containerWidth) }}
            animate={controls}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={handleDragEnd}
            dragElastic={0.15}
            className="flex gap-[55px] py-4 px-4 w-max cursor-grab"
          >
            {membros.map((membro, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group flex-none w-[260px]">
                <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden shrink-0 pointer-events-none border-2 border-white/10">
                  <Image src={membro.image} alt={membro.name} fill className="object-cover" />
                </div>
                <h3 className={cn("text-center text-white font-black uppercase mt-4", montserrat.className)} style={{ fontSize: "18px" }}>
                  {membro.name}
                </h3>
                <p className={cn("text-center text-[#8CC5A2] font-extrabold uppercase", montserrat.className)} style={{ fontSize: "16px" }}>
                  {membro.role}
                </p>
                <p className={cn("text-center text-white/70 font-semibold uppercase", montserrat.className)} style={{ fontSize: "14px" }}>
                  {membro.course}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-8 w-full">
            {membros.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  activeIndex === idx ? "bg-[#8CC5A2] w-8" : "bg-white/20 w-3 hover:bg-white/40"
                )}
                aria-label={`Ver membro ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}