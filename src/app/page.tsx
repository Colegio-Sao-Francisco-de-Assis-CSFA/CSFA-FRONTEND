'use client';

import {
  HeroCarouselSection,
  MissaoSection,
  CursosSection,
  SobreColegioSection,
  CampusShowcaseSection,
  NewsSection,
  ParceirosCarouselSection,
  InfoSection,
  PricingSection
} from '@/components/sections';

import dynamic from 'next/dynamic';

const DynamicContactSection = dynamic(
  () => import('@/components/sections/ContatoSection'),
  {
    ssr: false,
    loading: () => <p>Carregando seção de contato...</p>,
  }
);

export default function Home() {

  return (

    <main className='w-full'>

      <HeroCarouselSection />
      <MissaoSection />
      <CursosSection />
      <SobreColegioSection />
      <CampusShowcaseSection />
      <ParceirosCarouselSection />
      <NewsSection />
      <InfoSection
        smallText="Nosso Diferencial"
        title="Educação que Transforma"
        paragraph="Oferecemos uma proposta pedagógica inovadora que prepara os alunos para os
        desafios do futuro, combinando excelência acadêmica e formação de valores."
        buttonLabel="Conheça a Metodologia"
        buttonHref="/o-colegio/metodologia-de-ensino"
        imageSrc="/images/courses/infantil.webp" 
        imageAlt="Alunos em sala de aula"
      />
      <PricingSection />
      {/* <DynamicContactSection /> */}


    </main>

  );
}
