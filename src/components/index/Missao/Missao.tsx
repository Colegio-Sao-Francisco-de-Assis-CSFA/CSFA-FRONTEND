"use client";

import { MotionProps } from 'motion/react';
import type { FC } from 'react';
import { AnimatedSection } from './AnimateSection';
import { MissionContent } from './MissionContent';

const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const MissaoColegio: FC = () => {
  const content = {
    title: "Formando jovens transformadores da sociedade",
    subtitle: "Educação + Espiritualidade + Valores Humanos",
    buttonText: "Conheça nosso colégio",
  };

  return (
    <>
      <AnimatedSection {...fadeInUp}>
        <MissionContent {...content} />
      </AnimatedSection>
    </>
  );
};

export default MissaoColegio;