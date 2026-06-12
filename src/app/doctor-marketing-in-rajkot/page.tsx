import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MapPin, TrendingUp, Users } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Rajkot | Grow Your Clinic with Epsilon Technology",
    description: "Best doctor marketing agency in Rajkot. We help doctors and hospitals increase patient footfall, build brand authority, and rank locally.",
    keywords: ["Doctor Marketing in Rajkot", "Clinic Marketing Rajkot", "Medical Marketing Agency Rajkot", "Hospital Marketing Rajkot", "SEO for Doctors Rajkot"],
    openGraph: {
        title: "Doctor Marketing in Rajkot | Epsilon Technology",
        description: "Grow your medical practice in Rajkot with specialized marketing strategies.",
        url: "https://epsilon-technology.com/doctor-marketing-in-rajkot/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-rajkot/',
    }
};

const rajkotFaqs = [
    {
        question: "Why do Rajkot doctors need digital marketing?",
        answer: "Rajkot is a medical hub for Saurashtra. With patients coming from all over the region, you need to be visible not just locally but also to patients searching from nearby towns. Our strategies ensure you capture this wider audience."
    },
    {
        question: "Can you help me rank for 'Best Doctor in Rajkot'?",
        answer: "Absolutely. We specialize in Local SEO to get you ranked for high-intent keywords like 'Best Cardiologist in Rajkot' or 'Orthopedic Hospital on Kalavad Road'."
    },
    {
        question: "I have a clinic on 150ft Ring Road. How do you target local patients?",
        answer: "We use hyper-local targeting in our ads to reach people specifically in your vicinity (e.g., Kotecha Chowk, Nana Mava). We also optimize your Google Maps profile to dominate local search results."
    },
    {
        question: "Do you offer video shoots in Rajkot?",
        answer: "Yes! Our team visits your clinic in Rajkot to shoot professional reels, patient testimonials, and facility tours. High-quality video is essential for building trust in a competitive market like Rajkot."
    }
];

export default function DoctorMarketingRajkot() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Localized Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-purple-50/50 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-sm mb-8">
                        <MapPin size={16} />
                        <span> #1 Doctor Marketing Agency in Rajkot</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-indigo-600">Rajkot</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Rajkot's top specialists and hospitals attract more patients from across Saurashtra using proven digital strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200">
                            Book Free Strategy Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Content Section: Why Marketing Matters */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Marketing Matters for Rajkot Doctors</h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            <strong>Rajkot</strong> is the healthcare capital of Saurashtra. Patients travel from Junagadh, Jamnagar, and Morbi for specialized treatment. However, with hundreds of hospitals on <strong>Kalavad Road</strong> and <strong>150ft Ring Road</strong>, standing out is difficult.
                        </p>
                        <p className="mb-6">
                            Old methods like newspaper ads are losing effectiveness. Today's patients search Google for the "Best Doctor in Rajkot" before booking an appointment. If you aren't visible there, you are missing out on thousands of potential patients.
                        </p>
                        <p>
                            That’s where specific <strong>Doctor Marketing in Rajkot</strong> comes in. We position you as the authority in your specialty, ensuring patients choose you over the competition.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Who Benefits Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Needs Doctor Marketing in Rajkot?</h2>
                        <p className="text-slate-600">Tailored strategies for Rajkot's competitive medical landscape.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Super Specialists", desc: "Cardiologists, Neurologists, and Oncologists needing to reach patients from the entire Saurashtra region." },
                            { title: "Multi-specialty Hospitals", desc: "Promote your advanced facilities like contouring, robotic surgery, and ICU care." },
                            { title: "Cosmetic Surgeons", desc: "High-value treatments like hair transplants and plastic surgery rely heavily on Instagram visuals and trust." },
                            { title: "New Clinics", desc: "Opening on Ring Road? Get immediate visibility to fill your appointment book from Day 1." },
                            { title: "Dentists", desc: "Rajkot has many dental clinics. Stand out by showcasing your smile makeovers and painless treatments." },
                            { title: "IVF Centers", desc: "Build hope and trust with sensitive, educational content that connects with couples." }
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Essential Marketing Services for Rajkot</h2>

                    <div className="grid gap-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Dominating Local SEO</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    When someone types "Best Hospital in Rajkot", we ensure your brand appears first. We optimize for high-competition keywords relevant to your specialty.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-pink-50 p-4 rounded-xl text-pink-600 shrink-0">
                                <TrendingUp size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">High-End Video Production</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Rajkot audiences appreciate quality. We produce premium reels and interviews that position you as a thought leader, helping you justify premium consultation fees.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-green-50 p-4 rounded-xl text-green-600 shrink-0">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Referral Network Digitalization</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We help you digitize your referral network, making it easier for doctors in smaller towns to refer patients to your Rajkot hospital.
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
            <FAQ customFaqs={rajkotFaqs} />
            <Booking />
        </main>
    );
}
