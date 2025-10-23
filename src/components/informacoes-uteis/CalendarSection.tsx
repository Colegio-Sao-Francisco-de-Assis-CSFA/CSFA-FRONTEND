// src/components/informacoes-uteis/CalendarSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CalendarSection: React.FC = () => {
  return (
    <section id="calendario" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Calendário Acadêmico</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Acesse nosso calendário acadêmico para ficar por dentro de todas as datas importantes, feriados e eventos do ano letivo.</p>
        <Link href="/calendario.pdf" passHref target="_blank">
          <Button size="lg">Baixar Calendário 2026</Button>
        </Link>
      </div>
    </section>
  );
};
