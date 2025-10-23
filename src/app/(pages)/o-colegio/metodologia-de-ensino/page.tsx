// src/app/(pages)/o-colegio/metodologia-de-ensino/page.tsx
import {
  HeroSection,
  PillarsSection,
  SegmentsTabs,
  ProjectsSection,
  TestimonialsSection,
} from '@/components/metodologia-de-ensino';

export default function MetodologiaDeEnsinoPage() {
  return (
    <div>
      <HeroSection />
      <PillarsSection />
      <SegmentsTabs />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
}