import type { Metadata } from "next";
import "../globals.css";
import PrimaryNav from "../../components/nav/PrimaryNav";
import locales from '@/intl/locales.json';
import { redirect } from "next/navigation";
import Providers from "../../contexts/Providers";
import { NextIntlClientProvider, useMessages } from "next-intl";
import NavPageLinks from "../../components/nav/pages/NavPageLinks";
import NavSessionLinks from "../../components/nav/session/NavSessionLinks";
import NavSessionLoggedInLinks from "../../components/nav/session/loggedInLinks/NavSessionLoggedInLinks";
import NavSessionLoggedOutLinks from "../../components/nav/session/loggedOutLinks/NavSessionLoggedOutLinks";


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
      <Providers>
        <body className='flex flex-col transition-colors duration-700 h-svh bg-gradient-to-br from-primary-50 to-primary-100 text-neutral-950'>
          <PrimaryNav pageLinks={<NavPageLinks />} sessionLinks={<NavSessionLinks loggedInLinks={<NavSessionLoggedInLinks />} loggedOutLinks={<NavSessionLoggedOutLinks />} />} />
          <main className='w-full m-auto p-nav text-neutral-950'>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
