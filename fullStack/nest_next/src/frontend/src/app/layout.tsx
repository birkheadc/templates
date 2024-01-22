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
      <body className='h-screen bg-primary-800'>
        <PrimaryNav />
        <main className='p-4 m-auto mt-6 bg-primary-50 text-primary-950 max-w-7xl'>
          {children}
        </main>
      </body>
    </html>
  );
}
