// components/site/CallToAction/CallToActionNewsletter.tsx
'use client';

import React, { useState } from 'react';
import { CallToActionNewsletterProps } from './types';
import { SubmitButton } from '@/components/site/Button';


const CallToActionNewsletter: React.FC<CallToActionNewsletterProps> = ({
  title,
  description,
  placeholderText = 'Seu e-mail',
  onSubmitAction,
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false); // Novo estado para o checkbox

  const formAction = async (formData: FormData) => {
    setMessage('');
    setIsSuccess(null);

    const submittedEmail = formData.get('email') as string;
    const termsChecked = formData.get('termos') === 'on'; // Verifica se o checkbox está marcado

    if (!submittedEmail) {
      setMessage('Por favor, insira um e-mail válido.');
      setIsSuccess(false);
      return;
    }

    if (!termsChecked) { // Nova validação para os termos
      setMessage('Você deve aceitar a Política de Privacidade para continuar.');
      setIsSuccess(false);
      return;
    }

    const result = await onSubmitAction(submittedEmail);

    if (result.success) {
      setMessage(result.message);
      setIsSuccess(true);
      setEmail('');
      setIsTermsAccepted(false); // Resetar o checkbox após sucesso
    } else {
      setMessage(result.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-4xl flex flex-col items-center justify-center mx-auto mb-8 md:flex-row md:mb-0 gap-6"> {/* Adicionado mx-auto para centralização */}
      <div className='mx-auto mb-4'>
        <h2 className="text-2xl text-center md:text-start md:text-4xl text-white font-extrabold mb-4">{title}</h2> {/* Centralizado o título */}
        <p className="text-lg max-w-96 text-center md:text-start pt-4 text-gray-100 md:max-w-lg">{description}</p>
      </div>

      <form action={formAction} className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 w-full"> {/* Ajustado para alinhar itens e criar espaçamento */}
        <div className='flex flex-col items-center justify-center mb-6 md:mb-0 w-full px-4 md:px-0 gap-2 md:items-start'> {/* Removido px-20, usando w-full e px-4 para responsividade */}
          <input
            type="email"
            name="email"
            placeholder={placeholderText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-82 p-3 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />

          <label htmlFor="termos" className='mt-2 flex gap-2 items-start justify-start text-start text-xs font-bold text-gray-200'>
            <input
              type="checkbox"
              name="termos"
              id="termos"
              checked={isTermsAccepted} // Controlado pelo estado
              onChange={(e) => setIsTermsAccepted(e.target.checked)} // Atualiza o estado
              className="mt-1 shrink-0" // Ajuste para o checkbox não ficar esticado
              required // Mantém o required HTML, mas a validação JS é mais robusta
            />
            Declaro estar ciente e aceito a Política de <br />
            Privacidade do CSFA, em conformidade com a LGPD.
          </label>
        </div>
        <SubmitButton children='Ficar por dentro' />
      </form>
      {message && (
        <p className={`mt-4 text-sm text-center ${isSuccess ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CallToActionNewsletter;