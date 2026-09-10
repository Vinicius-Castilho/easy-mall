// TODO: confirmar o domínio real de produção antes de publicar (usado nas tags de SEO/Open Graph)
export const SITE_URL = "https://easymall.com.br";

// Next.js não herda o objeto `openGraph`/`twitter` entre layout e página —
// cada segmento que declarar o seu substitui o do pai por completo, então
// repetimos essa imagem em cada page.tsx que define metadata própria.
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Fachada do Easy Mall",
};

export const WHATSAPP_EASY = "558186759183";
export const WHATSAPP_LMS = "558186759183";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_EASY}`;
export const WHATSAPP_HREF_LMS = `https://wa.me/${WHATSAPP_LMS}`;
export const PHONE_TEL_HREF = `tel:+${WHATSAPP_EASY}`;
