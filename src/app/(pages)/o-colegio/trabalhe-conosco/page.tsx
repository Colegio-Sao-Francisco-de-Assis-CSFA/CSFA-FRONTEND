'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
    Search,
    MapPin,
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

// Interface definitions for Job, ApplicationForm, and Toast
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
    postedDate: string;
    applicants?: string;
    badges?: string[];
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

// Mock data for job listings
const jobsData: Job[] = [
    {
        id: '1',
        title: 'Sales Manager (Portuguese)',
        company: 'North America Electrical Energy Equipments CO., Ltd',
        companyRating: 4.2,
        location: 'São Paulo, SP',
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
            'Horário flexível'
        ],
        postedDate: 'Há 2 dias',
        applicants: '+ de 20.000 vagas',
        badges: ['Home Office']
    },
    {
        id: '2',
        title: 'Instrutor(a) de Inglês - Aulas Online (Autônomo)',
        company: 'Aliança América Idiomas',
        companyRating: 2.3,
        location: 'Remoto',
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
        postedDate: 'Há 1 dia',
        applicants: 'Contratando vários candidatos',
        badges: ['Home Office', 'Urgente']
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
        postedDate: 'Há 3 horas',
        applicants: '15 candidatos',
        badges: ['Presencial', 'Imediato']
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
        postedDate: 'Há 1 semana',
        applicants: '32 candidatos',
        badges: ['Híbrido']
    },
    {
        id: '5',
        title: 'Gerente de Vendas Senior',
        company: 'Startup Inovadora Tech',
        companyRating: 4.5,
        location: 'Belo Horizonte, MG',
        salary: 'R$ 12.000 - R$ 18.000 por mês',
        type: 'CLT',
        schedule: 'Flexível',
        description: 'Buscamos um gerente de vendas experiente para liderar nossa expansão no mercado mineiro.',
        requirements: [
            'MBA em Vendas ou área relacionada',
            'Experiência mínima de 8 anos em gestão comercial',
            'Conhecimento em CRM e ferramentas de automação',
            'Liderança de equipes'
        ],
        benefits: [
            'Stock options',
            'Plano de saúde premium',
            'Vale refeição R$ 1.200',
            'Carro da empresa',
            'Comissões atrativas'
        ],
        postedDate: 'Há 4 dias',
        applicants: '8 candidatos',
        badges: ['Presencial', 'Urgente']
    },
    {
        id: '6',
        title: 'Designer UX/UI Pleno',
        company: 'Creative Digital Studio',
        companyRating: 4.7,
        location: 'Porto Alegre, RS',
        salary: 'R$ 6.000 - R$ 10.000 por mês',
        type: 'CLT',
        schedule: 'Híbrido',
        description: 'Procuramos designer UX/UI para criar experiências digitais incríveis para nossos clientes.',
        requirements: [
            'Portfólio sólido em UX/UI',
            'Proficiência em Figma, Adobe XD',
            'Conhecimento em Design System',
            'Experiência com prototipagem'
        ],
        benefits: [
            'Trabalho híbrido',
            'Plano de saúde',
            'Auxílio educação',
            'Equipamentos modernos',
            '14º salário'
        ],
        postedDate: 'Há 5 dias',
        applicants: '27 candidatos',
        badges: ['Híbrido']
    },
    {
        id: '7',
        title: 'Consultor de TI - Cloud AWS',
        company: 'CloudTech Solutions',
        companyRating: 4.3,
        location: 'Remoto',
        salary: 'R$ 15.000 - R$ 25.000 por mês',
        type: 'PJ',
        schedule: 'Flexível',
        description: 'Vaga para consultor especialista em soluções AWS para projetos de migração e otimização.',
        requirements: [
            'Certificações AWS (Solutions Architect, SysOps)',
            'Experiência mínima de 6 anos com Cloud',
            'Conhecimento em DevOps e CI/CD',
            'Inglês avançado'
        ],
        benefits: [
            'Trabalho 100% remoto',
            'Flexibilidade total de horários',
            'Projetos internacionais',
            'Bonificações por certificações'
        ],
        postedDate: 'Há 6 dias',
        applicants: '12 candidatos',
        badges: ['Home Office', 'Imediato']
    },
    {
        id: '8',
        title: 'Analista Financeiro Júnior',
        company: 'Empresa Tradicional S.A.',
        companyRating: 3.8,
        location: 'São Paulo, SP',
        salary: 'R$ 3.500 - R$ 5.500 por mês',
        type: 'CLT',
        schedule: 'De segunda à sexta-feira',
        description: 'Oportunidade para analista financeiro júnior em empresa consolidada no mercado.',
        requirements: [
            'Graduação em Administração, Economia ou Contabilidade',
            'Conhecimento em Excel avançado',
            'Experiência com análise de demonstrativos',
            'Inglês intermediário'
        ],
        benefits: [
            'Plano de saúde',
            'Vale refeição',
            'Vale transporte',
            'Desconto em produtos da empresa'
        ],
        postedDate: 'Há 1 semana',
        applicants: '45 candidatos',
        badges: ['Presencial']
    }
];

