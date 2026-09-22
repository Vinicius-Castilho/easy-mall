'use client';

import { useEffect, useState } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/constants";
import { getCookieConsent, onCookieConsentChange } from "@/lib/cookieConsent";

export default function GoogleAnalytics() {
  // Inicialização preguiçosa: este componente só é montado no client (ver dynamic import
  // com ssr:false no layout), então já lê o localStorage de cara, sem precisar de efeito.
  const [permitido, setPermitido] = useState(() => getCookieConsent() === "accepted");

  useEffect(() => onCookieConsentChange((valor) => setPermitido(valor === "accepted")), []);

  if (!permitido || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
