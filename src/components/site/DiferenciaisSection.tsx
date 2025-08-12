import React from 'react';
import Image from 'next/image';
import { Diferencial } from '@/app/segmentos/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';

// Carregamento dinâmico para ícones Lucide
const Icon = ({ name, ...props }: { name: string } & LucideProps) => {
  const LucideIcon = dynamic(() => import('lucide-react').then((mod) => mod[name as keyof typeof mod]));
  return <LucideIcon {...props} />;
};

interface DiferenciaisSectionProps {
  diferenciais: Diferencial[];
}

export const DiferenciaisSection: React.FC<DiferenciaisSectionProps> = ({ diferenciais }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nossos Diferenciais</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {diferenciais.map((diferencial) => (
            <li key={diferencial.title} className="flex items-center mb-4">
              <div className="mr-4">
                {diferencial.iconName ? (
                  <Icon name={diferencial.iconName} className="text-green-500" />
                ) : diferencial.imageUrl ? (
                  <Image src={diferencial.imageUrl} alt={diferencial.title} width={24} height={24} />
                ) : null}
              </div>
              <div>
                <h3 className="font-bold">{diferencial.title}</h3>
                <p className="text-gray-600">{diferencial.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
