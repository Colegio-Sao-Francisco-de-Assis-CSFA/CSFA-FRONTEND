import React from 'react';
import Image from 'next/image';

interface CampusFeature {
id: string;
title: string;
description: string;
imageAlt: string;
imageSrc: string;
}

const campusFeatures: CampusFeature[] = [
{
    id: 'facade',
    title: 'Fachada Principal',
    description: 'Nossa entrada moderna e acolhedora.',
    imageAlt: 'Fachada Principal',
    imageSrc: '/images/fachada.jpg',
},
{
    id: 'classrooms',
    title: 'Salas de Aula',
    description: 'Ambientes equipados com tecnologia de ponta.',
    imageAlt: 'Salas de Aula',
    imageSrc: '/images/salas.jpg',
},
{
    id: 'library',
    title: 'Biblioteca',
    description: 'Acervo com mais de 10.000 títulos.',
    imageAlt: 'Biblioteca',
    imageSrc: '/images/biblioteca.jpg',
},
{
    id: 'labs',
    title: 'Laboratórios',
    description: 'Espaços para experimentação e descobertas.',
    imageAlt: 'Laboratórios',
    imageSrc: '/images/laboratorios.jpg',
},
{
    id: 'sports',
    title: 'Área Esportiva',
    description: 'Quadras e espaços para atividades físicas.',
    imageAlt: 'Área Esportiva',
    imageSrc: '/images/esportes.jpg',
},
{
    id: 'cafeteria',
    title: 'Refeitório',
    description: 'Alimentação balanceada e espaço de convivência.',
    imageAlt: 'Refeitório',
    imageSrc: '/images/refeitorio.jpg',
},
];

const CampusShowcase: React.FC = () => {
return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
    <div className="mb-12">
        <div className="flex items-center mb-8">
        <div className="w-16 h-1 bg-blue-700 mr-4"></div>
        <h2 className="text-4xl font-bold text-center text-blue-700">
            Conheça Nosso Campus
        </h2>
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campusFeatures.map((feature) => (
        <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
            <div className="h-48 relative">
            <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                fill
                className="object-cover"
            />
            </div>
            <div className="p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
                {feature.title}
            </h3>
            <p className="text-gray-600">
                {feature.description}
            </p>
            </div>
        </div>
        ))}
    </div>
    </section>
);
};

export default CampusShowcase;
