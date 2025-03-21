"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const IntroAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [textComplete, setTextComplete] = useState(false);
  const [subtextComplete, setSubtextComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const mainText = "Formando jovens transformadores da sociedade";
  const subText = "Educação + Espiritualidade + Valores Humanos";
  const [displayMainText, setDisplayMainText] = useState("");
  const [displaySubText, setDisplaySubText] = useState("");
  
  useEffect(() => {
    // Main text typing effect
    let currentIndex = 0;
    const mainTypingInterval = setInterval(() => {
      if (currentIndex < mainText.length) {
        setDisplayMainText(mainText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(mainTypingInterval);
        setTextComplete(true);
        
        // Start subtext typing after main text is complete
        let subIndex = 0;
        const subTypingInterval = setInterval(() => {
          if (subIndex < subText.length) {
            setDisplaySubText(subText.substring(0, subIndex + 1));
            subIndex++;
          } else {
            clearInterval(subTypingInterval);
            setSubtextComplete(true);
            
            // Start fade out after delay
            setTimeout(() => {
              setFadeOut(true);
            }, 2000);
            
            // Hide animation completely
            setTimeout(() => {
              setShowAnimation(false);
            }, 3000);
          }
        }, 50);
      }
    }, 80);
    
    return () => clearInterval(mainTypingInterval);
  }, []);
  
  if (!showAnimation) return null;
  
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] transition-opacity duration-1000 w-full ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-4 flex flex-col items-center justify-center">
        {/* Logo com efeito de aumentar e diminuir (resize) */}
        <div className={`w-32 h-32 mb-8 mx-auto transform transition-all ${subtextComplete ? '' : 'animate-[resize_2s_ease-in-out_infinite]'}`}>
          <Image alt='logo introdução' src={"/logo.webp"} width={600} height={600} />
        </div>
        
        {/* Título principal com efeito de digitação */}
        <h1 className="text-2xl px-6 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 w-20">
          {displayMainText}
          <span className={`inline-block w-1 h-6 ml-1 bg-blue-500 ${textComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
        </h1>
        
        {/* Subtítulo com efeito de digitação */}
        {textComplete && (
          <p className="text-lg sm:text-lg md:text-xl text-blue-500">
            {displaySubText}
            <span className={`inline-block w-1 h-4 ml-1 bg-blue-600 ${subtextComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
          </p>
        )}
      </div>
    </div>
  );
};

// Adicione esta keyframe animation ao seu arquivo CSS global
const globalStyles = `
@keyframes resize {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
`;

// Injeta os estilos globais - corrigido para resolver o erro de TypeScript
const StyleInjector = () => {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = globalStyles;
    document.head.appendChild(styleEl);
    
    // Função de limpeza corrigida para retornar void
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return null;
};

const AnimationWithStyles = () => (
  <>
    <StyleInjector />
    <IntroAnimation />
  </>
);

export default AnimationWithStyles;