'use client';

import { useState } from 'react';
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import AuroraBackground from "@/components/AuroraBackground";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FinalCtaGrid from "@/components/FinalCtaGrid";
import { WHATSAPP_HREF } from "@/lib/constants";
import { fadeUp, revealOnScroll, scaleIn, staggerContainer } from "@/lib/motion";

export default function ContatoClient() {
  // Estados do formulário prontos para sua API
  const [motivo, setMotivo] = useState("");
  const [termoUso, setTermoUso] = useState(false);
  const [aceitaMarketing, setAceitaMarketing] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entra o fetch para a sua rota de backend/API
    console.log("Enviando...", { motivo, termoUso, aceitaMarketing });
    setEnviado(true);
  };

  const motivos = ["Comercial", "Dúvida", "Elogio", "Sugestão", "Reclamação"];

  return (
    <main className="relative pt-24 lg:pt-28 pb-20 bg-easy-cream min-h-screen overflow-hidden font-sans">

      <AuroraBackground />

      <div className="relative z-10">

        {/* 1. HERO & LMS (Topo) */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.15)}
            className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-8"
          >

            {/* Título Principal */}
            <motion.div variants={fadeUp} className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-easy-green font-heading tracking-normal leading-tight mb-4">
                Fale com o <br className="hidden md:block"/>
                <span className="text-easy-olive underline decoration-easy-green/40 decoration-8 underline-offset-4">Easy Mall.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-easy-green/75 max-w-xl font-medium mx-auto lg:mx-0">
                Estamos à disposição para atender você. Se tiver dúvidas, quiser mais informações ou falar com a nossa equipe, envie sua mensagem pelos canais abaixo.
              </p>
            </motion.div>

            {/* Canais de Contato */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4 items-center lg:items-start">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="mailto:contato@easymall.com.br"
                  className="group relative flex items-center gap-3 bg-white border border-easy-green/10 rounded-2xl pl-2 pr-6 py-2.5 shadow-sm hover:shadow-md hover:border-transparent transition-shadow duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-easy-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-easy-green text-white group-hover:bg-white group-hover:text-easy-green shrink-0 transition-colors duration-300 delay-150">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 4h16v16H4z" />
                      <path d="m4 4 8 8 8-8" />
                    </svg>
                  </span>
                  <span className="relative z-10 flex flex-col text-left">
                    <span className="font-semibold text-sm leading-none mb-1 text-easy-green group-hover:text-white transition-colors duration-300 delay-150">E-mail</span>
                    <span className="text-xs text-easy-green/60 group-hover:text-white/70 transition-colors duration-300 delay-150">Easy Mall</span>
                  </span>
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 bg-white border border-easy-green/10 rounded-2xl pl-2 pr-6 py-2.5 shadow-sm hover:shadow-md hover:border-transparent transition-shadow duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#25D366] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] text-white group-hover:bg-white group-hover:text-[#25D366] shrink-0 transition-colors duration-300 delay-150">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  <span className="relative z-10 flex flex-col text-left">
                    <span className="font-semibold text-sm leading-none mb-1 text-easy-green group-hover:text-white transition-colors duration-300 delay-150">WhatsApp</span>
                    <span className="text-xs text-easy-green/60 group-hover:text-white/70 transition-colors duration-300 delay-150">Easy Mall</span>
                  </span>
                </a>

                <a
                  href="https://instagram.com/easymall.torre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 bg-white border border-easy-green/10 rounded-2xl pl-2 pr-6 py-2.5 shadow-sm hover:shadow-md hover:border-transparent transition-shadow duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white group-hover:bg-white group-hover:bg-none group-hover:text-[#dc2743] shrink-0 transition-colors duration-300 delay-150">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span className="relative z-10 flex flex-col text-left">
                    <span className="font-semibold text-sm leading-none mb-1 text-easy-green group-hover:text-white transition-colors duration-300 delay-150">Instagram</span>
                    <span className="text-xs text-easy-green/60 group-hover:text-white/70 transition-colors duration-300 delay-150">Easy Mall</span>
                  </span>
                </a>
              </div>
              <p className="text-easy-green/70 font-medium text-center lg:text-left">Ou, preencha o formulário abaixo:</p>
            </motion.div>
          </motion.div>

          {/* Imagem Hero */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={scaleIn}
            transition={{ delay: 0.25 }}
            className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl"
          >
            <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-easy-green/20">
              <Image
                src="/images/Easy Mall.jpg"
                alt="Visão do Easy Mall"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* 2. FORMULÁRIO DE CONTATO */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <motion.div
            {...revealOnScroll}
            variants={fadeUp}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-easy-green/5 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
            {enviado ? (
              <motion.div
                key="sucesso"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-10"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-easy-green/10 text-easy-green mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h2 className="text-2xl font-semibold text-easy-green mb-2">Mensagem enviada!</h2>
                <p className="text-easy-green/70 max-w-md">
                  Recebemos seu contato e nossa equipe vai te responder em breve.
                </p>
                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  className="mt-8 font-semibold text-easy-green underline decoration-easy-green/30 underline-offset-4 hover:text-easy-olive transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
            <motion.form
              key="formulario"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Motivo do Contato (Pills para melhor UX) */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-easy-green/70 uppercase tracking-normal">Motivo do Contato</label>
                <div className="flex flex-wrap gap-3">
                  {motivos.map((op) => (
                    <button
                      key={op}
                      type="button"
                      onClick={() => setMotivo(op)}
                      aria-pressed={motivo === op}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border-2 ${
                        motivo === op
                        ? 'bg-easy-green border-easy-green text-white shadow-md'
                        : 'bg-white border-easy-green/10 text-easy-green/70 hover:border-easy-olive'
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs Padrão */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-sm font-semibold text-easy-green/70">Nome</label>
                  <input type="text" id="nome" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefone" className="block text-sm font-semibold text-easy-green/70">WhatsApp</label>
                  <input type="tel" id="telefone" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="(81) 90000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-easy-green/70">E-mail</label>
                <input type="email" id="email" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="block text-sm font-semibold text-easy-green/70">Mensagem</label>
                <textarea id="mensagem" rows={4} required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>

              {/* Checkboxes de Privacidade */}
              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" checked={termoUso} onChange={(e) => setTermoUso(e.target.checked)} required className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-easy-green/30 rounded focus:ring-2 focus:ring-easy-olive peer-checked:bg-easy-green peer-checked:border-easy-green transition-all"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm text-easy-green/80 group-hover:text-easy-green transition-colors">
                    Li e concordo com os Termos de Uso e a Política de Privacidade do Easy Mall.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" checked={aceitaMarketing} onChange={(e) => setAceitaMarketing(e.target.checked)} className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-easy-green/30 rounded focus:ring-2 focus:ring-easy-olive peer-checked:bg-easy-green peer-checked:border-easy-green transition-all"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm text-easy-green/80 group-hover:text-easy-green transition-colors">
                    Autorizo o Easy Mall a enviar novidades, ofertas e comunicações por e-mail e WhatsApp.
                  </span>
                </label>
              </div>

              <button type="submit" className="w-full sm:w-auto bg-easy-green text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-easy-olive hover:shadow-xl transition-all active:scale-95 mt-6">
                Enviar Mensagem
              </button>
            </motion.form>
            )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 3. CTAS FINAIS (Mantendo a consistência do projeto) */}
        <FinalCtaGrid
          tiles={[
            { variant: "outline", href: "/sobre", label: "O Easy Mall" },
            { variant: "solid", href: "/lojas", title: "Conheça", subtitle: "nossas lojas." },
            { variant: "outline", href: "/#localizacao", label: "Como chegar" },
            { variant: "olive", href: WHATSAPP_HREF, title: "Comercialização", subtitle: "Fale com a LMS" },
          ]}
        />

      </div>
    </main>
  );
}
