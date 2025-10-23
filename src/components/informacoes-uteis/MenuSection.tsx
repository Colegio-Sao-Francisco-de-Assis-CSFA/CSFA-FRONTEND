// src/components/informacoes-uteis/MenuSection.tsx
import React from 'react';

export const MenuSection: React.FC = () => {
  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cardápio do Refeitório</h2>
        <div className="text-center text-gray-500">
          <p>Nosso cardápio é elaborado por nutricionistas para garantir uma alimentação saudável e balanceada para os alunos.</p>
          <p className="mt-4">O cardápio da semana será disponibilizado em breve.</p>
        </div>
      </div>
    </section>
  );
};
