// site/Contact/ContactHeader.tsx
'use client'; // Manter para consistência com motion/react e para evitar potenciais mismatches

import React from 'react';
import { motion, TargetAndTransition } from 'motion/react'; // Ajuste a importação

interface Props {
  initial: TargetAndTransition; // Tipo correto para 'initial' e 'animate'
  animate: TargetAndTransition;
}

const title = 'Entre em contato';
const subtitle = 'Estamos aqui para ajudar você. Envie sua mensagem e nossa equipe entrará em contato o mais breve possível.'

const ContactHeader: React.FC<Props> = ({ initial, animate }) => { // Remova as props não usadas
  return (
    <div className="text-start mb-4">

      <motion.h2
        className="text-3xl md:text4xl lg:text-6xl font-extrabold bg-gradient-to-bl from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight mb-4"
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
        {subtitle}
      </motion.p>


      <motion.span
        className="block w-24 h-1 bg-primary mt-2 mb-6 rounded-full">
      </motion.span>
    </div>
  );
};

export default ContactHeader;