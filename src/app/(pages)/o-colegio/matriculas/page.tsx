// src/app/(pages)/o-colegio/matriculas/page.tsx
import {
  HeroSection,
  EnrollmentTimeline,
  InfoSection,
  FaqSection,
  CtaSection,
} from '@/components/matriculas';

export default function MatriculasPage() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <EnrollmentTimeline />
      <InfoSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
