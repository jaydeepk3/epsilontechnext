import { Metadata } from 'next';
import MobileAppCityLanding from '@/components/landing/MobileAppCityLanding';

export const metadata: Metadata = {
    title: "Best Mobile Application Development Company in Junagadh | Epsilon Technology",
    description: "Looking for the best mobile application development company in Junagadh? Epsilon Technology designs and builds high-performance Android & iOS apps.",
    keywords: [
        "best mobile application development company in junagadh",
        "best mobile application development agency in junagadh",
        "best mobile app development company in junagadh",
        "mobile app developers in junagadh",
        "android app development junagadh",
        "ios app development junagadh",
        "react native app development junagadh",
        "epsilon technology junagadh"
    ],
    openGraph: {
        title: "Best Mobile Application Development Company in Junagadh | Epsilon Technology",
        description: "Partner with the best mobile application development company in Junagadh. We build premium iOS & Android apps using React Native and Flutter.",
        url: "https://epsilon-technology.com/mobile-app-development-company-in-junagadh/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/mobile-app-development-company-in-junagadh/',
    }
}

export default function JunagadhMobileAppLanding() {
    const cityDescription = "Serving the Saurashtra business ecosystem from the foothills of Girnar to Moti Baug Road, we provide world-class custom mobile applications for retail, hospitality, health clinics, and schools. We bring premium React Native and Flutter app development right to your doorstep in Junagadh.";
    
    return <MobileAppCityLanding city="Junagadh" cityDescription={cityDescription} />;
}
