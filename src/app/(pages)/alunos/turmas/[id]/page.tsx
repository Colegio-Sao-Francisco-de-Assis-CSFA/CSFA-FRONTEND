import Link from 'next/link';
import { Metadata } from 'next';
import { DADOS_ESCOLA } from '@/lib/data-turma';
import DetalhesTurmaCliente from '../components/DetalhesTurma';
import { ArrowLeft, Calendar, GraduationCap } from 'lucide-react';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params; 
  const turma = DADOS_ESCOLA.find(t => t.id === parseInt(id));

  return {
    title: `Turma ${turma?.serie || ''} ${turma?.turma || ''} | Painel Escolar`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const turma = DADOS_ESCOLA.find(t => t.id === parseInt(id));

  if (!turma) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <GraduationCap size={48} className="mb-4 text-gray-400" />
        <h1 className="text-2xl font-bold mb-2">Turma não encontrada</h1>
        <Link
          href="/alunos/turmas"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/alunos/turmas" className="p-2 hover:bg-gray-100 rounded-xl">
                <ArrowLeft size={20} className="text-gray-600" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {turma.serie}º Ano - Turma {turma.turma}
                </h1>
                <p className="text-sm text-gray-500">
                  {turma.segmento} • {turma.turno}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl">
              <Calendar size={16} />
              {turma.ano}
            </div>
          </div>
        </div>
      </header>

      <DetalhesTurmaCliente turma={turma} />
    </div>
  );
}
