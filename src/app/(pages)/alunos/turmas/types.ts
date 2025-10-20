// Caminho: .../turmas/types.ts

export interface Aluno {
  id: number;
  foto: string;
  nome: string;
  email: string;
  acessosLiberados: string[];
}

export interface Professor {
  id: number;
  nome: string;
  cargo: string;
  email: string;
  foto: string;
}

export interface Documento {
  id: number;
  titulo: string;
  url: string;
}

export interface Turma {
  id: number;
  segmento: string;
  ano: number;
  serie: string;
  turma: string;
  turno: 'Manhã' | 'Tarde';
  alunos: Aluno[];
  professores: Professor[];
  documentos: Documento[];
}

export type PageProps = {
  params: Promise<{ id: string }>;
};

export interface ResultadoBuscaProps {
  aluno: Aluno;
  turma: Turma;
}

export interface StudentModalProps {
  aluno: Aluno;
  turma: string;
  onClose: () => void;
}

export interface Resultado {
  aluno: Aluno;
  turma: Turma;
}