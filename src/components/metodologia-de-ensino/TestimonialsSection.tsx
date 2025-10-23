// src/components/metodologia-de-ensino/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  { name: 'Maria, Mãe de Aluno', quote: 'A metodologia do colégio foi fundamental para o desenvolvimento do meu filho. Ele está mais curioso e confiante.' },
  { name: 'João, Aluno do Ensino Médio', quote: 'Os projetos interdisciplinares me ajudaram a ver a conexão entre as matérias e a me preparar para o futuro.' },
  { name: 'Ana, Professora', quote: 'É gratificante trabalhar em uma escola que valoriza a inovação e o desenvolvimento integral dos alunos.' },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que Dizem Sobre Nós</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
