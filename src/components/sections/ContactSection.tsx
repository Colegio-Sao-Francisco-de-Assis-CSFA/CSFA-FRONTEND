// sections/ContactSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
  ContactHeader,
  ContactForm,
  ContactInfoCard,
  ContactDetails,
  SocialMediaLinks,
  ContactInfoCardProps
} from '@/components/site/Contact'; // Ajuste o caminho conforme sua estrutura

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-background max-w-screen-xl mx-auto" id="contato">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <ContactHeader
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            />
            <ContactForm itemVariants={itemVariants} />
          </motion.div>

          {/* Lado Direito - Detalhes e Redes Sociais */}
          <motion.div className="lg:col-span-1 flex flex-col justify-end space-y-8 p-2">
            <ContactDetails variants={itemVariants} />
            <SocialMediaLinks />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;