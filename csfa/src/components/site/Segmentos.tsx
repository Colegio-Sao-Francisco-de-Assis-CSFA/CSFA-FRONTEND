"use client";

import { useState, useEffect, FC } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Book, ClipboardList, GraduationCap, Puzzle, LucideProps } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Definição de tipos
type TabValue = "visao-geral" | "compromisso";
type ColorKey = "pink" | "blue" | "purple" | "green";

interface ColorStyles {
  bg: string;
  text: string;
  border: string;
}

interface EducationSegment {
  id: number;
  title: string;
  ageRange: string;
  color: ColorKey;
  icon: FC<LucideProps>;
  description: string;
}

interface FlippedCardsState {
  [key: number]: boolean;
}

const SegmentosEducacionais: FC = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("visao-geral");
  const [flippedCards, setFlippedCards] = useState<FlippedCardsState>({});

  const toggleFlip = (cardId: number): void => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Corrigido para usar o tipo Variants do framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Corrigido para usar o tipo Variants do framer-motion
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const educationSegments: EducationSegment[] = [
    {
      id: 1,
      title: "Educação Infantil",
      ageRange: "2 a 5 anos",
      color: "pink",
      icon: Puzzle,
      description: "Desenvolvendo as habilidades sociais, emocionais e cognitivas essenciais nos primeiros anos de vida, através de atividades lúdicas e exploratórias."
    },
    {
      id: 2,
      title: "Anos Iniciais",
      ageRange: "6 a 10 anos",
      color: "blue",
      icon: Book,
      description: "Construindo uma base sólida de conhecimento, com foco na alfabetização, raciocínio lógico-matemático e exploração do mundo à sua volta."
    },
    {
      id: 3,
      title: "Anos Finais",
      ageRange: "11 a 14 anos",
      color: "purple",
      icon: ClipboardList,
      description: "Aprofundando os conhecimentos nas diversas áreas, desenvolvendo o pensamento crítico e preparando para os desafios do Ensino Médio."
    },
    {
      id: 4,
      title: "Ensino Médio",
      ageRange: "15 a 17 anos",
      color: "green",
      icon: GraduationCap,
      description: "Preparando integralmente para os vestibulares e para a vida, com foco na excelência acadêmica e no desenvolvimento de competências essenciais."
    }
  ];

  const colorMap: Record<ColorKey, ColorStyles> = {
    pink: {
      bg: "bg-pink-500",
      text: "text-pink-500",
      border: "border-pink-500"
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      border: "border-blue-500"
    },
    purple: {
      bg: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-600"
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500"
    }
  };

  const styleTag = `
    .perspective-1000 {
      perspective: 1000px;
    }

    .preserve-3d {
      transform-style: preserve-3d;
    }

    .backface-hidden {
      backface-visibility: hidden;
    }

    .rotateY-180 {
      transform: rotateY(180deg);
    }

    .flip-active .preserve-3d {
      transform: rotateY(180deg);
    }
  `;

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-gray-50">
      <style>{styleTag}</style>
      <div className="w-full relative mx-auto px-4 lg:px-12">
      <motion.div className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-blue-600 mb-6"
            variants={itemVariants}
          >
            Nossos Segmentos Educacionais
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
          </motion.h2>

          <motion.p
            className="text-gray-700 w-full max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Oferecemos uma formação completa e integrada, do Infantil ao Ensino Médio, com metodologias
            inovadoras e foco no desenvolvimento integral do aluno. Nossa proposta pedagógica equilibra
            excelência acadêmica e formação humana.
          </motion.p>
        </motion.div>

        <div className="mb-6">
          <Tabs
            defaultValue="visao-geral"
            value={activeTab}
            onValueChange={(value: string) => {
              // Garantir que o valor seja do tipo TabValue
              if (value === "visao-geral" || value === "compromisso") {
                setActiveTab(value);
              }
            }}
            className="w-full max-w-md mx-auto"
          >
            <TabsList className="w-full flex bg-gray-100 rounded-full">
              <TabsTrigger
                value="visao-geral"
                className="w-auto rounded-full p-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                Visão Geral
              </TabsTrigger>

              <TabsTrigger
                value="compromisso"
                className="rounded-full p-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                Compromisso Educacional
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "visao-geral" && (
              <motion.div
                key="visao-geral"
                className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {educationSegments.map((segment) => (
                  <div key={segment.id} className="w-full flex items-center justify-center ">
                    <div className={`w-64 h-64 perspective-1000 cursor-pointer ${flippedCards[segment.id] ? "flip-active" : ""}`}
                      onClick={() => toggleFlip(segment.id)}
                      onMouseEnter={() => window.innerWidth >= 1024 && toggleFlip(segment.id)}
                      onMouseLeave={() => window.innerWidth >= 1024 && toggleFlip(segment.id)}
                    >
                      <div className="relative w-full h-full transition-transform duration-500 preserve-3d">
                        {/* Front of Card */}
                        <div className={`absolute w-full h-full backface-hidden rounded-lg ${colorMap[segment.color].bg} text-white shadow-md flex flex-col items-center justify-center p-6`}>
                          <div className="bg-white p-3 rounded-full mb-4">
                            <segment.icon className={`h-8 w-8 ${colorMap[segment.color].text}`} />
                          </div>
                          <h3 className="font-bold text-xl text-center">{segment.title}</h3>
                          <div className={`text-xs font-medium mt-2 bg-white ${colorMap[segment.color].text} px-3 py-1 rounded-full`}>
                            {segment.ageRange}
                          </div>
                          <div>
                            <span className="absolute left-1/2 -translate-1/2 bottom-3 text-sm opacity-70 md:hidden">Clique para detalhes</span>
                            <span className="hidden md:absolute md:block left-1/2 -translate-1/2 bottom-3 text-sm opacity-70 w-full text-center">Passe o mouse para mais detalhes</span>
                          </div>
                        </div>

                        {/* Back of Card */}
                        <div className={`absolute w-full h-full backface-hidden rounded-lg bg-white shadow-md p-6 rotateY-180 border ${colorMap[segment.color].border}`}>
                          <h3 className={`font-bold text-lg ${colorMap[segment.color].text} mb-3`}>{segment.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {segment.description}
                          </p>
                          <a href="#" className={`mt-auto ${colorMap[segment.color].bg} p-2 rounded-sm justify-center text-white text-sm font-medium flex items-center`}>
                            Saiba mais
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


              </motion.div>
            )}

            {activeTab === "compromisso" && (
              <motion.div
                key="compromisso"
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 md:pr-4">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4">
                        Nosso Compromisso com a Educação
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Entendemos a educação como um processo contínuo que vai muito além das salas
                          de aula. Cada segmento educacional foi cuidadosamente estruturado para atender
                          às necessidades específicas de cada faixa etária, respeitando o desenvolvimento
                          cognitivo, social e emocional dos alunos.
                        </p>
                        <p className="text-gray-700">
                          Nossa equipe pedagógica trabalha de forma integrada para garantir uma transição
                          suave entre os diferentes segmentos, permitindo que o aluno avance com
                          segurança em sua jornada acadêmica.
                        </p>
                        <p className="text-gray-700">
                          Valorizamos a parceria com as famílias e acreditamos que o sucesso educacional é
                          resultado de um trabalho conjunto entre escola, aluno e família.
                        </p>
                        <div className="pt-2">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Conheça nossa proposta pedagógica
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-blue-50 p-6 rounded-xl mt-8 md:mt-0">
                      <h3 className="text-xl font-bold text-blue-600 mb-6">
                        Pilares da nossa educação
                      </h3>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-600">Excelência Acadêmica</h4>
                            <p className="text-sm text-gray-600">Corpo docente altamente qualificado e material didático de excelência</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-600">Formação Integral</h4>
                            <p className="text-sm text-gray-600">Desenvolvimento de habilidades socioemocionais, cognitivas e valores éticos</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-600">Metodologias Inovadoras</h4>
                            <p className="text-sm text-gray-600">Combinação de métodos tradicionais e abordagens contemporâneas de ensino</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-600">Preparação para o Futuro</h4>
                            <p className="text-sm text-gray-600">Desenvolvimento de competências essenciais para o século XXI</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SegmentosEducacionais;