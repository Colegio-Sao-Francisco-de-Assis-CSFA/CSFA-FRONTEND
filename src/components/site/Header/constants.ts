// src/components/layout/Header/constants.ts
import { NavMenu } from './types';

export const mainNavItems: NavMenu[] = [
  { type: 'link', label: 'Início', href: '/' },
  { type: 'link', label: 'Matrículas', href: '/matriculas' },
  {
    type: 'dropdown',
    label: 'O Colégio',
    items: [
      { label: 'Projeto Pedagógico', href: '/colegio/projeto-pedagogico' },
      { label: 'Nossa História', href: '/colegio/nossa-historia' },
      { label: 'Contato', href: '/colegio/contato' },
      { label: 'Contato', href: '/colegio/diferenciais' },
      { label: 'Metodologia de Ensino', href: '/colegio/metodologia-de-ensino' },

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
      { label: 'Google Classroom & Gmail', href: '/alunos/google-classroom-gmail' },
      { label: 'ClaassApp', href: '/alunos/classapp' },
      { label: 'Sas Aluno', href: '/alunos/sas-aluno' },
    ],
  },
  { type: 'link', label: 'Acontece no CSFA', href: '/blog/acontece' },

];

export const restrictedAreaButton: NavMenu = {
  type: 'button_dropdown',
  label: 'Área Restrita',
  icon: 'mdi:lock',
  items: [
    { label: 'Classroom', href: '#', icon: 'material-symbols-light:cast-for-education-rounded', },
    { label: 'Classapp', href: '#', icon: 'mdi:cellphone' },
    { label: 'Sas Aluno', href: '#', icon: 'mdi:school' },
    { label: 'E-mail Aluno', href: '#', icon: 'mdi:email-outline' },
  ]
};