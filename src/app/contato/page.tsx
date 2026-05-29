"use client";

import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ContatoPage() {
  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex h-[300px] md:h-[400px] w-full flex-col justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/banners/contato-hero.jpg')" }}
      >
        <div className="relative z-10 text-center px-6">
          <h1 className={cn(
            "text-white text-[clamp(40px,8vw,72px)] font-extrabold uppercase tracking-[3px] leading-tight",
            montserrat.className
          )}
            style={{ textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            CONTATO
          </h1>
          <p className={cn(
            "text-[#8CC5A2] text-[18px] md:text-[22px] font-medium uppercase tracking-[2px] mt-4",
            montserrat.className
          )}>
            Fale com a nossa equipe
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 md:px-20 md:py-20 lg:px-[122px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Column (Glassmorphism Card) */}
          <div className={cn(
            "flex flex-col gap-10 p-8 md:p-14 rounded-[37px]",
            "bg-[linear-gradient(180deg,rgba(140,197,162,0.1)_5%,rgba(204,204,204,0.04)_33%,rgba(31,68,39,0.1)_100%)]",
            "backdrop-blur-[2px]"
          )}>
            <div className="flex flex-col gap-8">
              <h2 className={cn(
                "text-white font-bold uppercase tracking-wider",
                "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
                montserrat.className
              )}>
                Informações
              </h2>

              <div className="flex flex-col gap-10">
                {/* Endereço */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>Endereço</span>
                    <a
                      href="https://maps.app.goo.gl/QGSNGTbj2AVRJesM8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg opacity-90 hover:underline"
                    >
                      Departamento de Ciências Florestais - Av. Pádua Dias, 11 - São Dimas, Piracicaba - SP, 13418-900
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>Telefone</span>
                    <a
                      href="https://wa.me/5519998944503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg opacity-90 hover:underline"
                    >
                      (19) 99894-4503
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>E-mail</span>
                    <a
                      href="mailto:tecnica@esalqjrflorestal.org.br"
                      className="text-white text-lg opacity-90 break-all hover:underline"
                    >
                      tecnica@esalqjrflorestal.org.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest block mb-6", montserrat.className)}>Redes Sociais</span>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/esalqjrflorestal/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#F1DD8C] hover:text-[#1F4427] transition-all hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/esalq-jr-florestal/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#F1DD8C] hover:text-[#1F4427] transition-all hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex flex-col gap-10 lg:pl-8">
            <h2 className={cn("text-white text-3xl font-bold uppercase tracking-wider", montserrat.className)}>
              Envie sua mensagem
            </h2>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className={cn(
                      "bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors",
                      montserrat.className
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>E-mail Profissional</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="exemplo@email.com"
                    className={cn(
                      "bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors",
                      montserrat.className
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Assunto</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Como podemos ajudar?"
                  className={cn(
                    "bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors",
                    montserrat.className
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Sua Mensagem</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className={cn(
                    "bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors resize-none",
                    montserrat.className
                  )}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "mt-4 flex items-center justify-center gap-3 bg-white text-[#1F4427] font-bold py-5 rounded-full hover:bg-[#F1DD8C] transition-all active:scale-[0.98] uppercase tracking-widest cursor-pointer",
                  montserrat.className
                )}
              >
                Enviar Mensagem
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.1197841016688!2d-47.63002194890091!3d-22.70710090913169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c63197a3e8bc65%3A0xeb963336f3f930bf!2sESALQ%20J%C3%BAnior%20Florestal!5e0!3m2!1sen!2sbr!4v1778010130379!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização ESALQ Júnior Florestal"
        ></iframe>
      </section>
    </main>
  );
}
