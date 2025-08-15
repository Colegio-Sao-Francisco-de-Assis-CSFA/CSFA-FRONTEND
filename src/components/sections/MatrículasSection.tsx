"use client";

import { GraduationCap, FileText, Calendar, CheckCircle } from "lucide-react";
import {
  MatriculasHeader,
  MatriculasSteps,
  MatriculasInfoCard,
  Step,
} from "@/components/site/Matrículas";

export default function MatriculasSection() {
  const steps: Step[] = [
    { icon: <FileText />, title: "Formulário", desc: "Preencha seus dados." },
    { icon: <Calendar />, title: "Agendamento", desc: "Participe da entrevista." },
    { icon: <CheckCircle />, title: "Documentação", desc: "Envie os documentos." },
    { icon: <GraduationCap />, title: "Confirmação", desc: "Finalize sua matrícula." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <MatriculasHeader />
      <MatriculasSteps steps={steps} />

      {/* Informações adicionais */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
        <MatriculasInfoCard
          title="Documentos Necessários"
          desc="RG, CPF, comprovante de residência e histórico escolar."
        />
        <MatriculasInfoCard
          title="Prazos"
          desc="As matrículas ficam abertas até o preenchimento das vagas."
        />
        <MatriculasInfoCard
          title="Bolsas e Descontos"
          desc="Informações sobre bolsas de estudo e condições especiais."
        />
      </div>
    </section>
  );
}
