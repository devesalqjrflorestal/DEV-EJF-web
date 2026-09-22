"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion, useAnimation, PanInfo } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Membro {
  nome: string;
  cargo: string;
  curso: string;
  foto: string;
}

interface CarrosselTimeProps {
  titulo: string;
  membros: Membro[];
}

export function CarrosselTime({ titulo, membros }: CarrosselTimeProps) {
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
      transition: { type: "spring", stiffness: 250, damping: 30, mass: 1 }
    });
  };

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const projectedMovement = info.offset.x + info.velocity.x * 0.2;
    const moveSteps = Math.round(projectedMovement / STEP);
    let newIndex = activeIndex - moveSteps;
    newIndex = Math.max(0, Math.min(newIndex, membros.length - 1));
    scrollTo(newIndex);
  };

  return (
    <section className="flex flex-col items-center gap-10 self-stretch px-6 py-16 bg-[#1F4427] border-t border-white/10 overflow-hidden">
      <h2
        className={cn("text-center text-white font-extrabold uppercase tracking-wider", montserrat.className)}
        style={{ fontSize: "28px" }}
      >
        {titulo}
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
                <Image
                  src={`/institucional/membros/${membro.foto}`}
                  alt={membro.nome}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className={cn("text-center text-white font-black uppercase mt-4", montserrat.className)}
                style={{ fontSize: "18px" }}
              >
                {membro.nome}
              </h3>
              <p
                className={cn("text-center text-[#8CC5A2] font-extrabold uppercase", montserrat.className)}
                style={{ fontSize: "16px" }}
              >
                {membro.cargo}
              </p>
              <p
                className={cn("text-center text-white/70 font-semibold uppercase", montserrat.className)}
                style={{ fontSize: "14px" }}
              >
                {membro.curso}
              </p>
            </div>
          ))}
        </motion.div>

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
  );
}
