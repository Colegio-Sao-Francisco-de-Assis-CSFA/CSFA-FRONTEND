import Head from "next/head";
import "./globals.css";
import Header from '@/components/shared/Header/Header';


export const metadata = {
  openGraph: {
    title: "Colégio São Francisco de Assis",
    description: "Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor.",
    images: [
      {
        url: "data:image/jpeg;base64,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", // Caminho da imagem na pasta public
        width: 200,
        height: 200,
        alt: "Logo do Colégio São Francisco de Assis",
      },
    ],
    type: "website",
    url: "https://colsaofrancisco.com.br",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" type="image/webp" href="/logo.webp" />
        <meta name="description" content="Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor." />
        <title>Colégio São Francisco de Assis</title>
      </Head>
      
      <Header />

      <body>
        {children}
      </body>
    </html>
  );
}
