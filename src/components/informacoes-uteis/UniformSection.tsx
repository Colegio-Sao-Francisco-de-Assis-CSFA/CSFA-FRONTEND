// src/components/informacoes-uteis/UniformSection.tsx
import React from 'react';
import Image from 'next/image';

export const UniformSection: React.FC = () => {
  return (
    <section id="uniformes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Uniformes</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-lg text-gray-600">
            <p className="mb-4">O uso do uniforme é um item de segurança e identificação do aluno, sendo obrigatório em todas as atividades escolares.</p>
            <p>Ele está disponível para compra nas lojas parceiras credenciadas.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/courses/infantil.webp" alt="Uniforme de Verão" width={300} height={400} className="rounded-lg shadow-md" />
            <Image src="/images/courses/iniciais.webp" alt="Uniforme de Inverno" width={300} height={400} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};
