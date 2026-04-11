'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    CheckCircle2, 
    Instagram, 
    Facebook, 
    MessageCircle, 
    TrendingUp, 
    Users, 
    Zap, 
    ShieldCheck, 
    ArrowRight, 
    Video, 
    Target,
    PhoneCall,
    Star,
    MapPin,
    ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';
import { Pricing } from '@/components/sections/Pricing';
import { Results } from '@/components/sections/Results';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

interface DoctorCityLandingProps {
    city: string;
    cityDescription: string;
}

export default function DoctorCityLanding({ city, cityDescription }: DoctorCityLandingProps) {
    const citySlug = city.toLowerCase();
    
    const pageKeywords = [
        `doctor marketing ${citySlug}`,
        `digital marketing for doctors ${citySlug}`,
        `social media for doctors ${citySlug}`
    ];

    const specializedFaqs = [
        {
            question: `Why do ${city} doctors need specialized digital marketing in 2026?`,
            answer: `With the rapid growth of healthcare in ${city}, patient behavior has shifted. Most patients in ${city} search for "best specialists" on Google or look for educational content on Instagram before booking an appointment. Our strategies ensure you are the first choice they see when they search for care in your area.`
        },
        {
            question: "How do you consistently generate 30–50 patient inquiries/month?",
            answer: "We use a 'High-Trust Funnel' approach. By combining educational Instagram reels with targeted Facebook Ads and a WhatsApp inquiry setup, we don't just get you 'likes'; we get you direct inquiries from patients who are already convinced of your expertise."
        },
        {
            question: "What makes Epsilon Technology different from other digital marketing agencies?",
            answer: "We aren't a generic agency. Founded by Jaydeep Kataria, we specialize exclusively in doctor marketing. We understand medical ethics, patient psychology, and the technical nuances of healthcare service promotion. Plus, we focuses on inquiries, not just visibility."
        },
        {
            question: `Do you offer on-site video shoots for clinics in ${city}?`,
            answer: `Yes! For our premium clients in ${city}, we provide guided content creation sessions. Our team helps you script and film high-authority reels directly at your clinic, ensuring the Reels look professional and build real trust with your local ${city} audience.`
        },
        {
            question: "Can I manage my practice while you handle the marketing?",
            answer: "Absolutely. Our service is 'Done-For-You'. From content creation and ad management to inquiry funnel setup, we handle everything. You focus on your patients; we handle the growth engine."
        }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": `Epsilon Technology - Doctor Marketing in ${city}`,
                "image": "https://epsilon-technology.com/logo.png",
                "@id": `https://epsilon-technology.com/doctor-marketing-in-${citySlug}/#localbusiness`,
                "url": `https://epsilon-technology.com/doctor-marketing-in-${citySlug}/`,
                "telephone": "+918160881461",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Junagadh, Gujarat",
                    "addressLocality": city,
                    "addressRegion": "Gujarat",
                    "postalCode": "362001",
                    "addressCountry": "IN"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria"
                }
            },
            {
                "@type": "Service",
                "serviceType": "Digital Marketing for Doctors",
                "provider": {
                    "@id": "https://epsilon-technology.com/#organization"
                },
                "areaServed": {
                    "@type": "City",
                    "name": city
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Healthcare Marketing Plans",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clinic Starter" }, "price": "11999", "priceCurrency": "INR" },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement Accelerator" }, "price": "17999", "priceCurrency": "INR" },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Gen Machine" }, "price": "27999", "priceCurrency": "INR" }
                    ]
                }
            }
        ]
    };

    const whatsappLink = `https://wa.me/918160881461?text=Hi%20Jaydeep%2C%20I%20saw%20your%20landing%20page%20for%20doctors%20in%20${city}.%20I'm%20interested%20in%20growing%20my%20practice.`;

    return (
        <div className="bg-white overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
                <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-[100px] -z-10 animate-pulse" />
                
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Specialized {city} Healthcare Marketing
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
                        >
                            Doctor Marketing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">{city}</span> | Get 30–50 Patient Inquiries/Month
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed"
                        >
                            {cityDescription} We help doctors, surgeons, and specialists in {city} build a dominant personal brand and scale their OPD using viral Instagram reels and precision-targeted ad funnels.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <Link href={whatsappLink} target="_blank">
                                <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-200 group">
                                    Book Free Strategy Call <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-500 font-medium hidden sm:block">
                                Trusted by 50+ doctors <br />across Gujarat
                            </p>
                        </motion.div>
                        
                        {/* Stats Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-10 px-8 bg-white/40 backdrop-blur-xl border border-blue-50/50 rounded-[40px] shadow-sm"
                        >
                            {[
                                { label: "Patient Inquiries", value: "30–50", sub: "Avg. per month" },
                                { label: "Reel Views", value: "1.1M+", sub: "Recorded peak" },
                                { label: "Cities Served", value: "12+", sub: "Including " + city },
                                { label: "ROI Ratio", value: "5.5x", sub: "Avg. campaign return" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                                    <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">{stat.label}</div>
                                    <div className="text-xs text-slate-400">{stat.sub}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Problem/Solution Section --- */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Doctors in {city} Need <br />
                                <span className="text-blue-500 italic underline decoration-blue-500/30 font-serif">Digital Authority</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                {city} is a major healthcare hub. From multispecialty hospitals to private clinics, the competition is fierce. Traditional marketing is slow and expensive. Patients in {city} are no longer just looking for a doctor; they are looking for a <span className="text-white font-semibold">trusted specialist</span> they have already seen and heard online.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Break the referral-wait cycle",
                                    "Become the #1 authority in your locality",
                                    "Showcase your expertise via patient education",
                                    "Automate inquiry collection on WhatsApp"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/digital-marketing/" className="text-blue-400 font-bold flex items-center gap-2 hover:text-blue-300 transition-colors">
                                Explore Our Multi-Channel Strategy <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-600 rounded-2xl">
                                    <Target className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold italic">What We Do Differently</h3>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: Instagram, title: "Viral Reel Engine", desc: "We script and edit high-impact reels that position you as an expert, not a salesman." },
                                    { icon: Facebook, title: "Precision Medical Ads", desc: "No more vanity likes. We target patients in " + city + " actively searching for your specialty." },
                                    { icon: MessageCircle, title: "WhatsApp Inquiry Funnel", desc: "One-click inquiry system that puts patients directly into your assistant's chat." },
                                    { icon: ShieldCheck, title: "Medically Safe Content", desc: "Every word is reviewed for medical ethics and dignity. Your reputation is our priority." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="p-2 bg-blue-500/10 rounded-lg h-fit">
                                            <item.icon className="text-blue-500" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Results Section --- */}
            <Results />

            {/* --- Specialties Section --- */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">
                        Strategies for Every Specialty
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Orthopedic", sub: "Joint & Spine" },
                            { name: "Pediatric", sub: "Child Care" },
                            { name: "Cosmetologist", sub: "Skin & Hair" },
                            { name: "Surgeon", sub: "Advanced Surgery" },
                            { name: "Multispeciality", sub: "Hospital Scale" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[35px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Users className="text-blue-600" size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{item.name}</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-20 p-10 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white max-w-4xl mx-auto relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Want a Custom Strategy for Your Clinic in {city}?</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                            No two specialties are same. We build custom patient-acquisition roadmaps based on your specific practice type and competition level.
                        </p>
                        <Link href={whatsappLink} target="_blank">
                            <Button size="xl" className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 font-bold rounded-2xl">
                                Talk to Jaydeep Directly <PhoneCall className="ml-2 rotate-12" size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Pricing Section --- */}
            <Pricing />

            {/* --- Doctors & Testimonials --- */}
            <DoctorsWeWorkWith />

            {/* --- FAQ Section --- */}
            <FAQ customFaqs={specializedFaqs} />

            {/* --- Global CTA --- */}
            <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[50px] shadow-2xl shadow-blue-900/10 border border-slate-100 text-center">
                        <Star className="text-blue-600 mx-auto mb-8 fill-blue-600" size={48} />
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            Start Growing Your <br className="hidden md:block" />
                            Medical Practice in <span className="text-blue-600 italic">{city}</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop leaving your growth to chance. Partner with Epsilon Technology and transform your digital presence into a patient-generating machine.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={whatsappLink} target="_blank">
                                <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-300 transform transition hover:scale-105 active:scale-95">
                                    Apply for Strategy Session <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-400">
                           <Link href="/digital-marketing/" className="hover:text-blue-600 transition-colors">/digital-marketing/</Link>
                           <Link href="/digital-marketing-in-junagadh/" className="hover:text-blue-600 transition-colors">/digital-marketing-in-junagadh/</Link>
                           <span className="text-slate-300">Founded by Jaydeep Kataria</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-white border-t border-slate-100 italic text-center text-slate-400 text-sm">
                Part of the Epsilon Technology Healthcare Network. Specialised Marketing Solutions for {city} Doctors.
            </footer>
        </div>
    );
}
