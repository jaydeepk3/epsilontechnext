"use client";

import { useState, useRef } from "react";
import {
    Globe, Smartphone, TrendingUp, ShoppingCart, MessageCircle,
    CheckCircle2, ArrowRight, Star, Shield, Zap, Clock, Users,
    Award, Phone, MessageSquare, ChevronDown, Sparkles, X,
    AlertCircle, Loader2, Check, Code2
} from "lucide-react";

const WA = "918160881461";

// ─── ALL SERVICES + PRODUCT ───────────────────────────────────────────────────
const services = [
    {
        id: "web",
        icon: Globe,
        emoji: "🌐",
        title: "Website Development",
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
                name: "Starter", price: "₹19,999", usd: "$249", duration: "2–3 weeks", highlight: false,
                features: ["3–5 Page Responsive Website", "Mobile-First Design", "Basic SEO Setup", "Contact Form Integration", "Domain & Hosting Guidance", "1 Month Free Support"],
            },
            {
                name: "Professional", price: "₹49,999", usd: "$599", duration: "3–5 weeks", highlight: true,
                features: ["Up to 15 Pages", "Premium Custom UI/UX", "CMS Integration (Next.js/WP)", "Advanced SEO Optimization", "WhatsApp Chat Integration", "Lead Capture Forms", "3 Months Free Support"],
            },
            {
                name: "Enterprise", price: "₹1,19,999", usd: "$1,499", duration: "6–8 weeks", highlight: false,
                features: ["Unlimited Pages", "Custom Next.js Architecture", "E-commerce / Payment Integration", "Database & API Development", "Premium Animations & UI", "Priority 6 Months Support"],
            },
        ],
    },
    {
        id: "mobile",
        icon: Smartphone,
        emoji: "📱",
        title: "Mobile App Development",
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
                name: "Starter", price: "₹59,999", usd: "$749", duration: "4–6 weeks", highlight: false,
                features: ["Single Platform (iOS or Android)", "Basic UI/UX Design", "User Authentication", "Push Notifications", "App Store Submission", "1 Month Bug Support"],
            },
            {
                name: "Professional", price: "₹1,19,999", usd: "$1,499", duration: "6–10 weeks", highlight: true,
                features: ["Cross-Platform (React Native)", "Custom UI/UX Design", "Social Login", "Payment Gateway", "In-App Analytics", "Real-Time Notifications", "3 Months Support"],
            },
            {
                name: "Enterprise", price: "₹2,49,999", usd: "$2,999", duration: "10–16 weeks", highlight: false,
                features: ["High-Performance Cross-Platform", "Custom Node.js Backend", "Real-Time Chat & Sockets", "Complex Database Architecture", "Offline Mode Capability", "6 Months Priority Support"],
            },
        ],
    },
    {
        id: "doctor",
        icon: TrendingUp,
        emoji: "🏥",
        title: "Doctor Digital Marketing",
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
                name: "Starter", price: "₹9,999", usd: "$129", duration: "per month", highlight: false,
                features: ["Google My Business Optimization", "8 Social Media Posts/Month", "Basic SEO Setup", "Monthly Performance Report", "Dedicated Account Manager"],
            },
            {
                name: "Growth", price: "₹19,999", usd: "$249", duration: "per month", highlight: true,
                features: ["15 Posts/Month (Reels + Static)", "Meta & Google Ad Campaigns", "Patient Review Management", "2 Blogs/Month for SEO", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup"],
            },
            {
                name: "Premium", price: "₹34,999", usd: "$429", duration: "per month", highlight: false,
                features: ["Omnichannel Marketing Strategy", "Advanced Ad Budget Management", "Video Reels Production", "Premium SEO Campaign", "Content Calendar (4 Blogs/Month)", "Real-Time Analytics Dashboard"],
            },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        emoji: "🛒",
        title: "eCommerce Development",
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
                name: "Starter", price: "₹29,999", usd: "$369", duration: "3–4 weeks", highlight: false,
                features: ["Shopify / WooCommerce Setup", "Up to 50 Products", "Payment Gateway Integration", "Essential Shipping Config", "Mobile-Optimized Design", "1 Month Support"],
            },
            {
                name: "Professional", price: "₹69,999", usd: "$849", duration: "4–6 weeks", highlight: true,
                features: ["Custom Theme Design", "Up to 500 Products", "CRM Integration", "Abandoned Cart Recovery", "Advanced Inventory Management", "3 Months Support"],
            },
            {
                name: "Enterprise", price: "₹1,49,999", usd: "$1,799", duration: "6–10 weeks", highlight: false,
                features: ["Headless Commerce Architecture", "Unlimited Products", "Multi-Vendor / Marketplace", "Custom Checkout Flows", "Subscription Models", "Priority 6 Months SLA"],
            },
        ],
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        emoji: "💬",
        title: "WhatsApp Business API",
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
                name: "Basic", price: "₹2,999", usd: "$39", duration: "per month", highlight: false,
                features: ["1,000 Conversations/Month", "Chatbot Flow Builder", "Bulk Message Broadcasts", "Basic Analytics Dashboard", "WhatsApp Green Tick Assistance"],
            },
            {
                name: "Business", price: "₹5,999", usd: "$74", duration: "per month", highlight: true,
                features: ["5,000 Conversations/Month", "Advanced Chatbot Flows", "CRM Integration", "Multi-Agent Team Inbox", "Campaign Scheduling", "Priority Support"],
            },
            {
                name: "Enterprise", price: "₹11,999", usd: "$149", duration: "per month", highlight: false,
                features: ["Unlimited Conversations", "AI-Powered Smart Replies", "Custom API Integrations", "Dedicated Account Manager", "White-Label Option", "24/7 Priority Support"],
            },
        ],
    },
];

