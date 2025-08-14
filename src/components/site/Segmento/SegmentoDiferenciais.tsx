import React from 'react';
import Image from 'next/image';
import { Diferencial } from '@/components/site/Segmento/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';


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
                  <Icon icon={diferencial.iconName} className='text-blue-600' />
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
