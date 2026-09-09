'use client';

import Link from "next/link";
import { motion } from "motion/react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { fadeUp, revealOnScroll, staggerContainer } from "@/lib/motion";

export type CtaTile =
  | { variant: "outline"; href: string; label: string }
  | { variant: "solid"; href: string; title: string; subtitle: string }
  | { variant: "whatsapp"; href: string; title: string; subtitle: string }
  | { variant: "olive"; href: string; title: string; subtitle: string };

export default function FinalCtaGrid({ tiles }: { tiles: CtaTile[] }) {
  return (
    <motion.section {...revealOnScroll} variants={staggerContainer(0.1)} className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiles.map((tile, i) => {
          if (tile.variant === "outline") {
            return (
              <motion.div key={i} variants={fadeUp}>
                <Link href={tile.href} className="bg-white/60 backdrop-blur-sm border-2 border-easy-green/5 rounded-3xl p-8 flex items-center justify-center text-center hover:bg-white hover:border-easy-olive hover:shadow-xl transition-all group h-full">
                  <span className="text-xl font-semibold text-easy-green group-hover:text-easy-olive transition-colors">{tile.label}</span>
                </Link>
              </motion.div>
            );
          }

          if (tile.variant === "solid") {
            return (
              <motion.div key={i} variants={fadeUp}>
                <Link href={tile.href} className="bg-easy-green rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-easy-olive hover:shadow-2xl transition-all group active:scale-95 h-full">
                  <span className="text-lg font-semibold text-white mb-2">{tile.title}</span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">{tile.subtitle}</span>
                </Link>
              </motion.div>
            );
          }

          if (tile.variant === "whatsapp") {
            return (
              <motion.a
                key={i}
                variants={fadeUp}
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366]/10 rounded-3xl p-8 hover:bg-[#25D366] group transition-all duration-500"
              >
                <div className="text-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col font-semibold text-easy-green group-hover:text-white transition-colors">
                  <span className="text-sm">{tile.title}</span>
                  <span className="text-xs opacity-70">{tile.subtitle}</span>
                </div>
              </motion.a>
            );
          }

          return (
            <motion.a
              key={i}
              variants={fadeUp}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center gap-1 bg-easy-olive/10 rounded-3xl p-8 hover:bg-easy-olive group transition-all duration-500 h-full"
            >
              <span className="text-lg font-semibold text-easy-green group-hover:text-white transition-colors">{tile.title}</span>
              <span className="text-sm text-easy-green/70 group-hover:text-white/80 transition-colors">{tile.subtitle}</span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
