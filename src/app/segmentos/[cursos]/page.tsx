'use client'; // Este arquivo é um Client Component

import React, { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Lightbulb, Heart, Users, Palette, BookOpen, Award, Smile, Puzzle, ExternalLink } from 'lucide-react'; // Ícones para diferenciais e CTA

// Ajuste os caminhos de importação conforme a localização real dos seus arquivos
import { segmentos } from '../segmentos'; // Importa os dados dos segmentos
import { Segmento, Course, Diferencial } from '../types'; // Importa as interfaces de tipos

// Mapeamento de nomes de ícones (string) para componentes Lucide React
const LucideIconMap: { [key: string]: React.ElementType } = {
    Lightbulb,
    Heart,
    Users,
    Palette,
    BookOpen,
    Award,
    Smile,
    Puzzle,
    ExternalLink, // Adicionado para o CTA
};

const CursosPage = () => {
    // Acessa os parâmetros da URL usando o hook useParams
    const params = useParams<{ cursos: string }>();
    const segmentoUrlParam = params.cursos;

    // --- Debugging Log ---
    console.log('Client Component - useParams object:', params);
    console.log('Client Component - Extracted segmentoUrlParam:', segmentoUrlParam);

    // Se o parâmetro não for encontrado, aciona o notFound()
    if (!segmentoUrlParam) {
        console.error('Client Component - No segment URL parameter found.');
        notFound();
    }

    // Busca o segmento correspondente no array de dados
    const currentSegment: any | undefined = segmentos.find(
        (segment) => segment.url === segmentoUrlParam
    );

    // --- Debugging Log ---
    console.log('Client Component - Found Segment (currentSegment):', currentSegment);

    // Se nenhum segmento for encontrado, aciona o notFound() do Next.js
    if (!currentSegment) {
        console.error(`Client Component - Segment not found for URL: ${segmentoUrlParam}`);
        notFound();
    }

    // Assume que o curso principal é o primeiro da lista para esta página
    const mainCourse: Course | undefined = currentSegment.cursos[0];

    // Se não houver um curso principal no segmento, pode ser um 404 ou uma mensagem de "em breve"
    if (!mainCourse) {
        console.error(`Client Component - No main course found for segment: ${segmentoUrlParam}`);
        notFound(); // Ou renderize uma mensagem de "em breve" mais elaborada
    }

    // Estado para controlar a visibilidade de elementos com animação
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ativa a visibilidade para animações após a montagem do componente
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden text-gray-900 dark:text-gray-100">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse-slow delay-500"></div>
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                {/* Back Button */}
                <div className={`mb-12 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    <Link
                        href={`/segmentos`}
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-medium text-lg bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1 group border border-gray-200 dark:border-gray-700"
                    >
                        <ChevronRight className="w-5 h-5 transform rotate-180 group-hover:rotate-180 transition-transform duration-300" />
                        <span>Voltar para Todos os Segmentos</span>
                    </Link>
                </div>

                {/* Course Article Section - Agora exibe o curso principal do segmento */}
                <article className={`mb-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {/* Course Header */}
                    <div className="relative h-80 w-full overflow-hidden">
                        <Image
                            src={mainCourse.path[0]?.img1 || '/images/placeholder.webp'}
                            alt={mainCourse.nome}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-700 hover:scale-105"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                        {/* Course title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                {mainCourse.nome}
                            </h2>

                            {/* Decorative line */}
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-8 md:p-12">
                        {/* Course Description */}
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                                {mainCourse.descricao}
                            </p>
                        </div>

                        {/* Course Details Section (Additional Images) */}
                        {mainCourse.path && Object.keys(mainCourse.path[0] || {}).length > 1 && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">
                                        +
                                    </div>
                                    Galeria do Curso
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Iterate over all images in the first path object */}
                                    {Object.entries(mainCourse.path[0] || {}).map(([key, imageUrl], imgIndex) => (
                                        // Skip img1 as it's used in the header
                                        key !== 'img1' && (
                                            <div key={key} className="relative h-48 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
                                                <Image
                                                    src={imageUrl as string}
                                                    alt={`${mainCourse.nome} - Imagem ${imgIndex + 1}`}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-white text-lg font-semibold">Ver Imagem</span>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-10 border border-blue-100 dark:border-blue-800">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
                                    <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3 leading-tight">
                                        Pronto para mergulhar no conhecimento?
                                    </h4>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Acesse o conteúdo completo do curso e comece sua jornada de aprendizado transformadora.
                                    </p>
                                </div>

                                <Link
                                    href={`#`} // Link placeholder, ajuste conforme a ação desejada (ex: formulário de inscrição, mais detalhes)
                                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <span>Acessar Curso</span>
                                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Seção de Diferenciais (Condicional para segmentos com diferenciais) */}
                {currentSegment.diferenciais && currentSegment.diferenciais.length > 0 && (
                    <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl animate-fade-in-delayed border border-blue-200 dark:border-blue-700">
                        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
                            Nossos Diferenciais
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentSegment.diferenciais.map((item: Diferencial, index: number) => {
                                const IconComponent = item.iconName ? LucideIconMap[item.iconName] : null;

                                return (
                                    <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center" style={{ width: '64px', height: '64px' }}>
                                            {IconComponent ? (
                                                <IconComponent className="w-8 h-8 text-blue-600" />
                                            ) : item.imageUrl ? (
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={item.title}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-gray-500">?</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulse-slow {
                    0% { transform: scale(1) translate(-50%, -50%); opacity: 0.1; }
                    50% { transform: scale(1.1) translate(-50%, -50%); opacity: 0.15; }
                    100% { transform: scale(1) translate(-50%, -50%); opacity: 0.1; }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.6s ease-out forwards;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default CursosPage;
