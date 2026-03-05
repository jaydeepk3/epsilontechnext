'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Data ───────────────────────────────────────────────────────────────────

const proofNumbers = [
    { value: "1.1M+", label: "Reel Views" },
    { value: "50+", label: "Doctors Served" },
    { value: "4 Countries", label: "India · UAE · UK · USA" },
];

const testimonials = [
    {
        quote: "Working with Epsilon for 2 years. Patient inquiries went up significantly after they started managing our reels.",
        author: "Dr. D.P. Vora",
        role: "Orthopaedic Surgeon, Gujarat",
        initials: "DV",
        result: "📈 Result: 40+ monthly inquiries from Instagram"
    },
    {
        quote: "Epsilon's team gave very accurate approach and good ideas. Within 45 days we started getting direct WhatsApp inquiries from social media.",
        author: "Healthcare Physiotherapy Clinic",
        role: "Physiotherapy Clinic, Gujarat",
        initials: "HP",
        result: "📈 Result: Direct WhatsApp inquiries daily within 45 days"
    },
    {
        quote: "Epsilon Technology helped our hospital scale patient footfall like never before. Highly recommend for social media & website development.",
        author: "Devam Dave",
        role: "Shreeji Multispecialty Hospital",
        initials: "DD",
        result: "📈 Result: OPD visits increased 3x in 60 days"
    },
];

const faqs = [
    {
        question: "Do you work with doctors outside India?",
        answer: "Yes. We serve doctors in India, UAE, UK, and USA. Our strategies are adapted for each market — local language, cultural tone, platform preferences, and healthcare norms. Book a free call and we'll tell you what works in your city."
    },
    {
        question: "Why should I hire a specialized doctor marketing company?",
        answer: "Generic agencies don't understand medical ethics, patient psychology, or healthcare regulations. We work exclusively with doctors and know exactly what content builds trust — and what destroys it. Every post is medically safe and professionally worded."
    },
    {
        question: "How is your approach different from other agencies?",
        answer: "Most agencies chase followers and likes. We chase patient inquiries and OPD footfall. Every strategy is tied to one goal: getting real people to book appointments at your clinic."
    },
    {
        question: "Do you guarantee results?",
        answer: "We don't guarantee specific numbers because results depend on your specialty, city, and competition. What we guarantee is a proven system, transparent bi-weekly reporting, and a strategy that has worked for 50+ doctors across multiple countries."
    },
    {
        question: "Is this service suitable for small clinics?",
        answer: "Yes. Even 10–15 new patients/month can be transformational for a solo practitioner. Our Visibility Booster plan is built exactly for this. We've helped small clinics in smaller cities achieve consistent patient flow within 60 days."
    },
    {
        question: "What is included in the service?",
        answer: "Depending on your plan: custom posts, reels, ad campaigns, WhatsApp automation, Instagram stories, hashtag strategy, bi-weekly performance reports, and a dedicated account manager."
    }
];

// ─── Lead Form ───────────────────────────────────────────────────────────────

