import { Metadata } from "next";
import { UAEServicesTabs } from "@/components/UAEServicesTabs";
import { UAEFaqAccordion } from "@/components/UAEFaqAccordion";
import { CheckCircle2, MessageSquare, Star, Globe, Zap, Clock, Shield, Award, Users, Code2, ArrowRight } from "lucide-react";

import Image from "next/image";

export const metadata: Metadata = {
    title: { absolute: "Web & App Development Agency for UAE Businesses | Epsilon Technology" },
    description: "Epsilon Technology builds websites, mobile apps, eCommerce stores and WhatsApp Business solutions for businesses in Dubai, Abu Dhabi, Sharjah and across UAE. 7 years experience. 100+ projects. Free consultation.",
    keywords: "web development agency Dubai, mobile app development UAE, eCommerce development Dubai, WhatsApp Business API UAE, website design Abu Dhabi, app development agency UAE",
    openGraph: {
        title: "Web & App Development for UAE Businesses | Epsilon Technology",
        description: "Trusted by businesses across Dubai, Abu Dhabi and UAE. Websites, apps, eCommerce and WhatsApp automation. 4.9★ rated. Free consultation.",
    }
};

const faqs = [
    {
        q: "How do I pay from UAE? Do you accept AED?",
        a: "Yes. We accept payments via Stripe (credit/debit card), Wise (bank transfer), and direct bank transfer. You can pay in AED, USD, or GBP. We provide a proper invoice for every payment. No cash, no complications."
    },
    {
        q: "Will you sign an NDA before we discuss our project?",
        a: "Absolutely. We sign a Non-Disclosure Agreement before any detailed project discussion. Your business idea and project details are fully protected. We can send you our standard NDA within 2 hours of your request."
    },
    {
        q: "Can we have calls during UAE business hours?",
        a: "Yes. UAE (GST) is only 1.5 hours behind India (IST), making us one of the most timezone-compatible offshore agencies for UAE clients. We are available for Zoom or WhatsApp calls from 9AM to 7PM GST, Sunday to Thursday."
    },
    {
        q: "How is Epsilon Technology different from a local Dubai agency?",
        a: "Local Dubai agencies typically charge AED 15,000–50,000 for a basic website. We deliver the same — often higher — quality starting at AED 3,500, using modern technology (Next.js, React Native) that many local agencies don't use. You also get direct access to the founder, not a junior account manager."
    },
    {
        q: "Can you build apps or websites with Arabic language support?",
        a: "Yes. We build fully bilingual (Arabic + English) websites and apps with proper RTL (right-to-left) layout for Arabic. We work with your Arabic translator or can recommend one. All our eCommerce and app projects for UAE clients include Arabic support by default."
    },
    {
        q: "What if I'm not happy with the work?",
        a: "We have a 100% satisfaction guarantee. We work in milestones — you approve each stage before we proceed. You never pay the full amount upfront. If we miss an agreed deadline, we continue working at no extra charge until delivery."
    }
];

