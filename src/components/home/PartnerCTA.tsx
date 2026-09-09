'use client';

import Image from "next/image";
import { motion } from "motion/react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { fadeUp, revealOnScroll, staggerContainer } from "@/lib/motion";

export default function PartnerCTA() {
  return (
    <section id="contato" className="py-18 bg-amber-50 overflow-hidden border-t border-easy-green/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 w-full">
        {/* GRID DE OPÇÕES (UX: Lei da Proximidade) */}
        <motion.div
          {...revealOnScroll}
          variants={staggerContainer(0.15)}
          className="flex flex-col xl:flex-row items-stretch justify-between gap-8 w-full"
        >

          {/* CARD PRIMÁRIO: COMERCIALIZAÇÃO (LMS) */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 flex-1 shadow-2xl shadow-easy-blue/5 border-2 border-transparent hover:border-easy-olive/20 transition-all duration-300">

            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-xs font-semibold tracking-normal text-white bg-easy-olive px-3 py-1 rounded-full uppercase mb-4 shadow-sm">
                Comercialização
              </span>
              <p className="text-2xl md:text-3xl font-semibold text-easy-green leading-snug">
                Quer trazer sua marca para o coração da Torre?
              </p>
              <p className="text-base md:text-lg font-medium text-easy-green/70 leading-snug mt-2">
                Fale com a LMS e faça seu cadastro reserva.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 md:border-l md:border-easy-green/10 md:pl-10 shrink-0">
              <Image
                src="/logos/LMS.svg"
                alt="LMS Comercialização"
                width={130}
                height={55}
                className="object-contain"
              />
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a href={PHONE_TEL_HREF} className="flex flex-1 items-center justify-center gap-2 bg-easy-cream hover:bg-easy-green text-easy-green hover:text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-95 border border-easy-green/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Ligar
                </a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#25D366]/20 active:scale-95">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD SECUNDÁRIO: REDES DA TORRE */}
          <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-md rounded-3xl p-8 xl:w-[320px] flex flex-col justify-center gap-6 shadow-lg border border-easy-green/5 shrink-0 hover:bg-white transition-all duration-300">

            <a href="https://instagram.com/easymall.torre" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-easy-green hover:text-easy-olive transition-all group">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all duration-300">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-none mb-1">Instagram</span>
                <span className="text-xs opacity-70">Acompanhe o Easy Mall</span>
              </div>
            </a>

            <div className="w-full h-px bg-easy-green/10"></div>

            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-easy-green hover:text-[#25D366] transition-all group">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all duration-300">
                <WhatsAppIcon className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-none mb-1">WhatsApp</span>
                <span className="text-xs opacity-70">Easy Mall</span>
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
