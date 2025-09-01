// components/site/Footer/FooterSectionHeader.tsx
import React from 'react';
import { FooterSectionHeaderProps } from './types';

const FooterSectionHeader: React.FC<FooterSectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="font-semibold text-xl md:text-2xl mb-6 text-blue-50 relative">
      {title}
      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-400/60 rounded-full"></div>
    </h2>
  );
};

export default FooterSectionHeader;