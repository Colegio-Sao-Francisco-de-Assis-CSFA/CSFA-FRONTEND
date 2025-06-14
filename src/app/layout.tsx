import Head from "next/head";
import "@/app/globals.css";
import Header from '@/components/site/shared/Header/Header';
import Footer from '@/components/site/shared/Footer';
import FloatLinks from "@/components/site/FloatLinks";

export const metadata = {
  title: "Colégio São Francisco de Assis",
  description: "Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor.",
  icons: {
    icon: "/logo40anos.svg",
  },
  openGraph: {
    title: "Colégio São Francisco de Assis",
    description: "Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor.",
    url: "https://colsaofrancisco.com.br",
    siteName: "Colégio São Francisco de Assis",
    images: [
      {
        url: "https://devcolsaofrancisco.netlify.app/logo40anos.svg",
        width: 1200,
        height: 630,
        alt: "Logo do Colégio São Francisco de Assis",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className="w-dvw h-dvh overflow-hidden">

        <Head>
          <link rel="icon" type="image/svg" href="/logo40anos.svg" />
          <title>Colégio São Francisco de Assis</title>
          <meta name="description" content="Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor." />
          <meta property="og:title" content="Título da Colégio São Francisco de Assis" />
          <meta property="og:description" content="Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor." />
          <meta property="og:image" content="https://devcolsaofrancisco.netlify.app/logo40anos.svg" />
          <meta property="og:url" content="https://colsaofrancisco.com.br" />
          <meta property="og:type" content="website" />
        </Head>

        <FloatLinks />

        <Header />
        {children}
        <Footer />

      </body>


    </html>
  );
}
