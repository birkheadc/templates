import type { Metadata } from "next";
import "../globals.css";
import PrimaryNav from "../../components/nav/PrimaryNav";
import locales from '@/intl/locales.json';
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "NestJS + NextJS Template",
  description: "Colby Birkhead's NextJS Template",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  if (!locales.includes(locale)) redirect('/');

  return (
    <html lang={locale} data-theme='dark'>
      <body className='h-svh flex flex-col transition-colors duration-700 bg-neutral-50 text-neutral-950'>
        <PrimaryNav />
        <main className='p-nav w-full m-auto text-neutral-950'>
          {children}
        </main>
      </body>
    </html>
  );
}
