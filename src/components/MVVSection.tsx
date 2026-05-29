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

  // ✅ NOVO: inicia a rotação idle assim que o componente monta
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
  title: string;
  text: string;
  isActive: boolean;
  isOther: boolean;
  onSelect: (id: string | null) => void;
}

function MVVItem({ id, title, text, isActive, isOther, onSelect }: MVVItemProps) {
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
        {title}
      </motion.h3>

      <motion.div
        className="h-[2px] bg-[#8CC5A2] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <p className={cn("text-white font-medium opacity-90", montserrat.className)} style={{ fontSize: "17px" }}>
        {text}
      </p>
    </motion.div>
  );
}

export function MVVSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const items = [
    { id: "visao", title: "VISÃO", text: "Ser reconhecida como uma empresa de referência no setor florestal." },
    { id: "missao", title: "MISSÃO", text: "Explorar o espírito empreendedor na ESALQ/USP por meio de vivências que atendem às necessidades dos nossos clientes, conectando mercado e meio acadêmico." },
    { id: "valores", title: "VALORES", text: "Transparência, Excelência, Responsabilidade Socioambiental, Comprometimento e Orgulho EJF." },
  ];

  return (
    <section className="px-6 py-16 md:px-20 lg:px-[120px] bg-[#1F4427] border-t border-white/5">

      {/* DESKTOP */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-x-10 gap-y-16 items-center">
        <div />
        <MVVItem {...items[0]} isActive={activeItem === "visao"} isOther={activeItem !== null && activeItem !== "visao"} onSelect={setActiveItem} />
        <div />

        <div />
        <div className="flex justify-center items-center">
          <RosaDosVentos activeItem={activeItem} />
        </div>
        <div />

        <MVVItem {...items[1]} isActive={activeItem === "missao"} isOther={activeItem !== null && activeItem !== "missao"} onSelect={setActiveItem} />
        <div />
        <MVVItem {...items[2]} isActive={activeItem === "valores"} isOther={activeItem !== null && activeItem !== "valores"} onSelect={setActiveItem} />
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center gap-10 max-w-sm mx-auto">
        <div className="flex justify-center">
          <RosaDosVentos activeItem={activeItem} />
        </div>
        {items.map((item) => (
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