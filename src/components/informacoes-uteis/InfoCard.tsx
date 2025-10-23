// src/components/informacoes-uteis/InfoCard.tsx
import React from 'react';
import Link from 'next/link';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};
