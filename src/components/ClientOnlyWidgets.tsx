'use client';

import dynamic from "next/dynamic";

// ssr:false só é permitido a partir de um Client Component — por isso esse
// wrapper existe, já que o layout raiz é Server Component (exporta metadata).
// Ambos leem o consentimento salvo no localStorage já no primeiro render, e o
// HTML do servidor não tem acesso a essa API, então precisam ficar fora do SSR.
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), { ssr: false });

export default function ClientOnlyWidgets() {
  return (
    <>
      <GoogleAnalytics />
      <CookieConsent />
    </>
  );
}
