// src/components/informacoes-uteis/SuppliesSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const SuppliesSection: React.FC = () => {
  return (
    <section id="material" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Material Escolar</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">A lista de material escolar para cada série está disponível para download. Clique no botão abaixo para acessar.</p>
        <Link href="/materiais.pdf" passHref target="_blank">
          <Button size="lg">Ver Listas de Materiais</Button>
        </Link>
      </div>
    </section>
  );
};
