"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

const TARGET_ANGLES: Record<string, number> = {
  visao: 0,
  missao: 210,
  valores: 150,
};

function RosaDosVentos({ activeItem }: { activeItem: string | null }) {
  const controls = useAnimation();
  const currentAngle = useRef(5.012);
  const prevItem = useRef<string | null>(null);

  useEffect(() => {
    const startIdle = async () => {
      await controls.start({
        rotate: currentAngle.current + 360,
        transition: { duration: 6, ease: "linear", repeat: Infinity },
      });
    };
    startIdle();
  }, [controls]);

  if (prevItem.current !== activeItem) {
    prevItem.current = activeItem;

    if (activeItem) {
      const target = TARGET_ANGLES[activeItem];
      const next = currentAngle.current + 360 + ((target - (currentAngle.current % 360) + 360) % 360);
      currentAngle.current = next;
      controls.start({
        rotate: next,
        transition: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
      });
    } else {
      controls.start({
        rotate: currentAngle.current + 360,
        transition: { duration: 6, ease: "linear", repeat: Infinity },
      });
    }
  }

  return (
    <motion.div
      animate={controls}
      initial={{ rotate: 5.012 }}
      style={{ width: 260, height: 260, position: "relative", flexShrink: 0 }}
    >
      <Image
        src="/institucional/rosa-dos-ventos.svg"
        alt="Compass Rose Icon"
        width={260}
        height={260}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

interface MVVItemProps {
  id: string;
  titulo: string;
  texto: string;
  isActive: boolean;
  isOther: boolean;
  onSelect: (id: string | null) => void;
}

function MVVItem({ id, titulo, texto, isActive, isOther, onSelect }: MVVItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-3 cursor-pointer select-none"
      animate={{ opacity: isOther ? 0.35 : 1, scale: isActive ? 1.05 : 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      onClick={() => onSelect(isActive ? null : id)}
      onMouseEnter={() => !isActive && onSelect(id)}
      onMouseLeave={() => onSelect(null)}
    >
      <motion.h3
        className={cn("text-white font-bold uppercase tracking-wider", montserrat.className)}
        style={{ fontSize: "26px" }}
        animate={{ color: isActive ? "#8CC5A2" : "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        {titulo}
      </motion.h3>

      <motion.div
        className="h-[2px] bg-[#8CC5A2] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <p className={cn("text-white font-medium opacity-90", montserrat.className)} style={{ fontSize: "17px" }}>
        {texto}
      </p>
    </motion.div>
  );
}

interface MVVDataItem {
  id: string;
  titulo: string;
  texto: string;
}

interface MVVSectionProps {
  itens: MVVDataItem[];
}

export function MVVSection({ itens }: MVVSectionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section className="px-6 py-16 md:px-20 lg:px-[120px] bg-[#1F4427] border-t border-white/5">

      {/* DESKTOP */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-x-10 gap-y-16 items-center">
        <div />
        <MVVItem {...itens[0]} isActive={activeItem === itens[0].id} isOther={activeItem !== null && activeItem !== itens[0].id} onSelect={setActiveItem} />
        <div />

        <div />
        <div className="flex justify-center items-center">
          <RosaDosVentos activeItem={activeItem} />
        </div>
        <div />

        <MVVItem {...itens[1]} isActive={activeItem === itens[1].id} isOther={activeItem !== null && activeItem !== itens[1].id} onSelect={setActiveItem} />
        <div />
        <MVVItem {...itens[2]} isActive={activeItem === itens[2].id} isOther={activeItem !== null && activeItem !== itens[2].id} onSelect={setActiveItem} />
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center gap-10 max-w-sm mx-auto">
        <div className="flex justify-center">
          <RosaDosVentos activeItem={activeItem} />
        </div>
        {itens.map((item) => (
          <MVVItem
            key={item.id}
            {...item}
            isActive={activeItem === item.id}
            isOther={activeItem !== null && activeItem !== item.id}
            onSelect={setActiveItem}
          />
        ))}
      </div>

    </section>
  );
}
