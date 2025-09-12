"use client";

import React from 'react';
import { StaticBannerProps } from './types';
import useAspectRatio from '@/hooks/useAspectRatio';

export const Static: React.FC<StaticBannerProps> = ({
  image,
  mobileImage,
  alt,
  title,
  description,
  cta,
  className = '',
  contentPosition = 'center',
  overlay = false,
  overlayOpacity = 0.4,
}) => {
  const { isMobile } = useAspectRatio();

  const getContentPositionClasses = () => {
    const baseClasses = "absolute inset-0 flex flex-col justify-center z-10 p-8";

    switch (contentPosition) {
      case 'left':
        return `${baseClasses} items-start text-left`;
      case 'right':
        return `${baseClasses} items-end text-right`;
      default:
        return `${baseClasses} items-center text-center`;
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Imagem de fundo */}
      <img
        src={isMobile && mobileImage ? mobileImage : image}
        alt={alt}
        className="w-full h-full object-cover"
        width={1920}
        height={350}
      />

      {/* Overlay opcional */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-5"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Conteúdo sobreposto */}
      {(title || description || cta) && (
        <div className={getContentPositionClasses()}>
          {title && (
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-white text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
              {description}
            </p>
          )}

          {cta && (
            <button
              onClick={cta.onClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {cta.text}
            </button>
          )}
        </div>
      )}
    </div>
  );
};