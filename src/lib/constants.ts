export const SITE_URL = "https://www.easymall.com.br";

// Next.js não herda o objeto `openGraph`/`twitter` entre layout e página —
// cada segmento que declarar o seu substitui o do pai por completo, então
// repetimos essa imagem em cada page.tsx que define metadata própria.
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Fachada do Easy Mall",
};

// Chaves públicas do EmailJS — seguras para expor no client-side por design do serviço.
export const EMAILJS_PUBLIC_KEY = "dMGcRvhkVvyyyaCz3";
export const EMAILJS_SERVICE_ID = "service_jmeabm4";
export const EMAILJS_TEMPLATE_ID = "template_hnkx204";

// Só é carregado no client depois do consentimento do usuário no banner de cookies (ver cookieConsent.ts).
export const GA_MEASUREMENT_ID = "G-F0DG8FJVQ2";

export const WHATSAPP_EASY = "558186759183";
export const WHATSAPP_LMS = "558186759183";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_EASY}`;
export const WHATSAPP_HREF_LMS = `https://wa.me/${WHATSAPP_LMS}`;
export const PHONE_TEL_HREF = `tel:+${WHATSAPP_EASY}`;
