'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {LinkButton} from '@/components/site/Button';
import { SobreColegioHeroProps } from './types';

const SobreColegioHero: React.FC<SobreColegioHeroProps> = ({
  mainTitle,
  shortDescription,
  ctaText,
  ctaLink,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
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
        variants={{
          hidden: { scale: 1.1, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: 'easeOut',
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src="/images/background-site.png"
          alt="Alunos no campus do colégio ou vista geral"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Modern gradient overlay with better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 drop-shadow-2xl"
          variants={itemVariants}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {mainTitle}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 leading-relaxed font-light"
          variants={itemVariants}
        >
          {shortDescription}
        </motion.p>

        <motion.div variants={itemVariants}>
          <LinkButton href='/sobre'>
            Saiba mais
          </LinkButton>
        </motion.div>
      </motion.div>

      {/* Floating Elements for Modern Touch */}
      <motion.div
        className="absolute top-1/4 left-4 w-16 h-16 bg-white/10 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-8 w-24 h-24 bg-blue-300/10 rounded-full blur-sm"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-8 h-8 bg-indigo-200/20 rounded-full blur-sm"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default SobreColegioHero;