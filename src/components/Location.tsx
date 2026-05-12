'use client';

import Image from "next/image";

export default function Location() {
  // Coordenadas exatas extraídas do seu OpenStreetMap
  const lat = "-8.040432";
  const lng = "-34.908714";
  
  // O endereço por extenso para exibição visual
  const address = "Rua José Bonifácio - Torre, Recife - PE, 50710-000";

  // Links de GPS usando as coordenadas exatas (bulletproof)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const universalMapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <section id="localizacao" className="py-14 bg-easy-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-base lg:text-lg font-bold tracking-[0.3em] text-easy-green/70 uppercase mb-4">
              Localização
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-easy-green font-heading leading-tight">
              Onde a praticidade <br className="md:hidden" /> <span className="text-easy-olive">se encontra.</span>
            </h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Coluna de Informações e Botões */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-easy-green/5">
              <h4 className="text-xl font-bold text-easy-green mb-4">Endereço</h4>
              <p className="text-easy-green/70 leading-relaxed mb-8">
                {address}
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-easy-green text-easy-cream py-4 rounded-full font-bold hover:bg-easy-olive transition-all shadow-md active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Navegar com Google Maps
                </a>

                <a 
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border-2 border-easy-green text-easy-green py-4 rounded-full font-bold hover:bg-easy-green hover:text-easy-cream transition-all active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 10c0-4.69-3.81-8.5-8.5-8.5S1.5 5.31 1.5 10c0 3.32 1.9 6.2 4.67 7.6l-1.17 2.4c-.1.2.04.45.26.45h1.5c.1 0 .2-.06.25-.15l1.2-2.3h3.58c3.81 0 6.91-3.1 6.91-6.9v-.1z"/>
                  </svg>
                  Navegar com Waze
                </a>
              </div>
            </div>
          </div>

          {/* Coluna do Mapa (Imagem Estática Otimizada com Link) */}

{/* O w-[90%] md:w-[75%] diminui o tamanho no mobile/tablet, e o lg:w-full devolve ao normal no Desktop. mx-auto centraliza. */}
          <div className="lg:col-span-3 w-[90%] md:w-[75%] lg:w-full mx-auto aspect-[4/3] md:aspect-video lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2 relative group cursor-pointer bg-gray-100">
            <a 
              href={universalMapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image
                src="/images/mapa.jpg"
                alt="Localização do Easy Mall no mapa"
                // O fill continua aqui respeitando a proporção da caixa pai
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay escuro elegante que aparece no hover avisando que é clicável */}
              <div className="absolute inset-0 bg-easy-green/0 group-hover:bg-easy-green/20 transition-colors duration-500 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 bg-white text-easy-green font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                   Traçar Rota
                 </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}