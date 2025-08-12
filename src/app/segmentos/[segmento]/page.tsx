import { segmentos } from '../segmentos';
import { SegmentoDetails } from '@/components/site/SegmentoDetails';

export default function SegmentoPage({ params }: { params: { segmento: string } }) {
  const segmento = segmentos.find((s) => s.url === params.segmento);

  if (!segmento) {
    return <div>Segmento não encontrado</div>;
  }

  return <SegmentoDetails segmento={segmento} />;
}
