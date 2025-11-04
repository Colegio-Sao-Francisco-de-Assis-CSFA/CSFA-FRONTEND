// sections/ContactSection.tsx
'use client';

import React from 'react';

import {
  ContactHeader,
  ContactForm,
  ContactDetails,
  SocialMediaLinks,
} from '@/components/index/Contact';

const ContactSection: React.FC = () => {

  return (
    <section className="py-20 bg-background max-w-screen-xl mx-auto" id="contato">
      <div
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="lg:col-span-1"
          >
            <ContactHeader />
            <ContactForm />
          </div>

          {/* Lado Direito - Detalhes e Redes Sociais */}
          <div className="lg:col-span-1 flex flex-col justify-end space-y-8 p-2">
            <ContactDetails variants={''}/>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;