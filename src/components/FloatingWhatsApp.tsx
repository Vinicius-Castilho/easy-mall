import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_HREF_LMS } from "@/lib/constants";

/**
 * Botão flutuante fixo no canto inferior direito, sobre praticamente todo o
 * site. z-40 é proposital: fica abaixo do Header (z-50), que no mobile inclui
 * o menu aberto — assim o menu mobile sempre sobrepõe este botão, e não o
 * contrário.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF_LMS}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a LMS"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-transform duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsAppIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
}
