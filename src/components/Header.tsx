'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile

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
        <Link href="/" onClick={() => setMenuOpen(false)}>
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
        <nav className="hidden lg:flex gap-10 items-center text-sm font-medium uppercase tracking-tight text-easy-green">
          <Link href="/sobre" className="hover:text-easy-olive transition-colors">O Easy Mall</Link>
          <Link href="/lojas" className="hover:text-easy-olive transition-colors">Lojas</Link>
          <Link href="/#localizacao" className="hover:text-easy-olive transition-colors">Como chegar</Link>
          <Link href="/#contato" className="hover:text-easy-olive transition-colors">Lojista</Link>
          <Link href="/contato" className="bg-easy-green text-easy-cream px-8 py-3 rounded-full hover:bg-easy-olive hover:text-easy-green transition-all shadow-md">
            Fale Conosco
          </Link>
        </nav>

        {/* --- BOTÃO MOBILE (HAMBÚRGUER) --- */}
        <button 
          className="lg:hidden text-easy-green p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            // Ícone X (Fechar)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone Hambúrguer (Abrir)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MENU MOBILE ABERTO --- */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-easy-cream/95 backdrop-blur-md shadow-xl border-b border-easy-green/10 flex flex-col px-6 py-8 gap-6 text-center transition-all">
          <Link href="/sobre" onClick={() => setMenuOpen(false)} className="text-lg font-bold text-easy-green uppercase tracking-wide hover:text-easy-olive">
            O Easy Mall
          </Link>
          <Link href="/lojas" onClick={() => setMenuOpen(false)} className="text-lg font-bold text-easy-green uppercase tracking-wide hover:text-easy-olive">
            Lojas
          </Link>
          <Link href="/#localizacao" onClick={() => setMenuOpen(false)} className="text-lg font-bold text-easy-green uppercase tracking-wide hover:text-easy-olive">
            Como chegar
          </Link>
          <Link href="/#contato" onClick={() => setMenuOpen(false)} className="text-lg font-bold text-easy-green uppercase tracking-wide hover:text-easy-olive">
            Lojista
          </Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="bg-easy-green text-easy-cream px-8 py-4 mt-4 rounded-full font-bold hover:bg-easy-olive hover:text-easy-green transition-all shadow-md mx-auto w-full max-w-sm">
            Fale Conosco
          </Link>
        </div>
      )}
    </header>
  );
}