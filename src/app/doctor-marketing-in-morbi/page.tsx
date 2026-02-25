import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MapPin, TrendingUp, Users } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Morbi | Grow Your Clinic with Epsilon Technology",
    description: "Expert doctor marketing agency in Morbi. We help doctors and clinics in Morbi attract more patients and build a strong local brand.",
    keywords: ["Doctor Marketing in Morbi", "Clinic Marketing Morbi", "Medical Marketing Agency Morbi", "Hospital Marketing Morbi", "SEO for Doctors Morbi"],
    openGraph: {
        title: "Doctor Marketing in Morbi | Epsilon Technology",
        description: "Grow your medical practice in Morbi with specialized marketing strategies.",
        url: "https://epsilon-technology.com/doctor-marketing-in-morbi/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: '/doctor-marketing-in-morbi/',
    }
};

const morbiFaqs = [
    {
        question: "Is digital marketing relevant for Morbi doctors?",
        answer: "Yes. Morbi has a highly digital-savvy population. People in Morbi use Instagram and Google extensively to find services. Being present there is crucial to capture the local market."
    },
    {
        question: "Can you help promote my clinic on Sanala Road?",
        answer: "Detailed local targeting allows us to show your ads specifically to people living in and around Sanala Road, Ravapar Road, and other key areas of Morbi."
    },
    {
        question: "I want to attract patients for premium treatments. Can you help?",
        answer: "Morbi has high purchasing power. We create premium brand positioning for your clinic that appeals to patients looking for high-quality, advanced treatments locally."
    },
    {
        question: "Do you offer Gujarati content?",
        answer: "Yes, we specialize in creating content in Kathiyawadi Gujarati that resonates deeply with the local Morbi audience, building instant trust and connection."
    }
];

export default function DoctorMarketingMorbi() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Localized Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-teal-50/50 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-emerald-50/50 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-700 font-bold text-sm mb-8">
                        <MapPin size={16} />
                        <span> #1 Doctor Marketing Agency in Morbi</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-teal-600">Morbi</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Morbi's doctors build a trusted brand and get more patient inquiries using smart digital marketing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-200">
                            Book Free Strategy Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Content Section: Why Marketing Matters */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Marketing Matters for Morbi Doctors</h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            <strong>Morbi</strong> is known for its industry, but its healthcare sector is rapidly modernizing. Patients no longer want to rush to Rajkot or Ahmedabad for every small treatment. They prefer trusted local doctors.
                        </p>
                        <p className="mb-6">
                            However, trust is built on visibility. If a patient searches for a doctor in areas like <strong>Sanala Road</strong> or <strong>Ravapar</strong> and doesn't find you, they will assume you aren't a leading option.
                        </p>
                        <p>
                            That’s where specialized <strong>Doctor Marketing in Morbi</strong> helps. We showcase your expertise and facilities to the local community, convincing them that world-class care is available right here in Morbi.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Who Benefits Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Needs Doctor Marketing in Morbi?</h2>
                        <p className="text-slate-600">Strategies to win the local market in Morbi.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "General Physicians", desc: "Become the first point of contact for families in Morbi's residential areas." },
                            { title: "Orthopdeic Surgeons", desc: "Morbi has many industrial accident cases. Ensure you are the first name people think of for trauma care." },
                            { title: "Dentists", desc: "Attract patients for cosmetic dentistry and implants from Morbi's affluent business community." },
                            { title: "Gynecologists", desc: "Build a safe, trusted environment for women's health through educational and sensitive content." },
                            { title: "Upcoming Hospitals", desc: "Launch your new hospital in Morbi with a bang and fill beds immediately." },
                            { title: "Skin Specialists", desc: "Promote aesthetic treatments to the younger, trend-conscious generation in Morbi." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Essential Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Essential Marketing Services for Morbi</h2>

                    <div className="grid gap-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Google Maps for Local Reach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    In a city layout like Morbi, patients rely heavily on Maps. We optimize your profile to ensure you rank #1 for searches near Ravapar and Sanala.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-pink-50 p-4 rounded-xl text-pink-600 shrink-0">
                                <TrendingUp size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Language Reels</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Content in Kathiyawadi Gujarati works best here. We script and edit videos that feel native and relatable to the Morbi public.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-green-50 p-4 rounded-xl text-green-600 shrink-0">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Automation</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Business in Morbi happens on WhatsApp. We set up automated appointment booking and follow-up systems on WhatsApp to manage patient flow efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Existing Components Refitted */}
            <DoctorsWeWorkWith />
            <Testimonials />

            {/* 6. Custom FAQ & Booking */}
            <FAQ customFaqs={morbiFaqs} />
            <Booking />
        </main>
    );
}