export default function UAEPage() {
    return (
        <main className="bg-white overflow-x-hidden min-h-screen">

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 1 — HERO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            🇦🇪 Proudly Serving Businesses Across Dubai, Abu Dhabi & UAE
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Web & App Development Agency <br className="hidden md:block" />
                            for <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">UAE Businesses</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-slate-200 md:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                            We build high-performance websites, mobile apps, eCommerce stores, and WhatsApp Business automation for restaurants, clinics, retail stores, and startups across the UAE — at a fraction of local agency cost, with zero compromise on quality.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-5 mb-10 text-slate-400 text-sm">
                            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                <span className="text-white font-medium">4.9/5 Rated Agency</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Globe size={14} className="text-blue-400" />
                                <span className="text-white font-medium">International Experience</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <MessageSquare size={14} className="text-green-400" />
                                <span className="text-white font-medium">WhatsApp Support</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Zap size={14} className="text-yellow-400" />
                                <span className="text-white font-medium">Reply in 4 Hours GST</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://calendly.com/jaydeepkataria" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                                Book Free UAE Consultation
                            </a>
                            <a href="https://wa.me/918160881461?text=Hi%2C%20I%20am%20a%20UAE%20business%20owner%20and%20I%20want%20to%20discuss%20a%20project."
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5">
                                <MessageSquare size={20} /> WhatsApp Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 2 — WHY UAE BUSINESSES CHOOSE US
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why UAE Businesses Work With Epsilon Technology</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">We understand the Dubai market, we work in your timezone, and we deliver on time.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🕐</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">We Work in Your Timezone</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">UAE (GST) is only 1.5 hours behind India (IST). We schedule calls during your business hours and guarantee a response within 4 hours.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">60% Less Than Local UAE Agencies</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Dubai agencies charge AED 15,000–50,000 for a website. We deliver the same quality starting at AED 3,500 — with better tech and faster delivery.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">We Understand UAE Business Culture</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Relationship-first. We assign you a dedicated point of contact. No ticket systems — direct WhatsApp and Zoom access to our team.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">NDA & UAE-Friendly Contracts</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">We sign NDAs before any discussion. Our contracts are clear, milestone-based, and protect your IP fully.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Pay in AED, USD or GBP</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">We accept payments via Stripe, Wise, and bank transfer. No complications. Invoice provided for every payment.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">7 Years. 100+ Projects. 4 Countries.</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Founded in 2018, we have delivered projects for clients in UAE, USA, UK and India. Real experience. Real results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 3 — SERVICES FOR UAE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Build for UAE Businesses</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">All services include free consultation, milestone-based delivery, and post-launch support.</p>
                    </div>

                    <UAEServicesTabs />
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 4 — WHO WE SERVE IN UAE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve in UAE</h2>
                    <p className="text-slate-500 text-lg mb-10">We have built digital products for these business types across Dubai, Abu Dhabi, and Sharjah.</p>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {["🍽️ Restaurants & Cafes", "🏥 Clinics & Healthcare", "🏨 Hotels & Hospitality", "🛍️ Retail & Fashion", "🏗️ Real Estate", "⚖️ Legal & Consulting", "🎓 Education & Training", "💼 Startups & SMEs"].map((ind) => (
                            <span key={ind} className="bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                                {ind}
                            </span>
                        ))}
                    </div>

                    <p className="text-slate-400 text-sm mt-4">Don&apos;t see your industry? We work with any UAE business — contact us for a custom consultation.</p>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 3.5 — PORTFOLIO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Recent Work</h2>
                        <p className="text-slate-500 text-lg">Real apps and platforms we've built for clinics, restaurants, and retail stores.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Portfolio Item 1 */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                            <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                                <Image src="/portfolio/ontapp.webp" alt="Ontapp Menu App" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-slate-900 text-lg">Restaurant Menu App</h3>
                                <p className="text-slate-500 text-sm">iOS & Android React Native app with real-time orders.</p>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                            <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                                <Image src="/portfolio/jewellery-website.webp" alt="eCommerce Store" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-slate-900 text-lg">eCommerce Store</h3>
                                <p className="text-slate-500 text-sm">Custom Shopify development with high conversion rates.</p>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                            <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                                <Image src="/portfolio/rhodium-website.webp" alt="Corporate B2B Platform" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-slate-900 text-lg">Corporate B2B Platform</h3>
                                <p className="text-slate-500 text-sm">High-performance Next.js website built for enterprise scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 5 — SOCIAL PROOF / TESTIMONIALS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our International Clients Say</h2>
                        <p className="text-slate-500 text-lg">Real reviews from real business owners — verified on Google and Upwork.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { initial: "T", name: "Thariq H.", role: "Product Manager, FieldR", flag: "🇺🇸", quote: "Jaydeep's team delivered an exceptional app for our sports tech startup. Passionate leadership and deep understanding of our business goals.", color: "bg-blue-600" },
                            { initial: "A", name: "Atul K.", role: "Owner, Brundhavan Restaurant", flag: "🇺🇸", quote: "One heck of an amazing guy — understands and delivers so fast. Created an app for our restaurant seamlessly.", color: "bg-emerald-600" },
                            { initial: "A", name: "Alex B.", role: "CTO, Confidential Tech Startup", flag: "🇺🇸", quote: "Professional approach with an enthusiastic work ethic. Looking forward to working together again!", color: "bg-indigo-600" }
                        ].map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${t.color}`}>
                                        {t.initial}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-slate-900">{t.name}</p>
                                            <span>{t.flag}</span>
                                        </div>
                                        <p className="text-slate-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-6 text-center max-w-4xl mx-auto">
                        <div>
                            <p className="text-4xl font-extrabold text-blue-600 mb-1">4.9★</p>
                            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Google Rating</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
                        <div>
                            <p className="text-4xl font-extrabold text-indigo-600 mb-1">100+</p>
                            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Projects Delivered</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
                        <div>
                            <p className="text-4xl font-extrabold text-emerald-600 mb-1">7+</p>
                            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 6 — HOW IT WORKS (UAE-specific)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work With UAE Clients</h2>
                        <p className="text-slate-500 text-lg">A simple, transparent process from first message to launch — fully remote, fully professional.</p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", icon: MessageSquare, title: "Free Consultation", desc: "Book a free 30-min Zoom or WhatsApp call. We learn about your business, goals, and timeline. No obligation.", color: "bg-blue-600" },
                            { step: "02", icon: Shield, title: "Proposal in 48 Hours", desc: "We send a detailed proposal with exact scope and timeline. NDA signed before we share any details.", color: "bg-indigo-600" },
                            { step: "03", icon: Code2, title: "Build With Weekly Updates", desc: "We build with full transparency. You get weekly Loom video updates and milestone approvals before we move forward.", color: "bg-violet-600" },
                            { step: "04", icon: Zap, title: "Launch & Ongoing Support", desc: "We launch, test on all devices, and hand over with full training. Post-launch support included in every package.", color: "bg-emerald-600" },
                        ].map(({ step, icon: Icon, title, desc, color }, i) => (
                            <div key={step} className="text-center relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                {i < 3 && <div className="hidden md:block absolute top-12 -right-8 w-10 text-slate-300 z-0">
                                    <ArrowRight className="w-full" />
                                </div>}
                                <div className={`relative z-10 w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                                    <Icon size={20} className="text-white" />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Step {step}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 7 — UAE-SPECIFIC FAQ
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Questions from UAE Business Owners</h2>
                    </div>

                    <UAEFaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 8 — TRUST BAR (logos & badges)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="bg-slate-100 py-8 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Accepted Payments</span>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">💳 Stripe</span>
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">🏦 Wise Transfer</span>
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">🏧 Bank Transfer</span>
                            </div>
                        </div>

                        <div className="w-full h-px md:w-px md:h-12 bg-slate-300"></div>

                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">We&apos;re Available On</span>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">💬 WhatsApp</span>
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">📹 Zoom</span>
                                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">📧 Email</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 text-xs mt-8">NDA signed before every project · Milestone-based payments · 100% Satisfaction Guarantee</p>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 9 — MEET THE FOUNDER
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">You Work Directly With the Founder</h2>
                        <p className="text-slate-500 text-lg">No account managers. No middlemen. Direct access to Jaydeep — the person who built 100+ projects.</p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center shadow-sm">
                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg shadow-blue-500/30 border-4 border-white bg-blue-100 flex items-center justify-center">
                                <Image src="/images/jayde.webp" alt="Jaydeep Kataria" fill className="object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Jaydeep Kataria</h3>
                            <p className="text-blue-600 font-semibold text-sm mb-6">Founder & Lead Developer, Epsilon Technology</p>

                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">7+ Years Experience</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">100+ Projects</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">4.9★ Rated</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">UAE · UK · USA</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a href="https://www.linkedin.com/in/jaydeepkataria" target="_blank" rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                                    Connect on LinkedIn
                                </a>
                                <a href="https://wa.me/918160881461?text=Hi%20Jaydeep%2C%20I%20found%20your%20UAE%20page%20and%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm flex justify-center items-center gap-2">
                                    <MessageSquare size={16} /> WhatsApp Jaydeep
                                </a>
                            </div>
                        </div>

                        <div className="md:col-span-7 pl-0 md:pl-8 relative text-center md:text-left">
                            <div className="absolute top-0 left-0 text-7xl text-blue-100 font-serif leading-none -mt-4 hidden md:block">&ldquo;</div>
                            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed relative z-10 px-0 md:px-8">
                                "I started Epsilon Technology 7 years ago because I believed quality digital products should not cost a fortune. Every UAE client I work with gets my personal attention — from the first call to the final launch. I am not just a vendor. I am your technology partner."
                            </p>
                            <p className="mt-8 text-slate-500 font-medium px-0 md:px-8">— Jaydeep Kataria, Founder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 10 — FINAL CTA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Digital Product in UAE?</h2>
                    <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">Free 30-minute consultation. No commitment. We reply within 4 hours during UAE business hours.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                        <a href="https://calendly.com/jaydeepkataria" target="_blank" rel="noopener noreferrer"
                            className="bg-white hover:bg-blue-50 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-lg">
                            Book Free Consultation
                        </a>
                        <a href="https://wa.me/918160881461?text=Hi%2C%20I%20am%20a%20UAE%20business%20and%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"
                            className="border-2 border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-xl transition-colors flex justify-center items-center gap-2 text-lg">
                            <MessageSquare size={20} /> WhatsApp Us Now
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/70 text-sm font-medium">
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-400" /> Free 30-Min Consultation</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-400" /> No Full Upfront Payment</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-400" /> NDA Available</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-400" /> Reply in 4 Hours GST</span>
                    </div>
                </div>
            </section>

        </main>
    );
}
