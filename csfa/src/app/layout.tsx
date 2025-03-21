import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Colégio São Francico de Assis",
  description: "Escola comprometida com educação de qualidade, formando crianças e jovens para um futuro melhor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
