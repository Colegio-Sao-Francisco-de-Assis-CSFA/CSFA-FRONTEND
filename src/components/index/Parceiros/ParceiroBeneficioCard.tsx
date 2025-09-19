// components/site/Parceiros/ParceiroBeneficioCard.tsx
import React from 'react';
import { ParceirosCard } from '@/components/shared/Card';
import { ParceiroBeneficioCardProps } from './types';

const ParceiroBeneficioCard: React.FC<ParceiroBeneficioCardProps> = ({ icon, title, description }) => {
  return <ParceirosCard icon={icon} title={title} description={description} />;
};

export default ParceiroBeneficioCard;