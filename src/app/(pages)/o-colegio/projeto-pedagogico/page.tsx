"use client";


import TitleHeaderComponent from '@/components/shared/TitleHeader';
import { Static as BannerStatic } from '@/components/shared/Banner/Static/Static';

const ProjetoPedagogico = () => {

    return (
        <section className='w-full'>

            <BannerStatic
                image='/images/banner/static/franciscano-1920.png'
                mobileImage='/images/banner/volta-as-aulas-500.png'
                alt='Banner página contato'
                className="mx-auto bg-blue-600"
            />

            <section className="min-h-screen bg-white text-gray-800 pt-32">
                {/* Header */}
                <TitleHeaderComponent
                    title='Projeto Pedagogico'
                    subtitle='Tire sua dúvidas ou agende sua visita.'
                />
            </section>

        </section>
    );


};

export default ProjetoPedagogico;


