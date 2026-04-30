"use client";

import { useState, useRef } from "react";
import {
    CheckCircle2, ArrowRight, Phone, MessageSquare, Star,
    Zap, Shield, Award, Clock, Globe, Code2, Smartphone,
    TrendingUp, Users, ChevronDown, Sparkles, X, AlertCircle,
    Loader2, Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScarcityReplacement } from '@/components/ui/ScarcityReplacement';
import { AvailabilityBanner } from '@/components/ui/AvailabilityBanner';

// ─── PACKAGES DATA ────────────────────────────────────────────────────────────
const packages = [
    {
        id: "starter",
        name: "Starter",
        tagline: "Perfect for small businesses",
        duration: "2-3 weeks",
        highlight: false,
        badge: null,
        features: [
            "3–5 Page Responsive Website",
            "Mobile-First Design",
            "Basic SEO Setup",
            "Contact Form Integration",
            "Google Maps / Social Links",
            "Domain & Hosting Guidance",
            "1 Month Free Support",
        ],
        color: "from-slate-600 to-slate-700",
        cta: "Apply for Starter",
    },
    {
        id: "professional",
        name: "Professional",
        tagline: "Most chosen by growing businesses",
        duration: "3-5 weeks",
        highlight: true,
        badge: "🔥 Most Popular",
        features: [
            "Up to 15 Pages",
            "Premium Custom UI/UX Design",
            "CMS Integration (Next.js / WordPress)",
            "Advanced SEO Optimization",
            "Blog / News Section",
            "Lead Capture Forms",
            "WhatsApp Chat Integration",
            "3 Months Free Support",
        ],
        color: "from-blue-600 to-indigo-700",
        cta: "Apply for Professional",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "For high-performance scaling",
        duration: "6-8 weeks",
        highlight: false,
        badge: "⚡ Best Value",
        features: [
            "Unlimited Pages",
            "Custom Next.js / React Architecture",
            "E-commerce / Payment Integration",
            "Database & Backend Development",
            "API Integrations",
            "Analytics Dashboard",
            "Premium Animations & Interactions",
            "Priority 6 Months Support",
        ],
        color: "from-violet-600 to-purple-700",
        cta: "Apply for Enterprise",
    },
    {
        id: "custom",
        name: "Custom",
        tagline: "Built exactly for your needs",
        duration: "Flexible",
        highlight: false,
        badge: null,
        features: [
            "Enterprise-Grade Architecture",
            "AI / ML Integrations",
            "Multi-Platform Scalability",
            "Dedicated Dev Team",
            "SaaS / Web App Development",
            "High Security Configuration",
            "24/7 Priority Support",
        ],
        color: "from-emerald-600 to-teal-700",
        cta: "Get Custom Quote",
    },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: "Thariq H.",
        role: "Product Manager, FieldR",
        country: "🇺🇸 USA",
        text: "Jaydeep's team delivered an exceptional ReactJS-based FieldR app for our sports tech startup. Passionate leadership and a deep understanding of our business goals were evident throughout.",
        stars: 5,
    },
    {
        name: "Palak Sheth",
        role: "Long-term Client",
        country: "🇮🇳 India",
        text: "I've had the privilege of working with Epsilon Technology for the past three years. The team is not only skilled but also exceptionally patient. I highly recommend Epsilon Technology.",
        stars: 5,
    },
    {
        name: "Deep Karia",
        role: "Local Guide",
        country: "🇮🇳 India",
        text: "Oh man, one of the best companies I have worked with. The perfect blend of tech expertise & honesty.",
        stars: 5,
    },
    {
        name: "Harsh Patel",
        role: "Owner, ShubhCeramics",
        country: "🇮🇳 India",
        text: "Great experience with the team of Epsilon. Quite hard working individuals, who will give their creative opinions in the work and respond in no time to all your queries.",
        stars: 5,
    },
    {
        name: "Restaurant Owner",
        role: "Brundhavan",
        country: "🇺🇸 USA",
        text: "One heck of an amazing guy, understands and delivers in his domain so fast. Created an application for our restaurant that allows customers to browse our menu seamlessly.",
        stars: 5,
    },
    {
        name: "CTO",
        role: "Tech Client",
        country: "🇺🇸 USA",
        text: "Professional approach with an enthusiastic work ethic. Looking forward to working together again!",
        stars: 5,
    },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const stats = [
    { value: "7+", label: "Years Experience", icon: Award },
    { value: "100+", label: "Projects Delivered", icon: Globe },
    { value: "50+", label: "Happy Clients Globally", icon: Users },
    { value: "4.9★", label: "Google Rating", icon: Star },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "How long does it take to build my website?",
        a: "Depending on the package, a Starter site is ready in 2–3 weeks, Professional in 3–5 weeks, and Enterprise in 6–8 weeks. Custom projects are scoped individually."
    },
    {
        q: "Do you provide ongoing support after launch?",
        a: "Yes! Every package includes post-launch support — 1 month for Starter, 3 months for Professional, and 6 months for Enterprise. We also offer long-term maintenance contracts."
    },
    {
        q: "Will my website be mobile-friendly?",
        a: "Absolutely. All our websites are built mobile-first. We test on Android and iOS before delivery to ensure a flawless experience on every screen."
    },
    {
        q: "Can I see a custom demo before paying?",
        a: "Yes! After you apply, our team will schedule a free 30-minute discovery call and often build a quick preview or mood board to show you the direction before any payment is needed."
    },
    {
        q: "Do I need to pay the full amount upfront?",
        a: "No. We typically work with a 50% upfront, 50% on delivery model. Flexible payment terms are available for larger projects."
    },
];

