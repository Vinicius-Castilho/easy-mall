'use client';

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import FinalCtaGrid from "@/components/FinalCtaGrid";
import { WHATSAPP_HREF } from "@/lib/constants";
import { fadeUp, revealOnScroll, scaleIn, staggerContainer } from "@/lib/motion";

export default function SobreClient() {
    // Referência para controlar o scroll do carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  // Efeito do Temporizador (Autoplay)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Se chegou no final, ele volta suavemente pro começo. Se não, avança uma foto.
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 4000); // Troca de foto a cada 4 segundos

    return () => clearInterval(interval); // Limpa o cronômetro se o usuário sair da página
  }, []);

  // Função dos botões manuais
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <main className="relative pt-32 pb-24 bg-easy-cream min-h-screen overflow-hidden">

      {/* BACKGROUND DESIGN: Ondas Orgânicas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* ONDA SUPERIOR ESQUERDA (Verde Escuro) */}
        <svg className="absolute -top-10 -left-10 w-[600px] md:w-[800px] text-easy-green/10 transform -rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,68.8,-53.9,76.6,-38.4C84.4,-22.9,90,-7.3,87.6,7C85.2,21.3,74.7,34.3,64.1,46.5C53.4,58.7,42.5,70.1,28.7,76.4C14.8,82.7,-2,83.9,-17.1,79.5C-32.2,75.1,-45.6,65,-57.4,53.2C-69.2,41.4,-79.3,27.8,-84.6,12.2C-89.9,-3.4,-90.4,-21,-82.9,-34.5C-75.4,-48,-59.8,-57.4,-44.6,-63.9C-29.4,-70.4,-14.7,-74,-0.1,-73.8C14.4,-73.6,28.9,-69.6,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>

        {/* ONDA INFERIOR DIREITA (Olive) */}
        <svg className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] text-easy-olive/10 transform rotate-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M51.9,-70.6C66,-61.4,75.3,-45.3,81.1,-28.1C86.9,-10.9,89.2,7.4,83.9,23.5C78.6,39.6,65.7,53.5,50.7,64.1C35.7,74.7,18.6,82,-0.2,82.3C-19,82.6,-38,75.9,-53.4,65.2C-68.8,54.5,-80.6,39.8,-85.7,23.2C-90.8,6.6,-89.2,-11.9,-81.4,-27.2C-73.6,-42.5,-59.6,-54.6,-44.4,-63.3C-29.2,-72,-14.6,-77.3,1.4,-79.3C17.4,-81.3,34.8,-80,51.9,-70.6Z" transform="translate(100 100)" />
        </svg>

      </div>

      <div className="relative z-10">
            {/* 1. SEÇÃO HERO: Título e Imagem com Design Orgânico */}
            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-24">

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="order-2 lg:order-1 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-easy-green font-heading tracking-normal leading-tight">
                  Mais do que um mall. <br className="hidden md:block" />
                  Um jeito fácil de <br className="hidden md:block" />
                  <span className="text-easy-olive underline decoration-easy-blue/30 decoration-8 underline-offset-4">
                      viver a cidade.
                  </span>
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-easy-green/75 max-w-xl font-medium mx-auto lg:mx-0">
                  Praticidade no coração da Torre.
                </p>
              </motion.div>

                {/* Coluna da Imagem (Reduzida no mobile, 100% no Desktop) */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={scaleIn}
                  transition={{ delay: 0.25 }}
                  className="order-1 lg:order-2 relative w-[85%] md:w-[75%] lg:w-full mx-auto"
                >
                    {/* Elemento de design atrás da imagem */}
                    <div className="absolute -inset-4 bg-easy-olive/20 rounded-[3rem] rotate-3 z-0" />
                    <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10">
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

            {/* 2. SEÇÃO DE TEXTOS INSTITUCIONAIS */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative">
            <motion.div
              {...revealOnScroll}
              variants={staggerContainer(0.15)}
              className="space-y-8 text-lg md:text-xl text-easy-green/80 leading-relaxed font-medium"
            >
                <motion.p variants={fadeUp} className="border-l-4 border-easy-olive pl-6">
                O Easy Mall é um novo conceito de shopping de vizinhança, planejado para estar próximo, prático e integrado ao dia a dia das pessoas.
                </motion.p>
                <motion.p variants={fadeUp} className="pl-7">
                Um espaço que traz ao público uma forma diferente de viver a cidade: mais prática, acessível, segura e acolhedora.
                </motion.p>
                <motion.p variants={fadeUp} className="pl-7">
                Aqui, o tempo ganha um novo ritmo. A cidade não corre, ela flui. E cada detalhe foi pensado para quem valoriza o ir e vir, mas também o parar, o encontrar, o pertencer.
                </motion.p>
            </motion.div>
            </section>

            {/* 3. GALERIA DE 4 FOTOS (Carrossel Interativo no Mobile / Grid no Desktop) */}
            <section className="max-w-7xl mx-auto px-6 mb-20 relative">

                {/* Container do Carrossel com a ref */}
                <motion.div
                    ref={carouselRef}
                    {...revealOnScroll}
                    variants={staggerContainer(0.1)}
                    className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {[1, 2, 3, 4].map((item) => (
                    <motion.div
                        key={item}
                        variants={fadeUp}
                        className="relative aspect-square w-[80vw] sm:w-[50vw] md:w-auto shrink-0 snap-center md:snap-align-none rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer border-2 border-white"
                    >
                        <Image
                        src={`/images/galeria-${item}.jpg`}
                        alt={`Foto ${item} do Easy Mall`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-easy-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    ))}
                </motion.div>

                {/* Botões de Controle (Ocultos no Desktop, visíveis apenas no Mobile) */}
                <div className="flex md:hidden justify-center gap-6 mt-4">
                    <button
                    onClick={() => scroll('left')}
                    className="p-3 bg-white text-easy-green border-2 border-easy-green/10 rounded-full shadow-md hover:bg-easy-green hover:text-white transition-colors active:scale-90"
                    aria-label="Foto anterior"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                    onClick={() => scroll('right')}
                    className="p-3 bg-white text-easy-green border-2 border-easy-green/10 rounded-full shadow-md hover:bg-easy-green hover:text-white transition-colors active:scale-90"
                    aria-label="Próxima foto"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </section>

            {/* 4. SEÇÃO SOBRE A TORRE PARTICIPAÇÕES */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
            <motion.div
              {...revealOnScroll}
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white grid md:grid-cols-12 gap-10 items-center"
            >
                {/* Logo da Torre em destaque */}
                <div className="max-w-sm mx-auto md:col-span-4 flex justify-center items-center p-10 bg-easy-torre rounded-[2rem] aspect-square shadow-xl">
                <Image
                    src="/images/logo-torre-branca.svg"
                    alt="Torre Participações"
                    width={200}
                    height={100}
                    className="object-contain"
                />
                </div>

                <div className="md:col-span-8 space-y-4">
                <h2 className="text-2xl font-semibold text-easy-green uppercase tracking-normal text-sm">Realização</h2>
                <p className="text-easy-green/80 text-lg leading-relaxed font-medium">
                    O Easy Mall nasce da força da <strong className="text-easy-green">Torre Participações</strong>, grupo empresarial familiar com sólida trajetória e origem em um histórico grupo financeiro, industrial e de comércio internacional.
                </p>
                <p className="text-easy-green/80 text-lg leading-relaxed">
                    Fruto desse legado, o empreendimento une tradição e visão de futuro para oferecer mais comodidade, bem-estar e serviços de qualidade à região da Torre.
                </p>
                </div>
            </motion.div>
            </section>

            {/* 5. CTAS FINAIS (Grid Responsivo) */}
            <FinalCtaGrid
              tiles={[
                { variant: "outline", href: "/#lojas", label: "Conheça as lojas" },
                { variant: "solid", href: "/contato", title: "É lojista?", subtitle: "Consulte espaços disponíveis" },
                { variant: "outline", href: "/#localizacao", label: "Como chegar" },
                { variant: "whatsapp", href: WHATSAPP_HREF, title: "WhatsApp", subtitle: "Easy Mall" },
              ]}
            />
      </div>
    </main>
  );
}
