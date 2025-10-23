// src/app/(pages)/o-colegio/quem-somos/page.tsx
import {
  HeroSection,
  HistoryTimeline,
  MissionVisionValues,
  PedagogySummary,
  PhotoGallery,
} from '@/components/quem-somos';

export default function QuemSomosPage() {
  return (
    <div>
      <HeroSection />
      <HistoryTimeline />
      <MissionVisionValues />
      <PedagogySummary />
      <PhotoGallery />
    </div>
  );
}