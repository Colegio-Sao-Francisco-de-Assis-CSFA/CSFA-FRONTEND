// components/site/Footer/FooterRoot.tsx
import React from 'react';
import { FooterRootProps } from './types';

const FooterRoot: React.FC<FooterRootProps> = ({ children }) => {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600"></div>

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Bolhas sutis animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-indigo-400/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-indigo-500/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      {/* Elementos geométricos discretos */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-3 h-3 bg-blue-300/20 rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-64 right-32 w-2 h-2 bg-indigo-300/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-48 left-32 w-4 h-4 bg-blue-400/15 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-1 h-6 bg-indigo-400/25 animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Grid pattern muito sutil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </footer>
  );
};

export default FooterRoot;