"use client";

import { useState } from "react";
import { Globe, Smartphone, ShoppingCart, MessageCircle, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "web",
        icon: Globe,
        emoji: "🌐",
        title: "Website Development",
        tagline: "High-performance Next.js websites that load fast, rank on Google UAE, and convert visitors into customers.",
        color: "from-blue-600 to-indigo-700",
        tabColor: "bg-blue-600",
        lightBg: "bg-blue-50",
        lightText: "text-blue-600",
        ringColor: "ring-blue-500",
        packages: [
            {
                name: "Starter", price: "$999", aed: "AED 3,670", duration: "2–3 weeks", highlight: false,
                features: ["3–5 Page Responsive Website", "Mobile-First Design", "Basic SEO Setup", "Contact Form + WhatsApp Button", "Domain & Hosting Guidance", "1 Month Free Support"],
            },
            {
                name: "Professional", price: "$2,499", aed: "AED 9,180", duration: "3–5 weeks", highlight: true,
                features: ["Up to 15 Pages", "Premium Custom UI/UX", "CMS Integration (Next.js)", "Advanced SEO Optimization", "WhatsApp Chat Integration", "Lead Capture & Analytics", "3 Months Free Support"],
            },
            {
                name: "Enterprise", price: "$4,999", aed: "AED 18,360", duration: "5–8 weeks", highlight: false,
                features: ["Unlimited Pages", "Custom Next.js Architecture", "Payment Gateway Integration", "Database & API Development", "Premium Animations & UI", "Priority 6 Months Support"],
            },
        ],
    },
    {
        id: "mobile",
        icon: Smartphone,
        emoji: "📱",
        title: "Mobile App Development",
        tagline: "Native-quality iOS & Android apps built with React Native and Flutter — for UAE restaurants, clinics, retail, and startups.",
        color: "from-violet-600 to-purple-700",
        tabColor: "bg-violet-600",
        lightBg: "bg-violet-50",
        lightText: "text-violet-600",
        ringColor: "ring-violet-500",
        packages: [
            {
                name: "Basic App", price: "From $3,999", aed: "AED 14,680", duration: "6–8 weeks", highlight: false,
                features: ["iOS + Android (React Native)", "Up to 10 Screens", "User Authentication", "Push Notifications", "Basic Admin Dashboard", "1 Month Post-launch Support"],
            },
            {
                name: "Business App", price: "From $7,999", aed: "AED 29,380", duration: "8–12 weeks", highlight: true,
                features: ["iOS + Android (React Native/Flutter)", "Unlimited Screens", "Payment Integration (Stripe/PayTabs)", "Real-time Features", "Advanced Admin Panel", "API & Third-party Integrations", "3 Months Post-launch Support"],
            },
            {
                name: "Enterprise App", price: "Custom Quote", aed: "", duration: "12–20 weeks", highlight: false,
                features: ["Custom Architecture", "AI / ML Features", "Multi-language (Arabic + English)", "UAE Payment Gateways", "Scalable Cloud Backend", "Dedicated Project Manager", "6 Months Post-launch Support"],
            },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        emoji: "🛒",
        title: "eCommerce Store",
        tagline: "Shopify and custom eCommerce stores built for UAE retail brands — with Arabic language support, UAE payment gateways, and fast local delivery integrations.",
        color: "from-orange-500 to-rose-600",
        tabColor: "bg-orange-500",
        lightBg: "bg-orange-50",
        lightText: "text-orange-600",
        ringColor: "ring-orange-500",
        packages: [
            {
                name: "Starter Store", price: "$1,499", aed: "AED 5,505", duration: "2–3 weeks", highlight: false,
                features: ["Shopify or WooCommerce", "Up to 50 Products", "UAE Payment Gateway Setup", "Mobile-Optimized Design", "Basic SEO Setup", "1 Month Support"],
            },
            {
                name: "Growth Store", price: "$3,499", aed: "AED 12,850", duration: "4–6 weeks", highlight: true,
                features: ["Custom Shopify/Next.js Store", "Unlimited Products", "Arabic + English Support", "Advanced Filters & Search", "Abandoned Cart Recovery", "Analytics Dashboard", "3 Months Support"],
            },
            {
                name: "Enterprise Store", price: "$6,999", aed: "AED 25,700", duration: "6–10 weeks", highlight: false,
                features: ["Fully Custom Next.js eCommerce", "Multi-vendor Support", "UAE & GCC Delivery Integration", "Advanced Inventory System", "B2B Wholesale Portal Option", "Priority 6 Months Support"],
            },
        ],
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        emoji: "💬",
        title: "WhatsApp Business API",
        tagline: "Set up WhatsApp Business API for your UAE business — automated booking, order updates, customer support, and marketing broadcasts. The #1 communication tool in the UAE.",
        color: "from-green-500 to-emerald-600",
        tabColor: "bg-green-500",
        lightBg: "bg-green-50",
        lightText: "text-green-600",
        ringColor: "ring-green-500",
        packages: [
            {
                name: "Basic Setup", price: "$499", aed: "AED 1,833", duration: "3–5 days", highlight: false,
                features: ["WhatsApp Business API Setup", "Automated Welcome Message", "Business Hours Auto-reply", "Up to 3 Message Templates", "Basic Chatbot Flow", "30 Days Support"],
            },
            {
                name: "Business Automation", price: "$999", aed: "AED 3,670 + $199/mo", duration: "1–2 weeks", highlight: true,
                features: ["Full WhatsApp API Integration", "Custom Chatbot (Booking/Orders/FAQs)", "CRM Integration", "Broadcast Campaign Setup", "Multi-agent Team Inbox", "Monthly Performance Report", "3 Months Support"],
            },
            {
                name: "Enterprise", price: "Custom Quote", aed: "", duration: "2–4 weeks", highlight: false,
                features: ["Custom AI-powered Chatbot", "ERP / POS Integration", "Arabic + English Flows", "Unlimited Broadcasts", "Dedicated Account Manager", "Full Analytics Dashboard"],
            },
        ],
    },
];

