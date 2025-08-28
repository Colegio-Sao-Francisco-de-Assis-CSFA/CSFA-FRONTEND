// components/site/Footer/FooterLinkColumn.tsx
import React from 'react';
import Link from 'next/link';
import { FooterLinkColumnProps } from './types';
import FooterSectionHeader from './FooterSectionHeader';

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => {
  return (
    <div>
      <FooterSectionHeader title={title} />
      <ul className="space-y-3 md:space-y-2 text-sm"> {/* Ajuste de espaçamento para mobile */}
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;