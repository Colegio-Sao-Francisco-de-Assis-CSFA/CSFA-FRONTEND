// components/site/Footer/FooterSocialLink.tsx
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { FooterSocialLinkProps } from './types';

const FooterSocialLink: React.FC<FooterSocialLinkProps> = ({ href, icon }) => {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors duration-200" aria-label={`Link para ${icon}`}>
      <Icon icon={icon} width={24} height={24} />
    </Link>
  );
};

export default FooterSocialLink;