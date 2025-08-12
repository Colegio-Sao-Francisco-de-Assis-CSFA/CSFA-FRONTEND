import { SegmentosList } from '@/components/site/SegmentosList';
import { segmentos } from './segmentos';

export default function SegmentosPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Segmentos</h1>
      <SegmentosList segmentos={segmentos} />
    </main>
  );
}
