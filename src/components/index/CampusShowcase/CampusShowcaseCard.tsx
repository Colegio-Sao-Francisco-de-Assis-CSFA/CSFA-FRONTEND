// components/site/CampusShowcase/CampusShowcaseCard.tsx
'use client';

import React from 'react';
import { CampusCard } from '@/components/shared/Card';
import { CampusShowcaseCardProps } from './types';

const CampusShowcaseCard: React.FC<CampusShowcaseCardProps> = ({ feature }) => {
  return <CampusCard feature={feature} />;
};

export default CampusShowcaseCard;