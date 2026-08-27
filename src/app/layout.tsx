import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FeedbackModal } from '../components/FeedbackModal';
import { Providers } from './providers';

const THEME_NO_FLASH = `(function(){try{var t=localStorage.getItem('creativai-theme')||localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://getcreativai.vercel.app'),
  title: {
    default: 'CreativAI — AI Decision Engine for Creators',
    template: '%s | CreativAI',
  },
  description: 'Evidence-backed decision engine helping creators choose the right AI tools, build integrated workflows, and calculate true production costs.',
  keywords: [
    'creator AI tools',
    'faceless YouTube workflow',
    'AI video generators',
    'ElevenLabs alternatives',
    'AI true cost calculator',
    'best AI voice',
    'P.A.C.E evaluation framework',
  ],
  authors: [{ name: 'CreativAI Research & Evaluation Team' }],
  creator: 'CreativAI',
  publisher: 'CreativAI',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || 'google-site-verification-getcreativai',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getcreativai.vercel.app',
    siteName: 'CreativAI',
    title: 'CreativAI — AI Decision Engine for Creators',
    description: 'Evidence-backed decision engine helping creators choose the right AI tools, build integrated workflows, and calculate true production costs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CreativAI — AI Decision Engine for Creators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreativAI — AI Decision Engine for Creators',
    description: 'Evidence-backed decision engine helping creators choose the right AI tools, build integrated workflows, and calculate true production costs.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_NO_FLASH }} />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} font-sans min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors duration-200`}>
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FeedbackModal />
        </Providers>
      </body>
    </html>
  );
}
