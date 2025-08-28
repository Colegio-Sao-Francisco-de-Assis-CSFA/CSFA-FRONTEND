// components/site/Footer/FooterBottomBar.tsx
import React from 'react';
import Link from 'next/link';
import { FooterBottomBarProps } from './types';

const FooterBottomBar: React.FC<FooterBottomBarProps> = ({
  year,
  copyrightText,
  privacyPolicyHref,
  privacyPolicyText,
  developerHref,
  developerText,
}) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 md:gap-0">
      <p className="text-center text-xs md:text-sm">
        © {year.toString()} {copyrightText}
      </p>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
        <Link href={privacyPolicyHref} className="hover:text-white transition-colors duration-200 text-center text-xs md:text-sm">
          {privacyPolicyText}
        </Link>
        <a href={developerHref} className="text-blue-200 hover:text-white transition-colors duration-200 text-center text-xs md:text-sm font-medium">
          {developerText}
        </a>
      </div>
    </div>
  );
};

export default FooterBottomBar;