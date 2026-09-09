'use client';

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      {/*
        popLayout: a página que sai não empurra layout enquanto a nova faz crossfade por cima, sem gap em branco.
        initial (sem ser false, de propósito): AnimatePresence propaga a supressão do "initial" para TODOS os
        motion.* aninhados na primeira renderização — com initial={false} aqui, Hero/Location/PartnerCTA etc.
        nunca tocariam sua própria animação de entrada no primeiro carregamento de cada página.
      */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
