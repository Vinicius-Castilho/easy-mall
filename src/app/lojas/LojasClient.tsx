'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FinalCtaGrid from "@/components/FinalCtaGrid";
import { WHATSAPP_HREF } from "@/lib/constants";
import { CATEGORIAS, LOJAS } from "@/data/lojas";
import { fadeUp, revealOnScroll, scaleIn, staggerContainer } from "@/lib/motion";

const ITENS_POR_PAGINA = 6;

export default function LojasClient() {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("Todas");
  const [menuFiltroAberto, setMenuFiltroAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visiveisCount, setVisiveisCount] = useState(ITENS_POR_PAGINA);
  const [filtroAnterior, setFiltroAnterior] = useState(filtroAtivo);

  // Só pagina em telas menores que o breakpoint lg (onde a grade vira 1 coluna)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const atualizar = () => setIsMobile(mq.matches);
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, []);

  // Reseta a paginação sempre que o filtro muda (ajuste durante a renderização,
  // em vez de um efeito, para não disparar um render em cascata)
  if (filtroAtivo !== filtroAnterior) {
    setFiltroAnterior(filtroAtivo);
    setVisiveisCount(ITENS_POR_PAGINA);
  }

  // Lógica para selecionar ou tirar a seleção (Volta para "Todas")
  const toggleFiltro = (cat: string) => {
    if (filtroAtivo === cat) {
      setFiltroAtivo("Todas");
    } else {
      setFiltroAtivo(cat);
    }
    setMenuFiltroAberto(false); // Fecha a gaveta após selecionar
  };

  // Aplica o filtro na lista de lojas antes de renderizar
  const lojasFiltradas = filtroAtivo === "Todas"
    ? LOJAS
    : LOJAS.filter((loja) => loja.categoria === filtroAtivo);

  // No mobile/tablet, mostra só as primeiras N e permite carregar mais
  const lojasVisiveis = isMobile ? lojasFiltradas.slice(0, visiveisCount) : lojasFiltradas;
  const temMaisParaCarregar = isMobile && visiveisCount < lojasFiltradas.length;

  return (
    <main className="relative pt-32 pb-24 bg-easy-cream min-h-screen overflow-hidden">

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

            {/* ONDA SUPERIOR ESQUERDA (Olive) */}
            <svg className="absolute -top-32 -left-20 w-[500px] md:w-[700px] text-easy-olive/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.9,-65.7C52.8,-58.5,65.1,-49.6,73.5,-37.5C81.9,-25.4,86.4,-10.1,84.1,4.4C81.8,18.9,72.7,32.6,61.9,43.5C51.1,54.4,38.6,62.5,24.8,68.6C11,74.7,-4.1,78.8,-18.2,76C-32.3,73.2,-45.4,63.5,-57.4,51.8C-69.4,40.1,-80.3,26.4,-84.5,10.9C-88.7,-4.6,-86.2,-21.9,-77.2,-35.6C-68.2,-49.3,-52.7,-59.4,-38.3,-66C-23.9,-72.6,-11.9,-75.7,1.1,-77.3C14.1,-78.9,27,-72.9,39.9,-65.7Z" transform="translate(100 100)" />
            </svg>

            {/* ONDA INFERIOR DIREITA (Olive) */}
            <svg className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] text-easy-olive/10 transform rotate-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M51.9,-70.6C66,-61.4,75.3,-45.3,81.1,-28.1C86.9,-10.9,89.2,7.4,83.9,23.5C78.6,39.6,65.7,53.5,50.7,64.1C35.7,74.7,18.6,82,-0.2,82.3C-19,82.6,-38,75.9,-53.4,65.2C-68.8,54.5,-80.6,39.8,-85.7,23.2C-90.8,6.6,-89.2,-11.9,-81.4,-27.2C-73.6,-42.5,-59.6,-54.6,-44.4,-63.3C-29.2,-72,-14.6,-77.3,1.4,-79.3C17.4,-81.3,34.8,-80,51.9,-70.6Z" transform="translate(100 100)" />
            </svg>

      </div>

      <div className="relative z-10">

        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-easy-green font-heading tracking-normal leading-tight">
              Um mix pensado <br className="hidden md:block" />
              para deixar seu dia a dia <br className="hidden md:block" />
              <span className="text-easy-olive underline decoration-easy-green/40 decoration-8 underline-offset-4">mais prático.</span>
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={scaleIn}
            transition={{ delay: 0.25 }}
            className="order-1 lg:order-2 relative w-[85%] md:w-[75%] lg:w-full mx-auto"
          >
            <div className="absolute -inset-3 bg-easy-olive/12 rounded-[3rem] rotate-2 z-0" />
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-easy-green/20 z-10">
              <Image
                src="/images/galeria-3.jpg"
                alt="Visão das Lojas do Easy Mall"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* 2. BARRA DE FILTROS (Híbrida: Desktop/Mobile) */}
        <motion.section {...revealOnScroll} variants={fadeUp} className="max-w-7xl mx-auto px-6 mb-12 relative z-30">

          {/* VERSÃO DESKTOP (Visível acima de 960px) */}
          <div className="hidden min-[961px]:flex items-center gap-4">
            <span className="text-easy-green font-semibold mr-2 whitespace-nowrap shrink-0">Filtro de lojas:</span>
            <div className="flex gap-4 flex-wrap">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleFiltro(cat)}
                  aria-pressed={filtroAtivo === cat}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                    filtroAtivo === cat
                      ? "bg-easy-green text-white border-easy-green shadow-md"
                      : "bg-white text-easy-green/70 border-easy-green/10 hover:border-easy-olive"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* VERSÃO MOBILE/TABLET (Gaveta visível abaixo de 960px) */}
          <div className="min-[961px]:hidden w-full max-w-sm relative">
            <button
              onClick={() => setMenuFiltroAberto(!menuFiltroAberto)}
              aria-expanded={menuFiltroAberto}
              aria-haspopup="listbox"
              className="w-full flex items-center justify-between bg-white border-2 border-easy-green/10 px-6 py-4 rounded-2xl shadow-sm text-easy-green font-semibold"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filtro: {filtroAtivo}</span>
              </div>
              <svg className={`w-5 h-5 transition-transform duration-300 ${menuFiltroAberto ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Aberto */}
            <AnimatePresence>
              {menuFiltroAberto && (
                <motion.div
                  role="listbox"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border-2 border-easy-green/5 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col">
                    {CATEGORIAS.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => toggleFiltro(cat)}
                        role="option"
                        aria-selected={filtroAtivo === cat}
                        className={`px-6 py-4 text-left font-medium transition-colors border-b border-easy-green/5 last:border-none ${
                          filtroAtivo === cat
                            ? "bg-easy-green text-white"
                            : "text-easy-green/70 hover:bg-easy-cream"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* 3. GRID DE LOJAS (Agora renderiza as 'lojasFiltradas') */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative z-20">

          <AnimatePresence mode="popLayout">
            {lojasFiltradas.length > 0 ? (
              <motion.div
                key={filtroAtivo}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={staggerContainer(0.06)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {lojasVisiveis.map((loja) => (
                  <motion.div
                    key={loja.id}
                    variants={fadeUp}
                    className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border-2 border-white hover:border-easy-olive/30 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    {/* Logo da Loja */}
                    <div className="w-28 h-28 rounded-full bg-easy-cream mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-inner group-hover:scale-105 transition-transform duration-500 relative">
                      <Image src={loja.icon ?? loja.logo} alt={`Logo ${loja.nome}`} fill className="object-contain" />
                    </div>

                    <h3 className="text-2xl font-semibold text-easy-green mb-1">{loja.nome}</h3>
                    <span className="text-xs font-semibold bg-easy-olive/10 text-easy-olive px-3 py-1 rounded-full uppercase tracking-normal mb-6">
                      {loja.categoria}
                    </span>

                    <div className="mt-auto w-full pt-6 border-t border-easy-green/10 flex items-center justify-between">
                      <span className="text-sm font-semibold text-easy-green/60">{loja.local}</span>

                      {/* Botão WhatsApp */}
                      <a
                        href={`https://wa.me/${loja.wpp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#25D366] hover:bg-[#25D366]/10 px-4 py-2 rounded-full transition-colors font-semibold text-sm"
                      >
                        <WhatsAppIcon />
                        Falar
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Mensagem amigável caso não tenha loja na categoria filtrada */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-semibold text-easy-green/50">Nenhuma loja encontrada nesta categoria.</h3>
              </motion.div>
            )}
          </AnimatePresence>

          {temMaisParaCarregar && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setVisiveisCount((c) => c + ITENS_POR_PAGINA)}
                className="px-8 py-3.5 rounded-full font-semibold text-easy-green bg-white border-2 border-easy-green/10 shadow-sm hover:border-easy-olive hover:text-easy-olive transition-all active:scale-95"
              >
                Carregar mais lojas
              </button>
            </div>
          )}
        </section>

        {/* 4. CTAS FINAIS */}
        <FinalCtaGrid
          tiles={[
            { variant: "outline", href: "/sobre", label: "O Easy Mall" },
            { variant: "solid", href: "/contato", title: "É lojista?", subtitle: "Consulte espaços disponíveis e venha fazer parte." },
            { variant: "outline", href: "/#localizacao", label: "Como chegar" },
            { variant: "whatsapp", href: WHATSAPP_HREF, title: "WhatsApp", subtitle: "Easy Mall" },
          ]}
        />

      </div>
    </main>
  );
}
