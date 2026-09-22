'use client';

import { abrirPreferenciasCookies } from "@/lib/cookieConsent";

export default function GerenciarCookiesLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={abrirPreferenciasCookies} className={className}>
      Gerenciar Cookies
    </button>
  );
}
