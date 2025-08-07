import "@/app/globals.css";
import Navigation  from "@/components/site/Navigation/Desktop/NavDeskHeader";
import FooterSection from '@/components/sections/FooterSection';
import FloatLinks from "@/components/sections/FloatLinksSection";
export const metadata = {
  title: 'Colégio São Francisco de Assis',
  description: 'Colégio São Francisco de Assis: excelência em educação para todas as fases. Matrículas abertas para Ensino Infantil, Fundamental e Médio. Venha nos conhecer!',
  // Open Graph (para compartilhamento em redes sociais)
  openGraph: {
    title: 'Colégio São Francisco de Assis',
    description: 'Colégio São Francisco de Assis: excelência em educação para todas as fases. Matrículas abertas para Ensino Infantil, Fundamental e Médio. Venha nos conhecer!',
    url: 'https://devcolsaofrancisco.netlify.app/',
    siteName: 'Colégio São Francisco de Assis',
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bHHKqUsMrTAK0dZpTvstFPkgV6Qdb8sCTw&s', // URL da imagem para compartilhamento
        width: 1200,
        height: 630,
        alt: 'Colégio São Francisco de Assis - Fachada',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  // Twitter (específico para Twitter Cards)
  twitter: {
    card: 'summary_large_image',
    title: 'Colégio São Francisco de Assis',
    description: 'Colégio São Francisco de Assis: excelência em educação para todas as fases. Matrículas abertas para Ensino Infantil, Fundamental e Médio. Venha nos conhecer!',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bHHKqUsMrTAK0dZpTvstFPkgV6Qdb8sCTw&s'], // Imagem para Twitter Card
  },
  // Outras meta tags que podem ser úteis
  keywords: ['colégio São Francisco', 'escola particular', 'educação infantil', 'ensino fundamental', 'ensino médio', 'matrículas abertas', 'melhores colégios SP'],
  authors: [{ name: 'Colégio São Francisco de Assis' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="w-dvw h-dvh" suppressHydrationWarning>
          <FloatLinks />
          <Navigation />
          {children}
          <FooterSection />
      </body>
    </html>
  );

}
