// types/instagram.ts

export interface InstagramPost {
  id: string;
  like_count: number;
  comments_count: number;
  media_url?: string; // Pode não existir para videos, usa thumbnail_url
  permalink: string;
  thumbnail_url?: string; // Usado para videos
}