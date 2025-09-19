// site/Contact/ContactInfoCard.tsx
'use client'; // ESSENCIAL: Garante que este componente é um Client Component

import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react'; // Importa Icon do Iconify
import { ContactInfoCardProps } from './types'; // Importa a interface

interface Props {
  item: ContactInfoCardProps;
  variants: any; // motion/react variants
}

const ContactInfoCard: React.FC<Props> = ({ item, variants }) => {
  return (
    <motion.div
      // Usa bg-card, border-border do globals.css
      className="flex items-start space-x-4 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border group"
      variants={variants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        {/* Renderiza o ícone do Iconify */}
        <Icon icon={item.icon} className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        {/* Usa text-foreground e text-muted-foreground do globals.css */}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;