// components/site/Parceiros/types.ts

export interface ParceirosHeaderProps {
  badgeText: string;
  title: string;
  subtitle: string;
  description?: string; // Para a descrição extra sobre parcerias
}

export interface ParceiroBeneficioCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ParceirosCTAProps {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}