// components/site/news/NewsCard.tsx
'use client';

import React from 'react';
import { NewsCard as SharedNewsCard } from '@/components/shared/Card';
import { NewsCardProps } from './types';

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return <SharedNewsCard item={item} />;
};