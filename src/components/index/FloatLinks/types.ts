// components/site/FloatLinks/types.ts
import React from 'react';

export interface FloatLinksRootProps {
  children: React.ReactNode;
}

export interface FloatLinkItemProps {
  href: string;
  label: string;
  icon: string; 
  backgroundColorClass: string;
  initialIconColorClass?: string;
  hoverIconColorClass?: string;
}