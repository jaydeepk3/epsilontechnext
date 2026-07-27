import { Metadata } from 'next';
import OpdAuditLandingClient from './OpdAuditLandingClient';

export const metadata: Metadata = {
  title: 'Free OPD Growth Audit for Doctors | Online Patient Acquisition System',
  description:
    'Claim your free 1-on-1 OPD Digital Growth Audit. Discover how doctors and clinics double their patient appointment inquiries with our complete done-for-you medical website & WhatsApp growth system.',
  keywords: [
    'Free Doctor OPD Audit',
    'Doctor Patient Acquisition',
    'Clinic Marketing Audit',
    'OPD Growth System',
    'Medical Website Free Audit',
    'Doctor Growth Strategy',
  ],
  openGraph: {
    title: 'Free OPD Growth Audit | Double Doctor Patient Appointments',
    description:
      'Engineered specifically for doctors and clinic owners. Get a free digital audit & patient acquisition roadmap.',
    url: 'https://epsilon-technology.com/opd-growth-system-free-audit',
    siteName: 'Epsilon Technology',
    images: [
      {
        url: 'https://epsilon-technology.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Free OPD Growth Audit - Epsilon Technology',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free OPD Growth Audit for Doctors',
    description:
      'Turn online searches into verified clinic patient appointments. Request your free 1-on-1 OPD audit report.',
  },
  alternates: {
    canonical: 'https://epsilon-technology.com/opd-growth-system-free-audit',
  },
};

export default function OpdAuditLandingPage() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Online OPD Growth System Free Audit',
    image: 'https://epsilon-technology.com/logo.webp',
    description:
      'Free 1-on-1 digital growth audit and consultation for doctors, clinics, and hospitals looking to increase OPD patient bookings.',
    provider: {
      '@type': 'Organization',
      name: 'Epsilon Technology',
      url: 'https://epsilon-technology.com',
    },
    areaServed: 'IN',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the Free OPD Growth Audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our team evaluates your online medical footprint, Google search rankings, competitor positioning, and front-desk conversion speed to deliver a custom growth roadmap.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to launch our clinic system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our complete done-for-you launch takes 7 to 10 working days, requiring less than 45 minutes of your time.',
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
      <OpdAuditLandingClient />
    </>
  );
}
