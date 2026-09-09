'use client';

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, revealOnScroll, scaleIn, staggerContainer } from "@/lib/motion";

const MAP_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EAB4QAAICAAcAAAAAAAAAAAAAAAECAAMEESIjMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A0StqOcShbziyWO11KhWvkBzJpf/Z";

export default function Location() {
  // Coordenadas exatas extraídas do seu OpenStreetMap
  const lat = "-8.040432";
  const lng = "-34.908714";
  
  // O endereço por extenso para exibição visual
  const address = "Rua José Bonifácio, 1210 Torre Recife, PE, 50710-000";

  // Links de GPS usando as coordenadas exatas (bulletproof)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const universalMapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <section id="localizacao" className="py-20 bg-easy-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...revealOnScroll} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-base lg:text-lg font-semibold tracking-normal text-easy-green/70 uppercase mb-4">
              Localização
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-easy-green font-heading leading-tight">
              Onde a praticidade <br className="md:hidden" /> <span className="text-easy-olive">te encontra.</span>
            </h3>
        </motion.div>

        <motion.div
          {...revealOnScroll}
          variants={staggerContainer(0.15)}
          className="grid lg:grid-cols-5 gap-12 items-stretch"
        >
          {/* Coluna de Informações e Botões */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-easy-green/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-easy-olive/10 text-easy-olive shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <h4 className="text-xl font-semibold text-easy-green">Endereço</h4>
              </div>
              <p className="text-easy-green/70 leading-relaxed mb-5">
                {address}
              </p>
              
              <div className="flex flex-col gap-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-easy-green text-easy-cream py-4 rounded-full font-semibold hover:bg-easy-olive transition-all shadow-md active:scale-95"
                >
                  <span className="relative h-5 w-5 shrink-0 overflow-hidden inline-block">
                    <svg className="absolute inset-0 w-5 h-5 transition-transform duration-500 ease-in-out group-hover:translate-x-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <svg className="absolute inset-0 w-5 h-5 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </span>
                  Navegar com Google Maps
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 border-2 border-easy-green text-easy-green py-4 rounded-full font-semibold hover:bg-easy-green hover:text-easy-cream transition-all active:scale-95"
                >
                  <span className="relative h-5 w-5 shrink-0 overflow-hidden inline-block">
                    <svg className="absolute inset-0 w-5 h-5 transition-transform duration-500 ease-in-out group-hover:translate-x-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                    </svg>
                    <svg className="absolute inset-0 w-5 h-5 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                    </svg>
                  </span>
                  Navegar com Waze
                </a>
              </div>
            </div>
          </motion.div>

          {/* Coluna do Mapa (Imagem Estática Otimizada com Link) */}

{/* O w-[90%] md:w-[75%] diminui o tamanho no mobile/tablet, e o lg:w-full devolve ao normal no Desktop. mx-auto centraliza. */}
          <motion.div variants={scaleIn} className="lg:col-span-3 w-[90%] md:w-[75%] lg:w-full mx-auto aspect-[4/3] md:aspect-video lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2 relative group cursor-pointer bg-gray-100">
            <a
              href={universalMapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image
                src="/images/mapa.jpg"
                alt="Localização do Easy Mall no mapa"
                placeholder="blur"
                blurDataURL={MAP_BLUR_DATA_URL}
                // O fill continua aqui respeitando a proporção da caixa pai
                fill
                style={{ objectPosition: "68% 34%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay escuro elegante que aparece no hover avisando que é clicável */}
              <div className="absolute inset-0 bg-easy-green/0 group-hover:bg-easy-green/20 transition-colors duration-500 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 bg-white text-easy-green font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                   Traçar Rota
                 </span>
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
