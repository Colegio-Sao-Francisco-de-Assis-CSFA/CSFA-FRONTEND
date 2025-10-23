// src/app/(pages)/o-colegio/informacoes-uteis/page.tsx
import {
  HeroSection,
  InfoGrid,
  ScheduleSection,
  CalendarSection,
  UniformSection,
  SuppliesSection,
  MenuSection,
} from '@/components/informacoes-uteis';

export default function InformacoesUteisPage() {
  return (
    <div>
      <HeroSection />
      <InfoGrid />
      <ScheduleSection />
      <CalendarSection />
      <UniformSection />
      <SuppliesSection />
      <MenuSection />
    </div>
  );
}
