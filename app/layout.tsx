import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import ToastProvider from '@/shared/toast/toast-provider';

export const metadata: Metadata = {
  title: 'Rurblist',
  description: 'Rurblist - Your ultimate real estate platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