// Styles for different job badges
const badgeStyles: Record<string, string> = {
    'Home Office': 'bg-green-100 text-green-800 border-green-200',
    'Híbrido': 'bg-blue-100 text-blue-800 border-blue-200',
    'Presencial': 'bg-purple-100 text-purple-800 border-purple-200',
    'Urgente': 'bg-red-100 text-red-800 border-red-200',
    'Imediato': 'bg-orange-100 text-orange-800 border-orange-200'
};

// Toast notification component
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

// Main component for the Job Search Page
const JobSearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('home office');
    const [location, setLocation] = useState('');
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null
    });
    const [toast, setToast] = useState<Toast>({ show: false, message: '', type: 'success' });

    // Effect to disable body scroll when the modal is open
    useEffect(() => {
        if (showApplicationModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll on component unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showApplicationModal]);


    // Memoized filtering logic
    const filteredJobs = useMemo(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
        const lowercasedLocation = location.toLowerCase().trim();

        if (lowercasedSearchTerm === '' && lowercasedLocation === '') {
            return jobsData;
        }

        return jobsData.filter(job => {
            const searchableContent = [
                job.title,
                job.company,
                job.description,
                ...(job.badges || []),
                ...(job.requirements || [])
            ].join(' ').toLowerCase();

            const matchesSearchTerm = lowercasedSearchTerm === '' || searchableContent.includes(lowercasedSearchTerm);
            const matchesLocation = lowercasedLocation === '' || job.location.toLowerCase().includes(lowercasedLocation);

            return matchesSearchTerm && matchesLocation;
        });
    }, [searchTerm, location]);

    // Effect to handle selection changes when the filter is applied
    useEffect(() => {
        const isSelectedJobInFilteredList = filteredJobs.some(job => job.id === selectedJob?.id);
        if (!isSelectedJobInFilteredList) {
            setSelectedJob(filteredJobs[0] || null);
        }
    }, [filteredJobs, selectedJob]);


    // Function to show a toast notification
    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ show: true, message, type });
    };

    // Function to hide the toast notification
    const hideToast = () => {
        setToast(prev => ({ ...prev, show: false }));
    };

    // Open the application modal and pre-fill the message
    const openApplicationModal = (job: Job) => {
        setSelectedJob(job);
        setShowApplicationModal(true);
        setApplicationForm(prev => ({
            ...prev,
            message: `Tenho interesse na vaga de ${job.title} na ${job.company}.`
        }));
    };

    // Close the application modal and reset the form
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

    // Handle input changes in the application form
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setApplicationForm(prev => ({ ...prev, [name]: value }));
    };

    // Handle file selection for the resume
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

    // Handle the submission of the job application
    const handleApplicationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

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
            // Simulate API call
            console.log('Enviando candidatura:', {
                ...applicationForm,
                jobTitle: selectedJob?.title,
                company: selectedJob?.company
            });

            closeApplicationModal();
            showToast(`Candidatura para ${selectedJob?.title} enviada com sucesso!`);

        } catch (error) {
            showToast('Erro ao enviar candidatura. Tente novamente.', 'error');
        }
    };

    // Handle the "Apply" button click
    const handleApply = (job: Job) => {
        openApplicationModal(job);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <ToastNotification toast={toast} onClose={hideToast} />

            <section className="pt-32 max-w-7xl mx-auto px-4 py-6">
                {/* Header with search inputs */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar vagas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>
                        <div className="flex-1 sm:flex-none relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Localização"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Buscar
                        </button>
                    </div>

                    <div className="text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                            Vagas encontradas: <strong>{filteredJobs.length}</strong> •
                            Ordenar por: <strong>relevância</strong>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-220px)]">
                    {/* Sidebar - Job List */}
                    <aside className="w-full lg:w-96 bg-white rounded-lg border border-gray-200 flex flex-col">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="font-semibold text-gray-900">Vagas Disponíveis</h2>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <div className="p-4 space-y-4">
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                                                selectedJob?.id === job.id
                                                    ? 'border-blue-500 bg-blue-50 shadow-md'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                            onClick={() => setSelectedJob(job)}
                                        >
                                            <div className="mb-2">
                                                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                                                    {job.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 font-medium">{job.company}</p>
                                            </div>

                                            <div className="text-sm text-gray-600 mb-2">
                                                <p className="flex items-center gap-1 mb-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {job.location}
                                                </p>
                                                <p className="font-medium text-gray-900">{job.salary}</p>
                                                <p className="text-gray-600">{job.type}</p>
                                            </div>

                                            {job.badges && job.badges.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {job.badges.map((badge, index) => (
                                                        <span
                                                            key={index}
                                                            className={`px-2 py-1 rounded-full text-xs font-medium border ${
                                                                badgeStyles[badge] || 'bg-gray-100 text-gray-700 border-gray-200'
                                                            }`}
                                                        >
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{job.postedDate}</span>
                                                {job.applicants && <span>{job.applicants}</span>}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center text-gray-500 p-8">
                                        <h3 className="font-semibold">Nenhuma vaga encontrada</h3>
                                        <p className="text-sm">Tente ajustar seus termos de busca.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Job Details Panel */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 flex flex-col">
                        {selectedJob ? (
                            <>
                                {/* Fixed Header */}
                                <div className="border-b border-gray-200 p-6 flex-shrink-0">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex-1">
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
                                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{selectedJob.location}</span>
                                            </div>
                                            <p className="text-lg font-semibold text-gray-900">
                                                {selectedJob.salary}
                                            </p>
                                        </div>
                                    </div>

                                    {selectedJob.badges && selectedJob.badges.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selectedJob.badges.map((badge, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                                                        badgeStyles[badge] || 'bg-gray-100 text-gray-700 border-gray-200'
                                                    }`}
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <button
                                        onClick={() => handleApply(selectedJob)}
                                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Candidatar-se
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="space-y-6">
                                        {/* Job Data */}
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
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                                            {selectedJob.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Calendar className="w-5 h-5 text-gray-400" />
                                                    <div>
                                                        <p className="font-medium text-gray-700">Horário de trabalho</p>
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
                                                        <span className="text-blue-600 font-bold mt-1">•</span>
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
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-center">
                                    <Building className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        Selecione uma vaga
                                    </h2>
                                    <p className="text-gray-600">
                                        Clique em uma vaga à esquerda para ver os detalhes
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {showApplicationModal && selectedJob && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col">
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

                        <form onSubmit={handleApplicationSubmit} className="p-6 space-y-6 overflow-y-auto">
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

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                <h3 className="font-semibold text-blue-900 mb-2">Detalhes da vaga:</h3>
                                <div className="space-y-1 text-sm text-blue-800">
                                    <p><strong>Posição:</strong> {selectedJob.title}</p>
                                    <p><strong>Empresa:</strong> {selectedJob.company}</p>
                                    <p><strong>Localização:</strong> {selectedJob.location}</p>
                                    <p><strong>Salário:</strong> {selectedJob.salary}</p>
                                </div>
                            </div>

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
        </div>
    );
};

export default JobSearchPage;
