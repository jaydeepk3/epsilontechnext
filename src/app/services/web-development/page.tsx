import { Metadata } from "next";
import { Button, getButtonClasses } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, Code2, Laptop, Zap, Search, Layout, Database, ShieldCheck } from "lucide-react";
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
    title: "Expert Web Development Services | Custom Next.js & React Solutions",
    description: "Top-rated web development company building fast, scalable, and SEO-optimized websites. We specialize in Next.js, React, and modern tech stacks for global businesses.",
    keywords: ["custom web development services", "web development company USA", "Next.js developers", "React development agency", "corporate website development", "SEO friendly websites"],
    openGraph: {
        title: "Expert Web Development Services | Epsilon Technology",
        description: "Scale your business with high-performance, custom-built websites designed for conversion.",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/services/web-development/',
    }
};

const serviceHighlights = [
    {
        title: "Custom Website Development",
        description: "Tailor-made websites that align perfectly with your brand identity and business goals.",
        icon: Code2
    },
    {
        title: "Web Application Development",
        description: "Responsive and powerful web apps built with modern frameworks like React and Next.js.",
        icon: Laptop
    },
    {
        title: "CMS Development",
        description: "Easy-to-manage content management systems using WordPress, Strapi, or Sanity.",
        icon: Database
    },
    {
        title: "Landing Page Design",
        description: "High-converting landing pages designed to turn visitors into leads.",
        icon: Layout
    },
    {
        title: "eCommerce Solutions",
        description: "Scalable online stores with secure payment gateways and inventory management.",
        icon: Search
    },
    {
        title: "Website Maintenance",
        description: "Ongoing support, security updates, and performance optimization.",
        icon: ShieldCheck
    }
];

const faqs = [
    {
        question: "How long does website development take?",
        answer: "A standard corporate website typically takes 4-6 weeks. Complex custom web applications can take 3-6 months depending on features and requirements."
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js for SEO-friendly applications. We also work with Python, PHP, and various CMS platforms."
    },
    {
        question: "Do you provide maintenance support?",
        answer: "Yes, we offer post-launch support and maintenance packages to ensure your website remains secure, fast, and up-to-date."
    },
    {
        question: "Can you work with international clients?",
        answer: "Absolutely. We work with clients across the USA, UK, UAE, and Canada, ensuring seamless communication in your time zone."
    },
    {
        question: "Is my website SEO-friendly?",
        answer: "Yes. We build with 'SEO-first' architecture, ensuring clean code, fast load times, and proper meta tagging from day one."
    }
];

export default function WebDevelopment() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-50" />
                    <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] bg-indigo-100 rounded-full blur-[100px] opacity-50" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                Custom Web Development Services
                                <span className="block text-blue-600">for Growing Businesses Worldwide</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We build fast, scalable, and SEO-optimized websites that help businesses in the USA, UK, and UAE grow. Using modern tech stacks like Next.js and React, we deliver digital excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg' })}
                                >
                                    Get a Free Consultation
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.png"
                                    alt="Web Development Services"
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
                            <h3 className="text-2xl font-bold text-red-900 mb-6">Common Challenges Businesses Face</h3>
                            <ul className="space-y-4">
                                {[
                                    "Slow or outdated websites driving users away",
                                    "Poor mobile experience hurting SEO rankings",
                                    "Low search visibility for key services",
                                    "Hard-to-scale legacy systems"
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
                        <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                            <h3 className="text-2xl font-bold text-green-900 mb-6">How Epsilon Technology Solves Them</h3>
                            <ul className="space-y-4">
                                {[
                                    "Mobile-first development for perfect UX",
                                    "High-performance code (Next.js/React)",
                                    "SEO-ready structure to rank higher",
                                    "Scalable modern tech stack for future growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-green-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Web Solutions</h2>
                        <p className="text-slate-600">Everything you need to establish a dominant online presence.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
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
                            Answers to common questions about our web development services.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-blue-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 hover:no-underline py-6 text-lg">
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

            {/* 10. Strong CTA Section */}
            <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Don't let outdated technology hold you back. Let's build a website that drives real growth for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg' })}
                        >
                            Book a Free Consultation
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-blue-400 text-white hover:bg-blue-700' })}
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
                        "serviceType": "Web Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "areaServed": ["United States", "United Kingdom", "Canada", "United Arab Emirates", "India"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Web Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Website Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Application Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "eCommerce Solutions"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "CMS Development"
                                    }
                                }
                            ]
                        },
                        "description": "Expert web development services using Next.js and React. We build fast, scalable, and SEO-optimized professional websites.",
                        "url": "https://epsilon-technology.com/services/web-development"
                    })
                }}
            />
        </main>
    );
}
