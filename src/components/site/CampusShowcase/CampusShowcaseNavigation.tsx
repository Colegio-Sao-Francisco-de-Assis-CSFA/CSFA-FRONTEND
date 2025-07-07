// components/site/CampusShowcase/CampusShowcaseNavigation.tsx
'use client';

import React from 'react';
import { useSwiper } from 'swiper/react'; // Hook para acessar a instância do Swiper

interface CampusShowcaseNavigationProps {
  // Você pode adicionar props para customização de classes, ícones, etc.
}

const CampusShowcaseNavigation: React.FC<CampusShowcaseNavigationProps> = () => {
  const swiper = useSwiper(); // Obtém a instância do Swiper do contexto

  // Verifique se a instância do swiper existe antes de tentar usá-la
  if (!swiper) {
    return null; // Ou um fallback de carregamento, ou um erro
  }

  return (
    <div className="flex justify-center items-center mt-6 space-x-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Previous slide"
      >
        {/* Ícone de seta para a esquerda */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Exemplo de paginação customizada (simples, não interativa no clique aqui)
          Para paginação interativa, você precisaria de mais lógica de estado ou usar o 'el' no Swiper. */}
      <div className="text-gray-700 font-medium">
        {/* {swiper.activeIndex + 1} / {swiper.slides.length} */}
        {/* Esta parte se tornaria mais complexa se você quiser bolinhas clicáveis customizadas */}
      </div>

      <button
        onClick={() => swiper.slideNext()}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Next slide"
      >
        {/* Ícone de seta para a direita */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CampusShowcaseNavigation;