// app/segmentos/types.ts
export interface CourseImagePath {
    [key: string]: string; // Permite qualquer número de propriedades de string, como img1, img2, img3, etc.
}

export interface Course {
    nome: string;
    descricao: string;
    path: CourseImagePath[];
}

export interface Diferencial {
    iconName?: string; // Nome do ícone Lucide como string (agora opcional)
    imageUrl?: string; // URL da imagem (novo e opcional)
    title: string;
    description: string;
}

export interface Segmento {
    url: string;
    metadescricao: string;
    cursos: Course[];
    banner: string;
    produto: 'disponivel' | 'disable';
    diferenciais?: Diferencial[]; // Nova propriedade para os diferenciais
}
