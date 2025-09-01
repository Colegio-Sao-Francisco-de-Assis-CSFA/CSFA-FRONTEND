// components/site/Footer/FooterInfoColumn.tsx
import React from 'react';
import { FooterInfoColumnProps } from './types';
import FooterSectionHeader from './FooterSectionHeader';
import FooterSocialLink from './FooterSocialLink';

const FooterInfoColumn: React.FC<FooterInfoColumnProps> = ({ title, description, socialLinks }) => {
  return (
    <div className="p-6">
      <FooterSectionHeader title={title} />
      <p className="text-blue-100 text-sm mb-8 max-w-xs leading-relaxed opacity-90">
        {description}
      </p>
      <div className="flex space-x-3">
        {socialLinks.map((link, index) => (
          <FooterSocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default FooterInfoColumn;