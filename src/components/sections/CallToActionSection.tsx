// components/sections/CallToActionSection.tsx
// REMOVA O 'use client;' se quiser que seja um Server Component (como discutido anteriormente)

import React from 'react';
import {
  CallToActionRoot,
  CallToActionContent,
  CallToActionImage,
  CallToActionMap,
  CallToActionNewsletter,
  CallToActionVisitForm,
  CallToActionContentProps,
  CallToActionImageProps,
  CallToActionMapProps,
  CallToActionNewsletterProps, // MANTÉM AQUI
  CallToActionVisitFormProps,
} from '../site/CallToAction';
import { ArrowRight } from 'lucide-react';

import { subscribeToNewsletter, registerVisit } from '@/app/api/actions/newsletter';

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
  map: CallToActionMapProps;
  visitForm: Omit<CallToActionVisitFormProps, 'onSubmitAction'>;
}

interface NewsletterCallToActionProps extends BaseCallToActionSectionProps {
  type: 'newsletter';
  newsletterProps: Omit<CallToActionNewsletterProps, 'onSubmitAction'>; // Continua omitindo apenas onSubmitAction
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
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        <CallToActionVisitForm
          {...props.visitForm}
          onSubmitAction={registerVisit}
        />
        <CallToActionMap {...props.map} />
      </CallToActionRoot>
    );
  }

  if (props.type === 'newsletter') {
    return (
      <CallToActionRoot variant={variant} backgroundColor={backgroundColor}>
        <CallToActionNewsletter
          {...props.newsletterProps}
          onSubmitAction={subscribeToNewsletter}
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