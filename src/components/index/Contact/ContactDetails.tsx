// site/Contact/ContactDetails.tsx
'use client'; // ESSENCIAL: Garante que este componente é um Client Component

import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react'; // Importa Icon do Iconify
import { ContactDetailProps, ContactDetailsProps } from './types'; // Importa a interface

const contactDetailsData: ContactDetailProps[] = [
  {
    icon: 'mdi:email-outline', // Iconify icon name
    label: 'E-mail',
    value: 'contato@instituicao.com.br'
  },
  {
    icon: 'mdi:phone', // Iconify icon name
    label: 'Telefone',
    value: '(11) 3456-7890'
  },
  {
    icon: 'mdi:whatsapp', // Iconify icon name
    label: 'Whatsapp',
    value: '(11) 3456-7890'
  },
  {
    icon: 'mdi:map-marker', // Iconify icon name
    label: 'Endereço',
    value: (
      <>
        Av. Institucional, 1234 - SP<br />CEP: 01234-567
      </>
    )
  }
];

const ContactDetails: React.FC<ContactDetailsProps> = ({ variants }) => {
  return (
    <motion.div
      // Usa bg-card e border-border do globals.css
      className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border p-6"
      variants={variants}
      whileHover={{ boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)' }} // Sombra pode ser estática ou definida para dark mode
    >
      <h3 className="text-xl font-bold text-foreground mb-6">Informações de Contato</h3>

      <div className="space-y-4">
        {contactDetailsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 group"
            whileHover={{ x: 5 }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-b from-indigo-800 via-blue-700 to-blue-500 text-white">
              <Icon icon={item.icon} className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactDetails;