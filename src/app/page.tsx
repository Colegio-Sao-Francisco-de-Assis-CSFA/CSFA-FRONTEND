import HeroCarouselSection from '@/components/sections/HeroCarouselSection';
import Segmentos from '@/components/site/Segmentos';
import SobreColegioSection from "@/components/sections/SobreColegioSection";
import MissaoSection from '@/components/sections/MissaoSection';
import ParceirosSection from '@/components/sections/ParceirosCarouselSection';
import Campus from '@/components/site/Campus';
import StatsArea from '@/components/site/Stats';
import CallToAction from '@/components/site/CallToAcion';
import Formulario from '@/components/site/Formulario';
import AconteceCsfa from '@/components/site/AconteceCsfa';
import { AboutMediaSection } from '@/components/site/SobreColegio';
import CoursosSection from '@/components/sections/CursosSection';


export default function Home() {

  return (

    <main className='w-full'>
      {/* Hero Banner Carousel */}
      <HeroCarouselSection />
      <MissaoSection />
      <CoursosSection />
      <SobreColegioSection />
      {/* <AboutMediaSection /> */}
      <ParceirosSection />

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
