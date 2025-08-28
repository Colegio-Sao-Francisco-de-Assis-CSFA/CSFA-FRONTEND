// components/site/Footer/FooterInfoColumn.tsx
import React from 'react';
import { FooterInfoColumnProps } from './types';
import FooterSectionHeader from './FooterSectionHeader';
import FooterSocialLink from './FooterSocialLink';

const FooterInfoColumn: React.FC<FooterInfoColumnProps> = ({ title, description, socialLinks }) => {
  return (
    <div>
      <FooterSectionHeader title={title} />
      <p className="text-gray-300 text-sm mb-6 max-w-xs leading-relaxed">
        {description}
      </p>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <FooterSocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default FooterInfoColumn;