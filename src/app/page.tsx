import Image from "next/image";
import Link from "next/link";

import Location from "@/components/Location";


export default function Home() {

  const lojistas = [
    { id: 'probel', name: 'Probel' },
    { id: 'pague-menos', name: 'Pague Menos' },
    { id: 'rutra', name: 'Rutra' },
    { id: 'bolo-vo-alzira', name: 'Bolo Vó Alzira' },
    { id: 'browbar', name: 'BrowBar' },
    { id: 'alberis', name: 'Alberis' }
  ];

  return (
    <>
      
      {/* MAIN */}
      <main className="bg-easy-cream">          
          {/* HERO */}
          {/* AJUSTE: pb-40 inserido para garantir a "safe zone" no tablet */}
          <section className="relative min-h-[85svh] flex items-center px-6 pt-24 pb-4 lg:py-20 z-10 overflow-hidden">            
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <svg className="absolute -top-20 -left-20 w-[600px] h-[600px] text-easy-olive" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="currentColor"/>
              </svg>
            </div>

            {/* AJUSTE: gap-8 md:gap-10 lg:gap-12 para o grid não espremer em telas médias */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full z-10 relative">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded bg-easy-lavender/20 text-easy-green font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                  Lançamento 2026
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold text-easy-green mb-6">
                  Praticidade no <br />
                  <span className="text-easy-olive">coração da Torre.</span>
                </h1>

                <p className="text-base md:text-lg text-easy-green/80 max-w-md mb-8 mx-auto lg:mx-0">
                  Um espaço pensado estrategicamente para o seu negócio e estilo de vida.
                </p>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="mt-4 relative w-full max-w-[320px] md:max-w-[450px] aspect-square">
                  <div className="absolute inset-0 bg-easy-blue rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-90"></div>
                  <div className="absolute inset-4 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] ">
                    <Image
                      src="/images/Easy Mall.jpg"
                      alt="Visão do Easy Mall"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80} // Opcional: reduz um pouco o peso sem perder nitidez visual
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LOJAS */}
          <section id="lojas" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-12 text-center lg:text-left">
              <h2 className="text-sm font-bold tracking-[0.3em] text-easy-green/70 uppercase">
                Nossas lojas
              </h2>
            </div>

            <div className="flex overflow-hidden py-10">
              {/* AJUSTE: w-max adicionado (vital para o movimento) e pausa no hover */}
              <div className="flex w-max gap-12 md:gap-20 items-center whitespace-nowrap px-10 animate-marquee hover:[animation-play-state:paused]">
                {[...lojistas, ...lojistas].map((logo, index) => (
                  <Link
                    key={index}
                    href="/lojas"
                    className="flex-shrink-0 min-w-[140px] md:min-w-[200px] flex justify-center transition-transform hover:scale-105"
                  >
                    <Image
                      src={`/logos/${logo.id}.svg`}
                      alt={logo.name}
                      width={200}
                      height={80}
                      className="h-10 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* LOCALIZAÇÃO */}
          <Location />

          {/* SEÇÃO EMPREENDEDOR / QUEM ASSINA */}
        <section id="contato" className="py-18 bg-amber-50 overflow-hidden border-t border-easy-green/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 w-full">
            
            {/* TÍTULO CHAMATIVO (UX: Hierarquia Visual) */}
            <div className="text-center xl:text-left px-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-easy-green tracking-tight mb-4 leading-tight">
                Traga sua marca para o <br className="hidden md:block"/>
                <span className="text-easy-olive">coração da Torre.</span>
              </h2>
              <p className="text-lg text-easy-green/70 max-w-2xl mx-auto xl:mx-0 font-medium">
                Conecte seu negócio ao mall mais estratégico da região. Fale com nossa equipe comercial.
              </p>
            </div>

            {/* GRID DE OPÇÕES (UX: Lei da Proximidade) */}
            <div className="flex flex-col xl:flex-row items-stretch justify-between gap-8 w-full">

              {/* CARD PRIMÁRIO: COMERCIALIZAÇÃO (LMS) */}
              <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 flex-1 shadow-2xl shadow-easy-blue/5 border-2 border-transparent hover:border-easy-olive/20 transition-all duration-300">
                
                {/* Texto Lojista */}
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block text-xs font-bold tracking-widest text-white bg-easy-olive px-3 py-1 rounded-full uppercase mb-4 shadow-sm">
                    Comercialização
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-easy-green leading-snug">
                    Consulte os espaços <br className="hidden md:block"/> 
                    disponíveis e venha <br className="hidden md:block"/> 
                    fazer parte.
                  </p>
                </div>

                {/* Ações e Logo */}
                <div className="flex flex-col items-center justify-center space-y-6 md:border-l md:border-easy-green/10 md:pl-10 shrink-0">
                  <Image 
                    src="/logos/LMS.svg" 
                    alt="LMS Comercialização" 
                    width={130} 
                    height={55} 
                    className="object-contain" 
                  />
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a href="tel:+5581900000000" className="flex flex-1 items-center justify-center gap-2 bg-easy-cream hover:bg-easy-green text-easy-green hover:text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all active:scale-95 border border-easy-green/10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      Ligar
                    </a>
                    <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20 active:scale-95">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD SECUNDÁRIO: REDES DA TORRE (Fundo translúcido, agrupa os contatos menores) */}
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 xl:w-[320px] flex flex-col justify-center gap-6 shadow-lg border border-easy-green/5 shrink-0 hover:bg-white transition-all duration-300">
                
                {/* Instagram Oficial */}
                <a href="https://instagram.com/easymall.torre" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-easy-green hover:text-easy-olive transition-all group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all duration-300">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none mb-1">Instagram</span>
                    <span className="text-xs opacity-70">Acompanhe o Mall</span>
                  </div>
                </a>

                <div className="w-full h-px bg-easy-green/10"></div>

                {/* Whatsapp Torre Oficial */}
                <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-easy-green hover:text-[#25D366] transition-all group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none mb-1">WhatsApp</span>
                    <span className="text-xs opacity-70">Torre Participações</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>
            
      </main>
    </>
  );
}