// components/site/Footer/FooterContactColumn.tsx
import React from 'react';
import { FooterContactColumnProps } from './types';
import FooterSectionHeader from './FooterSectionHeader';

const FooterContactColumn: React.FC<FooterContactColumnProps> = ({
  title,
  addressLines,
  phone,
  emailHref,
  emailText,
}) => {
  return (
    <div>
      <FooterSectionHeader title={title} />
      <address className="not-italic text-gray-300 text-sm space-y-1 md:space-y-2">
        {addressLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p className="pt-2">{phone}</p>
        <p>
          <a href={emailHref} className="hover:text-white transition-colors duration-200">
            {emailText}
          </a>
        </p>
      </address>
    </div>
  );
};

export default FooterContactColumn;