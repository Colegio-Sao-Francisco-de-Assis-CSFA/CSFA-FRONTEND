'use client';

// components/site/CallToAction/CallToActionRoot.tsx
import React from 'react';
import { CallToActionRootProps } from './types';

const CallToActionRoot: React.FC<CallToActionRootProps> = ({
  variant,
  backgroundColor = 'bg-blue-50',
  children,
}) => {
  if (variant === 'centered') {
    return (
      <section className={`w-full py-8 px-4 ${backgroundColor}`}> {/* Adicionado w-full */}
        <div className="max-w-screen-xl mx-auto text-center"> {/* Container para o conteúdo */}
          {children}
        </div>
      </section>
    );
  }

  return (
    <div className="w-screen py-4 px-8 bg-gradient-to-br from-blue-950 via-blue-700  to-blue-600 text-white"> {/* Adicionado w-full */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between"> {/* Container para o conteúdo */}
        {children}
      </div>
    </div>
  );
};

export default CallToActionRoot;