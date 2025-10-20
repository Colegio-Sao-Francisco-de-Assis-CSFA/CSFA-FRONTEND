import { Aluno, StudentModalProps } from "../types";
import { X, UserCheck, Mail, Settings, Globe } from 'lucide-react';

export default function StudentModal({ aluno, turma, onClose }:StudentModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-[modalSlideIn_0.3s_ease-out]"
        onClick={e => e.stopPropagation()}
        style={{
          animation: 'modalSlideIn 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div className="bg-blue-600 p-6 pb-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-100 hover:text-white transition-colors p-1 rounded-full hover:bg-blue-700"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <UserCheck className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{aluno.nome}</h2>
              <p className="text-blue-100 text-sm">Turma {turma}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={18} className="text-blue-600" />
            <span className="text-sm">{aluno.email}</span>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Settings size={18} className="text-blue-600" />
              Acessos Liberados
            </h3>
            <div className="space-y-2">
              {aluno.acessosLiberados.map((acesso, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{acesso}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            <Globe size={18} />
            Acessar Portal do Aluno
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}