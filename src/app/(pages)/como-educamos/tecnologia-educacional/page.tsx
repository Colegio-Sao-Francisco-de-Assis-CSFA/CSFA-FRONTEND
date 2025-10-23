// src/app/colegio/tecnologia-educacional/page.tsx
import { HeroSection } from '@/components/tecnologia-educacional/HeroSection';
import { IntroSection } from '@/components/tecnologia-educacional/IntroSection';
import { TechGrid } from '@/components/tecnologia-educacional/TechGrid';
import { RoboticsSection } from '@/components/tecnologia-educacional/RoboticsSection';
import { BenefitsSection } from '@/components/tecnologia-educacional/BenefitsSection';

export default function TecnologiaEducacionalPage() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <TechGrid />
      <RoboticsSection />
      <BenefitsSection />
    </div>
  );
}
