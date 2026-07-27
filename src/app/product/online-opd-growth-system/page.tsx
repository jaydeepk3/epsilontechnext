import { Metadata } from 'next';
import OpdGrowthSystemClient from './OpdGrowthSystemClient';

export const metadata: Metadata = {
  title: 'The Online OPD Growth System™ | Premium Website & OPD Engine for Doctors',
  description:
    'Transform your medical practice with The Online OPD Growth System™. Premium website, high-converting appointment engine, WhatsApp integration, and local SEO foundation engineered for doctors and healthcare centers.',
  keywords: [
    'Online OPD Growth System',
    'Doctor Website Design',
    'Clinic Patient Acquisition',
    'Medical Website Development',
    'OPD Appointment System',
    'Healthcare Digital Marketing',
    'Epsilon Technology Doctor Growth',
  ],
  openGraph: {
    title: 'The Online OPD Growth System™ | Build Patient Trust & Double OPD Enquiries',
    description:
      'A premium website system designed specifically for doctors, clinics, and hospitals to convert digital visitors into booked OPD appointments. Priced at ₹49,999.',
    url: 'https://epsilon-technology.com/product/online-opd-growth-system',
    siteName: 'Epsilon Technology',
    images: [
      {
        url: 'https://epsilon-technology.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'The Online OPD Growth System - Epsilon Technology',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Online OPD Growth System™ | Premium Doctor Website Engine',
    description:
      'Turn clinic website traffic into verified OPD patient appointments. Designed for busy doctors who want predictable growth.',
  },
  alternates: {
    canonical: 'https://epsilon-technology.com/product/online-opd-growth-system',
  },
};

export default function OnlineOpdGrowthSystemPage() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Online OPD Growth System™',
    image: 'https://epsilon-technology.com/logo.webp',
    description:
      'A complete online patient acquisition foundation and premium medical website built for doctors, clinics, and multispecialty hospitals to maximize OPD appointment bookings.',
    brand: {
      '@type': 'Brand',
      name: 'Epsilon Technology',
    },
    offers: {
      '@type': 'Offer',
      price: '49999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://epsilon-technology.com/product/online-opd-growth-system',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '58',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this just another web development service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Traditional agencies build static digital brochures. The Online OPD Growth System™ is an engineered patient-acquisition machine combining healthcare positioning, doctor trust-building frameworks, direct WhatsApp conversion, speed optimization, and local SEO foundations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to launch my clinic system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We respect your busy clinical schedule. Our complete done-for-you process takes 7 to 10 working days, requiring less than 45 minutes total of your time for discovery and final approval.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will this work for my specific specialty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We have customized frameworks for Dental, Skin & Dermatology, IVF & Gynecological centers, Orthopedics, Eye Hospitals, Physiotherapy, General Surgery, and Multispecialty Hospitals.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OpdGrowthSystemClient />
    </>
  );
}
