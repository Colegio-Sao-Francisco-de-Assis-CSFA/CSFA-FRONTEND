// components/site/Footer/FooterSocialLink.tsx
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { FooterSocialLinkProps } from './types';

const FooterSocialLink: React.FC<FooterSocialLinkProps> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      className="group relative p-3 rounded-lg bg-white/8 border border-white/15 hover:bg-white/12 transition-all duration-300 hover:scale-105"
      aria-label={`Link para ${icon}`}
    >
      <Icon
        icon={icon}
        width={20}
        height={20}
        className="text-blue-100 group-hover:text-blue-50 transition-colors duration-300"
      />
      <div className="absolute inset-0 rounded-lg bg-blue-400/0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
    </Link>
  );
};

export default FooterSocialLink;