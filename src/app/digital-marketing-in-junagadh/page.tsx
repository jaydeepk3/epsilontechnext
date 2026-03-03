import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MapPin, TrendingUp, Users, Smartphone, Globe, BarChart3, PenTool } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { Link } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Digital Marketing & Advertising in Junagadh | Epsilon Technology",
    description: "Leading Digital Marketing Company in Junagadh. We offer SEO, Social Media Marketing, Web Design, and Branding services to grow your business.",
    keywords: ["Digital Marketing in Junagadh", "Advertising Agency Junagadh", "SEO Company Junagadh", "Social Media Marketing Junagadh", "Web Design Junagadh", "Branding Agency Junagadh"],
    openGraph: {
        title: "Digital Marketing & Advertising in Junagadh | Epsilon Technology",
        description: "Grow your business in Junagadh with expert digital marketing strategies.",
        url: "https://epsilon-technology.com/digital-marketing-in-junagadh/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
    }
};

const dmFaqs = [
    {
        question: "Why does my Junagadh business need digital marketing?",
        answer: "Junagadh is digitization fast. Whether you run a cafe on Zanzarda Road or a manufacturing unit in GIDC, your customers are searching for you online. If you aren't visible on Google or Instagram, you are handing customers to your competitors."
    },
    {
        question: "Do you only work with doctors?",
        answer: "While we are famous for our dominance in the healthcare sector, Epsilon Technology provides high-end digital solutions for Retail, Real Estate, Education, and B2B Manufacturing businesses in Junagadh."
    },
    {
        question: "What is the cost of digital marketing in Junagadh?",
        answer: "Quality marketing is an investment, not an expense. We offer tailored packages starting from focused 'Visibility Plans' for small businesses to comprehensive 'Growth Engines' for large enterprises. Book a free consultation to get a quote tailored to your goals."
    },
    {
        question: "Can you design a website for my business?",
        answer: "Yes. We don't just 'make websites'; we build high-performance digital assets using Next.js and React that load instantly and rank high on Google, unlike standard Wordpress sites."
    }
];

const services = [
    {
        icon: TrendingUp,
        title: "Social Media Marketing (SMM)",
        desc: "We turn your Instagram and Facebook into lead generation machines. From viral Reels to targeted Ads, we capture the attention of the Junagadh audience."
    },
    {
        icon: Globe,
        title: "Search Engine Optimization (SEO)",
        desc: "Rank #1 when customers search for your services in Junagadh. We optimize your Google My Business and website to dominate local search results."
    },
    {
        icon: Smartphone,
        title: "Web & App Development",
        desc: "Get a world-class website or mobile app. We use modern tech stacks (React Native, Next.js) to build fast, secure, and scalable platforms."
    },
    {
        icon: PenTool,
        title: "Branding & Content Creation",
        desc: "Your brand needs a voice. We provide professional logo design, graphic design, and video production to make your business look premium."
    }
];

export default function DigitalMarketingJunagadh() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-indigo-50/50 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-bold text-sm mb-8">
                        <MapPin size={16} />
                        <span> #1 Digital Marketing & Advertising Agency in Junagadh</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        We Don't Just Post. <br />
                        <span className="text-blue-600">We Grow Your Business.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Epsilon Technology provides data-driven <strong>Digital Marketing</strong> and <strong>IT Solutions</strong> for Junagadh's forward-thinking businesses. Stop wasting money on "likes" — start getting Sales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200">
                            Get A Free Audit
                        </Button>
                        <Button size="xl" variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
                            View Our Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why Choose Us */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Why Businesses in Junagadh Choose Epsilon</h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Local Expertise, Global Standards</h3>
                            <p className="text-slate-600">
                                We are based in Junagadh (Zanzarda Road), so we understand the local market pulse. But our strategies are global-standard, using the same tech and tools used by top agencies in Bangalore and USA.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Track Record</h3>
                            <p className="text-slate-600">
                                We have already dominated the healthcare niche in Saurashtra. We bring that same level of precision, analytics, and ROI-focus to your retail, real estate, or manufacturing business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Digital Marketing Services</h2>
                        <p className="text-slate-600">Comprehensive solutions to scale your brand online.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Local SEO Focus */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6">
                            Dominate Local Search
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Be Found When It Matters.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            When people in Junagadh search for <em>"Best Cafe," "Top Gym,"</em> or <em>"Real Estate Agent,"</em> do they find you or your competitor?
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Our <strong>Local SEO</strong> strategies ensure your Google My Business profile ranks #1 in the Map Pack, driving organic footfall and phone calls to your business daily.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Google My Business Optimization",
                                "Local Keyword Ranking",
                                "Review Management & Reputation",
                                "Citation Building"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={20} className="text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Custom FAQ */}
            <FAQ customFaqs={dmFaqs} />
        </main>
    );
}
