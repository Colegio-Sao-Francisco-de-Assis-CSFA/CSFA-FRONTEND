// src/components/parcerias/PartnerCard.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  siteUrl: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ name, logo, description, siteUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-40">
        <Image src={logo} alt={name} layout="fill" objectFit="contain" className="p-4" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={siteUrl} passHref target="_blank">
          <Button variant="outline">Visitar Site</Button>
        </Link>
      </div>
    </div>
  );
};
