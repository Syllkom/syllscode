import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/custom/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://syllscode.vercel.app';
const siteName = "Syll's Code";
const pageTitle = "Syll's Code - Innovación en Desarrollo Web y Bots IA";
const pageDescription = "Descubre los proyectos y servicios de Syll's Code. Desarrollo de bots, aplicaciones web con IA y recursos para la comunidad de desarrolladores.";
const imageUrl = `${siteUrl}/syllscode.png`;
const catboxImg = `https://files.catbox.moe/0avnk6.png`;


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${siteName}`,
  },
  description: pageDescription,
  keywords: ['Sylls Code', 'HorekuOs', 'Desarrollo web', 'bots', 'WhatsApp bots', 'inteligencia artificial', 'IA', 'NextJS', 'React', 'portafolio', 'servicios digitales', 'recursos para desarrolladores'],
  authors: [{ name: 'Syllkom', url: 'https://github.com/Syllkom' }, { name: 'Zeppth' }],
  creator: 'Syllkom',
  publisher: 'Syll\'s Code',

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: catboxImg,
        width: 1200,
        height: 630,
        alt: `Portafolio de ${siteName}`,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    // site: '@SyllsCode',
    // creator: '@Syllkom',
    images: [catboxImg],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
