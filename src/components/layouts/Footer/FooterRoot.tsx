// components/site/Footer/FooterRoot.tsx
import React from 'react';
import { FooterRootProps } from './types';

const FooterRoot: React.FC<FooterRootProps> = ({ children, }) => {
  return (
    <footer className={`w-full bg-gradient-to-b from-blue-950 to-blue-800 dark:bg-none dark:bg-background text-white py-10 relative z-50 bottom-0`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
};

export default FooterRoot;