"use client";

import React, { useState } from "react";
import Link from 'next/link';
import {
    Globe, Smartphone, TrendingUp, ShoppingCart, MessageCircle,
    CheckCircle2, ArrowRight, Clock, Users,
    Phone, MessageSquare, X,
    AlertCircle, Loader2, Check, Sparkles
} from "lucide-react";

const WA = "918160881461";

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const services = [
    {
        id: "web",
        icon: Globe,
        emoji: "🌐",
        title: "Website Development",
        href: "/services/web-development/",
        tagline: "Fast, mobile-first, SEO-ready websites",
        description: "We build high-performance websites using Next.js & React that rank on Google, look stunning on every device, and convert visitors into customers.",
        highlights: ["Google PageSpeed 95+", "Mobile-First Design", "SEO-Ready Structure", "Delivered in 2–8 weeks"],
        color: "from-blue-600 to-indigo-700",
        tabColor: "bg-blue-600",
        lightBg: "bg-blue-50",
        lightText: "text-blue-600",
        ringColor: "ring-blue-500",
        packages: [
            {
                name: "Starter", price: "₹19,999", usd: "$249", intlUsd: "$999", duration: "2–3 weeks", highlight: false,
                features: ["3–5 Page Responsive Website", "Mobile-First Design", "Basic SEO Setup", "Contact Form Integration", "Domain & Hosting Guidance", "1 Month Free Support"],
            },
            {
                name: "Professional", price: "₹49,999", usd: "$599", intlUsd: "$2,499", duration: "3–5 weeks", highlight: true,
                features: ["Up to 15 Pages", "Premium Custom UI/UX", "CMS Integration (Next.js/WP)", "Advanced SEO Optimization", "WhatsApp Chat Integration", "Lead Capture Forms", "3 Months Free Support"],
            },
            {
                name: "Enterprise", price: "₹1,19,999", usd: "$1,499", intlUsd: "$4,999", duration: "6–8 weeks", highlight: false,
                features: ["Unlimited Pages", "Custom Next.js Architecture", "E-commerce / Payment Integration", "Database & API Development", "Premium Animations & UI", "Priority 6 Months Support"],
            },
        ],
    },
    {
        id: "mobile",
        icon: Smartphone,
        emoji: "📱",
        title: "Mobile App Development",
        href: "/services/mobile-app-development/",
        tagline: "iOS & Android apps that users love",
        description: "From idea to App Store — we build fast, feature-rich mobile apps in React Native and Flutter that scale with your business.",
        highlights: ["iOS + Android", "React Native / Flutter", "App Store Submission", "4–16 week delivery"],
        color: "from-violet-600 to-purple-700",
        tabColor: "bg-violet-600",
        lightBg: "bg-violet-50",
        lightText: "text-violet-600",
        ringColor: "ring-violet-500",
        packages: [
            {
                name: "Starter", price: "₹59,999", usd: "$749", intlUsd: "$2,999", duration: "4–6 weeks", highlight: false,
                features: ["Single Platform (iOS or Android)", "Basic UI/UX Design", "User Authentication", "Push Notifications", "App Store Submission", "1 Month Bug Support"],
            },
            {
                name: "Professional", price: "₹1,19,999", usd: "$1,499", intlUsd: "$5,999", duration: "6–10 weeks", highlight: true,
                features: ["Cross-Platform (React Native)", "Custom UI/UX Design", "Social Login", "Payment Gateway", "In-App Analytics", "Real-Time Notifications", "3 Months Support"],
            },
            {
                name: "Enterprise", price: "₹2,49,999", usd: "$2,999", intlUsd: "$11,999", duration: "10–16 weeks", highlight: false,
                features: ["High-Performance Cross-Platform", "Custom Node.js Backend", "Real-Time Chat & Sockets", "Complex Database Architecture", "Offline Mode Capability", "6 Months Priority Support"],
            },
        ],
    },
    {
        id: "doctor",
        icon: TrendingUp,
        emoji: "🏥",
        title: "Digital Marketing",
        href: "/digital-marketing/",
        tagline: "More patients. More appointments. Guaranteed.",
        description: "Specialized digital marketing for doctors and clinics — Google Ads, Meta Ads, SEO, and social media management that brings you real patients.",
        highlights: ["Patient-Focused Strategy", "Google & Meta Ads", "SEO + Social Media", "Monthly Reports"],
        color: "from-emerald-600 to-teal-700",
        tabColor: "bg-emerald-600",
        lightBg: "bg-emerald-50",
        lightText: "text-emerald-600",
        ringColor: "ring-emerald-500",
        packages: [
            {
                name: "Starter", price: "₹9,999", usd: "$129", intlUsd: "$499", duration: "per month", highlight: false,
                features: ["Google My Business Optimization", "8 Social Media Posts/Month", "Basic SEO Setup", "Monthly Performance Report", "Dedicated Account Manager"],
            },
            {
                name: "Growth", price: "₹19,999", usd: "$249", intlUsd: "$999", duration: "per month", highlight: true,
                features: ["15 Posts/Month (Reels + Static)", "Meta & Google Ad Campaigns", "Patient Review Management", "2 Blogs/Month for SEO", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup"],
            },
            {
                name: "Premium", price: "₹34,999", usd: "$429", intlUsd: "$1,499", duration: "per month", highlight: false,
                features: ["Omnichannel Marketing Strategy", "Advanced Ad Budget Management", "Video Reels Production", "Premium SEO Campaign", "Content Calendar (4 Blogs/Month)", "Real-Time Analytics Dashboard"],
            },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        emoji: "🛒",
        title: "eCommerce Development",
        href: "/services/ecommerce-development/",
        tagline: "Online stores that sell 24/7",
        description: "We build fast, conversion-optimized eCommerce stores on Shopify, WooCommerce, or custom platforms that turn browsers into buyers.",
        highlights: ["Shopify / WooCommerce", "Payment Gateway Setup", "Mobile-Optimized", "3–10 week delivery"],
        color: "from-orange-500 to-rose-600",
        tabColor: "bg-orange-500",
        lightBg: "bg-orange-50",
        lightText: "text-orange-600",
        ringColor: "ring-orange-500",
        packages: [
            {
                name: "Starter", price: "₹29,999", usd: "$369", intlUsd: "$1,499", duration: "3–4 weeks", highlight: false,
                features: ["Shopify / WooCommerce Setup", "Up to 50 Products", "Payment Gateway Integration", "Essential Shipping Config", "Mobile-Optimized Design", "1 Month Support"],
            },
            {
                name: "Professional", price: "₹69,999", usd: "$849", intlUsd: "$3,499", duration: "4–6 weeks", highlight: true,
                features: ["Custom Theme Design", "Up to 500 Products", "CRM Integration", "Abandoned Cart Recovery", "Advanced Inventory Management", "3 Months Support"],
            },
            {
                name: "Enterprise", price: "₹1,49,999", usd: "$1,799", intlUsd: "$6,999", duration: "6–10 weeks", highlight: false,
                features: ["Headless Commerce Architecture", "Unlimited Products", "Multi-Vendor / Marketplace", "Custom Checkout Flows", "Subscription Models", "Priority 6 Months SLA"],
            },
        ],
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        emoji: "💬",
        title: "WhatsApp Business API",
        href: "/product/whatsapp-business-api/",
        tagline: "Automate conversations. Convert more leads.",
        description: "Our WhatsApp Business API platform helps you automate customer conversations, send bulk campaigns, and manage leads — all from one dashboard.",
        highlights: ["Bulk Broadcasts", "Chatbot Builder", "CRM Integration", "Green Tick Assistance"],
        color: "from-green-500 to-emerald-600",
        tabColor: "bg-green-500",
        lightBg: "bg-green-50",
        lightText: "text-green-600",
        ringColor: "ring-green-500",
        packages: [
            {
                name: "Basic", price: "₹2,999", usd: "$39", intlUsd: "$99", duration: "per month", highlight: false,
                features: ["1,000 Conversations/Month", "Chatbot Flow Builder", "Bulk Message Broadcasts", "Basic Analytics Dashboard", "WhatsApp Green Tick Assistance"],
            },
            {
                name: "Business", price: "₹5,999", usd: "$74", intlUsd: "$199", duration: "per month", highlight: true,
                features: ["5,000 Conversations/Month", "Advanced Chatbot Flows", "CRM Integration", "Multi-Agent Team Inbox", "Campaign Scheduling", "Priority Support"],
            },
            {
                name: "Enterprise", price: "₹11,999", usd: "$149", intlUsd: "$399", duration: "per month", highlight: false,
                features: ["Unlimited Conversations", "AI-Powered Smart Replies", "Custom API Integrations", "Dedicated Account Manager", "White-Label Option", "24/7 Priority Support"],
            },
        ],
    },
];

// ─── APPLY MODAL ─────────────────────────────────────────────────────────────
type Service = typeof services[0];
type Pkg = Service["packages"][0];

function ApplyModal({ svc, pkg, onClose }: { svc: Service; pkg: Pkg; onClose: () => void }) {
    const [form, setForm] = useState({
        name: "", mobile: "", email: "", business: "", message: "", budget: "",
        package: `${svc.title} — ${pkg.name} (${pkg.price} ${pkg.duration})`,
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [err, setErr] = useState("");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.name || !form.mobile || !form.budget) { setErr("Please enter your name, mobile number, and budget."); return; }
        setStatus("loading"); setErr("");
        try {
            const res = await fetch("/api/web-dev-lead", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const d = await res.json();
            if (d.status === "success") setStatus("success");
            else { setStatus("error"); setErr(d.message || "Something went wrong."); }
        } catch { setStatus("error"); setErr("Network error. Please call us directly."); }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 min-h-screen" onClick={onClose} style={{ marginTop: 0 }}>
            <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm" />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[95vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${svc.color} p-5 text-white`}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white"><X size={20} /></button>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{svc.emoji}</span>
                        <div>
                            <p className="text-white/60 text-xs uppercase tracking-widest">Applying for</p>
                            <h3 className="font-bold text-lg leading-tight">{svc.title} — {pkg.name}</h3>
                            <p className="text-white/80 text-sm font-semibold">{pkg.price} / {pkg.duration}</p>
                        </div>
                    </div>
                    <p className="text-white/60 text-xs mt-3">We&apos;ll call you within 24 hours with your free custom quote.</p>
                </div>

                <div className="p-5">
                    {status === "success" ? (
                        <div className="text-center py-6">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check size={28} className="text-green-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">Application Received! 🎉</h4>
                            <p className="text-slate-500 text-sm mb-1">Thank you, <strong>{form.name}</strong>!</p>
                            <p className="text-slate-500 text-sm mb-5">We&apos;ll call <strong>{form.mobile}</strong> within <strong>24 hours</strong>.</p>
                            <div className="flex gap-3 justify-center">
                                <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20applied%20for%20${encodeURIComponent(svc.title)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors">
                                    <MessageSquare size={15} /> WhatsApp
                                </a>
                                <button onClick={onClose} className="px-4 py-2.5 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm">Close</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs font-semibold text-slate-600 block mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required
                                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-600 block mb-1">Mobile <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="+91 98765..." value={form.mobile} onChange={e => setForm(p => ({ ...p, mobile: e.target.value }))} required
                                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600 block mb-1">Email</label>
                                <input type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600 block mb-1">Business Name</label>
                                <input type="text" placeholder="e.g. My Store" value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))}
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600 block mb-1">Project Budget <span className="text-red-500">*</span></label>
                                <select value={form.budget} onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} required
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-white"
                                >
                                    <option value="" disabled>Select approximate budget</option>
                                    <option value="Under ₹50k">Under ₹50k</option>
                                    <option value="₹50k - ₹1 Lakh">₹50k - ₹1 Lakh</option>
                                    <option value="₹1 Lakh - ₹3 Lakhs">₹1 Lakh - ₹3 Lakhs</option>
                                    <option value="₹3 Lakhs+">₹3 Lakhs+ (Premium & Custom)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600 block mb-1">Additional details</label>
                                <textarea rows={2} placeholder="Any specific requirements..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 resize-none" />
                            </div>
                            {err && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5 text-xs">
                                    <AlertCircle size={14} />{err}
                                </div>
                            )}
                            <button type="submit" disabled={status === "loading"}
                                className={`w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${svc.color} hover:opacity-90 disabled:opacity-60 text-sm`}>
                                {status === "loading"
                                    ? <><Loader2 size={16} className="animate-spin" />Sending...</>
                                    : <><Sparkles size={16} />Submit My Application</>}
                            </button>
                            <p className="text-center text-xs text-slate-400">🔒 Safe & confidential. No spam.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── MAIN PRICING PAGE ────────────────────────────────────────────────────────

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [pricingRegion, setPricingRegion] = useState<"intl" | "india">("india");
    const [modal, setModal] = useState<{ svc: Service; pkg: Pkg } | null>(null);
    const activeSvc = services[activeTab];

    return (
        <main className="bg-slate-50 min-h-screen pt-[100px] lg:pt-[120px] pb-20">
            {modal && <ApplyModal svc={modal.svc} pkg={modal.pkg} onClose={() => setModal(null)} />}
            
            <div className="container mx-auto px-4">
                {/* Section title */}
                <div className="text-center mb-10">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Our Flexible Plans</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Pricing & Packages</h1>
                    <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
                        Select a service below to view our clear, upfront price estimates and what each package includes. All packages include <strong>free consultation</strong> and dedicated support.
                    </p>
                </div>

                {/* ── TAB BAR ── */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        const isActive = activeTab === i;
                        return (
                            <button key={s.id} onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                                    ${isActive
                                        ? `${s.tabColor} text-white shadow-lg border-transparent scale-105`
                                        : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md"
                                    }`}>
                                <Icon size={16} />
                                <span className="hidden sm:inline">{s.title}</span>
                                <span className="sm:hidden">{s.emoji}</span>
                            </button>
                        );
                    })}
                </div>

                {/* ── ACTIVE SERVICE CONTENT ── */}
                <div className="flex justify-center mb-8">
                    <div className="bg-slate-200 p-1 rounded-full flex items-center">
                        <button
                            onClick={() => setPricingRegion("intl")}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${pricingRegion === "intl" ? "bg-white text-slate-900 shadow-md" : "text-slate-600 hover:text-slate-800"}`}
                        >
                            🌍 International
                        </button>
                        <button
                            onClick={() => setPricingRegion("india")}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${pricingRegion === "india" ? "bg-white text-slate-900 shadow-md" : "text-slate-600 hover:text-slate-800"}`}
                        >
                            🇮🇳 India Pricing
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden max-w-6xl mx-auto">
                    {/* Service header banner */}
                    <div className={`bg-gradient-to-r ${activeSvc.color} p-6 md:p-8 text-white`}>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
                                    <span className="text-3xl">{activeSvc.emoji}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{activeSvc.title}</h3>
                                    <p className="text-white/80 text-sm md:text-base max-w-lg">{activeSvc.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 md:shrink-0 max-w-xs">
                                {activeSvc.highlights.map(h => (
                                    <span key={h} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-full">
                                        <Check size={10} className="text-white" /> {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Packages grid */}
                    <div className="p-6 md:p-8 relative">
                        <div className="grid md:grid-cols-3 gap-5">
                            {activeSvc.packages.map((pkg) => (
                                <div key={pkg.name}
                                    className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300
                                        ${pkg.highlight
                                            ? `border-current shadow-xl ring-4 ${activeSvc.ringColor}/20 ring-offset-0 z-10 md:scale-105`
                                            : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                                        }`}
                                    style={pkg.highlight ? { borderColor: "currentColor" } : {}}>

                                    {pkg.highlight && (
                                        <div className={`absolute top-0 left-0 right-0 py-1.5 flex justify-center bg-gradient-to-r ${activeSvc.color}`}>
                                            <span className="text-white text-[10px] uppercase tracking-widest font-bold">Most Popular</span>
                                        </div>
                                    )}

                                    {/* Price header */}
                                    <div className={`p-5 ${pkg.highlight ? "pt-8" : "pt-5"} ${pkg.highlight ? activeSvc.lightBg : "bg-slate-50"}`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">{pkg.name}</h4>
                                                {pricingRegion === "intl" ? (
                                                    <div className="flex items-baseline gap-1.5 mt-1">
                                                        <span className={`text-3xl font-extrabold ${pkg.highlight ? activeSvc.lightText : "text-slate-900"}`}>{(pkg as any).intlUsd}</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-baseline gap-1.5 mt-1">
                                                        <span className={`text-3xl font-extrabold ${pkg.highlight ? activeSvc.lightText : "text-slate-900"}`}>{pkg.price}</span>
                                                        <span className="text-slate-400 text-sm">/ {pkg.usd}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className={`text-[10px] font-medium px-2 py-1 rounded-full ${activeSvc.lightBg} ${activeSvc.lightText} flex items-center gap-1`}>
                                                <Clock size={10} /> {pkg.duration}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="p-5 flex-1 flex flex-col bg-white">
                                        <ul className="space-y-2.5 flex-1 mb-5">
                                            {pkg.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 size={14} className={`${activeSvc.lightText} shrink-0 mt-0.5`} />
                                                    <span className="leading-snug">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button onClick={() => setModal({ svc: activeSvc, pkg })}
                                            className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                                                ${pkg.highlight
                                                    ? `bg-gradient-to-r ${activeSvc.color} text-white hover:opacity-90 shadow-lg`
                                                    : "bg-slate-900 hover:bg-slate-700 text-white"
                                                }`}>
                                            Apply Now <ArrowRight size={15} />
                                        </button>
                                        <Link
                                            href={activeSvc.href}
                                            className={`mt-4 text-center text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${activeSvc.lightText} hover:underline`}
                                        >
                                            View Service Details <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {pricingRegion === "intl" && (
                            <div className="text-center mt-8 text-sm text-slate-500 font-medium">
                                ✓ Prices in USD · Stripe & Wise accepted · NDA available
                            </div>
                        )}

                        {/* Bottom contact strip */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <Phone size={16} className="text-slate-400 shrink-0" />
                                <span>Not sure which package? <strong className="text-slate-900">Call us:</strong></span>
                                <a href="tel:+918160881461" className="font-bold text-blue-600 hover:underline">+91 81608 81461</a>
                            </div>
                            <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(activeSvc.title)}.`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0">
                                <MessageSquare size={15} /> Ask on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
