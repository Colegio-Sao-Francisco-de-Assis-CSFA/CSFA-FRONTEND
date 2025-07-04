// components/sections/CallToActionSection.tsx
// REMOVA O 'use client;' se quiser que seja um Server Component

import React from 'react';
import {
  CallToActionRoot,
  CallToActionContent,
  CallToActionImage,
  CallToActionMap,
  CallToActionNewsletter,
  CallToActionContentProps,
  CallToActionImageProps,
  CallToActionMapProps,
  CallToActionNewsletterProps,
} from '../site/CallToAction';
import { ArrowRight } from 'lucide-react';

// Importa a Server Action específica
import { subscribeToNewsletter, registerVisit } from '@/app/api/actions/newsletter';
// ... (Resto das suas interfaces e tipos permanecem os mesmos)

interface BaseCallToActionSectionProps {
  variant: 'centered' | 'side-by-side';
  backgroundColor?: string;
}

interface ImageCallToActionProps extends BaseCallToActionSectionProps {
  type: 'image';
  content: Omit<CallToActionContentProps, 'buttonIcon'>;
  image: CallToActionImageProps;
}

interface MapCallToActionProps extends BaseCallToActionSectionProps {
  type: 'map';
  content: Omit<CallToActionContentProps, 'buttonIcon'>;
  map: CallToActionMapProps;
}

interface NewsletterCallToActionProps extends BaseCallToActionSectionProps {
  type: 'newsletter';
  // Não precisamos mais passar 'onSubmitAction' diretamente aqui.
  // A ação é definida "implicitamente" pelo tipo.
  // Poderíamos até ter uma prop para selecionar qual ação usar,
  // mas vamos simplificar para o exemplo.
  newsletterProps: Omit<CallToActionNewsletterProps, 'onSubmitAction'>;
}

interface SimpleCallToActionProps extends BaseCallToActionSectionProps {
  type: 'simple';
  content: CallToActionContentProps;
}


type CallToActionSectionProps =
  | ImageCallToActionProps
  | MapCallToActionProps
  | NewsletterCallToActionProps
  | SimpleCallToActionProps;


const CallToActionSection: React.FC<CallToActionSectionProps> = (props) => {
  const { variant, backgroundColor } = props;

  if (props.type === 'image') {
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <CallToActionContent {...props.content} buttonIcon={ArrowRight} />
        </div>
        <CallToActionImage {...props.image} />
      </CallToActionRoot>
    );
  }

  if (props.type === 'map') {
    // Para um CTA de mapa, talvez você queira agendar uma visita
    // Você poderia ter outro formulário e uma Server Action para 'registerVisit'
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <CallToActionContent {...props.content} buttonIcon={ArrowRight} />
        </div>
        <CallToActionMap {...props.map} />
      </CallToActionRoot>
    );
  }

  if (props.type === 'newsletter') {
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        {/* Passa a Server Action diretamente para o Client Component */}
        <CallToActionNewsletter
          {...props.newsletterProps}
          onSubmitAction={subscribeToNewsletter} // A Server Action é passada aqui
        />
      </CallToActionRoot>
    );
  }

  if (props.type === 'simple') {
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        <CallToActionContent {...props.content} />
      </CallToActionRoot>
    );
  }

  return null;
};

export default CallToActionSection;