// components/site/Footer/FooterLinkColumn.tsx
import React from 'react';
import Link from 'next/link';
import { FooterLinkColumnProps } from './types';
import FooterSectionHeader from './FooterSectionHeader';

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => {
  return (
    <div className="p-6">
      <FooterSectionHeader title={title} />
      <ul className="space-y-3 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-blue-100 hover:text-blue-50 transition-all duration-300 hover:translate-x-1 inline-block relative group opacity-90 hover:opacity-100"
            >
              <span className="relative z-10">{link.text}</span>
              <div className="absolute inset-0 bg-blue-400/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 -mx-2 -my-1"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;