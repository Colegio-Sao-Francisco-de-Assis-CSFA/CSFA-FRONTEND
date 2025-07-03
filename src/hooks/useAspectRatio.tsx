"use client";

import { useState, useEffect } from 'react';

const useAspectRatio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return {
    isMobile,
    aspectRatio: isMobile ? 'aspect-[1/1]' : 'aspect-[1920/500]',
    dimensions: isMobile ? { width: 500, height: 500 } : { width: 1920, height: 500 }
  };
};

export default useAspectRatio;