'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, GraduationCap, FileText, ChevronRight, Mail, Eye } from 'lucide-react';

import { Turma, Aluno } from '../types';
import StudentModal from './StudentModal';

interface ResultadoBuscaProps {
  aluno: Aluno;
  turma: Turma;
}

export default function ResultadoBusca({ aluno, turma }: ResultadoBuscaProps) {
  const [activeTab, setActiveTab] = useState('aluno');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="container mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Abas de Navegação e Conteúdo */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[{ id: 'aluno', label: 'Aluno', icon: Users }, { id: 'professores', label: 'Professores', icon: GraduationCap }, { id: 'documentos', label: 'Documentos', icon: FileText }].map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium ${activeTab === id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Aba do Aluno Encontrado */}
          <div className="p-6">
            {activeTab === 'aluno' && (
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <Image src={aluno.foto} alt={aluno.nome} width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{aluno.nome}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Mail size={14} />
                      <span>{aluno.email}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Eye size={16} />
                  Ver Detalhes
                </button>
              </div>
            )}

            {/* Aba de Professores */}
            {activeTab === 'professores' && (
              <div className="space-y-4">
                {turma.professores.map(prof => (
                  <div key={prof.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <Image src={prof.foto} alt={prof.nome} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-medium text-gray-900">{prof.nome}</h3>
                      <p className="text-sm text-blue-600">{prof.cargo}</p>
                      <p className="text-sm text-gray-500">{prof.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Aba de Documentos */}
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

      {/* Modal de Info Disponível - Aluno*/}
      {isModalOpen && (
        <StudentModal
          aluno={aluno}
          turma={`${turma.serie}º ${turma.turma}`}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}