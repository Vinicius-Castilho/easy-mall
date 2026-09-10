'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import AuroraBackground from "@/components/AuroraBackground";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-[85svh] flex items-center px-6 pt-20 pb-14 lg:py-20 z-10 overflow-hidden">
      <AuroraBackground />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full z-10 relative">
        {/* Sem animação de entrada no título/imagem de propósito: são os
            candidatos a maior elemento pintado (LCP) da home — um fade via
            opacity:0 no SSR atrasa esse "maior elemento pintado" até o JS
            hidratar e a animação terminar. */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-easy-green tracking-normal leading-tight mb-6">
            Aqui, o tempo <br />
            <span className="text-easy-olive">ganha um novo ritmo.</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-easy-green/75 max-w-xl font-medium mx-auto lg:mx-0">
            Mais do que um mall. Um jeito fácil de viver a cidade.
          </p>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-[0_24px_48px_-20px_rgba(0,66,65,0.35)]">
            <Image
              src="/images/Easy Mall.jpg"
              alt="Visão do Easy Mall"
              fill
              className="object-cover object-[50%_35%]"
              sizes="(max-width: 768px) 320px, 450px"
              quality={80}
              priority
            />
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={handleScrollDown}
        aria-label="Rolar para a próxima seção"
        className="hidden lg:block absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <div className="w-7 h-11 rounded-full border-2 border-easy-green/30 flex justify-center pt-2 shadow-[0_4px_14px_-4px_rgba(0,66,65,0.25)] bg-easy-cream/50 backdrop-blur-sm">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-easy-olive"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>
    </section>
  );
}
