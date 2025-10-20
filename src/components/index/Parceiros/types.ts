// components/site/Parceiros/types.ts

export interface ParceirosHeaderProps {
  badgeText: string;
  title: string;
}

export interface ParceiroBeneficioCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ParceirosCTAProps {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}