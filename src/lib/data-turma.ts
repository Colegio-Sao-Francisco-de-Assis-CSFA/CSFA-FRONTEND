import { Turma } from "@/app/(pages)/alunos/turmas/types";

export const DADOS_ESCOLA: Turma[] = [
  // =================================================================
  // == ANOS INICIAIS
  // =================================================================
  {
    id: 1,
    segmento: 'Anos Iniciais',
    ano: 2025,
    serie: '1º',
    turma: 'A',
    turno: 'Manhã',
    alunos: [
      { id: 101, nome: 'Ana Júlia Martins', email: 'ana.martins@email.com', foto: 'https://i.pravatar.cc/150?img=1', acessosLiberados: ['Portal', 'Material Didático'] },
      { id: 102, nome: 'Bruno Vasconcelos', email: 'bruno.vasconcelos@email.com', foto: 'https://i.pravatar.cc/150?img=2', acessosLiberados: ['Portal', 'Uniforme'] },
      { id: 103, nome: 'Carla Beatriz Souza', email: 'carla.souza@email.com', foto: 'https://i.pravatar.cc/150?img=3', acessosLiberados: ['Portal'] },
      { id: 104, nome: 'Daniel Farias', email: 'daniel.farias@email.com', foto: 'https://i.pravatar.cc/150?img=4', acessosLiberados: ['Portal', 'Material Didático'] },
      { id: 105, nome: 'Eduarda Gusmão', email: 'eduarda.gusmao@email.com', foto: 'https://i.pravatar.cc/150?img=5', acessosLiberados: ['Portal', 'Material Didático', 'Uniforme'] },
      { id: 106, nome: 'Felipe Nogueira', email: 'felipe.nogueira@email.com', foto: 'https://i.pravatar.cc/150?img=6', acessosLiberados: ['Portal'] },
    ],
    professores: [
      { id: 909, nome: 'Wagner Moura', cargo: 'Professor de Geografia', email: 'wagner.m@email.com', foto: 'https://i.pravatar.cc/150?img=49' }, // ADICIONADO FOTO
      { id: 910, nome: 'Lázaro Ramos', cargo: 'Professor de Ciências', email: 'lazaro.r@email.com', foto: 'https://i.pravatar.cc/150?img=50' }, // ADICIONADO FOTO
      { id: 908, nome: 'Antônio Fagundes', cargo: 'Coordenador (Anos Finais)', email: 'antonio.f@email.com', foto: 'https://i.pravatar.cc/150?img=48' }, // Foto do Antônio já adicionada acima
    ],
    documentos: [
      { id: 301, titulo: 'Lista de Material 2025 - 1º Ano', url: '#' },
      { id: 302, titulo: 'Regulamento de Uniformes', url: '#' },
    ]
  },
  {
    id: 2,
    segmento: 'Anos Iniciais',
    ano: 2025,
    serie: '3º',
    turma: 'B',
    turno: 'Tarde',
    alunos: [
      { id: 107, nome: 'Gabriela Ferraz', email: 'gabriela.ferraz@email.com', foto: 'https://i.pravatar.cc/150?img=7', acessosLiberados: ['Portal'] },
      { id: 108, nome: 'Heitor Pimentel', email: 'heitor.pimentel@email.com', foto: 'https://i.pravatar.cc/150?img=8', acessosLiberados: ['Portal', 'Material Didático'] },
      { id: 109, nome: 'Isabela Correia', email: 'isabela.correia@email.com', foto: 'https://i.pravatar.cc/150?img=9', acessosLiberados: ['Portal'] },
      { id: 110, nome: 'João Gabriel Rocha', email: 'joao.rocha@email.com', foto: 'https://i.pravatar.cc/150?img=10', acessosLiberados: ['Portal', 'Uniforme'] },
      { id: 111, nome: 'Larissa Damasceno', email: 'larissa.damasceno@email.com', foto: 'https://i.pravatar.cc/150?img=11', acessosLiberados: ['Portal', 'Material Didático'] },
      { id: 112, nome: 'Miguel Arantes', email: 'miguel.arantes@email.com', foto: 'https://i.pravatar.cc/150?img=12', acessosLiberados: ['Portal'] },
    ],
    professores: [
      { id: 911, nome: 'Regina Casé', cargo: 'Professora de Biologia', email: 'regina.c@email.com', foto: 'https://i.pravatar.cc/150?img=51' }, // ADICIONADO FOTO
      { id: 912, nome: 'Selton Mello', cargo: 'Professor de Literatura', email: 'selton.m@email.com', foto: 'https://i.pravatar.cc/150?img=52' }, // ADICIONADO FOTO
      { id: 913, nome: 'Débora Falabella', cargo: 'Coordenadora (Ensino Médio)', email: 'debora.f@email.com', foto: 'https://i.pravatar.cc/150?img=53' }, // ADICIONADO FOTO
    ],
    documentos: [
      { id: 303, titulo: 'Tutorial de Acesso ao Portal', url: '#' },
    ]
  },

  // =================================================================
  // == ANOS FINAIS
  // =================================================================
  {
    id: 3,
    segmento: 'Anos Finais',
    ano: 2025,
    serie: '6º',
    turma: 'A',
    turno: 'Manhã',
    alunos: [
      { id: 201, nome: 'Letícia Borges', email: 'leticia.borges@email.com', foto: 'https://i.pravatar.cc/150?img=13', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
      { id: 202, nome: 'Lucas Maldonado', email: 'lucas.maldonado@email.com', foto: 'https://i.pravatar.cc/150?img=14', acessosLiberados: ['Portal', 'Material'] },
      { id: 203, nome: 'Manuela Queiroz', email: 'manuela.queiroz@email.com', foto: 'https://i.pravatar.cc/150?img=15', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
      { id: 204, nome: 'Nicolas Teixeira', email: 'nicolas.teixeira@email.com', foto: 'https://i.pravatar.cc/150?img=16', acessosLiberados: ['Portal'] },
      { id: 205, nome: 'Olívia Castelo', email: 'olivia.castelo@email.com', foto: 'https://i.pravatar.cc/150?img=17', acessosLiberados: ['Portal', 'Material'] },
      { id: 206, nome: 'Pedro Henrique Viana', email: 'pedro.viana@email.com', foto: 'https://i.pravatar.cc/150?img=18', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
      { id: 207, nome: 'Rafaela Drummond', email: 'rafaela.drummond@email.com', foto: 'https://i.pravatar.cc/150?img=19', acessosLiberados: ['Portal', 'Material'] },
      { id: 208, nome: 'Samuel Xavier', email: 'samuel.xavier@email.com', foto: 'https://i.pravatar.cc/150?img=20', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
    ],
    professores: [
      { id: 914, nome: 'Irandhir Santos', cargo: 'Professor de Química', email: 'irandhir.s@email.com', foto: 'https://i.pravatar.cc/150?img=54' }, // ADICIONADO FOTO
      { id: 915, nome: 'Matheus Nachtergaele', cargo: 'Professor de Física', email: 'matheus.n@email.com', foto: 'https://i.pravatar.cc/150?img=55' }, // ADICIONADO FOTO
      { id: 916, nome: 'Vladimir Brichta', cargo: 'Professor de Sociologia', email: 'vladimir.b@email.com', foto: 'https://i.pravatar.cc/150?img=56' }, // ADICIONADO FOTO
      { id: 913, nome: 'Débora Falabella', cargo: 'Coordenadora (Ensino Médio)', email: 'debora.f@email.com', foto: 'https://i.pravatar.cc/150?img=53' }, // Foto da Débora já adicionada acima
    ],
    documentos: [
      { id: 304, titulo: 'Calendário de Provas - 2º Bimestre', url: '#' },
    ]
  },
  {
    id: 4,
    segmento: 'Anos Finais',
    ano: 2025,
    serie: '9º',
    turma: 'C',
    turno: 'Manhã',
    alunos: [
      { id: 209, nome: 'Sofia Albuquerque', email: 'sofia.a@email.com', foto: 'https://i.pravatar.cc/150?img=21', acessosLiberados: ['Portal'] },
      { id: 210, nome: 'Thiago Lacerda', email: 'thiago.l@email.com', foto: 'https://i.pravatar.cc/150?img=22', acessosLiberados: ['Portal', 'Material'] },
      { id: 211, nome: 'Valentina Neves', email: 'valentina.n@email.com', foto: 'https://i.pravatar.cc/150?img=23', acessosLiberados: ['Portal', 'Uniforme'] },
      { id: 212, nome: 'Yasmin Brunet', email: 'yasmin.b@email.com', foto: 'https://i.pravatar.cc/150?img=24', acessosLiberados: ['Portal', 'Material'] },
      { id: 213, nome: 'Zeca Pagodinho', email: 'zeca.p@email.com', foto: 'https://i.pravatar.cc/150?img=25', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
    ],
    professores: [
      { id: 914, nome: 'Irandhir Santos', cargo: 'Professor de Química', email: 'irandhir.s@email.com', foto: 'https://i.pravatar.cc/150?img=54' }, // ADICIONADO FOTO
      { id: 915, nome: 'Matheus Nachtergaele', cargo: 'Professor de Física', email: 'matheus.n@email.com', foto: 'https://i.pravatar.cc/150?img=55' }, // ADICIONADO FOTO
      { id: 916, nome: 'Vladimir Brichta', cargo: 'Professor de Sociologia', email: 'vladimir.b@email.com', foto: 'https://i.pravatar.cc/150?img=56' }, // ADICIONADO FOTO
      { id: 913, nome: 'Débora Falabella', cargo: 'Coordenadora (Ensino Médio)', email: 'debora.f@email.com', foto: 'https://i.pravatar.cc/150?img=53' }, // Foto da Débora já adicionada acima
    ],
    documentos: [
      { id: 305, titulo: 'Cronograma de Atividades Extracurriculares', url: '#' },
    ]
  },

  // =================================================================
  // == ENSINO MÉDIO
  // =================================================================
  {
    id: 5,
    segmento: 'Ensino Médio',
    ano: 2025,
    serie: '1º',
    turma: 'A',
    turno: 'Manhã',
    alunos: [
      { id: 301, nome: 'Alice Braga', email: 'alice.braga@email.com', foto: 'https://i.pravatar.cc/150?img=26', acessosLiberados: ['Portal', 'Material'] },
      { id: 302, nome: 'Bento Ribeiro', email: 'bento.ribeiro@email.com', foto: 'https://i.pravatar.cc/150?img=27', acessosLiberados: ['Portal'] },
      { id: 303, nome: 'Caio Blat', email: 'caio.blat@email.com', foto: 'https://i.pravatar.cc/150?img=28', acessosLiberados: ['Portal', 'Material'] },
      { id: 304, nome: 'Dira Paes', email: 'dira.paes@email.com', foto: 'https://i.pravatar.cc/150?img=29', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
      { id: 305, nome: 'Enzo Celulari', email: 'enzo.celulari@email.com', foto: 'https://i.pravatar.cc/150?img=30', acessosLiberados: ['Portal'] },
      { id: 306, nome: 'Giovanna Antonelli', email: 'giovanna.a@email.com', foto: 'https://i.pravatar.cc/150?img=31', acessosLiberados: ['Portal', 'Material'] },
      { id: 307, nome: 'Ícaro Silva', email: 'icaro.silva@email.com', foto: 'https://i.pravatar.cc/150?img=32', acessosLiberados: ['Portal'] },
      { id: 308, nome: 'Jesuíta Barbosa', email: 'jesuita.b@email.com', foto: 'https://i.pravatar.cc/150?img=33', acessosLiberados: ['Portal', 'Material'] },
    ],
    professores: [
      { id: 914, nome: 'Irandhir Santos', cargo: 'Professor de Química', email: 'irandhir.s@email.com', foto: 'https://i.pravatar.cc/150?img=54' }, // ADICIONADO FOTO
      { id: 915, nome: 'Matheus Nachtergaele', cargo: 'Professor de Física', email: 'matheus.n@email.com', foto: 'https://i.pravatar.cc/150?img=55' }, // ADICIONADO FOTO
      { id: 916, nome: 'Vladimir Brichta', cargo: 'Professor de Sociologia', email: 'vladimir.b@email.com', foto: 'https://i.pravatar.cc/150?img=56' }, // ADICIONADO FOTO
      { id: 913, nome: 'Débora Falabella', cargo: 'Coordenadora (Ensino Médio)', email: 'debora.f@email.com', foto: 'https://i.pravatar.cc/150?img=53' }, // Foto da Débora já adicionada acima
    ],
    documentos: [
      { id: 306, titulo: 'Grade Curricular - Ensino Médio', url: '#' },
      { id: 307, titulo: 'Simulado ENEM - Datas e Horários', url: '#' },
    ]
  },
  {
    id: 6,
    segmento: 'Ensino Médio',
    ano: 2025,
    serie: '3º',
    turma: 'B',
    turno: 'Manhã',
    alunos: [
      { id: 401, nome: 'Cauã Reymond', email: 'caua.r@email.com', foto: 'https://i.pravatar.cc/150?img=34', acessosLiberados: ['Portal'] },
      { id: 402, nome: 'Leandra Leal', email: 'leandra.l@email.com', foto: 'https://i.pravatar.cc/150?img=35', acessosLiberados: ['Portal', 'Material'] },
      { id: 403, nome: 'Marjorie Estiano', email: 'marjorie.e@email.com', foto: 'https://i.pravatar.cc/150?img=36', acessosLiberados: ['Portal'] },
      { id: 404, nome: 'Nanda Costa', email: 'nanda.c@email.com', foto: 'https://i.pravatar.cc/150?img=37', acessosLiberados: ['Portal'] },
      { id: 405, nome: 'Otávio Müller', email: 'otavio.m@email.com', foto: 'https://i.pravatar.cc/150?img=38', acessosLiberados: ['Portal', 'Material'] },
      { id: 406, nome: 'Patrícia Pillar', email: 'patricia.p@email.com', foto: 'https://i.pravatar.cc/150?img=39', acessosLiberados: ['Portal', 'Material', 'Uniforme'] },
      { id: 407, nome: 'Rodrigo Santoro', email: 'rodrigo.s@email.com', foto: 'https://i.pravatar.cc/150?img=40', acessosLiberados: ['Portal'] },
    ],
    professores: [
      { id: 914, nome: 'Irandhir Santos', cargo: 'Professor de Química', email: 'irandhir.s@email.com', foto: 'https://i.pravatar.cc/150?img=54' }, // ADICIONADO FOTO
      { id: 915, nome: 'Matheus Nachtergaele', cargo: 'Professor de Física', email: 'matheus.n@email.com', foto: 'https://i.pravatar.cc/150?img=55' }, // ADICIONADO FOTO
      { id: 916, nome: 'Vladimir Brichta', cargo: 'Professor de Sociologia', email: 'vladimir.b@email.com', foto: 'https://i.pravatar.cc/150?img=56' }, // ADICIONADO FOTO
      { id: 913, nome: 'Débora Falabella', cargo: 'Coordenadora (Ensino Médio)', email: 'debora.f@email.com', foto: 'https://i.pravatar.cc/150?img=53' }, // Foto da Débora já adicionada acima
    ],
    documentos: [
      { id: 308, titulo: 'Inscrição para o Vestibular - Passo a Passo', url: '#' },
    ]
  },
];