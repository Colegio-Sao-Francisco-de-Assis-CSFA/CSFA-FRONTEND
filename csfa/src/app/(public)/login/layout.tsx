import Head from "next/head";
import "@/app/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className="w-dvw h-dvh overflow-hidden">

        {children}

      </body>



    </html>
  );
}
