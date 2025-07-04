import "@/app/globals.css";
import { Navigation } from "@/components/site/Navigation/Navigation";
import FooterSection from '@/components/sections/FooterSection';
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
        <div className="w-screen">
          {children}
        </div>
        <FooterSection />

      </body>

    </html>
  );
}
