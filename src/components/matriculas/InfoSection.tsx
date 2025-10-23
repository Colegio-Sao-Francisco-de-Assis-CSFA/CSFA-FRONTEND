// src/components/matriculas/InfoSection.tsx
import React from 'react';
import { Book, Calendar, Award } from 'lucide-react';

const infoItems = [
  { icon: <Book />, title: 'Documentos Necessários', content: 'RG, CPF, Comprovante de Residência e Histórico Escolar.' },
  { icon: <Calendar />, title: 'Prazos', content: 'As matrículas para 2026 estão abertas de 1 de Agosto a 30 de Novembro de 2025.' },
  { icon: <Award />, title: 'Bolsas de Estudo', content: 'Oferecemos diversas modalidades de bolsas. Entre em contato para saber mais.' },
];

export const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
