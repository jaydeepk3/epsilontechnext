import { Metadata } from 'next';
import DoctorCityLanding from '@/components/landing/DoctorCityLanding';

export const metadata: Metadata = {
    title: "Digital Marketing for Doctors in Ahmedabad | Epsilon Technology",
    description: "Get 30–50 patient inquiries/month with Instagram & Facebook marketing for doctors in Ahmedabad. Specialized healthcare agency by Epsilon Technology.",
    keywords: ["doctor marketing Ahmedabad", "digital marketing for doctors Ahmedabad", "social media for doctors Ahmedabad", "healthcare marketing Ahmedabad", "clinic marketing Ahmedabad"],
    openGraph: {
        title: "Doctor Marketing in Ahmedabad | Get 30–50 Patient Inquiries/Month",
        description: "Grow your medical practice in Ahmedabad with specialized Instagram Reels and Facebook Ads strategies.",
        url: "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-ahmedabad/',
    }
};

export default function AhmedabadDoctorMarketing() {
    const cityDescription = "As Gujarat's largest healthcare hub, Ahmedabad demands more than just a presence—it requires dominance. From the medical corridors of C.G. Road to the growing specialist centers in Prahlad Nagar and Bopal, we help Ahmedabad doctors cut through the noise.";
    
    return <DoctorCityLanding city="Ahmedabad" cityDescription={cityDescription} />;
}
