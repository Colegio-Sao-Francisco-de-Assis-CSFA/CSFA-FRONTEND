"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const AutoFeatureDropdown: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const features: FeatureSection[] = [
    {
      title: 'SEO Integrado para Melhor Visibilidade',
      description: 'Estrutura do site otimizada para motores de busca, aumentando alcance e rankings de visitantes.',
      icon: <span className="text-blue-600">🔍</span>,
      image: '/images/courses/finais.webp'
    },
    {
      title: 'Experiência de Navegação Intuitiva',
      description: 'Interface de usuário fluida e fácil de usar, garantindo uma jornada do cliente sem complicações.',
      icon: <span className="text-blue-600">🧭</span>,
      image: '/images/courses/finais.webp'
    },
    {
      title: 'Foco em Conversão e Usabilidade',
      description: 'Design estratégico para aumentar a taxa de conversão e melhorar a experiência do usuário.',
      icon: <span className="text-blue-600">💡</span>,
      image: '/images/courses/finais.webp'
    },
    {
        title: 'Foco em Conversão e Usabilidade',
        description: 'Design estratégico para aumentar a taxa de conversão e melhorar a experiência do usuário.',
        icon: <span className="text-blue-600">💡</span>,
        image: '/images/courses/finais.webp'
    },
    {
        title: 'Foco em Conversão e Usabilidade',
        description: 'Design estratégico para aumentar a taxa de conversão e melhorar a experiência do usuário.',
        icon: <span className="text-blue-600">💡</span>,
        image: '/images/courses/finais.webp'
}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % features.length);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 ${
                activeSection === index 
                  ? 'border-blue-600 shadow-lg' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <CardContent 
                className="p-0 cursor-pointer"
                onClick={() => setActiveSection(index)}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h3 className="text-gray-600 font-semibold">{feature.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSection === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50 text-gray-600">
                        {feature.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Image */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="sticky top-16"
            >
              <img 
                src={features[activeSection].image} 
                alt={features[activeSection].title}
                className="w-full rounded-lg shadow-xl object-cover"
              />
              
              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ 
                    duration: 5, 
                    ease: 'linear' 
                  }}
                  className="h-full bg-blue-600"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AutoFeatureDropdown;