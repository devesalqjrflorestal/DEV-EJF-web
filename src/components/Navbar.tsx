"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const navigation = [
  { name: "Início", href: "/" },
  { name: "Institucional", href: "/institucional" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#1F4427] border-b border-white/10 self-stretch">
      <div className="mx-auto w-full px-[70px] py-[10px]">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="EJF Logo"
                width={80}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-1 py-2 text-[18px] font-normal text-white transition-colors hover:opacity-80 text-center tracking-[0.72px] uppercase",
                    montserrat.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 border-t bg-[#1F4427]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 uppercase",
                montserrat.className
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
