export type CookieConsentValue = "accepted" | "rejected";

const CONSENT_KEY = "easymall_cookie_consent";
const CHANGE_EVENT = "easymall:consent-changed";
const OPEN_EVENT = "easymall:abrir-preferencias-cookies";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const valor = window.localStorage.getItem(CONSENT_KEY);
    return valor === "accepted" || valor === "rejected" ? valor : null;
  } catch {
    return null;
  }
}

export function setCookieConsent(valor: CookieConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, valor);
  } catch {
    // Storage indisponível (modo privado/bloqueado) — segue só com o estado em memória desta sessão.
  }
  window.dispatchEvent(new CustomEvent<CookieConsentValue>(CHANGE_EVENT, { detail: valor }));
}

/** Reabre o banner de cookies, usado pelo botão "Gerenciar preferências" na Política de Cookies. */
export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onCookieConsentChange(callback: (valor: CookieConsentValue) => void) {
  const handler = (e: Event) => callback((e as CustomEvent<CookieConsentValue>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

export function onOpenCookiePreferences(callback: () => void) {
  window.addEventListener(OPEN_EVENT, callback);
  return () => window.removeEventListener(OPEN_EVENT, callback);
}
