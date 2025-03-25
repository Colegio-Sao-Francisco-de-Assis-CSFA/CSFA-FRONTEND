"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import useMediaQuery from '@/hooks/useMediaQuery';
import '@/app/globals.css';

// Definição dos tipos para o segmento educacional
type EducationalSegment = {
  id: string;
  title: string;
  frontDescription: string;
  backDescription: string;
  color: string;
  hoverColor: string;
  textColor: string;
  icon: React.ReactNode;
};

// Componente Modal para mobile
const InfoModal: React.FC<{ 
  segment: EducationalSegment | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ segment, isOpen, onClose }) => {
  if (!segment) return null;
  
  // Extrair a cor base do card (sem o prefixo "bg-")
  const baseColor = segment.color.replace('bg-', '');
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card 
              className={`w-full max-w-xs ${segment.hoverColor} ${segment.textColor} p-6 rounded-xl shadow-xl`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{segment.icon}</div>
                <button 
                  onClick={onClose} 
                  className="text-white text-xl hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <h3 className="text-xl font-bold mb-3">{segment.title}</h3>
              <p className="text-sm">{segment.backDescription}</p>
              <div className={`mt-4 w-full h-1 bg-white bg-opacity-20 rounded-full`}/>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Componente para os cards dos segmentos educacionais
const SegmentCard: React.FC<{ 
  segment: EducationalSegment; 
  onOpenModal: (segment: EducationalSegment) => void;
}> = ({ segment, onOpenModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleClick = () => {
    if (isMobile) {
      onOpenModal(segment);
    }
  };

  const handleHover = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  // Extrair a cor base do card (sem o prefixo "bg-")
  const baseColor = segment.color.replace('bg-', '');

  return (
    <div 
      className={`perspective-1000 ${isMobile ? 'w-full h-40' : 'w-64 h-72'} ${isMobile ? 'tap-highlight' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      {!isMobile ? (
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card - Desktop */}
          <Card 
            className={`absolute w-full h-full flex flex-col items-center justify-center p-6 rounded-xl 
                      ${segment.color} ${segment.textColor} backface-hidden shadow-lg
                      transition-all duration-300 hover:shadow-xl`}
          >
            <div className="text-4xl mb-4">{segment.icon}</div>
            <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
            <p className="text-center text-sm">{segment.frontDescription}</p>
          </Card>

          {/* Back of card - Desktop */}
          <Card 
            className={`absolute w-full h-full flex flex-col items-center justify-center p-6 rounded-xl 
                      ${segment.hoverColor} ${segment.textColor} backface-hidden shadow-lg 
                      hover:shadow-xl`}
            style={{ transform: "rotateY(180deg)" }}
          >
            <h3 className="text-xl font-bold mb-3">{segment.title}</h3>
            <p className="text-center text-sm">{segment.backDescription}</p>
          </Card>
        </motion.div>
      ) : (
        // Mobile card (no flip, just click to modal)
        <Card 
          className={`w-full h-full flex flex-col items-center justify-center p-4 rounded-xl 
                    ${segment.color} ${segment.textColor} shadow-md
                    transition-all duration-300 active:scale-95 active:shadow-lg`}
        >
          <div className="text-2xl mb-2">{segment.icon}</div>
          <h3 className="text-base font-bold mb-1 text-center">{segment.title}</h3>
          {/* <p className="text-center text-xs">{segment.frontDescription}</p> */}
          <div className="absolute bottom-2 right-2">
            <Icon 
              icon="mdi:information-outline" 
              className="text-lg text-white opacity-80" 
            />
          </div>
        </Card>
      )}
    </div>
  );
};

// Componente principal
const EducationalSegments: React.FC = () => {
  const [modalSegment, setModalSegment] = useState<EducationalSegment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Dados dos segmentos educacionais
  const segments: EducationalSegment[] = [
    {
      id: "infantil",
      title: "Educação Infantil",
      frontDescription: "Para crianças de 2 a 5 anos",
      backDescription: "Foco no desenvolvimento sensorial, motor e socioafetivo através de atividades lúdicas e de descoberta do mundo.",
      color: "bg-pink-500",
      hoverColor: "bg-pink-600",
      textColor: "text-white",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M9 16h6M12 3v1m0 16v1m-8-8h1m16 0h1M4.6 4.6l.7.7m12.1-.7l-.7.7" />
            </svg>
    },
    {
      id: "anosIniciais",
      title: "Anos Iniciais",
      frontDescription: "1º ao 5º ano do Fundamental",
      backDescription: "Desenvolvimento da alfabetização, leitura, escrita e raciocínio lógico-matemático através de projetos integrados.",
      color: "bg-blue-500",
      hoverColor: "bg-blue-600",
      textColor: "text-white",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
    },
    {
      id: "anosFinais",
      title: "Anos Finais",
      frontDescription: "6º ao 9º ano do Fundamental",
      backDescription: "Aprofundamento dos conhecimentos através de abordagem multidisciplinar e desenvolvimento do pensamento crítico.",
      color: "bg-purple-500",
      hoverColor: "bg-yellow-600",
      textColor: "text-white",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
    },
    {
      id: "ensinoMedio",
      title: "Ensino Médio",
      frontDescription: "1ª a 3ª série do Médio",
      backDescription: "Preparação para o ENEM e vestibulares com aprofundamento acadêmico e orientação para escolha profissional.",
      color: "bg-green-500",
      hoverColor: "bg-green-600",
      textColor: "text-white",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
    }
  ];

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleOpenModal = (segment: EducationalSegment) => {
    setModalSegment(segment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-auto py-8 lg:py-12 lg:h-full">

      <div className="container mx-auto px-4">

        <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">Segmentos</h1>

        {isMobile ? (
          <p className="text-center text-gray-600 mb-6 text-sm">
            Toque nos cards para mais informações
          </p>
        ) : (
          <p className="text-center text-gray-600 mb-6">
            Passe o mouse sobre os cards para ver mais informações
          </p>
        )}
        
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'} justify-items-center`}>

          {segments.map((segment) => (
            <SegmentCard 
              key={segment.id} 
              segment={segment} 
              onOpenModal={handleOpenModal}
            />
          ))}

        </div>
      </div>
      
      {/* Modal para exibição em dispositivos móveis */}
      <InfoModal 
        segment={modalSegment} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default EducationalSegments;