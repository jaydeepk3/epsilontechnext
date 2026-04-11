import { Metadata } from 'next';
import WebDevCityLanding from '@/components/landing/WebDevCityLanding';

export const metadata: Metadata = {
    title: "Web Design & Development Junagadh, Gujarat | Epsilon Technology",
    description: "Top-rated website development company in Junagadh. Specialized in Next.js, WordPress, & high-performance SEO websites for businesses in Junagadh and Gujarat.",
    keywords: [
        "website development junagadh", 
        "web design junagadh gujarat", 
        "website design company junagadh",
        "nextjs developer junagadh",
        "wordpress development junagadh",
        "epsilon technology junagadh"
    ],
    openGraph: {
        title: "Website Development Company in Junagadh | Epsilon Technology",
        description: "Scale your Junagadh business with a modern, SEO-ready website. Next.js & WordPress solutions starting at ₹15,000.",
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
