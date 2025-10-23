// src/components/matriculas/CtaSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
        <p className="text-lg mb-8">Garanta a vaga do seu filho em uma escola que transforma.</p>
        <Button size="lg" variant="secondary">Inscreva-se Agora</Button>
      </div>
    </section>
  );
};
