// components/site/Parceiros/ParceiroBeneficioCard.tsx
import React from 'react';
import { ParceiroBeneficioCardProps } from './types';

const ParceiroBeneficioCard: React.FC<ParceiroBeneficioCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 rounded-2xl shadow-lg border border-blue-100/50 backdrop-blur-sm overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">

      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

      {/* Borda animada */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Ícone */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-blue-500/25 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <div className="text-2xl text-white">
            {icon}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </div>
  );
};

export default ParceiroBeneficioCard;