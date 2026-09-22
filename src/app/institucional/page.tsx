import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { MVVSection } from "@/components/MVVSection";
import { CarrosselTime } from "@/components/CarrosselTime";
import institucionalData from "@/conteudo/institucional.json";
import { parseMembros } from "@/lib/parseMd";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function InstitucionalPage() {
  const { quemSomos, mvv, time } = institucionalData;
  const membros = parseMembros();

  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Quem Somos Section */}
      <section className="px-6 py-12 md:px-20 lg:px-[120px] pt-24">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-12"
          style={{ gridTemplateRows: "repeat(2, auto)" }}
        >
          <div className="flex flex-col justify-center items-start gap-6">
            <h2
              className={cn("text-white font-medium uppercase tracking-widest opacity-80", montserrat.className)}
              style={{ fontSize: "20px" }}
            >
              {quemSomos.titulo}
            </h2>
            <p
              className={cn("text-[#8CC5A2] font-normal leading-tight", montserrat.className)}
              style={{ fontSize: "32px" }}
            >
              {quemSomos.subtitulo}
            </p>
          </div>

          <div className="relative h-[250px] lg:h-[300px] rounded-[24px] overflow-hidden shadow-xl border border-white/5">
            <Image src={quemSomos.imagem1} alt={quemSomos.imagem1Alt} fill className="object-cover opacity-80" />
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <p
              className={cn("text-white leading-relaxed text-left", montserrat.className)}
              style={{ fontSize: "16px" }}
            >
              {quemSomos.paragrafo1.split("ESALQ Júnior Florestal").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<strong className="font-extrabold">ESALQ Júnior Florestal</strong></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <p
              className={cn("text-white font-semibold leading-relaxed text-left opacity-90", montserrat.className)}
              style={{ fontSize: "16px" }}
            >
              {quemSomos.paragrafo2}
            </p>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-xl border border-white/10">
            <Image
              src={quemSomos.imagem2}
              alt={quemSomos.imagem2Alt}
              width={1200}
              height={800}
              className="w-full h-[250px] lg:h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      <MVVSection itens={mvv} />

      <CarrosselTime titulo={time.titulo} membros={membros} />
    </main>
  );
}
