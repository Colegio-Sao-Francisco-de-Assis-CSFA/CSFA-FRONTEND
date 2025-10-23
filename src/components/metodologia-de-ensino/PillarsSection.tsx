// src/components/metodologia-de-ensino/PillarsSection.tsx
import React from 'react';
import { Brain, Users, Rocket, Heart } from 'lucide-react';

const pillars = [
  { icon: <Brain />, title: 'Sociointeracionismo', description: 'Acreditamos que o aprendizado é uma construção social, mediada pela interação com o outro e com o meio.' },
  { icon: <Rocket />, title: 'Tecnologia Educacional', description: 'Utilizamos a tecnologia como ferramenta para potencializar a aprendizagem e preparar os alunos para o futuro.' },
  { icon: <Users />, title: 'Projetos Interdisciplinares', description: 'Estimulamos a resolução de problemas e o trabalho em equipe através de projetos que conectam diferentes áreas do conhecimento.' },
  { icon: <Heart />, title: 'Formação de Valores', description: 'Nossa metodologia é pautada em valores como ética, respeito e solidariedade, formando cidadãos conscientes.' },
];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4">{React.cloneElement(pillar.icon, { size: 48 })}</div>
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
