'use client';

import { motion } from 'framer-motion';

const beforeAfterCards = [
    {
        before: "0 inquiries/month",
        after: "45 inquiries/month",
        timeline: "AFTER 60 DAYS",
        name: "Dr. Vora — Orthopaedic Surgeon, Gujarat"
    },
    {
        before: "Relying only on Practo",
        after: "Direct WhatsApp inquiries daily",
        timeline: "AFTER 60 DAYS",
        name: "Rainbow Pedia & Physio, Gujarat"
    },
    {
        before: "500 followers, no engagement",
        after: "1.1M reel views, 1400+ saves",
        timeline: "AFTER 90 DAYS",
        name: "Viral Reel Campaign"
    }
];

export function BeforeAfterResults() {
    return (
        <section id="results" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                    From Zero Online Presence → Fully Booked Clinic
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center text-slate-500 mb-10"
                >
                    Results from real doctors across different cities and specialties.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {beforeAfterCards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Before</div>
                            <div className="text-xl font-bold text-red-500 mb-4">{card.before}</div>

                            <div className="text-gray-400 my-2 text-sm font-medium">↓ Started with Epsilon ↓</div>

                            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{card.timeline}</div>
                            <div className="text-xl font-bold text-green-600 mb-4">{card.after}</div>

                            <div className="text-sm text-gray-500 mt-2 border-t border-slate-100 pt-3">{card.name}</div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-slate-500 mt-10 text-sm">
                    Results vary by city, specialty, and ad budget.{' '}
                    <a href="#contact" className="text-blue-600 underline">Book a free call to see what&apos;s possible for your clinic →</a>
                </p>
            </div>
        </section>
    );
}
