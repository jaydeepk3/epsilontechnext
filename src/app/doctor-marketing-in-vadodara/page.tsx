import { Metadata } from 'next';
import DoctorCityLanding from '@/components/landing/DoctorCityLanding';

export const metadata: Metadata = {
    title: "Digital Marketing for Doctors in Vadodara | Epsilon Technology",
    description: "Trusted digital marketing for doctors in Vadodara. Build your brand with Instagram Reels and Facebook ads. Patient growth by Epsilon Technology.",
    keywords: ["doctor marketing Vadodara", "digital marketing for doctors Vadodara", "social media for doctors Vadodara", "healthcare marketing Vadodara", "clinic marketing Vadodara"],
    openGraph: {
        title: "Doctor Marketing in Vadodara | Get 30–50 Patient Inquiries/Month",
        description: "Transform your Vadodara practice with specialized social media growth and inquiry-focused digital marketing.",
        url: "https://epsilon-technology.com/doctor-marketing-in-vadodara/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-vadodara/',
    }
}

export default function VadodaraDoctorMarketing() {
    const cityDescription = "As the cultural and educational capital of Gujarat, Vadodara patients value expertise and trust. From established hospitals in Race Course to new clinics in Vasna-Bhayli, we help Vadodara specialists build a legacy digital brand.";
    
    return <DoctorCityLanding city="Vadodara" cityDescription={cityDescription} />;
}
