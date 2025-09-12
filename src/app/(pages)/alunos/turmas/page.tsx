'use client';


import {
  Users,
  Search,
  Filter,
  ChevronRight,
  Clock,
  Calendar,
  FileText,
  Eye,
  School,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { DADOS_ESCOLA } from '@/lib/data-turma';
import Link from 'next/link';

export default function PaginaListaTurmas() {

  const [filtroSegmento, setFiltroSegmento] = useState('');
  const [filtroSerie, setFiltroSerie] = useState('');
  const [filtroTurma, setFiltroTurma] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [segmentos, series, turmas] = useMemo(() => {
    const segmentosUnicos = [...new Set(DADOS_ESCOLA.map(t => t.segmento))];
    const seriesUnicas = [...new Set(DADOS_ESCOLA.map(t => t.serie))].sort();
    const turmasUnicas = [...new Set(DADOS_ESCOLA.map(t => t.turma))].sort();
    return [segmentosUnicos, seriesUnicas, turmasUnicas];
  }, []);

  const turmasFiltradas = DADOS_ESCOLA.filter(turma => {
    const correspondeSegmento = filtroSegmento ? turma.segmento === filtroSegmento : true;
    const correspondeSerie = filtroSerie ? turma.serie === filtroSerie : true;
    const correspondeTurma = filtroTurma ? turma.turma === filtroTurma : true;
    return correspondeSegmento && correspondeSerie && correspondeTurma;
  });

  const limparFiltros = () => {
    setFiltroSegmento('');
    setFiltroSerie('');
    setFiltroTurma('');
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <School className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alunos</h1>
                <p className="text-sm text-gray-500">Organização de Turmas</p>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${showFilters
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Filter size={18} />
              Filtros
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Filters */}
        {showFilters && (
          <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 animate-[slideDown_0.3s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Segmento</label>
                <select
                  value={filtroSegmento}
                  onChange={(e) => setFiltroSegmento(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Todos os Segmentos</option>
                  {segmentos.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Série</label>
                <select
                  value={filtroSerie}
                  onChange={(e) => setFiltroSerie(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="Todas as Séries">Todas as Séries</option>
                  {series.map(s => <option key={s} value={s}>{s}Ano</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Turma</label>
                <select
                  value={filtroTurma}
                  onChange={(e) => setFiltroTurma(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Todas as Turmas</option>
                  {turmas.map(t => <option key={t} value={t}>Turma {t}</option>)}
                </select>
              </div>

              <button
                onClick={limparFiltros}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Limpar
              </button>
            </div>
          </div>
        )}

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {turmasFiltradas.map((turma) => (
            <div key={turma.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {turma.serie} Ano - Turma {turma.turma}
                    </h3>
                    <p className="text-sm text-gray-500">{turma.segmento}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <Clock size={12} />
                    {turma.turno}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={14} />
                    {turma.alunos.length} alunos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    Ano letivo {turma.ano}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText size={14} />
                    {turma.documentos.length} documentos
                  </div>
                </div>

                 <Link
                  href={`/alunos/turmas/${turma.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  <Eye size={18} />
                  Ver Detalhes
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {turmasFiltradas.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <p className="text-gray-500">Nenhuma turma encontrada com os filtros selecionados.</p>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}