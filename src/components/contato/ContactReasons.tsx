// src/components/contato/ContactReasons.tsx
import React from 'react';
import { Users, Briefcase, Megaphone, School } from 'lucide-react';

const reasons = [
  {
    icon: <School className="w-8 h-8 text-blue-600" />,
    title: 'Visitas e Admissões',
    description: 'Agende uma visita para conhecer nossa estrutura e proposta pedagógica.',
    link: '/o-colegio/matriculas',
    linkText: 'Saiba Mais',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Secretaria',
    description: 'Para assuntos administrativos, documentação e informações gerais.',
    link: 'tel:7932461273',
    linkText: 'Ligar Agora',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Trabalhe Conosco',
    description: 'Faça parte da nossa equipe. Envie seu currículo.',
    link: '/o-colegio/trabalhe-conosco',
    linkText: 'Ver Vagas',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-600" />,
    title: 'Comunicação e Imprensa',
    description: 'Para parcerias, eventos e contato com a imprensa.',
    link: 'mailto:comunicacao@csfa.com.br',
    linkText: 'Enviar Email',
  },
];

export const ContactReasons: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Como podemos ajudar?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {reason.icon}
              <h3 className="ml-4 text-xl font-semibold">{reason.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{reason.description}</p>
            <a href={reason.link} className="text-blue-600 font-semibold hover:underline">
              {reason.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
