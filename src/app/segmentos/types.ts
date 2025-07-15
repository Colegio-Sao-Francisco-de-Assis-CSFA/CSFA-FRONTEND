// app/segmentos/[cursos]/types.ts
export interface CourseImagePath {
    img1: string;
    img2: string;
}

export interface Course {
    nome: string;
    descricao: string;
    path: CourseImagePath[];
}

export interface Segmento {
    url: string;
    metadescricao: string;
    cursos: Course[];
    banner: string;
}