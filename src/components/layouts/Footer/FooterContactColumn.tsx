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
    <div className="p-6">
      <FooterSectionHeader title={title} />
      <address className="not-italic text-blue-100 text-sm space-y-2 md:space-y-3 opacity-90">
        {addressLines.map((line, index) => (
          <p key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 bg-blue-400/70 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            {line}
          </p>
        ))}
        <p className="pt-3 flex items-center">
          <span className="w-1.5 h-1.5 bg-indigo-400/70 rounded-full mr-3 flex-shrink-0"></span>
          {phone}
        </p>
        <p className="flex items-center">
          <span className="w-1.5 h-1.5 bg-blue-300/70 rounded-full mr-3 flex-shrink-0"></span>
          <a
            href={emailHref}
            className="hover:text-blue-50 transition-colors duration-300 hover:underline decoration-blue-400/50"
          >
            {emailText}
          </a>
        </p>
      </address>
    </div>
  );
};

export default FooterContactColumn;