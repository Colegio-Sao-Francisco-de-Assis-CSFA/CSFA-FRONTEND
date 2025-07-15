// site/Contact/types.ts
import React from 'react'; // Certifique-se de que React está importado para React.ReactNode

export interface ContactInfoCardProps {
  icon: string; // Ícones Iconify são strings
  title: string;
  desc: string;
}

export interface ContactDetailProps {
  icon: string; // Ícones Iconify são strings
  label: string;
  value: string | React.ReactNode; // Pode ser string ou JSX
}

export interface SocialMediaLinkProps {
  icon: string; // Ícones Iconify são strings
  href: string;
  color: string; // Ex: 'hover:bg-pink-500'
}

export interface FormField {
  name: keyof FormData; // Garante que o nome do campo seja uma chave válida de FormData
  label: string;
  type: string;
  placeholder: string;
  icon: string; // Ícones Iconify são strings
  required: boolean;
  mask?: string; // Máscara opcional para inputs
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SubjectOption {
  value: string;
  label: string;
  icon: string | null; // Ícones Iconify são strings ou null
}