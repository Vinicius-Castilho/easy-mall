'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";


export default function SobreEasyMall() {
    // Referência para controlar o scroll do carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  // Efeito do Temporizador (Autoplay)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Se chegou no final, ele volta suavemente pro começo. Se não, avança uma foto.
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 4000); // Troca de foto a cada 4 segundos

    return () => clearInterval(interval); // Limpa o cronômetro se o usuário sair da página
  }, []);

  // Função dos botões manuais
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <main className="relative pt-32 pb-24 bg-easy-cream min-h-screen overflow-hidden">
      
      {/* BACKGROUND DESIGN: Formas Orgânicas (Blobs) */}
{/* BACKGROUND DESIGN: Ondas Orgânicas e Elementos Flutuantes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* ONDA SUPERIOR ESQUERDA (Camada 1 - Verde Escuro) */}
        <svg className="absolute -top-10 -left-10 w-[600px] md:w-[800px] text-easy-green/10 transform -rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,68.8,-53.9,76.6,-38.4C84.4,-22.9,90,-7.3,87.6,7C85.2,21.3,74.7,34.3,64.1,46.5C53.4,58.7,42.5,70.1,28.7,76.4C14.8,82.7,-2,83.9,-17.1,79.5C-32.2,75.1,-45.6,65,-57.4,53.2C-69.2,41.4,-79.3,27.8,-84.6,12.2C-89.9,-3.4,-90.4,-21,-82.9,-34.5C-75.4,-48,-59.8,-57.4,-44.6,-63.9C-29.4,-70.4,-14.7,-74,-0.1,-73.8C14.4,-73.6,28.9,-69.6,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>

        {/* ONDA SUPERIOR ESQUERDA (Camada 2 - Olive) */}
        {/* <svg className="absolute -top-32 -left-20 w-[500px] md:w-[700px] text-easy-olive/20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-65.7C52.8,-58.5,65.1,-49.6,73.5,-37.5C81.9,-25.4,86.4,-10.1,84.1,4.4C81.8,18.9,72.7,32.6,61.9,43.5C51.1,54.4,38.6,62.5,24.8,68.6C11,74.7,-4.1,78.8,-18.2,76C-32.3,73.2,-45.4,63.5,-57.4,51.8C-69.4,40.1,-80.3,26.4,-84.5,10.9C-88.7,-4.6,-86.2,-21.9,-77.2,-35.6C-68.2,-49.3,-52.7,-59.4,-38.3,-66C-23.9,-72.6,-11.9,-75.7,1.1,-77.3C14.1,-78.9,27,-72.9,39.9,-65.7Z" transform="translate(100 100)" />
        </svg> */}

        {/* ONDA INFERIOR DIREITA (Olive) */}
        <svg className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] text-easy-olive/20 transform rotate-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M51.9,-70.6C66,-61.4,75.3,-45.3,81.1,-28.1C86.9,-10.9,89.2,7.4,83.9,23.5C78.6,39.6,65.7,53.5,50.7,64.1C35.7,74.7,18.6,82,-0.2,82.3C-19,82.6,-38,75.9,-53.4,65.2C-68.8,54.5,-80.6,39.8,-85.7,23.2C-90.8,6.6,-89.2,-11.9,-81.4,-27.2C-73.6,-42.5,-59.6,-54.6,-44.4,-63.3C-29.2,-72,-14.6,-77.3,1.4,-79.3C17.4,-81.3,34.8,-80,51.9,-70.6Z" transform="translate(100 100)" />
        </svg>

        {/* ONDA INFERIOR ESQUERDA (Verde Base) */}
        <svg className="absolute -bottom-20 -left-32 w-[400px] md:w-[600px] text-easy-green/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-72.9C56.6,-66.2,70.1,-55.9,78.8,-42.4C87.5,-28.9,91.4,-12.2,89,3.7C86.6,19.6,77.9,34.7,66.8,47.1C55.7,59.5,42.2,69.2,27.1,75.2C12,81.2,-4.7,83.5,-21.2,79.8C-37.7,76.1,-54,66.4,-66.8,53.4C-79.6,40.4,-88.9,24.1,-90.6,7.2C-92.3,-9.7,-86.4,-27.2,-75.6,-40.7C-64.8,-54.2,-49.1,-63.7,-34.1,-69.8C-19.1,-75.9,-4.8,-78.6,9.5,-78.6C23.8,-78.6,38.1,-75.9,42.7,-72.9Z" transform="translate(100 100)" />
        </svg>

        {/* ELEMENTOS FLUTUANTES (Sementes / Gotas) */}
        {/* Gotinha superior esquerda */}
        <div className="absolute top-32 left-[20%] w-6 h-10 bg-easy-green/20 rounded-[50%] transform rotate-45" />
        
        {/* Gotinha centro topo */}
        <div className="absolute top-24 left-1/2 w-4 h-6 bg-easy-olive/30 rounded-[50%] transform -rotate-12" />
        <div className="absolute top-20 left-[52%] w-2 h-2 bg-easy-green/20 rounded-full" />

        {/* Gotinha direita topo */}
        <div className="absolute top-48 right-[30%] w-5 h-8 bg-easy-olive/20 rounded-[50%] transform rotate-12" />

        {/* Gotinha centro baixo (Perto do texto) */}
        <div className="absolute bottom-48 left-[40%] w-8 h-4 bg-easy-green/10 rounded-[50%] transform -rotate-12" />
        <div className="absolute bottom-40 left-[45%] w-3 h-3 bg-easy-olive/20 rounded-full" />

      </div>

      <div className="relative z-10">
            {/* 1. SEÇÃO HERO: Título e Imagem com Design Orgânico */}
            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-24">
              
              <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Aumentamos a base para 4xl, sm para 5xl. No lg mantemos 5xl para não berrar no notebook */}
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-easy-green font-heading leading-tight">
                  Mais do que um mall. <br className="hidden md:block" />
                  Um jeito fácil de <br className="hidden md:block" />
                  <span className="text-easy-olive underline decoration-easy-blue/30 decoration-8 underline-offset-4">
                      viver a cidade.
                  </span>
                </h1>
                    
                {/* Aumentamos o subtítulo para text-xl e em tablets (md) para 2xl */}
                <p className="text-xl md:text-2xl lg:text-xl text-easy-green/70 max-w-md md:max-w-xl font-medium">
                  Um espaço pensado estrategicamente para o seu negócio e estilo de vida.
                </p>
              </div>

                {/* Coluna da Imagem (Reduzida no mobile, 100% no Desktop) */}
                <div className="order-1 lg:order-2 relative w-[85%] md:w-[75%] lg:w-full mx-auto">
                    {/* Elemento de design atrás da imagem */}
                    <div className="absolute -inset-4 bg-easy-olive/20 rounded-[3rem] rotate-3 z-0" />
                    <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10">
                    <Image
                        src="/images/Easy Mall.jpg"
                        alt="Visão do Easy Mall"
                        fill
                        className="object-cover"
                        priority
                    />
                    </div>
                </div>
            </section>

            {/* 2. SEÇÃO DE TEXTOS INSTITUCIONAIS */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative">
            <div className="space-y-8 text-lg md:text-xl text-easy-green/80 leading-relaxed font-medium">
                <p className="border-l-4 border-easy-olive pl-6">
                O Easy Mall é um novo conceito de shopping de vizinhança, planejado para estar próximo, prático e integrado ao dia a dia das pessoas.
                </p>
                <p className="pl-7">
                Um espaço que traz ao público uma forma diferente de viver a cidade: mais prática, acessível, segura e acolhedora.
                </p>
                <p className="pl-7">
                Aqui, o tempo ganha um novo ritmo. A cidade não corre, ela flui. E cada detalhe foi pensado para quem valoriza o ir e vir, mas também o parar, o encontrar, o pertencer.
                </p>
            </div>
            </section>

            {/* 3. GALERIA DE 4 FOTOS (Grid Harmonizado) */}
    {/* 3. GALERIA DE 4 FOTOS (Carrossel Interativo no Mobile / Grid no Desktop) */}
            <section className="max-w-7xl mx-auto px-6 mb-20 relative">
            
                {/* Container do Carrossel com a ref */}
                <div 
                    ref={carouselRef}
                    className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {[1, 2, 3, 4].map((item) => (
                    <div 
                        key={item} 
                        className="relative aspect-square w-[80vw] sm:w-[50vw] md:w-auto shrink-0 snap-center md:snap-align-none rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer border-2 border-white"
                    >
                        <Image
                        src={`/images/galeria-${item}.jpg`}
                        alt={`Foto ${item} do Easy Mall`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-easy-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    ))}
                </div>

                {/* Botões de Controle (Ocultos no Desktop, visíveis apenas no Mobile) */}
                <div className="flex md:hidden justify-center gap-6 mt-4">
                    <button 
                    onClick={() => scroll('left')} 
                    className="p-3 bg-white text-easy-green border-2 border-easy-green/10 rounded-full shadow-md hover:bg-easy-green hover:text-white transition-colors active:scale-90"
                    aria-label="Foto anterior"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                    onClick={() => scroll('right')} 
                    className="p-3 bg-white text-easy-green border-2 border-easy-green/10 rounded-full shadow-md hover:bg-easy-green hover:text-white transition-colors active:scale-90"
                    aria-label="Próxima foto"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </section>

            {/* 4. SEÇÃO SOBRE A TORRE PARTICIPAÇÕES */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
            <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white grid md:grid-cols-12 gap-10 items-center">
                {/* Logo da Torre em destaque */}
                <div className="max-w-sm mx-auto md:col-span-4 flex justify-center items-center p-10 bg-easy-green rounded-[2rem] aspect-square shadow-xl">
                <Image
                    src="/images/logo-torre-branca.svg"
                    alt="Torre Participações"
                    width={200}
                    height={100}
                    className="object-contain"
                />
                </div>
                
                <div className="md:col-span-8 space-y-4">
                <h2 className="text-2xl font-bold text-easy-green uppercase tracking-widest text-sm">Realização</h2>
                <p className="text-easy-green/80 text-lg leading-relaxed font-medium">
                    O Easy Mall nasce da força da <strong className="text-easy-green">Torre Participações</strong>, grupo empresarial familiar com sólida trajetória e origem em um histórico grupo financeiro, industrial e de comércio internacional.
                </p>
                <p className="text-easy-green/80 text-lg leading-relaxed">
                    Fruto desse legado, o empreendimento une tradição e visão de futuro para oferecer mais comodidade, bem-estar e serviços de qualidade à região da Torre.
                </p>
                </div>
            </div>
            </section>

            {/* 5. CTAS FINAIS (Grid Responsivo) */}
            <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <Link href="/#lojas" className="bg-white/60 backdrop-blur-sm border-2 border-easy-green/5 rounded-3xl p-8 flex items-center justify-center text-center hover:bg-white hover:border-easy-olive hover:shadow-xl transition-all group">
                <span className="text-lg font-bold text-easy-green group-hover:text-easy-olive transition-colors">Conheça as lojas</span>
                </Link>

                <Link href="/#contato" className="bg-easy-green rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-easy-olive hover:shadow-2xl transition-all group active:scale-95">
                <span className="text-white font-bold text-lg mb-1">É lojista?</span>
                <span className="text-xs text-white/70">Consulte espaços disponíveis</span>
                </Link>

                <Link href="/#localizacao" className="bg-white/60 backdrop-blur-sm border-2 border-easy-green/5 rounded-3xl p-8 flex items-center justify-center text-center hover:bg-white hover:border-easy-olive hover:shadow-xl transition-all group">
                <span className="text-lg font-bold text-easy-green group-hover:text-easy-olive transition-colors">Como chegar</span>
                </Link>

                <a href="https://wa.me/5581900000000" target="_blank" className="flex items-center justify-center gap-4 bg-[#25D366]/10 rounded-3xl p-8 hover:bg-[#25D366] group transition-all duration-500">
                <div className="text-[#25D366] group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div className="flex flex-col font-bold text-easy-green group-hover:text-white transition-colors">
                    <span className="text-sm">WhatsApp</span>
                    <span className="text-xs opacity-70">Torre</span>
                </div>
                </a>

            </div>
            </section>
      </div>
    </main>
  );
}