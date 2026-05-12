'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function ContatoEasyMall() {
  // Estados do formulário prontos para sua API
  const [motivo, setMotivo] = useState("");
  const [termoUso, setTermoUso] = useState(false);
  const [aceitaMarketing, setAceitaMarketing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entra o fetch para a sua rota de backend/API
    console.log("Enviando...", { motivo, termoUso, aceitaMarketing });
    alert("Formulário pronto para ser conectado!");
  };

  const motivos = ["Comercial", "Dúvida", "Elogio", "Sugestão", "Reclamação"];

  return (
    <main className="relative pt-24 lg:pt-28 pb-20 bg-easy-cream min-h-screen overflow-hidden font-sans">
      
      {/* BACKGROUND SUTIL */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-easy-olive/10 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-easy-green/5 rounded-full blur-[120px] transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO & LMS (Topo) */}
        {/* Reduzimos a margem inferior para economizar espaço vertical */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Trocamos gap-10 por gap-6 lg:gap-8. Isso puxa o card para cima. */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-8">
            
            {/* Título Principal */}
            <div className="text-center lg:text-left">
              {/* mb-6 virou mb-4 */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-easy-green tracking-tight leading-tight mb-4">
                Sua marca no <br className="hidden md:block"/>
                <span className="text-easy-olive underline decoration-easy-blue/30 decoration-8 underline-offset-4">Easy Mall.</span>
              </h1>
              <p className="text-lg md:text-xl text-easy-green/80 max-w-lg font-medium mx-auto lg:mx-0">
                Fale com nosso time comercial para conhecer a oportunidade de locação e fazer parte do novo mall de conveniência da Torre.
              </p>
            </div>

            {/* Bloco Comercialização (LMS) */}
            {/* Reduzimos um pouco o padding interno no desktop para p-6 lg:p-8 */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-easy-blue/5 border-2 border-transparent hover:border-easy-olive/20 transition-all duration-300 w-full max-w-lg mx-auto lg:mx-0">
              <span className="inline-block text-xs font-bold tracking-widest text-white bg-easy-olive px-3 py-1 rounded-full uppercase mb-4 shadow-sm">
                Comercialização
              </span>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Logo levemente menor para caber melhor na linha */}
                <Image 
                  src="/logos/LMS.svg" 
                  alt="LMS Comercialização" 
                  width={120} 
                  height={50} 
                  className="object-contain" 
                />
                <div className="flex flex-col gap-3 w-full">
                  {/* Botões levemente mais compactos (px-5 py-2.5) */}
                  <a href="tel:+5581900000000" className="flex items-center justify-center gap-2 bg-easy-cream hover:bg-easy-green text-easy-green hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 border border-easy-green/10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Ligar
                  </a>
                  <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20 active:scale-95">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
            <div className="relative aspect-video lg:aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-easy-blue rounded-[3rem] opacity-90 shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 overflow-hidden rounded-[3rem] border-4 border-white">
                <Image
                  src="/images/Easy Mall.jpg"
                  alt="Visão do Easy Mall"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. FORMULÁRIO DE CONTATO */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-easy-green/5 relative">
            
            <h2 className="text-2xl font-bold text-easy-green mb-8">
              Em caso de dúvidas, críticas ou sugestões, entre em contato:
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Motivo do Contato (Pills para melhor UX) */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-easy-green/70 uppercase tracking-wide">Motivo do Contato</label>
                <div className="flex flex-wrap gap-3">
                  {motivos.map((op) => (
                    <button
                      key={op}
                      type="button"
                      onClick={() => setMotivo(op)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                        motivo === op 
                        ? 'bg-easy-green border-easy-green text-white shadow-md' 
                        : 'bg-white border-easy-green/10 text-easy-green/70 hover:border-easy-olive'
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs Padrão */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-sm font-bold text-easy-green/70">Nome</label>
                  <input type="text" id="nome" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefone" className="block text-sm font-bold text-easy-green/70">WhatsApp</label>
                  <input type="tel" id="telefone" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="(81) 90000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-easy-green/70">E-mail</label>
                <input type="email" id="email" required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="block text-sm font-bold text-easy-green/70">Mensagem</label>
                <textarea id="mensagem" rows={4} required className="w-full bg-easy-cream/50 border-2 border-easy-green/10 rounded-2xl px-5 py-4 focus:border-easy-olive focus:outline-none transition-colors text-easy-green resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>

              {/* Checkboxes de Privacidade */}
              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" checked={termoUso} onChange={(e) => setTermoUso(e.target.checked)} required className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-easy-green/30 rounded focus:ring-2 focus:ring-easy-olive peer-checked:bg-easy-green peer-checked:border-easy-green transition-all"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm text-easy-green/80 group-hover:text-easy-green transition-colors">
                    Li e concordo com os Termos de Uso e a Política de Privacidade do Easy Mall.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" checked={aceitaMarketing} onChange={(e) => setAceitaMarketing(e.target.checked)} className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-easy-green/30 rounded focus:ring-2 focus:ring-easy-olive peer-checked:bg-easy-green peer-checked:border-easy-green transition-all"></div>
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm text-easy-green/80 group-hover:text-easy-green transition-colors">
                    Autorizo o Easy Mall a enviar novidades, ofertas e comunicações por e-mail e WhatsApp.
                  </span>
                </label>
              </div>

              <button type="submit" className="w-full sm:w-auto bg-easy-green text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-easy-olive hover:shadow-xl transition-all active:scale-95 mt-6">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

        {/* 3. CTAS FINAIS (Mantendo a consistência do projeto) */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            <Link href="/sobre" className="bg-white/60 backdrop-blur-sm border-2 border-easy-green/5 rounded-3xl p-8 flex items-center justify-center text-center hover:bg-white hover:border-easy-olive hover:shadow-xl transition-all group">
              <span className="text-xl font-bold text-easy-green group-hover:text-easy-olive transition-colors">
                O Easy Mall
              </span>
            </Link>

            <Link href="/lojas" className="bg-easy-green rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-easy-olive hover:shadow-2xl transition-all group active:scale-95">
              <span className="text-lg font-bold text-white mb-2">Conheça</span>
              <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                nossas lojas.
              </span>
            </Link>

            <Link href="/#localizacao" className="bg-white/60 backdrop-blur-sm border-2 border-easy-green/5 rounded-3xl p-8 flex items-center justify-center text-center hover:bg-white hover:border-easy-olive hover:shadow-xl transition-all group">
              <span className="text-xl font-bold text-easy-green group-hover:text-easy-olive transition-colors">
                Como chegar
              </span>
            </Link>

            <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-[#25D366]/10 rounded-3xl p-8 hover:bg-[#25D366] group transition-all duration-500">
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