export function UAEServicesTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const activeSvc = services[activeTab];

    return (
        <div className="w-full">
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
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className={`bg-gradient-to-r ${activeSvc.color} p-6 md:p-8 text-white`}>
                    <p className="text-white/90 text-sm md:text-base font-medium">{activeSvc.tagline}</p>
                </div>

                <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-5">
                        {activeSvc.packages.map((pkg, i) => (
                            <div key={pkg.name}
                                className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300
                                    ${pkg.highlight
                                        ? `border-current shadow-xl ring-4 ${activeSvc.ringColor}/20 ring-offset-0`
                                        : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                                    }`}
                                style={pkg.highlight ? { borderColor: "currentColor" } : {}}>

                                {pkg.highlight && (
                                    <div className={`absolute top-0 left-0 right-0 py-1.5 flex justify-center bg-gradient-to-r ${activeSvc.color}`}>
                                        <span className="text-white text-xs font-bold">🔥 Most Popular</span>
                                    </div>
                                )}

                                <div className={`p-5 ${pkg.highlight ? "pt-8" : "pt-5"} ${pkg.highlight ? activeSvc.lightBg : "bg-slate-50"}`}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{pkg.name}</h4>
                                            <div className="flex flex-col mt-1">
                                                <span className={`text-3xl font-extrabold ${pkg.highlight ? activeSvc.lightText : "text-slate-900"}`}>{pkg.price}</span>
                                                {pkg.aed && <span className="text-slate-500 text-sm font-semibold">{pkg.aed}</span>}
                                            </div>
                                        </div>
                                        <div className={`text-xs font-medium px-2.5 py-1 rounded-full ${activeSvc.lightBg} ${activeSvc.lightText} flex items-center gap-1 shrink-0`}>
                                            <Clock size={10} /> {pkg.duration}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col bg-white">
                                    <ul className="space-y-2.5 flex-1 mb-5">
                                        {pkg.features.map((f, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                <CheckCircle2 size={14} className={`${activeSvc.lightText} shrink-0 mt-0.5`} />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contacts"
                                        className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                                            ${pkg.highlight
                                                ? `bg-gradient-to-r ${activeSvc.color} text-white hover:opacity-90 shadow-lg`
                                                : "bg-slate-900 hover:bg-slate-700 text-white"
                                            }`}>
                                        {i === 2 && activeTab === 1 || i === 2 && activeTab === 3 ? "Get Custom Quote" : "Apply Now"} <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6 text-sm text-slate-500 font-medium">
                        ✓ Prices in USD · AED equivalent shown · Stripe, Wise & bank transfer accepted · NDA available on request
                    </div>
                </div>
            </div>
        </div>
    );
}
