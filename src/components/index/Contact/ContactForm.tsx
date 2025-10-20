// site/Contact/SimpleContactForm.tsx
'use client'; // ESSENCIAL: Garante que este é um Client Component

import React, { useState } from 'react';
import { motion } from 'motion/react';

import { FormInputConfig, SimpleFormProps } from './types';

const SimpleContactForm: React.FC<SimpleFormProps> = ({ itemVariants }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Estado para o textarea
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Número de telefone do WhatsApp para onde a mensagem será enviada
  const WHATSAPP_PHONE_NUMBER = '5511986187723'; // Seu número de WhatsApp

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null); // Resetar status

    // Validação básica
    if (!name || !email || !message) {
      setSubmitSuccess(false);
      setIsSubmitting(false);
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      // 1. Construir a mensagem para o WhatsApp
      const whatsappMessage = `
Olá! Vim pelo site e gostaria de mais informações.

Nome: ${name}
Email: ${email}
Mensagem: ${message}
      `.trim(); // .trim() para remover espaços em branco extras no início/fim

      // 2. Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // 3. Construir a URL completa do WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`;

      // 4. Redirecionar o usuário para a URL do WhatsApp
      window.open(whatsappUrl, '_blank'); // Abre em uma nova aba

      // Simular um pequeno atraso para dar feedback visual antes de abrir o WhatsApp
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log('Redirecionando para WhatsApp com os dados:', { name, email, message });
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao redirecionar para WhatsApp:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Array de configuração dos inputs
  const formInputs: FormInputConfig[] = [
    {
      label: "Seu Nome Completo",
      type: "text",
      id: "name",
      name: "name",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Seu nome",
      className: "flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      required: true,
      component: 'input',
    },
    {
      label: "E-mail",
      type: "email",
      id: "email",
      name: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "seu.email@exemplo.com",
      className: "flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      required: true,
      component: 'input',
    },
    {
      label: "Mensagem",
      type: "textarea", // O tipo aqui é apenas para identificação no array
      id: "message",
      name: "message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      placeholder: "Digite sua mensagem aqui...",
      className: "flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
      required: true,
      component: 'textarea', // Indicar que este é um textarea
      rows: 5,
    }
  ];


  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border p-8"
      variants={itemVariants}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {formInputs.map((inputConfig) => (
          <motion.div variants={itemVariants} key={inputConfig.id}>
            <label htmlFor={inputConfig.id} className="block text-sm font-medium text-muted-foreground mb-2 ">
              {inputConfig.label}
            </label>
            {inputConfig.component === 'textarea' ? (
              <textarea
                id={inputConfig.id}
                name={inputConfig.name}
                value={inputConfig.value}
                onChange={inputConfig.onChange}
                placeholder={inputConfig.placeholder}
                className={inputConfig.className}
                required={inputConfig.required}
                rows={inputConfig.rows}
              />
            ) : (
              <input
                type={inputConfig.type}
                id={inputConfig.id}
                name={inputConfig.name}
                value={inputConfig.value}
                onChange={inputConfig.onChange}
                placeholder={inputConfig.placeholder}
                className={inputConfig.className}
                required={inputConfig.required}
              />
            )}
          </motion.div>
        ))}

        {/* Botão de Envio - Mantido fora do map pois é único */}
        <motion.button
          type="submit"
          className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 px-6 rounded-md transition-colors duration-300 border border-border shadow-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Redirecionando para WhatsApp...' : 'Enviar Mensagem via WhatsApp'}
        </motion.button>

        {submitSuccess !== null && (
          <motion.p
            className={`text-center text-sm font-medium ${submitSuccess ? 'text-green-600' : 'text-destructive'
              }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {submitSuccess ? 'Redirecionado com sucesso! Verifique seu WhatsApp.' : 'Erro ao preparar mensagem. Tente novamente.'}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default SimpleContactForm;