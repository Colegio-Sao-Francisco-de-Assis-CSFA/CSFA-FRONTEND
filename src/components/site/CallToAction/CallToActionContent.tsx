// components/site/CallToAction/CallToActionContent.tsx
import React from 'react';
import { CallToActionContentProps } from './types';
import { ArrowRight } from 'lucide-react'; // Exemplo de ícone

const CallToActionContent: React.FC<CallToActionContentProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  buttonIcon: ButtonIcon,
}) => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-8 text-lg max-w-2xl text-blue-100">{description}</p>
      <a
        href={buttonHref}
        className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300"
      >
        {buttonText}
        {ButtonIcon && <ButtonIcon className="ml-2 h-5 w-5" />}
      </a>
    </>
  );
};

export default CallToActionContent;