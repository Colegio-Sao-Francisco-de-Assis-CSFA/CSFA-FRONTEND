// components/site/FloatLinks/FloatLinkItem.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react'; // <-- IMPORTADO O COMPONENTE ICON
import { FloatLinkItemProps } from './types';

const FloatLinkItem: React.FC<FloatLinkItemProps> = ({
  href,
  label,
  icon, // <-- AGORA É UMA STRING
  backgroundColorClass,
  initialIconColorClass = 'text-gray-500',
}) => {
  return (
    <Link
      href={href}
      className={`
        relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg
        group overflow-hidden cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500

        backdrop-filter backdrop-blur-md bg-white/60 border border-white/20

        transition-all duration-300 ease-in-out
      `}
      aria-label={label}
    >
      {/* Elemento para o efeito de preenchimento do fundo */}
      <div
        className={`
          absolute bottom-0 left-0 w-full h-0
          ${backgroundColorClass}
          group-hover:h-full
          transition-all duration-300 ease-in-out
        `}
      ></div>

      {/* Ícone (sempre acima do fundo preenchedor) */}
      <Icon // <-- USANDO O COMPONENTE ICON DO ICONIFY
        icon={icon} // <-- PASSANDO A STRING DO ÍCONE
        width={20} // <-- TAMANHO DO ÍCONE
        height={20} // <-- TAMANHO DO ÍCONE
        className={`
          relative z-10
          transition-colors duration-300 ease-in-out
          ${initialIconColorClass}
          group-hover:text-white
        `}
      />
    </Link>
  );
};

export default FloatLinkItem;