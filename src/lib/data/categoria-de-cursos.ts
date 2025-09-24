// data/categorias-de-cursos.ts
import { CategoriaCursos } from '@/types/segmento.type';


// Esta é a nossa nova estrutura principal de dados
export const DADOS_CURSOS_POR_CATEGORIA: CategoriaCursos[] = [
  {
    id: 1,
    tituloCategoria: 'Segmentos Pedagógicos',
    cursos: [
      {
        id: 101, // IDs devem ser únicos em todo o sistema
        title: "Maternal",
        subtitle: "Cuidado e Primeiras Descobertas",
        description: "Um espaço de afeto e estímulo para os primeiros passos, focado no desenvolvimento sensorial e na socialização inicial.",
        ageRange: "1 a 2 anos",
        highlights: ["Estímulo sensorial", "Desenvolvimento motor", "Socialização"],
        icon: 'lucide:baby',
        color: "bg-pink-600",
        bgColor: "bg-gradient-to-t from-pink-500 via-pink-700 to-rose-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/maternal.webp" // Exemplo de imagem
      },
      // Dados que já tínhamos, agora dentro da categoria
      {
        id: 2,
        title: "Educação Infantil",
        subtitle: "Descoberta e Brincadeira",
        description: "Ambiente lúdico e seguro para os primeiros passos no aprendizado. Estímulo à criatividade, socialização e desenvolvimento integral.",
        ageRange: "3 a 5 anos",
        highlights: ["Desenvolvimento motor", "Cognição", "Brincadeiras educativas"],
        icon: 'lucide:baby',
        color: "bg-pink-600",
        bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/infantil.webp"
      },
      {
        id: 3,
        title: "Ensino Fundamental - Anos Iniciais",
        description: "Formação integral com foco no desenvolvimento cognitivo, social e emocional. Metodologia lúdica e interativa para o amor pelo aprendizado.",
        ageRange: "6 a 10 anos",
        highlights: ["Alfabetização", "Raciocínio lógico", "Valores éticos"],
        icon: 'lucide:book-open-text',
        color: "bg-blue-600",
        bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/iniciais.webp"
      },
      {
        id: 4,
        title: "Ensino Fundamental - Anos Finais",
        description: "Preparação para desafios acadêmicos com metodologia inovadora. Desenvolvimento do pensamento crítico e autonomia intelectual.",
        ageRange: "11 a 14 anos",
        highlights: ["Pensamento crítico", "Projetos", "Tecnologia educacional"],
        icon: 'lucide:users-round',
        color: "bg-blue-900",
        bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/finais.webp"
      },
      {
        id: 5,
        title: "Ensino Médio",
        subtitle: "Preparação Universitária",
        description: "Excelência acadêmica com foco no ingresso ao ensino superior. Orientação vocacional e desenvolvimento de competências para o futuro.",
        ageRange: "15 a 17 anos",
        highlights: ["Preparação ENEM", "Orientação vocacional", "Liderança"],
        icon: 'lucide:graduation-cap',
        color: "bg-blue-600",
        bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/medio.webp"
      },
    ],
  },
  {
    id: 2,
    tituloCategoria: 'Programas Especiais',
    cursos: [
      {
        id: 201,
        title: "Ensino POLI (Integral)",
        subtitle: "Imersão e Desenvolvimento Completo",
        description: "Uma jornada de aprendizado estendida que integra atividades pedagógicas, esportivas, culturais e acompanhamento especializado.",
        ageRange: "6 a 14 anos",
        highlights: ["Acompanhamento de tarefas", "Oficinas criativas", "Práticas esportivas"],
        icon: 'lucide:sparkles',
        color: "bg-amber-500",
        bgColor: "bg-gradient-to-t from-amber-500 via-amber-600 to-yellow-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/poli.webp"
      },
    ]
  },
  {
    id: 3,
    tituloCategoria: 'Escola de Esportes e Artes (EEA)',
    cursos: [
      {
        id: 301,
        title: "EEA Vôlei",
        description: "Aprenda os fundamentos e técnicas do vôlei, desenvolvendo trabalho em equipe, disciplina e condicionamento físico.",
        highlights: ["Técnica e Tática", "Trabalho em Equipe", "Condicionamento"],
        icon: 'lucide:volleyball',
        color: "bg-sky-500",
        bgColor: "bg-gradient-to-t from-sky-600 via-sky-800 to-cyan-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/volei.webp"
      },
      {
        id: 302,
        title: "EEA Judô",
        description: "Arte marcial que ensina disciplina, respeito e autoconfiança através de técnicas de defesa pessoal e superação de limites.",
        highlights: ["Disciplina e Respeito", "Autoconfiança", "Técnicas de Defesa"],
        icon: 'solar:medal-ribbon-star-linear',
        color: "bg-red-700",
        bgColor: "bg-gradient-to-t from-red-600 via-red-800 to-red-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/judo.webp"
      },
      {
        id: 303,
        title: "EEA Futsal",
        description: "Desenvolva suas habilidades no esporte mais popular do Brasil, com foco em técnica, agilidade e espírito de equipe.",
        highlights: ["Controle de Bola", "Agilidade", "Jogo Coletivo"],
        icon: 'fa:soccer-ball-o',
        color: "bg-green-600",
        bgColor: "bg-gradient-to-t from-green-600 via-green-800 to-emerald-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/futsal.webp"
      },
      {
        id: 304,
        title: "EEA Dança",
        description: "Explore diferentes ritmos e estilos, desenvolvendo a expressão corporal, a criatividade e a consciência musical.",
        highlights: ["Expressão Corporal", "Ritmo", "Criatividade"],
        icon: 'mdi:footprints',
        color: "bg-purple-500",
        bgColor: "bg-gradient-to-t from-purple-600 via-purple-800 to-fuchsia-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/danca.webp"
      },
      {
        id: 305,
        title: "EEA Teatro",
        description: "Desenvolva a comunicação, a criatividade e a autoconfiança através de jogos teatrais e da arte de contar histórias.",
        highlights: ["Desinibição", "Criatividade", "Oratória"],
        icon: 'mdi:drama-masks',
        color: "bg-orange-600",
        bgColor: "bg-gradient-to-t from-orange-600 via-orange-800 to-red-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/teatro.webp"
      },
      {
        id: 306,
        title: "EEA Balé",
        description: "Introdução à dança clássica, trabalhando a postura, a disciplina e a delicadeza dos movimentos de forma lúdica.",
        highlights: ["Postura", "Disciplina", "Coordenação Motora"],
        icon: 'mdi:human-female-dance',
        color: "bg-rose-400",
        bgColor: "bg-gradient-to-t from-rose-400 via-rose-600 to-pink-950",
        textColor: "text-white",
        backgroundImageSrc: "/images/courses/bale.webp"
      },
    ]
  }
];