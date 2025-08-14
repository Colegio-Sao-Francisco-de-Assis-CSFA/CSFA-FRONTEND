import { segmentos } from '@/app/segmentos/segmentos';
import { SegmentoDetails } from '@/components/site/Segmento';
import { Segmento } from '@/components/site/Segmento/types';


export default function SegmentoPage({ params }: { params: { segmento: string } }) {
  const segmento = segmentos.find((s) => s.url === params.segmento) as Segmento | undefined;

  if (!segmento) {
    return <div>Segmento não encontrado</div>;
  }

  return <SegmentoDetails segmento={segmento} />;
}
