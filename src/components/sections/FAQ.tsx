'use client';

import { motion } from "framer-motion";

const defaultFaqs = [
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
        answer: "Depending on your plan: custom posts, reels, ad campaigns, WhatsApp automation, Instagram stories, hashtag strategy, bi-weekly performance reports, and a dedicated account manager. See our pricing section above for full details."
    }
];

interface FAQProps {
    customFaqs?: Array<{ question: string; answer: string; }>;
}

export function FAQ({ customFaqs }: FAQProps) {
    const data = customFaqs || defaultFaqs;

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="faq">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about growing your medical practice.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {data.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="border border-slate-200 bg-white rounded-xl px-6 py-6 shadow-sm"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
