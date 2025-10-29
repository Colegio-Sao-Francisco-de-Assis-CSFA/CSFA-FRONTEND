// src/app/(pages)/o-colegio/matriculas/page.tsx

import HeroSection from '@/components/matriculas/HeroSection';
import ValuesSection from '@/components/matriculas/ValuesSection';
import TimelineSection from '@/components/matriculas/TimelineSection';
import InfoCardsSection from '@/components/matriculas/InfoCardsSection';
import FaqSection from '@/components/matriculas/FaqSection';
import CtaSection from '@/components/matriculas/CtaSection';

export default function MatriculasPage() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ValuesSection />
      <TimelineSection />
      <InfoCardsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}