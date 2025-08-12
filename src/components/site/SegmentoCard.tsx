import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Segmento } from '@/app/segmentos/types';

interface SegmentoCardProps {
  segmento: Segmento;
}

export const SegmentoCard: React.FC<SegmentoCardProps> = ({ segmento }) => {
  const { url, metadescricao, cursos, produto } = segmento;
  const isAvailable = produto === 'disponivel';

  return (
    <Link href={`/segmentos/${url}`} passHref>
      <Card className={`h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 ${!isAvailable ? 'bg-gray-200' : ''}`}>
        <CardHeader>
          <CardTitle>{cursos[0].nome}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{metadescricao}</p>
          {!isAvailable && <p className="text-red-500 font-bold mt-2">Em breve</p>}
        </CardContent>
      </Card>
    </Link>
  );
};
