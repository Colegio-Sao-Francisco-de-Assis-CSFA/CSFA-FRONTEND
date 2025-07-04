// components/site/FloatLinks/FloatLinksRoot.tsx
import React from 'react';
import { FloatLinksRootProps } from './types';

const FloatLinksRoot: React.FC<FloatLinksRootProps> = ({ children }) => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[999]">
      {children}
    </div>
  );
};

export default FloatLinksRoot;