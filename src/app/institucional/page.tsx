"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function InstitucionalPage() {
  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Institutional "Quem Somos" Section */}
      <section className="px-6 py-12 md:px-20 lg:px-[120px] pt-24">
        <div 
          className="max-w-7xl mx-auto grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-12"
          style={{ gridTemplateRows: "repeat(2, auto)" }}
        >
          {/* Block 1: Who We Are Title & High-impact Message */}
          <div className="flex flex-col justify-center items-start gap-6">
            <h2 
              className={cn("text-white font-medium uppercase tracking-widest opacity-80", montserrat.className)}
              style={{ fontSize: "20px", alignSelf: "stretch" }}
            >
              QUEM SOMOS?
            </h2>
            <p 
              className={cn("text-[#8CC5A2] font-normal leading-tight", montserrat.className)}
              style={{ fontSize: "32px", alignSelf: "stretch" }}
            >
              Especialistas em projetos florestais, consultoria e monitoramento arboreo:
            </p>
          </div>

          {/* Block 2: USP Image Container */}
          <div className="relative h-[250px] lg:h-[300px] rounded-[24px] overflow-hidden shadow-xl border border-white/5">
            <Image 
              src="/usp-institucional.jpg" 
              alt="USP Campus"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4427] to-transparent opacity-40" />
          </div>

          {/* Block 3: History and Mission Text */}
          <div className="flex flex-col justify-start items-start gap-4">
            <p 
              className={cn("text-white leading-relaxed text-left", montserrat.className)}
              style={{ fontSize: "16px" }}
            >
              Fundada em 23 de outubro de 1991, a <strong className="font-extrabold text-[#8CC5A2]">ESALQ Júnior Florestal</strong> é formada por estudantes de graduação da Escola Superior de Agricultura \"Luiz de Queiroz\" (ESALQ), campus da USP localizado em Piracicaba - SP, sob orientação do Professor Doutor Silvio Frosini de Barros Ferraz.
            </p>
            <p 
              className={cn("text-white font-semibold leading-relaxed text-left opacity-90", montserrat.className)}
              style={{ fontSize: "16px" }}
            >
              Atuamos na área florestal, impactando o mercado, trazendo as melhores soluções aos nossos clientes através de projetos realizados e concluídos com excelência, além de capacitar nossos membros preparando-os para o mercado de trabalho, através do acesso ao ambiente empresarial e meio técnico prático.
            </p>
          </div>

          {/* Block 4: Team Photo Container */}
          <div className="relative h-[250px] lg:h-[300px] rounded-[24px] overflow-hidden shadow-xl border border-white/10">
            <Image 
              src="/time-esalq.png" 
              alt="NOSSO TIME"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MVV 3x3 Grid Section */}
      <section className="px-6 py-16 md:px-20 lg:px-[120px] bg-[#1F4427] border-t border-white/5">
        <div 
          className="max-w-7xl mx-auto grid grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-10 lg:gap-y-16 text-center"
          style={{ gridTemplateRows: "repeat(3, auto)" }}
        >
          {/* Row 1, Col 1: Empty */}
          <div />

          {/* Row 1, Col 2: VISÃO (Block 2) */}
          <div className="flex flex-col items-center gap-3">
            <h3 
              className={cn("text-white font-bold uppercase tracking-wider", montserrat.className)}
              style={{ fontSize: "24px", alignSelf: "stretch" }}
            >
              VISÃO
            </h3>
            <p 
              className={cn("text-white font-medium opacity-90", montserrat.className)}
              style={{ fontSize: "18px", alignSelf: "stretch" }}
            >
              Ser reconhecida como uma empresa de referência no setor florestal.
            </p>
          </div>

          {/* Row 1, Col 3: Empty */}
          <div />

          {/* Row 2, Col 1: Empty */}
          <div />

          {/* Row 2, Col 2: Image (Block 5) */}
          <div className="flex justify-center items-center">
            <div 
              style={{ 
                width: "100%",
                maxWidth: "180px",
                aspectRatio: "62/61",
                transform: "rotate(5.012deg)",
                position: "relative"
              }}
            >
              <Image 
                src="/rosa-dos-ventos.svg" 
                alt="Compass Rose Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 2, Col 3: Empty */}
          <div />

          {/* Row 3, Col 1: MISSÃO (Block 7) */}
          <div className="flex flex-col items-center gap-3">
            <h3 
              className={cn("text-white font-bold uppercase tracking-wider", montserrat.className)}
              style={{ fontSize: "24px", alignSelf: "stretch" }}
            >
              MISSÃO
            </h3>
            <p 
              className={cn("text-white font-medium opacity-90", montserrat.className)}
              style={{ fontSize: "18px", alignSelf: "stretch" }}
            >
              Explorar o espírito empreendedor na ESALQ/USP por meio de vivências que atendem às necessidades dos nossos clientes, conectando mercado e meio acadêmico.
            </p>
          </div>

          {/* Row 3, Col 2: Empty */}
          <div />

          {/* Row 3, Col 3: VALORES (Block 9) */}
          <div className="flex flex-col items-center gap-3">
            <h3 
              className={cn("text-white font-bold uppercase tracking-wider", montserrat.className)}
              style={{ fontSize: "24px", alignSelf: "stretch" }}
            >
              VALORES
            </h3>
            <p 
              className={cn("text-white font-medium opacity-90", montserrat.className)}
              style={{ fontSize: "18px", alignSelf: "stretch" }}
            >
              Transparência, Excelência, Responsabilidade Socioambiental, Comprometimento e Orgulho EJF.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="flex flex-col items-center gap-[20px] self-stretch px-6 py-16 md:px-[30px] bg-[#1F4427] border-t border-b border-white/10">
        <h2 
          className={cn("self-stretch text-center text-white font-extrabold uppercase leading-normal tracking-[1.12px]", montserrat.className)}
          style={{ fontSize: "28px", textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          Conheça o nosso time
        </h2>

        {/* Members Grid/Carousel */}
        <div className="flex flex-wrap justify-center items-center content-center gap-[55px] self-stretch py-[20px]">
          {[
            { name: "RICHARD MILLER", role: "PRESIDENTE", course: "ENGENHARIA AMBIENTAL", image: "/time-esalq.png" },
            { name: "MARIA SILVA", role: "VICE-PRESIDENTE", course: "ENGENHARIA FLORESTAL", image: "/time-esalq.png" },
            { name: "CARLOS COSTA", role: "DIRETOR TÉCNICO", course: "AGRONOMIA", image: "/time-esalq.png" },
            { name: "ANA OLIVEIRA", role: "DEPARTAMENTO RH", course: "ENGENHARIA AMBIENTAL", image: "/time-esalq.png" }
          ].map((membro, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center gap-1 group">
              {/* Member Image - Clean Circular Cutout */}
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
                <Image 
                  src={membro.image} 
                  alt={membro.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 
                className={cn("self-stretch text-center text-white font-extrabold uppercase leading-normal tracking-[0.8px] mt-3", montserrat.className)}
                style={{ fontSize: "20px" }}
              >
                {membro.name}
              </h3>

              {/* Role */}
              <p 
                className={cn("self-stretch text-center text-[#8CC5A2] font-extrabold uppercase leading-normal tracking-[0.8px]", montserrat.className)}
                style={{ fontSize: "20px" }}
              >
                {membro.role}
              </p>

              {/* Course */}
              <p 
                className={cn("self-stretch text-center text-white/90 font-semibold uppercase leading-normal tracking-[0.8px]", montserrat.className)}
                style={{ fontSize: "20px" }}
              >
                {membro.course}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
