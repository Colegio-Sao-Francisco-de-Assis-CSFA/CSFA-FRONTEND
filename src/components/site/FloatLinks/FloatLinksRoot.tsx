// components/site/FloatLinks/FloatLinksRoot.tsx
import React from 'react';
import { FloatLinksRootProps } from './types';

const FloatLinksRoot: React.FC<FloatLinksRootProps> = ({ children }) => {
  return (
    <div className="fixed flex flex-row bottom-5 right-1/2 translate-x-1/2 lg:translate-x-0 rounded-full lg:bottom-6 lg:right-6 lg:flex-col gap-3 z-[999]">
      {children}
    </div>
  );
};

export default FloatLinksRoot;