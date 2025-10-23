// src/app/(pages)/o-colegio/nossa-historia/page.tsx
import {
  HeroSection,
  DetailedTimeline,
  FoundersSection,
  HistoricalGallery,
  LegacySection,
} from '@/components/nossa-historia';

export default function NossaHistoriaPage() {
  return (
    <div>
      <HeroSection />
      <DetailedTimeline />
      <FoundersSection />
      <HistoricalGallery />
      <LegacySection />
    </div>
  );
}