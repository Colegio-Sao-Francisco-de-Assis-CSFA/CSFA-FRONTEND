// components/site/CampusShowcase/CampusShowcaseNavigation.tsx
'use client';

import React from 'react';
import { useSwiper } from 'swiper/react';

interface CampusShowcaseNavigationProps {
  // Você pode adicionar props para customização de classes, ícones, etc.
}

const CampusShowcaseNavigation: React.FC<CampusShowcaseNavigationProps> = () => {
  const swiper = useSwiper();

  if (!swiper) {
    console.warn("CampusShowcaseNavigation must be used inside a Swiper component.");
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-6 space-x-4">
      <button
        onClick={() => swiper.slidePrev()}
        // Ajustado para dark mode: fundo e texto do botão, e cor do foco
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
                   dark:bg-primary dark:text-background dark:hover:bg-primary/90 dark:focus:ring-primary"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Exemplo de paginação customizada (simples, não interativa no clique aqui) */}
      {/* Você pode adicionar a numeração atual aqui ou bullets visíveis. */}
      {/* Para bullets clicáveis, você precisaria de mais estado e lógica no SwiperRoot. */}

      <button
        onClick={() => swiper.slideNext()}
        // Ajustado para dark mode: fundo e texto do botão, e cor do foco
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
                   dark:bg-primary dark:text-background dark:hover:bg-primary/90 dark:focus:ring-primary"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CampusShowcaseNavigation;