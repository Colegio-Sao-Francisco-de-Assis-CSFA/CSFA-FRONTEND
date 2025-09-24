'use client';

import { useState } from 'react';
import { Search, School } from 'lucide-react';
import { DADOS_ESCOLA } from '@/lib/data/turma';
import type { Aluno, Turma } from './types';
import ResultadoBusca from '../turmas/components/ResultadosBusca';
// Interface para o resultado da busca
interface Resultado {
  aluno: Aluno;
  turma: Turma;
}

export default function PaginaBuscaAluno() {

  const [termoBusca, setTermoBusca] = useState('');
  const [serieBusca, setSerieBusca] = useState('');
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const seriesDisponiveis = [...new Set(DADOS_ESCOLA.map(t => t.serie))].sort();

  const handleBusca = () => {
    if (!termoBusca.trim() || !serieBusca) {
      setErro('Por favor, preencha o nome do aluno e selecione a série.');
      setResultado(null);
      return;
    }

    let alunoEncontrado: Aluno | null = null;
    let turmaDoAluno: Turma | null = null;

    const termoBuscaNumerico = parseInt(termoBusca, 10);

    for (const turma of DADOS_ESCOLA) {
      if (turma.serie === serieBusca) {
        const aluno = turma.alunos.find(a => {
          const correspondeNome = a.nome.toLowerCase().includes(termoBusca.toLowerCase());

          const correspondeId = !isNaN(termoBuscaNumerico) && a.id === termoBuscaNumerico;

          return correspondeNome || correspondeId;
        });

        if (aluno) {
          alunoEncontrado = aluno;
          turmaDoAluno = turma;
          break;
        }
      }
    }

    if (alunoEncontrado && turmaDoAluno) {
      setResultado({ aluno: alunoEncontrado, turma: turmaDoAluno });
      setErro(null);
    } else {
      setResultado(null);
      setErro('Aluno não encontrado. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-32">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <School className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Portal do Responsável</h1>
              <p className="text-sm text-gray-500">Busque pelo aluno para ver as informações da turma</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-1">
              <label htmlFor="aluno" className="block text-sm font-medium text-gray-700 mb-2">Nome ou RA do Aluno</label>
              <input
                id="aluno"
                type="text"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                placeholder="Digite o nome ou RA"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="serie" className="block text-sm font-medium text-gray-700 mb-2">Série</label>
              <select
                id="serie"
                value={serieBusca}
                onChange={(e) => setSerieBusca(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl"
              >
                <option value="">Selecione a série</option>
                {seriesDisponiveis.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <button
              onClick={handleBusca}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Buscar
            </button>
          </div>
        </div>

        {erro && <p className="text-center text-red-600 bg-red-100 p-4 rounded-xl">{erro}</p>}

        {resultado && (
          <ResultadoBusca aluno={resultado.aluno} turma={resultado.turma} />
        )}
      </main>
    </div>
  );
}