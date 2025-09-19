// site/Contact/SocialMediaLinks.tsx
'use client'; // ESSENCIAL: Garante que este componente é um Client Component

import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react'; // Importa Icon do Iconify
import { SocialMediaLinkProps } from './types';

const socialMediaData: SocialMediaLinkProps[] = [
  { icon: 'mdi:instagram', href: '#', color: 'hover:bg-pink-500' },
  { icon: 'mdi:facebook', href: '#', color: 'hover:bg-blue-600' },
  { icon: 'mdi:linkedin', href: '#', color: 'hover:bg-blue-700' },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="mt-6 pt-6 border-t border-border">
      <h4 className="text-2xl font-semibold text-foreground mb-4">Redes Sociais</h4>
      <div className="flex space-x-3">
        {socialMediaData.map((social, idx) => (
          <motion.button
            key={idx}
            // Usa bg-muted, text-muted-foreground. 'color' aplica classes de hover específicas.
            className={`w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200 ${social.color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.icon.split(':')[1]}>
              <Icon icon={social.icon} className="w-10 h-10" />
            </a>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;