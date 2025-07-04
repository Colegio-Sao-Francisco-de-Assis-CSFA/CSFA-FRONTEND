// components/site/CallToAction/CallToActionNewsletter.tsx
'use client';

import React, { useState } from 'react';
import { CallToActionNewsletterProps } from './types';
import { useFormStatus } from 'react-dom'; // Hook para status de formulário com Server Actions

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-white transition-all duration-200 ease-in-out border hover:bg-gradient-to-bl hover:from-blue-900 hover:to-blue-600 hover:border-white text-blue-600 hover:text-white font-medium py-3 px-6 rounded-md "
      disabled={pending} // Desabilita o botão enquanto a ação está pendente
    >
      {pending ? 'Enviando...' : 'Inscrever-se'} {/* Texto de carregamento */}
    </button>
  );
}

const CallToActionNewsletter: React.FC<CallToActionNewsletterProps> = ({
  title,
  description,
  placeholderText = 'Seu e-mail',
  onSubmitAction,
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Para feedback ao usuário
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Ação a ser executada quando o formulário é submetido
  const formAction = async (formData: FormData) => {
    setMessage(''); // Limpa mensagens anteriores
    setIsSuccess(null);

    const submittedEmail = formData.get('email') as string;
    if (!submittedEmail) {
      setMessage('Por favor, insira um e-mail válido.');
      setIsSuccess(false);
      return;
    }

    const result = await onSubmitAction(submittedEmail);

    if (result.success) {
      setMessage(result.message);
      setIsSuccess(true);
      setEmail('');
    } else {
      setMessage(result.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-2xl mb-8 md:mb-0">
      <h2 className="text-2xl md:text-4xl text-white font-extrabold mb-4">{title}</h2>
      <p className="mb-8 text-lg text-center mx-auto pt-4 text-gray-100 max-w-lg">{description}</p>
      {/* Use o atributo action do form para chamar a Server Action */}
      <form action={formAction} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          name="email"
          placeholder={placeholderText}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow p-3 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
        <SubmitButton />
      </form>
      {message && (
        <p className={`mt-4 text-sm ${isSuccess ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CallToActionNewsletter;