const testimonials = [
    { name: "Thariq H.", role: "Product Manager, FieldR 🇺🇸", text: "Jaydeep's team delivered an exceptional app for our sports tech startup. Passionate leadership and deep understanding of our business goals.", stars: 5 },
    { name: "Palak Sheth", role: "Long-term Client 🇮🇳", text: "Three years of working with Epsilon Technology. Not only skilled but also exceptionally patient. I highly recommend them.", stars: 5 },
    { name: "Deep Karia", role: "Local Guide 🇮🇳", text: "One of the best companies I have worked with. The perfect blend of tech expertise & honesty.", stars: 5 },
    { name: "Harsh Patel", role: "Owner, ShubhCeramics 🇮🇳", text: "Hard working individuals, who give creative opinions and respond in no time to all queries.", stars: 5 },
    { name: "Restaurant Owner", role: "Brundhavan, USA 🇺🇸", text: "One heck of an amazing guy — understands and delivers so fast. Created an app for our restaurant seamlessly.", stars: 5 },
    { name: "CTO", role: "Tech Client, USA 🇺🇸", text: "Professional approach with an enthusiastic work ethic. Looking forward to working together again!", stars: 5 },
];

const faqs = [
    { q: "How do I get started?", a: "Simply pick any service tab below, choose your package, click 'Apply Now', and fill your details. Our team will call you within 24 hours." },
    { q: "Do I pay the full amount upfront?", a: "No. We work on 50% upfront, 50% on delivery. Flexible payment terms available for larger projects." },
    { q: "Can I see a demo before paying?", a: "Yes! After you apply, we do a free 30-minute discovery call and often share a mockup or preview before any payment." },
    { q: "Do you work with international clients?", a: "Absolutely. We serve clients in India, USA, UK, UAE & Netherlands, matching your time zone for all meetings." },
    { q: "Is there support after launch?", a: "Every package includes post-launch support. Long-term maintenance and retainer contracts are also available." },
];

// ─── APPLY MODAL ─────────────────────────────────────────────────────────────
type Service = typeof services[0];
type Pkg = Service["packages"][0];

