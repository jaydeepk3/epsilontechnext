import { Metadata } from 'next';
import DoctorCityLanding from '@/components/landing/DoctorCityLanding';

export const metadata: Metadata = {
    title: "Digital Marketing for Doctors in Surat | Epsilon Technology",
    description: "Specialized doctor marketing in Surat. Grow your clinic with viral reels and targeted ads. Get 30-50 patient inquiries monthly. Epsilon Technology.",
    keywords: ["doctor marketing Surat", "digital marketing for doctors Surat", "social media for doctors Surat", "healthcare marketing Surat", "clinic marketing Surat"],
    openGraph: {
        title: "Doctor Marketing in Surat | Get 30–50 Patient Inquiries/Month",
        description: "Scale your clinic in Surat using high-impact video marketing and precision-targeted patient ads.",
        url: "https://epsilon-technology.com/doctor-marketing-in-surat/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-surat/',
    }
};

export default function SuratDoctorMarketing() {
    const cityDescription = "Surat is one of the fastest-growing medical destinations in South Gujarat. Whether your clinic is in the heart of Majura Gate or the thriving areas of Adajan and Vesu, our specialized digital marketing ensures your practice is the first choice for Surat's patients.";
    
    return <DoctorCityLanding city="Surat" cityDescription={cityDescription} />;
}
