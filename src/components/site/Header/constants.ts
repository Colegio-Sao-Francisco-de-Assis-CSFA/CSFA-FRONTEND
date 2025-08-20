// src/components/layout/Header/constants.ts
import { NavMenu } from './types';

export const mainNavItems: NavMenu[] = [
  { type: 'link', label: 'Início', href: '/' },
  {
    type: 'dropdown',
    label: 'O Colégio',
    items: [
      { label: 'Matrículas', href: '/o-colegio/matriculas'},
      { label: 'Contato', href: '/o-colegio/contato' },
      { label: 'Quem Somos', href: '/o-colegio/quem-somos' },
      { label: 'Informações Úteis', href: '/o-colegio/informacoes-uteis' },
      { label: 'Nossa História', href: '/o-colegio/nossa-historia' },
      { label: 'Metodologia de Ensino', href: '/o-colegio/metodologia-de-ensino' },
      { label: 'Trabalhe Conosco', href: '/o-colegio/trabalhe-conosco' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Como Educamos',
    items: [
      { label: 'Proposta Pedagógica', href: '/colegio/proposta-pedagogica' },
      { label: 'Extracurriculares', href: '/colegio/extracurriculares' },
      { label: 'Parcerias', href: '/colegio/parcerias' },
      { label: 'Tecnologia Educacional', href: '/colegio/tecnologia-educacional' },
      { label: 'Pastoral', href: '/colegio/pastoral' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Segmentos',
    items: [
      { label: 'Educação Infantil', href: '/segmentos/infantil' },
      { label: 'Anos Iniciais', href: '/segmentos/anos-inicias' },
      { label: 'Anos finais', href: '/segmentos/anos-finais' },
      { label: 'Ensino Médio', href: '/segmentos/enino-medio' },
      { label: 'Ensino POLI', href: '/segmentos/ensino-poli' },
      { label: 'EEA Vôlei', href: '/segmentos/escola-de-esportes-e-artes-volei' },
      { label: 'EEA Judô', href: '/segmentos/escola-de-esportes-e-artes-judo' },
      { label: 'EEA Futsal', href: '/segmentos/escola-de-esportes-e-artes-futsal' },
      { label: 'EEA Dança', href: '/segmentos/escola-de-esportes-e-artes-danca' },
      { label: 'EEA Teatro', href: '/segmentos/escola-de-esportes-e-artes-teatro' },
      { label: 'EEA Balé', href: '/segmentos/escola-de-esportes-e-artes-bale' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Alunos',
    items: [
      { label: 'Lista de materiais', href: '/alunos/lista-de-materiais' },
      { label: 'Calendário escolar', href: '/alunos/calendario-escolar' },
      { label: 'Uniformes', href: '/alunos/uniformes' },
      { label: 'Tecnologia educacional', href: '/alunos/tecnologia-educacional' },
      // { label: 'Google Classroom & Gmail', href: '/alunos/google-classroom-gmail' },
      // { label: 'ClaassApp', href: '/alunos/classapp' },
      // { label: 'Sas Aluno', href: '/alunos/sas-aluno' },
      { label: 'Editais', href: '/alunos/editais' },
      { label: 'Biblioteca', href: '/alunos/biblioteca' },
    ],
  },
  // { type: 'link', label: 'Acontece no CSFA', href: '/blog/acontece' },

];

export const restrictedAreaButton: NavMenu = {
  type: 'button_dropdown',
  label: 'Área Restrita',
  icon: 'mdi:lock',
  items: [
    { label: 'Classroom', href: '#', icon: 'material-symbols-light:cast-for-education-rounded', },
    { label: 'Classapp', href: '#', icon: 'subway:book' },
    { label: 'Sas Aluno', href: '#', icon: 'mdi:school' },
    { label: 'E-mail Aluno', href: '#', icon: 'mdi:email' },
    { label: 'Cantina', href: '#', icon: 'ic:round-fastfood' },
    { label: 'Diário Eletrônico', href: '#', icon: 'ic:round-menu-book' },
    { label: 'Coorporativo', href: '#', icon: 'mdi:email-lock' },
    { label: 'Csfa Interno', href: '#', icon: 'bxs:business' },

  ]
};