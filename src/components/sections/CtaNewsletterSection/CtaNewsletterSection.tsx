// src/components/sections/CtaNewsletterSection/CtaNewsletterSection.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CtaNewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Assine nossa Newsletter
        </h2>
        <p className="mt-4 text-lg leading-8 text-blue-100">
          Fique por dentro das nossas últimas notícias e atualizações.
        </p>
        <form className="mt-6 sm:flex sm:justify-center">
          <div className="relative rounded-md shadow-sm sm:max-w-md sm:w-full">
            <Input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-2.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <Button type="submit" variant="secondary">
              Assinar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CtaNewsletterSection;
