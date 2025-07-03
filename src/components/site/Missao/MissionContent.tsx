import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { MissionContentProps } from './types';

export const MissionContent: FC<MissionContentProps> = ({ title, subtitle, buttonText }) => (
  <>
    <h2 className="text-3xl md:text-6xl font-bold text-blue-800 text-center">
      {title}
    </h2>
    <p className="text-lg md:text-4xl text-blue-600 text-center font-medium">
      {subtitle}
    </p>
    <div className="flex justify-center">
      <Button className='p-8 rounded-full bg-blue-600 text-xl transition-colors cursor-pointer hover:bg-blue-800' size="lg">
        {buttonText}
      </Button>
    </div>
  </>
);

