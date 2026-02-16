
import type { Metadata } from 'next';
import WhatsAppWebPage from './content';

export const metadata: Metadata = {
    title: 'WhatsApp Business API Solutions | Epsilon Technology',
    description: 'Turn WhatsApp into your smart sales & support engine. Automate conversations, manage leads, and scale your business with official Meta Tech Provider solutions.',
};

export default function Page() {
    return <WhatsAppWebPage />;
}
