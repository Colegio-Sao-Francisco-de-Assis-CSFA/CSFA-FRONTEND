"use client";

import React, { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';

const MissaoColegio = () => {
  const [typing, setTyping] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showPillars, setShowPillars] = useState(false);
  
  const title = "Formando jovens transformadores da sociedade";
  const subtitle = "Educação + Espiritualidade + Valores Humanos";
  
  useEffect(() => {
    // Iniciar animação de digitação do título
    setTyping(true);
    let currentIndex = 0;
    
    const titleInterval = setInterval(() => {
      if (currentIndex <= title.length) {
        setDisplayedTitle(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(titleInterval);
        
        // Após completar o título, iniciar animação do subtítulo
        let subtitleIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex <= subtitle.length) {
            setDisplayedSubtitle(subtitle.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
            setTyping(false);
            setTimeout(() => setShowPillars(true), 500);
          }
        }, 50);
      }
    }, 50);
    
    return () => {
      clearInterval(titleInterval);
    };
  }, []);
  
  const pillars = [
    {
      title: "Educação",
      description: "Promovemos o conhecimento com metodologias inovadoras que estimulam o pensamento crítico e a autonomia intelectual."
    },
    {
      title: "Espiritualidade",
      description: "Cultivamos valores transcendentais que dão sentido à vida e inspiram uma postura ética diante dos desafios da sociedade."
    },
    {
      title: "Valores Humanos",
      description: "Desenvolvemos o respeito, a solidariedade e a empatia como bases para formar cidadãos comprometidos com um mundo melhor."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 w-full overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center px-4">
        <div className="relative">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="block h-auto">{displayedTitle}</span>
            {typing && <span className="inline-block w-1 h-6 sm:h-8 bg-blue-600 ml-1 animate-pulse absolute"></span>}
          </motion.h1>
        </div>
        
        <motion.div 
          className="mb-12 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-blue-500 relative">
            {displayedSubtitle}
            {typing && displayedTitle.length === title.length && 
              <span className="inline-block w-1 h-5 sm:h-6 bg-blue-500 ml-1 animate-pulse absolute"></span>
            }
          </p>
        </motion.div>
        
        {showPillars && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2 sm:mb-3">{pillar.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPillars ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all text-sm sm:text-base">
            Conheça nosso projeto pedagógico
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MissaoColegio;