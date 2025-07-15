export interface ImageProps {
    id: number;
    src: string;
    alt: string;
    description?: string;
}

export interface CursosGalleryProps {
    images: ImageProps[];
}