'use client'; // Se este componente usa hooks de cliente (como `useState`, mas para `CallToActionMap` geralmente não é necessário)
import React from 'react';
import { CallToActionMapProps } from './types';

const CallToActionMap: React.FC<CallToActionMapProps> = ({ mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7700141.248530441!2d-48.749246884045505!3d-19.548713589904175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce454c8e2d388f%3A0x57d164235e210ee7!2sCol%C3%A9gio%20S%C3%A3o%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1744146727757!5m2!1spt-BR!2sbr' }) => {
  return (
    <div className="hidden md:w-1/2 md:flex justify-center">
      <div className="rounded-lg overflow-hidden p-8 w-full">
        <iframe
          className='w-full h-64 border-0 rounded-md'
          src={mapSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default CallToActionMap;