import "@/app/globals.css";
import { Navigation } from "@/components/site/Navigation/Navigation";
import Footer from '@/components/site/Footer';
import FloatLinks from "@/components/sections/FloatLinksSection";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className="w-dvw h-dvh">
        <FloatLinks />
        <Navigation />
        {children}
        <Footer />
      </body>

    </html>
  );
}
