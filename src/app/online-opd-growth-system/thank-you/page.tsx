import { Metadata } from 'next';
import ThankYouPage from './ThankYouClient';

export const metadata: Metadata = {
  title: 'Your Free OPD Growth Guide is Ready | Online OPD Growth System',
  description:
    'Access your free OPD Growth Guide and book a 1-on-1 strategy call with our healthcare growth specialist. Plus: upgrade to the AI Growth Kit for Doctors.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouPage />;
}
