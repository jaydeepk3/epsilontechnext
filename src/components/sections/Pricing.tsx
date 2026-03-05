'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Visibility Booster",
        startingPrice: "Starting from ₹4,999/month",
        price: "₹7,999",
        originalPrice: "₹9,000",
        period: "/month",
        description: "Perfect for doctors starting their digital journey.",
        features: [
            "6 Custom Instagram Images/Carousels",
            "2 Edited Reels",
            "Profile Bio, Highlights & Grid Revamp",
            "Local Growth Strategy + Hashtag Research",
            "Scheduled Posting + Monthly Performance Check-In"
        ],
        highlight: false,
        badge: null
    },
    {
        name: "Engagement & Reach Accelerator",
        startingPrice: "Starting from ₹8,999/month",
        price: "₹9,999",
        originalPrice: "₹11,000",
        period: "/month",
        description: "For clinics wanting aggressive local growth.",
        features: [
            "8 Custom Posts",
            "4 Viral-Style Reels",
            "Smart Ad Boosting",
            "Instagram Stories + CTAs for DM triggers",
            "Bi-weekly Report & Strategic Insights"
        ],
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Lead Gen Machine",
        startingPrice: "Starting from ₹14,999/month",
        price: "₹14,999",
        originalPrice: "₹17,000",
        period: "/month",
        description: "Full-stack marketing for maximum appointments.",
        features: [
            "10 High-Converting Posts",
            "6 Offer-Based & Educational Reels",
            "2 Local Video Shoots (or guided online shoots)",
            "WhatsApp/DM Automation Funnel Setup",
            "Bi-weekly Growth + Lead Tracking Reports"
        ],
        highlight: false,
        badge: null
    }
];

export function Pricing() {
    return (
        <section className="py-24 bg-slate-50" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600">No hidden fees. Cancel anytime.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col ${plan.highlight
                                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                                : 'bg-white text-slate-900 shadow-sm border border-slate-200 hover:shadow-xl'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {plan.badge}
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-2 text-center ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>

                            {/* Starting price — the key conversion fix */}
                            <p className={`text-center text-sm font-semibold mb-6 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                {plan.startingPrice}
                            </p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-green-500'}`} />
                                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-slate-200/20 pt-6 mt-auto text-center">
                                <Button
                                    variant={plan.highlight ? 'primary' : 'outline'}
                                    className="w-full"
                                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get Started — Check My City&apos;s Availability
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom plan note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-slate-500">
                        Serving doctors across India 🇮🇳 · UAE 🇦🇪 · UK 🇬🇧 · USA 🇺🇸 —{' '}
                        Custom plans available for your city &amp; specialty.{' '}
                        <a href="#contact" className="text-blue-600 underline font-medium">Talk to us →</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
