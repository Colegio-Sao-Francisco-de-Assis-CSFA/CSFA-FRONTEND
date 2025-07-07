// components/site/SobreColegio/SobreColegioFeaturesCarousel.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Importe estilos adicionais se customizou a navegação/paginação do Swiper

import { CardItem } from './CardItem';
import { FeatureCardData, SobreColegioFeaturesCarouselProps } from './types';
import { GraduationCap, Globe, BookOpen, Lightbulb } from "lucide-react";

// Dados dos cards (como fornecido no seu código)
const defaultFeatures: FeatureCardData[] = [
  {
    icon: GraduationCap,
    title: "Orientação Católica",
    description: "O colégio promove uma educação baseada na solidariedade, respeito e fraternidade, formando cidadãos comprometidos com um mundo mais justo.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: Globe,
    title: "Jovens Transformadores",
    description: "Preparamos nossos alunos para serem agentes de mudança na sociedade, desenvolvendo senso crítico, liderança e responsabilidade social.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: BookOpen,
    title: "Inovação Pedagógica",
    description: "Conteúdo atualizado, metodologias ativas e tecnologia integrada para um aprendizado dinâmico e eficaz, preparando para o futuro.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento Integral",
    description: "Foco no crescimento acadêmico, social e emocional, promovendo autonomia, criatividade e valores essenciais para a vida.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
];

const SobreColegioFeaturesCarousel: React.FC<SobreColegioFeaturesCarouselProps> = ({
  features = defaultFeatures,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className="py-12 md:py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nossos Diferenciais</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Conheça os pilares que nos tornam uma referência em educação.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          // Remova qualquer tentativa de usar `bulletActiveClass` com múltiplas classes aqui
          // ou `renderBullet` que concatene classes com espaços inválidos.
          // A personalização será feita via CSS global.
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper py-8"
      >
        {features.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-stretch">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full w-full max-w-sm"
            >
              <CardItem {...card} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SobreColegioFeaturesCarousel;