// src/components/parcerias/BecomePartnerSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const BecomePartnerSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Seja um Parceiro</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Acreditamos no poder da colaboração. Se sua empresa ou instituição compartilha dos nossos valores e quer fazer a diferença na educação, entre em contato conosco.
        </p>
        <Link href="/o-colegio/contato" passHref>
          <Button size="lg" variant="secondary">Entre em Contato</Button>
        </Link>
      </div>
    </section>
  );
};
