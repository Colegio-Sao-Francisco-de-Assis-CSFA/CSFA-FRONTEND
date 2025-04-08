"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Book, ClipboardList, GraduationCap, Puzzle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SegmentosEducacionais() {
  const [activeTab, setActiveTab] = useState("visao-geral")
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  // CSS personalizado para o efeito flip
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
    <section className="w-full py-12 bg-gray-50">
      <style>{styleTag}</style>
      <div className="container relative max-w-6xl mx-auto px-4">

        <motion.div
          className="text-center mb-10"
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
            className="text-gray-700 max-w-3xl mx-auto"
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
            onValueChange={setActiveTab}
            className="w-full max-w-md mx-auto"
          >
            <TabsList className="grid grid-cols-2 w-full bg-gray-100 rounded-full">
              <TabsTrigger
                value="visao-geral"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                Visão Geral
              </TabsTrigger>
              <TabsTrigger
                value="compromisso"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
              >
                Compromisso Educacional
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative" style={{ minHeight: '700px' }}>
          <AnimatePresence mode="wait">
            {activeTab === "visao-geral" && (
              <motion.div
                key="visao-geral"
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Educação Infantil */}
                <div>
                  <div
                    className={`h-64 perspective-1000 cursor-pointer ${flippedCards[1] ? "flip-active" : ""}`}
                    onClick={() => toggleFlip(1)}
                    onMouseEnter={() => window.innerWidth >= 1024 && toggleFlip(1)}
                    onMouseLeave={() => window.innerWidth >= 1024 && toggleFlip(1)}
                  >
                    <div className="relative w-full h-full transition-transform duration-500 preserve-3d">
                      {/* Frente do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-pink-500 text-white shadow-md flex flex-col items-center justify-center p-6">
                        <div className="bg-white p-3 rounded-full mb-4">
                          <Puzzle className="h-8 w-8 text-pink-500" />
                        </div>
                        <h3 className="font-bold text-xl text-center">Educação Infantil</h3>
                        <div className="text-xs font-medium mt-2 bg-white text-pink-500 px-3 py-1 rounded-full">
                          2 a 5 anos
                        </div>
                        <div className="absolute bottom-3 text-sm opacity-70">Clique para detalhes</div>
                      </div>

                      {/* Verso do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-md p-6 rotateY-180">
                        <h3 className="font-bold text-lg text-pink-500 mb-3">Educação Infantil</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Desenvolvendo as habilidades sociais, emocionais e cognitivas essenciais nos
                          primeiros anos de vida, através de atividades lúdicas e exploratórias.
                        </p>
                        <button className="mt-auto text-pink-500 text-sm font-medium flex items-center">
                          Saiba mais
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ensino Fundamental I */}
                <div>
                  <div
                    className={`h-64 perspective-1000 cursor-pointer ${flippedCards[2] ? "flip-active" : ""}`}
                    onClick={() => toggleFlip(2)}
                    onMouseEnter={() => window.innerWidth >= 1024 && toggleFlip(2)}
                    onMouseLeave={() => window.innerWidth >= 1024 && toggleFlip(2)}
                  >
                    <div className="relative w-full h-full transition-transform duration-500 preserve-3d">
                      {/* Frente do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-blue-500 text-white shadow-md flex flex-col items-center justify-center p-6">
                        <div className="bg-white p-3 rounded-full mb-4">
                          <Book className="h-8 w-8 text-blue-500" />
                        </div>
                        <h3 className="font-bold text-xl text-center">Anos Iniciais</h3>
                        <div className="text-xs font-medium mt-2 bg-white text-blue-500 px-3 py-1 rounded-full">
                          6 a 10 anos
                        </div>
                        <div className="absolute bottom-3 text-sm opacity-70">Clique para detalhes</div>
                      </div>

                      {/* Verso do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-md p-6 rotateY-180">
                        <h3 className="font-bold text-lg text-blue-500 mb-3">Anos Iniciais</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Construindo uma base sólida de conhecimento, com foco na alfabetização,
                          raciocínio lógico-matemático e exploração do mundo à sua volta.
                        </p>
                        <button className="mt-auto text-blue-500 text-sm font-medium flex items-center">
                          Saiba mais
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ensino Fundamental II */}
                <div>
                  <div
                    className={`h-64 perspective-1000 cursor-pointer ${flippedCards[3] ? "flip-active" : ""}`}
                    onClick={() => toggleFlip(3)}
                    onMouseEnter={() => window.innerWidth >= 1024 && toggleFlip(3)}
                    onMouseLeave={() => window.innerWidth >= 1024 && toggleFlip(3)}
                  >
                    <div className="relative w-full h-full transition-transform duration-500 preserve-3d">
                      {/* Frente do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-purple-500 text-white shadow-md flex flex-col items-center justify-center p-6">
                        <div className="bg-white p-3 rounded-full mb-4">
                          <ClipboardList className="h-8 w-8 text-purple-500" />
                        </div>
                        <h3 className="font-bold text-xl text-center">Anos Finais</h3>
                        <div className="text-xs font-medium mt-2 bg-white text-purple-500 px-3 py-1 rounded-full">
                          11 a 14 anos
                        </div>
                        <div className="absolute bottom-3 text-sm opacity-70">Clique para detalhes</div>
                      </div>

                      {/* Verso do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-md p-6 rotateY-180">
                        <h3 className="font-bold text-lg text-purple-500 mb-3">Anos Finais</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Aprofundando os conhecimentos nas diversas áreas, desenvolvendo o
                          pensamento crítico e preparando para os desafios do Ensino Médio.
                        </p>
                        <button className="mt-auto text-purple-500 text-sm font-medium flex items-center">
                          Saiba mais
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ensino Médio */}
                <div>
                  <div
                    className={`h-64 perspective-1000 cursor-pointer ${flippedCards[4] ? "flip-active" : ""}`}
                    onClick={() => toggleFlip(4)}
                    onMouseEnter={() => window.innerWidth >= 1024 && toggleFlip(4)}
                    onMouseLeave={() => window.innerWidth >= 1024 && toggleFlip(4)}
                  >
                    <div className="relative w-full h-full transition-transform duration-500 preserve-3d">
                      {/* Frente do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-green-500 text-white shadow-md flex flex-col items-center justify-center p-6">
                        <div className="bg-white p-3 rounded-full mb-4">
                          <GraduationCap className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="font-bold text-xl text-center">Ensino Médio</h3>
                        <div className="text-xs font-medium mt-2 bg-white text-green-500 px-3 py-1 rounded-full">
                          15 a 17 anos
                        </div>
                        <div className="absolute bottom-3 text-sm opacity-70">Clique para detalhes</div>
                      </div>

                      {/* Verso do Card */}
                      <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-md p-6 rotateY-180">
                        <h3 className="font-bold text-lg text-green-500 mb-3">Ensino Médio</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Preparando integralmente para os vestibulares e para a vida, com foco na
                          excelência acadêmica e no desenvolvimento de competências essenciais.
                        </p>
                        <button className="mt-auto text-green-500 text-sm font-medium flex items-center">
                          Saiba mais
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
    </section>
  )
}