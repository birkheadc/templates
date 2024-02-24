import type { Metadata } from "next";
import "../globals.css";
import PrimaryNav from "../../components/nav/PrimaryNav";
import locales from '@/intl/locales.json';
import { redirect } from "next/navigation";
import Providers from "../../contexts/Providers";
import { useMessages } from "next-intl";


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

  const messages = useMessages();

  if (!locales.includes(locale)) redirect('/');

  return (
    <html lang={locale} data-theme='dark'>
      <Providers locale={locale} messages={messages}>
        <body className='flex flex-col transition-colors duration-700 h-svh bg-neutral-50 text-neutral-950'>
          <PrimaryNav />
          <main className='w-full m-auto p-nav text-neutral-950'>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
