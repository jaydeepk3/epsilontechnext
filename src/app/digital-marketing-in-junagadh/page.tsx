import { Metadata } from "next";
import Link from "next/link";
import { 
    CheckCircle2, 
    TrendingUp, 
    Smartphone, 
    Globe, 
    Zap, 
    MessageSquare, 
    Star, 
    ArrowRight, 
    ChevronDown, 
    ChevronUp, 
    Search, 
    Users, 
    MapPin, 
    Mail, 
    Phone,
    Layout,
    BarChart3
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// PART 1 — SEO META TAGS
export const metadata: Metadata = {
    title: "Digital Marketing Agency in Junagadh | Epsilon Technology",
    description: "Epsilon Technology is Junagadh's results-driven digital marketing agency. SEO, Google Ads, social media & web development. Free consultation — based in Junagadh.",
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
    },
    openGraph: {
        title: "Digital Marketing Agency in Junagadh | Epsilon Technology",
        description: "Epsilon Technology is Junagadh's results-driven digital marketing agency. SEO, Google Ads, social media & web development. Free consultation — based in Junagadh.",
        url: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
        siteName: 'Epsilon Technology',
        locale: 'en_IN',
        type: 'website',
    }
};

const faqs = [
    {
        q: "Why does my Junagadh business need digital marketing in 2026?",
        a: "In 2026, the first place a customer in Junagadh looks for a service is their smartphone. Whether they are looking for a dentist near Zanzarda Road or a textile wholesaler in GIDC, they use Google and Instagram. If your business isn't visible there, you effectively don't exist for a large portion of the market. Digital marketing ensures you stay relevant and accessible to your local Junagadh audience."
    },
    {
        q: "How much does digital marketing cost for a Junagadh business?",
        a: "Packages start from ₹8,000/month for local visibility and basic social media management. Full-service growth plans vary by scope. We offer a free audit before any commitment to help you understand what level of investment will deliver the best ROI for your business in Junagadh."
    },
    {
        q: "How long before I see results from SEO in Junagadh?",
        a: "Local SEO results in Junagadh typically take 6–12 weeks for low-competition keywords. Google My Business map pack results can appear faster—often in 3–6 weeks with full optimization. SEO is a long-term strategy, but it provides the most sustainable growth for Junagadh businesses."
    },
    {
        q: "Do you only work with doctors and clinics in Junagadh?",
        a: "No. While we have a strong portfolio in healthcare marketing, we work with retailers, manufacturing units in GIDC, real estate agents, coaching classes, and jewellery stores across Junagadh. Our strategies are customized for your specific industry."
    },
    {
        q: "Can you manage both my website and my social media?",
        a: "Absolutely. As a full-service digital marketing agency in Junagadh, we manage your entire digital presence. This ensures that your brand message is consistent across your website, SEO, and social media platforms, leading to better conversion rates."
    },
    {
        q: "What makes Epsilon different from other agencies in Junagadh?",
        a: "Epsilon Technology is physically based on Zanzarda Road, Junagadh. Unlike remote agencies with Junagadh landing pages, we are actually here. We understand the local market culture, we meet you in person, and we focus on real business results—not just vanity metrics like likes and follows."
    },
    {
        q: "Do I need a big budget to start with Google Ads in Junagadh?",
        a: "No—we have run effective local campaigns from ₹5,000/month. The key is precise targeting to Junagadh users and optimizing for high-intent keywords. We manage your budget to ensure you get leads, not just impressions."
    },
    {
        q: "How do I get started with Epsilon Technology?",
        a: "Book a free 30-min consultation. We audit your current online presence and recommend a plan tailored to your Junagadh business. No commitment required. You can visit our office on Zanzarda Road or we can connect over Zoom."
    }
];

