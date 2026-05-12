import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-easy-green pt-16 pb-8 border-t border-white/10 text-easy-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/marca-easy-mall.svg" 
              alt="Easy Mall"
              width={160}
              height={48}
              // O 'brightness-0 invert' é um hack de CSS para forçar a logo a ficar branca 
              // caso o seu SVG original seja escuro. Se a logo original já for clara, pode tirar essa classe.
              className="object-contain brightness-0 invert" 
            />
          </Link>

          {/* Navegação Rápida */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-bold uppercase tracking-widest text-easy-cream/70">
            <Link href="/sobre" className="hover:text-easy-olive hover:text-easy-cream transition-colors">O Easy Mall</Link>
            <Link href="/lojas" className="hover:text-easy-olive hover:text-easy-cream transition-colors">Lojas</Link>
            <Link href="/#localizacao" className="hover:text-easy-olive hover:text-easy-cream transition-colors">Como chegar</Link>
            <Link href="/contato" className="hover:text-easy-olive hover:text-easy-cream transition-colors">Contato</Link>
          </nav>
        </div>

        {/* Linha separadora */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Copyright e Assinatura */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-easy-cream/50">
          <p>© {currentYear} Easy Mall. Todos os direitos reservados.</p>
          <p>
            Uma realização <span className="font-bold text-easy-cream/80">Torre Participações</span>
          </p>
        </div>

      </div>
    </footer>
  );
}