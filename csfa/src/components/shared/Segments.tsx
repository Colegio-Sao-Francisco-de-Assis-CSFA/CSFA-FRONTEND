"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, Info, ArrowRight } from 'lucide-react';

interface SegmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  longDescription: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const SegmentCard: React.FC<SegmentCardProps> = ({
  title,
  description,
  imageSrc,
  longDescription,
  color,
  gradientFrom,
  gradientTo
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState<boolean>(false);
  const [isBackButtonHovered, setIsBackButtonHovered] = useState<boolean>(false);

  // Enhanced animation variants
  const cardVariants = {
    front: {
      rotateY: 0,
      scale: 1,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.6, ease: "easeOut" }
    },
    flipping: {
      rotateY: 90,
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeIn" }
    },
    back: {
      rotateY: 180,
      scale: 1,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut", delay: 0.3 }
    }
  };

  // Animation for content to fade in/out during flip
  const contentVariants = {
    visible: { opacity: 1, transition: { duration: 0.2, delay: 0.2 } },
    hidden: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="relative h-96 w-full perspective-1000 ">
      <motion.div
        className="w-full h-full relative rounded-lg"
        initial="front"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{
             transformStyle: 'preserve-3d',
             backgroundColor: color,
        }}

      >
        {/* Front of card */}
        <Card
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2"
          style={{
            backfaceVisibility: 'hidden',
            borderColor: color,
            background: color,
          }}
        >
          <motion.div
            className="relative h-full"
            variants={contentVariants}
            initial="visible"
            animate={isFlipped ? "hidden" : "visible"}
          >
            <div className="absolute inset-0">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,

                }}
              />
              {/* Animated particles/bubbles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      width: `${Math.random() * 30 + 10}px`,
                      height: `${Math.random() * 30 + 10}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 p-4 text-white z-10 w-full">
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm text-white">{description}</p>
            </div>
            <div
              className="absolute top-0 left-0 w-16 h-16"
              style={{
                background: color,
                clipPath: 'polygon(0 0, 0% 100%, 100% 0)'
              }}
            />
            <Button
              className="absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-white/90 backdrop-blur-sm z-20"
              style={{ color }}
              variant="outline"
              size="icon"
              onMouseEnter={() => setIsInfoButtonHovered(true)}
              onMouseLeave={() => setIsInfoButtonHovered(false)}
              onClick={() => setIsFlipped(true)}
            >
              <motion.div
                animate={isInfoButtonHovered ?
                  { scale: 1.1, rotate: 180, x: [0, -2, 2, -2, 0] } :
                  { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.4 }}
              >
                <Info className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </Card>

        {/* Back of card */}
        <Card
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-lg border-2"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: color,
            background: `radial-gradient(circle at top right, ${gradientFrom}20, white 70%)`
          }}
        >
          <motion.div
            className="h-full"
            variants={contentVariants}
            initial="hidden"
            animate={isFlipped ? "visible" : "hidden"}
          >
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-2xl font-bold"
                  style={{ color }}
                >
                  {title}
                </h3>
                <Button
                  className="p-1 rounded-full hover:bg-gray-100"
                  style={{ color }}
                  variant="ghost"
                  size="icon"
                  onMouseEnter={() => setIsBackButtonHovered(true)}
                  onMouseLeave={() => setIsBackButtonHovered(false)}
                  onClick={() => setIsFlipped(false)}
                >
                  <motion.div
                    animate={isBackButtonHovered ?
                      { scale: 1.1, x: [0, 5, 0] } :
                      { scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </div>

              <div className="relative flex-grow max-h-full text-sm">
                <p className="text-gray-700 line-clamp-6 sm:line-clamp-none">{longDescription}</p>

                {/* Decorative graphic element */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                  style={{ background: `${color}` }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <div className="mt-auto pt-2 border-t" style={{ borderColor: `${color}33` }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full group transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ backgroundColor: color }}
                  >
                    <span>Saiba mais</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

const EducationalSegments: React.FC = () => {
  // Vibrant color scheme for each segment
  const segments = [
    {
      title: "Educação Infantil",
      description: "Nesta etapa, formamos seus passos importantes para o ingresso no Ensino Fundamental.",
      imageSrc: "/images/courses/infantil.webp",
      longDescription: "Nossa Educação Infantil proporciona um ambiente acolhedor e estimulante para crianças de 2 a 5 anos. Trabalhamos o desenvolvimento integral através de atividades lúdicas, promovendo a autonomia, socialização e primeiras descobertas. Com professores especializados e espaços adaptados, preparamos os pequenos para uma transição tranquila ao Ensino Fundamental, respeitando seu ritmo de aprendizagem.",
      color: "#FF5757",
      gradientFrom: "#FF9966",
      gradientTo: "#FF5757"
    },
    {
      title: "Anos Iniciais",
      description: "Nesta etapa, formamos seus passos importantes para o progresso no Ensino Fundamental.",
      imageSrc: "/images/courses/iniciais.webp",
      longDescription: "Nos Anos Iniciais do Ensino Fundamental (1º ao 5º ano), consolidamos a alfabetização e o letramento matemático, desenvolvendo as habilidades essenciais para o aprendizado contínuo. Nossa metodologia equilibra conteúdos curriculares com projetos interdisciplinares, estimulando a curiosidade e o pensamento crítico. Oferecemos atenção individualizada para que cada aluno desenvolva seu potencial único, em um ambiente seguro e acolhedor.",
      color: "#00C9A7",
      gradientFrom: "#4FACFE",
      gradientTo: "#00C9A7"
    },
    {
      title: "Anos Finais",
      description: "Nessa etapa, aprofundamos conhecimentos para o ingresso no Ensino Médio.",
      imageSrc: "/images/courses/finais.webp",
      longDescription: "Nos Anos Finais do Ensino Fundamental (6º ao 9º ano), aprofundamos os conhecimentos disciplinares e preparamos os estudantes para os desafios do Ensino Médio. Com professores especialistas em cada área, promovemos a autonomia nos estudos e o desenvolvimento do pensamento científico. Nossos alunos são incentivados a explorar suas aptidões através de projetos práticos e atividades extracurriculares, construindo bases sólidas para seu futuro acadêmico.",
      color: "#8E78FF",
      gradientFrom: "#A18CD1",
      gradientTo: "#8E78FF"
    },
    {
      title: "Ensino Médio",
      description: "Nessa etapa, formamos pessoas aptas para o ingresso no Ensino Superior.",
      imageSrc: "/images/courses/medio.webp",
      longDescription: "Nosso Ensino Médio combina excelência acadêmica com formação integral do estudante. Preparamos para os vestibulares e o ENEM com metodologias ativas de aprendizagem, desenvolvendo protagonismo e pensamento crítico. Oferecemos orientação vocacional, projetos de iniciação científica e atividades que promovem habilidades socioemocionais essenciais para o século XXI. Formamos jovens preparados tanto para o ingresso no Ensino Superior quanto para os desafios da vida contemporânea.",
      color: "#FF3D71",
      gradientFrom: "#F857A6",
      gradientTo: "#FF3D71"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8" style={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
      <div className="mb-8 flex items-center">
        <h2 className="text-2xl font-bold text-blue-600 relative">
          Segmentos
          <span className="absolute -bottom-1 left-0 w-12 h-1 bg-yellow-400"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <SegmentCard
            key={index}
            title={segment.title}
            description={segment.description}
            imageSrc={segment.imageSrc}
            longDescription={segment.longDescription}
            color={segment.color}
            gradientFrom={segment.gradientFrom}
            gradientTo={segment.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationalSegments;