import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { DollarSign, BarChart3, Clock, Rocket, ShieldCheck, Settings } from "lucide-react";
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "The Real Cost of Custom Application Development in 2026 | Price Guide",
    description: "How much does custom application development cost in 2026? A detailed breakdown of pricing factors for startups and enterprises.",
    keywords: ["custom application development", "app development cost", "software development pricing", "mobile app cost 2026", "enterprise software cost"],
    openGraph: {
        title: "The Real Cost of Custom Application Development in 2026",
        description: "Everything you need to know about budgeting for your next custom software project.",
        url: "https://epsilon-technology.com/blog/the-real-cost-of-custom-application-development-2026/",
        type: "article",
        publishedTime: "2026-02-17T10:00:00.000Z",
        authors: ["Epsilon Technology Team"],
    },
    alternates: {
        canonical: '/blog/the-real-cost-of-custom-application-development-2026/',
    }
};

const costFactors = [
    {
        title: "Platform Complexity",
        description: "Are you building for iOS, Android, Web, or all three? Cross-platform solutions like React Native can save 30-40%.",
        icon: Settings
    },
    {
        title: "Feature Set",
        description: "Simple apps cost less. Advanced features like AI integration, real-time chat, or complex payment flows increase costs.",
        icon: Rocket
    },
    {
        title: "Design Requirements",
        description: "Custom UI/UX design is an investment. Templates are cheaper but less effective for branding.",
        icon: BarChart3
    },
    {
        title: "Backend Infrastructure",
        description: "Server costs, database management, and API integrations are ongoing expenses often overlooked.",
        icon: ShieldCheck
    },
    {
        title: "Timeline Urgency",
        description: "Rush projects require more developer hours in a shorter time, leading to premium pricing.",
        icon: Clock
    },
    {
        title: "Maintenance & Support",
        description: "Post-launch updates, bug fixes, and server monitoring typically cost 15-20% of the initial budget annually.",
        icon: DollarSign
    }
];

const faqs = [
    {
        question: "What is the average cost of a custom app in 2026?",
        answer: "A simple MVP ranges from $10,000 to $25,000. Mid-level apps cost between $30,000 and $70,000. Complex enterprise solutions can exceed $100,000."
    },
    {
        question: "How can I reduce custom application development costs?",
        answer: "Start with an MVP (Minimum Viable Product), use cross-platform technologies like React Native, and have a clear, detailed scope before starting development."
    },
    {
        question: "Do you offer fixed-price contracts?",
        answer: "Yes, for projects with a clearly defined scope, we offer fixed-price contracts. For evolving projects, we recommend a time-and-materials model."
    },
    {
        question: "Does the cost include maintenance?",
        answer: "Typically, development costs are separate from maintenance. However, we offer support packages to ensure your app stays updated and secure."
    }
];

export default function BlogCostOfCustomApp() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-green-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        2026 Price Guide
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        The Real Cost of <span className="text-green-600">Custom Application Development</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Don't let hidden costs surprise you. We break down exactly what you're paying for and how to budget effectively for your next software project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#breakdown"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-green-600 hover:bg-green-700 hover:shadow-green-200' })}
                        >
                            See Cost Breakdown
                        </Link>
                        <Link
                            href="/services/custom-software"
                            className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section id="breakdown" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-green mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Prices Vary So Much</h2>
                        <p className="mb-8">
                            One of the most common questions we get is, "How much does an app cost?" The answer is always, "It depends."
                            <strong>Custom application development</strong> is like building a house—the cost depends on the size, materials, and location.
                        </p>
                        <p className="mb-12">
                            In 2026, the demand for high-quality, secure, and scalable applications has driven costs up slightly, but efficiency tools like AI and better frameworks have helped balance this out.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Factors Influencing Cost</h3>
                        <div className="grid md:grid-cols-2 gap-8 mb-16 not-prose">
                            {costFactors.map((factor, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-100 hover:bg-green-50 transition-colors">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-600 shadow-sm mb-4">
                                        <factor.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{factor.title}</h3>
                                    <p className="text-slate-600 text-base">{factor.description}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Estimated Ranges</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-8">
                            <li><strong>Simple App (MVP):</strong> $10k - $25k. Basic features, standard UI.</li>
                            <li><strong>Medium Complexity:</strong> $30k - $70k. API integrations, custom UI, payment gateways.</li>
                            <li><strong>Enterprise / Advanced:</strong> $100k+. Complex backend, high security, AI features, multi-platform.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. CTA Section */}
            <section className="py-24 bg-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get a Precise Quote</h2>
                    <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
                        Stop guessing. Tell us about your project, and we'll provide a detailed, transparent cost estimation within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-green-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Request Free Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Pricing FAQs
                        </h2>
                        <p className="text-lg text-slate-600">
                            Common questions about custom software pricing.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-green-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-green-600 hover:no-underline py-6 text-lg">
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
                        "headline": "The Real Cost of Custom Application Development in 2026",
                        "description": "A detailed breakdown of pricing factors for custom application development in 2026. Learn about costs for MVPs, mid-level apps, and enterprise solutions.",
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
                        "datePublished": "2026-02-17",
                        "dateModified": "2026-02-17",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://epsilon-technology.com/blog/the-real-cost-of-custom-application-development-2026"
                        }
                    })
                }}
            />
        </main>
    );
}
