// src/components/nossa-historia/LegacySection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LegacySection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Nosso Legado, Nosso Futuro</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Honramos nossa história e olhamos para o futuro com a mesma paixão pela educação que nos move desde o início. Convidamos você a fazer parte desta jornada.
        </p>
        <Link href="/o-colegio/contato" passHref>
          <Button size="lg" variant="secondary">Entre em Contato</Button>
        </Link>
      </div>
    </section>
  );
};
