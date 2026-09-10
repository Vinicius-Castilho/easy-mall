'use client';

import { motion } from "motion/react";

/**
 * Fundo animado padrão do site: gradiente "aurora" deslizando por transform
 * (compositor-only, leve) + uma textura de grão bem sutil por cima.
 * Precisa de um pai com `relative overflow-hidden`.
 */
export default function AuroraBackground() {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "10%", "0%"], opacity: [0.45, 0.22, 0.45] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute -inset-1/4 blur-2xl will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, var(--color-easy-olive) 10%, var(--color-easy-lavender) 22%, var(--color-easy-cream) 38%, var(--color-easy-olive) 50%)",
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
    </>
  );
}
