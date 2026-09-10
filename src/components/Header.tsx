'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/sobre", label: "O Easy Mall" },
  { href: "/lojas", label: "Lojas" },
  { href: "/#localizacao", label: "Como chegar" },
  { href: "/#contato", label: "Lojista" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile

  // Na home, o logo só rola para o topo; nas demais páginas, navega para a home
  const handleLogoClick = (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // Se rolou a tela OU se o menu mobile estiver aberto, aplica o fundo
        scrolled || menuOpen
          ? "bg-easy-cream/95 backdrop-blur-md shadow-lg border-b border-easy-green/10 py-4"
          : "bg-transparent border-transparent shadow-none py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src="/images/marca-easy-mall.svg"
            alt="Easy Mall"
            width={180}
            height={54}
            priority
            className="object-contain"
          />
        </Link>

        {/* --- MENU DESKTOP --- */}
        {/* Usamos lg:flex para só aparecer acima de 1024px */}
        <nav className="hidden lg:flex gap-10 items-center text-sm font-medium uppercase tracking-normal text-easy-green">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-easy-olive transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className="font-semibold bg-easy-green text-easy-cream px-8 py-3 rounded-full hover:bg-easy-olive hover:text-easy-green transition-all shadow-md">
            Contato
          </Link>
        </nav>

        {/* --- BOTÃO MOBILE (HAMBÚRGUER) --- */}
        <button
          className="lg:hidden text-easy-green p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            // Ícone X (Fechar)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone Hambúrguer (Abrir)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MENU MOBILE ABERTO --- */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-easy-cream/95 backdrop-blur-md shadow-xl border-b border-easy-green/10 flex flex-col px-6 py-8 gap-6 text-center transition-all">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-easy-green uppercase tracking-normal hover:text-easy-olive"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="bg-easy-green text-easy-cream px-8 py-4 mt-4 rounded-full font-semibold hover:bg-easy-olive hover:text-easy-green transition-all shadow-md mx-auto w-full max-w-sm">
            Fale Conosco
          </Link>
        </div>
      )}
    </header>
  );
}
