import TitleHeaderComponent from '@/components/site/TitleHeader';

export default function Matriculas() {
  return (
    <section className="min-h-screen bg-white text-gray-800 pt-32">
      {/* Header */}
      <TitleHeaderComponent
        title=' Matriculas Abertas'
        subtitle=''
      />

      {/* Períodos de Matrícula */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">📅 Períodos de Matrícula</h2>
        <div className="space-y-6">
          <div className="p-6 shadow-md rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold">Educação Infantil</h3>
            <p className="mt-2 text-gray-600">De 10/09/2025 até 30/10/2025</p>
          </div>

          <div className="p-6 shadow-md rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold">Ensino Fundamental</h3>
            <p className="mt-2 text-gray-600">De 15/09/2025 até 15/11/2025</p>
          </div>

          <div className="p-6 shadow-md rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold">Ensino Médio</h3>
            <p className="mt-2 text-gray-600">De 01/10/2025 até 20/11/2025</p>
          </div>
        </div>
      </section>

      {/* Documentos Necessários */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">📑 Documentos Necessários</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Certidão de Nascimento ou RG do aluno</li>
            <li>CPF e RG do responsável</li>
            <li>Comprovante de residência atualizado</li>
            <li>Histórico escolar (para transferências)</li>
            <li>1 foto 3x4 recente</li>
            <li>Carteira de vacinação atualizada (Educação Infantil e Fundamental)</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Garanta já a vaga do seu filho!</h2>
        <p className="mt-2">Entre em contato com nossa secretaria para mais informações.</p>
        <button className="mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100">
          Fale Conosco
        </button>
      </div>
    </section>
  );
}
