'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-[85svh] flex items-center px-6 pt-20 pb-14 lg:py-20 z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "10%", "0%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute -inset-1/4 opacity-45 blur-2xl will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, var(--color-easy-olive) 10%, var(--color-easy-lavender) 20%, var(--color-easy-blue) 30%, var(--color-easy-cream) 45%, var(--color-easy-olive) 55%)",
            backgroundSize: "200% 200%",
            maskImage: "radial-gradient(ellipse 85% 70% at 50% 0%, black 55%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 0%, black 55%, transparent 85%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full z-10 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.18, 0.15)}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-easy-green tracking-normal leading-tight mb-6">
            Aqui, o tempo <br />
            <span className="text-easy-olive">ganha um novo ritmo.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed text-easy-green/75 max-w-xl font-medium mx-auto lg:mx-0">
            Mais do que um mall. Um jeito fácil de viver a cidade.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={scaleIn}
          transition={{ delay: 0.25 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-[0_24px_48px_-20px_rgba(0,66,65,0.35)]">
            <Image
              src="/images/Easy Mall.jpg"
              alt="Visão do Easy Mall"
              fill
              className="object-cover object-[50%_35%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={80}
              priority
            />
          </div>
        </motion.div>
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
