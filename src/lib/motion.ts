import type { Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

/** Container que escalona a entrada dos filhos (cada filho precisa de suas próprias variants, ex.: fadeUp). */
export function staggerContainer(stagger = 0.18, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Props prontas para revelar uma seção ao entrar no viewport (scroll). */
export const revealOnScroll = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.25, margin: "0px 0px -10% 0px" },
};
