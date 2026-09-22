'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { getCookieConsent, setCookieConsent, onOpenCookiePreferences, type CookieConsentValue } from "@/lib/cookieConsent";

export default function CookieConsent() {
  // Inicialização preguiçosa: este componente só é montado no client (ver dynamic import
  // com ssr:false no layout), então já lê o localStorage de cara, sem precisar de efeito.
  const [visivel, setVisivel] = useState(() => getCookieConsent() === null);

  useEffect(() => onOpenCookiePreferences(() => setVisivel(true)), []);

  const escolher = (valor: CookieConsentValue) => {
    setCookieConsent(valor);
    setVisivel(false);
  };

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-60 p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-easy-green/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <p className="text-sm text-easy-green/80 leading-relaxed flex-1">
              Usamos cookies essenciais para o funcionamento do Site e, mediante o seu consentimento,
              cookies analíticos para entender como você navega. Saiba mais nos nossos{" "}
              <Link
                href="/termos-de-uso"
                className="underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
              >
                Termos de Uso
              </Link>{" "}
              e na nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => escolher("rejected")}
                className="flex-1 sm:flex-none border-2 border-easy-green/20 text-easy-green font-semibold px-5 py-2.5 rounded-full hover:border-easy-green transition-colors text-sm active:scale-95"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => escolher("accepted")}
                className="flex-1 sm:flex-none bg-easy-green text-white font-semibold px-5 py-2.5 rounded-full hover:bg-easy-olive transition-colors text-sm active:scale-95"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
