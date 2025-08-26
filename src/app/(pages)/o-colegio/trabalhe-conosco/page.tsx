'use client';

import React, { useState, useEffect } from 'react';
import {
    Search,
    MapPin,
    Filter,
    ChevronDown,
    Heart,
    Share2,
    Building,
    Clock,
    DollarSign,
    Calendar,
    Star,
    X,
    CheckCircle,
    Send,
    Paperclip,
    User,
    Mail,
    MessageSquare
} from 'lucide-react';

interface Job {
    id: string;
    title: string;
    company: string;
    companyRating: number;
    location: string;
    salary: string;
    type: string;
    schedule: string;
    description: string;
    requirements: string[];
    benefits: string[];
    isNew?: boolean;
    isUrgent?: boolean;
    isRemote?: boolean;
    postedDate: string;
    applicants?: string;
}

interface ApplicationForm {
    name: string;
    email: string;
    phone: string;
    message: string;
    file: File | null;
}

interface Toast {
    show: boolean;
    message: string;
    type: 'success' | 'error';
}

const jobsData: Job[] = [
    {
        id: '1',
        title: 'Sales Manager (Portuguese)',
        company: 'North America Electrical Energy Equipments CO., Ltd',
        companyRating: 4.2,
        location: 'Home Office',
        salary: 'R$ 70.000 - R$ 200.000 por ano',
        type: 'Tempo integral',
        schedule: 'De segunda à sexta-feira',
        description: 'Estamos procurando um Sales Manager experiente para liderar nossa equipe de vendas no mercado brasileiro. O candidato ideal terá experiência comprovada em vendas B2B e conhecimento do setor de energia elétrica.',
        requirements: [
            'Graduação em Engenharia, Administração ou área relacionada',
            'Experiência mínima de 5 anos em vendas B2B',
            'Fluência em português e inglês',
            'Conhecimento do mercado de equipamentos elétricos'
        ],
        benefits: [
            'Plano de saúde e odontológico',
            'Vale refeição',
            'Participação nos lucros',
            'Home office',
            'Horário flexível'
        ],
        isNew: false,
        isUrgent: false,
        isRemote: true,
        postedDate: 'Há 2 dias',
        applicants: '+ de 20.000 vagas'
    },
    {
        id: '2',
        title: 'Instrutor(a) de Inglês - Aulas Online (Autônomo)',
        company: 'Aliança América Idiomas',
        companyRating: 2.3,
        location: 'Home Office',
        salary: 'R$ 1.518 - R$ 2.700 por mês',
        type: 'Autônomo / PJ',
        schedule: 'Turno Noturno',
        description: 'Oportunidade para professores de inglês ministrarem aulas online. Trabalho remoto com flexibilidade de horários.',
        requirements: [
            'Formação em Letras - Inglês ou áreas afins',
            'Experiência em ensino de idiomas',
            'Conhecimento em plataformas digitais',
            'Disponibilidade para turno noturno'
        ],
        benefits: [
            'Trabalho remoto',
            'Horário flexível',
            'Pagamento por aula ministrada'
        ],
        isNew: true,
        isUrgent: true,
        isRemote: true,
        postedDate: 'Há 1 dia',
        applicants: 'Contratando vários candidatos'
    },
    {
        id: '3',
        title: 'Desenvolvedor Frontend React',
        company: 'Tech Solutions Brasil',
        companyRating: 4.8,
        location: 'São Paulo, SP',
        salary: 'R$ 8.000 - R$ 15.000 por mês',
        type: 'CLT',
        schedule: 'De segunda à sexta-feira',
        description: 'Procuramos desenvolvedor Frontend com experiência em React para integrar nossa equipe de desenvolvimento.',
        requirements: [
            'Experiência com React, TypeScript e Next.js',
            'Conhecimento em CSS-in-JS (styled-components, emotion)',
            'Experiência com testes automatizados',
            'Conhecimento em Git e metodologias ágeis'
        ],
        benefits: [
            'Vale alimentação R$ 800',
            'Plano de saúde premium',
            'Gympass',
            'Auxílio home office',
            'Participação nos lucros'
        ],
        isNew: true,
        isRemote: false,
        postedDate: 'Há 3 horas',
        applicants: '15 candidatos'
    },
    {
        id: '4',
        title: 'Analista de Marketing Digital',
        company: 'Marketing Pro Agency',
        companyRating: 4.1,
        location: 'Rio de Janeiro, RJ',
        salary: 'R$ 4.500 - R$ 7.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Vaga para analista de marketing digital com foco em campanhas pagas e analytics.',
        requirements: [
            'Experiência com Google Ads e Facebook Ads',
            'Conhecimento em Google Analytics',
            'Experiência com automação de marketing',
            'Conhecimento em SEO/SEM'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Vale refeição',
            'Cursos e certificações'
        ],
        isRemote: false,
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos'
    },
    {
        id: '4',
        title: 'Analista de Marketing Digital',
        company: 'Marketing Pro Agency',
        companyRating: 4.1,
        location: 'Rio de Janeiro, RJ',
        salary: 'R$ 4.500 - R$ 7.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Vaga para analista de marketing digital com foco em campanhas pagas e analytics.',
        requirements: [
            'Experiência com Google Ads e Facebook Ads',
            'Conhecimento em Google Analytics',
            'Experiência com automação de marketing',
            'Conhecimento em SEO/SEM'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Vale refeição',
            'Cursos e certificações'
        ],
        isRemote: false,
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos'
    },
    {
        id: '4',
        title: 'Analista de Marketing Digital',
        company: 'Marketing Pro Agency',
        companyRating: 4.1,
        location: 'Rio de Janeiro, RJ',
        salary: 'R$ 4.500 - R$ 7.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Vaga para analista de marketing digital com foco em campanhas pagas e analytics.',
        requirements: [
            'Experiência com Google Ads e Facebook Ads',
            'Conhecimento em Google Analytics',
            'Experiência com automação de marketing',
            'Conhecimento em SEO/SEM'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Vale refeição',
            'Cursos e certificações'
        ],
        isRemote: false,
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos'
    },
    {
        id: '4',
        title: 'Analista de Marketing Digital',
        company: 'Marketing Pro Agency',
        companyRating: 4.1,
        location: 'Rio de Janeiro, RJ',
        salary: 'R$ 4.500 - R$ 7.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Vaga para analista de marketing digital com foco em campanhas pagas e analytics.',
        requirements: [
            'Experiência com Google Ads e Facebook Ads',
            'Conhecimento em Google Analytics',
            'Experiência com automação de marketing',
            'Conhecimento em SEO/SEM'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Vale refeição',
            'Cursos e certificações'
        ],
        isRemote: false,
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos'
    },
    {
        id: '4',
        title: 'Analista de Marketing Digital',
        company: 'Marketing Pro Agency',
        companyRating: 4.1,
        location: 'Rio de Janeiro, RJ',
        salary: 'R$ 4.500 - R$ 7.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Vaga para analista de marketing digital com foco em campanhas pagas e analytics.',
        requirements: [
            'Experiência com Google Ads e Facebook Ads',
            'Conhecimento em Google Analytics',
            'Experiência com automação de marketing',
            'Conhecimento em SEO/SEM'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Vale refeição',
            'Cursos e certificações'
        ],
        isRemote: false,
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos'
    }
];

