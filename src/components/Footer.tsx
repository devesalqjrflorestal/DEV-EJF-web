import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

interface FooterData {
  solucoes: { nome: string; href: string }[];
  endereco: { texto: string; linkMaps: string };
  contato: { email: string; telefone: string; linkWhatsapp: string };
  social: { instagram: string; linkedin: string };
  copyright: string;
}

interface FooterProps {
  data: FooterData;
}

export function Footer({ data }: FooterProps) {
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
            {data.solucoes.map((item) => (
              <li key={item.nome}>
                <Link href={item.href} className={cn("text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity", montserrat.className)}>
                  {item.nome}
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
          <a
            href={data.endereco.linkMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            <MapPin className="h-4 w-4 shrink-0 opacity-70" />
            <p className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>
              {data.endereco.texto}
            </p>
          </a>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-4">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Contato
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${data.contato.email}`}
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Mail className="h-4 w-4 opacity-70" />
              <span className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>{data.contato.email}</span>
            </a>
            <a
              href={data.contato.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="h-4 w-4 opacity-70" />
              <span className={cn("text-[14px] font-normal opacity-80", montserrat.className)}>
                {data.contato.telefone}
              </span>
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h3 className={cn("text-[18px] font-medium text-white", montserrat.className)}>
            Social
          </h3>
          <div className="flex gap-4">
            <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
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
          {data.copyright}
        </p>
      </div>
    </footer>
  );
}
