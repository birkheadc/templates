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
    <html lang='en' data-theme='light'>
      <body className='flex flex-col h-svh bg-neutral-50 text-neutral-950'>
        <PrimaryNav />    
        <main className='flex-grow w-full p-4 m-auto overflow-x-hidden overflow-y-auto border-neutral-950 text-neutral-950'>
          {children}
        </main>
      </body>
    </html>
  );
}
