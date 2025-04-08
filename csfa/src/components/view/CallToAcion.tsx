// components/CallToAction.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  variant: 'centered' | 'side-by-side';
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  hasImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  // Nova propriedade para o mapa
  useMap?: boolean;
  mapSrc?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  variant,
  title,
  description,
  buttonText,
  buttonHref,
  hasImage = false,
  imageSrc = '',
  imageAlt = '',
  backgroundColor = 'bg-blue-50',
  useMap = false,
  mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7700141.248530441!2d-48.749246884045505!3d-19.548713589904175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce454c8e2d388f%3A0x57d164235e210ee7!2sCol%C3%A9gio%20S%C3%A3o%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1744146727757!5m2!1spt-BR!2sbr'
}) => {

  if (variant === 'centered') {
    return (
      <section className={`py-12 px-4 ${backgroundColor}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <a
            href={buttonHref}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            {buttonText}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-8xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="mb-8 text-blue-100">
            {description}
          </p>
          <a
            href={buttonHref}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {hasImage && (
          <div className="md:w-1/2 flex justify-center">
            {useMap ? (
              <div className="rounded-lg overflow-hidden p-8 w-full">
                <iframe
                  className='w-full h-64 border-0 rounded-md'
                  src={mapSrc}
                  // width="600"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="rounded-lg"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;