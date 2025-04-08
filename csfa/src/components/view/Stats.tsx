import React from 'react';
import { Users, Calendar, BookOpen, MapPin } from 'lucide-react';

interface Statistic {
  id: string;
  icon: React.ReactNode;
  value: string;
  description: string;
}

const StatsArea: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: 'students',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: '2500+',
      description: 'Alunos formados'
    },
    {
      id: 'experience',
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      value: '41',
      description: 'Anos de experiência'
    },
    {
      id: 'approval',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      value: '98',
      description: 'Aprovação em vestibulares (%)'
    },
    {
      id: 'professionals',
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      value: '120+',
      description: 'Profissionais qualificados'
    }
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="w-16 h-1 bg-blue-700 mr-4"></div>
            <h2 className="text-4xl font-bold text-blue-700">
              Nossa Excelência em Números
            </h2>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsArea;
