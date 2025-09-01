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
    <div className="mt-12 pt-8 relative">
      {/* Linha divisória sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-6 md:gap-0">
        <p className="text-center text-sm md:text-base text-blue-100 opacity-80">
          © {year.toString()} {copyrightText}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link
            href={privacyPolicyHref}
            className="relative group px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center text-sm"
          >
            <span className="relative z-10 text-blue-100 group-hover:text-blue-50 transition-colors duration-300 opacity-90 group-hover:opacity-100">
              {privacyPolicyText}
            </span>
          </Link>

          <a
            href={developerHref}
            className="relative group px-6 py-2 rounded-lg bg-blue-500/15 border border-blue-400/20 hover:bg-blue-500/20 transition-all duration-300 text-center text-sm font-medium hover:scale-105"
          >
            <span className="relative z-10 text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
              {developerText}
            </span>
            <div className="absolute inset-0 rounded-lg bg-blue-400/0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBar;