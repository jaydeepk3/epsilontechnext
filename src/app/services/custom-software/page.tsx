import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { Server, Settings, Database, Lock, Cloud, Key } from "lucide-react";
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
    title: "Custom Software Development Company | Enterprise Solutions UK & USA",
    description: "Leading software development agency providing tailored enterprise solutions. We solve complex business challenges with scalable, secure, and modern technology.",
    keywords: ["custom software development", "software development agency UK", "enterprise software", "SaaS development", "cloud migration services"],
    openGraph: {
        title: "Custom Software Development | Epsilon Technology",
        description: "Tailored software solutions designed to streamline your unique business operations and drive efficiency.",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/services/custom-software/',
    }
};

const serviceHighlights = [
    {
        title: "Enterprise Software",
        description: "Robust applications designed to handle complex workflows and large-scale manufacturing or logistics operations.",
        icon: Server
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end development of Software-as-a-Service products, from MVP to scale.",
        icon: Cloud
    },
    {
        title: "Legacy Modernization",
        description: "Updating old, risky systems to modern cloud architectures without downtime.",
        icon: Database
    },
    {
        title: "API Integration",
        description: "Seamlessly connecting your disparate software systems to work as one.",
        icon: Settings
    },
    {
        title: "Cloud Migration",
        description: "Securely moving your on-premise data and applications to AWS, Azure, or Google Cloud.",
        icon: Key
    },
    {
        title: "Data Security",
        description: "Implementing advanced encryption and compliance standards (GDPR, HIPAA).",
        icon: Lock
    }
];

const faqs = [
    {
        question: "Why chose custom software over off-the-shelf?",
        answer: "Off-the-shelf software forces you to change your business to fit the tool. Custom software is built to fit your exact business processes, giving you a competitive advantage."
    },
    {
        question: "How do you ensure data security?",
        answer: "We follow industry-standard security protocols, including encryption at rest and in transit, secure authentication, and regular vulnerability audits."
    },
    {
        question: "Do you offer white-label services?",
        answer: "Yes, we can build software that you can resell under your own brand name."
    },
    {
        question: "What is your development methodology?",
        answer: "We use Agile methodology with 2-week sprints, keeping you involved and showcasing progress regularly."
    }
];

export default function CustomSoftware() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-rose-100 rounded-full blur-[100px] opacity-40" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                Custom Software Development
                                <span className="block text-rose-600">Engineered for Success</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We are a premier software development agency serving the UK, USA, and UAE. We build robust, secure, and scalable custom software tailored to your specific business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-rose-600 hover:bg-rose-700 hover:shadow-rose-200' })}
                                >
                                    Discuss Your Needs
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    Our Work
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.png" // Placeholder
                                    alt="Custom Software Development"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Pain Point + Solution */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                            <h3 className="text-2xl font-bold text-red-900 mb-6">The Cost of Efficiency</h3>
                            <ul className="space-y-4">
                                {[
                                    "Spreadsheets becoming unmanageable",
                                    "Disconnected systems causing data errors",
                                    "Manual processes slowing down growth",
                                    "Generic software lacking key features"
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
                        <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                            <h3 className="text-2xl font-bold text-rose-900 mb-6">The Custom Solution</h3>
                            <ul className="space-y-4">
                                {[
                                    "Centralized dashboards for real-time insights",
                                    "Automated workflows saving 100+ hours/month",
                                    "Scalable architecture that grows with you",
                                    "Features built exactly for your workflow"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-rose-700">
                                        <Lock className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Overview */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise-Ready Solutions</h2>
                        <p className="text-slate-600">Tailored technology for complex business challenges.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Tech Stack */}
            <div className="bg-white">
                <TechStack />
            </div>

            {/* 5. Process */}
            <Process />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. Portfolio */}
            <div id="portfolio">
                <Portfolio />
            </div>

            {/* 8. Testimonials */}
            <Testimonials />

            {/* 9. FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Software Development FAQ
                        </h2>
                        <p className="text-lg text-slate-600">
                            Questions about building custom software.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-rose-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-rose-600 hover:no-underline py-6 text-lg">
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

            {/* 10. CTA */}
            <section id="contact" className="py-24 bg-rose-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Solve Your Tech Challenges</h2>
                    <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
                        Speak with our solution architects today and get a roadmap for your digital transformation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-rose-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Book Consultant Call
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-rose-400 text-white hover:bg-rose-700' })}
                        >
                            Request Proposal
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
                        "serviceType": "Custom Software Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "areaServed": ["United States", "United Kingdom", "Canada", "United Arab Emirates", "India"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Custom Software Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Enterprise Software Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "SaaS Product Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "API Integration"
                                    }
                                }
                            ]
                        },
                        "description": "Leading custom software development agency providing tailored enterprise solutions, SaaS development, and cloud migration services.",
                        "url": "https://epsilon-technology.com/services/custom-software"
                    })
                }}
            />
        </main>
    );
}