function ApplyModal({ svc, pkg, onClose }: { svc: Service; pkg: Pkg; onClose: () => void }) {
    const [form, setForm] = useState({
        name: "", mobile: "", email: "", business: "", message: "",
        package: `${svc.title} — ${pkg.name} (${pkg.price} ${pkg.duration})`,
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [err, setErr] = useState("");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.name || !form.mobile) { setErr("Please enter your name and mobile number."); return; }
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
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
                                <label className="text-xs font-semibold text-slate-600 block mb-1">Business / Clinic Name</label>
                                <input type="text" placeholder="e.g. My Store or Dr. Smith Clinic" value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))}
                                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900" />
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

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                onClick={() => setOpen(!open)}>
                <span>{q}</span>
                <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{a}</div>}
        </div>
    );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function HomeLandingClient() {
    const [activeTab, setActiveTab] = useState(0);
    const [modal, setModal] = useState<{ svc: Service; pkg: Pkg } | null>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const activeSvc = services[activeTab];

    const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <>
            {modal && <ApplyModal svc={modal.svc} pkg={modal.pkg} onClose={() => setModal(null)} />}

            <main className="bg-white overflow-x-hidden">

                {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 py-24 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                🎯 India&apos;s Trusted Digital Agency — Web · Apps · Marketing · eCommerce
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Grow Your Business{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Digitally</span>
                                <br />with Epsilon Technology
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                We build <strong className="text-white">Websites</strong>, <strong className="text-white">Mobile Apps</strong>, <strong className="text-white">eCommerce Stores</strong>,
                                manage <strong className="text-white">Doctor Marketing</strong> & provide <strong className="text-white">WhatsApp Business Solutions</strong> — all under one roof.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-5 mb-10 text-slate-400 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}</div>
                                    <span className="text-white font-medium">4.9/5</span> on Google & Upwork
                                </div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5"><Shield size={13} className="text-green-400" /> 100% Satisfaction Guarantee</div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5"><Clock size={13} className="text-blue-400" />Reply in <strong className="text-white ml-1">24 hrs</strong></div>
                                <span className="w-px h-4 bg-slate-700" />
                                <div className="flex items-center gap-1.5"><Users size={13} className="text-purple-400" /><strong className="text-white">50+</strong>&nbsp;happy clients</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button onClick={scrollToServices}
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                                    <Sparkles size={20} /> View Services & Packages
                                </button>
                                <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20saw%20your%20ad%20and%20want%20to%20learn%20more.`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5">
                                    <MessageSquare size={20} /> Chat on WhatsApp
                                </a>
                            </div>

                            {/* Service quick-chips */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {services.map((s, i) => {
                                    const Icon = s.icon;
                                    return (
                                        <button key={s.id} onClick={() => { setActiveTab(i); scrollToServices(); }}
                                            className="flex items-center gap-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all">
                                            <Icon size={16} /> {s.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown size={24} className="text-slate-500" />
                    </div>
                </section>

                {/* ═══════════════════════════════════════ STATS ═══════════════════════════════════════ */}
                <section className="bg-blue-600 py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Award, value: "5+", label: "Years Experience" },
                                { icon: Code2, value: "100+", label: "Projects Delivered" },
                                { icon: Users, value: "50+", label: "Happy Clients" },
                                { icon: Star, value: "4.9★", label: "Average Rating" },
                            ].map(({ icon: Icon, value, label }) => (
                                <div key={label} className="text-center text-white">
                                    <Icon size={20} className="text-blue-200 mx-auto mb-1.5" />
                                    <div className="text-2xl font-bold">{value}</div>
                                    <div className="text-blue-200 text-xs mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ TRUSTED BY CLIENTS ══════════════════════════════════════ */}
                <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
                    <div className="container mx-auto px-4 mb-8 text-center">
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                            Trusted by businesses across India &amp; beyond
                        </p>
                    </div>
                    {/* Marquee track */}
                    <div className="relative">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <div className="flex gap-10 items-center"
                            style={{
                                animation: "marqueeScroll 30s linear infinite",
                                width: "max-content",
                            }}>
                            {/* Render logos twice for seamless infinite loop */}
                            {[...Array(2)].map((_, pass) => (
                                <div key={pass} className="flex gap-10 items-center shrink-0">
                                    {[
                                        { src: "/clientlogo/FieldR Icon-(BLACK) 1.png", name: "FieldR", bg: "bg-slate-100", pad: "p-4" },
                                        { src: "/clientlogo/Flexmot logo final.png", name: "Flexmot", bg: "bg-white", pad: "p-3" },
                                        { src: "/clientlogo/Flique.png", name: "Flique", bg: "bg-white", pad: "p-1" },
                                        { src: "/clientlogo/Pistol.jpg", name: "Pistol Films", bg: "bg-slate-100", pad: "p-4" },
                                        { src: "/clientlogo/Sangani-Hospital-Logo-Gujarati 2 copy.png", name: "Sangani Hospital", bg: "bg-white", pad: "p-2" },
                                        { src: "/clientlogo/aiow.png", name: "Aiow", bg: "bg-white", pad: "p-1" },
                                        { src: "/clientlogo/dhartiagro.png", name: "Dharti Agro", bg: "bg-white", pad: "p-2" },
                                        { src: "/clientlogo/dotcube.png", name: "DotCube", bg: "bg-white", pad: "p-2" },
                                        { src: "/clientlogo/trimurti_hospital.png", name: "Trimurti Hospitals", bg: "bg-white", pad: "p-2" },
                                    ].map((logo) => (
                                        <div key={logo.name + pass}
                                            className={`flex items-center justify-center h-16 w-40 rounded-2xl border border-slate-100 shadow-sm ${logo.bg} ${logo.pad} shrink-0 hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0 transition-all`}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={logo.src}
                                                alt={logo.name}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <style>{`
                        @keyframes marqueeScroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                    `}</style>
                </section>

                {/* ═══════════════════════════════════════ TABBED SERVICES ═══════════════════════════════════════ */}
                <section ref={servicesRef} id="services" className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">

                        {/* Section title */}
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Our Services & Packages</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">What Can We Do For You?</h2>
                            <p className="text-slate-500 text-sm max-w-md mx-auto">
                                Select any service below — all packages include <strong>free consultation</strong> and dedicated support.
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
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

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
                                    <div className="flex flex-wrap gap-2 md:shrink-0">
                                        {activeSvc.highlights.map(h => (
                                            <span key={h} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                                                <Check size={11} className="text-white" /> {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Packages grid */}
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-3 gap-5">
                                    {activeSvc.packages.map((pkg) => (
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

                                            {/* Price header */}
                                            <div className={`p-5 ${pkg.highlight ? "pt-8" : "pt-5"} ${pkg.highlight ? activeSvc.lightBg : "bg-slate-50"}`}>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-900">{pkg.name}</h4>
                                                        <div className="flex items-baseline gap-1.5 mt-1">
                                                            <span className={`text-3xl font-extrabold ${pkg.highlight ? activeSvc.lightText : "text-slate-900"}`}>{pkg.price}</span>
                                                            <span className="text-slate-400 text-sm">/ {pkg.usd}</span>
                                                        </div>
                                                    </div>
                                                    <div className={`text-xs font-medium px-2.5 py-1 rounded-full ${activeSvc.lightBg} ${activeSvc.lightText} flex items-center gap-1`}>
                                                        <Clock size={10} /> {pkg.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="p-5 flex-1 flex flex-col bg-white">
                                                <ul className="space-y-2.5 flex-1 mb-5">
                                                    {pkg.features.map((f, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                            <CheckCircle2 size={14} className={`${activeSvc.lightText} shrink-0 mt-0.5`} />
                                                            <span>{f}</span>
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
                                                <p className="text-center text-xs text-slate-400 mt-2">Free consultation · No upfront full payment</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom contact strip */}
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
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
                </section>

                {/* ═══════════════════════════════════════ HOW IT WORKS ═══════════════════════════════════════ */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Simple Process</p>
                            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
                            <p className="text-slate-500 text-sm mt-2">From application to live product in 4 easy steps</p>
                        </div>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", icon: MessageSquare, title: "Apply", desc: "Click 'Apply Now' on any package. Fill a quick 1-minute form.", color: "bg-blue-600" },
                                { step: "02", icon: Users, title: "Free Call", desc: "We schedule a 30-min discovery call to understand your goals.", color: "bg-indigo-600" },
                                { step: "03", icon: Code2, title: "We Build", desc: "Our team builds with weekly updates & milestone approvals.", color: "bg-violet-600" },
                                { step: "04", icon: Zap, title: "Go Live 🚀", desc: "We launch, test thoroughly, and hand over with training.", color: "bg-green-600" },
                            ].map(({ step, icon: Icon, title, desc, color }, i) => (
                                <div key={step} className="text-center relative">
                                    {i < 3 && <div className="hidden md:block absolute top-7 left-[55%] w-[90%] h-0.5 bg-slate-200 z-0" />}
                                    <div className={`relative z-10 w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step}</span>
                                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">{title}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ SOCIAL PROOF: GOOGLE REVIEWS + VIDEO ════════════════ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">

                        {/* Section Header */}
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Verified Reviews</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Real People. Real Results.</h2>
                            <p className="text-slate-500 text-sm max-w-md mx-auto">Verified reviews from Google &amp; direct clients across India, USA, UK &amp; UAE.</p>
                        </div>

                        {/* Google Rating Hero Badge */}
                        <div className="flex justify-center mb-12">
                            <a
                                href="https://search.google.com/local/reviews?placeid=ChIJoSZhLlgBWDkRty2tJ7rOdDg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-5 bg-white border-2 border-yellow-200 rounded-3xl px-8 py-5 shadow-lg hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1"
                            >
                                <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.6 20.5H24v7.6h11.3C33.9 33.3 29.5 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.7 19.6-20 0-1.2-.1-2.4-.4-3.5z" fill="#FFC107" />
                                    <path d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" fill="#FF3D00" />
                                    <path d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.3 26.9 36 24 36c-5.5 0-9.8-3.6-11.3-8.6L6 32.3C9.3 39 16 44 24 44z" fill="#4CAF50" />
                                    <path d="M43.6 20.5H24v7.6h11.3C34.5 31 31.8 33.1 29.3 34.8l6.2 5.2C40.5 36.5 44 30.8 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1565C0" />
                                </svg>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-3xl font-extrabold text-slate-900 leading-none">4.9</span>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium">on <strong className="text-slate-800">Google Reviews</strong> &middot; 35+ reviews</p>
                                </div>
                                <div className="hidden sm:flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full group-hover:bg-blue-700 transition-colors ml-2">
                                    See All Reviews
                                    <ArrowRight size={12} />
                                </div>
                            </a>
                        </div>

                        {/* Review Cards Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                                                style={{ background: `hsl(${i * 55 + 200}, 65%, 50%)` }}>
                                                {t.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900 text-sm leading-tight">{t.name}</p>
                                                <p className="text-slate-400 text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                        <svg className="w-5 h-5 opacity-30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.6 20.5H24v7.6h11.3C33.9 33.3 29.5 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.7 19.6-20 0-1.2-.1-2.4-.4-3.5z" fill="#FFC107" />
                                            <path d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" fill="#FF3D00" />
                                            <path d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.3 26.9 36 24 36c-5.5 0-9.8-3.6-11.3-8.6L6 32.3C9.3 39 16 44 24 44z" fill="#4CAF50" />
                                            <path d="M43.6 20.5H24v7.6h11.3C34.5 31 31.8 33.1 29.3 34.8l6.2 5.2C40.5 36.5 44 30.8 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1565C0" />
                                        </svg>
                                    </div>
                                    <div className="flex gap-0.5 mb-3">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                                </div>
                            ))}
                        </div>

                        {/* Video Testimonial + Leave a Review CTA */}
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Real Client Video Testimonial */}
                            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 flex flex-col pt-5">
                                <div className="px-6 mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-sm leading-tight">Video Testimonial</h3>
                                        <p className="text-slate-400 text-xs">Hear directly from our client</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-black flex items-center justify-center relative min-h-[220px]">
                                    <video
                                        src="/video/WhatsApp Video 2026-03-03 at 8.43.41 PM.mp4"
                                        controls
                                        className="w-full h-full max-h-[300px] object-contain"
                                        preload="metadata"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            {/* Leave a Review CTA */}
                            <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={28} className="text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <h3 className="text-slate-900 font-bold text-xl mb-2">Happy with our work?</h3>
                                <p className="text-slate-500 text-sm mb-6 max-w-xs">Your Google review helps other businesses find and trust us. It takes less than 60 seconds!</p>
                                <a
                                    href="https://search.google.com/local/writereview?placeid=ChIJoSZhLlgBWDkRty2tJ7rOdDg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-bold px-7 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg text-sm"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.6 20.5H24v7.6h11.3C33.9 33.3 29.5 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.7 19.6-20 0-1.2-.1-2.4-.4-3.5z" fill="#FFC107" />
                                        <path d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" fill="#FF3D00" />
                                        <path d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.3 26.9 36 24 36c-5.5 0-9.8-3.6-11.3-8.6L6 32.3C9.3 39 16 44 24 44z" fill="#4CAF50" />
                                        <path d="M43.6 20.5H24v7.6h11.3C34.5 31 31.8 33.1 29.3 34.8l6.2 5.2C40.5 36.5 44 30.8 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1565C0" />
                                    </svg>
                                    Write a Google Review
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ═══════════════════════════════════════ FAQ ═══════════════════════════════════════ */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">FAQs</p>
                            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
                        </div>
                        <div className="space-y-3">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ FINAL CTA ═══════════════════════════════════════ */}
                <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm mb-6">
                            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                            Limited slots — only 5 new projects this month
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ready to Grow Your Business?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                            Pick your service above, choose a package, and apply. We&apos;ll call you within 24 hours — free of charge.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <button onClick={scrollToServices}
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl">
                                <Sparkles size={20} /> Choose My Package
                            </button>
                            <a href={`https://wa.me/${WA}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-0.5">
                                <MessageSquare size={20} /> WhatsApp Us Now
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
                            {["✓ Free 30-Min Consultation", "✓ No Full Upfront Payment", "✓ Satisfaction Guarantee", "✓ Reply in 24 Hours"].map(i => <span key={i}>{i}</span>)}
                        </div>
                    </div>
                </section>

                {/* Mobile sticky bar */}
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex gap-3">
                    <button onClick={scrollToServices}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm">
                        <Sparkles size={14} /> View Packages
                    </button>
                    <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 text-white font-bold py-3 rounded-xl text-sm">
                        <MessageSquare size={14} /> WhatsApp
                    </a>
                </div>
                <div className="h-16 md:hidden" />
            </main>
        </>
    );
}
