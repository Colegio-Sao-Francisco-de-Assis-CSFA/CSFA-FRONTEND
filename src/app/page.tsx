import HeroCarouselSection from '@/components/sections/HeroCarouselSection';
import SobreColegioSection from "@/components/sections/SobreColegioSection";
import MissaoSection from '@/components/sections/MissaoSection';
import ParceirosSection from '@/components/sections/ParceirosCarouselSection';
import CallToActionSection from '@/components/sections/CallToActionSection';


import Campus from '@/components/site/Campus';
import StatsArea from '@/components/site/Stats';
import CallToAction from '@/components/site/CallToAction/CallToActionRoot';
import Formulario from '@/components/site/Formulario';
import AconteceCsfa from '@/components/site/AconteceCsfa';
import CoursosSection from '@/components/sections/CursosSection';


export default function Home() {

  return (

    <main className='w-full'>
      {/* Hero Banner Carousel */}
      <HeroCarouselSection />
      <MissaoSection />
      <CoursosSection />
      <CallToActionSection
        type="map"
        variant="side-by-side"
        content={{
          title: 'Localize Nosso Colégio',
          description: 'Estamos localizados em um ponto de fácil acesso. Venha nos visitar!',
          buttonText: 'Como Chegar',
          buttonHref: 'https://maps.app.goo.gl/seu-endereco-aqui', // Link para o Google Maps
        }}
        map={{
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.489721087455!2d-46.635398!3d-23.55052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a6c9d9d3d3%3A0x6b7b7b7b7b7b7b7b!2sSeu%20Col%C3%A9gio!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr', // Exemplo de embed do Google Maps
        }}
      />
      <SobreColegioSection />
      {/* // centered - content */}
      <CallToActionSection
        type="simple"
        variant="centered"
        backgroundColor="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-blue-700 to-blue-500 text-white" // Exemplo de cor customizada
        content={{
          title: 'Explore Mais Sobre o Nosso Colégio',
          description: 'Conheça nossa história, valores e o que nos torna uma instituição de ensino de excelência.',
          buttonText: 'Saiba Mais',
          buttonHref: '/sobre',
          // O ícone não é usado no variant 'centered' para CallToActionContent padrão, mas a prop existe
        }}
      />
      <ParceirosSection />

      {/* Exemplo de CTA de Newsletter */}
      <CallToActionSection
        type="newsletter"
        variant="centered"
        backgroundColor='bg-blue-600 flex flex-col items-center justify-center'
        newsletterProps={{
          title: 'Fique por Dentro das Novidades!',
          description: 'Assine nossa newsletter e receba notícias, eventos e dicas diretamente no seu e-mail.',
          placeholderText: 'seu.email@exemplo.com',
          buttonText: 'Inscrever-se',
        }}
      />
      {/* <Campus /> */}
      {/* <AconteceCsfa /> */}

      {/* <StatsArea /> */}
      {/* <CallToAction
        variant="side-by-side"
        title="Faça uma visita!"
        description="O Colégio São Francisco de Assis está localizado em um ponto de fácil acesso. Venha conhecer nossas instalações e nossa proposta pedagógica."
        buttonText="Agende uma Visita"
        buttonHref="/contato"
        hasImage={true}
        useMap={true}
        mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5474.260022874297!2d-46.65953971396804!3d-23.671990704006117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce454c8e2d388f%3A0x57d164235e210ee7!2sCol%C3%A9gio%20S%C3%A3o%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1744147166987!5m2!1spt-BR!2sbr"
      /> */}
      {/* <Segmentos /> */}
      {/* <Formulario /> */}
    </main>
  );
}
