// src/components/quem-somos/PedagogySummary.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const PedagogySummary: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Nossa Proposta Pedagógica</h2>
        <p className="text-lg text-gray-600 mb-8">
          Acreditamos em uma educação que vai além da sala de aula. Nossa metodologia une tradição e inovação para desenvolver o potencial máximo de cada aluno, preparando-os para os desafios do futuro.
        </p>
        <Link href="/o-colegio/metodologia-de-ensino" passHref>
          <Button size="lg">Conheça Nossa Metodologia</Button>
        </Link>
      </div>
    </section>
  );
};
