'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LOJAS } from "@/data/lojas";
import { fadeUp, revealOnScroll } from "@/lib/motion";

export default function StoresMarquee() {
  return (
    <section id="lojas" className="py-20 bg-amber-50 overflow-hidden">
      <motion.div
        {...revealOnScroll}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 mb-12 text-center lg:text-left"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-normal text-easy-green uppercase">
          Nossas lojas
        </h2>
      </motion.div>

      <div className="flex overflow-hidden py-10">
        <div
          className="flex w-max gap-12 md:gap-20 items-center whitespace-nowrap px-10 animate-marquee hover:[animation-play-state:paused]"
          aria-label="Lojas do Easy Mall"
        >
          {LOJAS.map((loja) => (
            <Link
              key={loja.id}
              href="/lojas"
              className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[200px] transition-transform hover:scale-105"
            >
              <Image
                src={loja.logo}
                alt={loja.nome}
                width={200}
                height={80}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </Link>
          ))}
          {/* Cópia decorativa para o efeito de loop contínuo — oculta de leitores de tela e do teclado */}
          {LOJAS.map((loja) => (
            <Link
              key={`${loja.id}-dup`}
              href="/lojas"
              aria-hidden="true"
              tabIndex={-1}
              className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[200px] transition-transform hover:scale-105"
            >
              <Image
                src={loja.logo}
                alt=""
                width={200}
                height={80}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
