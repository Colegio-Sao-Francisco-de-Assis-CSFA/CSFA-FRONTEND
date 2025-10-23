// src/app/colegio/parcerias/page.tsx
import { HeroSection } from '@/components/parcerias/HeroSection';
import { IntroSection } from '@/components/parcerias/IntroSection';
import { PartnersGrid } from '@/components/parcerias/PartnersGrid';
import { BenefitsSection } from '@/components/parcerias/BenefitsSection';
import { BecomePartnerSection } from '@/components/parcerias/BecomePartnerSection';

export default function ParceriasPage() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <PartnersGrid />
      <BenefitsSection />
      <BecomePartnerSection />
    </div>
  );
}
