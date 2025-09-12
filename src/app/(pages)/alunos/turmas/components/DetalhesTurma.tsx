'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, GraduationCap, Search, ChevronRight, FileText, Eye, Award } from 'lucide-react';

import { Turma, Aluno } from '../types';
import StudentModal from '../components/StudentModal';

export default function DetalhesTurmaCliente({ turma }: { turma: Turma }) {
  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
  const [termoBuscaAluno, setTermoBuscaAluno] = useState('');
  const [activeTab, setActiveTab] = useState('alunos');

  const alunosFiltrados = turma.alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(termoBuscaAluno.toLowerCase())
  );

  return (
    <>
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0"><Users className="text-blue-600" size={20} /></div>
              <div>
                  <p className="text-sm text-gray-500">Alunos</p>
                  <p className="text-xl font-bold text-gray-900">{turma.alunos.length}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0"><GraduationCap className="text-green-600" size={20} /></div>
              <div>
                  <p className="text-sm text-gray-500">Professores</p>
                  <p className="text-xl font-bold text-gray-900">{turma.professores.length}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0"><FileText className="text-purple-600" size={20} /></div>
              <div>
                  <p className="text-sm text-gray-500">Documentos</p>
                  <p className="text-xl font-bold text-gray-900">{turma.documentos.length}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0"><Award className="text-orange-600" size={20} /></div>
              <div>
                  <p className="text-sm text-gray-500">Frequência</p>
                  <p className="text-xl font-bold text-gray-900">96%</p>
              </div>
            </div>
        </div>

        <div className="mb-6">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Pesquisar aluno..." value={termoBuscaAluno} onChange={(e) => setTermoBuscaAluno(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl"/>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[{ id: 'alunos', label: 'Alunos', icon: Users }, { id: 'professores', label: 'Professores', icon: GraduationCap }, { id: 'documentos', label: 'Documentos', icon: FileText }].map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium ${activeTab === id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
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
                  <div key={aluno.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Image src={aluno.foto} alt={aluno.nome} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h3 className="font-medium text-gray-900">{aluno.nome}</h3>
                        <p className="text-sm text-gray-500">{aluno.email}</p>
                      </div>
                    </div>
                    <button onClick={() => setAlunoSelecionado(aluno)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
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
                    <Image src={prof.foto} alt={prof.nome} width={48} height={48} className="w-12 h-12 rounded-full object-cover"/>
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
                  <a key={doc.id} href={doc.url} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 group">
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400 group-hover:text-blue-600" size={20} />
                      <span className="text-gray-900">{doc.titulo}</span>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={16} />
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
    </>
  );
}