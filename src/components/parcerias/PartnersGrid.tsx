// src/components/parcerias/PartnersGrid.tsx
import React from 'react';
import { PartnerCard } from './PartnerCard';

const partners = [
  { name: 'SAS Plataforma de Educação', logo: '/images/partners/sas.png', description: 'Soluções educacionais completas e integradas.', siteUrl: 'https://saseducacao.com.br/' },
  { name: 'Google for Education', logo: '/images/partners/google.png', description: 'Ferramentas digitais para uma sala de aula mais conectada.', siteUrl: 'https://edu.google.com/' },
  { name: 'Kumon', logo: '/images/partners/kumon.png', description: 'Método de estudo individualizado para matemática e português.', siteUrl: 'https://www.kumon.com.br/' },
  { name: 'Yázigi', logo: '/images/partners/yazigi.png', description: 'Cursos de idiomas com metodologia de excelência.', siteUrl: 'https://www.yazigi.com.br/' },
  { name: 'Maker', logo: '/images/partners/maker.png', description: 'Projetos de robótica e cultura maker.', siteUrl: '#' },
  { name: 'Raia Livre', logo: '/images/partners/raia-livre.png', description: 'Escola de natação para todas as idades.', siteUrl: '#' },
];

export const PartnersGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};
