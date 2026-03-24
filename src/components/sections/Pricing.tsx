'use client';

import { useState } from 'react';
import { Check, Zap, TrendingUp, Rocket, Building2, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Plan Data (Market-researched rates, India 2025) ────────────────────────

const plans = [
    {
        id: 'starter',
        icon: Zap,
        iconColor: 'text-sky-500',
        iconBg: 'bg-sky-50',
        name: 'Clinic Starter',
        tagline: 'Perfect for new or small clinics building their online presence',
        price: '₹11,999',
        originalPrice: '₹15,000',
        savingsLabel: 'Save ₹3,001',
        period: '/month',
        highlight: false,
        badge: null,
        accentGradient: 'from-sky-400 to-blue-500',
        features: [
            { text: '8 Custom Medical Posts / Carousels', bold: true },
            { text: '3 Professionally Edited Reels' },
            { text: 'Instagram + Facebook Profile Optimisation' },
            { text: 'Bio, Highlights & Grid Revamp' },
            { text: 'Local Hashtag & Growth Strategy' },
            { text: 'Scheduled Posting (3–4×/week)' },
            { text: 'Monthly Performance Report' },
            { text: 'Dedicated Account Manager' },
        ],
        cta: 'Start Growing My Clinic',
        ctaVariant: 'outline' as const,
        note: null,
    },
    {
        id: 'growth',
        icon: TrendingUp,
        iconColor: 'text-white',
        iconBg: 'bg-white/20',
        name: 'Engagement Accelerator',
        tagline: 'For established clinics targeting 30–50 new inquiries/month',
        price: '₹17,999',
        originalPrice: '₹22,000',
        savingsLabel: 'Save ₹4,001',
        period: '/month',
        highlight: true,
        badge: 'Most Popular',
        accentGradient: 'from-blue-600 to-indigo-600',
        features: [
            { text: '12 High-Converting Medical Posts', bold: true },
            { text: '5 Viral-Style Educational Reels', bold: true },
            { text: 'Instagram Stories + DM Trigger CTAs' },
            { text: 'WhatsApp Inquiry Funnel Setup' },
            { text: 'Bi-Weekly Strategy & Insights Report' },
            { text: 'Competitor Tracking (local area)' },
            { text: 'Priority Account Manager (48h response)' },
            { text: 'Google Business Profile Management' },
        ],
        cta: 'Start Getting More Patients',
        ctaVariant: 'primary' as const,
        note: '🔥 Most chosen by specialist doctors',
    },
    {
        id: 'leadgen',
        icon: Rocket,
        iconColor: 'text-orange-500',
        iconBg: 'bg-orange-50',
        name: 'Lead Gen Machine',
        tagline: 'Full-stack patient acquisition for maximum OPD growth',
        price: '₹27,999',
        originalPrice: '₹35,000',
        savingsLabel: 'Save ₹7,001',
        period: '/month',
        highlight: false,
        badge: 'Best Value',
        accentGradient: 'from-orange-400 to-rose-500',
        features: [
            { text: '16 Premium Posts + Carousel Infographics', bold: true },
            { text: '8 Offer-Based & Educational Reels', bold: true },
            { text: '2 Local Video Shoots (or guided online)', bold: true },
            { text: 'Full Meta Ads Management (₹8,000 ad budget incl.)' },
            { text: 'WhatsApp / DM Automation Funnel' },
            { text: 'Lead Capture Landing Page' },
            { text: 'Weekly Growth + Lead Tracking Reports' },
            { text: 'Reputation & Review Management' },
            { text: 'SEO-Optimised Health Blog (1 post/month)' },
            { text: 'Dedicated Sr. Account Manager' },
        ],
        cta: 'Get Maximum Patient Flow',
        ctaVariant: 'outline' as const,
        note: null,
    },
    {
        id: 'hospital',
        icon: Building2,
        iconColor: 'text-violet-500',
        iconBg: 'bg-violet-50',
        name: 'Hospital / Multi-Specialty',
        tagline: 'Custom growth engine for hospitals, chains & multi-doctor setups',
        price: 'Custom',
        originalPrice: null,
        savingsLabel: null,
        period: '',
        highlight: false,
        badge: 'Enterprise',
        accentGradient: 'from-violet-500 to-purple-600',
        features: [
            { text: 'Unlimited Posts & Reels for all departments', bold: true },
            { text: 'Dedicated Content Team (2 creators)' },
            { text: 'Full Meta + Google Ads Management' },
            { text: 'Multi-Branch Social Media Strategy' },
            { text: 'Doctor Personal Branding (per doctor)' },
            { text: 'Press & PR Content Strategy' },
            { text: 'CRM + Lead Pipeline Integration' },
            { text: 'Monthly Strategy Board Call with CMO' },
            { text: 'Quarterly Growth Audit & Roadmap' },
        ],
        cta: 'Request Custom Quote',
        ctaVariant: 'outline' as const,
        note: null,
    },
];

const comparisonItems = [
    { label: 'Custom Medical Posts/month', starter: '8', growth: '12', leadgen: '16', hospital: 'Unlimited' },
    { label: 'Reels/month', starter: '3', growth: '5', leadgen: '8', hospital: 'Unlimited' },
    { label: 'Meta Ad Management', starter: '—', growth: '✓ ₹3K budget', leadgen: '✓ ₹8K budget', hospital: '✓ Full management' },
    { label: 'WhatsApp Funnel', starter: '—', growth: '✓', leadgen: '✓', hospital: '✓ + CRM' },
    { label: 'Video Shoots', starter: '—', growth: '—', leadgen: '2/month', hospital: 'On-demand' },
    { label: 'Reporting', starter: 'Monthly', growth: 'Bi-weekly', leadgen: 'Weekly', hospital: 'Real-time dashboard' },
    { label: 'Dedicated Manager', starter: '✓', growth: '✓ Priority', leadgen: '✓ Senior', hospital: '✓ Dedicated team' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function Pricing() {
    const [showComparison, setShowComparison] = useState(false);

    const handleCTA = (planId: string) => {
        if (planId === 'hospital') {
            window.open('https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20need%20a%20custom%20hospital%20marketing%20plan', '_blank');
        } else {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="pricing">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-5">
                        <Star size={14} className="fill-blue-400 text-blue-400" />
                        Transparent Pricing — No Hidden Fees
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        Choose Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Patient Growth Plan
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Market-benchmarked pricing built specifically for Indian doctors & clinics.
                        Cancel anytime — no lock-in contracts.
                    </p>
                </motion.div>

                {/* Savings ribbon */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-emerald-200">
                        🎉 Early 2025 Pricing — Lock in before rates increase
                    </span>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan, i) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative rounded-3xl flex flex-col ${plan.highlight
                                    ? 'bg-gradient-to-b from-[#1a2244] to-[#0f1729] text-white shadow-2xl shadow-blue-900/40 ring-2 ring-blue-500 scale-[1.03] z-10'
                                    : 'bg-white text-slate-900 shadow-md border border-slate-200/80 hover:shadow-xl hover:-translate-y-1'
                                    } transition-all duration-300`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md ${plan.highlight
                                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                                        : plan.id === 'hospital'
                                            ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
                                            : 'bg-gradient-to-r from-orange-400 to-rose-400 text-white'
                                        }`}>
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Color accent bar */}
                                <div className={`h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${plan.accentGradient}`} />

                                <div className="p-7 flex flex-col flex-1">
                                    {/* Icon + Name */}
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${plan.iconBg}`}>
                                            <Icon size={20} className={plan.iconColor} />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-base leading-snug ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                                {plan.name}
                                            </h3>
                                            {plan.note && (
                                                <p className="text-xs mt-0.5 text-emerald-400 font-medium">{plan.note}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tagline */}
                                    <p className={`text-xs mb-5 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {plan.tagline}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        {plan.originalPrice && (
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-sm line-through ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                                                    {plan.originalPrice}
                                                </span>
                                                {plan.savingsLabel && (
                                                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                                                        {plan.savingsLabel}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        <div className="flex items-end gap-1">
                                            <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                                {plan.price}
                                            </span>
                                            {plan.period && (
                                                <span className={`text-sm mb-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                                    {plan.period}
                                                </span>
                                            )}
                                        </div>
                                        {plan.id === 'hospital' && (
                                            <p className="text-xs text-violet-400 font-medium mt-1">
                                                Tailored to your hospital's scale
                                            </p>
                                        )}
                                        {plan.id !== 'hospital' && (
                                            <p className={`text-xs mt-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                                                + 18% GST applicable
                                            </p>
                                        )}
                                    </div>

                                    {/* Divider */}
                                    <div className={`h-px w-full mb-5 ${plan.highlight ? 'bg-white/10' : 'bg-slate-100'}`} />

                                    {/* Features */}
                                    <ul className="space-y-3 flex-1 mb-7">
                                        {plan.features.map((f, fi) => (
                                            <li key={fi} className="flex items-start gap-2.5 text-sm">
                                                <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-blue-500' : 'bg-emerald-100'}`}>
                                                    <Check size={10} className={plan.highlight ? 'text-white' : 'text-emerald-600'} strokeWidth={3} />
                                                </div>
                                                <span className={`${f.bold ? 'font-semibold' : ''} ${plan.highlight ? (f.bold ? 'text-white' : 'text-slate-300') : (f.bold ? 'text-slate-900' : 'text-slate-600')}`}>
                                                    {f.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button
                                        onClick={() => handleCTA(plan.id)}
                                        className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${plan.highlight
                                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5'
                                            : plan.id === 'hospital'
                                                ? 'border-2 border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300'
                                                : 'border-2 border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md'
                                            }`}
                                    >
                                        {plan.id === 'hospital' ? (
                                            <>
                                                <MessageCircle size={15} /> {plan.cta}
                                            </>
                                        ) : (
                                            <>
                                                {plan.cta} <ArrowRight size={15} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Compare plans toggle */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowComparison(!showComparison)}
                        className="text-blue-600 text-sm font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors"
                    >
                        {showComparison ? 'Hide comparison table ↑' : 'Compare all plans in detail ↓'}
                    </button>
                </div>

                {/* Comparison Table */}
                {showComparison && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-md"
                    >
                        <table className="w-full text-sm text-left bg-white">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="py-4 px-5 font-semibold">Feature</th>
                                    <th className="py-4 px-4 text-center font-semibold text-sky-300">Clinic Starter</th>
                                    <th className="py-4 px-4 text-center font-semibold text-blue-300">Engagement Accelerator</th>
                                    <th className="py-4 px-4 text-center font-semibold text-orange-300">Lead Gen Machine</th>
                                    <th className="py-4 px-4 text-center font-semibold text-violet-300">Hospital / MSC</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonItems.map((row, ri) => (
                                    <tr key={ri} className={ri % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                        <td className="py-3.5 px-5 font-medium text-slate-700">{row.label}</td>
                                        <td className="py-3.5 px-4 text-center text-slate-600">{row.starter}</td>
                                        <td className="py-3.5 px-4 text-center text-slate-600 font-medium">{row.growth}</td>
                                        <td className="py-3.5 px-4 text-center text-slate-600">{row.leadgen}</td>
                                        <td className="py-3.5 px-4 text-center text-violet-600 font-medium">{row.hospital}</td>
                                    </tr>
                                ))}
                                <tr className="bg-slate-900 text-white">
                                    <td className="py-4 px-5 font-bold">Monthly Price (excl. GST)</td>
                                    <td className="py-4 px-4 text-center text-sky-300 font-bold">₹11,999</td>
                                    <td className="py-4 px-4 text-center text-blue-300 font-bold">₹17,999</td>
                                    <td className="py-4 px-4 text-center text-orange-300 font-bold">₹27,999</td>
                                    <td className="py-4 px-4 text-center text-violet-300 font-bold">Custom</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                )}

                {/* Bottom trust bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4">
                        <span>🇮🇳 India · 🇦🇪 UAE · 🇬🇧 UK · 🇺🇸 USA</span>
                        <span className="hidden md:block text-slate-300">|</span>
                        <span>✅ No lock-in contracts</span>
                        <span className="hidden md:block text-slate-300">|</span>
                        <span>📊 Transparent bi-weekly reporting</span>
                        <span className="hidden md:block text-slate-300">|</span>
                        <a href="#contact" className="text-blue-600 font-semibold hover:underline">
                            Need a custom plan? Talk to us →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
