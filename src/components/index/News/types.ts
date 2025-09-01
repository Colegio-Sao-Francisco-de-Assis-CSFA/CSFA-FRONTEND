// components/site/news/types.ts
import { LucideIcon } from 'lucide-react'; // Importar LucideIcon se for usar para props de ícones

export interface NewsItem {
  id: string;
  category: string;
  categoryColor: string; // Ex: '#3465ed'
  title: string;
  excerpt: string;
  date: string; // Data formatada para exibição
  slug: string; // Para o link da notícia
  imageUrl: string;
}

export interface NewsCardProps {
  item: NewsItem; // Uma única notícia
}

export interface NewsGridProps {
  news: NewsItem[]; // Array de notícias para o grid
  title?: string; // Título opcional para o grid (se diferente do padrão)
  ctaLink?: string; // Link opcional para o botão "Ver Todas"
  ctaText?: string; // Texto opcional para o botão "Ver Todas"
}