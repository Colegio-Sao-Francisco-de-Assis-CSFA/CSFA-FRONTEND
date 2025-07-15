import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Users, Star, TrendingUp, Zap, Globe, Target, Award } from 'lucide-react';
import {Course,CourseImagePath, Segmento} from '@/app/segmentos/types';
import {segmentos} from '@/app/segmentos/segmentos';

type FloatingElementProps = {
    children: any;
    delay: number | undefined;
    duration: number | undefined;

}


const FloatingElement:FloatingElementProps = ({ children, delay = 0, duration = 6 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      setPosition({
        x: Math.sin(Date.now() * 0.001 + delay) * 20,
        y: Math.cos(Date.now() * 0.0015 + delay) * 15
      });
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className="absolute opacity-10 pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const SegmentCard = ({ segment, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [BookOpen, Users, Star, TrendingUp, Zap, Globe, Target, Award];
  const IconComponent = icons[index % icons.length];

  return (
    <div
      className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Gradient overlay animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Borda animada */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
        <div className="h-full w-full rounded-2xl bg-white" />
      </div>

      <div className="relative z-10 p-6">
        {/* Header com ícone */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300">
              <IconComponent size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 capitalize">
              {segment.cursos[0].nome}
            </h2>
          </div>
          <ChevronRight
            className={`text-gray-400 transform transition-all duration-300 ${isHovered ? 'translate-x-2 text-blue-500' : ''}`}
            size={24}
          />
        </div>

        {/* Descrição */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {segment.metadescricao}
        </p>

        {/* Progress bar animada */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
            style={{ width: isHovered ? '100%' : '70%' }}
          />
        </div>

        {/* Call to action */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Explorar curso</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-600 font-medium">Disponível</span>
          </div>
        </div>
      </div>

      {/* Efeito de hover brilhante */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  );
};

const AllSegmentsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos flutuantes de fundo */}
      <FloatingElement delay={0}>
        <Target className="w-24 h-24 text-blue-300" />
      </FloatingElement>
      <FloatingElement delay={1}>
        <Award className="w-32 h-32 text-purple-300" />
      </FloatingElement>
      <FloatingElement delay={2}>
        <Globe className="w-20 h-20 text-pink-300" />
      </FloatingElement>
      <FloatingElement delay={3}>
        <Zap className="w-28 h-28 text-yellow-300" />
      </FloatingElement>
      <FloatingElement delay={4}>
        <TrendingUp className="w-24 h-24 text-green-300" />
      </FloatingElement>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Nossos Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubra uma educação completa desde a educação infantil até esportes e artes
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
        </div>

        {/* Grid de segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {segmentos.map((segment, index) => (
            <a
              key={index}
              href={`/segmentos/${segment.url}`}
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              <SegmentCard segment={segment} index={index} />
            </a>
          ))}
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Educação de qualidade para todas as idades</span>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default AllSegmentsPage;