import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const solutions = [
  { name: "Legislação", href: "/solucoes/legislacao" },
  { name: "Manejo Florestal", href: "/solucoes/manejo" },
  { name: "Consultoria", href: "/solucoes/consultoria" },
  { name: "Ensino", href: "/solucoes/ensino" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F4427] text-white self-stretch flex flex-col justify-center items-center gap-[20px] px-6 py-[30px] md:px-[58px]">
      <div className="flex flex-wrap justify-center items-start gap-12 md:gap-[100px] self-stretch">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/logos/logo.svg"
              alt="EJF Logo"
              width={160}
              height={160}
              className="h-24 md:h-28 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Soluções */}
        <div className="flex flex-col gap-4">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Soluções
          </h3>
          <ul className="flex flex-col gap-2">
            {solutions.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={cn("text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity", montserrat.className)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-4 max-w-[200px]">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Endereço
          </h3>
          <div className="flex gap-2">
            <MapPin className="h-4 w-4 shrink-0 opacity-70" />
            <p className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>
              Av. Pádua Dias, 11 - Piracicaba, SP, 13418-900
            </p>
          </div>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-4">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Contato
          </h3>
          <div className="flex flex-col gap-2">
            <a href="mailto:contato@esalqjrflorestal.org.br" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail className="h-4 w-4 opacity-70" />
              <span className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>contato@esalqjrflorestal.org.br</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 opacity-70" />
              <span className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>(19) 3447-8622</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Social
          </h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/esalqjrflorestal/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/esalq-jr-florestal/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="w-full flex flex-col items-center gap-[20px] mt-4">
        <div className="w-full h-[1px] bg-white opacity-20" />
        <p className={cn(
          "flex-1 text-center text-white text-[14px] font-medium opacity-75 leading-normal",
          montserrat.className
        )}>
          ©2026 ESALQ Júnior Florestal - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
