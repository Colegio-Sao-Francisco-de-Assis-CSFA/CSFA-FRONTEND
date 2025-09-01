// types/index.ts ou em um arquivo .d.ts, ou até mesmo no próprio arquivo do componente

/**
 * @typedef ButtonLinkProps
 * @property {string} href - A URL para onde o botão irá apontar.
 * @property {React.ReactNode} children - O conteúdo do botão (texto, ícones, etc.).
 * @property {boolean} [external=false] - Se true, abre o link em uma nova aba (para links externos).
 * @property {string} [className=''] - Classes CSS adicionais para estilização.
 */
export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean; // '?' torna a propriedade opcional
  className?: string; // '?' torna a propriedade opcional
}

/**
 * @typedef SubmitButtonProps
 * @property {React.ReactNode} children - O conteúdo do botão quando não está no estado de envio (pending).
 */

export interface SubmitButtonProps {
  children: React.ReactNode;
}