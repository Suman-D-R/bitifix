import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GoPravasa - Digital Solutions & Business Growth',
  description:
    'At GoPravasa, we believe every successful project starts with understanding. Our approach is built around research, collaboration, and innovation to deliver solutions that truly connect with your audience and help your business grow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AppProvider>
          <Header />

          {children}

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
