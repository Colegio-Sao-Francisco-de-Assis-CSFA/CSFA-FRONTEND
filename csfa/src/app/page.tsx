import HeroBannerCarousel from '@/components/view/HeroBanner';
import EducationalSegments from '@/components/view/Segmentos';
import EducationSystem from '@/components/view/Sobre';
import MissaoColegio from '@/components/view/MissaoColegio';
import Parceiros from '@/components/view/Parceiros/SessaoParceiros';
import Diferenciais from '@/components/view/Diferenciais';


export default function Home() {

  const carouselItems = [
      {
          id: 'item1',
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
          id: 'item3',
          image: '/images/herobanner/banner3.webp',
          alt: 'Banner 3',
          link: '/',
          title: 'Título do Banner 3',
          description: 'Descrição do Banner 3',
      },
      {
        id: 'item3',
        image: '/images/herobanner/banner-campanhaoleo.webp',
        alt: 'Banner 4',
        link: '/',
        title: 'Título do Banner 4',
        description: 'Descrição do Banner 4',
    },
    {
      id: 'item3',
      image: '/images/herobanner/banner-festasorvete.webp',
      alt: 'Banner 5',
      link: '/',
      title: 'Título do Banner 5',
      description: 'Descrição do Banner 5',
  },
  ];

  return (
      <div className='overflow-hidden w-dvw flex flex-col items-center'>


         <section  className='w-dvw'>
            <HeroBannerCarousel items={carouselItems} />
         </section>

         <section className='w-dvw h-auto p-6'>
            <MissaoColegio />
          </section>

          <section className='w-dvw h-auto p-6'>
            <EducationalSegments />
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

          <section className="w-full h-auto p-6">
            <EducationSystem/>
          </section>

        <section>
          <Diferenciais />
        </section>


      </div>
  );
}
