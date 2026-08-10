import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    Calendar,
    Clock,
    User,
    Share2,
    CheckCircle2,
    TrendingUp,
    Star,
    Sparkles,
    ArrowRight,
    MessageSquare,
    PhoneCall,
    ShieldCheck,
    Globe,
    Video,
    Smartphone,
    Award,
    ChevronRight,
    Home,
    Search,
    BookOpen,
    BarChart3,
    HeartPulse,
    Activity,
    Stethoscope
} from 'lucide-react';

import { DoctorMarketingCalculator } from '@/components/interactive/DoctorMarketingCalculator';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
    title: "7 Proven Marketing Ideas for Doctors in Junagadh (2026 Guide) | Epsilon Technology",
    description: "Are you a doctor in Junagadh looking to increase OPD footfall? Learn 7 actionable digital marketing strategies — Local SEO, Gujarati Reels, WhatsApp OPD automation & GMB optimization.",
    keywords: [
        "Doctor Marketing Ideas Junagadh",
        "Clinic Marketing Junagadh",
        "Medical SEO Junagadh",
        "Hospital Marketing Zanzarda Road",
        "Gynecologist Marketing Junagadh",
        "Orthopedic Doctor SEO Junagadh"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/doctor-marketing-ideas-junagadh/',
    },
    openGraph: {
        title: "7 Proven Marketing Ideas for Doctors in Junagadh (2026 Guide)",
        description: "Grow your medical practice in Junagadh with specialized digital marketing strategies tailored for local patients.",
        url: 'https://epsilon-technology.com/blog/doctor-marketing-ideas-junagadh/',
        type: 'article',
        publishedTime: '2026-01-15T10:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/doctor_marketing_ideas_junagadh_featured.png',
            width: 1200,
            height: 675,
            alt: '7 Marketing Ideas for Doctors in Junagadh'
        }],
    }
};

const junagadhFaqs = [
    {
        question: "Why do doctors in Junagadh need specialized digital marketing in 2026?",
        answer: "Healthcare in Junagadh is growing rapidly with new hospitals opening on Zanzarda Road, Moti Baug, and Kalwa Chowk. Relying only on traditional word-of-mouth is no longer enough. Over 80% of patients now search on Google Maps or Instagram before choosing a clinic or specialist."
    },
    {
        question: "How long does it take for a clinic in Junagadh to see results from Local SEO?",
        answer: "Google My Business (GMB) optimization and local map ranking updates typically start showing increased phone calls and OPD directions within 30 to 45 days. High-intent search rankings for terms like 'Best Gynecologist in Junagadh' build compound growth over 3 to 6 months."
    },
    {
        question: "Is social media marketing suitable for medical ethics and doctor guidelines?",
        answer: "Yes, absolutely! Ethical medical marketing focuses on patient education, health awareness, symptom prevention, and authentic clinic facility showcases rather than aggressive commercial selling. This builds high trust and adheres strictly to professional ethics."
    },
    {
        question: "Do you offer on-site video shoots for clinics in Junagadh?",
        answer: "Yes! Epsilon Technology is headquartered locally. Our media team visits your clinic in Junagadh to shoot crisp Gujarati health educational reels, facility walkthroughs, and doctor introduction videos."
    }
];

export default function DoctorMarketingIdeasJunagadhPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "7 Proven Marketing Ideas for Doctors in Junagadh (2026 Guide)",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "CEO & Founder",
                    "worksFor": { "@type": "Organization", "name": "Epsilon Technology" }
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com",
                    "logo": "https://epsilon-technology.com/logo.webp"
                },
                "datePublished": "2026-01-15",
                "dateModified": "2026-08-10",
                "mainEntityOfPage": "https://epsilon-technology.com/blog/doctor-marketing-ideas-junagadh/",
                "image": "https://epsilon-technology.com/doctor_marketing_ideas_junagadh_featured.png",
                "description": "Learn 7 actionable digital marketing strategies for doctors and hospital owners in Junagadh to double OPD inquiries, build patient trust, and dominate Google Maps."
            },
            {
                "@type": "FAQPage",
                "mainEntity": junagadhFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Answer: " + faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <main className="bg-white min-h-screen text-slate-900 selection:bg-sky-100 selection:text-sky-900">
                {/* Scroll Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100/50 backdrop-blur-sm z-[100]">
                    <div className="h-full bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-600 w-full animate-pulse" />
                </div>

                {/* Breadcrumbs */}
                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest overflow-x-auto">
                            <Link href="/" className="hover:text-sky-600 transition-colors flex items-center gap-1 shrink-0">
                                <Home size={12} /> Home
                            </Link>
                            <ChevronRight size={10} className="shrink-0" />
                            <Link href="/blog" className="hover:text-sky-600 transition-colors shrink-0">
                                Blog
                            </Link>
                            <ChevronRight size={10} className="shrink-0" />
                            <span className="text-slate-600 truncate">7 Marketing Ideas for Doctors in Junagadh</span>
                        </nav>
                    </div>
                </div>

                {/* Article Header Section */}
                <header className="relative pt-12 pb-16 bg-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/60 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/3" />

                    <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-sky-200">
                                Local Healthcare Marketing
                            </span>
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                <MapPin size={14} className="text-sky-600" /> Junagadh Special
                            </span>
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                <Clock size={14} className="text-sky-600" /> 7 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                            7 Proven Marketing Ideas for Doctors in Junagadh <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">(2026 Guide)</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                            Running a clinic or hospital in Junagadh is becoming increasingly competitive. Learn how top specialists on Zanzarda Road, Moti Baug, and Kalwa Chowk are doubling their monthly OPD footfall.
                        </p>

                        {/* Author Info & Share Bar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 border-y border-slate-100 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-lg">
                                    <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-sky-600 text-xl">
                                        JK
                                    </div>
                                </div>
                                <div>
                                    <div className="font-extrabold text-slate-900 text-base">Jaydeep Kataria</div>
                                    <div className="text-xs font-semibold text-slate-500 flex items-center gap-3 mt-0.5">
                                        <span>Founder & CEO, Epsilon Technology</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> Updated Aug 2026</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 hidden sm:inline">Share:</span>
                                <button className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-600 text-slate-600 text-xs font-bold transition-all flex items-center gap-1.5">
                                    <Share2 size={14} /> Share Article
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 group">
                        <Image
                            src="/doctor_marketing_ideas_junagadh_featured.png"
                            alt="7 Marketing Ideas for Doctors in Junagadh"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-slate-900 text-xs font-extrabold flex items-center gap-2 shadow-lg">
                                <ShieldCheck size={16} className="text-emerald-600" />
                                <span>Verified Junagadh Doctor Growth Blueprint</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Container */}
                <div className="container mx-auto px-4 md:px-6 max-w-5xl pb-24">
                    {/* Executive Summary Box */}
                    <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-sky-50/80 via-indigo-50/40 to-white border border-sky-100 shadow-sm mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 text-sky-200/50 -rotate-12 pointer-events-none">
                            <Stethoscope size={100} strokeWidth={1} />
                        </div>
                        <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="text-sky-600" size={22} /> Key Takeaway for Junagadh Medical Practitioners
                        </h2>
                        <p className="text-slate-700 text-base leading-relaxed font-medium">
                            Patients in Junagadh no longer open phone directories — they search Google Maps for <strong>&quot;Best Doctor Near Me&quot;</strong> and watch short Gujarati reels on Instagram to evaluate clinic cleanliness, doctor demeanor, and patient testimonials before making an appointment. Implementing these 7 strategies will position your practice at the top of local searches.
                        </p>
                    </div>

                    {/* Interactive Calculator Section */}
                    <section className="mb-20">
                        <DoctorMarketingCalculator />
                    </section>

                    {/* Deep Dive into the 7 Marketing Ideas */}
                    <section className="space-y-16">
                        <div className="border-b border-slate-100 pb-4">
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                7 Actionable Marketing Strategies for Your Clinic
                            </h2>
                            <p className="text-slate-500 text-sm font-medium mt-1">
                                Step-by-step breakdown designed specifically for Junagadh&apos;s healthcare landscape.
                            </p>
                        </div>

                        {/* Idea 1 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-sky-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-sky-200">
                                    01
                                </span>
                                <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <MapPin size={12} /> High Priority Impact
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                1. Dominate Google Maps (Google Business Profile)
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                When a patient in Junagadh experiences sudden knee pain or fever, their first instinct is to search Google Maps for <em>&quot;Orthopedic doctor near me&quot;</em> or <em>&quot;Pediatrician in Junagadh&quot;</em>. If your Google Business Profile isn&apos;t ranking in the <strong>Top 3 Local Map Pack</strong>, you are losing up to 70% of potential walk-ins.
                            </p>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 mb-6">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">GMB Optimization Checklist for Junagadh Clinics</h4>
                                {[
                                    "Pin your clinic's exact GPS location (specify landmarks like Near Kalwa Chowk, Zanzarda Road, or Moti Baug).",
                                    "Consistently request happy patients to scan a QR code at your reception to leave 5-star Google Reviews.",
                                    "Upload high-resolution photos of your clean waiting area, modern consultation room, and operation theater.",
                                    "Keep OPD timings, emergency contact numbers, and festival holiday closures updated 100% accurately."
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Idea 2 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                                    02
                                </span>
                                <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <Video size={12} /> Social Media Reach
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                2. Create Short Gujarati Educational Reels
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Junagadh audiences connect best when doctors speak naturally in <strong>Gujarati</strong>. Instead of formal medical jargon or plain English text posts, publish short 30-to-45-second Instagram Reels answering common local health questions.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100">
                                    <span className="text-xs font-extrabold text-sky-700 uppercase tracking-wider block mb-2">High-Performing Content Ideas</span>
                                    <ul className="text-xs font-semibold text-slate-700 space-y-2">
                                        <li>• &quot;Monsoon Infections in Junagadh: 3 Home Remedies&quot;</li>
                                        <li>• &quot;5 Warning Signs of Knee Arthritis You Shouldn&apos;t Ignore&quot;</li>
                                        <li>• &quot;What to Expect During Your First Pregnancy Scan&quot;</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                                    <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider block mb-2">The Golden Rule</span>
                                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                                        Educate first, never hard-sell. When you empower local families with honest health knowledge, they automatically choose you as their trusted family specialist.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Idea 3 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                                    03
                                </span>
                                <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <Smartphone size={12} /> Patient Conversion
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                3. Implement WhatsApp OPD & Appointment Automation
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Almost every patient family in Junagadh relies on WhatsApp daily. Busy reception phone lines frustrate patients. Deploying an official <strong>WhatsApp Business API chatbot</strong> allows patients to book slots, request OPD timings, or view location maps instantly.
                            </p>

                            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mb-1">WhatsApp Automation Benefits</span>
                                    <p className="text-sm font-semibold text-slate-300">
                                        Automated SMS/WhatsApp reminders cut patient no-shows by up to <strong className="text-white">40%</strong> and free up your reception staff.
                                    </p>
                                </div>
                                <div className="shrink-0 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-xl">
                                    Instant OPD Booking Flow
                                </div>
                            </div>
                        </div>

                        {/* Idea 4 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-amber-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-amber-200">
                                    04
                                </span>
                                <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <Search size={12} /> Hyper-Local SEO
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                4. Target Hyper-Local Keywords (&quot;Near Zanzarda Road&quot;)
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Generic keywords like <em>&quot;Doctor in India&quot;</em> are useless for a local clinic. Patients search with granular local intent, such as <strong>&quot;Hospital near Zanzarda Road Junagadh&quot;</strong> or <strong>&quot;Skin specialist near Kalwa Chowk&quot;</strong>. Optimizing your website for these exact phrases delivers ready-to-visit patients.
                            </p>
                        </div>

                        {/* Idea 5 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-purple-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-purple-200">
                                    05
                                </span>
                                <span className="px-3 py-1 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <HeartPulse size={12} /> Social Proof
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                5. Record Video Patient Testimonials
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Nothing builds trust faster than hearing a real Junagadh resident share their healing story. Record brief 45-second video reviews (with patient consent) after successful treatments or surgeries. Share these on Google Business Profile, Instagram, and your clinic website.
                            </p>
                        </div>

                        {/* Idea 6 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                    06
                                </span>
                                <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <Globe size={12} /> Community Reach
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                6. Engage Healthcare Decision Makers on Facebook
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                While younger audiences hang out on Instagram, senior family members and parents in Junagadh active in healthcare decisions use Facebook daily. Announce free health checkup camps, OPD schedule changes, and festive wellness advice on a dedicated Facebook page.
                            </p>
                        </div>

                        {/* Idea 7 */}
                        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md hover:border-sky-300 transition-all">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-teal-200">
                                    07
                                </span>
                                <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold rounded-full flex items-center gap-1">
                                    <BarChart3 size={12} /> Digital Infrastructure
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                7. Build a Lightning-Fast, Mobile-First Website
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Your website is your digital hospital reception desk. If it takes longer than 3 seconds to load on mobile 4G networks, over 50% of visitors press the back button. Ensure your site features click-to-call buttons, clear doctor qualifications, treatment details, and a seamless appointment form.
                            </p>
                        </div>
                    </section>

                    {/* Local Junagadh Healthcare Hubs Callout */}
                    <section className="my-20 p-8 sm:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="relative z-10 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs uppercase tracking-widest mb-4">
                                Local Expertise Matters
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-extrabold mb-6 tracking-tight">
                                We Know Junagadh&apos;s Healthcare Ecosystem Inside Out
                            </h3>
                            <p className="text-slate-300 text-base leading-relaxed mb-8">
                                Whether your clinic is on <strong>Zanzarda Road</strong>, near <strong>Moti Baug</strong>, or close to <strong>Kalwa Chowk</strong>, Epsilon Technology delivers tailor-made marketing campaigns designed for Junagadh&apos;s unique patient demographics.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 border-t border-slate-800 pt-8">
                                <div>
                                    <span className="text-2xl font-black text-sky-400">100%</span>
                                    <p className="text-xs font-bold text-slate-400 mt-1">Junagadh Based Team</p>
                                </div>
                                <div>
                                    <span className="text-2xl font-black text-emerald-400">+45%</span>
                                    <p className="text-xs font-bold text-slate-400 mt-1">Avg OPD Increase</p>
                                </div>
                                <div>
                                    <span className="text-2xl font-black text-amber-400">Top 3</span>
                                    <p className="text-xs font-bold text-slate-400 mt-1">Google Map Rankings</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="my-20">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 font-medium text-sm">
                                Clear answers for doctors and hospital administrators in Junagadh.
                            </p>
                        </div>
                        <FAQ customFaqs={junagadhFaqs} />
                    </section>

                    {/* Author Box */}
                    <div className="mt-20 p-8 sm:p-12 rounded-[36px] bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-8">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 shrink-0 shadow-xl">
                            <div className="w-full h-full rounded-[20px] bg-white flex items-center justify-center font-black text-sky-600 text-3xl">
                                JK
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-black text-sky-600 uppercase tracking-widest block mb-1">Article Author</span>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-2">Jaydeep Kataria</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                                Founder at Epsilon Technology. Specializing in healthcare digital transformation, Local SEO, and software solutions for medical professionals across Gujarat.
                            </p>
                            <Link href="/contacts" className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1">
                                Book a 1-on-1 Consultation with Jaydeep <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* High-Converting Final Call to Action */}
                    <section className="mt-20 p-10 sm:p-14 rounded-[40px] bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-700 text-white text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest inline-block mb-6">
                                Free Audit Offer for Junagadh Doctors
                            </span>
                            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
                                Ready to Double Your OPD Patient Inquiries?
                            </h3>
                            <p className="text-sky-100 text-base sm:text-lg mb-10 leading-relaxed">
                                Get a complimentary <strong>Google Maps & Clinic SEO Audit</strong> tailored for your specialty in Junagadh. No obligation.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contacts"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-sky-700 hover:bg-sky-50 rounded-2xl font-extrabold text-base transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
                                >
                                    <PhoneCall size={18} />
                                    <span>Claim Free Clinic Audit</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/doctor-marketing-in-junagadh"
                                    className="w-full sm:w-auto px-8 py-4 bg-sky-800/60 hover:bg-sky-800 border border-white/20 text-white rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Explore Doctor Marketing Services</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
