// components/site/Parceiros/ParceirosHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ParceirosHeaderProps } from './types';

const ParceirosHeader: React.FC<ParceirosHeaderProps> = ({  title, subtitle, description }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="mb-12 max-w-4xl mx-auto text-center">
      
      {/* Título principal com estilo da imagem */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight mb-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Subtítulo/Parágrafo introdutório principal */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        {subtitle}
      </motion.p>

      {/* Descrição adicional sobre a parceria (se existir) */}
      {description && (
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default ParceirosHeader;