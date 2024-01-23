import type { Metadata } from "next";
import "./globals.css";
import PrimaryNav from "../components/nav/PrimaryNav";


export const metadata: Metadata = {
  title: "NestJS + NextJS Template",
  description: "Colby Birkhead's NextJS Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='h-screen bg-neutral-50 bg-gradient-to-br from-accentA-400 via-neutral-50 to-accentB-200'>
        <PrimaryNav />  
        <main className='p-4 m-auto mt-4 border-2 rounded-lg border-neutral-950 bg-translucent-light w-fit text-neutral-950 max-w-7xl'>
          {children}
        </main>
      </body>
    </html>
  );
}
