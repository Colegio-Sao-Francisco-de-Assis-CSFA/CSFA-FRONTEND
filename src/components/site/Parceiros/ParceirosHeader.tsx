// components/site/Parceiros/ParceirosHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ParceirosHeaderProps } from './types';

const ParceirosHeader: React.FC<ParceirosHeaderProps> = ({ title }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="max-w-4xl mx-auto text-center">

      {/* Título principal com estilo da imagem */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
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
       Não são apenas apoiadores os {' '}
      <span className='text-blue-600 font-bold'>
        nossos parceiros
      </span>
       {' '}— são co-criadores de um futuro mais justo, mais humano e mais cheio de possibilidades.
      </motion.p>

    </div>
  );
};

export default ParceirosHeader;