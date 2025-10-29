// src/components/matriculas/FaqSection/FaqSection.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index, openFaq, setOpenFaq }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
    <button
      onClick={() => setOpenFaq(openFaq === index ? null : index)}
      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span className="font-bold text-lg text-gray-900 pr-4">{question}</span>
      <ChevronDown className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
    </button>
    {openFaq === index && (
      <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
        {answer}
      </div>
    )}
  </div>
);

const faqs = [
  {
    question: 'Qual a idade mínima para matrícula?',
    answer: 'A idade mínima para ingresso no Ensino Infantil é de 1 ano completo até 31 de março do ano letivo.',
  },
  {
    question: 'O colégio oferece atividades extracurriculares?',
    answer: 'Sim! Oferecemos esportes, artes, música, programação, robótica e muito mais. Todas as atividades são desenvolvidas para complementar a formação integral do aluno.',
  },
  {
    question: 'Como funciona o processo de adaptação?',
    answer: 'Temos um programa de adaptação individualizado para cada aluno, com acompanhamento de psicólogos e pedagogos durante todo o período de transição.',
  },
  {
    question: 'Qual a metodologia de ensino?',
    answer: 'Combinamos metodologias ativas com tecnologia educacional, sempre respeitando o ritmo e as características individuais de cada estudante.',
  },
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-600">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">Tire suas dúvidas</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
