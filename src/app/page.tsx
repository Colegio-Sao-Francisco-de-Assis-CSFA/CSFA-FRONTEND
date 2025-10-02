'use client';

import {
  HeroCarouselSection,
  MissaoSection,
  CursosSection,
  SobreColegioSection,
  CampusShowcaseSection,
  NewsSection,
  ParceirosCarouselSection,
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
    </main>

  );
}
