'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Users, Star, TrendingUp, Zap, Globe, Target, Award, Lock } from 'lucide-react';
import { Segmento } from './types'; // Ajuste o caminho conforme a localização real de types.ts
import { segmentos } from './segmentos'; // Ajuste o caminho conforme a localização real de segmentos.ts
import { SegmentCard, FloatingElement } from './components'; // Importando os micro-componentes

const AllSegmentsPage = () => {
    // Estados para controlar a visibilidade dos elementos flutuantes
    const [showFloatingElements, setShowFloatingElements] = useState(false);

    useEffect(() => {
        // Ativa os elementos flutuantes após um pequeno atraso para garantir a hidratação
        const timer = setTimeout(() => {
            setShowFloatingElements(true);
        }, 100); // Pequeno atraso para evitar FOUC/hidratação

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 relative overflow-hidden">
            {/* Floating background elements for visual interest */}
            {showFloatingElements && (
                <>
                    <FloatingElement delay={0}>
                        <BookOpen className="w-16 h-16 text-blue-300" />
                    </FloatingElement>
                    <FloatingElement delay={2}>
                        <Users className="w-16 h-16 text-indigo-300" />
                    </FloatingElement>
                    <FloatingElement delay={4}>
                        <Star className="w-16 h-16 text-yellow-300" />
                    </FloatingElement>
                    <FloatingElement delay={6}>
                        <TrendingUp className="w-16 h-16 text-green-300" />
                    </FloatingElement>
                    <FloatingElement delay={8}>
                        <Zap className="w-16 h-16 text-red-300" />
                    </FloatingElement>
                    <FloatingElement delay={10}>
                        <Globe className="w-16 h-16 text-purple-300" />
                    </FloatingElement>
                    <FloatingElement delay={12}>
                        <Target className="w-16 h-16 text-pink-300" />
                    </FloatingElement>
                    <FloatingElement delay={14}>
                        <Award className="w-16 h-16 text-amber-300" />
                    </FloatingElement>
                    <FloatingElement delay={16}>
                        <Lock className="w-16 h-16 text-gray-300" />
                    </FloatingElement>
                </>
            )}

            <div className="container mx-auto p-6 md:p-8 lg:p-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-slideUp">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-400 leading-tight mb-4 drop-shadow-lg">
                        Explore Nossos Segmentos
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Descubra a diversidade de cursos e atividades que oferecemos para todas as idades e interesses.
                    </p>
                    <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-medium text-lg bg-blue-100 dark:bg-blue-900/50 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <span>Sua jornada de aprendizado começa aqui</span>
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>

                {/* Segments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {segmentos.map((segment: any, index: number) => (
                        // Renderiza condicionalmente o SegmentCard
                        <div className="block" key={segment.url}> {/* Usar segment.url como key é mais robusto */}
                            <SegmentCard segment={segment} index={index} />
                        </div>
                    ))}
                </div>

                {/* Call to action final */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
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

                /* Floating elements animation is handled by the FloatingElement component now */
            `}</style>
        </div>
    );
};

export default AllSegmentsPage;
