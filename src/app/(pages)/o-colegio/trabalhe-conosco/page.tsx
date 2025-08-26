// pages/trabalhe-conosco.tsx
'use client';

import React, { useState } from 'react';
import Head from 'next/head';

import {
    CircleX,
    MapPinIcon,
    ClockIcon,
    CircleDollarSign,
    Paperclip

} from 'lucide-react';

interface Job {
    id: string;
    title: string;
    type: string;
    salary: string;
    location: string;
    workHours: string;
    description: string;
    requirements: string[];
    icon: string;
}

interface ApplicationForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    file: File | null;
}

const jobs: Job[] = [
    {
        id: '1',
        title: 'Professor de Matemática',
        type: 'CLT',
        salary: 'R$ 4.500 - R$ 6.500',
        location: 'São Paulo, SP',
        workHours: '40h semanais',
        description: 'Buscamos professor experiente para lecionar matemática no ensino médio. Oportunidade para trabalhar com metodologias inovadoras em ambiente colaborativo.',
        requirements: [
            'Licenciatura em Matemática',
            'Experiência mínima de 2 anos',
            'Conhecimento em tecnologias educacionais'
        ],
        icon: '👩‍🏫'
    },
    {
        id: '2',
        title: 'Coordenador Pedagógico',
        type: 'CLT',
        salary: 'R$ 6.000 - R$ 8.500',
        location: 'São Paulo, SP',
        workHours: '44h semanais',
        description: 'Procuramos coordenador para liderar equipe pedagógica e desenvolver projetos educacionais inovadores em nossa instituição.',
        requirements: [
            'Pós-graduação em Educação',
            'Experiência em coordenação',
            'Liderança e visão estratégica'
        ],
        icon: '🎓'
    },
    {
        id: '3',
        title: 'Assistente de TI',
        type: 'CLT',
        salary: 'R$ 3.500 - R$ 5.000',
        location: 'São Paulo, SP',
        workHours: '40h semanais',
        description: 'Vaga para suporte técnico e manutenção da infraestrutura de TI da instituição, incluindo suporte aos professores e alunos.',
        requirements: [
            'Curso técnico em Informática',
            'Conhecimento em redes e hardware',
            'Experiência em suporte técnico'
        ],
        icon: '💻'
    },
    {
        id: '4',
        title: 'Bibliotecário',
        type: 'CLT',
        salary: 'R$ 3.800 - R$ 5.200',
        location: 'São Paulo, SP',
        workHours: '36h semanais',
        description: 'Oportunidade para gerenciar nossa biblioteca colaborativa, organizando acervo e promovendo atividades de incentivo à leitura.',
        requirements: [
            'Graduação em Biblioteconomia',
            'Registro no CRB',
            'Experiência com sistemas digitais'
        ],
        icon: '📚'
    }
];

const TrabalheConosco: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [form, setForm] = useState<ApplicationForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null
    });

    const openModal = (job: Job) => {
        setSelectedJob(job);
        setForm(prev => ({
            ...prev,
            subject: `Candidatura para ${job.title}`
        }));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
            file: null
        });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && (file.type === 'application/pdf' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            file.type === 'application/msword')) {
            setForm(prev => ({ ...prev, file }));
        } else {
            alert('Por favor, selecione apenas arquivos PDF ou DOCX');
            e.target.value = '';
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria o envio do email
        console.log('Form submitted:', form);
        alert('Candidatura enviada com sucesso!');
        closeModal();
    };

    return (
        <>
            <Head>
                <title>Trabalhe Conosco - Colégio</title>
                <meta name="description" content="Faça parte de nossa equipe e ajude a construir o futuro da educação" />
            </Head>

            {/* Header */}
            <header className="bg-white shadow-sm border-b-4 border-blue-600">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Início
                                </a>
                                <a href="#" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    O Colégio
                                </a>
                                <a href="#" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Como Educamos
                                </a>
                                <a href="#" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Segmentos
                                </a>
                                <a href="#" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Alunos
                                </a>
                            </div>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Área Restrita
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
                                Trabalhe Conosco
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Faça parte de nossa equipe e ajude a construir o futuro da educação.
                            Descubra oportunidades incríveis para crescer profissionalmente em um
                            ambiente colaborativo e inovador.
                        </p>
                    </div>

                    {/* Jobs List */}
                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10"
                            >
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-800 h-1"></div>

                                <div className="p-6">
                                    {/* Job Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center text-white text-2xl">
                                            {job.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">
                                                {job.title}
                                            </h3>
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Job Details */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 text-slate-600">
                                            <CircleDollarSign className="w-5 h-5 text-blue-600" />
                                            <span className="text-sm">{job.salary}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-600">
                                            <MapPinIcon className="w-5 h-5 text-blue-600" />
                                            <span className="text-sm">{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-600">
                                            <ClockIcon className="w-5 h-5 text-blue-600" />
                                            <span className="text-sm">{job.workHours}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {job.description}
                                    </p>

                                    {/* Requirements */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-900 mb-3">
                                            Requisitos:
                                        </h4>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm text-slate-600 flex items-start gap-2"
                                                >
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Apply Button */}
                                    <button
                                        onClick={() => openModal(job)}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                                    >
                                        Candidatar-se
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Candidatar-se
                                </h2>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    <CircleX className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Nome */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 transition-colors"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            {/* Assunto */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 transition-colors bg-slate-50"
                                    readOnly
                                />
                            </div>

                            {/* Mensagem */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Mensagem *
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 transition-colors resize-none"
                                    placeholder="Conte-nos sobre sua experiência e motivação para esta vaga..."
                                />
                            </div>

                            {/* Upload de Arquivo */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Anexar Currículo (PDF ou DOCX)
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept=".pdf,.docx,.doc"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-600 hover:bg-slate-50 transition-colors">
                                        <Paperclip className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                        <p className="text-sm text-slate-600">
                                            {form.file ? form.file.name : 'Clique para selecionar ou arraste seu arquivo'}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            Formatos aceitos: PDF, DOCX
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Enviar Candidatura
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default TrabalheConosco;