export default function DigitalMarketingJunagadhPage() {
    const [openFaq, setOpenFaq] = useState<number[]>([0, 1]);

    const toggleFaq = (index: number) => {
        if (openFaq.includes(index)) {
            setOpenFaq(openFaq.filter(i => i !== index));
        } else {
            setOpenFaq([...openFaq, index]);
        }
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Epsilon Technology",
                "description": "Digital marketing agency in Junagadh offering SEO, Google Ads, social media, and web development.",
                "url": "https://epsilon-technology.com",
                "telephone": "+918160881461",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Zanzarda Road",
                    "addressLocality": "Junagadh",
                    "addressRegion": "Gujarat",
                    "postalCode": "362001",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 21.5222,
                    "longitude": 70.4579
                },
                "openingHours": "Mo-Sa 09:00-19:00",
                "priceRange": "₹₹",
                "areaServed": ["Junagadh", "Saurashtra", "Gujarat"],
                "serviceType": [
                    "Digital Marketing",
                    "SEO Services",
                    "Social Media Marketing",
                    "Google Ads",
                    "Website Development",
                    "WhatsApp Marketing"
                ]
            },
            {
                "@type": "Service",
                "name": "SEO Services in Junagadh",
                "provider": { "@type": "LocalBusiness", "name": "Epsilon Technology" },
                "areaServed": "Junagadh"
            },
            {
                "@type": "Service",
                "name": "Social Media Marketing in Junagadh",
                "provider": { "@type": "LocalBusiness", "name": "Epsilon Technology" },
                "areaServed": "Junagadh"
            },
            {
                "@type": "Service",
                "name": "Google Ads Agency in Junagadh",
                "provider": { "@type": "LocalBusiness", "name": "Epsilon Technology" },
                "areaServed": "Junagadh"
            },
            {
                "@type": "Service",
                "name": "Website Development for Junagadh Businesses",
                "provider": { "@type": "LocalBusiness", "name": "Epsilon Technology" },
                "areaServed": "Junagadh"
            },
            {
                "@type": "Service",
                "name": "WhatsApp Marketing in Junagadh",
                "provider": { "@type": "LocalBusiness", "name": "Epsilon Technology" },
                "areaServed": "Junagadh"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            
            <main className="bg-white min-h-screen text-slate-900 font-sans">
                
                {/* SECTION 1 — HERO */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-xl">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Junagadh&apos;s Trusted Digital Marketing Partner · Since 2017
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                            Digital Marketing Agency in Junagadh — <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic">Real Results, Not Just Likes</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Stop wasting your budget on vanity metrics. Epsilon Technology is a physically based digital marketing agency in Junagadh that delivers measurable outcomes through local SEO, performance-led Google Ads, and high-impact social media. Get your free strategy audit today from the team that knows Junagadh best.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                            <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center gap-2">
                                Get a Free Marketing Audit <ArrowRight size={20} />
                            </Link>
                            <a href="#results" className="text-white hover:text-blue-400 font-bold text-lg transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1">
                                See Our Local Results
                            </a>
                        </div>
                        
                        <p className="text-slate-400 text-sm font-medium">
                            We are based on <span className="text-blue-300">Zanzarda Road, Junagadh</span> — not a Delhi or Rajkot agency with a Junagadh landing page.
                        </p>

                        {/* HERO STATS STRIP */}
                        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-0 border-y border-white/10 py-10 bg-white/5 backdrop-blur-sm rounded-3xl">
                            <div className="px-6 py-4 border-r border-white/10 text-center">
                                <p className="text-4xl font-black text-white mb-1">7+</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Years in Junagadh</p>
                            </div>
                            <div className="px-6 py-4 lg:border-r border-white/10 text-center">
                                <p className="text-4xl font-black text-white mb-1">50+</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Local & Global Clients</p>
                            </div>
                            <div className="px-6 py-4 border-r border-white/10 text-center">
                                <p className="text-4xl font-black text-white mb-1">4.9★</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Google Rating</p>
                            </div>
                            <div className="px-6 py-4 text-center">
                                <p className="text-4xl font-black text-white mb-1">90</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Days to Results</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — WHY JUNAGADH BUSINESSES NEED DIGITAL MARKETING */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                                Why Junagadh Businesses Can&apos;t Afford to Ignore Digital Marketing
                            </h2>
                            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                        </div>
                        
                        <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
                            <p>
                                Junagadh is digitizing rapidly in 2026. Whether you are running a multi-specialty clinic near <strong>Zanzarda Road</strong> or a high-output manufacturing unit in <strong>GIDC</strong>, your customers are searching for you online before they ever step into your office. If you own a jewellery store on <strong>MG Road</strong> or a popular restaurant near <strong>Kalwa Chowk</strong>, your visibility on Google and Instagram is your most valuable business asset.
                            </p>
                            <p>
                                As a local <strong>digital marketing agency in Junagadh</strong>, we see the shift happening every single day. Customers in areas like <strong>Dhal Road</strong> and <strong>Ranavav Chowk</strong> no longer rely solely on word-of-mouth; they check reviews, look at Instagram Reels, and search Google for the &quot;best service provider near me.&quot; If your competitor is visible and you are not, you are losing business every single hour to a business that might have a worse product but a better digital presence.
                            </p>
                            <p>
                                For Junagadh&apos;s clinics and hospitals, digital marketing isn&apos;t just about &quot;likes&quot;—it&apos;s about building patient trust and providing accessibility. For real estate agents, coaching classes, and retail shops, it&apos;s about being the first name that pops up when a local resident starts their search. We understand that <Link href="/blog/doctor-marketing-ideas-junagadh" className="text-blue-600 font-bold hover:underline">doctor marketing in Junagadh</Link> requires a different approach than marketing a cafe, which is why we offer specialized, local expertise.
                            </p>
                            <p>
                                The risk is simple: if you are not visible on Google and Instagram, you are handing your market share to someone else. The digital landscape in Junagadh is more competitive than ever, and staying ahead requires a partner who understands the local pulse. We aren&apos;t just an agency; we are Junagadh locals helping Junagadh businesses thrive in a digital-first economy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — SERVICES */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Digital Marketing Services in Junagadh</h2>
                            <p className="text-xl text-slate-600">Every service below is available to Junagadh businesses with a free initial consultation.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* SERVICE BLOCK 1 — SEO */}
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">SEO Services in Junagadh</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Rank on Google when Junagadh customers search for your specific services. When someone searches &quot;best clinic in Junagadh&quot; or &quot;restaurant near Kalwa Chowk&quot; — we make sure they find you first. Our <strong>local SEO Junagadh</strong> strategy focuses on dominating the map pack and organic search results to drive consistent traffic.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Local Keyword Research</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Google My Business Optimization</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Local Citation Building</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Technical SEO Audits</li>
                                </ul>
                                <Link href="/digital-marketing" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                    Learn about our SEO process <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* SERVICE BLOCK 2 — SOCIAL MEDIA */}
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Social Media Marketing in Junagadh</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Instagram and Facebook are where Junagadh&apos;s buyers spend their time. We create high-engagement Reels, targeted Meta Ads, and community-driven content. We specialize in local content that works: before/after patient stories, behind-the-scenes at Junagadh retail shops, and local business testimonials that build massive trust.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> High-Impact Reels Creation</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Targeted Meta Ad Campaigns</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Content Calendar Management</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Local Influencer Outreach</li>
                                </ul>
                                <Link href="/portfolio" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all">
                                    See our social media work <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* SERVICE BLOCK 3 — GOOGLE ADS */}
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                                    <BarChart3 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Google Ads Agency in Junagadh</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Get in front of Junagadh customers who are actively searching for what you offer. Only pay when someone clicks. We manage your entire campaign—from search ads for real estate to call-only ads for emergency healthcare—so you get qualified leads and phone calls, not just empty impressions.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> High-ROI Search Campaigns</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Local Call-Only Advertising</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Display & Remarketing</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Lead Tracking & Reporting</li>
                                </ul>
                                <Link href="/contacts" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all">
                                    Get a free Google Ads audit <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* SERVICE BLOCK 4 — WEBSITE DEVELOPMENT */}
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Layout size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Website Development for Junagadh Businesses</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A fast, mobile-first website is the foundation of all your marketing. Most Junagadh businesses have slow, outdated websites that lose customers before they even call. We build high-performance Next.js websites with WhatsApp integration that load in under 2 seconds.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Next.js & React Development</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Mobile-Responsive Design</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> SEO-Ready Architecture</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Fast WhatsApp Connectivity</li>
                                </ul>
                                <Link href="/services/web-development" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                                    View website packages <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* SERVICE BLOCK 5 — WHATSAPP MARKETING (Centered last) */}
                            <div className="md:col-span-2 max-w-2xl mx-auto bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                    <MessageSquare size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">WhatsApp Marketing & Automation in Junagadh</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    WhatsApp is the #1 communication channel for Junagadh businesses. We set up systems using the WhatsApp Business API that follow up with every lead automatically—so you never lose a customer because you were busy. Build automated appointment booking for clinics or order tracking for retail stores.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Business API Setup</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Automated Lead Follow-up</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Broadcast Messaging</li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Chatbot Integration</li>
                                </ul>
                                <Link href="/product/whatsapp-business-api" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all">
                                    Learn about WhatsApp automation <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — LOCAL RESULTS / MINI CASE STUDIES */}
                <section id="results" className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Results We&apos;ve Delivered for Junagadh & Saurashtra Businesses</h2>
                            <p className="text-xl text-slate-600">We don&apos;t just talk about results — here are real examples from our local partners.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative group overflow-hidden">
                                <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                                </div>
                                <div className="mb-6">
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-2">🏥 Healthcare · 📍 Junagadh</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Herbal Care Clinic, Junagadh</h3>
                                </div>
                                <div className="space-y-4 mb-8 text-sm">
                                    <p><strong className="text-slate-900">Challenge:</strong> New clinic needed visibility in a competitive Gujarat healthcare market.</p>
                                    <p><strong className="text-slate-900">Solution:</strong> Strategic social media setup and a targeted digital marketing launch focused on building local authority.</p>
                                    <p className="italic text-slate-600">&quot;Clinic went from zero online presence to active social media following and consistent patient enquiries.&quot;</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative group overflow-hidden">
                                <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                                </div>
                                <div className="mb-6">
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-2">🏥 Hospital · 📍 Saurashtra</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Sangani Hospital</h3>
                                </div>
                                <div className="space-y-4 mb-8 text-sm">
                                    <p><strong className="text-slate-900">Challenge:</strong> Hospital needed to reach patients across the Saurashtra region digitally.</p>
                                    <p><strong className="text-slate-900">Solution:</strong> Complete digital presence overhaul and performance-led regional marketing campaigns.</p>
                                    <p className="italic text-slate-600">&quot;Consistent patient growth through digital channels and improved brand recall across the region.&quot;</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative group overflow-hidden">
                                <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                                </div>
                                <div className="mb-6">
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-2">🏥 Hospital · 📍 Junagadh</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Dr Priyank Bagthariya</h3>
                                </div>
                                <div className="space-y-4 mb-8 text-sm">
                                    <p><strong className="text-slate-900">Challenge:</strong> Need orthopeadic operation inquiry via social media channels.</p>
                                    <p><strong className="text-slate-900">Solution:</strong> Targeted orthopedic branding and inquiry-focused social media strategies.</p>
                                    <p className="italic text-slate-600">&quot;Consistent patient growth through digital channels and higher conversion on high-value surgical inquiries.&quot;</p>
                                </div>
                                {/* TODO: Verify if more recent results are available for Dr Priyank Bagthariya */}
                            </div>
                        </div>

                        {/* CTA CARD */}
                        <div className="mt-12 bg-blue-600 rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">📍 Junagadh · Open for applications</span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Business Could Be Here</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">We have capacity for only 2 new Junagadh-based clients this quarter. If you want results like the ones above, let&apos;s build your strategy today.</p>
                            <Link href="/contacts" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                                Apply for a free audit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — LOCAL COMPETITIVE ADVANTAGE */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                    Why Choose a Junagadh-Based Agency Over One From Delhi or Rajkot?
                                </h2>
                                
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30">
                                            <MapPin className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">We are actually here</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                Epsilon Technology is physically located in Junagadh on Zanzarda Road. Several agencies appearing in Google for &quot;digital marketing Junagadh&quot; are based in Delhi or Rajkot — they have created Junagadh pages for SEO but have never actually operated here.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30">
                                            <Users className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">We know the local market</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                We understand Junagadh&apos;s business culture, its local festivals (Maha Shivratri, Navratri), and the unique buying behavior of its residents. This local knowledge shapes every campaign we run, ensuring your ads resonate with the people of Saurashtra.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30">
                                            <MessageSquare className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">You can meet us in person</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                Unlike remote agencies, you can visit our office, meet the team, and have face-to-face strategy sessions. For Junagadh businesses that value accountability and real partnership — this face-to-face connection matters immensely.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30">
                                            <Zap className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Global quality, local pricing</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                We bring the same tools and strategies used by top-tier agencies in Mumbai — at pricing that makes sense for the Junagadh market. You get world-class expertise without the metro-city price tag.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />
                                <div className="relative bg-slate-800 border border-slate-700 p-10 rounded-[2.5rem] shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Meet Us In Person</h3>
                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4 text-slate-300">
                                            <MapPin className="text-blue-500 shrink-0" />
                                            <span>Zanzarda Road, Junagadh, Gujarat 362001</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-300">
                                            <Phone className="text-blue-500 shrink-0" />
                                            <span>+91 81608 81461</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-300">
                                            <Mail className="text-blue-500 shrink-0" />
                                            <span>hello@epsilon-technology.com</span>
                                        </div>
                                    </div>
                                    <div className="h-48 bg-slate-900/50 rounded-2xl flex items-center justify-center border border-slate-700 border-dashed mb-8">
                                        <span className="text-slate-500 text-sm font-medium">Map view available on contact page</span>
                                    </div>
                                    <Link href="/about-us" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors block text-center">
                                        Learn More About Our Team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — EXPANDED FAQ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions About Digital Marketing in Junagadh</h2>
                            <p className="text-xl text-slate-600">Got questions? We have the answers for Junagadh business owners.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-blue-300">
                                    <button 
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-bold text-lg text-slate-900 pr-8">{faq.q}</span>
                                        {openFaq.includes(index) ? <ChevronUp className="text-blue-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaq.includes(index) ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-white">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — FINAL CTA */}
                <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent)]" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready to Grow Your Junagadh Business Online?</h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Book your free 30-minute consultation today. No upfront payment required—just a real discussion about your growth. We are physically based in Junagadh and respond within 4 hours.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                            <Link href="/contacts" className="bg-white text-blue-900 font-bold px-10 py-5 rounded-2xl text-xl transition-all hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1">
                                Get My Free Marketing Audit →
                            </Link>
                            <a href="https://wa.me/918160881461" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all flex items-center justify-center gap-2">
                                <MessageSquare size={24} /> WhatsApp Us Now
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                            <div className="flex items-center gap-2 text-blue-200 font-medium">
                                <CheckCircle2 size={20} className="text-green-400" /> Free 30-min consultation
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 font-medium">
                                <CheckCircle2 size={20} className="text-green-400" /> No upfront payment
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 font-medium">
                                <CheckCircle2 size={20} className="text-green-400" /> Physically based in Junagadh
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 font-medium">
                                <CheckCircle2 size={20} className="text-green-400" /> Response within 4 hours
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-slate-100 border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-slate-500 text-sm mb-8">
                            © {new Date().getFullYear()} Epsilon Technology. Proudly serving Junagadh, Saurashtra, and Gujarat. 
                            Physically located on Zanzarda Road, Junagadh 362001.
                        </p>
                        <div className="flex justify-center gap-8 text-slate-400">
                            {/* TODO: Add logo/image src paths */}
                            {/* <Image src="/logo-dark.png" alt="Epsilon Technology Logo" width={120} height={40} className="opacity-50 grayscale" /> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
