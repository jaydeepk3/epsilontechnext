"use client";

import { useState, useRef } from "react";
import {
    Globe, Smartphone, TrendingUp, ShoppingCart, MessageCircle,
    CheckCircle2, ArrowRight, Star, Shield, Zap, Clock, Users,
    Award, Phone, MessageSquare, ChevronDown, Sparkles, X,
    AlertCircle, Loader2, Check, Code2
} from "lucide-react";

// ─── WHATSAPP NUMBER ─────────────────────────────────────────────────────────
const WA = "918160881461";
const PHONE = "+91 81608 81461";

// ─── SERVICES + PACKAGES ─────────────────────────────────────────────────────
const services = [
    {
        id: "web",
        icon: Globe,
        emoji: "🌐",
        title: "Website Development",
        tagline: "Fast, mobile-first, SEO-ready websites",
        color: "from-blue-600 to-indigo-700",
        lightBg: "bg-blue-50",
        lightText: "text-blue-600",
        packages: [
            {
                name: "Starter", price: "₹19,999", usd: "$249", duration: "2-3 wks",
                features: ["3–5 Page Responsive Site", "Mobile-First Design", "Basic SEO", "Contact Form", "1 Month Support"],
                highlight: false,
            },
            {
                name: "Professional", price: "₹49,999", usd: "$599", duration: "3-5 wks",
                features: ["Up to 15 Pages", "Premium UI/UX", "CMS (Next.js/WP)", "Advanced SEO", "WhatsApp Integration", "3 Months Support"],
                highlight: true,
            },
            {
                name: "Enterprise", price: "₹1,19,999", usd: "$1,499", duration: "6-8 wks",
                features: ["Unlimited Pages", "Custom Architecture", "E-commerce / Payments", "Database & API", "6 Months Priority Support"],
                highlight: false,
            },
        ],
    },
    {
        id: "mobile",
        icon: Smartphone,
        emoji: "📱",
        title: "Mobile App Development",
        tagline: "iOS & Android apps that users love",
        color: "from-violet-600 to-purple-700",
        lightBg: "bg-violet-50",
        lightText: "text-violet-600",
        packages: [
            {
                name: "Starter", price: "₹59,999", usd: "$749", duration: "4-6 wks",
                features: ["Single Platform (iOS or Android)", "Basic UI/UX", "User Auth", "Push Notifications", "App Store Submission", "1 Month Support"],
                highlight: false,
            },
            {
                name: "Professional", price: "₹1,19,999", usd: "$1,499", duration: "6-10 wks",
                features: ["Cross-Platform (React Native)", "Custom UI/UX", "Social Login", "Payment Gateway", "In-App Analytics", "3 Months Support"],
                highlight: true,
            },
            {
                name: "Enterprise", price: "₹2,49,999", usd: "$2,999", duration: "10-16 wks",
                features: ["High-Performance Cross-Platform", "Custom Backend", "Real-Time Chat", "Complex DB Architecture", "Offline Mode", "6 Months Priority Support"],
                highlight: false,
            },
        ],
    },
    {
        id: "doctor",
        icon: TrendingUp,
        emoji: "🏥",
        title: "Digital Marketing for Doctors",
        tagline: "More patients, more appointments, guaranteed",
        color: "from-emerald-600 to-teal-700",
        lightBg: "bg-emerald-50",
        lightText: "text-emerald-600",
        packages: [
            {
                name: "Starter", price: "₹9,999", usd: "$129", duration: "/month",
                features: ["Google My Business Optimization", "8 Social Media Posts/Month", "Basic SEO Setup", "Monthly Report", "Dedicated Manager"],
                highlight: false,
            },
            {
                name: "Growth", price: "₹19,999", usd: "$249", duration: "/month",
                features: ["15 Posts/Month", "Meta & Google Ads", "Patient Review Management", "2 Blogs/Month", "Bi-Weekly Strategy Calls"],
                highlight: true,
            },
            {
                name: "Premium", price: "₹34,999", usd: "$429", duration: "/month",
                features: ["Omnichannel Strategy", "Advanced Ad Budget Mgmt", "Video Reels Creation", "SEO + Content Marketing", "Real-Time Analytics Dashboard"],
                highlight: false,
            },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        emoji: "🛒",
        title: "Ecommerce Development",
        tagline: "Online stores that sell 24/7",
        color: "from-orange-500 to-rose-600",
        lightBg: "bg-orange-50",
        lightText: "text-orange-600",
        packages: [
            {
                name: "Starter", price: "₹29,999", usd: "$369", duration: "3-4 wks",
                features: ["Shopify / WooCommerce Setup", "Up to 50 Products", "Payment Gateway", "Essential Shipping Config", "1 Month Support"],
                highlight: false,
            },
            {
                name: "Professional", price: "₹69,999", usd: "$849", duration: "4-6 wks",
                features: ["Custom Theme Design", "Up to 500 Products", "CRM Integration", "Abandoned Cart Recovery", "Advanced Inventory Mgmt", "3 Months Support"],
                highlight: true,
            },
            {
                name: "Enterprise", price: "₹1,49,999", usd: "$1,799", duration: "6-10 wks",
                features: ["Headless Commerce Architecture", "Unlimited Products", "Multi-Vendor / Marketplace", "Custom Checkout Flows", "Priority 6 Months SLA"],
                highlight: false,
            },
        ],
    },
];

// ─── PRODUCT ──────────────────────────────────────────────────────────────────
const waProduct = {
    id: "whatsapp",
    icon: MessageCircle,
    emoji: "💬",
    title: "WhatsApp Business API Platform",
    tagline: "Automate conversations. Convert more leads.",
    color: "from-green-500 to-emerald-600",
    lightBg: "bg-green-50",
    lightText: "text-green-600",
    packages: [
        {
            name: "Basic", price: "₹2,999", usd: "$39", duration: "/month",
            features: ["1,000 Conversations/Month", "Chatbot Builder", "Bulk Message Broadcast", "Basic Analytics", "WhatsApp Green Tick Assistance"],
            highlight: false,
        },
        {
            name: "Business", price: "₹5,999", usd: "$74", duration: "/month",
            features: ["5,000 Conversations/Month", "Advanced Chatbot Flows", "CRM Integration", "Multi-Agent Team Inbox", "Campaign Scheduling", "Priority Support"],
            highlight: true,
        },
        {
            name: "Enterprise", price: "₹11,999", usd: "$149", duration: "/month",
            features: ["Unlimited Conversations", "AI-Powered Smart Replies", "Custom API Integrations", "Dedicated Account Manager", "White-Label Option", "24/7 Support"],
            highlight: false,
        },
    ],
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
    { name: "Thariq H.", role: "Product Manager, FieldR 🇺🇸", text: "Jaydeep's team delivered an exceptional app for our sports tech startup. Passionate leadership and deep understanding of our business goals.", stars: 5 },
    { name: "Palak Sheth", role: "Long-term Client 🇮🇳", text: "Three years of working with Epsilon Technology. The team is not only skilled but also exceptionally patient. I highly recommend them.", stars: 5 },
    { name: "Deep Karia", role: "Local Guide 🇮🇳", text: "One of the best companies I have worked with. The perfect blend of tech expertise & honesty.", stars: 5 },
    { name: "Harsh Patel", role: "Owner, ShubhCeramics 🇮🇳", text: "Hard working individuals, who give their creative opinions and respond in no time to all your queries.", stars: 5 },
    { name: "Restaurant Owner", role: "Brundhavan, USA 🇺🇸", text: "One heck of an amazing guy — understands and delivers so fast. Created an app for our restaurant seamlessly.", stars: 5 },
    { name: "CTO", role: "Tech Client, USA 🇺🇸", text: "Professional approach with an enthusiastic work ethic. Looking forward to working together again!", stars: 5 },
];

// ─── APPLY MODAL ─────────────────────────────────────────────────────────────
type ServiceOrProduct = (typeof services)[0] | typeof waProduct;
type Package = ServiceOrProduct["packages"][0];

function ApplyModal({ service, pkg, onClose }: { service: ServiceOrProduct; pkg: Package; onClose: () => void }) {
    const [form, setForm] = useState({ name: "", mobile: "", email: "", business: "", message: "", package: `${service.title} — ${pkg.name} (${pkg.price})` });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errMsg, setErrMsg] = useState("");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.name || !form.mobile) { setErrMsg("Please enter your name and mobile number."); return; }
        setStatus("loading"); setErrMsg("");
        try {
            const res = await fetch("/api/web-dev-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.status === "success") setStatus("success");
            else { setStatus("error"); setErrMsg(data.message || "Something went wrong. Please try again."); }
        } catch { setStatus("error"); setErrMsg("Network error. Please call us directly."); }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[95vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white sticky top-0 z-10`}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"><X size={22} /></button>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{service.emoji}</span>
                        <div>
                            <p className="text-white/70 text-xs uppercase tracking-widest">Applying for</p>
                            <h3 className="text-lg font-bold leading-tight">{service.title} — {pkg.name}</h3>
                            <p className="text-white/80 text-sm font-semibold">{pkg.price} {pkg.duration}</p>
                        </div>
                    </div>
                    <p className="text-white/70 text-xs mt-3">Fill your details — we&apos;ll call you within 24 hours with a free quote.</p>
                </div>

                <div className="p-6">
                    {status === "success" ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={32} className="text-green-600" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Application Received! 🎉</h4>
                            <p className="text-slate-600 mb-1">Thank you, <strong>{form.name}</strong>!</p>
                            <p className="text-slate-500 text-sm mb-6">Our team will call you at <strong>{form.mobile}</strong> within <strong>24 hours</strong>.</p>
                            <div className="flex gap-3 justify-center flex-wrap">
                                <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20just%20applied%20for%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm">
                                    <MessageSquare size={16} /> Chat on WhatsApp
                                </a>
                                <button onClick={onClose} className="px-5 py-3 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm">Close</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Mobile <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => setForm(p => ({ ...p, mobile: e.target.value }))} required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email</label>
                                <input type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Business / Clinic Name</label>
                                <input type="text" placeholder="e.g. My Awesome Store" value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Tell us about your project</label>
                                <textarea rows={3} placeholder="Any specific requirements or questions?" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 resize-none" />
                            </div>
                            {errMsg && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                                    <AlertCircle size={16} />{errMsg}
                                </div>
                            )}
                            <button type="submit" disabled={status === "loading"}
                                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${service.color} hover:opacity-90 disabled:opacity-60`}>
                                {status === "loading" ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <><Sparkles size={18} />Submit My Application</>}
                            </button>
                            <p className="text-center text-xs text-slate-400">🔒 Your data is safe. No spam, ever.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── SERVICE SECTION ──────────────────────────────────────────────────────────
function ServiceSection({ service, idx }: { service: ServiceOrProduct; idx: number }) {
    const [modal, setModal] = useState<Package | null>(null);
    const Icon = service.icon;
    const isEven = idx % 2 === 0;

    return (
        <section id={service.id} className={`py-20 ${isEven ? "bg-white" : "bg-slate-50"}`}>
            {modal && <ApplyModal service={service} pkg={modal} onClose={() => setModal(null)} />}

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className={`inline-flex items-center gap-3 ${service.lightBg} ${service.lightText} px-5 py-2.5 rounded-full text-sm font-bold mb-4`}>
                        <Icon size={18} />
                        {service.title}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{service.tagline}</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">Choose the package that fits your budget and goals. Click <strong>Apply Now</strong> to get started.</p>
                </div>

                {/* Packages */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {service.packages.map((pkg) => (
                        <div key={pkg.name}
                            className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300
                                ${pkg.highlight
                                    ? "shadow-2xl ring-2 ring-offset-2 scale-[1.03] z-10"
                                    : "shadow-md hover:shadow-xl hover:-translate-y-1 border border-slate-200"
                                }`}
                            style={pkg.highlight ? { boxShadow: "0 20px 60px rgba(0,0,0,0.12)" } : {}}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-0 right-0 flex justify-center">
                                    <span className={`inline-block px-4 py-1.5 text-xs font-bold text-white rounded-b-xl bg-gradient-to-r ${service.color}`}>
                                        🔥 Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Card top */}
                            <div className={`bg-gradient-to-br ${service.color} p-6 ${pkg.highlight ? "pt-8" : ""} text-white`}>
                                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                                <div className="flex items-end gap-2 mt-2">
                                    <span className="text-3xl font-extrabold">{pkg.price}</span>
                                    <span className="text-white/60 text-sm mb-1">/ {pkg.usd}</span>
                                </div>
                                <div className="flex items-center gap-1.5 mt-1.5 text-white/70 text-xs">
                                    <Clock size={11} /> <span>{pkg.duration}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-white p-6 flex-1 flex flex-col">
                                <ul className="space-y-3 flex-1 mb-6">
                                    {pkg.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setModal(pkg)}
                                    className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                                        ${pkg.highlight ? "bg-slate-900 hover:bg-slate-700 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-900"}`}>
                                    Apply Now <ArrowRight size={15} />
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-2">Free consultation included</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
const faqs = [
    { q: "How do I get started?", a: "Simply choose a service below, click 'Apply Now' on any package, fill in your details, and our team will call you within 24 hours with a free custom quote." },
    { q: "Do I need to pay the full amount upfront?", a: "No — we work on a 50% upfront, 50% on delivery model. Flexible payment terms available for larger projects." },
    { q: "Can I see a demo before paying?", a: "Yes! After you apply, we schedule a free 30-minute discovery call and often build a preview or mockup before any payment." },
    { q: "Do you work with international clients?", a: "Absolutely. We work with clients in India, USA, UK, UAE, and Netherlands. We match your time zone for meetings." },
    { q: "Is there ongoing support after launch?", a: "Every package includes post-launch support. We also offer long-term maintenance and retainer contracts." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <button className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors" onClick={() => setOpen(!open)}>
                <span>{q}</span>
                <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{a}</div>}
        </div>
    );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function HomeLandingClient() {
    const servicesRef = useRef<HTMLDivElement>(null);

    const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const allServices: ServiceOrProduct[] = [...services, waProduct];

    return (
        <>
            <main className="bg-white overflow-x-hidden">

                {/* ══════════════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 py-24 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                🎯 India&apos;s Trusted Digital Agency — Web, Apps, Marketing & More
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Grow Your Business{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    Digitally
                                </span>
                                <br />with Epsilon Technology
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                We build <strong className="text-white">Websites</strong>, <strong className="text-white">Mobile Apps</strong>,{" "}
                                <strong className="text-white">eCommerce Stores</strong>, manage <strong className="text-white">Doctor Marketing</strong>
                                {" "}& provide <strong className="text-white">WhatsApp Business Solutions</strong>.
                                Trusted by 50+ clients across India, USA, UK & UAE.
                            </p>

                            {/* Social proof */}
                            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-slate-400 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
                                    <span className="text-white font-medium">4.9/5</span> on Google & Upwork
                                </div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5"><Shield size={14} className="text-green-400" /><span>100% Satisfaction Guarantee</span></div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5"><Clock size={14} className="text-blue-400" />Response in <strong className="text-white ml-1">24 hours</strong></div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button onClick={scrollToServices}
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                                    <Sparkles size={20} /> Explore Our Services
                                </button>
                                <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20saw%20your%20ad%20and%20want%20to%20learn%20more%20about%20your%20services.`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5">
                                    <MessageSquare size={20} /> Chat on WhatsApp
                                </a>
                            </div>

                            {/* Service quick-links */}
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
                                {allServices.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <a key={s.id} href={`#${s.id}`}
                                            className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-3 transition-all cursor-pointer group">
                                            <Icon size={22} className="text-slate-300 group-hover:text-white transition-colors" />
                                            <span className="text-slate-400 group-hover:text-white text-xs font-medium text-center leading-tight transition-colors">{s.title}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown size={24} className="text-slate-500" />
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    STATS
                ══════════════════════════════════════════════════ */}
                <section className="bg-blue-600 py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: Award, value: "5+", label: "Years Experience" },
                                { icon: Code2, value: "100+", label: "Projects Delivered" },
                                { icon: Users, value: "50+", label: "Happy Clients" },
                                { icon: Star, value: "4.9★", label: "Average Rating" },
                            ].map(({ icon: Icon, value, label }) => (
                                <div key={label} className="text-center text-white">
                                    <div className="flex justify-center mb-2"><Icon size={22} className="text-blue-200" /></div>
                                    <div className="text-3xl font-bold">{value}</div>
                                    <div className="text-blue-200 text-sm mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    ALL SERVICE SECTIONS
                ══════════════════════════════════════════════════ */}
                <div ref={servicesRef}>
                    {services.map((svc, idx) => <ServiceSection key={svc.id} service={svc} idx={idx} />)}
                </div>

                {/* ══════════════════════════════════════════════════
                    PRODUCT — WHATSAPP API
                ══════════════════════════════════════════════════ */}
                <ServiceSection service={waProduct} idx={services.length} />

                {/* ══════════════════════════════════════════════════
                    TESTIMONIALS
                ══════════════════════════════════════════════════ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Real Reviews</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What Our Clients Say</h2>
                            <p className="text-slate-500">5★ reviews from clients across India, USA, UK & UAE</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <div className="flex mb-3">{[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} className="text-yellow-400 fill-yellow-400" />)}</div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                                            <p className="text-slate-500 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    HOW IT WORKS
                ══════════════════════════════════════════════════ */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Simple Process</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
                        </div>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", icon: MessageSquare, title: "Apply", desc: "Click 'Apply Now' on any package. Fill a quick form.", color: "bg-blue-600" },
                                { step: "02", icon: Users, title: "Free Call", desc: "We schedule a 30-min discovery call to understand your goals.", color: "bg-indigo-600" },
                                { step: "03", icon: Code2, title: "We Build", desc: "Our team delivers with regular updates & milestones.", color: "bg-violet-600" },
                                { step: "04", icon: Zap, title: "Go Live 🚀", desc: "We launch, test, and hand over with full training.", color: "bg-green-600" },
                            ].map(({ step, icon: Icon, title, desc, color }, i) => (
                                <div key={step} className="text-center relative">
                                    {i < 3 && <div className="hidden md:block absolute top-8 left-[55%] w-[90%] h-0.5 bg-slate-200 z-0" />}
                                    <div className={`relative z-10 w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1.5">{title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════════════ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">FAQs</p>
                            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-3">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    FINAL CTA
                ══════════════════════════════════════════════════ */}
                <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm mb-8">
                            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                            Limited slots — only 5 new projects this month
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
                            Scroll up, choose your service, pick a package and apply. We&apos;ll call you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button onClick={scrollToServices}
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-10 py-5 rounded-2xl text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl">
                                <Sparkles size={20} /> Choose My Package
                            </button>
                            <a href={`https://wa.me/${WA}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Epsilon%20Technology.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-0.5">
                                <MessageSquare size={20} /> WhatsApp Us Now
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
                            {["✓ Free 30-Min Consultation", "✓ No Full Upfront Payment", "✓ Satisfaction Guarantee", "✓ Response in 24 Hours"].map(i => <span key={i}>{i}</span>)}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    STICKY MOBILE BAR
                ══════════════════════════════════════════════════ */}
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex gap-3">
                    <button onClick={scrollToServices}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm">
                        <Sparkles size={15} /> View Services
                    </button>
                    <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl text-sm">
                        <MessageSquare size={15} /> WhatsApp
                    </a>
                </div>

                {/* Bottom padding for mobile sticky bar */}
                <div className="h-16 md:hidden" />
            </main>
        </>
    );
}
