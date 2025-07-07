// components/site/CallToAction/CallToActionVisitForm.tsx
'use client';

import React, { useState } from 'react';
import { CallToActionVisitFormProps } from './types';
import { SubmitButton } from '@/components/site/Button';

// Componente para o botão de submissão (reutilizado)


const CallToActionVisitForm: React.FC<CallToActionVisitFormProps> = ({
  title,
  description,
  onSubmitAction,
}) => {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const formAction = async (formData: FormData) => {
    setMessage('');
    setIsSuccess(null);

    const result = await onSubmitAction(formData);

    if (result.success) {
      setMessage(result.message);
      setIsSuccess(true);
      // Opcional: Resetar os campos do formulário aqui
      const formElement = document.getElementById('visit-form') as HTMLFormElement;
      if (formElement) formElement.reset();
    } else {
      setMessage(result.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-8 text-lg max-w-2xl text-blue-100">{description}</p>

      <form id="visit-form" action={formAction} className="w-full flex flex-col gap-4">
        <div className='w-full flex flex-row gap-4'>
          <input
            type="text"
            name="responsibleName"
            placeholder="Nome do Responsável"
            className="p-3 w-1/2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          <input
            type="text"
            name="studentName"
            placeholder="Nome do Aluno (opcional)"
            className="p-3 w-1/2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className='w-full flex flex-row gap-4'>
          <input
            type="tel"
            name="phone"
            placeholder="(DD) XXXXX-XXXX"
            className="p-3 w-1/2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="responsavel@email.com"
            className="p-3 w-1/2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <SubmitButton>
          Assine já
        </SubmitButton>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${isSuccess ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CallToActionVisitForm;