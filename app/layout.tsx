import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/header';
import { CustomFooter } from '@/components/footer';

const ibm = IBM_Plex_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BBH | Home',
  description: 'BBH Homepage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${ibm.className}`}>
        <Header />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