// ─── APPLY FORM MODAL ─────────────────────────────────────────────────────────
function ApplyModal({ pkg, onClose }: { pkg: typeof packages[0]; onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        business: "",
        message: "",
        package: pkg.name,
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile) {
            setErrorMsg("Please fill in your name and mobile number.");
            return;
        }
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/web-dev-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.status === "success") {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Please call us directly.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <Code2 size={20} />
                        </div>
                        <div>
                            <p className="text-white/70 text-sm">Applying for</p>
                            <h3 className="text-xl font-bold">{pkg.name} Package</h3>
                        </div>
                    </div>
                    <p className="text-white/80 text-sm mt-2">Fill in your details and we&apos;ll call you within 24 hours with your free quote.</p>
                </div>

                {/* Form */}
                <div className="p-6">
                    {status === "success" ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={32} className="text-green-600" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Application Received! 🎉</h4>
                            <p className="text-slate-600 mb-1">Thank you, <strong>{formData.name}</strong>!</p>
                            <p className="text-slate-600 mb-6">Our team will call you at <strong>{formData.mobile}</strong> within <strong>24 hours</strong>.</p>
                            <div className="flex gap-3 justify-center">
                                <a
                                    href="https://wa.me/918160881461?text=Hi%2C%20I%20just%20applied%20for%20the%20web%20development%20package."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm"
                                >
                                    <MessageSquare size={16} /> Chat on WhatsApp
                                </a>
                                <button onClick={onClose} className="px-4 py-3 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                        Mobile <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.mobile}
                                        onChange={e => setFormData(p => ({ ...p, mobile: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 text-sm"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Business / Website Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. My Awesome Store"
                                    value={formData.business}
                                    onChange={e => setFormData(p => ({ ...p, business: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Tell us about your project</label>
                                <textarea
                                    rows={3}
                                    placeholder="What kind of website do you need? Any specific features?"
                                    value={formData.message}
                                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 text-sm resize-none"
                                />
                            </div>

                            {errorMsg && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                                    <AlertCircle size={16} />
                                    {errorMsg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all text-base
                                    bg-gradient-to-r ${pkg.color} hover:opacity-90 disabled:opacity-60`}
                            >
                                {status === "loading" ? (
                                    <><Loader2 size={20} className="animate-spin" /> Sending your request...</>
                                ) : (
                                    <><Sparkles size={18} /> Submit My Application</>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-500">
                                🔒 Your details are safe with us. No spam, ever.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <span>{q}</span>
                <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {a}
                </div>
            )}
        </div>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function WebDevelopmentLanding() {
    const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);
    const packagesRef = useRef<HTMLElement>(null);

    const scrollToPackages = () => {
        packagesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            {/* Modal */}
            {selectedPkg && <ApplyModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />}

            <main className="bg-white overflow-x-hidden">

                {/* ══════════════════════════════════════════════════════════
                    1. HERO SECTION
                ══════════════════════════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden pt-20">
                    {/* Decorative blobs */}
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                    <div className="container mx-auto px-4 py-24 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="mb-8">
                                <ScarcityReplacement className="py-2 px-4 bg-blue-500/10 border border-blue-400/30 rounded-full" ctaHref="#packages" />
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Get a Website That{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Wins You Clients
                                </span>
                                <br />— Not Just Looks Good
                            </h1>

                            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                                We build fast, mobile-first, SEO-ready websites using <strong className="text-white">Next.js & React</strong> that turn visitors into paying customers.
                                Trusted by 50+ businesses in India, USA, UK & UAE.
                            </p>

                            {/* Social proof strip */}
                            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-slate-400 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <span className="text-white font-medium">4.9/5</span> on Google & Upwork
                                </div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5">
                                    <Shield size={14} className="text-green-400" />
                                    <span>100% Satisfaction Guarantee</span>
                                </div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-blue-400" />
                                    <span>Response within <strong className="text-white">24 hours</strong></span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button
                                    onClick={scrollToPackages}
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                                >
                                    <Sparkles size={20} /> View Packages & Apply
                                </button>
                                <a
                                    href="https://wa.me/918160881461?text=Hi%2C%20I%20saw%20your%20Facebook%20ad%20for%20web%20development.%20I%27d%20like%20to%20know%20more."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
                                >
                                    <MessageSquare size={20} /> Chat on WhatsApp
                                </a>
                            </div>

                            {/* Client Logos / Trust indicators */}
                            <div className="border-t border-white/10 pt-10">
                                <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-medium">Powering businesses across</p>
                                <div className="flex flex-wrap justify-center items-center gap-6 text-slate-400 text-sm font-medium">
                                    {["🇮🇳 India", "🇺🇸 USA", "🇬🇧 United Kingdom", "🇦🇪 UAE", "🇳🇱 Netherlands"].map(flag => (
                                        <span key={flag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                                            {flag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown size={24} className="text-slate-500" />
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    2. STATS BAR
                ══════════════════════════════════════════════════════════ */}
                <section className="bg-blue-600 py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div key={label} className="text-center text-white">
                                    <div className="flex justify-center mb-2">
                                        <Icon size={24} className="text-blue-200" />
                                    </div>
                                    <div className="text-3xl font-bold">{value}</div>
                                    <div className="text-blue-200 text-sm mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    3. PAIN POINTS
                ══════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-3">Sound Familiar?</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                    Is Your Website Losing You Clients?
                                </h2>
                                <p className="text-slate-500 max-w-xl mx-auto">Most business websites fail at the basics. Here&apos;s what&apos;s costing you money right now:</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
                                    <h3 className="text-lg font-bold text-red-800 mb-5 flex items-center gap-2">
                                        <span className="text-2xl">😤</span> The Problem
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Your website takes 10+ seconds to load",
                                            "It looks broken on mobile phones",
                                            "Google can't find you — zero organic traffic",
                                            "No call-to-action, visitors leave instantly",
                                            "Last updated 3 years ago — looks outdated",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-red-700 text-sm">
                                                <span className="text-red-400 font-bold text-base leading-tight">✗</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-100 rounded-3xl p-8">
                                    <h3 className="text-lg font-bold text-green-800 mb-5 flex items-center gap-2">
                                        <span className="text-2xl">✅</span> The Epsilon Solution
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Lightning-fast under 2 seconds load time",
                                            "100% mobile-first, tested on every device",
                                            "SEO-ready structure to rank on Page 1",
                                            "Conversion-optimised with clear CTAs",
                                            "Modern design that builds trust instantly",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-green-700 text-sm">
                                                <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <button
                                    onClick={scrollToPackages}
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all hover:-translate-y-0.5"
                                >
                                    Fix My Website <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    4. PACKAGES (Main CTA)
                ══════════════════════════════════════════════════════════ */}
                <section
                    id="packages"
                    ref={packagesRef}
                    className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Service Tiers</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                                Choose Your Package & Apply
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto text-lg">
                                All packages include free consultation, custom design, and dedicated support. No hidden costs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300
                                        ${pkg.highlight
                                            ? "shadow-2xl shadow-blue-500/20 scale-105 ring-2 ring-blue-500 ring-offset-2"
                                            : "shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-200"
                                        }`}
                                >
                                    {/* Badge */}
                                    {pkg.badge && (
                                        <div className={`absolute top-0 left-0 right-0 flex justify-center`}>
                                            <span className={`
                                                inline-block px-4 py-1.5 text-xs font-bold text-white rounded-b-xl
                                                ${pkg.highlight ? "bg-blue-500" : "bg-violet-500"}
                                            `}>
                                                {pkg.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Card Header */}
                                    <div className={`bg-gradient-to-br ${pkg.color} p-6 pt-8 text-white`}>
                                        <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                                        <p className="text-white/70 text-sm mb-4">{pkg.tagline}</p>

                                        <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs">
                                            <Clock size={12} />
                                            <span>Delivery: {pkg.duration}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="bg-white p-6 flex-1 flex flex-col">
                                        <ul className="space-y-3 flex-1 mb-6">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => setSelectedPkg(pkg)}
                                            className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                                                ${pkg.highlight
                                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200"
                                                    : "bg-slate-900 hover:bg-slate-700 text-white"
                                                }
                                            `}
                                        >
                                            {pkg.cta} <ArrowRight size={16} />
                                        </button>

                                        <p className="text-center text-xs text-slate-400 mt-3">
                                            Free consultation included
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-16 text-center">
                            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-green-400" />
                                    <div className="text-left">
                                        <p className="text-slate-400 text-xs">Not sure which to pick? Call us directly</p>
                                        <a href="tel:+918160881461" className="text-white font-bold hover:text-blue-400 transition-colors">
                                            +91 81608 81461
                                        </a>
                                    </div>
                                </div>
                                <span className="hidden sm:block w-px h-8 bg-slate-700" />
                                <a
                                    href="https://wa.me/918160881461"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                                >
                                    <MessageSquare size={16} /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    5. HOW IT WORKS
                ══════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Simple Process</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                            <p className="text-slate-500 max-w-lg mx-auto">From idea to live website — here&apos;s what happens after you apply:</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", icon: MessageSquare, title: "Apply", desc: "Fill the form or WhatsApp us. Tell us what you need.", color: "bg-blue-600" },
                                    { step: "02", icon: Users, title: "Free Call", desc: "We schedule a 30-min discovery call to understand your goals.", color: "bg-indigo-600" },
                                    { step: "03", icon: Code2, title: "We Build", desc: "Our team designs and develops your site with weekly updates.", color: "bg-violet-600" },
                                    { step: "04", icon: Zap, title: "Go Live 🚀", desc: "We launch, test, and hand over your website + training.", color: "bg-green-600" },
                                ].map(({ step, icon: Icon, title, desc, color }, i) => (
                                    <div key={step} className="text-center relative">
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-8 left-[55%] w-[90%] h-0.5 bg-slate-200 z-0" />
                                        )}
                                        <div className={`relative z-10 w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step}</span>
                                        <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    6. TESTIMONIALS
                ══════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Real Reviews</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-slate-500">5★ reviews from clients across India, USA, UK & UAE</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <div className="flex mb-3">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                                            <p className="text-slate-500 text-xs">{t.role} · {t.country}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    7. WHY EPSILON
                ══════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Why Us?</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                    Why Choose Epsilon Technology?
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { icon: Zap, title: "Built to Be Fast", desc: "We code in Next.js — the framework used by Netflix, TikTok, and Nike. Your site will score 95+ on Google PageSpeed.", color: "bg-yellow-50 text-yellow-600" },
                                    { icon: TrendingUp, title: "SEO From Day 1", desc: "Every site we build has proper meta tags, schema markup, fast loading, and clean code — all optimised for search engines.", color: "bg-green-50 text-green-600" },
                                    { icon: Smartphone, title: "Mobile First", desc: "67% of web traffic is mobile. Every pixel is designed and tested on mobile devices before desktop.", color: "bg-blue-50 text-blue-600" },
                                    { icon: Shield, title: "Secure & Reliable", desc: "SSL certificates, secure forms, GDPR-compliant data handling and 99.9% uptime hosting recommendations.", color: "bg-red-50 text-red-600" },
                                    { icon: Users, title: "Dedicated Team", desc: "You get a project manager, designer, and developer — all working together, not outsourced freelancers.", color: "bg-violet-50 text-violet-600" },
                                    { icon: Globe, title: "Global Experience", desc: "We've delivered projects in India, USA, UK, UAE & Netherlands — we know what international clients expect.", color: "bg-indigo-50 text-indigo-600" },
                                ].map(({ icon: Icon, title, desc, color }) => (
                                    <div key={title} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg transition-all group">
                                        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    8. FAQ SECTION
                ══════════════════════════════════════════════════════════ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">FAQs</p>
                            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    9. FINAL CTA
                ══════════════════════════════════════════════════════════ */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <AvailabilityBanner variant="full" ctaHref="#packages" />
                    </div>
                </section>

                <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 text-center relative z-10">

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Get Your Dream Website?
                        </h2>
                        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
                            Don&apos;t let your competitors win online. Apply now for a free consultation and custom quote.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button
                                onClick={scrollToPackages}
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-10 py-5 rounded-2xl text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl"
                            >
                                <Sparkles size={20} /> Choose My Package
                            </button>
                            <a
                                href="https://wa.me/918160881461?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20website%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-0.5"
                            >
                                <MessageSquare size={20} /> WhatsApp Us Now
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
                            {[
                                "✓ Free 30-Min Consultation",
                                "✓ No Upfront Full Payment",
                                "✓ Satisfaction Guarantee",
                                "✓ Response in 24 Hours",
                            ].map(item => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    10. STICKY MOBILE CTA BAR
                ══════════════════════════════════════════════════════════ */}
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex gap-3">
                    <button
                        onClick={scrollToPackages}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm"
                    >
                        <Sparkles size={16} /> View Packages
                    </button>
                    <a
                        href="https://wa.me/918160881461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl text-sm"
                    >
                        <MessageSquare size={16} /> WhatsApp
                    </a>
                </div>

            </main>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Web Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com/",
                            "telephone": "+918160881461",
                            "email": "contact@epsilon-technology.com"
                        },
                        "areaServed": ["India", "United States", "United Kingdom", "United Arab Emirates"],
                        "description": "Expert web development services in Next.js and React. We build fast, scalable, and SEO-optimized websites.",
                        "url": "https://epsilon-technology.com/services/web-development/",

                        "offers": packages.map(p => ({
                            "@type": "Offer",
                            "name": `${p.name} Web Development Package`,
                            "description": p.tagline
                        }))
                    })
                }}
            />
        </>
    );
}
