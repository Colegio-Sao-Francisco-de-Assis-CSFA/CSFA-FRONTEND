// src/components/informacoes-uteis/ScheduleSection.tsx
import React from 'react';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="horarios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Horários</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between"><span>Educação Infantil:</span> <strong>7h30 às 12h00</strong></li>
            <li className="flex justify-between"><span>Ensino Fundamental I:</span> <strong>7h30 às 12h30</strong></li>
            <li className="flex justify-between"><span>Ensino Fundamental II:</span> <strong>7h00 às 12h30</strong></li>
            <li className="flex justify-between"><span>Ensino Médio:</span> <strong>7h00 às 13h00</strong></li>
            <li className="border-t my-4"></li>
            <li className="flex justify-between"><span>Secretaria:</span> <strong>8h00 às 17h00</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
