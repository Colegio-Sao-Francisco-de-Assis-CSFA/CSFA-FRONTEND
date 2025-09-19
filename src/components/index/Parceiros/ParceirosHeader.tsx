// components/site/Parceiros/ParceirosHeader.tsx
import React from 'react';
import { motion } from 'motion/react';
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
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight mb-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Subtítulo/Parágrafo introdutório principal */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        Não são apenas apoiadores os {' '}
        <span className='text-primary font-bold'>
          nossos parceiros
        </span>
        {' '}— são co-criadores de um futuro mais justo, mais humano e mais cheio de possibilidades.
      </motion.p>

      {/* Linha decorativa */}
      <motion.span
        className="block w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.span>
    </div>
  );
};

export default ParceirosHeader;