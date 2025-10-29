



export type CursoItem = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  ageRange?: string;
  highlights: string[];
  icon: string;
  color: string;
  bgColor: string;
  textColor: string;
  backgroundImageSrc: string;
};

export type CategoriaCursos = {
  id: number;
  tituloCategoria: string;
  cursos: CursoItem[];
};