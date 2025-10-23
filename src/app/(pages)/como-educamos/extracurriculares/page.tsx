// src/app/colegio/extracurriculares/page.tsx
import {
  InteractiveHero,
  IntroSection,
  ActivitiesGrid,
  AsymmetricSection,
  ClosingSection,
} from '@/components/extracurriculares';

export default function ExtracurricularesPage() {
  return (
    <div>
      <InteractiveHero />
      <IntroSection />
      <ActivitiesGrid />
      <AsymmetricSection title="Incentivo e Formação" image="/images/courses/iniciais.webp">
        <p>
          As atividades extracurriculares são parte importante da formação dos nossos estudantes. Elas ajudam a desenvolver autonomia, liderança, responsabilidade e trabalho em grupo. Desde esportes até robótica, cada projeto é uma oportunidade de colocar em prática o que se aprende em sala.
        </p>
      </AsymmetricSection>
      <AsymmetricSection title="Esportes e Bem-estar" image="/images/courses/finais.webp" reverse>
        <p>
          A gente apoia o esporte como ferramenta de disciplina e saúde. Oferecemos atividades como futsal, natação, judô e outras modalidades, com acompanhamento e incentivo a competições.
        </p>
      </AsymmetricSection>
      <AsymmetricSection title="Tecnologia e Inovação" image="/images/courses/medio.webp">
        <p>
          Na área tecnológica, o colégio investe em projetos de robótica e competições acadêmicas, estimulando o raciocínio lógico, a resolução de problemas e o pensamento criativo.
        </p>
      </AsymmetricSection>
      <ClosingSection />
    </div>
  );
}