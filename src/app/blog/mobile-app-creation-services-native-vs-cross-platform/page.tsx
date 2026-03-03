import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { Check, X, Smartphone, Layers, Zap, DollarSign } from "lucide-react";
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Mobile App Creation Services: Native vs. Cross-Platform Guide",
    description: "Should you build Native (Swift/Kotlin) or Cross-Platform (React Native)? A complete guide on mobile app creation services for startups in 2026.",
    keywords: ["mobile app creation services", "native app development", "cross-platform app development", "react native vs swift", "flutter vs native"],
    openGraph: {
        title: "Native vs. Cross-Platform: Choosing the Right Mobile Strategy",
        description: "Save time and money by choosing the right development path for your app.",
        type: "article",
        publishedTime: "2026-02-19T10:00:00.000Z",
        authors: ["Epsilon Technology Team"],
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/mobile-app-creation-services-native-vs-cross-platform/',
    }
};

const comparisonTable = [
    {
        feature: "Cost",
        native: "High (2 codebases)",
        cross: "Medium (1 codebase)"
    },
    {
        feature: "Development Time",
        native: "Slow (6-9 months)",
        cross: "Fast (3-5 months)"
    },
    {
        feature: "Performance",
        native: "Excellent (100%)",
        cross: "Near Native (95%)"
    },
    {
        feature: "Maintenance",
        native: "Double Effort",
        cross: "Single Effort"
    }
];

const faqs = [
    {
        question: "Is React Native good for complex apps?",
        answer: "Yes! Apps like Facebook, Instagram, and Tesla use React Native. It handles complex features and animations exceptionally well."
    },
    {
        question: "Does cross-platform mean lower quality?",
        answer: "Not anymore. With modern frameworks like React Native and Flutter, the user experience is virtually indistinguishable from native apps."
    },
    {
        question: "Which approach is best for an MVP?",
        answer: "Cross-platform is the gold standard for MVPs. It allows you to launch on both iOS and Android simultaneously with a single budget."
    }
];

export default function BlogNativeVsCross() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-sky-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                        Technical Guide
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        <span className="text-sky-600">Mobile App Creation Services</span>: Native vs. Cross-Platform
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        The definitive guide to choosing the right technology stack for your mobile startup in 2026.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#comparison"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-sky-600 hover:bg-sky-700 hover:shadow-sky-200' })}
                        >
                            Compare Now
                        </Link>
                        <Link
                            href="/services/mobile-app-development"
                            className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section id="comparison" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-sky mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Great Debate</h2>
                        <p className="mb-4">
                            When looking for <strong>mobile app creation services</strong>, the first technical question is always: "Native or Cross-Platform?"
                        </p>
                        <ul className="list-disc pl-6 mb-8">
                            <li><strong>Native Development:</strong> Building separate apps for iOS (Swift) and Android (Kotlin).</li>
                            <li><strong>Cross-Platform Development:</strong> Building one app (React Native/Flutter) that runs on both.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Comparison at a Glance</h3>
                        <div className="not-prose overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Feature</th>
                                        <th className="p-4 font-bold text-slate-900">Native (Swift/Kotlin)</th>
                                        <th className="p-4 font-bold text-sky-600">Cross-Platform (React Native)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonTable.map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                                            <td className="p-4 text-slate-600">{row.native}</td>
                                            <td className="p-4 text-slate-700 font-medium bg-sky-50/30">{row.cross}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Choose Which?</h2>

                        <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Smartphone className="w-6 h-6 text-slate-500" />
                                    <h3 className="font-bold text-lg text-slate-900">Choose Native If...</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex gap-2"><Check size={16} className="text-green-500 mt-0.5" /> You need high-performance 3D games.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-green-500 mt-0.5" /> You rely heavily on AR/VR features.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Budget is not a constraint.</li>
                                </ul>
                            </div>

                            <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Layers className="w-6 h-6 text-sky-600" />
                                    <h3 className="font-bold text-lg text-sky-900">Choose Cross-Platform If...</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-sky-800">
                                    <li className="flex gap-2"><Check size={16} className="text-sky-600 mt-0.5" /> You are a startup or SMB.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-sky-600 mt-0.5" /> You need faster time-to-market.</li>
                                    <li className="flex gap-2"><Check size={16} className="text-sky-600 mt-0.5" /> You want one team to maintain both iOS & Android.</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            At Epsilon Technology, we specialize in high-performance React Native development, giving you the best of both worlds:
                            near-native performance with cross-platform efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-24 bg-sky-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build Faster & Smarter</h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                        Launch your app on both iOS and Android in record time with our React Native experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-sky-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Book Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Questions?
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-sky-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-sky-600 hover:no-underline py-6 text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Mobile App Creation Services: Native vs. Cross-Platform Guide",
                        "description": "Native vs. Cross-Platform mobile development guide. Compare cost, speed, and performance to choose the right tech stack for your app.",
                        "image": "https://epsilon-technology.com/blog_mobile_app_dev.png",
                        "author": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://epsilon-technology.com/logo.png"
                            }
                        },
                        "datePublished": "2026-02-19",
                        "dateModified": "2026-02-19",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://epsilon-technology.com/blog/mobile-app-creation-services-native-vs-cross-platform"
                        }
                    })
                }}
            />
        </main>
    );
}
