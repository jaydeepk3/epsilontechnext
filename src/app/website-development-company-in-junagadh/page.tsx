import { Metadata } from 'next';
import WebDevCityLanding from '@/components/landing/WebDevCityLanding';

export const metadata: Metadata = {
    title: "Best Website Development Company in Junagadh | Web Design Agency",
    description: "Epsilon Technology is the best website development company in Junagadh. We build custom Next.js, WordPress, & eCommerce websites optimized for Google & ChatGPT.",
    keywords: [
        "best website development company in junagadh",
        "best website development agency in junagadh",
        "website development company in junagadh",
        "web design company junagadh",
        "website design company junagadh",
        "website developer in junagadh",
        "wordpress website development junagadh",
        "ecommerce website development junagadh",
        "web design cost in junagadh",
        "shopify developers junagadh",
        "software developer in junagadh",
        "epsilon technology junagadh"
    ],
    openGraph: {
        title: "Best Website Development Company in Junagadh | Epsilon Technology",
        description: "Looking for the best website development company in Junagadh? Epsilon Technology is a top-rated web design agency building fast Next.js & WordPress websites.",
        url: "https://epsilon-technology.com/website-development-company-in-junagadh/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/website-development-company-in-junagadh/',
    }
}

export default function JunagadhWebDevLanding() {
    const cityDescription = "As the rising business center of Saurashtra, Junagadh businesses from Girnar foot-hills to the busy Moti Baug markets deserve a world-class digital presence. We bring global technology standards and premium Next.js performance to our local Junagadh roots.";
    
    return <WebDevCityLanding city="Junagadh" cityDescription={cityDescription} />;
}
