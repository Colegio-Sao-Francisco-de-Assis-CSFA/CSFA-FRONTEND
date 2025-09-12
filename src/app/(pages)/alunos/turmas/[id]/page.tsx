'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  GraduationCap,
  Search,
  ChevronRight,
  Calendar,
  FileText,
  Eye,
  ArrowLeft,
  Award,
} from 'lucide-react';

import { DADOS_ESCOLA } from '@/lib/data-turma';
import { Aluno } from '../types';
import StudentModal from '../components/StudentModal';

export default function PaginaDetalheTurma({ params }: { params: { id: string } }) {
  const turma = DADOS_ESCOLA.find(t => t.id === parseInt(params.id));
  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
  const [termoBuscaAluno, setTermoBuscaAluno] = useState('');
  const [activeTab, setActiveTab] = useState('alunos');

  if (!turma) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <GraduationCap size={48} className="mb-4 text-gray-400" />
        <h1 className="text-2xl font-bold mb-2">Turma não encontrada</h1>
        <p className="text-gray-500 mb-6">O ID fornecido não corresponde a nenhuma turma existente.</p>
        <Link
          href="/alunos/turmas"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Voltar para a lista de turmas
        </Link>
      </div>
    );
  }

  const alunosFiltrados = turma.alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(termoBuscaAluno.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-32">

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/alunos/turmas"
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Voltar para a lista de turmas"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {turma.serie} Ano - Turma {turma.turma}
                </h1>
                <p className="text-sm text-gray-500">{turma.segmento} • {turma.turno}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl">
              <Calendar size={16} />
              {turma.ano}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 scrollY-auto">

        {/* Search */}
        <div className="mb-6">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Pesquisar aluno na turma..."
                  value={termoBuscaAluno}
                  onChange={(e) => setTermoBuscaAluno(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
            </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'alunos', label: 'Alunos', icon: Users },
                { id: 'professores', label: 'Professores', icon: GraduationCap },
                { id: 'documentos', label: 'Documentos', icon: FileText }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'alunos' && (
              <div className="space-y-3">
                {alunosFiltrados.map(aluno => (
                  <div key={aluno.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      {/* 5. Usando o componente <Image> do Next.js para otimização */}
                      <Image
                        src={aluno.foto}
                        alt={aluno.nome}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{aluno.nome}</h3>
                        <p className="text-sm text-gray-500">{aluno.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setAlunoSelecionado(aluno)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Eye size={16} />
                      Ver
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'professores' && (
              <div className="space-y-4">
                {turma.professores.map(prof => (
                  <div key={prof.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    {/* 5. Usando o componente <Image> do Next.js para otimização */}
                    <Image
                      src={prof.foto}
                      alt={prof.nome}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{prof.nome}</h3>
                      <p className="text-sm text-blue-600">{prof.cargo}</p>
                      <p className="text-sm text-gray-500">{prof.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'documentos' && (
              <div className="space-y-3">
                {turma.documentos.map(doc => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                      <span className="text-gray-900">{doc.titulo}</span>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {alunoSelecionado && (
        <StudentModal
          aluno={alunoSelecionado}
          turma={`${turma.serie}º ${turma.turma}`}
          onClose={() => setAlunoSelecionado(null)}
        />
      )}
    </div>
  );
}