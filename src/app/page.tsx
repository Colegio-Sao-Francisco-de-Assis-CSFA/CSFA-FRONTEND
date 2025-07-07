import HeroCarouselSection from '@/components/sections/HeroCarouselSection';
import SobreColegioSection from "@/components/sections/SobreColegioSection";
import MissaoSection from '@/components/sections/MissaoSection';
import ParceirosSection from '@/components/sections/ParceirosCarouselSection';
import CoursosSection from '@/components/sections/CursosSection';
import CampusShowcaseSection from '@/components/sections/CampusShowcaseSection';
import NewsSection from '@/components/sections/NewsSection';


export default function Home() {

  return (

    <main className='w-full'>
      <HeroCarouselSection />
      <MissaoSection />
      <CoursosSection />
      <SobreColegioSection />
      <CampusShowcaseSection/>
      <NewsSection />

      {/* // Exemplo de CTA de Contato */}
      {/* <CallToActionSection
        type="map"
        variant="side-by-side"
        map={{
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.854612948639!2d-46.634739!3d-23.55052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a3c220f86b%3A0x6b4a3a3a3b3c3d3e!2sCol%C3%A9gio%20Modelo%20XYZ!5e0!3m2!1spt-BR!2sbr!4v1701234567890!5m2!1spt-BR!2sbr', // Substitua pelo seu embed real
        }}
        visitForm={{
          title: 'Agende Sua Visita Agora!',
          description: 'Preencha o formulário e nossa equipe entrará em contato para confirmar sua visita ao colégio.',
        }}
      /> */}
      {/* // Exemplo de CTA de Content */}
      {/* <CallToActionSection
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
      /> */}
      <ParceirosSection />
      {/* Exemplo de CTA de Newsletter */}
      {/* <CallToActionSection
        type="newsletter"
        variant="side-by-side"
        newsletterProps={{
          title: 'Fique por Dentro das Novidades!',
          description: 'Assine nossa newsletter e receba notícias, eventos e dicas diretamente no seu e-mail.',
          placeholderText: 'seu.email@exemplo.com',
          buttonText: 'Inscrever-se',
        }}
      /> */}

    </main>

  );
}
