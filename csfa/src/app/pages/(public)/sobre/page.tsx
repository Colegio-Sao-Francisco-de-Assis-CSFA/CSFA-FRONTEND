import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SobrePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

<<<<<<< HEAD:csfa/src/app/pages/(public)/sobre/page.tsx
const staggerItems = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// Team members data
const teamMembers = [
  { name: "Ana Silva", role: "CEO & Fundadora", image: "/placeholder.png" },
  { name: "Carlos Mendes", role: "Diretor de Tecnologia", image: "/placeholder.png" },
  { name: "Márcia Oliveira", role: "Diretora de Operações", image: "/placeholder.png" },
  
];

// Company differentials
const differentials = [
  {
    title: "Inovação Constante",
    description: "Investimos continuamente em pesquisa e desenvolvimento para oferecer soluções inovadoras que antecipam as necessidades do mercado.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  },
  {
    title: "Equipe Multidisciplinar",
    description: "Nossos profissionais possuem formações diversas e complementares, permitindo desenvolver soluções mais completas e eficazes.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  },
  {
    title: "Compromisso com a Qualidade",
    description: "Seguimos rigorosos padrões de qualidade em todos os processos, garantindo a excelência em cada projeto.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  },
  {
    title: "Agilidade e Eficiência",
    description: "Adotamos metodologias ágeis que nos permitem responder rapidamente às mudanças e entregar soluções eficientes.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  }
];

export default function Sobre() {
  
=======
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
>>>>>>> parent of 40ec032 (feat: estrutura das páginas):csfa/src/app/(pages)/sobre/page.tsx

  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      {/* Banner Hero */}
      <motion.div 
        className="relative h-[50vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
          style={{
            backgroundPosition: "center 30%",
          }}
        />
        <motion.div 
          className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Sobre <span className="text-blue-600">Nós</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl text-center">
            Conheça nossa história, valores e a equipe por trás do nosso sucesso
          </p>
        </motion.div>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-16">
        {/* Nossa História */}
        <motion.section 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">Nossa História</h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
              <p className="text-slate-300 mb-4">
                Fundada em 2010, nossa empresa nasceu da visão de um grupo de profissionais apaixonados por inovação e tecnologia, determinados a criar soluções que realmente fazem a diferença para nossos clientes.
              </p>
              <p className="text-slate-300 mb-4">
                Começamos como uma pequena equipe em um escritório modesto, mas com grandes ambições. Ao longo dos anos, expandimos nossa presença no mercado, sempre mantendo nosso compromisso com a excelência e a inovação.
              </p>
              <p className="text-slate-300 mb-6">
                Hoje, somos reconhecidos como líderes em nosso segmento, com uma carteira diversificada de clientes e projetos bem-sucedidos que demonstram nossa capacidade de enfrentar desafios complexos e entregar resultados excepcionais.
              </p>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center rounded-lg" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Missão, Visão e Valores */}
        <motion.section 
          variants={staggerItems}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Missão, Visão e Valores</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeIn} className="h-full">
              <Card className="h-full bg-slate-900 border-slate-700 hover:border-blue-600 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-600/20 rounded-full">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-4">Missão</h3>
                  <p className="text-slate-300 text-center">
                    Desenvolver soluções inovadoras que otimizem processos, impulsionem negócios e contribuam para um futuro mais sustentável, sempre colocando o cliente no centro de tudo o que fazemos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="h-full">
              <Card className="h-full bg-slate-900 border-slate-700 hover:border-blue-600 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-600/20 rounded-full">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-4">Visão</h3>
                  <p className="text-slate-300 text-center">
                    Ser referência global em inovação e excelência, reconhecida pela capacidade de transformar desafios em oportunidades e pela geração de valor significativo para clientes, colaboradores e sociedade.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="h-full">
              <Card className="h-full bg-slate-900 border-slate-700 hover:border-blue-600 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-600/20 rounded-full">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-4">Valores</h3>
                  <p className="text-slate-300 text-center">
                    Integridade, excelência, inovação, colaboração, sustentabilidade e foco no cliente são os pilares que orientam nossas ações, decisões e relacionamentos em todos os níveis da organização.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Nossa Equipe */}
        <motion.section 
          variants={staggerItems}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nossa Equipe</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Conheça os profissionais talentosos e dedicados que compõem nossa equipe e trabalham incansavelmente para entregar resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ana Silva", role: "CEO & Fundadora", image: "/api/placeholder/300/300" },
              { name: "Carlos Mendes", role: "Diretor de Tecnologia", image: "/api/placeholder/300/300" },
              { name: "Márcia Oliveira", role: "Diretora de Operações", image: "/api/placeholder/300/300" },
              { name: "Roberto Santos", role: "Diretor Financeiro", image: "/api/placeholder/300/300" }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group"
              >
                <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-600 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                    <div className="mt-3 flex space-x-3">
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nosso Diferencial */}
        <motion.section 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nosso Diferencial</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-slate-900 p-6 rounded-lg border border-slate-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Inovação Constante</h3>
                  <p className="text-slate-300">
                    Investimos continuamente em pesquisa e desenvolvimento para oferecer soluções inovadoras que antecipam as necessidades do mercado e superam as expectativas dos clientes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-900 p-6 rounded-lg border border-slate-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Equipe Multidisciplinar</h3>
                  <p className="text-slate-300">
                    Nossos profissionais possuem formações diversas e complementares, o que nos permite abordar desafios sob diferentes perspectivas e desenvolver soluções mais completas e eficazes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-900 p-6 rounded-lg border border-slate-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Compromisso com a Qualidade</h3>
                  <p className="text-slate-300">
                    Seguimos rigorosos padrões de qualidade em todos os processos, garantindo a excelência em cada projeto e mantendo nosso compromisso com a entrega de resultados superiores.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-900 p-6 rounded-lg border border-slate-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Agilidade e Eficiência</h3>
                  <p className="text-slate-300">
                    Adotamos metodologias ágeis que nos permitem responder rapidamente às mudanças e entregar soluções eficientes dentro de prazos otimizados, sem comprometer a qualidade.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo para discutir como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Fale Conosco
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer simplificado */}
      <footer className="bg-slate-900 text-slate-300 mt-auto py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Nome da Empresa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default SobrePage;