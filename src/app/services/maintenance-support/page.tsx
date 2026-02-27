import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { ShieldCheck, Activity, RefreshCw, Zap, Server, LifeBuoy, Database } from "lucide-react";
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
    title: "Professional Website Maintenance & Support | 24/7 Security Monitoring",
    description: "Ensure your website is always secure, fast, and updated. We provide expert maintenance, regular backups, and 24/7 monitoring for peace of mind.",
    keywords: ["website maintenance services", "app support", "wordpress maintenance", "server monitoring", "security updates"],
    openGraph: {
        title: "Website Maintenance & Support Services | Epsilon Technology",
        description: "Keep your digital presence secure and high-performing with our proactive expert support and 24/7 monitoring.",
    },
    alternates: {
        canonical: 'https://www.epsilon-technology.com/services/maintenance-support/',
    }
};

const serviceHighlights = [
    {
        title: "24/7 Uptime Monitoring",
        description: "We keep an eye on your site 24/7. If it goes down, we know instantly and fix it.",
        icon: Activity
    },
    {
        title: "Security Patches",
        description: "Regular updates to plugins, CMS, and server software to close security loopholes.",
        icon: ShieldCheck
    },
    {
        title: "Speed Optimization",
        description: "Continuous performance tuning to ensure your site loads fast and passes Core Web Vitals.",
        icon: Zap
    },
    {
        title: "Regular Backups",
        description: "Daily or weekly off-site backups so you never lose your data.",
        icon: Database
    },
    {
        title: "Content Updates",
        description: "Need to change text or images? Just send us a request and we'll handle it.",
        icon: RefreshCw
    },
    {
        title: "Priority Support",
        description: "Direct access to our developers for urgent issues and troubleshooting.",
        icon: LifeBuoy
    }
];

const faqs = [
    {
        question: "Do I need a maintenance plan?",
        answer: "If your business relies on your website, yes. Digital products need regular care to stay secure and fast. Without it, you risk hacks, downtime, and broken features."
    },
    {
        question: "What happens if my site gets hacked?",
        answer: "If you are on our maintenance plan, we will clean up the malware and restore your site from a clean backup at no extra cost."
    },
    {
        question: "Can I use unused hours next month?",
        answer: "Our maintenance plans are retainer-based to ensure availability, so hours typically do not roll over. However, we are flexible with active projects."
    },
    {
        question: "Do you support websites you didn't build?",
        answer: "Yes! We start with a comprehensive site audit to understand your code and infrastructure before taking over management."
    }
];

export default function MaintenanceSupport() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-amber-100 rounded-full blur-[100px] opacity-40" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                Website Maintenance & Support
                                <span className="block text-amber-600">Peace of Mind, 24/7</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Stop worrying about updates, backups, and security. We handle the technical side so you can focus on running your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-amber-600 hover:bg-amber-700 hover:shadow-amber-200' })}
                                >
                                    View Plans
                                </Link>
                                <Link
                                    href="#faqs"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.png" // Placeholder
                                    alt="Maintenance Services"
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
                            <h3 className="text-2xl font-bold text-red-900 mb-6">The Risks of Neglect</h3>
                            <ul className="space-y-4">
                                {[
                                    "Security vulnerabilities leading to hacks",
                                    "Slow loading times hurting Google rankings",
                                    "Broken forms and checkout flows losing sales",
                                    "Outdated plugins breaking site functionality"
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
                        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                            <h3 className="text-2xl font-bold text-amber-900 mb-6">Our Proactive Support</h3>
                            <ul className="space-y-4">
                                {[
                                    "Daily backups to secure cloud storage",
                                    "Weekly plugin & core updates",
                                    "24/7 security scanning & uptime monitoring",
                                    "Monthly performance reports"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-amber-700">
                                        <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included?</h2>
                        <p className="text-slate-600">Comprehensive care for your digital assets.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Tech Stack (We support these) */}
            <div className="bg-white">
                <TechStack />
            </div>

            {/* 5. Process (Onboarding) */}
            <Process />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. Portfolio (Maybe less relevant, but shows we work with big clients) */}
            {/* Keeping it for consistency */}
            {/* <div id="portfolio">
                <Portfolio />
            </div> */}

            {/* 8. Testimonials */}
            <Testimonials />

            {/* 9. FAQ */}
            <section id="faqs" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Support FAQ
                        </h2>
                        <p className="text-lg text-slate-600">
                            Common questions about our maintenance packages.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-amber-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-amber-600 hover:no-underline py-6 text-lg">
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
            <section id="contact" className="py-24 bg-amber-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Secure Your Website Today</h2>
                    <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
                        Don't wait for a crash to think about maintenance. Protect your investment now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-amber-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            View Maintenance Plans
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-amber-400 text-white hover:bg-amber-700' })}
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
