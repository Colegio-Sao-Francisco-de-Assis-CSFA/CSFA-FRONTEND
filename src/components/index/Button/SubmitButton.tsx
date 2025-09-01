// components/SubmitButton.tsx
'use client';

import { useFormStatus } from 'react-dom';
import React from 'react'; // Necessário para React.ReactNode

// Importe a interface de tipos
import { SubmitButtonProps } from './types';

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="cursor-pointer bg-gradient-to-b from-indigo-800 via-blue-700 to-blue-500 text-white hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-white hover:text-blue-600 max-w-52 font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full border border-blue-200 shadow-sm"
      disabled={pending}
    >
      {pending ? 'Enviando...' : children}
    </button>
  );
}