import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AOSInit from './components/AOSInit';
import GoogleAnalytics from './components/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default:
      'Bitifix - Web Development Services | App Development | Digital Solutions',
    template: '%s | Bitifix - Digital Solutions & Business Growth',
  },
  description:
    'Professional web development services, mobile app development, and digital solutions. Expert team delivering responsive websites, iOS/Android apps, cloud infrastructure, and automation integration. Get started today!',
  keywords: [
    'web development services',
    'app development services',
    'mobile app development',
    'iOS app development',
    'Android app development',
    'web design services',
    'cloud infrastructure',
    'automation integration',
    'digital solutions',
    'business growth',
    'responsive web design',
    'custom web development',
    'e-commerce development',
    'UI/UX design',
    'web hosting services',
    'SEO optimization',
    'performance optimization',
    'scalable web applications',
    'cross-platform development',
    'API integration',
  ],
  authors: [{ name: 'Bitifix Team' }],
  creator: 'Bitifix',
  publisher: 'Bitifix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitifix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitifix.com',
    siteName: 'Bitifix',
    title:
      'Bitifix - Web Development Services | App Development | Digital Solutions',
    description:
      'Professional web development services, mobile app development, and digital solutions. Expert team delivering responsive websites, iOS/Android apps, cloud infrastructure, and automation integration.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitifix - Digital Solutions & Business Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Bitifix - Web Development Services | App Development | Digital Solutions',
    description:
      'Professional web development services, mobile app development, and digital solutions. Expert team delivering responsive websites, iOS/Android apps, cloud infrastructure, and automation integration.',
    images: ['/images/twitter-image.jpg'],
    creator: '@bitifix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bitifix',
    description:
      'Professional web development services, mobile app development, and digital solutions. Expert team delivering responsive websites, iOS/Android apps, cloud infrastructure, and automation integration.',
    url: 'https://bitifix.com',
    logo: 'https://bitifix.com/images/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://bitifix.com/contact',
    },
    sameAs: [
      'https://twitter.com/bitifix',
      'https://linkedin.com/company/bitifix',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    foundingDate: '2022',
    numberOfEmployees: '10-20',
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development Services',
            description:
              'Professional web development including responsive design, performance optimization, and SEO',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description:
              'iOS and Android app development with cross-platform solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure Services',
            description:
              'Comprehensive cloud infrastructure setup and management',
          },
        },
      ],
    },
  };

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <GoogleAnalytics />
        <AOSInit />
        <AppProvider>
          <Header />

          {children}

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
