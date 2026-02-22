
import type { Metadata } from 'next';
import WhatsAppWebPage from './content';

export const metadata: Metadata = {
    title: 'Official WhatsApp Business API Solutions | Automate Sales & Support',
    description: 'Turn WhatsApp into your smart sales & support engine. Automate conversations, manage leads, and scale your business with official Meta Tech Provider solutions.',
    keywords: ["WhatsApp Business API", "WhatsApp automation", "official WhatsApp API provider", "WhatsApp sales automation", "WhatsApp support solutions"],
    openGraph: {
        title: 'Official WhatsApp Business API Solutions | Epsilon Technology',
        description: 'Automate conversations and scale your business with official Meta Tech Provider solutions.',
    },
    alternates: {
        canonical: '/services/whatsapp-business-api/',
    }
};

export default function Page() {
    return <WhatsAppWebPage />;
}
