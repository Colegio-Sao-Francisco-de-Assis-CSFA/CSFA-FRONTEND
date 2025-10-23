// src/components/metodologia-de-ensino/SegmentsTabs.tsx
'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const SegmentsTabs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Metodologia em Cada Segmento</h2>
        <Tabs defaultValue="infantil" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="infantil">Educação Infantil</TabsTrigger>
            <TabsTrigger value="fundamental1">Fundamental I</TabsTrigger>
            <TabsTrigger value="fundamental2">Fundamental II</TabsTrigger>
            <TabsTrigger value="medio">Ensino Médio</TabsTrigger>
          </TabsList>
          <TabsContent value="infantil">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Educação Infantil</h3>
              <p>Nesta fase, o aprendizado ocorre de forma lúdica e sensorial, com foco no desenvolvimento da autonomia, da criatividade e da socialização.</p>
            </div>
          </TabsContent>
          <TabsContent value="fundamental1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ensino Fundamental I</h3>
              <p>Consolidação da alfabetização e do raciocínio lógico, com projetos que estimulam a curiosidade e a descoberta do mundo.</p>
            </div>
          </TabsContent>
          <TabsContent value="fundamental2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ensino Fundamental II</h3>
              <p>Aprofundamento dos conhecimentos, desenvolvimento do pensamento crítico e preparação para os desafios do Ensino Médio.</p>
            </div>
          </TabsContent>
          <TabsContent value="medio">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ensino Médio</h3>
              <p>Foco na preparação para o vestibular e para a vida, com orientação vocacional e projetos que conectam o aluno com a realidade.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
