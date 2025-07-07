// components/site/CallToAction/types.ts
/**
 * @typedef SubmitButtonProps
 * @property {React.ReactNode} children - O conteúdo do botão quando não está no estado de envio (pending).
 */

export interface SubmitButtonProps {
  children: React.ReactNode;
}

export interface CallToActionContentProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonIcon?: React.ElementType; // Para ícones opcionais no botão
}

export interface CallToActionImageProps {
  imageSrc: string;
  imageAlt: string;
}

export interface CallToActionMapProps {
  mapSrc?: string;
}

export interface CallToActionNewsletterProps {
  title: string;
  description: string;
  placeholderText?: string;
  buttonText: string; // <-- ADICIONE DE VOLTA AQUI
  onSubmitAction: (email: string) => Promise<{ success: boolean; message: string }>;
}

export interface CallToActionVisitFormProps {
  title: string;
  description: string;
  onSubmitAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
}

export interface CallToActionRootProps {
  variant: 'centered' | 'side-by-side';
  backgroundColor?: string;
  children: React.ReactNode;
}