// components/site/Footer/FooterSectionHeader.tsx
import React from 'react';
import { FooterSectionHeaderProps } from './types';

const FooterSectionHeader: React.FC<FooterSectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="font-semibold text-lg md:text-xl mb-4 text-blue-100">
      {title}
    </h2>
  );
};

export default FooterSectionHeader;