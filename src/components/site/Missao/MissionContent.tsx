import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { MissionContentProps } from './types';

export const MissionContent: FC<MissionContentProps> = ({ title, subtitle, buttonText }) => (
  <div className="sm:px-6 md:px-8 lg:px-10 flex flex-col gap-2 lg:gap-6">
    <h1 className="text-3xl text-center lg:text-6xl font-black leading-tight">
      <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
        Formando Jovens
      </span>
      <br />
      <span className="text-center bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 bg-clip-text text-transparent">
       Transformadores da sociedade
      </span>
    </h1>
    <p className="text-lg md:text-2xl lg:text-4xl text-gray-600 text-center font-medium mt-2 sm:mt-4"> {/* Tamanho do subtítulo ajustado e margem superior */}
      {subtitle}
    </p>
    <div className="flex justify-center mt-6 sm:mt-8"> {/* Margem superior para espaçamento */}
      <Button className='py-3 px-6 sm:py-4 sm:px-8 md:py-8 md:px-10 rounded-full bg-blue-600 text-base sm:text-lg md:text-2xl transition-colors cursor-pointer hover:bg-blue-800' size="lg"> {/* Tamanho do botão e texto do botão ajustados */}
        {buttonText}
      </Button>
    </div>
  </div>
);