function LeadForm({ compact = false }: { compact?: boolean }) {
    const [formData, setFormData] = useState({ whatsapp: '', specialty: '', city: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mobile: formData.whatsapp,
                    specialty: formData.specialty,
                    city: formData.city,
                    name: '',
                    clinic: '',
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ whatsapp: '', specialty: '', city: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={`text-center py-8 ${compact ? '' : 'max-w-md mx-auto'}`}>
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Request Received!</h3>
                <p className="text-slate-600">We'll contact you on WhatsApp within 4 hours. Get ready to grow your clinic!</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : 'max-w-md mx-auto'}`}>
            <input
                type="tel"
                name="whatsapp"
                placeholder="📱 Your WhatsApp Number *"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
            <input
                type="text"
                name="specialty"
                placeholder="🩺 Your Specialty (e.g. Orthopedic, Pediatric)"
                required
                value={formData.specialty}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
            <input
                type="text"
                name="city"
                placeholder="📍 Your City & Country"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-70"
            >
                {status === 'loading' ? 'Sending...' : 'Book My Free Growth Call →'}
            </button>
            {status === 'error' && (
                <p className="text-center text-sm text-red-500">Something went wrong. Please WhatsApp us directly.</p>
            )}
            <p className="text-center text-xs text-slate-400">
                🔒 No spam. We reply on WhatsApp within 4 hours. Available for doctors worldwide.
            </p>
        </form>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DoctorMarketingLandingPage() {
    return (
        <div className="font-sans">

            {/* ── Urgency Banner ─────────────────────────────────────── */}
            <div className="bg-yellow-400 text-black text-center py-2 px-4 text-sm font-semibold sticky top-0 z-50">
                ⚡ We only onboard a limited number of new doctors each month —{' '}
                <a href="#contact" className="underline font-bold">Check availability for your city →</a>
            </div>

            {/* ── 1. Hero ────────────────────────────────────────────── */}
            <section className="relative pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/60 blur-3xl rounded-full translate-x-1/3" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-teal-50/60 blur-3xl rounded-full -translate-x-1/3" />

                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8"
                    >
                        <CheckCircle size={15} />
                        <span>Exclusively for Doctors &amp; Healthcare Professionals</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]"
                    >
                        Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">30–50 New Patient Inquiries</span>/Month from Instagram &amp; Facebook
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Done-for-you Instagram &amp; Facebook marketing for doctors —{' '}
                        <strong>wherever your clinic is located.</strong> No contracts. Results in 30 days.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/30"
                        >
                            Book Free Strategy Call <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://wa.me/918160881461"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-green-600 transition-all active:scale-95 shadow-lg shadow-green-500/30"
                        >
                            <MessageCircle size={20} />
                            WhatsApp Us Now
                        </a>
                    </motion.div>
                    <p className="text-red-500 text-sm font-medium">
                        ⏳ Free strategy call available for this week only
                    </p>
                </div>
            </section>

            {/* ── 2. Proof Numbers ───────────────────────────────────── */}
            <section className="py-10 bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
                    {proofNumbers.map((item, i) => (
                        <div key={i} className="flex-1 text-center py-4 sm:py-0">
                            <div className="text-3xl md:text-4xl font-bold text-white">{item.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 3. Lead Form ───────────────────────────────────────── */}
            <section id="contact" className="py-16 px-4 bg-white">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Book Your Free Strategy Call
                        </h2>
                        <p className="text-slate-500">Takes 30 seconds. We'll call you back on WhatsApp.</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                        <LeadForm />
                    </div>
                </div>
            </section>

            {/* ── 4. Testimonials ────────────────────────────────────── */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
                        What Doctors Say After Working With Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, si) => (
                                        <Star key={si} size={14} className="fill-orange-400 text-orange-400" />
                                    ))}
                                </div>

                                <div className="relative mb-4 flex-1">
                                    <Quote className="absolute -top-1 -left-1 text-slate-100 w-8 h-8 transform -scale-x-100" />
                                    <p className="text-slate-700 text-sm leading-relaxed italic relative z-10">
                                        &quot;{t.quote}&quot;
                                    </p>
                                </div>

                                {/* Result Badge */}
                                <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 inline-block w-fit">
                                    {t.result}
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm leading-tight">{t.author}</h4>
                                        <p className="text-slate-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. FAQ ─────────────────────────────────────────────── */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="border border-slate-200 bg-white rounded-xl px-6 py-5 shadow-sm"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <p className="text-slate-500 mb-4">Still have questions?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-base px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all"
                            >
                                Book Free Strategy Call <ArrowRight size={18} />
                            </a>
                            <a
                                href="https://wa.me/918160881461"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-base px-6 py-3.5 rounded-xl hover:bg-green-600 transition-all"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
