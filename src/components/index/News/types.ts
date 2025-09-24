// components/site/news/types.ts

export interface NewsItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

export interface NewsCardProps {
  item: NewsItem;
}

export interface NewsGridProps {
  news: NewsItem[];
  title?: string;
  subtitle?: string;
  ctaLink?: string;
  ctaText?: string;
}