// src/components/matriculas/FaqSection.tsx
'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual a idade mínima para matrícula?',
    answer: 'A idade mínima para ingresso no Ensino Infantil é de 1 ano completo até 31 de março do ano letivo.',
  },
  {
    question: 'O colégio oferece atividades extracurriculares?',
    answer: 'Sim, oferecemos uma vasta gama de atividades como esportes, artes, música e programação.',
  },
  {
    question: 'Como funciona o processo de adaptação?',
    answer: 'Temos um programa de adaptação individualizado para cada aluno, com acompanhamento de psicólogos e pedagogos.',
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