const ToastNotification: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [toast.show, onClose]);

    if (!toast.show) return null;

    return (
        <div className="fixed top-4 right-4 z-[70] transform transition-all duration-500 ease-in-out">
            <div className={`
                flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-l-4 backdrop-blur-sm
                ${toast.type === 'success'
                    ? 'bg-white/95 border-green-500 text-green-800'
                    : 'bg-white/95 border-red-500 text-red-800'
                }
                animate-in slide-in-from-right-full
            `}>
                {toast.type === 'success' && (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
                <p className="font-medium text-sm">
                    {toast.message}
                </p>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-black/5 rounded-lg transition-colors"
                >
                    <X className="w-4 h-4 opacity-60" />
                </button>
            </div>
        </div>
    );
};

const JobSearchPage: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('home office');
    const [location, setLocation] = useState('');
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
    const [showFilters, setShowFilters] = useState(false);
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null
    });
    const [toast, setToast] = useState<Toast>({ show: false, message: '', type: 'success' });
    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ show: true, message, type });
    };
    const hideToast = () => {
        setToast(prev => ({ ...prev, show: false }));
    };
    const openApplicationModal = (job: Job) => {
        setSelectedJob(job);
        setShowApplicationModal(true);
        setApplicationForm(prev => ({
            ...prev,
            message: `Tenho interesse na vaga de ${job.title} na ${job.company}.`
        }));
    };
    const closeApplicationModal = () => {
        setShowApplicationModal(false);
        setApplicationForm({
            name: '',
            email: '',
            phone: '',
            message: '',
            file: null
        });
    };
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setApplicationForm(prev => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && (file.type === 'application/pdf' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            file.type === 'application/msword')) {
            setApplicationForm(prev => ({ ...prev, file }));
        } else {
            showToast('Por favor, selecione apenas arquivos PDF ou DOCX', 'error');
            e.target.value = '';
        }
    };
    const handleApplicationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Aqui você fará a integração com seu NodeMailer
        const formData = new FormData();
        formData.append('name', applicationForm.name);
        formData.append('email', applicationForm.email);
        formData.append('phone', applicationForm.phone);
        formData.append('message', applicationForm.message);
        formData.append('jobTitle', selectedJob?.title || '');
        formData.append('company', selectedJob?.company || '');
        if (applicationForm.file) {
            formData.append('resume', applicationForm.file);
        }

        try {
            // Simular envio - substitua pela sua API
            console.log('Enviando candidatura:', {
                ...applicationForm,
                jobTitle: selectedJob?.title,
                company: selectedJob?.company
            });

            // Fechar modal
            closeApplicationModal();

            // Mostrar toast de sucesso
            showToast(`Candidatura para ${selectedJob?.title} enviada com sucesso!`);

        } catch (error) {
            showToast('Erro ao enviar candidatura. Tente novamente.', 'error');
        }
    };
    const toggleSaveJob = (jobId: string) => {
        setSavedJobs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(jobId)) {
                newSet.delete(jobId);
                showToast('Vaga removida dos favoritos');
            } else {
                newSet.add(jobId);
                showToast('Vaga salva nos favoritos');
            }
            return newSet;
        });
    };
    const handleApply = (job: Job) => {
        openApplicationModal(job);
    };

    return (
        <section className="min-h-screen bg-gray-50">
            <ToastNotification toast={toast} onClose={hideToast} />

            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    {/* Search Bar */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Título da vaga, palavras-chave ou empresa"
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder='Cidade, estado, região ou "remoto"'
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            Achar vagas
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-4 text-sm">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            <Filter className="w-4 h-4" />
                            Filtros
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                            Salário <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                            Remoto <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                            Empresa <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                            Tipo de vaga <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                            Data do anúncio <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
                {/* Sidebar Info */}
                <div className="w-80">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-sm text-blue-800">
                            <strong>Crie seu currículo</strong> - Seja encontrado pelas empresas!
                        </p>
                    </div>

                    <div className="text-sm text-gray-600 mb-6">
                        <p>Vagas: home office</p>
                        <p className="flex items-center gap-2">
                            Ordenar por: <strong>relevância</strong> - <button className="text-blue-600 hover:underline">data</button>
                        </p>
                        <p className="text-gray-500">+ de 20.000 vagas 🤔</p>
                    </div>

                    {/* Job Cards */}
                    <div className="space-y-4">
                        {jobsData.map((job) => (
                            <div
                                key={job.id}
                                className={`bg-white border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                                    selectedJob?.id === job.id ? 'border-blue-500 shadow-md' : 'border-gray-200'
                                }`}
                                onClick={() => setSelectedJob(job)}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                                        {job.title}
                                    </h3>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSaveJob(job.id);
                                        }}
                                        className="p-1 hover:bg-gray-100 rounded"
                                    >
                                        <Heart
                                            className={`w-4 h-4 ${
                                                savedJobs.has(job.id)
                                                    ? 'fill-red-500 text-red-500'
                                                    : 'text-gray-400'
                                            }`}
                                        />
                                    </button>
                                </div>

                                <div className="text-sm text-gray-600 mb-2">
                                    <p className="font-medium">{job.company}</p>
                                    <div className="flex items-center gap-1">
                                        <span>{job.location}</span>
                                        {job.isRemote && (
                                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                                                Remoto
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="text-sm mb-2">
                                    <p className="font-medium text-gray-900">{job.salary}</p>
                                    <p className="text-gray-600">{job.type} {job.schedule && `• ${job.schedule}`}</p>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span>{job.postedDate}</span>
                                    {job.applicants && <span>{job.applicants}</span>}
                                </div>

                                {(job.isNew || job.isUrgent) && (
                                    <div className="flex gap-2 mt-2">
                                        {job.isNew && (
                                            <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded text-xs font-medium">
                                                nova
                                            </span>
                                        )}
                                        {job.isUrgent && (
                                            <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">
                                                Contratando vários candidatos
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="mt-2">
                                    <button
                                        onClick={() => openApplicationModal(job)}
                                        className="text-blue-600 text-xs hover:underline flex items-center gap-1"
                                    >
                                        <Send className="w-3 h-3" />
                                        Candidate-se facilmente
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Job Details Panel */}
                <div className="flex-1">
                    {selectedJob ? (
                        <div className="bg-white border border-gray-200 rounded-lg">
                            {/* Header */}
                            <div className="border-b border-gray-200 p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                            {selectedJob.title}
                                        </h1>
                                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                                            <span className="font-medium">{selectedJob.company}</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm">{selectedJob.companyRating}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-2">{selectedJob.location}</p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {selectedJob.salary}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="p-2 hover:bg-gray-100 rounded-lg"
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleApply(selectedJob)}
                                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Candidatar-se
                                    </button>
                                    <button
                                        onClick={() => toggleSaveJob(selectedJob.id)}
                                        className={`p-2 border rounded-lg transition-colors ${
                                            savedJobs.has(selectedJob.id)
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${
                                                savedJobs.has(selectedJob.id)
                                                    ? 'fill-red-500 text-red-500'
                                                    : 'text-gray-600'
                                            }`}
                                        />
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div className="p-6">
                                <div className="space-y-6">
                                    {/* Dados da vaga */}
                                    <section>
                                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Building className="w-5 h-5" />
                                            Dados da vaga
                                        </h2>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <DollarSign className="w-5 h-5 text-gray-400" />
                                                <div>
                                                    <p className="font-medium text-gray-700">Salário</p>
                                                    <p className="text-gray-600">{selectedJob.salary}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-gray-400" />
                                                <div>
                                                    <p className="font-medium text-gray-700">Tipo de vaga</p>
                                                    <div className="flex gap-2">
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                                            {selectedJob.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-gray-400" />
                                                <div>
                                                    <p className="font-medium text-gray-700">Turno e horário de trabalho</p>
                                                    <p className="text-gray-600">{selectedJob.schedule}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Description */}
                                    <section>
                                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                                            Descrição da vaga
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            {selectedJob.description}
                                        </p>
                                    </section>

                                    {/* Requirements */}
                                    <section>
                                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                                            Requisitos
                                        </h2>
                                        <ul className="space-y-2">
                                            {selectedJob.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    <span className="text-gray-700">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Benefits */}
                                    <section>
                                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                                            Benefícios
                                        </h2>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Retirados da descrição completa da vaga
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedJob.benefits.map((benefit, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                            <div className="text-gray-400 mb-4">
                                <Building className="w-16 h-16 mx-auto mb-4" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Selecione uma vaga
                            </h2>
                            <p className="text-gray-600">
                                Clique em uma vaga à esquerda para ver os detalhes
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Application Modal */}
            {showApplicationModal && selectedJob && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Candidatar-se
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {selectedJob.title} - {selectedJob.company}
                                    </p>
                                </div>
                                <button
                                    onClick={closeApplicationModal}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <form onSubmit={handleApplicationSubmit} className="p-6 space-y-6">
                            {/* Nome */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <User className="w-4 h-4 inline mr-1" />
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={applicationForm.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 inline mr-1" />
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={applicationForm.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            {/* Telefone */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Telefone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={applicationForm.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="(11) 99999-9999"
                                />
                            </div>

                            {/* Mensagem */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <MessageSquare className="w-4 h-4 inline mr-1" />
                                    Carta de Apresentação *
                                </label>
                                <textarea
                                    name="message"
                                    value={applicationForm.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Conte sobre sua experiência e por que você é o candidato ideal para esta vaga..."
                                />
                            </div>

                            {/* Upload de Currículo */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Paperclip className="w-4 h-4 inline mr-1" />
                                    Anexar Currículo *
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept=".pdf,.docx,.doc"
                                        onChange={handleFileChange}
                                        required
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                        <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600">
                                            {applicationForm.file
                                                ? applicationForm.file.name
                                                : 'Clique para selecionar ou arraste seu currículo'
                                            }
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Formatos aceitos: PDF, DOCX (máx. 5MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Informações da vaga */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                <h3 className="font-semibold text-blue-900 mb-2">Detalhes da vaga:</h3>
                                <div className="space-y-1 text-sm text-blue-800">
                                    <p><strong>Posição:</strong> {selectedJob.title}</p>
                                    <p><strong>Empresa:</strong> {selectedJob.company}</p>
                                    <p><strong>Localização:</strong> {selectedJob.location}</p>
                                    <p><strong>Salário:</strong> {selectedJob.salary}</p>
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeApplicationModal}
                                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Enviar Candidatura
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default JobSearchPage;