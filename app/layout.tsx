import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import PerformanceOptimization from "@/components/PerformanceOptimization";

export const metadata: Metadata = {
  title: {
    default: "Jemachem Trading - Ethiopia's Premier Chemical Import & Distribution Company",
    template: "%s | Jemachem Trading - Chemical Import & Distribution Ethiopia",
  },
  description:
    "Jemachem Trading is Ethiopia's leading importer, supplier, and distributor of chemicals across categories including Detergents & Cosmetics, Food & Beverage, Paints & Solvents, Plastics & Foam, Water Treatment, Leather & Footwear, Textiles, and Laboratory reagents. We provide high-quality chemical solutions for manufacturing, agriculture, and research across Ethiopia with reliable delivery and expert support.",
  keywords: [
    "chemical import Ethiopia",
    "industrial chemicals Ethiopia",
    "agricultural chemicals Ethiopia", 
    "laboratory chemicals Ethiopia",
    "chemical supplier Ethiopia",
    "chemical distributor Ethiopia",
    "detergent chemicals Ethiopia",
    "cosmetics chemicals Ethiopia",
    "surfactants Ethiopia",
    "fragrances Ethiopia",
    "emulsifiers Ethiopia",
    "food additives Ethiopia",
    "preservatives Ethiopia",
    "sweeteners Ethiopia",
    "acidulants Ethiopia",
    "food colorants Ethiopia",
    "food grade chemicals Ethiopia",
    "paint chemicals Ethiopia",
    "industrial resins Ethiopia",
    "solvents Ethiopia",
    "pigments Ethiopia",
    "plasticizers Ethiopia",
    "water treatment chemicals Ethiopia",
    "coagulants Ethiopia",
    "flocculants Ethiopia",
    "antiscalants Ethiopia",
    "disinfectants Ethiopia",
    "leather chemicals Ethiopia",
    "tanning agents Ethiopia",
    "textile chemicals Ethiopia",
    "textile dyes Ethiopia",
    "textile auxiliaries Ethiopia",
    "polymer chemicals Ethiopia",
    "plastics and foam chemicals Ethiopia",
    "polyurethane foam chemicals Ethiopia",
    "EPS foam chemicals Ethiopia",
    "chemical trading Ethiopia",
    "chemical import company Ethiopia",
    "chemical warehouse Ethiopia"
  ],
  authors: [{ name: "Jemachem Trading" }],
  creator: "Jemachem Trading",
  publisher: "Jemachem Trading",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jemachem.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jemachem.com',
    siteName: 'Jemachem Trading',
    title: 'Jemachem Trading - Ethiopia\'s Premier Chemical Import & Distribution Company',
    description: 'Importer and distributor of chemicals in Ethiopia across Detergents & Cosmetics, Food & Beverage, Paints & Solvents, Plastics & Foam, Water Treatment, Leather & Footwear, Textiles, and Laboratory.',
    images: [
      {
        url: '/jemachem-company-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Jemachem Trading - Chemical Import Company Ethiopia',
      },
    ],
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#0c0c0c" />
        <meta name="theme-color" content="#0c0c0c" />
        <StructuredData />
        <LocalBusinessSchema />
        <FAQSchema />
        <PerformanceOptimization />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
