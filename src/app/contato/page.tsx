"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import contatoData from "@/conteudo/contato.json";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ContatoPage() {
  const { hero, informacoes, formulario, mapa } = contatoData;
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    setLoading(true);

    await emailjs.send(
      "service_430bpny",
      "template_0y5yfu8",
      data,
      "-u4WX5bRemyLMOE4d"
    );

    setLoading(false);
    setSent(true);
  }

  return (
    <main className="flex flex-col bg-[#1F4427] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex h-[300px] md:h-[400px] w-full flex-col justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${hero.imagemFundo}')` }}
      >
        <div className="relative z-10 text-center px-6">
          <h1
            className={cn(
              "text-white text-[clamp(40px,8vw,72px)] font-extrabold uppercase tracking-[3px] leading-tight",
              montserrat.className
            )}
            style={{ textShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
          >
            {hero.titulo}
          </h1>
          <p className={cn(
            "text-[#8CC5A2] text-[18px] md:text-[22px] font-medium uppercase tracking-[2px] mt-4",
            montserrat.className
          )}>
            {hero.subtitulo}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 md:px-20 md:py-20 lg:px-[122px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Column */}
          <div className={cn(
            "flex flex-col gap-10 p-8 md:p-14 rounded-[37px]",
            "bg-[linear-gradient(180deg,rgba(140,197,162,0.1)_5%,rgba(204,204,204,0.04)_33%,rgba(31,68,39,0.1)_100%)]",
            "backdrop-blur-[2px]"
          )}>
            <div className="flex flex-col gap-8">
              <h2 className={cn(
                "text-white font-bold uppercase tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl",
                montserrat.className
              )}>
                {informacoes.titulo}
              </h2>

              <div className="flex flex-col gap-10">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>Endereço</span>
                    <a href={informacoes.endereco.linkMaps} target="_blank" rel="noopener noreferrer" className="text-white text-lg opacity-90 hover:underline">
                      {informacoes.endereco.texto}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>Telefone</span>
                    <a href={informacoes.telefone.linkWhatsapp} target="_blank" rel="noopener noreferrer" className="text-white text-lg opacity-90 hover:underline">
                      {informacoes.telefone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F1DD8C]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest", montserrat.className)}>E-mail</span>
                    <a href={`mailto:${informacoes.email}`} className="text-white text-lg opacity-90 break-all hover:underline">
                      {informacoes.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <span className={cn("text-[#8CC5A2] text-sm font-bold uppercase tracking-widest block mb-6", montserrat.className)}>Redes Sociais</span>
              <div className="flex gap-6">
                <a href={informacoes.social.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#F1DD8C] hover:text-[#1F4427] transition-all hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={informacoes.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#F1DD8C] hover:text-[#1F4427] transition-all hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex flex-col gap-10 lg:pl-8">
            <h2 className={cn("text-white text-3xl font-bold uppercase tracking-wider", montserrat.className)}>
              {formulario.titulo}
            </h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Nome Completo</label>
                  <input type="text" id="name" name="name" placeholder="Seu nome" className={cn("bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors", montserrat.className)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>E-mail Profissional</label>
                  <input type="email" id="email" name="email" placeholder="exemplo@email.com" className={cn("bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors", montserrat.className)} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Assunto</label>
                <input type="text" id="subject" name="subject" placeholder="Como podemos ajudar?" className={cn("bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors", montserrat.className)} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={cn("text-white/70 text-sm font-medium ml-1", montserrat.className)}>Sua Mensagem</label>
                <textarea id="message" name="message" rows={6} placeholder="Descreva seu projeto ou dúvida..." className={cn("bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#F1DD8C]/50 transition-colors resize-none", montserrat.className)} />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className={cn(
                  "mt-4 flex items-center justify-center gap-3 font-bold py-5 rounded-full transition-all active:scale-[0.98] uppercase tracking-widest cursor-pointer disabled:cursor-not-allowed",
                  sent
                    ? "bg-[#8CC5A2] text-[#1F4427] scale-[0.98]"
                    : "bg-white text-[#1F4427] hover:bg-[#F1DD8C]",
                  montserrat.className
                )}
              >
                {sent ? formulario.textoEnviado : loading ? formulario.textoEnviando : formulario.textoEnviar}
                {!sent && <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px]">
        <iframe
          src={mapa.embedUrl}
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
