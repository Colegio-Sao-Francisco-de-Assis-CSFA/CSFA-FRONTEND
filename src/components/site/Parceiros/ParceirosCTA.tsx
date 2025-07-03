// components/site/Parceiros/ParceirosCTA.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ParceirosCTAProps } from './types';

const ParceirosCTA: React.FC<ParceirosCTAProps> = ({ text, buttonText, onButtonClick }) => {
  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.8 } },
  };

  const buttonHover = {
    scale: 1.03,
    y: -1,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <motion.div
      className="mt-16 text-center"
      variants={ctaVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        {text}
      </p>
      <motion.button
        onClick={onButtonClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all duration-200 shadow-lg"
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default ParceirosCTA;