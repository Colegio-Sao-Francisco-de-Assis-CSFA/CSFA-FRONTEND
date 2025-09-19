"use client";

import { motion } from 'motion/react';
import type { FC } from 'react';
import { AnimatedSectionProps } from './types';

export const AnimatedSection: FC<AnimatedSectionProps> = ({ children, className, ...motionProps }) => (
  <motion.div
    className={`flex flex-col gap-12 w-full max-w-screen-2xl mx-auto ${className || ''}`}
    {...motionProps}
  >
    {children}
  </motion.div>
);