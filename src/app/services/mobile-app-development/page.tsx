import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Layers, Zap, PenTool } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

// Components
import { Process } from "@/components/sections/it/Process";
import { WhyChooseUs } from "@/components/sections/it/WhyChooseUs";
import { TechStack } from "@/components/sections/it/TechStack";
import { Testimonials } from "@/components/sections/it/Testimonials";
import { Portfolio } from "@/components/sections/it/Portfolio";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Expert Mobile App Development Agency | React Native & Flutter Experts",
    description: "Leading mobile app development company serving Canada, USA, and UK. We build scalable, high-performance iOS and Android apps using React Native and Flutter.",
    keywords: ["mobile app developers Canada", "custom app development services", "React Native developers", "iOS app development", "Android app development agency"],
    openGraph: {
        title: "Mobile App Development Services | Epsilon Technology",
        description: "Transform your ideas into reality with scalable, high-performance mobile apps for startups and enterprises.",
    },
    alternates: {
        canonical: 'https://www.epsilon-technology.com/services/mobile-app-development/',
    }
};

const serviceHighlights = [
    {
        title: "iOS Application Development",
        description: "Native and cross-platform iOS apps designed for the Apple ecosystem.",
        icon: Smartphone
    },
    {
        title: "Android Application Development",
        description: "Scalable Android apps that perform flawlessly across thousands of devices.",
        icon: Smartphone
    },
    {
        title: "Cross-Platform (React Native)",
        description: "Code once, deploy everywhere. Save time and money with React Native.",
        icon: Layers
    },
    {
        title: "UI/UX for Mobile",
        description: "Intuitive mobile designs that reduce friction and increase user retention.",
        icon: PenTool
    },
    {
        title: "App Maintenance",
        description: "Regular updates, bug fixes, and performance monitoring for your live apps.",
        icon: Zap
    },
    {
        title: "Enterprise Mobility",
        description: "Secure mobile solutions to empower your workforce and streamline operations.",
        icon: Tablet
    }
];

const faqs = [
    {
        question: "How much does it cost to build a mobile app?",
        answer: "A simple MVP usually starts around $5k-$10k. More complex apps with custom backends and advanced features can range from $15k to $50k+. We provide detailed quotes."
    },
    {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes! We specialize in React Native, which allows us to build for both iOS and Android simultaneously, saving you up to 40% in development costs."
    },
    {
        question: "How long does app development take?",
        answer: "Typically 3-6 months depending on complexity. A basic MVP can sometimes be launched in 8-12 weeks."
    },
    {
        question: "Will you help upload the app to the App Store?",
        answer: "Yes, we handle the entire submission process for both the Apple App Store and Google Play Store, ensuring compliance with their guidelines."
    },
    {
        question: "Who owns the code?",
        answer: "You do. Once the project is fully paid for, you own 100% of the source code and intellectual property."
    }
];

export default function MobileAppServices() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-sky-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                Custom Mobile App Development
                                <span className="block text-sky-600">for Startups & Enterprises</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We help businesses in Canada, USA, and UK launch high-performance apps. From idea to App Store, our expert team builds scalable iOS and Android solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-sky-600 hover:bg-sky-700 hover:shadow-sky-200' })}
                                >
                                    Start Your Project
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.png"
                                    alt="Mobile App Development"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Pain Point + Solution Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                            <h3 className="text-2xl font-bold text-red-900 mb-6">Why Many Apps Fail</h3>
                            <ul className="space-y-4">
                                {[
                                    "Glitchy performance leading to uninstalls",
                                    "Poor UI/UX confusing users",
                                    "Development taking too long and over budget",
                                    "Lack of support after launch"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0">
                                            <span className="block w-2 h-2 rounded-full bg-red-600" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                            <h3 className="text-2xl font-bold text-sky-900 mb-6">The Epsilon Advantage</h3>
                            <ul className="space-y-4">
                                {[
                                    "Native-like performance with React Native",
                                    "Award-winning UI/UX design teams",
                                    "Agile delivery ensuring on-time launch",
                                    "3 months free bug-fix support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sky-700">
                                        <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Service Overview */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Mobile Solutions</h2>
                        <p className="text-slate-600">We handle everything from strategy to submission.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Technology Stack */}
            <div className="bg-white">
                <TechStack />
            </div>

            {/* 5. Development Process */}
            <Process />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. Case Studies / Work Samples */}
            <div id="portfolio">
                <Portfolio />
            </div>

            {/* 8. Testimonials */}
            <Testimonials />

            {/* 9. FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Common questions about mobile app development.
                        </p>
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

            {/* 10. CTA Section */}
            <section id="contact" className="py-24 bg-sky-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have an App Idea?</h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                        Let's turn your concept into a tangible, profitable product. Book a discovery call today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-sky-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Book Free Strategy Call
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-sky-400 text-white hover:bg-sky-700' })}
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Mobile App Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://www.epsilon-technology.com"
                        },
                        "areaServed": ["Unites States", "United Kingdom", "Canada", "United Arab Emirates"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Mobile App Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "iOS App Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Android App Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "React Native Cross-Platform Development"
                                    }
                                }
                            ]
                        },
                        "description": "Top-rated mobile app development services for startups and enterprises. Specializing in React Native, iOS, and Android apps.",
                        "url": "https://www.epsilon-technology.com/services/mobile-app-development"
                    })
                }}
            />
        </main>
    );
}
