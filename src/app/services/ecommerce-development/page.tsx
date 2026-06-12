import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { ShoppingCart, CreditCard, ShieldCheck, BarChart3, Globe, Truck } from "lucide-react";
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
    title: "Hire Expert eCommerce Developers | Custom Online Store Development",
    description: "Boost your sales with expert eCommerce development services. We build high-converting online stores using Shopify, WooCommerce, and custom Next.js headless solutions.",
    keywords: ["ecommerce developers for hire", "ecommerce website development", "Shopify experts", "custom ecommerce solutions", "online store builders"],
    openGraph: {
        title: "eCommerce Development Services | Epsilon Technology",
        description: "Scale your online brand with robust, high-performance ecommerce solutions built for conversion.",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/services/ecommerce-development/',
    }
};

const serviceHighlights = [
    {
        title: "Custom Storefront Design",
        description: "Unique, brand-centric designs that differentiate you from competitors.",
        icon: ShoppingCart
    },
    {
        title: "Platform Migration",
        description: "Seamlessly move your store to Shopify, WooCommerce, or a custom stack.",
        icon: Globe
    },
    {
        title: "Payment Gateway Integration",
        description: "Secure integration with Stripe, PayPal, Razorpay, and more.",
        icon: CreditCard
    },
    {
        title: "Inventory Management",
        description: "Automated systems to track stock levels and manage orders efficiently.",
        icon: Truck
    },
    {
        title: "Speed Optimization",
        description: "Faster load times mean higher conversion rates. We optimize every pixel.",
        icon: BarChart3
    },
    {
        title: "Security & Compliance",
        description: "SSL, PCI compliance, and data protection to keep your customers safe.",
        icon: ShieldCheck
    }
];

const faqs = [
    {
        question: "Which platform is best for my store?",
        answer: "It depends. For quick setups, Shopify is great. For full control and scale, a custom Next.js solution is superior. We help you choose based on your specific needs."
    },
    {
        question: "Can you integrate with my ERP/CRM?",
        answer: "Yes, we build custom APIs to connect your online store with your existing ERP, CRM (like Salesforce or HubSpot), and inventory systems."
    },
    {
        question: "Is the store mobile-friendly?",
        answer: "Absolutely. We follow a mobile-first approach, ensuring your store works perfectly on smartphones where most shopping happens."
    },
    {
        question: "How do you handle payments?",
        answer: "We integrate trusted third-party gateways like Stripe and PayPal. We ensure all transactions are encrypted and secure."
    }
];

export default function EcommerceDevelopment() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                eCommerce Development
                                <span className="block text-emerald-600">That Converts</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Hire top eCommerce developers to build your online store. Whether it's Shopify, WooCommerce, or a custom Next.js solution, we help you sell more online globally.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200' })}
                                >
                                    Build Your Store
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    See Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.webp" // Placeholder
                                    alt="eCommerce Development"
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
                            <h3 className="text-2xl font-bold text-red-900 mb-6">Why Stores Lose Sales</h3>
                            <ul className="space-y-4">
                                {[
                                    "Slow page load times increasing bounce rate",
                                    "Complicated checkout process causing abandonment",
                                    "Poor mobile design frustrating users",
                                    "Security warnings scaring customers away"
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
                        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Our Conversion Focus</h3>
                            <ul className="space-y-4">
                                {[
                                    "Sub-second load times for instant browsing",
                                    "Streamlined one-page checkouts",
                                    "Responsive design that works on any device",
                                    "Bank-grade security implementation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-emerald-700">
                                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete eCommerce Ecosystem</h2>
                        <p className="text-slate-600">We build more than just websites; we build sales engines.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
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
                            eCommerce FAQ
                        </h2>
                        <p className="text-lg text-slate-600">
                            Answers to common questions about selling online.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-emerald-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 hover:no-underline py-6 text-lg">
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
            <section id="contact" className="py-24 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Sell More?</h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join hundreds of successful merchants powered by Epsilon Technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-emerald-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Book a Consultation
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-emerald-400 text-white hover:bg-emerald-700' })}
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
