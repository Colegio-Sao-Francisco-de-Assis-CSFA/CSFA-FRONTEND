// components/site/CallToAction/CallToActionImage.tsx
import React from 'react';
import Image from 'next/image';
import { CallToActionImageProps } from './types';

const CallToActionImage: React.FC<CallToActionImageProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="hidden md:w-1/2 md:flex justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
};

export default CallToActionImage;