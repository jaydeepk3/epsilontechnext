import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://epsilon-technology.com'),
  title: {
    default: "Epsilon Technology | Custom Software, App & Web Development, Digital Marketing",
    template: "%s | Epsilon Technology"
  },
  description: "Epsilon Technology provides premium digital marketing, custom software development, mobile application development, and website development services to grow your business globally.",
  keywords: ["Custom Software Development", "Mobile Application Development", "Website Development", "Digital Marketing", "Doctor Marketing", "Social Media Growth", "Healthcare Marketing", "IT Services", "Epsilon Technology"],
  authors: [{ name: "Epsilon Technology" }],
  creator: "Epsilon Technology",
  publisher: "Epsilon Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://epsilon-technology.com",
    siteName: "Epsilon Technology",
    title: "Epsilon Technology — Web, App & eCommerce Agency | UAE · UK · USA",
    description: "Trusted by businesses in UAE, UK, and USA. We build websites, apps, eCommerce stores and WhatsApp automation. 100+ projects. 4.9★ rated. Get a free quote.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Epsilon Technology Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epsilon Technology | Digital Marketing & IT Solutions",
    description: "Premium IT software services including custom software, mobile applications, website development, and specialized digital marketing.",
    images: ["/logo.webp"], // Ideally this should be a larger banner image
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
  alternates: {
    canonical: 'https://epsilon-technology.com',
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { MicrosoftClarity } from '@/components/analytics/MicrosoftClarity';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1575709850775284');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1575709850775284&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-white text-slate-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://epsilon-technology.com/#organization",
                  "name": "Epsilon Technology",
                  "url": "https://epsilon-technology.com",
                  "logo": "https://epsilon-technology.com/logo.webp",
                  "description": "Specialized social media growth for doctors and premium IT software services.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@epsilon-technology.com",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://www.instagram.com/epsilon.technology/",
                    "https://dribbble.com/epsilontech"
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "url": "https://epsilon-technology.com/about-us"
                  }
                },
                {
                  "@type": "SoftwareHouse",
                  "@id": "https://epsilon-technology.com/#software",
                  "name": "Epsilon Technology - IT Services",
                  "parentOrganization": {
                    "@id": "https://epsilon-technology.com/#organization"
                  },
                  "description": "Global mobile app development, ecommerce solutions, and custom software company.",
                  "url": "https://epsilon-technology.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                  },
                  "priceRange": "$$$"
                }
              ]
            })
          }}
        />
        <GoogleAnalytics gaId="G-JD0HV8PBLB" />
        <MicrosoftClarity />
        <SpeedInsights />
      </body>
    </html>
  );
}


