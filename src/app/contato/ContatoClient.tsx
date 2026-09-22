'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import emailjs from "@emailjs/browser";
import AuroraBackground from "@/components/AuroraBackground";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FinalCtaGrid from "@/components/FinalCtaGrid";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, WHATSAPP_HREF, WHATSAPP_HREF_LMS } from "@/lib/constants";
import { fadeUp, revealOnScroll, scaleIn, staggerContainer } from "@/lib/motion";

export default function ContatoClient() {
  // Estados do formulário prontos para sua API
  const [motivo, setMotivo] = useState("");
  const [termoUso, setTermoUso] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);
  const [camposFaltando, setCamposFaltando] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro(false);

    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") ?? "").trim();
    const telefone = String(dados.get("telefone") ?? "").trim();
    const email = String(dados.get("email") ?? "").trim();
    const mensagem = String(dados.get("mensagem") ?? "").trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const faltando: string[] = [];
    if (!motivo) faltando.push("Motivo do Contato");
    if (!nome) faltando.push("Nome");
    if (!telefone) faltando.push("WhatsApp");
    if (!email) faltando.push("E-mail");
    else if (!emailValido) faltando.push("E-mail (formato inválido)");
    if (!mensagem) faltando.push("Mensagem");
    if (!termoUso) faltando.push("Aceite dos Termos de Uso e Política de Privacidade");

    if (faltando.length > 0) {
      setCamposFaltando(faltando);
      return;
    }

    // Template compartilhado com outro site só tem {{name}}, {{email}}, {{title}},
    // {{time}} e {{message}} — por isso empacotamos telefone/motivo/consentimento
    // dentro de "message" para não perder nenhuma informação da tela.
    const corpo = [
      `WhatsApp: ${telefone}`,
      `Motivo: ${motivo || "Não informado"}`,
      "",
      mensagem,
    ].join("\n");

    setEnviando(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: nome,
          email,
          title: motivo || "Contato pelo site",
          time: new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }),
          message: corpo,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setEnviado(true);
    } catch (err) {
      const detalhe =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
            ? `${(err as { status?: number }).status ?? ""} ${(err as { text?: string }).text ?? ""}`.trim()
            : String(err);
      console.error("Falha ao enviar e-mail via EmailJS:", detalhe);
      setErro(true);
    } finally {
      setEnviando(false);
    }
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
            className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl"
          >
            <div className="absolute -inset-3 bg-easy-olive/12 rounded-[3rem] rotate-2 z-0" />
            <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-easy-green/20 z-10">
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
              noValidate
              className="space-y-6"
            >

              {/* Motivo do Contato (Pills para melhor UX) */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-easy-green/70 uppercase tracking-normal">
                  Motivo do Contato <span className="text-easy-olive">*</span>
                </label>
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
                  <label htmlFor="nome" className="block text-sm font-semibold text-easy-green/70">Nome <span className="text-easy-olive">*</span></label>
                  <input type="text" id="nome" name="nome" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefone" className="block text-sm font-semibold text-easy-green/70">WhatsApp <span className="text-easy-olive">*</span></label>
                  <input type="tel" id="telefone" name="telefone" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="(81) 90000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-easy-green/70">E-mail <span className="text-easy-olive">*</span></label>
                <input type="email" id="email" name="email" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="block text-sm font-semibold text-easy-green/70">Mensagem <span className="text-easy-olive">*</span></label>
                <textarea id="mensagem" name="mensagem" rows={4} required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>

              {/* Checkboxes de Privacidade */}
              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                    <input type="checkbox" checked={termoUso} onChange={(e) => setTermoUso(e.target.checked)} required className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-easy-green/30 rounded focus:ring-2 focus:ring-easy-olive peer-checked:bg-easy-green peer-checked:border-easy-green transition-all"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm text-easy-green/80 group-hover:text-easy-green transition-colors">
                    Li e concordo com os{" "}
                    <Link
                      href="/termos-de-uso"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
                    >
                      Termos de Uso
                    </Link>{" "}
                    e a{" "}
                    <Link
                      href="/politica-de-privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
                    >
                      Política de Privacidade
                    </Link>{" "}
                    do Easy Mall. <span className="text-easy-olive">*</span>
                  </span>
                </label>
              </div>

              <p className="text-xs text-easy-green/50">
                <span className="text-easy-olive">*</span> Campos obrigatórios
              </p>

              {erro && (
                <p className="text-sm font-medium text-red-600 -mb-2">
                  Não foi possível enviar sua mensagem agora. Tente novamente ou fale com a gente pelo WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="w-full sm:w-auto bg-easy-green text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-easy-olive hover:shadow-xl transition-all active:scale-95 mt-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {enviando ? "Enviando..." : "Enviar Mensagem"}
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
            { variant: "olive", href: WHATSAPP_HREF_LMS, title: "Comercialização", subtitle: "Fale com a LMS" },
          ]}
        />

      </div>

      {/* Popup de validação: campos obrigatórios não preenchidos */}
      <AnimatePresence>
        {camposFaltando.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setCamposFaltando([])}
            className="fixed inset-0 z-50 flex items-center justify-center bg-easy-green/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-easy-green mb-2">Faltam alguns campos</h3>
              <p className="text-easy-green/70 mb-5">Preencha as informações abaixo antes de enviar:</p>
              <ul className="text-left text-sm text-easy-green/80 bg-easy-cream/60 rounded-2xl p-4 mb-6 space-y-1.5">
                {camposFaltando.map((campo) => (
                  <li key={campo} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-easy-olive shrink-0" />
                    {campo}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setCamposFaltando([])}
                className="w-full bg-easy-green text-white font-semibold py-3 rounded-xl hover:bg-easy-olive transition-colors active:scale-95"
              >
                Entendi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
