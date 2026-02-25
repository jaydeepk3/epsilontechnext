import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MapPin, TrendingUp, Users } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';
import Link from 'next/link';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Junagadh | Grow Your Clinic with Epsilon Technology",
    description: "Specialized doctor marketing agency in Junagadh. We help doctors and clinics increase OPD footfall, build trust, and rank locally.",
    keywords: ["Doctor Marketing in Junagadh", "Clinic Marketing Junagadh", "Medical Marketing Agency Junagadh", "Hospital Marketing Junagadh", "SEO for Doctors Junagadh"],
    openGraph: {
        title: "Doctor Marketing in Junagadh | Epsilon Technology",
        description: "Grow your medical practice in Junagadh with specialized marketing strategies.",
        url: "https://epsilon-technology.com/doctor-marketing-in-junagadh/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: '/doctor-marketing-in-junagadh/',
    }
};

const junagadhFaqs = [
    {
        question: "Why do Junagadh doctors need specialized marketing?",
        answer: "Junagadh's healthcare market is growing rapidly. With new clinics opening, relying solely on word-of-mouth is no longer enough. Specialized marketing helps you stand out in the local Junagadh community and ensures patients find YOU when they search for treatment."
    },
    {
        question: "Can you help me rank for 'Best Doctor in Junagadh'?",
        answer: "Yes. Our Local SEO strategies are designed specifically to improve your visibility on Google Maps and Search for local queries like 'Best Gynecologist in Junagadh' or 'Orthopedic Surgeon near Moti Baug'."
    },
    {
        question: "I have a clinic in Junagadh. How fast can I see results?",
        answer: "For local campaigns in Junagadh, we typically see an increase in inquiries within the first 30-45 days. Our 'Junagadh Growth' framework focuses on quick wins like Google My Business optimization and localized Instagram ads."
    },
    {
        question: "Do you visit the clinic for content creation?",
        answer: "Yes! For our Junagadh clients, we offer on-site video shoots. Our team visits your clinic to film high-quality reels, patient testimonials, and facility tours to build authentic trust with local patients."
    }
];

export default function DoctorMarketingJunagadh() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Localized Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-50/50 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 font-bold text-sm mb-8">
                        <MapPin size={16} />
                        <span> #1 Doctor Marketing Agency in Junagadh</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-orange-600">Junagadh</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Junagadh's top doctors and hospitals get more local patients using proven digital strategies. Stop relying on referrals alone.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200">
                            Book Free Strategy Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Content Section: Why Marketing Matters */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Marketing Matters for Junagadh Doctors</h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            In a growing city like <strong>Junagadh</strong>, healthcare services are evolving rapidly. With more multi-specialty hospitals and clinics opening their doors near areas like Moti Baug, Zanzarda Road, and Kalwa Chowk, competition is increasing.
                        </p>
                        <p className="mb-6">
                            Simply being a qualified medical professional is no longer enough to reach and retain patients. Patients in Junagadh are now searching online before visiting a doctor. If your clinic doesn't show up on Google or Instagram, you are losing patients to competitors who do.
                        </p>
                        <p>
                            That’s where specific <strong>Doctor Marketing in Junagadh</strong> comes in. It’s not just about advertising—it’s about building trust with the local community.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Who Benefits Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Needs Doctor Marketing in Junagadh?</h2>
                        <p className="text-slate-600">Tailored strategies for every type of medical professional.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "General Practitioners", desc: "Stand out in your locality and become the family doctor of choice for nearby residents." },
                            { title: "Multi-specialty Hospitals", desc: "Promote diverse departments like Orthopedics, Gynecology, and Pediatrics effectively." },
                            { title: "Specialists", desc: "Dermatologists, Dentists, and Surgeons need to build authority so patients choose them over traveling to Rajkot/Ahmedabad." },
                            { title: "New Clinics", desc: "New in Junagadh? Get immediate visibility and jumpstart your patient flow." },
                            { title: "Dentists", desc: "Compete effectively against the many dental clinics in Junagadh by showcasing results and hygiene." },
                            { title: "Pediatricians", desc: "Build trust with parents who are looking for the best care for their children." }
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Essential Marketing Services for Junagadh</h2>

                    <div className="grid gap-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Local SEO & Google My Business</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    When someone in Junagadh searches for "Eye Specialist near me", your clinic MUST appear in the top 3 map results. We optimize your GMB profile, manage reviews, and ensure accurate location data to drive footfall.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-pink-50 p-4 rounded-xl text-pink-600 shrink-0">
                                <TrendingUp size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Instagram Reels & Video Marketing</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Junagadh audiences love video content. We help you create educational reels (in Gujarati or English) that answer common patient questions. This builds immense trust before the patient even enters your clinic.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-green-50 p-4 rounded-xl text-green-600 shrink-0">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Patient Trust & Reputation Management</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We help you gather and showcase genuine 5-star reviews from happy patients. Positive feedback is the #1 Driver for new appointments in a close-knit city like Junagadh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Related Blog Post */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Want specific ideas for your clinic?</h2>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                        Read our latest guide: "7 Proven Marketing Ideas for Doctors in Junagadh (2025)" to learn actionable strategies you can start today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/blog/doctor-marketing-ideas-junagadh">
                            <Button size="xl" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                                Read 7 Marketing Ideas
                            </Button>
                        </Link>
                        <Link href="/digital-marketing-for-doctors-in-junagadh">
                            <Button size="xl" variant="outline" className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                                View Local Guide
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Existing Components Refitted */}
            <DoctorsWeWorkWith />
            <Testimonials />

            {/* 6. Custom FAQ & Booking */}
            <FAQ customFaqs={junagadhFaqs} />
            <Booking />
        </main>
    );
}
