// app/segmentos/[cursos]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { segmentos } from '../segmentos'; // Ajuste o caminho se necessário
import { Segmento, Course } from '../types'; // Ajuste o caminho se necessário

interface CursosPageProps {
    params: {
        cursos: string; // Este 'cursos' corresponde ao nome da pasta dinâmica '[cursos]'
    };
}

const CursosPage = ({ params }: CursosPageProps) => {
    const { cursos: segmentoUrlParam } = params; // Aqui você extrai o valor

    // --- DEBUGGING: Verifique o valor do parâmetro aqui ---
    console.log('Valor do parâmetro "cursos" na URL:', segmentoUrlParam);

    // Find the corresponding segment based on the URL parameter
    const currentSegment: Segmento | undefined = segmentos.find(
        (segment) => segment.url === segmentoUrlParam
    );

    // --- DEBUGGING: Verifique se o segmento foi encontrado ---
    console.log('Segmento encontrado:', currentSegment);

    // If no segment is found, render a 404 page
    if (!currentSegment) {
        console.error(`Segmento não encontrado para a URL: ${segmentoUrlParam}`);
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
            {/* Banner Section */}
            <div className="relative h-96 w-full overflow-hidden">
                <Image
                    src={currentSegment.banner}
                    alt={`${currentSegment.metadescricao} Banner`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="brightness-50 scale-105 hover:scale-100 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                {/* Animated particles background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-pulse" />
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 max-w-4xl mx-auto px-6">
                        <h1 className="text-white text-5xl md:text-6xl font-bold capitalize tracking-wide drop-shadow-2xl animate-fade-in">
                            {currentSegment.url.replace(/-/g, ' ')}
                        </h1>
                        <p className="text-orange-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
                            {currentSegment.metadescricao}
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full animate-fade-in-delayed" />
                    </div>
                </div>
            </div>

            {/* Course Cards Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentSegment.cursos.map((curso: Course, index: number) => (
                        <div key={index} className="group relative">
                            {/* Card Container */}
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1 border border-orange-100">
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={curso.path[0].img1}
                                        alt={curso.nome}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Floating badge */}
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        Novo
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                        {curso.nome}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {curso.descricao}
                                    </p>

                                    {/* Interactive buttons */}
                                    <div className="flex space-x-3 pt-4">
                                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            Saiba Mais
                                        </button>
                                        <button className="px-4 py-3 border-2 border-orange-500 text-orange-500 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105" title='botão'>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-2 -right-2 w-20 h-20 bg-orange-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45" />
                                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-orange-300 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-400/5 group-hover:via-orange-500/5 group-hover:to-orange-600/5 rounded-3xl transition-all duration-500 -z-10 blur-xl" />
                        </div>
                    ))}
                </div>

                {/* Statistics or features section */}
                <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">+1000</div>
                            <div className="text-orange-100">Alunos Matriculados</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">98%</div>
                            <div className="text-orange-100">Satisfação</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">15+</div>
                            <div className="text-orange-100">Anos de Experiência</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back navigation */}
            <div className="text-center pb-16">
                <Link
                    href={`/segmentos`}
                    className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 text-lg font-medium group transition-all duration-300"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-all duration-300">
                        Voltar para Todos os Segmentos
                    </span>
                </Link>
            </div>

            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fade-in-delayed {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }

                .animate-fade-in-delayed {
                    animation: fade-in-delayed 0.8s ease-out 0.3s forwards;
                    opacity: 0;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default CursosPage;