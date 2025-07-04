// components/site/CallToAction/index.ts

export { default as CallToActionRoot } from './CallToActionRoot';
export { default as CallToActionContent } from './CallToActionContent';
export { default as CallToActionImage } from './CallToActionImage';
export { default as CallToActionMap } from './CallToActionMap';
export { default as CallToActionNewsletter } from './CallToActionNewsletter';
export { default as CallToActionVisitForm } from './CallToActionVisitForm'; // NOVO
export * from './types';


    // {/* side-by-side - image */}
    // <CallToActionSection
    // type="image"
    // variant="side-by-side"
    // content={{
    //     title: 'Agende uma Visita ao Nosso Colégio!',
    //     description: 'Venha conhecer nossa infraestrutura e metodologia de ensino de perto.',
    //     buttonText: 'Agendar Visita',
    //     buttonHref: '/agendar-visita',
    // }}
    // image={{
    //     imageSrc: '/images/college-building.jpg', // Certifique-se de ter essa imagem
    //     imageAlt: 'Fachada do Colégio',
    // }}
    // />

    // {/* side-by-side - maps */}
    //   <CallToActionSection
    //     type="map"
    //     variant="side-by-side"
    //     content={{
    //       title: 'Localize Nosso Colégio',
    //       description: 'Estamos localizados em um ponto de fácil acesso. Venha nos visitar!',
    //       buttonText: 'Como Chegar',
    //       buttonHref: 'https://maps.app.goo.gl/seu-endereco-aqui', // Link para o Google Maps
    //     }}
    //     map={{
    //       mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.489721087455!2d-46.635398!3d-23.55052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a6c9d9d3d3%3A0x6b7b7b7b7b7b7b7b!2sSeu%20Col%C3%A9gio!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr', // Exemplo de embed do Google Maps
    //     }}
    //   />

    // {/* side-by-side - newsletter */}
    //   <CallToActionSection
    //     type="newsletter"
    //     variant="side-by-side"
    //     newsletter={{
    //       title: 'Fique por Dentro das Novidades!',
    //       description: 'Assine nossa newsletter e receba notícias, eventos e dicas diretamente no seu e-mail.',
    //       placeholderText: 'seu.email@exemplo.com',
    //       buttonText: 'Inscrever-se',
    //       onSubmit: handleNewsletterSubmit,
    //     }}
    //   />

    // {/* centered - content */}
    //   <CallToActionSection
    //     type="simple"
    //     variant="centered"
    //     backgroundColor="bg-gradient-to-r from-green-500 to-green-400 text-white" // Exemplo de cor customizada
    //     content={{
    //       title: 'Explore Mais Sobre o Nosso Colégio',
    //       description: 'Conheça nossa história, valores e o que nos torna uma instituição de ensino de excelência.',
    //       buttonText: 'Saiba Mais',
    //       buttonHref: '/sobre',
    //       // O ícone não é usado no variant 'centered' para CallToActionContent padrão, mas a prop existe
    //     }}
    //   />