import { Metadata } from 'next';
import OpdGrowthSystemClient from './OpdGrowthSystemClient';

export const metadata: Metadata = {
  title: 'Free OPD Growth Blueprint for Doctors | Double Patient Appointments',
  description:
    'Download the Free OPD Growth Blueprint (PDF) for doctors & clinic owners. Learn how to rank higher on Google Maps, build patient trust, automate WhatsApp appointment enquiries, and grow your daily OPD.',
  keywords: [
    'Free OPD Growth Blueprint',
    'Doctor Marketing Guide PDF',
    'Clinic Patient Acquisition',
    'OPD Growth System',
    'Doctor Google Maps Ranking',
    'Clinic WhatsApp Automation',
    'Epsilon Technology Doctor Marketing',
  ],
  openGraph: {
    title: 'Free OPD Growth Blueprint for Doctors | Double Patient Appointments',
    description:
      'Download the free 5-step strategy guide engineered for doctors & clinic owners to attract predictable OPD patient enquiries.',
    url: 'https://epsilon-technology.com/online-opd-growth-system',
    siteName: 'Epsilon Technology',
    images: [
      {
        url: 'https://epsilon-technology.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Free OPD Growth Blueprint - Epsilon Technology',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free OPD Growth Blueprint for Doctors (PDF)',
    description:
      'Turn online searches into verified OPD patient appointments. Designed for busy practicing doctors.',
  },
  alternates: {
    canonical: 'https://epsilon-technology.com/online-opd-growth-system',
  },
};

export default function OnlineOpdGrowthSystemPage() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Free OPD Growth Blueprint for Doctors',
    image: 'https://epsilon-technology.com/logo.webp',
    description:
      'A practical 5-step growth blueprint for doctors and clinic owners to rank higher on Google, automate WhatsApp enquiries, and double OPD consultations.',
    author: {
      '@type': 'Organization',
      name: 'Epsilon Technology',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
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
        name: 'Is the guide really 100% free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free. There are zero hidden costs, mandatory credit cards, or catch. We created this blueprint to help practicing doctors understand modern digital patient acquisition.',
        },
      },
      {
        '@type': 'Question',
        name: 'How will I receive the OPD Growth Blueprint?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instantly! As soon as you enter your name and WhatsApp number, the PDF opens immediately in your browser, and a direct download link is sent to your WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this blueprint useful for my specific medical specialty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The strategy applies directly to Orthopedics, Gynecology & IVF, Dermatology, Dental Clinics, Ophthalmology, Pediatrics, General Surgery, General Medicine, and Multispecialty Clinics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to read and implement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The blueprint is concise and fluff-free. It takes under 12 minutes to read and features step-by-step checklists you can put into action right away.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will someone contact me after downloading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We respect your time. We will send your PDF link and invite you to our exclusive Doctors OPD Growth WhatsApp Community. No pushy sales calls.',
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

