'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { LinkButton } from '@/components/site/Button';
import { SobreColegioHeroProps } from './types';

const SobreColegioHero: React.FC<SobreColegioHeroProps> = ({
  mainTitle,
  subtitle,
  shortDescription,
  ctaText,
  ctaLink,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
        mass: 0.8,
        duration: 0.7,
      },
    },
  };



  return (
    <div
      ref={ref}
      className="relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background Image with Modern Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Image
          src="/images/background-site.png"
          alt="Alunos no campus do colégio ou vista geral"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-screen-xl mx-auto p-4 sm:p-6 "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="text-3xl max-w-72 mx-auto sm:max-w-lg lg:max-w-2xl xl:max-w-screen-xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl" // Ajustei a margem inferior para dar espaço ao subtítulo
          variants={itemVariants}
          style={{
            background: 'linear-gradient(135deg, #ffffff 30%, #a7d9ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {mainTitle}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 opacity-90 drop-shadow-lg" // Classes para o subtítulo
            variants={itemVariants}
            style={{
              background: 'linear-gradient(135deg, #e0f2fe 0%, #90caf9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 leading-relaxed font-sans"
          variants={itemVariants}
        >
          {shortDescription}
        </motion.p>

        <motion.div variants={itemVariants}>
          <LinkButton href={ctaLink}>
            {ctaText}
          </LinkButton>
        </motion.div>
      </motion.div>

      {/* Floating Elements for Modern Touch */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-12 h-12 md:w-16 md:h-16 bg-white/15 rounded-full blur-sm"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[7%] w-16 h-16 md:w-20 md:h-20 bg-blue-300/15 rounded-full blur-sm"
        animate={{
          y: [0, 25, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
          repeatDelay: 0.8,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-[15%] w-6 h-6 md:w-8 md:h-8 bg-indigo-200/20 rounded-full blur-sm"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
          repeatDelay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-10 h-10 md:w-14 md:h-14 bg-purple-300/10 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
          repeatDelay: 0.7,
        }}
      />
    </div>
  );
};

export default SobreColegioHero;