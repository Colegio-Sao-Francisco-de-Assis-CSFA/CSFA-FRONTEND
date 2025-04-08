import HeroBannerCarousel from '@/components/view/HeroBanner';
import EducationalSegments from '@/components/view/Segmentos';
import EducationSystem from '@/components/view/Sobre';
import MissaoColegio from '@/components/view/MissaoColegio';
import Parceiros from '@/components/view/Parceiros/SessaoParceiros';
import Diferenciais from '@/components/view/Diferenciais';
import TimeLine from '@/components/view/TimeLine';
import Campus from '@/components/view/Campus';
import StatsArea from '@/components/view/Stats';
import CallToAction from '@/components/view/CallToAcion';


export default function Home() {

  const carouselItems = [
      {
          id: '1',
          image: '/images/herobanner/banner1.webp',
          alt: 'Banner 1',
          link: '/',
          title: 'Título do Banner 1',
          description: 'Descrição do Banner 1',
      },
      {
          id: 'item2',
          image: '/images/herobanner/banner2.webp',
          alt: 'Banner 2',
          link: '/',
          title: 'Título do Banner 2',
          description: 'Descrição do Banner 2',
      },
      {
          id: '3',
          image: '/images/herobanner/banner3.webp',
          alt: 'Banner 3',
          link: '/',
          title: 'Título do Banner 3',
          description: 'Descrição do Banner 3',
      },
      {
        id: '4',
        image: '/images/herobanner/banner-campanhaoleo.webp',
        alt: 'Banner 4',
        link: '/',
        title: 'Título do Banner 4',
        description: 'Descrição do Banner 4',
    },
    {
      id: '5',
      image: '/images/herobanner/banner-festasorvete.webp',
      alt: 'Banner 5',
      link: '/',
      title: 'Título do Banner 5',
      description: 'Descrição do Banner 5',
  },
  ];

  return (
      <div className='w-full flex flex-col items-center overflow-hidden'>


         <section  className='w-dvw'>
            <HeroBannerCarousel items={carouselItems} />
         </section>

         <section className='w-dvw h-auto p-6'>
            <MissaoColegio />
          </section>

          <section className='w-dvw h-auto p-6'>
            <EducationalSegments />
          </section>

          <section className="w-full h-auto p-6">
            <EducationSystem/>
          </section>

          <section>
            <StatsArea/>
          </section>

        <section className='w-full h-auto p-6'>
          <TimeLine/>
        </section>

        <section>
          {/* Second CTA style */}
          <CallToAction
            variant="side-by-side"
            title="Visite Nossa Escola"
            description="O Colégio São Francisco de Assis está localizado em um ponto de fácil acesso. Venha conhecer nossas instalações e nossa proposta pedagógica."
            buttonText="Agende uma Visita"
            buttonHref="/contato"
            hasImage={true}
            useMap={true}
            mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5474.260022874297!2d-46.65953971396804!3d-23.671990704006117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce454c8e2d388f%3A0x57d164235e210ee7!2sCol%C3%A9gio%20S%C3%A3o%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1744147166987!5m2!1spt-BR!2sbr"
          />
        </section>

        <section>
          <Campus />
        </section>

        <section className='w-dvw h-auto p-6'>
          <div className="mx-auto">
              <h2 className="text-3xl text-center font-bold text-blue-600">Nossos Parceiros</h2>
              <p className="text-sm text-gray-700 font-normal md:text-lg mt-4 text-center">
                Parcerias são essenciais para oferecer as melhores
                oportunidades aos nossos alunos.
              </p>
          </div>
          <Parceiros/>
        </section>


        {/* <section>
          <CallToAction
            variant="centered"
            title="Venha conhecer nossa estrutura e proposta pedagógica"
            description="Agende uma visita e conheça nossas instalações, converse com nossa equipe pedagógica e descubra como podemos contribuir para a formação do seu filho."
            buttonText="Agendar visita"
            buttonHref="/agendar"
          />
        </section> */}



      </div>
  );
}
